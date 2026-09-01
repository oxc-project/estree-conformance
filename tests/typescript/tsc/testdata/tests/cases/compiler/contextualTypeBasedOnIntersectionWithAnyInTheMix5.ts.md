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
        "name": "ComputedGetter",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "oldValue",
            "optional": true,
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
                  "start": 37,
                  "end": 38
                },
                "typeArguments": null,
                "start": 37,
                "end": 38
              },
              "start": 35,
              "end": 38
            },
            "start": 26,
            "end": 38
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
              "start": 43,
              "end": 44
            },
            "typeArguments": null,
            "start": 43,
            "end": 44
          },
          "start": 40,
          "end": 44
        },
        "start": 25,
        "end": 44
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComputedOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 66
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
          "start": 69,
          "end": 75
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 76,
              "end": 82
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedGetter",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 98
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 99,
                    "end": 102
                  }
                ],
                "start": 98,
                "end": 103
              },
              "start": 84,
              "end": 103
            }
          ],
          "start": 75,
          "end": 104
        },
        "start": 69,
        "end": 104
      },
      "declare": false,
      "start": 46,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractComputedReturns",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 134
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
              "start": 135,
              "end": 136
            },
            "constraint": {
              "type": "TSAnyKeyword",
              "start": 145,
              "end": 148
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 148
          }
        ],
        "start": 134,
        "end": 149
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null,
          "start": 157,
          "end": 160
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
              "start": 170,
              "end": 171
            },
            "typeArguments": null,
            "start": 170,
            "end": 171
          },
          "start": 164,
          "end": 171
        },
        "nameType": null,
        "typeAnnotation": {
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
                "start": 174,
                "end": 175
              },
              "typeArguments": null,
              "start": 174,
              "end": 175
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 179
              },
              "typeArguments": null,
              "start": 176,
              "end": 179
            },
            "start": 174,
            "end": 180
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
                  "start": 193,
                  "end": 197
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 199,
                      "end": 202
                    },
                    "start": 199,
                    "end": 204
                  },
                  "start": 197,
                  "end": 204
                },
                "value": null,
                "start": 190,
                "end": 204
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TReturn",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 222
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 215,
                  "end": 222
                },
                "start": 209,
                "end": 222
              },
              "start": 206,
              "end": 222
            },
            "start": 189,
            "end": 222
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "TReturn",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 236
            },
            "typeArguments": null,
            "start": 229,
            "end": 236
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 243,
            "end": 248
          },
          "start": 174,
          "end": 248
        },
        "optional": false,
        "readonly": null,
        "start": 152,
        "end": 251
      },
      "declare": false,
      "start": 107,
      "end": 252
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptionsBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 264,
        "end": 284
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
              "start": 285,
              "end": 286
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 285,
            "end": 286
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 289
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 313
              },
              "typeArguments": null,
              "start": 298,
              "end": 313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 288,
            "end": 313
          }
        ],
        "start": 284,
        "end": 314
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 323
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
                  "start": 326,
                  "end": 327
                },
                "typeArguments": null,
                "start": 326,
                "end": 327
              },
              "start": 324,
              "end": 327
            },
            "accessibility": null,
            "static": false,
            "start": 319,
            "end": 328
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "computed",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 339
            },
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
                  "start": 342,
                  "end": 343
                },
                "typeArguments": null,
                "start": 342,
                "end": 343
              },
              "start": 340,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 331,
            "end": 344
          }
        ],
        "start": 315,
        "end": 346
      },
      "declare": false,
      "start": 254,
      "end": 346
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentPublicInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 376
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
              "start": 377,
              "end": 378
            },
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 381,
              "end": 383
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 377,
            "end": 383
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 386
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 410
              },
              "typeArguments": null,
              "start": 395,
              "end": 410
            },
            "default": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 413,
              "end": 415
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 415
          }
        ],
        "start": 376,
        "end": 416
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 420
            },
            "typeArguments": null,
            "start": 419,
            "end": 420
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtractComputedReturns",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 447
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
                    "start": 448,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 448,
                  "end": 449
                }
              ],
              "start": 447,
              "end": 450
            },
            "start": 425,
            "end": 450
          }
        ],
        "start": 419,
        "end": 450
      },
      "declare": false,
      "start": 348,
      "end": 451
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 474
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
              "start": 478,
              "end": 479
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 482,
              "end": 485
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 478,
            "end": 485
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 489,
              "end": 490
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComputedOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 499,
                "end": 514
              },
              "typeArguments": null,
              "start": 499,
              "end": 514
            },
            "default": {
              "type": "TSAnyKeyword",
              "start": 517,
              "end": 520
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 489,
            "end": 520
          }
        ],
        "start": 474,
        "end": 523
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ComponentOptionsBase",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 546
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 548
                  },
                  "typeArguments": null,
                  "start": 547,
                  "end": 548
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 550,
                    "end": 551
                  },
                  "typeArguments": null,
                  "start": 550,
                  "end": 551
                }
              ],
              "start": 546,
              "end": 552
            },
            "start": 526,
            "end": 552
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 563
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ComponentPublicInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 587
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 588,
                          "end": 589
                        },
                        "typeArguments": null,
                        "start": 588,
                        "end": 589
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 591,
                          "end": 592
                        },
                        "typeArguments": null,
                        "start": 591,
                        "end": 592
                      }
                    ],
                    "start": 587,
                    "end": 593
                  },
                  "start": 564,
                  "end": 593
                }
              ],
              "start": 563,
              "end": 594
            },
            "start": 555,
            "end": 594
          }
        ],
        "start": 526,
        "end": 594
      },
      "declare": false,
      "start": 453,
      "end": 595
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "App",
        "optional": false,
        "typeAnnotation": null,
        "start": 607,
        "end": 610
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "mixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 620
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ComponentOptions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 644
                    },
                    "typeArguments": null,
                    "start": 628,
                    "end": 644
                  },
                  "start": 626,
                  "end": 644
                },
                "start": 621,
                "end": 644
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 647,
                "end": 651
              },
              "start": 645,
              "end": 651
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 615,
            "end": 652
          }
        ],
        "start": 611,
        "end": 654
      },
      "declare": false,
      "start": 597,
      "end": 654
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InjectionKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 666,
        "end": 678
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
              "start": 679,
              "end": 680
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 679,
            "end": 680
          }
        ],
        "start": 678,
        "end": 681
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 690,
            "end": 696
          },
          "typeArguments": null,
          "start": 690,
          "end": 696
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 697,
        "end": 699
      },
      "declare": false,
      "start": 656,
      "end": 699
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Ref",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 714
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
              "start": 715,
              "end": 716
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 715,
            "end": 716
          }
        ],
        "start": 714,
        "end": 717
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
              "name": "_v",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 724
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
                  "start": 726,
                  "end": 727
                },
                "typeArguments": null,
                "start": 726,
                "end": 727
              },
              "start": 724,
              "end": 727
            },
            "accessibility": null,
            "static": false,
            "start": 722,
            "end": 728
          }
        ],
        "start": 718,
        "end": 730
      },
      "declare": false,
      "start": 701,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reactive",
        "optional": false,
        "typeAnnotation": null,
        "start": 749,
        "end": 757
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
              "start": 758,
              "end": 759
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 768,
              "end": 774
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 758,
            "end": 774
          }
        ],
        "start": 757,
        "end": 775
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
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
                "start": 784,
                "end": 785
              },
              "typeArguments": null,
              "start": 784,
              "end": 785
            },
            "start": 782,
            "end": 785
          },
          "start": 776,
          "end": 785
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Ref",
            "optional": false,
            "typeAnnotation": null,
            "start": 788,
            "end": 791
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
                  "start": 792,
                  "end": 793
                },
                "typeArguments": null,
                "start": 792,
                "end": 793
              }
            ],
            "start": 791,
            "end": 794
          },
          "start": 788,
          "end": 794
        },
        "start": 786,
        "end": 794
      },
      "body": null,
      "expression": false,
      "start": 732,
      "end": 795
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThemeInstance",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 820
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
              "start": 834,
              "end": 838
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
                  "start": 840,
                  "end": 848
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Ref",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 852
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 853,
                            "end": 859
                          }
                        ],
                        "start": 852,
                        "end": 860
                      },
                      "start": 849,
                      "end": 860
                    }
                  ],
                  "start": 848,
                  "end": 861
                },
                "start": 840,
                "end": 861
              },
              "start": 838,
              "end": 861
            },
            "accessibility": null,
            "static": false,
            "start": 825,
            "end": 862
          }
        ],
        "start": 821,
        "end": 864
      },
      "declare": false,
      "start": 797,
      "end": 864
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
            "name": "ThemeSymbol",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "InjectionKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 893,
                  "end": 905
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThemeInstance",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 919
                      },
                      "typeArguments": null,
                      "start": 906,
                      "end": 919
                    }
                  ],
                  "start": 905,
                  "end": 920
                },
                "start": 893,
                "end": 920
              },
              "start": 891,
              "end": 920
            },
            "start": 880,
            "end": 920
          },
          "init": null,
          "definite": false,
          "start": 880,
          "end": 920
        }
      ],
      "declare": true,
      "start": 866,
      "end": 921
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "inject",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 946
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentPublicInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 979
              },
              "typeArguments": null,
              "start": 956,
              "end": 979
            },
            "start": 954,
            "end": 979
          },
          "start": 950,
          "end": 979
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
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
                    "name": "InjectionKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 988,
                    "end": 1000
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 1001,
                        "end": 1004
                      }
                    ],
                    "start": 1000,
                    "end": 1005
                  },
                  "start": 988,
                  "end": 1005
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1008,
                  "end": 1014
                }
              ],
              "start": 988,
              "end": 1014
            },
            "start": 986,
            "end": 1014
          },
          "start": 983,
          "end": 1014
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1019,
          "end": 1022
        },
        "start": 1017,
        "end": 1022
      },
      "body": null,
      "expression": false,
      "start": 923,
      "end": 1023
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
            "name": "app",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "App",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1044,
                  "end": 1047
                },
                "typeArguments": null,
                "start": 1044,
                "end": 1047
              },
              "start": 1042,
              "end": 1047
            },
            "start": 1039,
            "end": 1047
          },
          "init": null,
          "definite": false,
          "start": 1039,
          "end": 1047
        }
      ],
      "declare": true,
      "start": 1025,
      "end": 1048
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "app",
            "optional": false,
            "typeAnnotation": null,
            "start": 1049,
            "end": 1052
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 1053,
            "end": 1058
          },
          "optional": false,
          "computed": false,
          "start": 1049,
          "end": 1058
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
                  "name": "computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1063,
                  "end": 1071
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
                        "name": "$vuetify",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1079,
                        "end": 1087
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
                                  "name": "reactive",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1145,
                                  "end": 1153
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
                                          "name": "theme",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1164,
                                          "end": 1169
                                        },
                                        "value": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "inject",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1171,
                                              "end": 1177
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "call",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1178,
                                              "end": 1182
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 1171,
                                            "end": 1182
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 1183,
                                              "end": 1187
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ThemeSymbol",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1189,
                                              "end": 1200
                                            }
                                          ],
                                          "optional": false,
                                          "start": 1171,
                                          "end": 1201
                                        },
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "optional": false,
                                        "start": 1164,
                                        "end": 1201
                                      }
                                    ],
                                    "start": 1154,
                                    "end": 1210
                                  }
                                ],
                                "optional": false,
                                "start": 1145,
                                "end": 1211
                              },
                              "start": 1138,
                              "end": 1212
                            }
                          ],
                          "start": 1090,
                          "end": 1218
                        },
                        "expression": false,
                        "start": 1087,
                        "end": 1218
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1079,
                      "end": 1218
                    }
                  ],
                  "start": 1073,
                  "end": 1223
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1063,
                "end": 1223
              }
            ],
            "start": 1059,
            "end": 1226
          }
        ],
        "optional": false,
        "start": 1049,
        "end": 1227
      },
      "directive": null,
      "start": 1049,
      "end": 1228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1228
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
    "value": "ComputedGetter",
    "start": 5,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 26,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 40,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 46,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "ComputedOptions",
    "start": 51,
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
    "value": "Record",
    "start": 69,
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
    "value": "string",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "ComputedGetter",
    "start": 84,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 107,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "ExtractComputedReturns",
    "start": 112,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "any",
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
    "value": "=",
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
    "value": "[",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 157,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 161,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 190,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 193,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 206,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 209,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "TReturn",
    "start": 215,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "TReturn",
    "start": 229,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 254,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "ComponentOptionsBase",
    "start": 264,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 290,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ComputedOptions",
    "start": 298,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 319,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 331,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 348,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "ComponentPublicInstance",
    "start": 353,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 377,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "C",
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
    "type": "Identifier",
    "value": "ComputedOptions",
    "start": 395,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
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
    "value": "D",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "ExtractComputedReturns",
    "start": 425,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 447,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 453,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "ComponentOptions",
    "start": 458,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 489,
    "end": 490
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 491,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "ComputedOptions",
    "start": 499,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 524,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "ComponentOptionsBase",
    "start": 526,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "ThisType",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "ComponentPublicInstance",
    "start": 564,
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
    "value": "D",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 597,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 607,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 615,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 621,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "ComponentOptions",
    "start": 628,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 647,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 656,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 666,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 680,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 682,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 690,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 701,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "_v",
    "start": 722,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 732,
    "end": 739
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 740,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "reactive",
    "start": 749,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 760,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 768,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 776,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
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
    "value": "Ref",
    "start": 788,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 797,
    "end": 806
  },
  {
    "type": "Identifier",
    "value": "ThemeInstance",
    "start": 807,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 825,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 834,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 838,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 840,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "Ref",
    "start": 849,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 853,
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
    "value": ">",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 866,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 874,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "ThemeSymbol",
    "start": 880,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 893,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "ThemeInstance",
    "start": 906,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 920,
    "end": 921
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
    "value": "inject",
    "start": 940,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 950,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "ComponentPublicInstance",
    "start": 956,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 983,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "InjectionKey",
    "start": 988,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1008,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1025,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1033,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 1039,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "App",
    "start": 1044,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "app",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 1053,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "computed",
    "start": 1063,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Identifier",
    "value": "$vuetify",
    "start": 1079,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1138,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "reactive",
    "start": 1145,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Identifier",
    "value": "theme",
    "start": 1164,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "inject",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 1178,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1182,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1183,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "ThemeSymbol",
    "start": 1189,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1227,
    "end": 1228
  }
]
```
