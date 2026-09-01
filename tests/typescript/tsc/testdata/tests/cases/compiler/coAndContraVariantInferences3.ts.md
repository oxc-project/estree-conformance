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
        "name": "DeprecationOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 28
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
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 52
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 65,
                "end": 72
              },
              "start": 63,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 73
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 85,
                "end": 91
              },
              "start": 83,
              "end": 91
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 92
          }
        ],
        "start": 29,
        "end": 94
      },
      "declare": false,
      "start": 0,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnionToIntersection",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 120
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
          }
        ],
        "start": 120,
        "end": 123
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeArguments": null,
            "start": 127,
            "end": 128
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 137,
            "end": 140
          },
          "trueType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 148
                    },
                    "typeArguments": null,
                    "start": 147,
                    "end": 148
                  },
                  "start": 145,
                  "end": 148
                },
                "start": 144,
                "end": 148
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 153,
                "end": 157
              },
              "start": 150,
              "end": 157
            },
            "start": 143,
            "end": 157
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 160,
            "end": 165
          },
          "start": 127,
          "end": 165
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 186,
                      "end": 187
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 186,
                    "end": 187
                  },
                  "start": 180,
                  "end": 187
                },
                "start": 178,
                "end": 187
              },
              "start": 177,
              "end": 187
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 192,
              "end": 196
            },
            "start": 189,
            "end": 196
          },
          "start": 176,
          "end": 196
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 200,
            "end": 201
          },
          "typeArguments": null,
          "start": 200,
          "end": 201
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 204,
          "end": 209
        },
        "start": 126,
        "end": 209
      },
      "declare": false,
      "start": 96,
      "end": 210
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadDefinitions",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 236
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 251,
          "end": 252
        },
        "constraint": {
          "type": "TSNumberKeyword",
          "start": 256,
          "end": 262
        },
        "nameType": null,
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
                "start": 269,
                "end": 273
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 275,
                    "end": 278
                  },
                  "start": 275,
                  "end": 280
                },
                "start": 273,
                "end": 280
              },
              "value": null,
              "start": 266,
              "end": 280
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 285,
              "end": 288
            },
            "start": 282,
            "end": 288
          },
          "start": 265,
          "end": 288
        },
        "optional": false,
        "readonly": true,
        "start": 239,
        "end": 291
      },
      "declare": false,
      "start": 212,
      "end": 292
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 299,
        "end": 313
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
              "start": 314,
              "end": 315
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 324,
                "end": 343
              },
              "typeArguments": null,
              "start": 324,
              "end": 343
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 314,
            "end": 343
          }
        ],
        "start": 313,
        "end": 344
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 372
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
                        "start": 373,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 374
                    }
                  ],
                  "start": 372,
                  "end": 375
                },
                "start": 354,
                "end": 375
              },
              "start": 352,
              "end": 375
            },
            "start": 348,
            "end": 375
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
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 392
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
                        "start": 393,
                        "end": 394
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 394
                    }
                  ],
                  "start": 392,
                  "end": 395
                },
                "start": 380,
                "end": 395
              },
              {
                "type": "TSUndefinedKeyword",
                "start": 398,
                "end": 407
              }
            ],
            "start": 380,
            "end": 407
          },
          "start": 377,
          "end": 407
        },
        "start": 347,
        "end": 407
      },
      "declare": false,
      "start": 294,
      "end": 408
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 427
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
              "start": 428,
              "end": 429
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 457
              },
              "typeArguments": null,
              "start": 438,
              "end": 457
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 457
          }
        ],
        "start": 427,
        "end": 458
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Extract",
          "optional": false,
          "typeAnnotation": null,
          "start": 461,
          "end": 468
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
              "start": 469,
              "end": 476
            },
            {
              "type": "TSNumberKeyword",
              "start": 478,
              "end": 484
            }
          ],
          "start": 468,
          "end": 485
        },
        "start": 461,
        "end": 485
      },
      "declare": false,
      "start": 410,
      "end": 486
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 511
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
              "start": 512,
              "end": 513
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 541
              },
              "typeArguments": null,
              "start": 522,
              "end": 541
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 541
          }
        ],
        "start": 511,
        "end": 542
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Parameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 555
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 576
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
                          "start": 577,
                          "end": 578
                        },
                        "typeArguments": null,
                        "start": 577,
                        "end": 578
                      }
                    ],
                    "start": 576,
                    "end": 579
                  },
                  "start": 564,
                  "end": 579
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
                      "start": 582,
                      "end": 583
                    },
                    "typeArguments": null,
                    "start": 582,
                    "end": 583
                  },
                  "indexType": {
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
                  "start": 582,
                  "end": 586
                },
                "optional": false,
                "readonly": null,
                "start": 556,
                "end": 589
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 590,
                  "end": 602
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
                        "start": 603,
                        "end": 604
                      },
                      "typeArguments": null,
                      "start": 603,
                      "end": 604
                    }
                  ],
                  "start": 602,
                  "end": 605
                },
                "start": 590,
                "end": 605
              },
              "start": 556,
              "end": 606
            }
          ],
          "start": 555,
          "end": 607
        },
        "start": 545,
        "end": 607
      },
      "declare": false,
      "start": 488,
      "end": 608
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 631
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
              "start": 632,
              "end": 633
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 661
              },
              "typeArguments": null,
              "start": 642,
              "end": 661
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 632,
            "end": 661
          }
        ],
        "start": 631,
        "end": 662
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionToIntersection",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 684
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
                  "start": 685,
                  "end": 686
                },
                "typeArguments": null,
                "start": 685,
                "end": 686
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
                    "start": 693,
                    "end": 694
                  },
                  "typeArguments": null,
                  "start": 693,
                  "end": 694
                },
                "start": 687,
                "end": 694
              },
              "start": 685,
              "end": 695
            }
          ],
          "start": 684,
          "end": 696
        },
        "start": 665,
        "end": 696
      },
      "declare": false,
      "start": 610,
      "end": 697
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBinders",
        "optional": false,
        "typeAnnotation": null,
        "start": 704,
        "end": 719
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
              "start": 720,
              "end": 721
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 730,
                "end": 749
              },
              "typeArguments": null,
              "start": 730,
              "end": 749
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 720,
            "end": 749
          }
        ],
        "start": 719,
        "end": 750
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 756,
          "end": 757
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 773
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
                  "start": 774,
                  "end": 775
                },
                "typeArguments": null,
                "start": 774,
                "end": 775
              }
            ],
            "start": 773,
            "end": 776
          },
          "start": 761,
          "end": 776
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "OverloadParameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 786,
                    "end": 804
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
                          "start": 805,
                          "end": 806
                        },
                        "typeArguments": null,
                        "start": 805,
                        "end": 806
                      }
                    ],
                    "start": 804,
                    "end": 807
                  },
                  "start": 786,
                  "end": 807
                },
                "start": 784,
                "end": 807
              },
              "start": 780,
              "end": 807
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 812,
                  "end": 819
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 822,
                  "end": 831
                }
              ],
              "start": 812,
              "end": 831
            },
            "start": 809,
            "end": 831
          },
          "start": 779,
          "end": 831
        },
        "optional": false,
        "readonly": null,
        "start": 753,
        "end": 834
      },
      "declare": false,
      "start": 699,
      "end": 835
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadDeprecations",
        "optional": false,
        "typeAnnotation": null,
        "start": 842,
        "end": 862
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
              "start": 863,
              "end": 864
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 892
              },
              "typeArguments": null,
              "start": 873,
              "end": 892
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 863,
            "end": 892
          }
        ],
        "start": 862,
        "end": 893
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 899,
          "end": 900
        },
        "constraint": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 916
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
                  "start": 917,
                  "end": 918
                },
                "typeArguments": null,
                "start": 917,
                "end": 918
              }
            ],
            "start": 916,
            "end": 919
          },
          "start": 904,
          "end": 919
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "DeprecationOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 923,
            "end": 941
          },
          "typeArguments": null,
          "start": 923,
          "end": 941
        },
        "optional": true,
        "readonly": null,
        "start": 896,
        "end": 944
      },
      "declare": false,
      "start": 837,
      "end": 945
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createOverload",
        "optional": false,
        "typeAnnotation": null,
        "start": 964,
        "end": 978
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
              "start": 979,
              "end": 980
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 989,
                "end": 1008
              },
              "typeArguments": null,
              "start": 989,
              "end": 1008
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 979,
            "end": 1008
          }
        ],
        "start": 978,
        "end": 1009
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
              "type": "TSStringKeyword",
              "start": 1016,
              "end": 1022
            },
            "start": 1014,
            "end": 1022
          },
          "start": 1010,
          "end": 1022
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
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
                "start": 1035,
                "end": 1036
              },
              "typeArguments": null,
              "start": 1035,
              "end": 1036
            },
            "start": 1033,
            "end": 1036
          },
          "start": 1024,
          "end": 1036
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null,
                "start": 1046,
                "end": 1061
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
                      "start": 1062,
                      "end": 1063
                    },
                    "typeArguments": null,
                    "start": 1062,
                    "end": 1063
                  }
                ],
                "start": 1061,
                "end": 1064
              },
              "start": 1046,
              "end": 1064
            },
            "start": 1044,
            "end": 1064
          },
          "start": 1038,
          "end": 1064
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "deprecations",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDeprecations",
                "optional": false,
                "typeAnnotation": null,
                "start": 1081,
                "end": 1101
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
                      "start": 1102,
                      "end": 1103
                    },
                    "typeArguments": null,
                    "start": 1102,
                    "end": 1103
                  }
                ],
                "start": 1101,
                "end": 1104
              },
              "start": 1081,
              "end": 1104
            },
            "start": 1079,
            "end": 1104
          },
          "start": 1066,
          "end": 1104
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UnionToIntersection",
            "optional": false,
            "typeAnnotation": null,
            "start": 1107,
            "end": 1126
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
                    "start": 1127,
                    "end": 1128
                  },
                  "typeArguments": null,
                  "start": 1127,
                  "end": 1128
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
                      "start": 1135,
                      "end": 1136
                    },
                    "typeArguments": null,
                    "start": 1135,
                    "end": 1136
                  },
                  "start": 1129,
                  "end": 1136
                },
                "start": 1127,
                "end": 1137
              }
            ],
            "start": 1126,
            "end": 1138
          },
          "start": 1107,
          "end": 1138
        },
        "start": 1105,
        "end": 1138
      },
      "body": null,
      "expression": false,
      "start": 947,
      "end": 1139
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createBinder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1170
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
              "start": 1171,
              "end": 1172
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1181,
                "end": 1200
              },
              "typeArguments": null,
              "start": 1181,
              "end": 1200
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1171,
            "end": 1200
          }
        ],
        "start": 1170,
        "end": 1201
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "overloads",
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
                "start": 1213,
                "end": 1214
              },
              "typeArguments": null,
              "start": 1213,
              "end": 1214
            },
            "start": 1211,
            "end": 1214
          },
          "start": 1202,
          "end": 1214
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "binder",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadBinders",
                "optional": false,
                "typeAnnotation": null,
                "start": 1224,
                "end": 1239
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
                      "start": 1240,
                      "end": 1241
                    },
                    "typeArguments": null,
                    "start": 1240,
                    "end": 1241
                  }
                ],
                "start": 1239,
                "end": 1242
              },
              "start": 1224,
              "end": 1242
            },
            "start": 1222,
            "end": 1242
          },
          "start": 1216,
          "end": 1242
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBinder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1245,
            "end": 1259
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
                  "start": 1260,
                  "end": 1261
                },
                "typeArguments": null,
                "start": 1260,
                "end": 1261
              }
            ],
            "start": 1259,
            "end": 1262
          },
          "start": 1245,
          "end": 1262
        },
        "start": 1243,
        "end": 1262
      },
      "body": null,
      "expression": false,
      "start": 1141,
      "end": 1263
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1275,
        "end": 1290
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
              "name": "overload",
              "optional": false,
              "typeAnnotation": null,
              "start": 1297,
              "end": 1305
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
                    "start": 1306,
                    "end": 1307
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadDefinitions",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1335
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1335
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1306,
                  "end": 1335
                }
              ],
              "start": 1305,
              "end": 1336
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "overloads",
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
                      "start": 1348,
                      "end": 1349
                    },
                    "typeArguments": null,
                    "start": 1348,
                    "end": 1349
                  },
                  "start": 1346,
                  "end": 1349
                },
                "start": 1337,
                "end": 1349
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BindableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1352,
                  "end": 1375
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
                        "start": 1376,
                        "end": 1377
                      },
                      "typeArguments": null,
                      "start": 1376,
                      "end": 1377
                    }
                  ],
                  "start": 1375,
                  "end": 1378
                },
                "start": 1352,
                "end": 1378
              },
              "start": 1350,
              "end": 1378
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1297,
            "end": 1379
          }
        ],
        "start": 1291,
        "end": 1381
      },
      "declare": false,
      "start": 1265,
      "end": 1381
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BindableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1393,
        "end": 1416
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
              "start": 1417,
              "end": 1418
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1427,
                "end": 1446
              },
              "typeArguments": null,
              "start": 1427,
              "end": 1446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1417,
            "end": 1446
          }
        ],
        "start": 1416,
        "end": 1447
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
              "name": "bind",
              "optional": false,
              "typeAnnotation": null,
              "start": 1454,
              "end": 1458
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "binder",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadBinders",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1482
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
                            "start": 1483,
                            "end": 1484
                          },
                          "typeArguments": null,
                          "start": 1483,
                          "end": 1484
                        }
                      ],
                      "start": 1482,
                      "end": 1485
                    },
                    "start": 1467,
                    "end": 1485
                  },
                  "start": 1465,
                  "end": 1485
                },
                "start": 1459,
                "end": 1485
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BoundOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1488,
                  "end": 1508
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
                        "start": 1509,
                        "end": 1510
                      },
                      "typeArguments": null,
                      "start": 1509,
                      "end": 1510
                    }
                  ],
                  "start": 1508,
                  "end": 1511
                },
                "start": 1488,
                "end": 1511
              },
              "start": 1486,
              "end": 1511
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1454,
            "end": 1512
          }
        ],
        "start": 1448,
        "end": 1514
      },
      "declare": false,
      "start": 1383,
      "end": 1514
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FinishableOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1526,
        "end": 1551
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
              "start": 1552,
              "end": 1553
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1562,
                "end": 1581
              },
              "typeArguments": null,
              "start": 1562,
              "end": 1581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1552,
            "end": 1581
          }
        ],
        "start": 1551,
        "end": 1582
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
              "name": "finish",
              "optional": false,
              "typeAnnotation": null,
              "start": 1589,
              "end": 1595
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1599,
                  "end": 1615
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
                        "start": 1616,
                        "end": 1617
                      },
                      "typeArguments": null,
                      "start": 1616,
                      "end": 1617
                    }
                  ],
                  "start": 1615,
                  "end": 1618
                },
                "start": 1599,
                "end": 1618
              },
              "start": 1597,
              "end": 1618
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1589,
            "end": 1619
          }
        ],
        "start": 1583,
        "end": 1621
      },
      "declare": false,
      "start": 1516,
      "end": 1621
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BoundOverloadBuilder",
        "optional": false,
        "typeAnnotation": null,
        "start": 1633,
        "end": 1653
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
              "start": 1654,
              "end": 1655
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "OverloadDefinitions",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1664,
              "end": 1683
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1654,
            "end": 1683
          }
        ],
        "start": 1653,
        "end": 1684
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "FinishableOverloadBuilder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1693,
            "end": 1718
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
                  "start": 1719,
                  "end": 1720
                },
                "typeArguments": null,
                "start": 1719,
                "end": 1720
              }
            ],
            "start": 1718,
            "end": 1721
          },
          "start": 1693,
          "end": 1721
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "deprecate",
              "optional": false,
              "typeAnnotation": null,
              "start": 1728,
              "end": 1737
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecations",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OverloadDeprecations",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1752,
                      "end": 1772
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
                            "start": 1773,
                            "end": 1774
                          },
                          "typeArguments": null,
                          "start": 1773,
                          "end": 1774
                        }
                      ],
                      "start": 1772,
                      "end": 1775
                    },
                    "start": 1752,
                    "end": 1775
                  },
                  "start": 1750,
                  "end": 1775
                },
                "start": 1738,
                "end": 1775
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FinishableOverloadBuilder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1778,
                  "end": 1803
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
                        "start": 1804,
                        "end": 1805
                      },
                      "typeArguments": null,
                      "start": 1804,
                      "end": 1805
                    }
                  ],
                  "start": 1803,
                  "end": 1806
                },
                "start": 1778,
                "end": 1806
              },
              "start": 1776,
              "end": 1806
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1728,
            "end": 1807
          }
        ],
        "start": 1722,
        "end": 1809
      },
      "declare": false,
      "start": 1623,
      "end": 1809
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "buildOverload",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1841
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1848,
              "end": 1854
            },
            "start": 1846,
            "end": 1854
          },
          "start": 1842,
          "end": 1854
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "OverloadBuilder",
            "optional": false,
            "typeAnnotation": null,
            "start": 1857,
            "end": 1872
          },
          "typeArguments": null,
          "start": 1857,
          "end": 1872
        },
        "start": 1855,
        "end": 1872
      },
      "body": null,
      "expression": false,
      "start": 1811,
      "end": 1873
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SyntaxKind",
        "optional": false,
        "typeAnnotation": null,
        "start": 1886,
        "end": 1896
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportDeclaration",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1920
            },
            "initializer": null,
            "computed": false,
            "start": 1903,
            "end": 1920
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Modifier",
              "optional": false,
              "typeAnnotation": null,
              "start": 1926,
              "end": 1934
            },
            "initializer": null,
            "computed": false,
            "start": 1926,
            "end": 1934
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ImportClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 1940,
              "end": 1952
            },
            "initializer": null,
            "computed": false,
            "start": 1940,
            "end": 1952
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AssertClause",
              "optional": false,
              "typeAnnotation": null,
              "start": 1958,
              "end": 1970
            },
            "initializer": null,
            "computed": false,
            "start": 1958,
            "end": 1970
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Decorator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1976,
              "end": 1985
            },
            "initializer": null,
            "computed": false,
            "start": 1976,
            "end": 1985
          }
        ],
        "start": 1897,
        "end": 1987
      },
      "const": true,
      "declare": false,
      "start": 1875,
      "end": 1987
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 1999,
        "end": 2003
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2010,
              "end": 2014
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SyntaxKind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2016,
                  "end": 2026
                },
                "typeArguments": null,
                "start": 2016,
                "end": 2026
              },
              "start": 2014,
              "end": 2026
            },
            "accessibility": null,
            "static": false,
            "start": 2010,
            "end": 2027
          }
        ],
        "start": 2004,
        "end": 2029
      },
      "declare": false,
      "start": 1989,
      "end": 2029
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Declaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2041,
        "end": 2052
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2061,
            "end": 2065
          },
          "typeArguments": null,
          "start": 2061,
          "end": 2065
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
              "name": "_declarationBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2068,
              "end": 2085
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2087,
                "end": 2090
              },
              "start": 2085,
              "end": 2090
            },
            "accessibility": null,
            "static": false,
            "start": 2068,
            "end": 2090
          }
        ],
        "start": 2066,
        "end": 2092
      },
      "declare": false,
      "start": 2031,
      "end": 2092
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Statement",
        "optional": false,
        "typeAnnotation": null,
        "start": 2103,
        "end": 2112
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2121,
            "end": 2125
          },
          "typeArguments": null,
          "start": 2121,
          "end": 2125
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
              "name": "_statementBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2145,
                "end": 2148
              },
              "start": 2143,
              "end": 2148
            },
            "accessibility": null,
            "static": false,
            "start": 2128,
            "end": 2148
          }
        ],
        "start": 2126,
        "end": 2150
      },
      "declare": false,
      "start": 2093,
      "end": 2150
    },
    {
      "type": "EmptyStatement",
      "start": 2150,
      "end": 2151
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Expression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2162,
        "end": 2172
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2181,
            "end": 2185
          },
          "typeArguments": null,
          "start": 2181,
          "end": 2185
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
              "name": "_expressionBrand",
              "optional": false,
              "typeAnnotation": null,
              "start": 2188,
              "end": 2204
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2206,
                "end": 2209
              },
              "start": 2204,
              "end": 2209
            },
            "accessibility": null,
            "static": false,
            "start": 2188,
            "end": 2210
          }
        ],
        "start": 2186,
        "end": 2212
      },
      "declare": false,
      "start": 2152,
      "end": 2212
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportDeclaration",
        "optional": false,
        "typeAnnotation": null,
        "start": 2224,
        "end": 2241
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Statement",
            "optional": false,
            "typeAnnotation": null,
            "start": 2250,
            "end": 2259
          },
          "typeArguments": null,
          "start": 2250,
          "end": 2259
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2262,
              "end": 2266
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2268,
                    "end": 2278
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportDeclaration",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2279,
                    "end": 2296
                  },
                  "start": 2268,
                  "end": 2296
                },
                "typeArguments": null,
                "start": 2268,
                "end": 2296
              },
              "start": 2266,
              "end": 2296
            },
            "accessibility": null,
            "static": false,
            "start": 2262,
            "end": 2297
          }
        ],
        "start": 2260,
        "end": 2299
      },
      "declare": false,
      "start": 2214,
      "end": 2299
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Modifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 2310,
        "end": 2318
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2327,
            "end": 2331
          },
          "typeArguments": null,
          "start": 2327,
          "end": 2331
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2334,
              "end": 2338
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2340,
                    "end": 2350
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Modifier",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2351,
                    "end": 2359
                  },
                  "start": 2340,
                  "end": 2359
                },
                "typeArguments": null,
                "start": 2340,
                "end": 2359
              },
              "start": 2338,
              "end": 2359
            },
            "accessibility": null,
            "static": false,
            "start": 2334,
            "end": 2360
          }
        ],
        "start": 2332,
        "end": 2362
      },
      "declare": false,
      "start": 2300,
      "end": 2362
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Decorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2373,
        "end": 2382
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2391,
            "end": 2395
          },
          "typeArguments": null,
          "start": 2391,
          "end": 2395
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2398,
              "end": 2402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2404,
                    "end": 2414
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Decorator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2415,
                    "end": 2424
                  },
                  "start": 2404,
                  "end": 2424
                },
                "typeArguments": null,
                "start": 2404,
                "end": 2424
              },
              "start": 2402,
              "end": 2424
            },
            "accessibility": null,
            "static": false,
            "start": 2398,
            "end": 2425
          }
        ],
        "start": 2396,
        "end": 2427
      },
      "declare": false,
      "start": 2363,
      "end": 2427
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImportClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2438,
        "end": 2450
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Declaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 2459,
            "end": 2470
          },
          "typeArguments": null,
          "start": 2459,
          "end": 2470
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2473,
              "end": 2477
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2489
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ImportClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2490,
                    "end": 2502
                  },
                  "start": 2479,
                  "end": 2502
                },
                "typeArguments": null,
                "start": 2479,
                "end": 2502
              },
              "start": 2477,
              "end": 2502
            },
            "accessibility": null,
            "static": false,
            "start": 2473,
            "end": 2503
          }
        ],
        "start": 2471,
        "end": 2505
      },
      "declare": false,
      "start": 2428,
      "end": 2505
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AssertClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2516,
        "end": 2528
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2537,
            "end": 2541
          },
          "typeArguments": null,
          "start": 2537,
          "end": 2541
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2548
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "SyntaxKind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2560
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AssertClause",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2561,
                    "end": 2573
                  },
                  "start": 2550,
                  "end": 2573
                },
                "typeArguments": null,
                "start": 2550,
                "end": 2573
              },
              "start": 2548,
              "end": 2573
            },
            "accessibility": null,
            "static": false,
            "start": 2544,
            "end": 2574
          }
        ],
        "start": 2542,
        "end": 2576
      },
      "declare": false,
      "start": 2506,
      "end": 2576
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 2595,
        "end": 2607
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2614,
                "end": 2618
              },
              "typeArguments": null,
              "start": 2614,
              "end": 2618
            },
            "start": 2612,
            "end": 2618
          },
          "start": 2608,
          "end": 2618
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2621,
            "end": 2625
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Expression",
                "optional": false,
                "typeAnnotation": null,
                "start": 2629,
                "end": 2639
              },
              "typeArguments": null,
              "start": 2629,
              "end": 2639
            },
            "start": 2629,
            "end": 2639
          },
          "start": 2621,
          "end": 2639
        },
        "start": 2619,
        "end": 2639
      },
      "body": null,
      "expression": false,
      "start": 2578,
      "end": 2640
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isAssertClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2658,
        "end": 2672
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2679,
                "end": 2683
              },
              "typeArguments": null,
              "start": 2679,
              "end": 2683
            },
            "start": 2677,
            "end": 2683
          },
          "start": 2673,
          "end": 2683
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2686,
            "end": 2690
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AssertClause",
                "optional": false,
                "typeAnnotation": null,
                "start": 2694,
                "end": 2706
              },
              "typeArguments": null,
              "start": 2694,
              "end": 2706
            },
            "start": 2694,
            "end": 2706
          },
          "start": 2686,
          "end": 2706
        },
        "start": 2684,
        "end": 2706
      },
      "body": null,
      "expression": false,
      "start": 2641,
      "end": 2707
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isImportClause",
        "optional": false,
        "typeAnnotation": null,
        "start": 2725,
        "end": 2739
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2746,
                "end": 2750
              },
              "typeArguments": null,
              "start": 2746,
              "end": 2750
            },
            "start": 2744,
            "end": 2750
          },
          "start": 2740,
          "end": 2750
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2753,
            "end": 2757
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportClause",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2773
              },
              "typeArguments": null,
              "start": 2761,
              "end": 2773
            },
            "start": 2761,
            "end": 2773
          },
          "start": 2753,
          "end": 2773
        },
        "start": 2751,
        "end": 2773
      },
      "body": null,
      "expression": false,
      "start": 2708,
      "end": 2774
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isModifier",
        "optional": false,
        "typeAnnotation": null,
        "start": 2792,
        "end": 2802
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2809,
                "end": 2813
              },
              "typeArguments": null,
              "start": 2809,
              "end": 2813
            },
            "start": 2807,
            "end": 2813
          },
          "start": 2803,
          "end": 2813
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2816,
            "end": 2820
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Modifier",
                "optional": false,
                "typeAnnotation": null,
                "start": 2824,
                "end": 2832
              },
              "typeArguments": null,
              "start": 2824,
              "end": 2832
            },
            "start": 2824,
            "end": 2832
          },
          "start": 2816,
          "end": 2832
        },
        "start": 2814,
        "end": 2832
      },
      "body": null,
      "expression": false,
      "start": 2775,
      "end": 2833
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 2851,
        "end": 2862
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 2869,
                "end": 2873
              },
              "typeArguments": null,
              "start": 2869,
              "end": 2873
            },
            "start": 2867,
            "end": 2873
          },
          "start": 2863,
          "end": 2873
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "node",
            "optional": false,
            "typeAnnotation": null,
            "start": 2876,
            "end": 2880
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Decorator",
                "optional": false,
                "typeAnnotation": null,
                "start": 2884,
                "end": 2893
              },
              "typeArguments": null,
              "start": 2884,
              "end": 2893
            },
            "start": 2884,
            "end": 2893
          },
          "start": 2876,
          "end": 2893
        },
        "start": 2874,
        "end": 2893
      },
      "body": null,
      "expression": false,
      "start": 2834,
      "end": 2894
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
            "name": "updateImportDeclaration",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2948,
                              "end": 2965
                            },
                            "typeArguments": null,
                            "start": 2948,
                            "end": 2965
                          },
                          "start": 2946,
                          "end": 2965
                        },
                        "start": 2942,
                        "end": 2965
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2987,
                                      "end": 2995
                                    },
                                    "typeArguments": null,
                                    "start": 2987,
                                    "end": 2995
                                  },
                                  "start": 2987,
                                  "end": 2997
                                },
                                "start": 2978,
                                "end": 2997
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3000,
                                "end": 3009
                              }
                            ],
                            "start": 2978,
                            "end": 3009
                          },
                          "start": 2976,
                          "end": 3009
                        },
                        "start": 2967,
                        "end": 3009
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
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
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3025,
                                  "end": 3037
                                },
                                "typeArguments": null,
                                "start": 3025,
                                "end": 3037
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3040,
                                "end": 3049
                              }
                            ],
                            "start": 3025,
                            "end": 3049
                          },
                          "start": 3023,
                          "end": 3049
                        },
                        "start": 3011,
                        "end": 3049
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3068,
                              "end": 3078
                            },
                            "typeArguments": null,
                            "start": 3068,
                            "end": 3078
                          },
                          "start": 3066,
                          "end": 3078
                        },
                        "start": 3051,
                        "end": 3078
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
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
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3094,
                                  "end": 3106
                                },
                                "typeArguments": null,
                                "start": 3094,
                                "end": 3106
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3109,
                                "end": 3118
                              }
                            ],
                            "start": 3094,
                            "end": 3118
                          },
                          "start": 3092,
                          "end": 3118
                        },
                        "start": 3080,
                        "end": 3118
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3121,
                          "end": 3138
                        },
                        "typeArguments": null,
                        "start": 3121,
                        "end": 3138
                      },
                      "start": 3119,
                      "end": 3138
                    },
                    "start": 2941,
                    "end": 3139
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ImportDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3151,
                              "end": 3168
                            },
                            "typeArguments": null,
                            "start": 3151,
                            "end": 3168
                          },
                          "start": 3149,
                          "end": 3168
                        },
                        "start": 3145,
                        "end": 3168
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "decorators",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Decorator",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3191,
                                      "end": 3200
                                    },
                                    "typeArguments": null,
                                    "start": 3191,
                                    "end": 3200
                                  },
                                  "start": 3191,
                                  "end": 3202
                                },
                                "start": 3182,
                                "end": 3202
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3205,
                                "end": 3214
                              }
                            ],
                            "start": 3182,
                            "end": 3214
                          },
                          "start": 3180,
                          "end": 3214
                        },
                        "start": 3170,
                        "end": 3214
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "modifiers",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "readonly",
                                "typeAnnotation": {
                                  "type": "TSArrayType",
                                  "elementType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Modifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3236,
                                      "end": 3244
                                    },
                                    "typeArguments": null,
                                    "start": 3236,
                                    "end": 3244
                                  },
                                  "start": 3236,
                                  "end": 3246
                                },
                                "start": 3227,
                                "end": 3246
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3249,
                                "end": 3258
                              }
                            ],
                            "start": 3227,
                            "end": 3258
                          },
                          "start": 3225,
                          "end": 3258
                        },
                        "start": 3216,
                        "end": 3258
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "importClause",
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
                                  "name": "ImportClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3274,
                                  "end": 3286
                                },
                                "typeArguments": null,
                                "start": 3274,
                                "end": 3286
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3289,
                                "end": 3298
                              }
                            ],
                            "start": 3274,
                            "end": 3298
                          },
                          "start": 3272,
                          "end": 3298
                        },
                        "start": 3260,
                        "end": 3298
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "moduleSpecifier",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Expression",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3317,
                              "end": 3327
                            },
                            "typeArguments": null,
                            "start": 3317,
                            "end": 3327
                          },
                          "start": 3315,
                          "end": 3327
                        },
                        "start": 3300,
                        "end": 3327
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertClause",
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
                                  "name": "AssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3343,
                                  "end": 3355
                                },
                                "typeArguments": null,
                                "start": 3343,
                                "end": 3355
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3358,
                                "end": 3367
                              }
                            ],
                            "start": 3343,
                            "end": 3367
                          },
                          "start": 3341,
                          "end": 3367
                        },
                        "start": 3329,
                        "end": 3367
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ImportDeclaration",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3370,
                          "end": 3387
                        },
                        "typeArguments": null,
                        "start": 3370,
                        "end": 3387
                      },
                      "start": 3368,
                      "end": 3387
                    },
                    "start": 3144,
                    "end": 3388
                  }
                ],
                "start": 2935,
                "end": 3390
              },
              "start": 2933,
              "end": 3390
            },
            "start": 2910,
            "end": 3390
          },
          "init": null,
          "definite": false,
          "start": 2910,
          "end": 3390
        }
      ],
      "declare": true,
      "start": 2896,
      "end": 3390
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3409,
        "end": 3414
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
              "start": 3415,
              "end": 3416
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3415,
            "end": 3416
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3418,
              "end": 3419
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3428,
                "end": 3429
              },
              "typeArguments": null,
              "start": 3428,
              "end": 3429
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3418,
            "end": 3429
          }
        ],
        "start": 3414,
        "end": 3430
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3447,
                    "end": 3448
                  },
                  "typeArguments": null,
                  "start": 3447,
                  "end": 3448
                },
                "start": 3447,
                "end": 3450
              },
              "start": 3438,
              "end": 3450
            },
            "start": 3436,
            "end": 3450
          },
          "start": 3431,
          "end": 3450
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                  "name": "element",
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
                        "start": 3472,
                        "end": 3473
                      },
                      "typeArguments": null,
                      "start": 3472,
                      "end": 3473
                    },
                    "start": 3470,
                    "end": 3473
                  },
                  "start": 3463,
                  "end": 3473
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3482,
                      "end": 3488
                    },
                    "start": 3480,
                    "end": 3488
                  },
                  "start": 3475,
                  "end": 3488
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3493,
                    "end": 3500
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3504,
                        "end": 3505
                      },
                      "typeArguments": null,
                      "start": 3504,
                      "end": 3505
                    },
                    "start": 3504,
                    "end": 3505
                  },
                  "start": 3493,
                  "end": 3505
                },
                "start": 3490,
                "end": 3505
              },
              "start": 3462,
              "end": 3505
            },
            "start": 3460,
            "end": 3505
          },
          "start": 3452,
          "end": 3505
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3508,
            "end": 3513
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3526,
                    "end": 3527
                  },
                  "typeArguments": null,
                  "start": 3526,
                  "end": 3527
                },
                "start": 3526,
                "end": 3529
              },
              "start": 3517,
              "end": 3529
            },
            "start": 3517,
            "end": 3529
          },
          "start": 3508,
          "end": 3529
        },
        "start": 3506,
        "end": 3529
      },
      "body": null,
      "expression": false,
      "start": 3392,
      "end": 3530
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3548,
        "end": 3553
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
              "start": 3554,
              "end": 3555
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3554,
            "end": 3555
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 3557,
              "end": 3558
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 3567,
                "end": 3568
              },
              "typeArguments": null,
              "start": 3567,
              "end": 3568
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3557,
            "end": 3568
          }
        ],
        "start": 3553,
        "end": 3569
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3586,
                        "end": 3587
                      },
                      "typeArguments": null,
                      "start": 3586,
                      "end": 3587
                    },
                    "start": 3586,
                    "end": 3589
                  },
                  "start": 3577,
                  "end": 3589
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3592,
                  "end": 3601
                }
              ],
              "start": 3577,
              "end": 3601
            },
            "start": 3575,
            "end": 3601
          },
          "start": 3570,
          "end": 3601
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                  "name": "element",
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
                        "start": 3623,
                        "end": 3624
                      },
                      "typeArguments": null,
                      "start": 3623,
                      "end": 3624
                    },
                    "start": 3621,
                    "end": 3624
                  },
                  "start": 3614,
                  "end": 3624
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3633,
                      "end": 3639
                    },
                    "start": 3631,
                    "end": 3639
                  },
                  "start": 3626,
                  "end": 3639
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3644,
                    "end": 3651
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3655,
                        "end": 3656
                      },
                      "typeArguments": null,
                      "start": 3655,
                      "end": 3656
                    },
                    "start": 3655,
                    "end": 3656
                  },
                  "start": 3644,
                  "end": 3656
                },
                "start": 3641,
                "end": 3656
              },
              "start": 3613,
              "end": 3656
            },
            "start": 3611,
            "end": 3656
          },
          "start": 3603,
          "end": 3656
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 3659,
            "end": 3664
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3677,
                        "end": 3678
                      },
                      "typeArguments": null,
                      "start": 3677,
                      "end": 3678
                    },
                    "start": 3677,
                    "end": 3680
                  },
                  "start": 3668,
                  "end": 3680
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3683,
                  "end": 3692
                }
              ],
              "start": 3668,
              "end": 3692
            },
            "start": 3668,
            "end": 3692
          },
          "start": 3659,
          "end": 3692
        },
        "start": 3657,
        "end": 3692
      },
      "body": null,
      "expression": false,
      "start": 3531,
      "end": 3693
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "every",
        "optional": false,
        "typeAnnotation": null,
        "start": 3711,
        "end": 3716
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
              "start": 3717,
              "end": 3718
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3717,
            "end": 3718
          }
        ],
        "start": 3716,
        "end": 3719
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "array",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3736,
                        "end": 3737
                      },
                      "typeArguments": null,
                      "start": 3736,
                      "end": 3737
                    },
                    "start": 3736,
                    "end": 3739
                  },
                  "start": 3727,
                  "end": 3739
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3742,
                  "end": 3751
                }
              ],
              "start": 3727,
              "end": 3751
            },
            "start": 3725,
            "end": 3751
          },
          "start": 3720,
          "end": 3751
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                  "name": "element",
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
                        "start": 3773,
                        "end": 3774
                      },
                      "typeArguments": null,
                      "start": 3773,
                      "end": 3774
                    },
                    "start": 3771,
                    "end": 3774
                  },
                  "start": 3764,
                  "end": 3774
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3783,
                      "end": 3789
                    },
                    "start": 3781,
                    "end": 3789
                  },
                  "start": 3776,
                  "end": 3789
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3794,
                  "end": 3801
                },
                "start": 3791,
                "end": 3801
              },
              "start": 3763,
              "end": 3801
            },
            "start": 3761,
            "end": 3801
          },
          "start": 3753,
          "end": 3801
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 3804,
          "end": 3811
        },
        "start": 3802,
        "end": 3811
      },
      "body": null,
      "expression": false,
      "start": 3694,
      "end": 3812
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 3831,
        "end": 3838
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 3846,
              "end": 3849
            },
            "start": 3844,
            "end": 3849
          },
          "start": 3839,
          "end": 3849
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3852,
            "end": 3857
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 3870,
                  "end": 3877
                },
                "start": 3870,
                "end": 3879
              },
              "start": 3861,
              "end": 3879
            },
            "start": 3861,
            "end": 3879
          },
          "start": 3852,
          "end": 3879
        },
        "start": 3850,
        "end": 3879
      },
      "body": null,
      "expression": false,
      "start": 3814,
      "end": 3880
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
            "name": "DISALLOW_DECORATORS",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "DeprecationOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3917,
                  "end": 3935
                },
                "typeArguments": null,
                "start": 3917,
                "end": 3935
              },
              "start": 3915,
              "end": 3935
            },
            "start": 3896,
            "end": 3935
          },
          "init": null,
          "definite": false,
          "start": 3896,
          "end": 3935
        }
      ],
      "declare": true,
      "start": 3882,
      "end": 3936
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
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "buildOverload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3938,
                          "end": 3951
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "updateImportDeclaration",
                            "raw": "\"updateImportDeclaration\"",
                            "start": 3952,
                            "end": 3977
                          }
                        ],
                        "optional": false,
                        "start": 3938,
                        "end": 3978
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3984,
                        "end": 3992
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3938,
                      "end": 3992
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
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 4003,
                              "end": 4004
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4011,
                                        "end": 4028
                                      },
                                      "typeArguments": null,
                                      "start": 4011,
                                      "end": 4028
                                    },
                                    "start": 4009,
                                    "end": 4028
                                  },
                                  "start": 4005,
                                  "end": 4028
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4050,
                                                "end": 4058
                                              },
                                              "typeArguments": null,
                                              "start": 4050,
                                              "end": 4058
                                            },
                                            "start": 4050,
                                            "end": 4060
                                          },
                                          "start": 4041,
                                          "end": 4060
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4063,
                                          "end": 4072
                                        }
                                      ],
                                      "start": 4041,
                                      "end": 4072
                                    },
                                    "start": 4039,
                                    "end": 4072
                                  },
                                  "start": 4030,
                                  "end": 4072
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
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
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4088,
                                            "end": 4100
                                          },
                                          "typeArguments": null,
                                          "start": 4088,
                                          "end": 4100
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4103,
                                          "end": 4112
                                        }
                                      ],
                                      "start": 4088,
                                      "end": 4112
                                    },
                                    "start": 4086,
                                    "end": 4112
                                  },
                                  "start": 4074,
                                  "end": 4112
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4131,
                                        "end": 4141
                                      },
                                      "typeArguments": null,
                                      "start": 4131,
                                      "end": 4141
                                    },
                                    "start": 4129,
                                    "end": 4141
                                  },
                                  "start": 4114,
                                  "end": 4141
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
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
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4157,
                                            "end": 4169
                                          },
                                          "typeArguments": null,
                                          "start": 4157,
                                          "end": 4169
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4172,
                                          "end": 4181
                                        }
                                      ],
                                      "start": 4157,
                                      "end": 4181
                                    },
                                    "start": 4155,
                                    "end": 4181
                                  },
                                  "start": 4143,
                                  "end": 4181
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4184,
                                    "end": 4201
                                  },
                                  "typeArguments": null,
                                  "start": 4184,
                                  "end": 4201
                                },
                                "start": 4182,
                                "end": 4201
                              },
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
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4223,
                                        "end": 4246
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4247,
                                          "end": 4251
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4253,
                                          "end": 4262
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4264,
                                          "end": 4276
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4278,
                                          "end": 4293
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4295,
                                          "end": 4307
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4223,
                                      "end": 4308
                                    },
                                    "start": 4216,
                                    "end": 4309
                                  }
                                ],
                                "start": 4202,
                                "end": 4319
                              },
                              "expression": false,
                              "start": 4004,
                              "end": 4319
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4003,
                            "end": 4319
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 4330,
                              "end": 4331
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "node",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4338,
                                        "end": 4355
                                      },
                                      "typeArguments": null,
                                      "start": 4338,
                                      "end": 4355
                                    },
                                    "start": 4336,
                                    "end": 4355
                                  },
                                  "start": 4332,
                                  "end": 4355
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_decorators",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Decorator",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4379,
                                                "end": 4388
                                              },
                                              "typeArguments": null,
                                              "start": 4379,
                                              "end": 4388
                                            },
                                            "start": 4379,
                                            "end": 4390
                                          },
                                          "start": 4370,
                                          "end": 4390
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4393,
                                          "end": 4402
                                        }
                                      ],
                                      "start": 4370,
                                      "end": 4402
                                    },
                                    "start": 4368,
                                    "end": 4402
                                  },
                                  "start": 4357,
                                  "end": 4402
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSTypeOperator",
                                          "operator": "readonly",
                                          "typeAnnotation": {
                                            "type": "TSArrayType",
                                            "elementType": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Modifier",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4424,
                                                "end": 4432
                                              },
                                              "typeArguments": null,
                                              "start": 4424,
                                              "end": 4432
                                            },
                                            "start": 4424,
                                            "end": 4434
                                          },
                                          "start": 4415,
                                          "end": 4434
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4437,
                                          "end": 4446
                                        }
                                      ],
                                      "start": 4415,
                                      "end": 4446
                                    },
                                    "start": 4413,
                                    "end": 4446
                                  },
                                  "start": 4404,
                                  "end": 4446
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
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
                                            "name": "ImportClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4462,
                                            "end": 4474
                                          },
                                          "typeArguments": null,
                                          "start": 4462,
                                          "end": 4474
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4477,
                                          "end": 4486
                                        }
                                      ],
                                      "start": 4462,
                                      "end": 4486
                                    },
                                    "start": 4460,
                                    "end": 4486
                                  },
                                  "start": 4448,
                                  "end": 4486
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Expression",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4505,
                                        "end": 4515
                                      },
                                      "typeArguments": null,
                                      "start": 4505,
                                      "end": 4515
                                    },
                                    "start": 4503,
                                    "end": 4515
                                  },
                                  "start": 4488,
                                  "end": 4515
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
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
                                            "name": "AssertClause",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4531,
                                            "end": 4543
                                          },
                                          "typeArguments": null,
                                          "start": 4531,
                                          "end": 4543
                                        },
                                        {
                                          "type": "TSUndefinedKeyword",
                                          "start": 4546,
                                          "end": 4555
                                        }
                                      ],
                                      "start": 4531,
                                      "end": 4555
                                    },
                                    "start": 4529,
                                    "end": 4555
                                  },
                                  "start": 4517,
                                  "end": 4555
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ImportDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4558,
                                    "end": 4575
                                  },
                                  "typeArguments": null,
                                  "start": 4558,
                                  "end": 4575
                                },
                                "start": 4556,
                                "end": 4575
                              },
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
                                        "name": "updateImportDeclaration",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4597,
                                        "end": 4620
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "node",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4621,
                                          "end": 4625
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4627,
                                          "end": 4636
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4638,
                                          "end": 4650
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "moduleSpecifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4652,
                                          "end": 4667
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "assertClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4669,
                                          "end": 4681
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4597,
                                      "end": 4682
                                    },
                                    "start": 4590,
                                    "end": 4683
                                  }
                                ],
                                "start": 4576,
                                "end": 4693
                              },
                              "expression": false,
                              "start": 4331,
                              "end": 4693
                            },
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4330,
                            "end": 4693
                          }
                        ],
                        "start": 3993,
                        "end": 4700
                      }
                    ],
                    "optional": false,
                    "start": 3938,
                    "end": 4701
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4707,
                    "end": 4711
                  },
                  "optional": false,
                  "computed": false,
                  "start": 3938,
                  "end": 4711
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
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 4722,
                          "end": 4723
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4729,
                                  "end": 4738
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4740,
                                  "end": 4752
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4754,
                                  "end": 4769
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4771,
                                  "end": 4783
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "other",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4785,
                                  "end": 4790
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4726,
                              "end": 4791
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4809,
                                      "end": 4814
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4819,
                                      "end": 4828
                                    },
                                    "start": 4809,
                                    "end": 4828
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4846,
                                        "end": 4855
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4860,
                                        "end": 4869
                                      },
                                      "start": 4846,
                                      "end": 4869
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4873,
                                        "end": 4878
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4879,
                                          "end": 4888
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isModifier",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4890,
                                          "end": 4900
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4873,
                                      "end": 4901
                                    },
                                    "start": 4846,
                                    "end": 4901
                                  },
                                  "start": 4808,
                                  "end": 4902
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4919,
                                      "end": 4931
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4936,
                                      "end": 4945
                                    },
                                    "start": 4919,
                                    "end": 4945
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "!",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4950,
                                        "end": 4957
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "importClause",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4958,
                                          "end": 4970
                                        }
                                      ],
                                      "optional": false,
                                      "start": 4950,
                                      "end": 4971
                                    },
                                    "prefix": true,
                                    "start": 4949,
                                    "end": 4971
                                  },
                                  "start": 4919,
                                  "end": 4971
                                },
                                "start": 4808,
                                "end": 4972
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4989,
                                    "end": 5004
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5009,
                                    "end": 5018
                                  },
                                  "start": 4989,
                                  "end": 5018
                                },
                                "operator": "||",
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5022,
                                    "end": 5034
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5035,
                                      "end": 5050
                                    }
                                  ],
                                  "optional": false,
                                  "start": 5022,
                                  "end": 5051
                                },
                                "start": 4989,
                                "end": 5051
                              },
                              "start": 4808,
                              "end": 5052
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5069,
                                  "end": 5081
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5086,
                                  "end": 5095
                                },
                                "start": 5069,
                                "end": 5095
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5099,
                                  "end": 5113
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5114,
                                    "end": 5126
                                  }
                                ],
                                "optional": false,
                                "start": 5099,
                                "end": 5127
                              },
                              "start": 5069,
                              "end": 5127
                            },
                            "start": 4808,
                            "end": 5128
                          },
                          "id": null,
                          "generator": false,
                          "start": 4725,
                          "end": 5128
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 4722,
                        "end": 5128
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 5139,
                          "end": 5140
                        },
                        "value": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                null,
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "decorators",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5146,
                                  "end": 5156
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "modifiers",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5158,
                                  "end": 5167
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "importClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5169,
                                  "end": 5181
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "moduleSpecifier",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5183,
                                  "end": 5198
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5200,
                                  "end": 5212
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5143,
                              "end": 5213
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "LogicalExpression",
                            "left": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "decorators",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5231,
                                        "end": 5241
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5246,
                                        "end": 5255
                                      },
                                      "start": 5231,
                                      "end": 5255
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "every",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5259,
                                        "end": 5264
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "decorators",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5265,
                                          "end": 5275
                                        },
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "isDecorator",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5277,
                                          "end": 5288
                                        }
                                      ],
                                      "optional": false,
                                      "start": 5259,
                                      "end": 5289
                                    },
                                    "start": 5231,
                                    "end": 5289
                                  },
                                  "operator": "&&",
                                  "right": {
                                    "type": "LogicalExpression",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "left": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "modifiers",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5307,
                                        "end": 5316
                                      },
                                      "operator": "===",
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "undefined",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5321,
                                        "end": 5330
                                      },
                                      "start": 5307,
                                      "end": 5330
                                    },
                                    "operator": "||",
                                    "right": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "isArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5334,
                                        "end": 5341
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "modifiers",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 5342,
                                          "end": 5351
                                        }
                                      ],
                                      "optional": false,
                                      "start": 5334,
                                      "end": 5352
                                    },
                                    "start": 5307,
                                    "end": 5352
                                  },
                                  "start": 5230,
                                  "end": 5353
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "LogicalExpression",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "importClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5370,
                                      "end": 5382
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5387,
                                      "end": 5396
                                    },
                                    "start": 5370,
                                    "end": 5396
                                  },
                                  "operator": "||",
                                  "right": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "isImportClause",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5400,
                                      "end": 5414
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "importClause",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5415,
                                        "end": 5427
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5400,
                                    "end": 5428
                                  },
                                  "start": 5370,
                                  "end": 5428
                                },
                                "start": 5230,
                                "end": 5429
                              },
                              "operator": "&&",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "moduleSpecifier",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5446,
                                    "end": 5461
                                  },
                                  "operator": "!==",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5466,
                                    "end": 5475
                                  },
                                  "start": 5446,
                                  "end": 5475
                                },
                                "operator": "&&",
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "isExpression",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5479,
                                    "end": 5491
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "moduleSpecifier",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5492,
                                      "end": 5507
                                    }
                                  ],
                                  "optional": false,
                                  "start": 5479,
                                  "end": 5508
                                },
                                "start": 5446,
                                "end": 5508
                              },
                              "start": 5230,
                              "end": 5509
                            },
                            "operator": "&&",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "assertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5526,
                                  "end": 5538
                                },
                                "operator": "===",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "undefined",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5543,
                                  "end": 5552
                                },
                                "start": 5526,
                                "end": 5552
                              },
                              "operator": "||",
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "isAssertClause",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5556,
                                  "end": 5570
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "assertClause",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5571,
                                    "end": 5583
                                  }
                                ],
                                "optional": false,
                                "start": 5556,
                                "end": 5584
                              },
                              "start": 5526,
                              "end": 5584
                            },
                            "start": 5230,
                            "end": 5585
                          },
                          "id": null,
                          "generator": false,
                          "start": 5142,
                          "end": 5585
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 5139,
                        "end": 5585
                      }
                    ],
                    "start": 4712,
                    "end": 5592
                  }
                ],
                "optional": false,
                "start": 3938,
                "end": 5593
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deprecate",
                "optional": false,
                "typeAnnotation": null,
                "start": 5599,
                "end": 5608
              },
              "optional": false,
              "computed": false,
              "start": 3938,
              "end": 5608
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5619,
                      "end": 5620
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DISALLOW_DECORATORS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5622,
                      "end": 5641
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5619,
                    "end": 5641
                  }
                ],
                "start": 5609,
                "end": 5647
              }
            ],
            "optional": false,
            "start": 3938,
            "end": 5648
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "finish",
            "optional": false,
            "typeAnnotation": null,
            "start": 5654,
            "end": 5660
          },
          "optional": false,
          "computed": false,
          "start": 3938,
          "end": 5660
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 3938,
        "end": 5662
      },
      "directive": null,
      "start": 3938,
      "end": 5663
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
            "name": "modifiers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Modifier",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5700,
                          "end": 5708
                        },
                        "typeArguments": null,
                        "start": 5700,
                        "end": 5708
                      },
                      "start": 5700,
                      "end": 5710
                    },
                    "start": 5691,
                    "end": 5710
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "readonly",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Decorator",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5722,
                          "end": 5731
                        },
                        "typeArguments": null,
                        "start": 5722,
                        "end": 5731
                      },
                      "start": 5722,
                      "end": 5733
                    },
                    "start": 5713,
                    "end": 5733
                  }
                ],
                "start": 5691,
                "end": 5733
              },
              "start": 5689,
              "end": 5733
            },
            "start": 5680,
            "end": 5733
          },
          "init": null,
          "definite": false,
          "start": 5680,
          "end": 5733
        }
      ],
      "declare": true,
      "start": 5666,
      "end": 5734
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5745,
        "end": 5748
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 5757,
                "end": 5762
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5763,
                  "end": 5772
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isModifier",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5774,
                  "end": 5784
                }
              ],
              "optional": false,
              "start": 5757,
              "end": 5785
            },
            "directive": null,
            "start": 5757,
            "end": 5786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "every",
                "optional": false,
                "typeAnnotation": null,
                "start": 5791,
                "end": 5796
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "modifiers",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5797,
                  "end": 5806
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isDecorator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5808,
                  "end": 5819
                }
              ],
              "optional": false,
              "start": 5791,
              "end": 5820
            },
            "directive": null,
            "start": 5791,
            "end": 5821
          }
        ],
        "start": 5751,
        "end": 5823
      },
      "expression": false,
      "start": 5736,
      "end": 5823
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 5823
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
    "value": "DeprecationOptions",
    "start": 10,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 65,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 96,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 101,
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
    "value": "U",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 150,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 153,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 160,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 189,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 204,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 212,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 217,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 241,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 262,
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
    "type": "Punctuator",
    "value": "...",
    "start": 266,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 275,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 294,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "OverloadBinder",
    "start": 299,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 316,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 324,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 348,
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
    "value": "OverloadParameters",
    "start": 354,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 377,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 380,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 398,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 410,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 415,
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
    "value": "T",
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
    "value": "OverloadDefinitions",
    "start": 438,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 461,
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
    "value": "keyof",
    "start": 469,
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
    "value": ",",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 488,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "OverloadParameters",
    "start": 493,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 512,
    "end": 513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 514,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 522,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 543,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 545,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 561,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 564,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 578,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 590,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 610,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "OverloadFunction",
    "start": 615,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 634,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 642,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 661,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 665,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 687,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 699,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "OverloadBinders",
    "start": 704,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 720,
    "end": 721
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 722,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 730,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 756,
    "end": 757
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 758,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 761,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 773,
    "end": 774
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "OverloadParameters",
    "start": 786,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 809,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 812,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 822,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 837,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "OverloadDeprecations",
    "start": 842,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 865,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 873,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 899,
    "end": 900
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 901,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "OverloadKeys",
    "start": 904,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 921,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "DeprecationOptions",
    "start": 923,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 943,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 944,
    "end": 945
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 947,
    "end": 954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 955,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "createOverload",
    "start": 964,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 979,
    "end": 980
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 981,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 989,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1010,
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
    "value": "overloads",
    "start": 1024,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "binder",
    "start": 1038,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "OverloadBinders",
    "start": 1046,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "deprecations",
    "start": 1066,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "OverloadDeprecations",
    "start": 1081,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "UnionToIntersection",
    "start": 1107,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1129,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1141,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1149,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "createBinder",
    "start": 1158,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1173,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 1181,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "overloads",
    "start": 1202,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Identifier",
    "value": "binder",
    "start": 1216,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "OverloadBinders",
    "start": 1224,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "OverloadBinder",
    "start": 1245,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1265,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "OverloadBuilder",
    "start": 1275,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "overload",
    "start": 1297,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1308,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 1316,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Identifier",
    "value": "overloads",
    "start": 1337,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "BindableOverloadBuilder",
    "start": 1352,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1383,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "BindableOverloadBuilder",
    "start": 1393,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1419,
    "end": 1426
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 1427,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1454,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "binder",
    "start": 1459,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "OverloadBinders",
    "start": 1467,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "BoundOverloadBuilder",
    "start": 1488,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1516,
    "end": 1525
  },
  {
    "type": "Identifier",
    "value": "FinishableOverloadBuilder",
    "start": 1526,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1554,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 1562,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "finish",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "OverloadFunction",
    "start": 1599,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1615,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1623,
    "end": 1632
  },
  {
    "type": "Identifier",
    "value": "BoundOverloadBuilder",
    "start": 1633,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1656,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "OverloadDefinitions",
    "start": 1664,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "FinishableOverloadBuilder",
    "start": 1693,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1720,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 1728,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "deprecations",
    "start": 1738,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "OverloadDeprecations",
    "start": 1752,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "FinishableOverloadBuilder",
    "start": 1778,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1811,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1819,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "buildOverload",
    "start": 1828,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 1842,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1848,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
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
    "value": "OverloadBuilder",
    "start": 1857,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1875,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1881,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 1886,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 1903,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 1926,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 1940,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 1958,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1970,
    "end": 1971
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 1976,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1989,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 1999,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2010,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2016,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2031,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "Declaration",
    "start": 2041,
    "end": 2052
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2053,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2061,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2066,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "_declarationBrand",
    "start": 2068,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2085,
    "end": 2086
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2087,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2093,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "Statement",
    "start": 2103,
    "end": 2112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2113,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2121,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "_statementBrand",
    "start": 2128,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2145,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2152,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 2162,
    "end": 2172
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2173,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2181,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "_expressionBrand",
    "start": 2188,
    "end": 2204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2204,
    "end": 2205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2206,
    "end": 2209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2211,
    "end": 2212
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2214,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 2224,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2242,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "Statement",
    "start": 2250,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2262,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2268,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 2279,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2300,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 2310,
    "end": 2318
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2319,
    "end": 2326
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2327,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2334,
    "end": 2338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2340,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 2351,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2363,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 2373,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2383,
    "end": 2390
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2391,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2398,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2404,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 2415,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2428,
    "end": 2437
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 2438,
    "end": 2450
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2451,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "Declaration",
    "start": 2459,
    "end": 2470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2471,
    "end": 2472
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2473,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2479,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 2490,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2506,
    "end": 2515
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 2516,
    "end": 2528
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2529,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2537,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2544,
    "end": 2548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2548,
    "end": 2549
  },
  {
    "type": "Identifier",
    "value": "SyntaxKind",
    "start": 2550,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 2561,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2586,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "isExpression",
    "start": 2595,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2608,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2614,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2621,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2626,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 2629,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2641,
    "end": 2648
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2649,
    "end": 2657
  },
  {
    "type": "Identifier",
    "value": "isAssertClause",
    "start": 2658,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2673,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2677,
    "end": 2678
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2679,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2686,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2691,
    "end": 2693
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 2694,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2708,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2716,
    "end": 2724
  },
  {
    "type": "Identifier",
    "value": "isImportClause",
    "start": 2725,
    "end": 2739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2740,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2746,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2753,
    "end": 2757
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2758,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 2761,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2775,
    "end": 2782
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2783,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "isModifier",
    "start": 2792,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2803,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2809,
    "end": 2813
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2813,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2816,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2821,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 2824,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2834,
    "end": 2841
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2842,
    "end": 2850
  },
  {
    "type": "Identifier",
    "value": "isDecorator",
    "start": 2851,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2863,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "Node",
    "start": 2869,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2876,
    "end": 2880
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2881,
    "end": 2883
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 2884,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2896,
    "end": 2903
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2904,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "updateImportDeclaration",
    "start": 2910,
    "end": 2933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 2942,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 2948,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 2967,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 2978,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 2987,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3000,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 3011,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 3025,
    "end": 3037
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3040,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 3051,
    "end": 3066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 3068,
    "end": 3078
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 3080,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 3094,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3109,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 3121,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 3145,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 3151,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 3170,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3182,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 3191,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3205,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 3216,
    "end": 3225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3227,
    "end": 3235
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 3236,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3249,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3258,
    "end": 3259
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 3260,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 3274,
    "end": 3286
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3289,
    "end": 3298
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3298,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 3300,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 3317,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 3329,
    "end": 3341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3341,
    "end": 3342
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 3343,
    "end": 3355
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3358,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 3370,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3392,
    "end": 3399
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3400,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 3409,
    "end": 3414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3418,
    "end": 3419
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3420,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3429,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3430,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3431,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3438,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3452,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3463,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3475,
    "end": 3480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3480,
    "end": 3481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3482,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3490,
    "end": 3492
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3493,
    "end": 3500
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3501,
    "end": 3503
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3504,
    "end": 3505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3505,
    "end": 3506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3506,
    "end": 3507
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3508,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3517,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "declare",
    "start": 3531,
    "end": 3538
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3539,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 3548,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3554,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3559,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3570,
    "end": 3575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3577,
    "end": 3585
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3588,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3590,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3592,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3603,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3614,
    "end": 3621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3626,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3633,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3641,
    "end": 3643
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3644,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3652,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3655,
    "end": 3656
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3656,
    "end": 3657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3657,
    "end": 3658
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3659,
    "end": 3664
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3665,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3668,
    "end": 3676
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3678,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3681,
    "end": 3682
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3683,
    "end": 3692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3692,
    "end": 3693
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3694,
    "end": 3701
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3702,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 3711,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3716,
    "end": 3717
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 3720,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3727,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3736,
    "end": 3737
  },
  {
    "type": "Punctuator",
    "value": "[",
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
    "value": "|",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3742,
    "end": 3751
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3751,
    "end": 3752
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 3753,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 3764,
    "end": 3771
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3774,
    "end": 3775
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 3776,
    "end": 3781
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3783,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3791,
    "end": 3793
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3794,
    "end": 3801
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3801,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3804,
    "end": 3811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3811,
    "end": 3812
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3814,
    "end": 3821
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3822,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 3831,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3839,
    "end": 3844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3846,
    "end": 3849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3849,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3852,
    "end": 3857
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3858,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 3861,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3870,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3878,
    "end": 3879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3879,
    "end": 3880
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3882,
    "end": 3889
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3890,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "DISALLOW_DECORATORS",
    "start": 3896,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "DeprecationOptions",
    "start": 3917,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "buildOverload",
    "start": 3938,
    "end": 3951
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3951,
    "end": 3952
  },
  {
    "type": "String",
    "value": "\"updateImportDeclaration\"",
    "start": 3952,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "overload",
    "start": 3984,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4003,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 4005,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 4011,
    "end": 4028
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4028,
    "end": 4029
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4030,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4041,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 4050,
    "end": 4058
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4058,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4063,
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
    "value": "importClause",
    "start": 4074,
    "end": 4086
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4086,
    "end": 4087
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 4088,
    "end": 4100
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4101,
    "end": 4102
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4103,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4114,
    "end": 4129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4129,
    "end": 4130
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 4131,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 4143,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 4157,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4172,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4182,
    "end": 4183
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 4184,
    "end": 4201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4202,
    "end": 4203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4216,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "updateImportDeclaration",
    "start": 4223,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 4247,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4253,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4264,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4278,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 4295,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4318,
    "end": 4319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4319,
    "end": 4320
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4331,
    "end": 4332
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 4332,
    "end": 4336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 4338,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "_decorators",
    "start": 4357,
    "end": 4368
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4368,
    "end": 4369
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4370,
    "end": 4378
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 4379,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4391,
    "end": 4392
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4393,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4402,
    "end": 4403
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4404,
    "end": 4413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4413,
    "end": 4414
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 4415,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 4424,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4437,
    "end": 4446
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4448,
    "end": 4460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4460,
    "end": 4461
  },
  {
    "type": "Identifier",
    "value": "ImportClause",
    "start": 4462,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4477,
    "end": 4486
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4486,
    "end": 4487
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4488,
    "end": 4503
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Identifier",
    "value": "Expression",
    "start": 4505,
    "end": 4515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 4517,
    "end": 4529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4529,
    "end": 4530
  },
  {
    "type": "Identifier",
    "value": "AssertClause",
    "start": 4531,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4546,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4556,
    "end": 4557
  },
  {
    "type": "Identifier",
    "value": "ImportDeclaration",
    "start": 4558,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4576,
    "end": 4577
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4590,
    "end": 4596
  },
  {
    "type": "Identifier",
    "value": "updateImportDeclaration",
    "start": 4597,
    "end": 4620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Identifier",
    "value": "node",
    "start": 4621,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4625,
    "end": 4626
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4627,
    "end": 4636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4636,
    "end": 4637
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4638,
    "end": 4650
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4650,
    "end": 4651
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4652,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 4669,
    "end": 4681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4681,
    "end": 4682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4682,
    "end": 4683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4693,
    "end": 4694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4699,
    "end": 4700
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4700,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 4707,
    "end": 4711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4711,
    "end": 4712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4712,
    "end": 4713
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4725,
    "end": 4726
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4729,
    "end": 4738
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4738,
    "end": 4739
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4740,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4754,
    "end": 4769
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4769,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 4771,
    "end": 4783
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4783,
    "end": 4784
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 4785,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4793,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4808,
    "end": 4809
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 4809,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4815,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4819,
    "end": 4828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4830,
    "end": 4832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4845,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4846,
    "end": 4855
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4856,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4860,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4870,
    "end": 4872
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 4873,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 4879,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Identifier",
    "value": "isModifier",
    "start": 4890,
    "end": 4900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4900,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4901,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4903,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4919,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4932,
    "end": 4935
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4936,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4946,
    "end": 4948
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 4949,
    "end": 4950
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 4950,
    "end": 4957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4957,
    "end": 4958
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 4958,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4971,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 4973,
    "end": 4975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 4989,
    "end": 5004
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5005,
    "end": 5008
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5009,
    "end": 5018
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5019,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "isExpression",
    "start": 5022,
    "end": 5034
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 5035,
    "end": 5050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5050,
    "end": 5051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5051,
    "end": 5052
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5053,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5068,
    "end": 5069
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 5069,
    "end": 5081
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5082,
    "end": 5085
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5086,
    "end": 5095
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5096,
    "end": 5098
  },
  {
    "type": "Identifier",
    "value": "isAssertClause",
    "start": 5099,
    "end": 5113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5113,
    "end": 5114
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 5114,
    "end": 5126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5127,
    "end": 5128
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5139,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5142,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 5146,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5158,
    "end": 5167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5167,
    "end": 5168
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 5169,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 5183,
    "end": 5198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5198,
    "end": 5199
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 5200,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5215,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5230,
    "end": 5231
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 5231,
    "end": 5241
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5242,
    "end": 5245
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5246,
    "end": 5255
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5256,
    "end": 5258
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 5259,
    "end": 5264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5264,
    "end": 5265
  },
  {
    "type": "Identifier",
    "value": "decorators",
    "start": 5265,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5275,
    "end": 5276
  },
  {
    "type": "Identifier",
    "value": "isDecorator",
    "start": 5277,
    "end": 5288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5288,
    "end": 5289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5289,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5291,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5307,
    "end": 5316
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5317,
    "end": 5320
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5321,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5331,
    "end": 5333
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 5334,
    "end": 5341
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5341,
    "end": 5342
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5342,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5354,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 5370,
    "end": 5382
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5383,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5387,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5397,
    "end": 5399
  },
  {
    "type": "Identifier",
    "value": "isImportClause",
    "start": 5400,
    "end": 5414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5414,
    "end": 5415
  },
  {
    "type": "Identifier",
    "value": "importClause",
    "start": 5415,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5428,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5430,
    "end": 5432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5445,
    "end": 5446
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 5446,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5462,
    "end": 5465
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5466,
    "end": 5475
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5476,
    "end": 5478
  },
  {
    "type": "Identifier",
    "value": "isExpression",
    "start": 5479,
    "end": 5491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5491,
    "end": 5492
  },
  {
    "type": "Identifier",
    "value": "moduleSpecifier",
    "start": 5492,
    "end": 5507
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5507,
    "end": 5508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5510,
    "end": 5512
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5525,
    "end": 5526
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 5526,
    "end": 5538
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5539,
    "end": 5542
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5543,
    "end": 5552
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 5553,
    "end": 5555
  },
  {
    "type": "Identifier",
    "value": "isAssertClause",
    "start": 5556,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Identifier",
    "value": "assertClause",
    "start": 5571,
    "end": 5583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5583,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5585,
    "end": 5586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5592,
    "end": 5593
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5598,
    "end": 5599
  },
  {
    "type": "Identifier",
    "value": "deprecate",
    "start": 5599,
    "end": 5608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5608,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5619,
    "end": 5620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5620,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "DISALLOW_DECORATORS",
    "start": 5622,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5653,
    "end": 5654
  },
  {
    "type": "Identifier",
    "value": "finish",
    "start": 5654,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5661,
    "end": 5662
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5662,
    "end": 5663
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5666,
    "end": 5673
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 5674,
    "end": 5679
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5680,
    "end": 5689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5689,
    "end": 5690
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5691,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "Modifier",
    "start": 5700,
    "end": 5708
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5708,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5711,
    "end": 5712
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 5713,
    "end": 5721
  },
  {
    "type": "Identifier",
    "value": "Decorator",
    "start": 5722,
    "end": 5731
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5731,
    "end": 5732
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5732,
    "end": 5733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5733,
    "end": 5734
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5736,
    "end": 5744
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 5745,
    "end": 5748
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5748,
    "end": 5749
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5749,
    "end": 5750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5751,
    "end": 5752
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 5757,
    "end": 5762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5762,
    "end": 5763
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5763,
    "end": 5772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5772,
    "end": 5773
  },
  {
    "type": "Identifier",
    "value": "isModifier",
    "start": 5774,
    "end": 5784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5784,
    "end": 5785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5785,
    "end": 5786
  },
  {
    "type": "Identifier",
    "value": "every",
    "start": 5791,
    "end": 5796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5796,
    "end": 5797
  },
  {
    "type": "Identifier",
    "value": "modifiers",
    "start": 5797,
    "end": 5806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5806,
    "end": 5807
  },
  {
    "type": "Identifier",
    "value": "isDecorator",
    "start": 5808,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5822,
    "end": 5823
  }
]
```
