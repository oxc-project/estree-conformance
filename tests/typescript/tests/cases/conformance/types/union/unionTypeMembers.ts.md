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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 38
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "start": 39,
                "end": 48
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 58
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 63,
            "end": 90
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 134,
                    "end": 140
                  },
                  "start": 132,
                  "end": 140
                },
                "start": 131,
                "end": 140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              },
              "start": 141,
              "end": 149
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 96,
            "end": 150
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 186
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 190,
                    "end": 196
                  },
                  "start": 188,
                  "end": 196
                },
                "start": 187,
                "end": 196
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
              },
              "start": 197,
              "end": 205
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 155,
            "end": 206
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
              },
              "start": 237,
              "end": 245
            },
            "accessibility": null,
            "static": false,
            "start": 211,
            "end": 246
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 281
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 289,
                  "end": 290
                },
                "typeArguments": null,
                "start": 289,
                "end": 290
              },
              "start": 287,
              "end": 290
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 252,
            "end": 291
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 328
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 330
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 329,
                  "end": 330
                }
              ],
              "start": 328,
              "end": 331
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 336
                    },
                    "typeArguments": null,
                    "start": 335,
                    "end": 336
                  },
                  "start": 333,
                  "end": 336
                },
                "start": 332,
                "end": 336
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 340
                },
                "typeArguments": null,
                "start": 339,
                "end": 340
              },
              "start": 337,
              "end": 340
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 296,
            "end": 341
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 361
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 365,
                    "end": 371
                  },
                  "start": 363,
                  "end": 371
                },
                "start": 362,
                "end": 371
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 374,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 347,
            "end": 381
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI1",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 402
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 404,
                "end": 410
              },
              "start": 402,
              "end": 410
            },
            "accessibility": null,
            "static": false,
            "start": 386,
            "end": 411
          }
        ],
        "start": 16,
        "end": 413
      },
      "declare": false,
      "start": 0,
      "end": 413
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
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
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 428,
            "end": 429
          }
        ],
        "start": 427,
        "end": 430
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
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 437,
              "end": 453
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 457,
                    "end": 463
                  },
                  "start": 455,
                  "end": 463
                },
                "start": 454,
                "end": 463
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 466,
                "end": 472
              },
              "start": 464,
              "end": 472
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 437,
            "end": 473
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 496
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 498,
                "end": 504
              },
              "start": 496,
              "end": 504
            },
            "accessibility": null,
            "static": false,
            "start": 478,
            "end": 505
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentParameterType",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 545
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSNumberKeyword",
                    "start": 549,
                    "end": 555
                  },
                  "start": 547,
                  "end": 555
                },
                "start": 546,
                "end": 555
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 558,
                "end": 564
              },
              "start": 556,
              "end": 564
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 511,
            "end": 565
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 570,
              "end": 601
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 605,
                    "end": 611
                  },
                  "start": 603,
                  "end": 611
                },
                "start": 602,
                "end": 611
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 614,
                "end": 620
              },
              "start": 612,
              "end": 620
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 570,
            "end": 621
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonPropertyDifferenType",
              "optional": false,
              "typeAnnotation": null,
              "start": 626,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 654,
                "end": 660
              },
              "start": 652,
              "end": 660
            },
            "accessibility": null,
            "static": false,
            "start": 626,
            "end": 661
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 696
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 700,
                      "end": 701
                    },
                    "typeArguments": null,
                    "start": 700,
                    "end": 701
                  },
                  "start": 698,
                  "end": 701
                },
                "start": 697,
                "end": 701
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
                  "start": 704,
                  "end": 705
                },
                "typeArguments": null,
                "start": 704,
                "end": 705
              },
              "start": 702,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 667,
            "end": 706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 743
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 744,
                    "end": 745
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 744,
                  "end": 745
                }
              ],
              "start": 743,
              "end": 746
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 751
                    },
                    "typeArguments": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 748,
                  "end": 751
                },
                "start": 747,
                "end": 751
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 755
                },
                "typeArguments": null,
                "start": 754,
                "end": 755
              },
              "start": 752,
              "end": 755
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 711,
            "end": 756
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "methodOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 776
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 780,
                    "end": 786
                  },
                  "start": 778,
                  "end": 786
                },
                "start": 777,
                "end": 786
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 789,
                "end": 795
              },
              "start": 787,
              "end": 795
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 762,
            "end": 796
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "propertyOnlyInI2",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 817
            },
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
            "accessibility": null,
            "static": false,
            "start": 801,
            "end": 826
          }
        ],
        "start": 431,
        "end": 828
      },
      "declare": false,
      "start": 415,
      "end": 828
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
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
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1020,
                      "end": 1022
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1023,
                          "end": 1029
                        }
                      ],
                      "start": 1022,
                      "end": 1030
                    },
                    "start": 1020,
                    "end": 1030
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1033,
                      "end": 1035
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1036,
                          "end": 1042
                        }
                      ],
                      "start": 1035,
                      "end": 1043
                    },
                    "start": 1033,
                    "end": 1043
                  }
                ],
                "start": 1020,
                "end": 1043
              },
              "start": 1018,
              "end": 1043
            },
            "start": 1016,
            "end": 1043
          },
          "init": null,
          "definite": false,
          "start": 1016,
          "end": 1043
        }
      ],
      "declare": true,
      "start": 1004,
      "end": 1044
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1062,
                "end": 1068
              },
              "start": 1060,
              "end": 1068
            },
            "start": 1057,
            "end": 1068
          },
          "init": null,
          "definite": false,
          "start": 1057,
          "end": 1068
        }
      ],
      "declare": true,
      "start": 1045,
      "end": 1069
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1087,
                "end": 1093
              },
              "start": 1085,
              "end": 1093
            },
            "start": 1082,
            "end": 1093
          },
          "init": null,
          "definite": false,
          "start": 1082,
          "end": 1093
        }
      ],
      "declare": true,
      "start": 1070,
      "end": 1094
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1117,
                    "end": 1123
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1126,
                    "end": 1132
                  }
                ],
                "start": 1117,
                "end": 1132
              },
              "start": 1115,
              "end": 1132
            },
            "start": 1107,
            "end": 1132
          },
          "init": null,
          "definite": false,
          "start": 1107,
          "end": 1132
        }
      ],
      "declare": true,
      "start": 1095,
      "end": 1133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1248,
          "end": 1251
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1254,
            "end": 1255
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonPropertyType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1256,
            "end": 1274
          },
          "optional": false,
          "computed": false,
          "start": 1254,
          "end": 1274
        },
        "start": 1248,
        "end": 1274
      },
      "directive": null,
      "start": 1248,
      "end": 1275
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1286,
          "end": 1289
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1292,
              "end": 1293
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1310
            },
            "optional": false,
            "computed": false,
            "start": 1292,
            "end": 1310
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1314
            }
          ],
          "optional": false,
          "start": 1292,
          "end": 1315
        },
        "start": 1286,
        "end": 1315
      },
      "directive": null,
      "start": 1286,
      "end": 1316
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1377
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1380,
            "end": 1381
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonPropertyDifferenType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1382,
            "end": 1408
          },
          "optional": false,
          "computed": false,
          "start": 1380,
          "end": 1408
        },
        "start": 1369,
        "end": 1408
      },
      "directive": null,
      "start": 1369,
      "end": 1409
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1410,
          "end": 1418
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1421,
              "end": 1422
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodDifferentReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 1423,
              "end": 1454
            },
            "optional": false,
            "computed": false,
            "start": 1421,
            "end": 1454
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1455,
              "end": 1458
            }
          ],
          "optional": false,
          "start": 1421,
          "end": 1459
        },
        "start": 1410,
        "end": 1459
      },
      "directive": null,
      "start": 1410,
      "end": 1460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1479,
          "end": 1480
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "commonMethodDifferentParameterType",
          "optional": false,
          "typeAnnotation": null,
          "start": 1481,
          "end": 1515
        },
        "optional": false,
        "computed": false,
        "start": 1479,
        "end": 1515
      },
      "directive": null,
      "start": 1479,
      "end": 1516
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1547,
            "end": 1548
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "commonMethodDifferentParameterType",
            "optional": false,
            "typeAnnotation": null,
            "start": 1549,
            "end": 1583
          },
          "optional": false,
          "computed": false,
          "start": 1547,
          "end": 1583
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null,
            "start": 1584,
            "end": 1592
          }
        ],
        "optional": false,
        "start": 1547,
        "end": 1593
      },
      "directive": null,
      "start": 1547,
      "end": 1594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 1801,
          "end": 1804
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1807,
              "end": 1808
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1809,
              "end": 1838
            },
            "optional": false,
            "computed": false,
            "start": 1807,
            "end": 1838
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1842
            }
          ],
          "optional": false,
          "start": 1807,
          "end": 1843
        },
        "start": 1801,
        "end": 1843
      },
      "directive": null,
      "start": 1801,
      "end": 1844
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 1845,
          "end": 1848
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1851,
              "end": 1852
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1853,
              "end": 1885
            },
            "optional": false,
            "computed": false,
            "start": 1851,
            "end": 1885
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1889
            }
          ],
          "optional": false,
          "start": 1851,
          "end": 1890
        },
        "start": 1845,
        "end": 1890
      },
      "directive": null,
      "start": 1845,
      "end": 1891
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 1892,
          "end": 1895
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1898,
              "end": 1899
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1900,
              "end": 1932
            },
            "optional": false,
            "computed": false,
            "start": 1898,
            "end": 1932
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 1933,
              "end": 1936
            }
          ],
          "optional": false,
          "start": 1898,
          "end": 1937
        },
        "start": 1892,
        "end": 1937
      },
      "directive": null,
      "start": 1892,
      "end": 1938
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strOrNum",
          "optional": false,
          "typeAnnotation": null,
          "start": 1939,
          "end": 1947
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1950,
              "end": 1951
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "commonMethodWithOwnTypeParameter",
              "optional": false,
              "typeAnnotation": null,
              "start": 1952,
              "end": 1984
            },
            "optional": false,
            "computed": false,
            "start": 1950,
            "end": 1984
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "strOrNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 1985,
              "end": 1993
            }
          ],
          "optional": false,
          "start": 1950,
          "end": 1994
        },
        "start": 1939,
        "end": 1994
      },
      "directive": null,
      "start": 1939,
      "end": 1995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1997,
          "end": 1998
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyOnlyInI1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1999,
          "end": 2015
        },
        "optional": false,
        "computed": false,
        "start": 1997,
        "end": 2015
      },
      "directive": null,
      "start": 1997,
      "end": 2016
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2026,
          "end": 2027
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "propertyOnlyInI2",
          "optional": false,
          "typeAnnotation": null,
          "start": 2028,
          "end": 2044
        },
        "optional": false,
        "computed": false,
        "start": 2026,
        "end": 2044
      },
      "directive": null,
      "start": 2026,
      "end": 2045
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2055,
            "end": 2056
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "methodOnlyInI1",
            "optional": false,
            "typeAnnotation": null,
            "start": 2057,
            "end": 2071
          },
          "optional": false,
          "computed": false,
          "start": 2055,
          "end": 2071
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 2072,
            "end": 2079
          }
        ],
        "optional": false,
        "start": 2055,
        "end": 2080
      },
      "directive": null,
      "start": 2055,
      "end": 2081
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 2091,
            "end": 2092
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "methodOnlyInI2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2093,
            "end": 2107
          },
          "optional": false,
          "computed": false,
          "start": 2091,
          "end": 2107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2108,
            "end": 2110
          }
        ],
        "optional": false,
        "start": 2091,
        "end": 2111
      },
      "directive": null,
      "start": 2091,
      "end": 2112
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2121
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 22,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 63,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentParameterType",
    "start": 96,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 155,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 190,
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
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferenType",
    "start": 211,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 252,
    "end": 281
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
    "value": "T",
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
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "commonMethodWithOwnTypeParameter",
    "start": 296,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 347,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 365,
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
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 374,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 386,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 404,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 415,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 425,
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
    "type": "Punctuator",
    "value": ">",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 437,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 457,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 466,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 478,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 498,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentParameterType",
    "start": 511,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 558,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 570,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 605,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 614,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferenType",
    "start": 626,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 654,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 667,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithOwnTypeParameter",
    "start": 711,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 748,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 762,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 780,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 789,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 801,
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
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1004,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1012,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 1020,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1045,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1053,
    "end": 1056
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1062,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1070,
    "end": 1077
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1082,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1087,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1095,
    "end": 1102
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1107,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1117,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1248,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "commonPropertyType",
    "start": 1256,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1286,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "commonMethodType",
    "start": 1294,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1369,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "commonPropertyDifferenType",
    "start": 1382,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1410,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentReturnType",
    "start": 1423,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1455,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentParameterType",
    "start": 1481,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "commonMethodDifferentParameterType",
    "start": 1549,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1584,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "num",
    "start": 1801,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1805,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithTypeParameter",
    "start": 1809,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1839,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1845,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithOwnTypeParameter",
    "start": 1853,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 1886,
    "end": 1889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1899,
    "end": 1900
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithOwnTypeParameter",
    "start": 1900,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 1933,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1939,
    "end": 1947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Identifier",
    "value": "commonMethodWithOwnTypeParameter",
    "start": 1952,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "strOrNum",
    "start": 1985,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1997,
    "end": 1998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1998,
    "end": 1999
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI1",
    "start": 1999,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "propertyOnlyInI2",
    "start": 2028,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI1",
    "start": 2057,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 2072,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Identifier",
    "value": "methodOnlyInI2",
    "start": 2093,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2107,
    "end": 2108
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2108,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112
  }
]
```
