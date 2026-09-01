__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 18
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 19,
        "end": 22
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 37,
          "end": 48
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 49,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 31,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 24,
      "end": 52
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassT",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 73
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
              "start": 74,
              "end": 75
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 75
          }
        ],
        "start": 73,
        "end": 76
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 77,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 54,
      "end": 80
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassT",
          "optional": false,
          "typeAnnotation": null,
          "start": 95,
          "end": 107
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
                "start": 108,
                "end": 109
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 109
            }
          ],
          "start": 107,
          "end": 110
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 111,
          "end": 114
        },
        "abstract": false,
        "declare": false,
        "start": 89,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 114
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 247
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
                "start": 248,
                "end": 249
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 258,
                  "end": 270
                },
                "typeArguments": null,
                "start": 258,
                "end": 270
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 248,
              "end": 270
            }
          ],
          "start": 247,
          "end": 271
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 278,
                "end": 286
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 292,
                        "end": 293
                      },
                      "typeArguments": null,
                      "start": 292,
                      "end": 293
                    },
                    "start": 290,
                    "end": 293
                  },
                  "start": 287,
                  "end": 293
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
                    "start": 296,
                    "end": 297
                  },
                  "typeArguments": null,
                  "start": 296,
                  "end": 297
                },
                "start": 294,
                "end": 297
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 278,
              "end": 298
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 321
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 337
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
                          "start": 338,
                          "end": 339
                        },
                        "typeArguments": null,
                        "start": 338,
                        "end": 339
                      }
                    ],
                    "start": 337,
                    "end": 340
                  },
                  "start": 325,
                  "end": 340
                },
                "start": 323,
                "end": 340
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 312,
              "end": 341
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 364
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 381
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 382,
                          "end": 394
                        },
                        "typeArguments": null,
                        "start": 382,
                        "end": 394
                      }
                    ],
                    "start": 381,
                    "end": 395
                  },
                  "start": 368,
                  "end": 395
                },
                "start": 366,
                "end": 395
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 355,
              "end": 396
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 419
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 423,
                    "end": 436
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 437,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 437,
                        "end": 448
                      }
                    ],
                    "start": 436,
                    "end": 449
                  },
                  "start": 423,
                  "end": 449
                },
                "start": 421,
                "end": 449
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 410,
              "end": 450
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 473
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 489
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 490,
                          "end": 502
                        },
                        "typeArguments": null,
                        "start": 490,
                        "end": 502
                      }
                    ],
                    "start": 489,
                    "end": 503
                  },
                  "start": 477,
                  "end": 503
                },
                "start": 475,
                "end": 503
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 464,
              "end": 504
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 526
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 530,
                    "end": 542
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 543,
                          "end": 554
                        },
                        "typeArguments": null,
                        "start": 543,
                        "end": 554
                      }
                    ],
                    "start": 542,
                    "end": 555
                  },
                  "start": 530,
                  "end": 555
                },
                "start": 528,
                "end": 555
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 517,
              "end": 556
            }
          ],
          "start": 272,
          "end": 570
        },
        "declare": false,
        "start": 197,
        "end": 570
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 190,
      "end": 570
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 589,
          "end": 628
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
                "start": 629,
                "end": 630
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 650
                },
                "typeArguments": null,
                "start": 639,
                "end": 650
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 629,
              "end": 650
            }
          ],
          "start": 628,
          "end": 651
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 666
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 672,
                        "end": 673
                      },
                      "typeArguments": null,
                      "start": 672,
                      "end": 673
                    },
                    "start": 670,
                    "end": 673
                  },
                  "start": 667,
                  "end": 673
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
                    "start": 676,
                    "end": 677
                  },
                  "typeArguments": null,
                  "start": 676,
                  "end": 677
                },
                "start": 674,
                "end": 677
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 658,
              "end": 678
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 704
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 720
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
                          "start": 721,
                          "end": 722
                        },
                        "typeArguments": null,
                        "start": 721,
                        "end": 722
                      }
                    ],
                    "start": 720,
                    "end": 723
                  },
                  "start": 708,
                  "end": 723
                },
                "start": 706,
                "end": 723
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 695,
              "end": 724
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 750
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 767
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 768,
                          "end": 780
                        },
                        "typeArguments": null,
                        "start": 768,
                        "end": 780
                      }
                    ],
                    "start": 767,
                    "end": 781
                  },
                  "start": 754,
                  "end": 781
                },
                "start": 752,
                "end": 781
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 741,
              "end": 782
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 805
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
                    "name": "privateClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 809,
                    "end": 822
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 834
                        },
                        "typeArguments": null,
                        "start": 823,
                        "end": 834
                      }
                    ],
                    "start": 822,
                    "end": 835
                  },
                  "start": 809,
                  "end": 835
                },
                "start": 807,
                "end": 835
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 796,
              "end": 836
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 859
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 863,
                    "end": 875
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 876,
                          "end": 888
                        },
                        "typeArguments": null,
                        "start": 876,
                        "end": 888
                      }
                    ],
                    "start": 875,
                    "end": 889
                  },
                  "start": 863,
                  "end": 889
                },
                "start": 861,
                "end": 889
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 850,
              "end": 890
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 903,
                "end": 912
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 916,
                    "end": 928
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 940
                        },
                        "typeArguments": null,
                        "start": 929,
                        "end": 940
                      }
                    ],
                    "start": 928,
                    "end": 941
                  },
                  "start": 916,
                  "end": 941
                },
                "start": 914,
                "end": 941
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 903,
              "end": 942
            }
          ],
          "start": 652,
          "end": 956
        },
        "declare": false,
        "start": 579,
        "end": 956
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 572,
      "end": 956
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 968,
        "end": 1009
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
              "start": 1010,
              "end": 1011
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1020,
                "end": 1032
              },
              "typeArguments": null,
              "start": 1020,
              "end": 1032
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1010,
            "end": 1032
          }
        ],
        "start": 1009,
        "end": 1033
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1040,
              "end": 1048
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1054,
                      "end": 1055
                    },
                    "typeArguments": null,
                    "start": 1054,
                    "end": 1055
                  },
                  "start": 1052,
                  "end": 1055
                },
                "start": 1049,
                "end": 1055
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
                  "start": 1058,
                  "end": 1059
                },
                "typeArguments": null,
                "start": 1058,
                "end": 1059
              },
              "start": 1056,
              "end": 1059
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1040,
            "end": 1060
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1077,
              "end": 1086
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1102
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
                        "start": 1103,
                        "end": 1104
                      },
                      "typeArguments": null,
                      "start": 1103,
                      "end": 1104
                    }
                  ],
                  "start": 1102,
                  "end": 1105
                },
                "start": 1090,
                "end": 1105
              },
              "start": 1088,
              "end": 1105
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1077,
            "end": 1106
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1123,
              "end": 1132
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1136,
                  "end": 1149
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "start": 1150,
                      "end": 1162
                    }
                  ],
                  "start": 1149,
                  "end": 1163
                },
                "start": 1136,
                "end": 1163
              },
              "start": 1134,
              "end": 1163
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1123,
            "end": 1164
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1181,
              "end": 1190
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1194,
                  "end": 1207
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1208,
                        "end": 1219
                      },
                      "typeArguments": null,
                      "start": 1208,
                      "end": 1219
                    }
                  ],
                  "start": 1207,
                  "end": 1220
                },
                "start": 1194,
                "end": 1220
              },
              "start": 1192,
              "end": 1220
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1181,
            "end": 1221
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1238,
              "end": 1247
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1251,
                  "end": 1263
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1276
                      },
                      "typeArguments": null,
                      "start": 1264,
                      "end": 1276
                    }
                  ],
                  "start": 1263,
                  "end": 1277
                },
                "start": 1251,
                "end": 1277
              },
              "start": 1249,
              "end": 1277
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1238,
            "end": 1278
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1294,
              "end": 1303
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1319
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1320,
                        "end": 1331
                      },
                      "typeArguments": null,
                      "start": 1320,
                      "end": 1331
                    }
                  ],
                  "start": 1319,
                  "end": 1332
                },
                "start": 1307,
                "end": 1332
              },
              "start": 1305,
              "end": 1332
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1294,
            "end": 1333
          }
        ],
        "start": 1034,
        "end": 1347
      },
      "declare": false,
      "start": 958,
      "end": 1347
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1399
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
              "start": 1400,
              "end": 1401
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1410,
                "end": 1421
              },
              "typeArguments": null,
              "start": 1410,
              "end": 1421
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1400,
            "end": 1421
          }
        ],
        "start": 1399,
        "end": 1422
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1429,
              "end": 1437
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1443,
                      "end": 1444
                    },
                    "typeArguments": null,
                    "start": 1443,
                    "end": 1444
                  },
                  "start": 1441,
                  "end": 1444
                },
                "start": 1438,
                "end": 1444
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
                  "start": 1447,
                  "end": 1448
                },
                "typeArguments": null,
                "start": 1447,
                "end": 1448
              },
              "start": 1445,
              "end": 1448
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1429,
            "end": 1449
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1475
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1479,
                  "end": 1491
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
                        "start": 1492,
                        "end": 1493
                      },
                      "typeArguments": null,
                      "start": 1492,
                      "end": 1493
                    }
                  ],
                  "start": 1491,
                  "end": 1494
                },
                "start": 1479,
                "end": 1494
              },
              "start": 1477,
              "end": 1494
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1466,
            "end": 1495
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1512,
              "end": 1521
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1538
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1539,
                        "end": 1551
                      },
                      "typeArguments": null,
                      "start": 1539,
                      "end": 1551
                    }
                  ],
                  "start": 1538,
                  "end": 1552
                },
                "start": 1525,
                "end": 1552
              },
              "start": 1523,
              "end": 1552
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1512,
            "end": 1553
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1570,
              "end": 1579
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
                  "name": "privateClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1583,
                  "end": 1596
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1597,
                        "end": 1608
                      },
                      "typeArguments": null,
                      "start": 1597,
                      "end": 1608
                    }
                  ],
                  "start": 1596,
                  "end": 1609
                },
                "start": 1583,
                "end": 1609
              },
              "start": 1581,
              "end": 1609
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1570,
            "end": 1610
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1627,
              "end": 1636
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1652
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1653,
                        "end": 1665
                      },
                      "typeArguments": null,
                      "start": 1653,
                      "end": 1665
                    }
                  ],
                  "start": 1652,
                  "end": 1666
                },
                "start": 1640,
                "end": 1666
              },
              "start": 1638,
              "end": 1666
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1627,
            "end": 1667
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1683,
              "end": 1692
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1708
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1709,
                        "end": 1720
                      },
                      "typeArguments": null,
                      "start": 1709,
                      "end": 1720
                    }
                  ],
                  "start": 1708,
                  "end": 1721
                },
                "start": 1696,
                "end": 1721
              },
              "start": 1694,
              "end": 1721
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1683,
            "end": 1722
          }
        ],
        "start": 1423,
        "end": 1736
      },
      "declare": false,
      "start": 1349,
      "end": 1736
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 1755,
          "end": 1808
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
                "start": 1809,
                "end": 1810
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1809,
              "end": 1810
            }
          ],
          "start": 1808,
          "end": 1811
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1818,
                "end": 1826
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
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
                        "start": 1832,
                        "end": 1833
                      },
                      "typeArguments": null,
                      "start": 1832,
                      "end": 1833
                    },
                    "start": 1830,
                    "end": 1833
                  },
                  "start": 1827,
                  "end": 1833
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
                    "start": 1836,
                    "end": 1837
                  },
                  "typeArguments": null,
                  "start": 1836,
                  "end": 1837
                },
                "start": 1834,
                "end": 1837
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1818,
              "end": 1838
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1855,
                "end": 1864
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
                    "name": "publicClassT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1868,
                    "end": 1880
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
                          "start": 1881,
                          "end": 1882
                        },
                        "typeArguments": null,
                        "start": 1881,
                        "end": 1882
                      }
                    ],
                    "start": 1880,
                    "end": 1883
                  },
                  "start": 1868,
                  "end": 1883
                },
                "start": 1866,
                "end": 1883
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1855,
              "end": 1884
            }
          ],
          "start": 1812,
          "end": 1898
        },
        "declare": false,
        "start": 1745,
        "end": 1898
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1738,
      "end": 1898
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1964
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
              "start": 1965,
              "end": 1966
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1965,
            "end": 1966
          }
        ],
        "start": 1964,
        "end": 1967
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1974,
              "end": 1982
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                      "start": 1988,
                      "end": 1989
                    },
                    "typeArguments": null,
                    "start": 1988,
                    "end": 1989
                  },
                  "start": 1986,
                  "end": 1989
                },
                "start": 1983,
                "end": 1989
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
                  "start": 1992,
                  "end": 1993
                },
                "typeArguments": null,
                "start": 1992,
                "end": 1993
              },
              "start": 1990,
              "end": 1993
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1974,
            "end": 1994
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 2011,
              "end": 2020
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
                  "name": "publicClassT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2024,
                  "end": 2036
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
                        "start": 2037,
                        "end": 2038
                      },
                      "typeArguments": null,
                      "start": 2037,
                      "end": 2038
                    }
                  ],
                  "start": 2036,
                  "end": 2039
                },
                "start": 2024,
                "end": 2039
              },
              "start": 2022,
              "end": 2039
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2011,
            "end": 2040
          }
        ],
        "start": 1968,
        "end": 2054
      },
      "declare": false,
      "start": 1900,
      "end": 2054
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2054
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 24,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 37,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 54,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 60,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 95,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 190,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 197,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 207,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 250,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 258,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 278,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 312,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 325,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 338,
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
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 355,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
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
    "value": "privateClass",
    "start": 382,
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
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 410,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
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
    "value": "privateClassT",
    "start": 423,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 437,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 464,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 477,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 489,
    "end": 490
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 490,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 517,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 530,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 543,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 572,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 579,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 589,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 629,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 631,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 639,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 658,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 667,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 673,
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
    "value": "T",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 695,
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
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 708,
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
    "type": "Punctuator",
    "value": ">",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 741,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "privateClassT",
    "start": 754,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 768,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 796,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 809,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 823,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 835,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 850,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 863,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 875,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 876,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 903,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 916,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 929,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
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
    "start": 955,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 958,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 968,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1012,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1020,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1040,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1049,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1055,
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
    "value": "T",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1077,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1090,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 1123,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1136,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1150,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 1181,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1194,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1208,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 1238,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1251,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1264,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 1294,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1307,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1320,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1349,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 1359,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1402,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1410,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1429,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1466,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1479,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 1512,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1525,
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
    "value": "privateClass",
    "start": 1539,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 1570,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1583,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1597,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 1627,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1640,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1653,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 1683,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1696,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1709,
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
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1738,
    "end": 1744
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1745,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 1755,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1808,
    "end": 1809
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1810,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1818,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1827,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1855,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1864,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1868,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1881,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1900,
    "end": 1909
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 1910,
    "end": 1964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1964,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1965,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1974,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1983,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1992,
    "end": 1993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 2011,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 2024,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2053,
    "end": 2054
  }
]
```
