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
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 13
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 28,
                "end": 31
              },
              "start": 22,
              "end": 31
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 31
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 35
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 44,
              "end": 53
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 53
          }
        ],
        "start": 10,
        "end": 54
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 70
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
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 71,
                    "end": 78
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 81
                        },
                        "typeArguments": null,
                        "start": 79,
                        "end": 81
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 89,
                          "end": 92
                        },
                        "start": 83,
                        "end": 92
                      }
                    ],
                    "start": 78,
                    "end": 93
                  },
                  "start": 71,
                  "end": 93
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 98
                  },
                  "typeArguments": null,
                  "start": 96,
                  "end": 98
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 103
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 103
                }
              ],
              "start": 71,
              "end": 103
            }
          ],
          "start": 70,
          "end": 104
        },
        "start": 61,
        "end": 104
      },
      "declare": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 117
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K1",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 120
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 135,
                "end": 138
              },
              "start": 129,
              "end": 138
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 118,
            "end": 138
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K2",
              "optional": false,
              "typeAnnotation": null,
              "start": 140,
              "end": 142
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 157,
                "end": 160
              },
              "start": 151,
              "end": 160
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 160
          }
        ],
        "start": 117,
        "end": 161
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "MustBeKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 177
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
                    "name": "K1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 180
                  },
                  "typeArguments": null,
                  "start": 178,
                  "end": 180
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 185
                  },
                  "typeArguments": null,
                  "start": 183,
                  "end": 185
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 195
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 198
                        },
                        "typeArguments": null,
                        "start": 196,
                        "end": 198
                      },
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 206,
                          "end": 209
                        },
                        "start": 200,
                        "end": 209
                      }
                    ],
                    "start": 195,
                    "end": 210
                  },
                  "start": 188,
                  "end": 210
                }
              ],
              "start": 178,
              "end": 210
            }
          ],
          "start": 177,
          "end": 211
        },
        "start": 168,
        "end": 211
      },
      "declare": false,
      "start": 107,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MustBeKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 228
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
              "start": 229,
              "end": 230
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 245,
                "end": 248
              },
              "start": 239,
              "end": 248
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 229,
            "end": 248
          }
        ],
        "start": 228,
        "end": 249
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 253
        },
        "typeArguments": null,
        "start": 252,
        "end": 253
      },
      "declare": false,
      "start": 214,
      "end": 254
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 324
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 327,
            "end": 333
          },
          {
            "type": "TSStringKeyword",
            "start": 336,
            "end": 342
          },
          {
            "type": "TSSymbolKeyword",
            "start": 345,
            "end": 351
          }
        ],
        "start": 327,
        "end": 351
      },
      "declare": false,
      "start": 313,
      "end": 352
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnTypeKeyof",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 374
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 375,
              "end": 378
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 387,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 375,
            "end": 393
          }
        ],
        "start": 374,
        "end": 394
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "typeArguments": null,
          "start": 397,
          "end": 400
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 409,
          "end": 415
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 429,
                    "end": 432
                  },
                  "typeArguments": null,
                  "start": 429,
                  "end": 432
                },
                "start": 423,
                "end": 432
              }
            ],
            "start": 422,
            "end": 433
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSNeverKeyword",
                "start": 443,
                "end": 448
              }
            ],
            "start": 442,
            "end": 449
          },
          "trueType": {
            "type": "TSNeverKeyword",
            "start": 460,
            "end": 465
          },
          "falseType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 482
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 492,
                    "end": 495
                  },
                  "typeArguments": null,
                  "start": 492,
                  "end": 495
                },
                "start": 486,
                "end": 495
              },
              "nameType": {
                "type": "TSStringKeyword",
                "start": 499,
                "end": 505
              },
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 516,
                      "end": 519
                    },
                    "typeArguments": null,
                    "start": 516,
                    "end": 519
                  },
                  "start": 513,
                  "end": 519
                },
                "start": 510,
                "end": 519
              },
              "optional": "-",
              "readonly": null,
              "start": 476,
              "end": 521
            },
            "indexType": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            },
            "start": 476,
            "end": 529
          },
          "start": 422,
          "end": 529
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 536,
          "end": 541
        },
        "start": 397,
        "end": 541
      },
      "declare": false,
      "start": 354,
      "end": 542
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyIfSignatureOfObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 549,
        "end": 571
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 577,
              "end": 580
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 589,
              "end": 595
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 577,
            "end": 595
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AnyKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 619
              },
              "typeArguments": null,
              "start": 613,
              "end": 619
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 601,
            "end": 619
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 639
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReturnTypeKeyof",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 657
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 658,
                      "end": 661
                    },
                    "typeArguments": null,
                    "start": 658,
                    "end": 661
                  }
                ],
                "start": 657,
                "end": 662
              },
              "start": 642,
              "end": 662
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 625,
            "end": 662
          }
        ],
        "start": 571,
        "end": 665
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReturnTypeKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 682
          },
          "typeArguments": null,
          "start": 668,
          "end": 682
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 697,
                "end": 700
              },
              "typeArguments": null,
              "start": 697,
              "end": 700
            },
            "start": 694,
            "end": 700
          },
          "start": 691,
          "end": 700
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 714
                },
                "typeArguments": null,
                "start": 711,
                "end": 714
              },
              "start": 708,
              "end": 714
            },
            "start": 705,
            "end": 714
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnTypeKeys",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 738
            },
            "typeArguments": null,
            "start": 724,
            "end": 738
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 744
            },
            "typeArguments": null,
            "start": 741,
            "end": 744
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 747,
            "end": 752
          },
          "start": 704,
          "end": 752
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 756,
          "end": 761
        },
        "start": 668,
        "end": 761
      },
      "declare": false,
      "start": 544,
      "end": 762
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced1",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 784
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 785,
                "end": 788
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 797,
                "end": 803
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 785,
              "end": 803
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 808
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 817,
                  "end": 823
                },
                "typeArguments": null,
                "start": 817,
                "end": 823
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 805,
              "end": 823
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 830
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 825,
              "end": 830
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 832,
                "end": 839
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 854,
                    "end": 857
                  },
                  "typeArguments": null,
                  "start": 854,
                  "end": 857
                },
                "start": 848,
                "end": 857
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 869
                  },
                  "typeArguments": null,
                  "start": 866,
                  "end": 869
                },
                "start": 860,
                "end": 869
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 832,
              "end": 869
            }
          ],
          "start": 784,
          "end": 870
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 877,
              "end": 880
            },
            "typeArguments": null,
            "start": 877,
            "end": 880
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyIfSignatureOfObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 889,
              "end": 911
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 915
                  },
                  "typeArguments": null,
                  "start": 912,
                  "end": 915
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 917,
                    "end": 920
                  },
                  "typeArguments": null,
                  "start": 917,
                  "end": 920
                }
              ],
              "start": 911,
              "end": 921
            },
            "start": 889,
            "end": 921
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 935
              },
              "typeArguments": null,
              "start": 932,
              "end": 935
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 944,
                "end": 951
              },
              "typeArguments": null,
              "start": 944,
              "end": 951
            },
            "trueType": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 974,
                  "end": 977
                },
                "typeArguments": null,
                "start": 974,
                "end": 977
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 980,
                  "end": 985
                },
                "typeArguments": null,
                "start": 980,
                "end": 985
              },
              "optional": false,
              "readonly": null,
              "start": 966,
              "end": 987
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1002,
              "end": 1007
            },
            "start": 932,
            "end": 1007
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1018,
            "end": 1023
          },
          "start": 877,
          "end": 1023
        },
        "declare": false,
        "start": 771,
        "end": 1024
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 764,
      "end": 1024
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Reduced2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1038,
          "end": 1046
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 1047,
                "end": 1050
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 1059,
                "end": 1065
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1047,
              "end": 1065
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1070
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnyKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1079,
                  "end": 1085
                },
                "typeArguments": null,
                "start": 1079,
                "end": 1085
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1067,
              "end": 1085
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Value",
                "optional": false,
                "typeAnnotation": null,
                "start": 1087,
                "end": 1092
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1087,
              "end": 1092
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ObjKeys",
                "optional": false,
                "typeAnnotation": null,
                "start": 1094,
                "end": 1101
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1116,
                    "end": 1119
                  },
                  "typeArguments": null,
                  "start": 1116,
                  "end": 1119
                },
                "start": 1110,
                "end": 1119
              },
              "default": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1131
                  },
                  "typeArguments": null,
                  "start": 1128,
                  "end": 1131
                },
                "start": 1122,
                "end": 1131
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 1094,
              "end": 1131
            }
          ],
          "start": 1046,
          "end": 1132
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 1139,
              "end": 1142
            },
            "typeArguments": null,
            "start": 1139,
            "end": 1142
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1151,
              "end": 1157
            },
            "typeArguments": null,
            "start": 1151,
            "end": 1157
          },
          "trueType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Key",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1171
              },
              "typeArguments": null,
              "start": 1168,
              "end": 1171
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "KeyIfSignatureOfObject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1180,
                "end": 1202
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1203,
                      "end": 1206
                    },
                    "typeArguments": null,
                    "start": 1203,
                    "end": 1206
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1208,
                      "end": 1211
                    },
                    "typeArguments": null,
                    "start": 1208,
                    "end": 1211
                  }
                ],
                "start": 1202,
                "end": 1212
              },
              "start": 1180,
              "end": 1212
            },
            "trueType": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1227,
                  "end": 1230
                },
                "typeArguments": null,
                "start": 1227,
                "end": 1230
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjKeys",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1239,
                  "end": 1246
                },
                "typeArguments": null,
                "start": 1239,
                "end": 1246
              },
              "trueType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1267,
                  "end": 1268
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1272,
                    "end": 1275
                  },
                  "typeArguments": null,
                  "start": 1272,
                  "end": 1275
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1278,
                    "end": 1283
                  },
                  "typeArguments": null,
                  "start": 1278,
                  "end": 1283
                },
                "optional": false,
                "readonly": null,
                "start": 1264,
                "end": 1285
              },
              "falseType": {
                "type": "TSNeverKeyword",
                "start": 1303,
                "end": 1308
              },
              "start": 1227,
              "end": 1308
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 1323,
              "end": 1328
            },
            "start": 1168,
            "end": 1328
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1339,
            "end": 1344
          },
          "start": 1139,
          "end": 1344
        },
        "declare": false,
        "start": 1033,
        "end": 1345
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1026,
      "end": 1345
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1345
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
    "value": "Test1",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 11,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 33,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 50,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 96,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 101,
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
    "value": "Test2",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 118,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 121,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 129,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 140,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 151,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 168,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "K1",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 200,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 214,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "MustBeKey",
    "start": 219,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 245,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 313,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 327,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 345,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 354,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeyof",
    "start": 359,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 375,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 379,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 387,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 397,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 401,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 423,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 429,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 434,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 443,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 460,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 479,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 483,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 486,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 496,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 513,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 516,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 522,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 536,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 549,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 577,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 581,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 589,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 601,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 605,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 613,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 625,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeyof",
    "start": 642,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 658,
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
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 668,
    "end": 682
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 694,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 697,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 711,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 716,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "ReturnTypeKeys",
    "start": 724,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 747,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 756,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 771,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "Reduced1",
    "start": 776,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 785,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 789,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 797,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 805,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 809,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 817,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 825,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 832,
    "end": 839
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 840,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 848,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 854,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 860,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 866,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 877,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 881,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 889,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 917,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 920,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 932,
    "end": 935
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 936,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 944,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 971,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 974,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Value",
    "start": 980,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1002,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1026,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1033,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "Reduced2",
    "start": 1038,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1047,
    "end": 1050
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1051,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 1059,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1067,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1071,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 1079,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1087,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 1094,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1102,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1110,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1122,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1143,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "AnyKey",
    "start": 1151,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1168,
    "end": 1171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1172,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "KeyIfSignatureOfObject",
    "start": 1180,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "Obj",
    "start": 1203,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1208,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1227,
    "end": 1230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1231,
    "end": 1238
  },
  {
    "type": "Identifier",
    "value": "ObjKeys",
    "start": 1239,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1269,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 1272,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 1278,
    "end": 1283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1303,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1323,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1339,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1344,
    "end": 1345
  }
]
```
