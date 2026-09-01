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
        "name": "QueryKey",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 13
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReadonlyArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnknownKeyword",
              "start": 30,
              "end": 37
            }
          ],
          "start": 29,
          "end": 38
        },
        "start": 16,
        "end": 38
      },
      "declare": false,
      "start": 0,
      "end": 39
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Register",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 59
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 60,
        "end": 62
      },
      "declare": false,
      "start": 41,
      "end": 62
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefaultError",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 81
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Register",
            "optional": false,
            "typeAnnotation": null,
            "start": 84,
            "end": 92
          },
          "typeArguments": null,
          "start": 84,
          "end": 92
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
                "name": "defaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 117
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 131
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 125,
                    "end": 131
                  },
                  "start": 119,
                  "end": 131
                },
                "start": 117,
                "end": 131
              },
              "accessibility": null,
              "static": false,
              "start": 105,
              "end": 132
            }
          ],
          "start": 101,
          "end": 134
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TError",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 145
          },
          "typeArguments": null,
          "start": 139,
          "end": 145
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Error",
            "optional": false,
            "typeAnnotation": null,
            "start": 150,
            "end": 155
          },
          "typeArguments": null,
          "start": 150,
          "end": 155
        },
        "start": 84,
        "end": 155
      },
      "declare": false,
      "start": 64,
      "end": 156
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ShouldRetryFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 182
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 189
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 204
              },
              "typeArguments": null,
              "start": 192,
              "end": 204
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 183,
            "end": 204
          }
        ],
        "start": 182,
        "end": 205
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "failureCount",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 226,
                "end": 232
              },
              "start": 224,
              "end": 232
            },
            "start": 212,
            "end": 232
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "error",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 249
                },
                "typeArguments": null,
                "start": 243,
                "end": 249
              },
              "start": 241,
              "end": 249
            },
            "start": 236,
            "end": 249
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 256,
            "end": 263
          },
          "start": 253,
          "end": 263
        },
        "start": 208,
        "end": 263
      },
      "declare": false,
      "start": 158,
      "end": 264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RetryValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 270,
        "end": 280
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 287
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 281,
            "end": 287
          }
        ],
        "start": 280,
        "end": 288
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSBooleanKeyword",
            "start": 291,
            "end": 298
          },
          {
            "type": "TSNumberKeyword",
            "start": 301,
            "end": 307
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ShouldRetryFunction",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 329
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 336
                  },
                  "typeArguments": null,
                  "start": 330,
                  "end": 336
                }
              ],
              "start": 329,
              "end": 337
            },
            "start": 310,
            "end": 337
          }
        ],
        "start": 291,
        "end": 337
      },
      "declare": false,
      "start": 265,
      "end": 338
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunctionContext",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 365
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 369,
              "end": 378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 395
              },
              "typeArguments": null,
              "start": 387,
              "end": 395
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 406
              },
              "typeArguments": null,
              "start": 398,
              "end": 406
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 369,
            "end": 406
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 420
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 423,
              "end": 428
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 410,
            "end": 428
          }
        ],
        "start": 365,
        "end": 431
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPageParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 445
              },
              "typeArguments": null,
              "start": 435,
              "end": 445
            }
          ],
          "start": 434,
          "end": 446
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNeverKeyword",
              "start": 456,
              "end": 461
            }
          ],
          "start": 455,
          "end": 462
        },
        "trueType": {
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
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 483
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 485,
                    "end": 494
                  },
                  "typeArguments": null,
                  "start": 485,
                  "end": 494
                },
                "start": 483,
                "end": 494
              },
              "accessibility": null,
              "static": false,
              "start": 475,
              "end": 495
            }
          ],
          "start": 467,
          "end": 501
        },
        "falseType": {
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
                "name": "queryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 522
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 524,
                    "end": 533
                  },
                  "typeArguments": null,
                  "start": 524,
                  "end": 533
                },
                "start": 522,
                "end": 533
              },
              "accessibility": null,
              "static": false,
              "start": 514,
              "end": 534
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pageParam",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 550
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TPageParam",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 562
                  },
                  "typeArguments": null,
                  "start": 552,
                  "end": 562
                },
                "start": 550,
                "end": 562
              },
              "accessibility": null,
              "static": false,
              "start": 541,
              "end": 563
            }
          ],
          "start": 506,
          "end": 569
        },
        "start": 434,
        "end": 569
      },
      "declare": false,
      "start": 340,
      "end": 570
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 577,
        "end": 590
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
              "start": 594,
              "end": 595
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 598,
              "end": 605
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 594,
            "end": 605
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 618
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 635
              },
              "typeArguments": null,
              "start": 627,
              "end": 635
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 638,
                "end": 646
              },
              "typeArguments": null,
              "start": 638,
              "end": 646
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 609,
            "end": 646
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 650,
              "end": 660
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 663,
              "end": 668
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 650,
            "end": 668
          }
        ],
        "start": 590,
        "end": 671
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
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
                  "name": "QueryFunctionContext",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 704
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 705,
                        "end": 714
                      },
                      "typeArguments": null,
                      "start": 705,
                      "end": 714
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 716,
                        "end": 726
                      },
                      "typeArguments": null,
                      "start": 716,
                      "end": 726
                    }
                  ],
                  "start": 704,
                  "end": 727
                },
                "start": 684,
                "end": 727
              },
              "start": 682,
              "end": 727
            },
            "start": 675,
            "end": 727
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
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 732,
                  "end": 733
                },
                "typeArguments": null,
                "start": 732,
                "end": 733
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 743
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
                        "start": 744,
                        "end": 745
                      },
                      "typeArguments": null,
                      "start": 744,
                      "end": 745
                    }
                  ],
                  "start": 743,
                  "end": 746
                },
                "start": 736,
                "end": 746
              }
            ],
            "start": 732,
            "end": 746
          },
          "start": 729,
          "end": 746
        },
        "start": 674,
        "end": 746
      },
      "declare": false,
      "start": 572,
      "end": 747
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 759,
        "end": 771
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 775,
              "end": 787
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 790,
              "end": 797
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 775,
            "end": 797
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 807
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 822
              },
              "typeArguments": null,
              "start": 810,
              "end": 822
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 801,
            "end": 822
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 826,
              "end": 831
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 834,
                "end": 846
              },
              "typeArguments": null,
              "start": 834,
              "end": 846
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 826,
            "end": 846
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 859
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 868,
                "end": 876
              },
              "typeArguments": null,
              "start": 868,
              "end": 876
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 879,
                "end": 887
              },
              "typeArguments": null,
              "start": 879,
              "end": 887
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 850,
            "end": 887
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 891,
              "end": 901
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 904,
              "end": 909
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 891,
            "end": 909
          }
        ],
        "start": 771,
        "end": 912
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
              "name": "retry",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 922
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RetryValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 935
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 942
                      },
                      "typeArguments": null,
                      "start": 936,
                      "end": 942
                    }
                  ],
                  "start": 935,
                  "end": 943
                },
                "start": 925,
                "end": 943
              },
              "start": 923,
              "end": 943
            },
            "accessibility": null,
            "static": false,
            "start": 917,
            "end": 944
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 947,
              "end": 954
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QueryFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 970
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryFnData",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 971,
                        "end": 983
                      },
                      "typeArguments": null,
                      "start": 971,
                      "end": 983
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TQueryKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 985,
                        "end": 994
                      },
                      "typeArguments": null,
                      "start": 985,
                      "end": 994
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TPageParam",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 996,
                        "end": 1006
                      },
                      "typeArguments": null,
                      "start": 996,
                      "end": 1006
                    }
                  ],
                  "start": 970,
                  "end": 1007
                },
                "start": 957,
                "end": 1007
              },
              "start": 955,
              "end": 1007
            },
            "accessibility": null,
            "static": false,
            "start": 947,
            "end": 1008
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "queryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1019
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1022,
                  "end": 1031
                },
                "typeArguments": null,
                "start": 1022,
                "end": 1031
              },
              "start": 1020,
              "end": 1031
            },
            "accessibility": null,
            "static": false,
            "start": 1011,
            "end": 1032
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1046
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1049,
                  "end": 1054
                },
                "typeArguments": null,
                "start": 1049,
                "end": 1054
              },
              "start": 1047,
              "end": 1054
            },
            "accessibility": null,
            "static": false,
            "start": 1035,
            "end": 1055
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "initialDataUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1078
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1081,
                    "end": 1087
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 1097,
                            "end": 1103
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1106,
                            "end": 1115
                          }
                        ],
                        "start": 1097,
                        "end": 1115
                      },
                      "start": 1094,
                      "end": 1115
                    },
                    "start": 1091,
                    "end": 1115
                  }
                ],
                "start": 1081,
                "end": 1116
              },
              "start": 1079,
              "end": 1116
            },
            "accessibility": null,
            "static": false,
            "start": 1058,
            "end": 1117
          }
        ],
        "start": 913,
        "end": 1119
      },
      "declare": false,
      "start": 749,
      "end": 1119
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1131,
        "end": 1151
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1155,
              "end": 1167
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1170,
              "end": 1177
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1155,
            "end": 1177
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1187
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1202
              },
              "typeArguments": null,
              "start": 1190,
              "end": 1202
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1181,
            "end": 1202
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1206,
              "end": 1211
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1214,
                "end": 1226
              },
              "typeArguments": null,
              "start": 1214,
              "end": 1226
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1206,
            "end": 1226
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1230,
              "end": 1240
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1243,
                "end": 1255
              },
              "typeArguments": null,
              "start": 1243,
              "end": 1255
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1230,
            "end": 1255
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1259,
              "end": 1268
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1285
              },
              "typeArguments": null,
              "start": 1277,
              "end": 1285
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1296
              },
              "typeArguments": null,
              "start": 1288,
              "end": 1296
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1259,
            "end": 1296
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPageParam",
              "optional": false,
              "typeAnnotation": null,
              "start": 1300,
              "end": 1310
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 1313,
              "end": 1318
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1300,
            "end": 1318
          }
        ],
        "start": 1151,
        "end": 1321
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "QueryOptions",
            "optional": false,
            "typeAnnotation": null,
            "start": 1330,
            "end": 1342
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryFnData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1360
                },
                "typeArguments": null,
                "start": 1348,
                "end": 1360
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1366,
                  "end": 1372
                },
                "typeArguments": null,
                "start": 1366,
                "end": 1372
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1378,
                  "end": 1388
                },
                "typeArguments": null,
                "start": 1378,
                "end": 1388
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TQueryKey",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1394,
                  "end": 1403
                },
                "typeArguments": null,
                "start": 1394,
                "end": 1403
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPageParam",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1409,
                  "end": 1419
                },
                "typeArguments": null,
                "start": 1409,
                "end": 1419
              }
            ],
            "start": 1342,
            "end": 1423
          },
          "start": 1330,
          "end": 1423
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
              "name": "enabled",
              "optional": false,
              "typeAnnotation": null,
              "start": 1428,
              "end": 1435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1438,
                "end": 1445
              },
              "start": 1436,
              "end": 1445
            },
            "accessibility": null,
            "static": false,
            "start": 1428,
            "end": 1446
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "refetchInterval",
              "optional": false,
              "typeAnnotation": null,
              "start": 1449,
              "end": 1464
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1467,
                "end": 1473
              },
              "start": 1465,
              "end": 1473
            },
            "accessibility": null,
            "static": false,
            "start": 1449,
            "end": 1474
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 1477,
              "end": 1483
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
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TQueryData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1493,
                          "end": 1503
                        },
                        "typeArguments": null,
                        "start": 1493,
                        "end": 1503
                      },
                      "start": 1491,
                      "end": 1503
                    },
                    "start": 1487,
                    "end": 1503
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1513
                    },
                    "typeArguments": null,
                    "start": 1508,
                    "end": 1513
                  },
                  "start": 1505,
                  "end": 1513
                },
                "start": 1486,
                "end": 1513
              },
              "start": 1484,
              "end": 1513
            },
            "accessibility": null,
            "static": false,
            "start": 1477,
            "end": 1514
          }
        ],
        "start": 1424,
        "end": 1516
      },
      "declare": false,
      "start": 1121,
      "end": 1516
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1523,
        "end": 1538
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1542,
              "end": 1554
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1557,
              "end": 1564
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1542,
            "end": 1564
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1568,
              "end": 1574
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1577,
                "end": 1589
              },
              "typeArguments": null,
              "start": 1577,
              "end": 1589
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1568,
            "end": 1589
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1593,
              "end": 1598
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1601,
                "end": 1613
              },
              "typeArguments": null,
              "start": 1601,
              "end": 1613
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1593,
            "end": 1613
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1617,
              "end": 1627
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 1630,
                "end": 1642
              },
              "typeArguments": null,
              "start": 1630,
              "end": 1642
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1617,
            "end": 1642
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1646,
              "end": 1655
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1664,
                "end": 1672
              },
              "typeArguments": null,
              "start": 1664,
              "end": 1672
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 1675,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1675,
              "end": 1683
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1646,
            "end": 1683
          }
        ],
        "start": 1538,
        "end": 1686
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "Property",
          "optional": false,
          "typeAnnotation": null,
          "start": 1694,
          "end": 1702
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1712,
              "end": 1732
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1738,
                    "end": 1750
                  },
                  "typeArguments": null,
                  "start": 1738,
                  "end": 1750
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1756,
                    "end": 1762
                  },
                  "typeArguments": null,
                  "start": 1756,
                  "end": 1762
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1768,
                    "end": 1773
                  },
                  "typeArguments": null,
                  "start": 1768,
                  "end": 1773
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1789
                  },
                  "typeArguments": null,
                  "start": 1779,
                  "end": 1789
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1795,
                    "end": 1804
                  },
                  "typeArguments": null,
                  "start": 1795,
                  "end": 1804
                }
              ],
              "start": 1732,
              "end": 1808
            },
            "start": 1712,
            "end": 1808
          },
          "start": 1706,
          "end": 1808
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QueryObserverOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1811,
              "end": 1831
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1837,
                    "end": 1849
                  },
                  "typeArguments": null,
                  "start": 1837,
                  "end": 1849
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1855,
                    "end": 1861
                  },
                  "typeArguments": null,
                  "start": 1855,
                  "end": 1861
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1867,
                    "end": 1872
                  },
                  "typeArguments": null,
                  "start": 1867,
                  "end": 1872
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1878,
                    "end": 1888
                  },
                  "typeArguments": null,
                  "start": 1878,
                  "end": 1888
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1894,
                    "end": 1903
                  },
                  "typeArguments": null,
                  "start": 1894,
                  "end": 1903
                }
              ],
              "start": 1831,
              "end": 1907
            },
            "start": 1811,
            "end": 1907
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Property",
              "optional": false,
              "typeAnnotation": null,
              "start": 1908,
              "end": 1916
            },
            "typeArguments": null,
            "start": 1908,
            "end": 1916
          },
          "start": 1811,
          "end": 1917
        },
        "optional": false,
        "readonly": null,
        "start": 1689,
        "end": 1920
      },
      "declare": false,
      "start": 1518,
      "end": 1921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UndefinedInitialQueryOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 1928,
        "end": 1956
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1972
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1975,
              "end": 1982
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1960,
            "end": 1982
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 1986,
              "end": 1992
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 1995,
                "end": 2007
              },
              "typeArguments": null,
              "start": 1995,
              "end": 2007
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1986,
            "end": 2007
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2011,
              "end": 2016
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 2019,
                "end": 2031
              },
              "typeArguments": null,
              "start": 2019,
              "end": 2031
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2011,
            "end": 2031
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2044
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2061
              },
              "typeArguments": null,
              "start": 2053,
              "end": 2061
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 2064,
                "end": 2072
              },
              "typeArguments": null,
              "start": 2064,
              "end": 2072
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2035,
            "end": 2072
          }
        ],
        "start": 1956,
        "end": 2075
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UseQueryOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 2078,
              "end": 2093
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2094,
                    "end": 2106
                  },
                  "typeArguments": null,
                  "start": 2094,
                  "end": 2106
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2108,
                    "end": 2114
                  },
                  "typeArguments": null,
                  "start": 2108,
                  "end": 2114
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2116,
                    "end": 2121
                  },
                  "typeArguments": null,
                  "start": 2116,
                  "end": 2121
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryFnData",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2123,
                    "end": 2135
                  },
                  "typeArguments": null,
                  "start": 2123,
                  "end": 2135
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TQueryKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2137,
                    "end": 2146
                  },
                  "typeArguments": null,
                  "start": 2137,
                  "end": 2146
                }
              ],
              "start": 2093,
              "end": 2147
            },
            "start": 2078,
            "end": 2147
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
                  "name": "initialData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2154,
                  "end": 2165
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 2168,
                    "end": 2177
                  },
                  "start": 2166,
                  "end": 2177
                },
                "accessibility": null,
                "static": false,
                "start": 2154,
                "end": 2178
              }
            ],
            "start": 2150,
            "end": 2180
          }
        ],
        "start": 2078,
        "end": 2180
      },
      "declare": false,
      "start": 1923,
      "end": 2181
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverBaseResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 2193,
        "end": 2216
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2217,
              "end": 2222
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2225,
              "end": 2232
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2217,
            "end": 2232
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2234,
              "end": 2240
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2243,
                "end": 2255
              },
              "typeArguments": null,
              "start": 2243,
              "end": 2255
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2234,
            "end": 2255
          }
        ],
        "start": 2216,
        "end": 2256
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 2261,
              "end": 2265
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
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2267,
                      "end": 2272
                    },
                    "typeArguments": null,
                    "start": 2267,
                    "end": 2272
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 2275,
                    "end": 2284
                  }
                ],
                "start": 2267,
                "end": 2284
              },
              "start": 2265,
              "end": 2284
            },
            "accessibility": null,
            "static": false,
            "start": 2261,
            "end": 2285
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2288,
              "end": 2301
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2303,
                "end": 2309
              },
              "start": 2301,
              "end": 2309
            },
            "accessibility": null,
            "static": false,
            "start": 2288,
            "end": 2310
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
              "start": 2313,
              "end": 2318
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
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2320,
                      "end": 2326
                    },
                    "typeArguments": null,
                    "start": 2320,
                    "end": 2326
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2329,
                    "end": 2333
                  }
                ],
                "start": 2320,
                "end": 2333
              },
              "start": 2318,
              "end": 2333
            },
            "accessibility": null,
            "static": false,
            "start": 2313,
            "end": 2334
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdatedAt",
              "optional": false,
              "typeAnnotation": null,
              "start": 2337,
              "end": 2351
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2353,
                "end": 2359
              },
              "start": 2351,
              "end": 2359
            },
            "accessibility": null,
            "static": false,
            "start": 2337,
            "end": 2360
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureCount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2363,
              "end": 2375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2377,
                "end": 2383
              },
              "start": 2375,
              "end": 2383
            },
            "accessibility": null,
            "static": false,
            "start": 2363,
            "end": 2384
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "failureReason",
              "optional": false,
              "typeAnnotation": null,
              "start": 2387,
              "end": 2400
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
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2402,
                      "end": 2408
                    },
                    "typeArguments": null,
                    "start": 2402,
                    "end": 2408
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2411,
                    "end": 2415
                  }
                ],
                "start": 2402,
                "end": 2415
              },
              "start": 2400,
              "end": 2415
            },
            "accessibility": null,
            "static": false,
            "start": 2387,
            "end": 2416
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "errorUpdateCount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2419,
              "end": 2435
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2437,
                "end": 2443
              },
              "start": 2435,
              "end": 2443
            },
            "accessibility": null,
            "static": false,
            "start": 2419,
            "end": 2444
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2447,
              "end": 2454
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2456,
                "end": 2463
              },
              "start": 2454,
              "end": 2463
            },
            "accessibility": null,
            "static": false,
            "start": 2447,
            "end": 2464
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetched",
              "optional": false,
              "typeAnnotation": null,
              "start": 2467,
              "end": 2476
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2478,
                "end": 2485
              },
              "start": 2476,
              "end": 2485
            },
            "accessibility": null,
            "static": false,
            "start": 2467,
            "end": 2486
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetchedAfterMount",
              "optional": false,
              "typeAnnotation": null,
              "start": 2489,
              "end": 2508
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2510,
                "end": 2517
              },
              "start": 2508,
              "end": 2517
            },
            "accessibility": null,
            "static": false,
            "start": 2489,
            "end": 2518
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isFetching",
              "optional": false,
              "typeAnnotation": null,
              "start": 2521,
              "end": 2531
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2533,
                "end": 2540
              },
              "start": 2531,
              "end": 2540
            },
            "accessibility": null,
            "static": false,
            "start": 2521,
            "end": 2541
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoading",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2553
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2555,
                "end": 2562
              },
              "start": 2553,
              "end": 2562
            },
            "accessibility": null,
            "static": false,
            "start": 2544,
            "end": 2563
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null,
              "start": 2566,
              "end": 2575
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2577,
                "end": 2584
              },
              "start": 2575,
              "end": 2584
            },
            "accessibility": null,
            "static": false,
            "start": 2566,
            "end": 2585
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2588,
              "end": 2602
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2604,
                "end": 2611
              },
              "start": 2602,
              "end": 2611
            },
            "accessibility": null,
            "static": false,
            "start": 2588,
            "end": 2612
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isInitialLoading",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2631
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2633,
                "end": 2640
              },
              "start": 2631,
              "end": 2640
            },
            "accessibility": null,
            "static": false,
            "start": 2615,
            "end": 2641
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPaused",
              "optional": false,
              "typeAnnotation": null,
              "start": 2644,
              "end": 2652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2654,
                "end": 2661
              },
              "start": 2652,
              "end": 2661
            },
            "accessibility": null,
            "static": false,
            "start": 2644,
            "end": 2662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPlaceholderData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2665,
              "end": 2682
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2684,
                "end": 2691
              },
              "start": 2682,
              "end": 2691
            },
            "accessibility": null,
            "static": false,
            "start": 2665,
            "end": 2692
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2695,
              "end": 2709
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2711,
                "end": 2718
              },
              "start": 2709,
              "end": 2718
            },
            "accessibility": null,
            "static": false,
            "start": 2695,
            "end": 2719
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetching",
              "optional": false,
              "typeAnnotation": null,
              "start": 2722,
              "end": 2734
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2736,
                "end": 2743
              },
              "start": 2734,
              "end": 2743
            },
            "accessibility": null,
            "static": false,
            "start": 2722,
            "end": 2744
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isStale",
              "optional": false,
              "typeAnnotation": null,
              "start": 2747,
              "end": 2754
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2756,
                "end": 2763
              },
              "start": 2754,
              "end": 2763
            },
            "accessibility": null,
            "static": false,
            "start": 2747,
            "end": 2764
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 2767,
              "end": 2776
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 2778,
                "end": 2785
              },
              "start": 2776,
              "end": 2785
            },
            "accessibility": null,
            "static": false,
            "start": 2767,
            "end": 2786
          }
        ],
        "start": 2257,
        "end": 2788
      },
      "declare": false,
      "start": 2183,
      "end": 2788
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverSuccessResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 2800,
        "end": 2826
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 2827,
              "end": 2832
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 2835,
              "end": 2842
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2827,
            "end": 2842
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2844,
              "end": 2850
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 2853,
                "end": 2865
              },
              "typeArguments": null,
              "start": 2853,
              "end": 2865
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 2844,
            "end": 2865
          }
        ],
        "start": 2826,
        "end": 2866
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "QueryObserverBaseResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 2877,
            "end": 2900
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2901,
                  "end": 2906
                },
                "typeArguments": null,
                "start": 2901,
                "end": 2906
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2908,
                  "end": 2914
                },
                "typeArguments": null,
                "start": 2908,
                "end": 2914
              }
            ],
            "start": 2900,
            "end": 2915
          },
          "start": 2877,
          "end": 2915
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
              "start": 2920,
              "end": 2924
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2926,
                  "end": 2931
                },
                "typeArguments": null,
                "start": 2926,
                "end": 2931
              },
              "start": 2924,
              "end": 2931
            },
            "accessibility": null,
            "static": false,
            "start": 2920,
            "end": 2932
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
              "start": 2935,
              "end": 2940
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNullKeyword",
                "start": 2942,
                "end": 2946
              },
              "start": 2940,
              "end": 2946
            },
            "accessibility": null,
            "static": false,
            "start": 2935,
            "end": 2947
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2957
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 2959,
                  "end": 2964
                },
                "start": 2959,
                "end": 2964
              },
              "start": 2957,
              "end": 2964
            },
            "accessibility": null,
            "static": false,
            "start": 2950,
            "end": 2965
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isPending",
              "optional": false,
              "typeAnnotation": null,
              "start": 2968,
              "end": 2977
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 2979,
                  "end": 2984
                },
                "start": 2979,
                "end": 2984
              },
              "start": 2977,
              "end": 2984
            },
            "accessibility": null,
            "static": false,
            "start": 2968,
            "end": 2985
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isLoadingError",
              "optional": false,
              "typeAnnotation": null,
              "start": 2988,
              "end": 3002
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3004,
                  "end": 3009
                },
                "start": 3004,
                "end": 3009
              },
              "start": 3002,
              "end": 3009
            },
            "accessibility": null,
            "static": false,
            "start": 2988,
            "end": 3010
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isRefetchError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3013,
              "end": 3027
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 3029,
                  "end": 3034
                },
                "start": 3029,
                "end": 3034
              },
              "start": 3027,
              "end": 3034
            },
            "accessibility": null,
            "static": false,
            "start": 3013,
            "end": 3035
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 3038,
              "end": 3047
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 3049,
                  "end": 3053
                },
                "start": 3049,
                "end": 3053
              },
              "start": 3047,
              "end": 3053
            },
            "accessibility": null,
            "static": false,
            "start": 3038,
            "end": 3054
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "status",
              "optional": false,
              "typeAnnotation": null,
              "start": 3057,
              "end": 3063
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "success",
                  "raw": "\"success\"",
                  "start": 3065,
                  "end": 3074
                },
                "start": 3065,
                "end": 3074
              },
              "start": 3063,
              "end": 3074
            },
            "accessibility": null,
            "static": false,
            "start": 3057,
            "end": 3075
          }
        ],
        "start": 2916,
        "end": 3077
      },
      "declare": false,
      "start": 2790,
      "end": 3077
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DefinedQueryObserverResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 3084,
        "end": 3110
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3114,
              "end": 3119
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3122,
              "end": 3129
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3114,
            "end": 3129
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3133,
              "end": 3139
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3142,
                "end": 3154
              },
              "typeArguments": null,
              "start": 3142,
              "end": 3154
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3133,
            "end": 3154
          }
        ],
        "start": 3110,
        "end": 3157
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "QueryObserverSuccessResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 3160,
          "end": 3186
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3187,
                "end": 3192
              },
              "typeArguments": null,
              "start": 3187,
              "end": 3192
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3194,
                "end": 3200
              },
              "typeArguments": null,
              "start": 3194,
              "end": 3200
            }
          ],
          "start": 3186,
          "end": 3201
        },
        "start": 3160,
        "end": 3201
      },
      "declare": false,
      "start": 3079,
      "end": 3202
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QueryObserverResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 3208,
        "end": 3227
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3231,
              "end": 3236
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3239,
              "end": 3246
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3231,
            "end": 3246
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3250,
              "end": 3256
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3259,
                "end": 3271
              },
              "typeArguments": null,
              "start": 3259,
              "end": 3271
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3250,
            "end": 3271
          }
        ],
        "start": 3227,
        "end": 3274
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "DefinedQueryObserverResult",
          "optional": false,
          "typeAnnotation": null,
          "start": 3277,
          "end": 3303
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3304,
                "end": 3309
              },
              "typeArguments": null,
              "start": 3304,
              "end": 3309
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3311,
                "end": 3317
              },
              "typeArguments": null,
              "start": 3311,
              "end": 3317
            }
          ],
          "start": 3303,
          "end": 3318
        },
        "start": 3277,
        "end": 3318
      },
      "declare": false,
      "start": 3203,
      "end": 3319
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ToRef",
        "optional": false,
        "typeAnnotation": null,
        "start": 3326,
        "end": 3331
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
              "start": 3332,
              "end": 3333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3332,
            "end": 3333
          }
        ],
        "start": 3331,
        "end": 3334
      },
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
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 3341,
              "end": 3346
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
                  "start": 3348,
                  "end": 3349
                },
                "typeArguments": null,
                "start": 3348,
                "end": 3349
              },
              "start": 3346,
              "end": 3349
            },
            "accessibility": null,
            "static": false,
            "start": 3341,
            "end": 3350
          }
        ],
        "start": 3337,
        "end": 3352
      },
      "declare": false,
      "start": 3321,
      "end": 3353
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseBaseQueryReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3360,
        "end": 3382
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3386,
              "end": 3391
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3386,
            "end": 3391
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3395,
              "end": 3401
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3395,
            "end": 3401
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Result",
              "optional": false,
              "typeAnnotation": null,
              "start": 3405,
              "end": 3411
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryObserverResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 3414,
                "end": 3433
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3434,
                      "end": 3439
                    },
                    "typeArguments": null,
                    "start": 3434,
                    "end": 3439
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3441,
                      "end": 3447
                    },
                    "typeArguments": null,
                    "start": 3441,
                    "end": 3447
                  }
                ],
                "start": 3433,
                "end": 3448
              },
              "start": 3414,
              "end": 3448
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3405,
            "end": 3448
          }
        ],
        "start": 3382,
        "end": 3451
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
              "start": 3459,
              "end": 3460
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Result",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3470,
                  "end": 3476
                },
                "typeArguments": null,
                "start": 3470,
                "end": 3476
              },
              "start": 3464,
              "end": 3476
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3479,
                  "end": 3480
                },
                "typeArguments": null,
                "start": 3479,
                "end": 3480
              },
              "extendsType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "fetchNextPage",
                      "raw": "\"fetchNextPage\"",
                      "start": 3495,
                      "end": 3510
                    },
                    "start": 3495,
                    "end": 3510
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "fetchPreviousPage",
                      "raw": "\"fetchPreviousPage\"",
                      "start": 3517,
                      "end": 3536
                    },
                    "start": 3517,
                    "end": 3536
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "refetch",
                      "raw": "\"refetch\"",
                      "start": 3543,
                      "end": 3552
                    },
                    "start": 3543,
                    "end": 3552
                  }
                ],
                "start": 3493,
                "end": 3552
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3559,
                    "end": 3565
                  },
                  "typeArguments": null,
                  "start": 3559,
                  "end": 3565
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3566,
                    "end": 3567
                  },
                  "typeArguments": null,
                  "start": 3566,
                  "end": 3567
                },
                "start": 3559,
                "end": 3568
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ToRef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3575,
                  "end": 3580
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
                          "name": "Readonly",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3581,
                          "end": 3589
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3590,
                                "end": 3596
                              },
                              "typeArguments": null,
                              "start": 3590,
                              "end": 3596
                            }
                          ],
                          "start": 3589,
                          "end": 3597
                        },
                        "start": 3581,
                        "end": 3597
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3598,
                          "end": 3599
                        },
                        "typeArguments": null,
                        "start": 3598,
                        "end": 3599
                      },
                      "start": 3581,
                      "end": 3600
                    }
                  ],
                  "start": 3580,
                  "end": 3601
                },
                "start": 3575,
                "end": 3601
              },
              "start": 3479,
              "end": 3601
            },
            "optional": false,
            "readonly": null,
            "start": 3454,
            "end": 3604
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
                  "name": "suspense",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3611,
                  "end": 3619
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
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
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3627,
                          "end": 3634
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Result",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3635,
                                "end": 3641
                              },
                              "typeArguments": null,
                              "start": 3635,
                              "end": 3641
                            }
                          ],
                          "start": 3634,
                          "end": 3642
                        },
                        "start": 3627,
                        "end": 3642
                      },
                      "start": 3624,
                      "end": 3642
                    },
                    "start": 3621,
                    "end": 3642
                  },
                  "start": 3619,
                  "end": 3642
                },
                "accessibility": null,
                "static": false,
                "start": 3611,
                "end": 3643
              }
            ],
            "start": 3607,
            "end": 3645
          }
        ],
        "start": 3454,
        "end": 3645
      },
      "declare": false,
      "start": 3355,
      "end": 3646
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryReturnType",
        "optional": false,
        "typeAnnotation": null,
        "start": 3653,
        "end": 3671
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3672,
              "end": 3677
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3672,
            "end": 3677
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3679,
              "end": 3685
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3679,
            "end": 3685
          }
        ],
        "start": 3671,
        "end": 3686
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UseBaseQueryReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 3689,
          "end": 3711
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3717
              },
              "typeArguments": null,
              "start": 3712,
              "end": 3717
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3719,
                "end": 3725
              },
              "typeArguments": null,
              "start": 3719,
              "end": 3725
            }
          ],
          "start": 3711,
          "end": 3726
        },
        "start": 3689,
        "end": 3726
      },
      "declare": false,
      "start": 3648,
      "end": 3727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 3746,
        "end": 3754
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
              "name": "TQueryFnData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3758,
              "end": 3770
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 3773,
              "end": 3780
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3758,
            "end": 3780
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TError",
              "optional": false,
              "typeAnnotation": null,
              "start": 3784,
              "end": 3790
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "DefaultError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3793,
                "end": 3805
              },
              "typeArguments": null,
              "start": 3793,
              "end": 3805
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3784,
            "end": 3805
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3809,
              "end": 3814
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TQueryFnData",
                "optional": false,
                "typeAnnotation": null,
                "start": 3817,
                "end": 3829
              },
              "typeArguments": null,
              "start": 3817,
              "end": 3829
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3809,
            "end": 3829
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TQueryKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 3833,
              "end": 3842
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 3851,
                "end": 3859
              },
              "typeArguments": null,
              "start": 3851,
              "end": 3859
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QueryKey",
                "optional": false,
                "typeAnnotation": null,
                "start": 3862,
                "end": 3870
              },
              "typeArguments": null,
              "start": 3862,
              "end": 3870
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3833,
            "end": 3870
          }
        ],
        "start": 3754,
        "end": 3873
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UndefinedInitialQueryOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 3886,
                "end": 3914
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryFnData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3915,
                      "end": 3927
                    },
                    "typeArguments": null,
                    "start": 3915,
                    "end": 3927
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3929,
                      "end": 3935
                    },
                    "typeArguments": null,
                    "start": 3929,
                    "end": 3935
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3937,
                      "end": 3942
                    },
                    "typeArguments": null,
                    "start": 3937,
                    "end": 3942
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TQueryKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3944,
                      "end": 3953
                    },
                    "typeArguments": null,
                    "start": 3944,
                    "end": 3953
                  }
                ],
                "start": 3914,
                "end": 3954
              },
              "start": 3886,
              "end": 3954
            },
            "start": 3884,
            "end": 3954
          },
          "start": 3877,
          "end": 3954
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 3959,
            "end": 3977
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3978,
                  "end": 3983
                },
                "typeArguments": null,
                "start": 3978,
                "end": 3983
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TError",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3985,
                  "end": 3991
                },
                "typeArguments": null,
                "start": 3985,
                "end": 3991
              }
            ],
            "start": 3977,
            "end": 3992
          },
          "start": 3959,
          "end": 3992
        },
        "start": 3957,
        "end": 3992
      },
      "body": null,
      "expression": false,
      "start": 3729,
      "end": 3993
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4009,
            "end": 4027
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 4009,
            "end": 4027
          },
          "exportKind": "type",
          "start": 4004,
          "end": 4027
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 4029,
            "end": 4037
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 4029,
            "end": 4037
          },
          "exportKind": "value",
          "start": 4029,
          "end": 4037
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3995,
      "end": 4040
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4041
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
    "value": "QueryKey",
    "start": 5,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 16,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 30,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 41,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "Register",
    "start": 51,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 64,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 69,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Register",
    "start": 84,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "defaultError",
    "start": 105,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 119,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 139,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 150,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 158,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "ShouldRetryFunction",
    "start": 163,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 192,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "failureCount",
    "start": 212,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 253,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 265,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "RetryValue",
    "start": 270,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "ShouldRetryFunction",
    "start": 310,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 330,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 340,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "QueryFunctionContext",
    "start": 345,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 369,
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
    "value": "QueryKey",
    "start": 387,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 398,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 410,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 423,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 435,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 447,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 456,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "queryKey",
    "start": 475,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 485,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "queryKey",
    "start": 514,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 524,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "pageParam",
    "start": 541,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 552,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 572,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "QueryFunction",
    "start": 577,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 598,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 609,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 619,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 627,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 638,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 650,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 663,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 674,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 675,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "QueryFunctionContext",
    "start": 684,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 705,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 714,
    "end": 715
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 716,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 729,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 736,
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
    "value": "T",
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
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 749,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "QueryOptions",
    "start": 759,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 775,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 790,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 810,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 826,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 834,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 846,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 850,
    "end": 859
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 860,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 868,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 879,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 887,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 891,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 904,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "retry",
    "start": 917,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "RetryValue",
    "start": 925,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 936,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 942,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "queryFn",
    "start": 947,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "QueryFunction",
    "start": 957,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 971,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 983,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 985,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 994,
    "end": 995
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 996,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Identifier",
    "value": "queryKey",
    "start": 1011,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1022,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "initialData",
    "start": 1035,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1049,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "initialDataUpdatedAt",
    "start": 1058,
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
    "value": "number",
    "start": 1081,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1094,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1106,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1121,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "QueryObserverOptions",
    "start": 1131,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1155,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1170,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 1190,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1206,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1214,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1230,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1243,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1259,
    "end": 1268
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1269,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 1277,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 1288,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 1300,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1313,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1322,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "QueryOptions",
    "start": 1330,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1348,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1378,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1394,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "TPageParam",
    "start": 1409,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "enabled",
    "start": 1428,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1438,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "refetchInterval",
    "start": 1449,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1464,
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
    "value": "number",
    "start": 1467,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 1477,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 1487,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1493,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1505,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1508,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1518,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions",
    "start": 1523,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1542,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1555,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1557,
    "end": 1564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1564,
    "end": 1565
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1568,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 1577,
    "end": 1589
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1593,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1601,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1617,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1630,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1646,
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
    "value": "QueryKey",
    "start": 1664,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 1675,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1683,
    "end": 1684
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1687,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1694,
    "end": 1702
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1703,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 1706,
    "end": 1711
  },
  {
    "type": "Identifier",
    "value": "QueryObserverOptions",
    "start": 1712,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1738,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1756,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1768,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1779,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1795,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1807,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "QueryObserverOptions",
    "start": 1811,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1837,
    "end": 1849
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1849,
    "end": 1850
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1855,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 1867,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "TQueryData",
    "start": 1878,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 1894,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "Property",
    "start": 1908,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1920,
    "end": 1921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1923,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "UndefinedInitialQueryOptions",
    "start": 1928,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 1960,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1975,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 1986,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 1995,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2011,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 2019,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 2035,
    "end": 2044
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2045,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 2053,
    "end": 2061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 2064,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Identifier",
    "value": "UseQueryOptions",
    "start": 2078,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 2094,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2108,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2116,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 2123,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 2137,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Identifier",
    "value": "initialData",
    "start": 2154,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2165,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2168,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2183,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "QueryObserverBaseResult",
    "start": 2193,
    "end": 2216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2216,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2217,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2223,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2225,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2234,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 2243,
    "end": 2255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2261,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2267,
    "end": 2272
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2275,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "dataUpdatedAt",
    "start": 2288,
    "end": 2301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2303,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2313,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2320,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2327,
    "end": 2328
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2329,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "errorUpdatedAt",
    "start": 2337,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2353,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Identifier",
    "value": "failureCount",
    "start": 2363,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2377,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Identifier",
    "value": "failureReason",
    "start": 2387,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2402,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2411,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "errorUpdateCount",
    "start": 2419,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2437,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 2447,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2456,
    "end": 2463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2463,
    "end": 2464
  },
  {
    "type": "Identifier",
    "value": "isFetched",
    "start": 2467,
    "end": 2476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2478,
    "end": 2485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2485,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "isFetchedAfterMount",
    "start": 2489,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2510,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "isFetching",
    "start": 2521,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2533,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "isLoading",
    "start": 2544,
    "end": 2553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2553,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2555,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "isPending",
    "start": 2566,
    "end": 2575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2577,
    "end": 2584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "isLoadingError",
    "start": 2588,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2604,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "isInitialLoading",
    "start": 2615,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2633,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Identifier",
    "value": "isPaused",
    "start": 2644,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2654,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "isPlaceholderData",
    "start": 2665,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2684,
    "end": 2691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2691,
    "end": 2692
  },
  {
    "type": "Identifier",
    "value": "isRefetchError",
    "start": 2695,
    "end": 2709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2711,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "isRefetching",
    "start": 2722,
    "end": 2734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2734,
    "end": 2735
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2736,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2743,
    "end": 2744
  },
  {
    "type": "Identifier",
    "value": "isStale",
    "start": 2747,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2756,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 2767,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 2778,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2790,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "QueryObserverSuccessResult",
    "start": 2800,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2827,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2833,
    "end": 2834
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2835,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2844,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 2853,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2869,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "QueryObserverBaseResult",
    "start": 2877,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2901,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 2908,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2920,
    "end": 2924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 2926,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 2935,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2942,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Identifier",
    "value": "isError",
    "start": 2950,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2959,
    "end": 2964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Identifier",
    "value": "isPending",
    "start": 2968,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2979,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "isLoadingError",
    "start": 2988,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3004,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "isRefetchError",
    "start": 3013,
    "end": 3027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 3029,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 3038,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 3049,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 3057,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "String",
    "value": "\"success\"",
    "start": 3065,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3074,
    "end": 3075
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3076,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3079,
    "end": 3083
  },
  {
    "type": "Identifier",
    "value": "DefinedQueryObserverResult",
    "start": 3084,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3114,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3120,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3122,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3133,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 3142,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Identifier",
    "value": "QueryObserverSuccessResult",
    "start": 3160,
    "end": 3186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3187,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3194,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3203,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "QueryObserverResult",
    "start": 3208,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3231,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3239,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3250,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3257,
    "end": 3258
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 3259,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Identifier",
    "value": "DefinedQueryObserverResult",
    "start": 3277,
    "end": 3303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3304,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3311,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3321,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "ToRef",
    "start": 3326,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3341,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3355,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "UseBaseQueryReturnType",
    "start": 3360,
    "end": 3382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3386,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3395,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 3405,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "QueryObserverResult",
    "start": 3414,
    "end": 3433
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3433,
    "end": 3434
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3434,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3441,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 3461,
    "end": 3463
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3464,
    "end": 3469
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 3470,
    "end": 3476
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3477,
    "end": 3478
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3479,
    "end": 3480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3481,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "String",
    "value": "\"fetchNextPage\"",
    "start": 3495,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "String",
    "value": "\"fetchPreviousPage\"",
    "start": 3517,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "String",
    "value": "\"refetch\"",
    "start": 3543,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 3559,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3565,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "ToRef",
    "start": 3575,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 3581,
    "end": 3589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3589,
    "end": 3590
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 3590,
    "end": 3596
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3596,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Identifier",
    "value": "suspense",
    "start": 3611,
    "end": 3619
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3619,
    "end": 3620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3621,
    "end": 3622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3624,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3627,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 3635,
    "end": 3641
  },
  {
    "type": "Punctuator",
    "value": ">",
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
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3645,
    "end": 3646
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3648,
    "end": 3652
  },
  {
    "type": "Identifier",
    "value": "UseQueryReturnType",
    "start": 3653,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3672,
    "end": 3677
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3677,
    "end": 3678
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3679,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3687,
    "end": 3688
  },
  {
    "type": "Identifier",
    "value": "UseBaseQueryReturnType",
    "start": 3689,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3712,
    "end": 3717
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3717,
    "end": 3718
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3719,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3726,
    "end": 3727
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3729,
    "end": 3736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3737,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 3746,
    "end": 3754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 3758,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3771,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 3773,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3780,
    "end": 3781
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3784,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Identifier",
    "value": "DefaultError",
    "start": 3793,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3809,
    "end": 3814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 3817,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 3833,
    "end": 3842
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3843,
    "end": 3850
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 3851,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Identifier",
    "value": "QueryKey",
    "start": 3862,
    "end": 3870
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3870,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 3877,
    "end": 3884
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3884,
    "end": 3885
  },
  {
    "type": "Identifier",
    "value": "UndefinedInitialQueryOptions",
    "start": 3886,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Identifier",
    "value": "TQueryFnData",
    "start": 3915,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3929,
    "end": 3935
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3937,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Identifier",
    "value": "TQueryKey",
    "start": 3944,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3956,
    "end": 3957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3957,
    "end": 3958
  },
  {
    "type": "Identifier",
    "value": "UseQueryReturnType",
    "start": 3959,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "TData",
    "start": 3978,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3983,
    "end": 3984
  },
  {
    "type": "Identifier",
    "value": "TError",
    "start": 3985,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3995,
    "end": 4001
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4002,
    "end": 4003
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4004,
    "end": 4008
  },
  {
    "type": "Identifier",
    "value": "UseQueryReturnType",
    "start": 4009,
    "end": 4027
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4027,
    "end": 4028
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 4029,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4039,
    "end": 4040
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 27
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryReturnType",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 27
          },
          "exportKind": "value",
          "start": 9,
          "end": 27
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 37
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 37
          },
          "exportKind": "value",
          "start": 29,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./useQuery-CPqkvEsh.js",
        "raw": "'./useQuery-CPqkvEsh.js'",
        "start": 45,
        "end": 69
      },
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 70
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 71
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
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "UseQueryReturnType",
    "start": 9,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 40,
    "end": 44
  },
  {
    "type": "String",
    "value": "'./useQuery-CPqkvEsh.js'",
    "start": 45,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
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
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useQuery",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@tanstack/vue-query",
        "raw": "'@tanstack/vue-query'",
        "start": 25,
        "end": 46
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
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
            "name": "baseUrl",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 61
          },
          "init": {
            "type": "Literal",
            "value": "https://api.publicapis.org/",
            "raw": "'https://api.publicapis.org/'",
            "start": 64,
            "end": 93
          },
          "definite": false,
          "start": 54,
          "end": 93
        }
      ],
      "declare": false,
      "start": 48,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IEntry",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 111
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
              "name": "API",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 121,
                "end": 127
              },
              "start": 119,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 116,
            "end": 127
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Description",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 141
            },
            "typeAnnotation": {
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
            "static": false,
            "start": 130,
            "end": 149
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Auth",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 164
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTTPS",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 174,
                "end": 181
              },
              "start": 172,
              "end": 181
            },
            "accessibility": null,
            "static": false,
            "start": 167,
            "end": 181
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cors",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 188
            },
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
            "accessibility": null,
            "static": false,
            "start": 184,
            "end": 196
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Link",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 203
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 205,
                "end": 211
              },
              "start": 203,
              "end": 211
            },
            "accessibility": null,
            "static": false,
            "start": 199,
            "end": 211
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Category",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 222
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 224,
                "end": 230
              },
              "start": 222,
              "end": 230
            },
            "accessibility": null,
            "static": false,
            "start": 214,
            "end": 230
          }
        ],
        "start": 112,
        "end": 232
      },
      "declare": false,
      "start": 95,
      "end": 232
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
            "name": "testApi",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 247
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
                  "name": "getEntries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 264
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 270,
                        "end": 277
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IEntry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 278,
                                "end": 284
                              },
                              "typeArguments": null,
                              "start": 278,
                              "end": 284
                            },
                            "start": 278,
                            "end": 286
                          }
                        ],
                        "start": 277,
                        "end": 287
                      },
                      "start": 270,
                      "end": 287
                    },
                    "start": 268,
                    "end": 287
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
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
                                        "name": "fetch",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 304,
                                        "end": 309
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "BinaryExpression",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "baseUrl",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 310,
                                            "end": 317
                                          },
                                          "operator": "+",
                                          "right": {
                                            "type": "Literal",
                                            "value": "entries",
                                            "raw": "'entries'",
                                            "start": 320,
                                            "end": 329
                                          },
                                          "start": 310,
                                          "end": 329
                                        }
                                      ],
                                      "optional": false,
                                      "start": 304,
                                      "end": 330
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 338,
                                      "end": 342
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 304,
                                    "end": 342
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
                                          "name": "res",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 344,
                                          "end": 347
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "res",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 352,
                                            "end": 355
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "json",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 356,
                                            "end": 360
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 352,
                                          "end": 360
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 352,
                                        "end": 362
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 343,
                                      "end": 362
                                    }
                                  ],
                                  "optional": false,
                                  "start": 304,
                                  "end": 363
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 371,
                                  "end": 375
                                },
                                "optional": false,
                                "computed": false,
                                "start": 304,
                                "end": 375
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
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 377,
                                      "end": 381
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 386,
                                      "end": 390
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "entries",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 391,
                                      "end": 398
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 386,
                                    "end": 398
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 376,
                                  "end": 398
                                }
                              ],
                              "optional": false,
                              "start": 304,
                              "end": 399
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "catch",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 407,
                              "end": 412
                            },
                            "optional": false,
                            "computed": false,
                            "start": 304,
                            "end": 412
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 414,
                                  "end": 417
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "console",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 422,
                                    "end": 429
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "log",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 430,
                                    "end": 433
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 422,
                                  "end": 433
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "err",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 434,
                                    "end": 437
                                  }
                                ],
                                "optional": false,
                                "start": 422,
                                "end": 438
                              },
                              "id": null,
                              "generator": false,
                              "start": 413,
                              "end": 438
                            }
                          ],
                          "optional": false,
                          "start": 304,
                          "end": 439
                        },
                        "start": 297,
                        "end": 439
                      }
                    ],
                    "start": 291,
                    "end": 443
                  },
                  "id": null,
                  "generator": false,
                  "start": 266,
                  "end": 443
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 443
              }
            ],
            "start": 250,
            "end": 445
          },
          "definite": false,
          "start": 240,
          "end": 445
        }
      ],
      "declare": false,
      "start": 234,
      "end": 445
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
            "name": "entryKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 453,
            "end": 462
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
                  "name": "all",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 469,
                  "end": 472
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "entries",
                        "raw": "'entries'",
                        "start": 475,
                        "end": 484
                      }
                    ],
                    "start": 474,
                    "end": 485
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 489,
                      "end": 494
                    },
                    "typeArguments": null,
                    "start": 489,
                    "end": 494
                  },
                  "start": 474,
                  "end": 494
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 469,
                "end": 494
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "list",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 502
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entryKeys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 514,
                              "end": 523
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "all",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 527
                            },
                            "optional": false,
                            "computed": false,
                            "start": 514,
                            "end": 527
                          },
                          "start": 511,
                          "end": 527
                        },
                        {
                          "type": "Literal",
                          "value": "list",
                          "raw": "'list'",
                          "start": 529,
                          "end": 535
                        }
                      ],
                      "start": 510,
                      "end": 536
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 540,
                        "end": 545
                      },
                      "typeArguments": null,
                      "start": 540,
                      "end": 545
                    },
                    "start": 510,
                    "end": 545
                  },
                  "id": null,
                  "generator": false,
                  "start": 504,
                  "end": 545
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 498,
                "end": 545
              }
            ],
            "start": 465,
            "end": 547
          },
          "definite": false,
          "start": 453,
          "end": 547
        }
      ],
      "declare": false,
      "start": 447,
      "end": 547
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
              "name": "useEntries",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 572
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                        "name": "useQuery",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 600
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
                                "name": "queryKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 607,
                                "end": 615
                              },
                              "value": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "entryKeys",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 617,
                                    "end": 626
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "list",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 627,
                                    "end": 631
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 617,
                                  "end": 631
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 617,
                                "end": 633
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 607,
                              "end": 633
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "queryFn",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 639,
                                "end": 646
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "testApi",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 648,
                                  "end": 655
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "getEntries",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 656,
                                  "end": 666
                                },
                                "optional": false,
                                "computed": false,
                                "start": 648,
                                "end": 666
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 639,
                              "end": 666
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "select",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 672,
                                "end": 678
                              },
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "expression": true,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 681,
                                    "end": 685
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 690,
                                      "end": 694
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "slice",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 695,
                                      "end": 700
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 690,
                                    "end": 700
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 701,
                                      "end": 702
                                    },
                                    {
                                      "type": "Literal",
                                      "value": 10,
                                      "raw": "10",
                                      "start": 704,
                                      "end": 706
                                    }
                                  ],
                                  "optional": false,
                                  "start": 690,
                                  "end": 707
                                },
                                "id": null,
                                "generator": false,
                                "start": 680,
                                "end": 707
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 672,
                              "end": 707
                            }
                          ],
                          "start": 601,
                          "end": 711
                        }
                      ],
                      "optional": false,
                      "start": 592,
                      "end": 712
                    },
                    "start": 585,
                    "end": 712
                  }
                ],
                "start": 581,
                "end": 714
              },
              "id": null,
              "generator": false,
              "start": 575,
              "end": 714
            },
            "definite": false,
            "start": 562,
            "end": 714
          }
        ],
        "declare": false,
        "start": 556,
        "end": 714
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 549,
      "end": 714
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 714
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
    "value": "useQuery",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 20,
    "end": 24
  },
  {
    "type": "String",
    "value": "'@tanstack/vue-query'",
    "start": 25,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 48,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "baseUrl",
    "start": 54,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "'https://api.publicapis.org/'",
    "start": 64,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 95,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "IEntry",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "API",
    "start": 116,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "Description",
    "start": 130,
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
    "type": "Identifier",
    "value": "Auth",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "HTTPS",
    "start": 167,
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
    "value": "boolean",
    "start": 174,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Cors",
    "start": 184,
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
    "type": "Identifier",
    "value": "Link",
    "start": 199,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 205,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Category",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 234,
    "end": 239
  },
  {
    "type": "Identifier",
    "value": "testApi",
    "start": 240,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "getEntries",
    "start": 254,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "Promise",
    "start": 270,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "IEntry",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "{",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 297,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "baseUrl",
    "start": 310,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 318,
    "end": 319
  },
  {
    "type": "String",
    "value": "'entries'",
    "start": 320,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 349,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "res",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 356,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 371,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 386,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 391,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "catch",
    "start": 407,
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
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 419,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 422,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 430,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 447,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "entryKeys",
    "start": 453,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 474,
    "end": 475
  },
  {
    "type": "String",
    "value": "'entries'",
    "start": 475,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 486,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 507,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "entryKeys",
    "start": 514,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 527,
    "end": 528
  },
  {
    "type": "String",
    "value": "'list'",
    "start": 529,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 537,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 540,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 546,
    "end": 547
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 549,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 556,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "useEntries",
    "start": 562,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 578,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 585,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 592,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "queryKey",
    "start": 607,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "entryKeys",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "list",
    "start": 627,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 633,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "queryFn",
    "start": 639,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "testApi",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "getEntries",
    "start": 656,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 672,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 681,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 687,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 690,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "slice",
    "start": 695,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 704,
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
    "value": "}",
    "start": 710,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  }
]
```
