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
          "start": 133,
          "end": 173
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
                "start": 174,
                "end": 175
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 196
                },
                "typeArguments": null,
                "start": 184,
                "end": 196
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 174,
              "end": 196
            }
          ],
          "start": 173,
          "end": 197
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
                "start": 213,
                "end": 221
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
                  "start": 222,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 231,
                  "end": 232
                },
                "start": 229,
                "end": 232
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 213,
              "end": 233
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 247
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
                    "start": 251,
                    "end": 263
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
                          "start": 264,
                          "end": 265
                        },
                        "typeArguments": null,
                        "start": 264,
                        "end": 265
                      }
                    ],
                    "start": 263,
                    "end": 266
                  },
                  "start": 251,
                  "end": 266
                },
                "start": 249,
                "end": 266
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 238,
              "end": 267
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 281
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
                    "start": 285,
                    "end": 298
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
                          "start": 299,
                          "end": 311
                        },
                        "typeArguments": null,
                        "start": 299,
                        "end": 311
                      }
                    ],
                    "start": 298,
                    "end": 312
                  },
                  "start": 285,
                  "end": 312
                },
                "start": 283,
                "end": 312
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 272,
              "end": 313
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 328
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
                    "start": 332,
                    "end": 345
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
                          "start": 346,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 346,
                        "end": 357
                      }
                    ],
                    "start": 345,
                    "end": 358
                  },
                  "start": 332,
                  "end": 358
                },
                "start": 330,
                "end": 358
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 319,
              "end": 359
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 373
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
                    "start": 377,
                    "end": 389
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
                          "start": 390,
                          "end": 402
                        },
                        "typeArguments": null,
                        "start": 390,
                        "end": 402
                      }
                    ],
                    "start": 389,
                    "end": 403
                  },
                  "start": 377,
                  "end": 403
                },
                "start": 375,
                "end": 403
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 364,
              "end": 404
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 418
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
                    "start": 422,
                    "end": 434
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
                          "start": 435,
                          "end": 446
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 446
                      }
                    ],
                    "start": 434,
                    "end": 447
                  },
                  "start": 422,
                  "end": 447
                },
                "start": 420,
                "end": 447
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 409,
              "end": 448
            }
          ],
          "start": 198,
          "end": 451
        },
        "declare": false,
        "start": 123,
        "end": 451
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 116,
      "end": 451
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
          "start": 470,
          "end": 509
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
                "start": 510,
                "end": 511
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 520,
                  "end": 531
                },
                "typeArguments": null,
                "start": 520,
                "end": 531
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 510,
              "end": 531
            }
          ],
          "start": 509,
          "end": 532
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
                "start": 539,
                "end": 547
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
                        "start": 553,
                        "end": 554
                      },
                      "typeArguments": null,
                      "start": 553,
                      "end": 554
                    },
                    "start": 551,
                    "end": 554
                  },
                  "start": 548,
                  "end": 554
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
                    "start": 557,
                    "end": 558
                  },
                  "typeArguments": null,
                  "start": 557,
                  "end": 558
                },
                "start": 555,
                "end": 558
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 539,
              "end": 559
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 573
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
                    "start": 577,
                    "end": 589
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
                          "start": 590,
                          "end": 591
                        },
                        "typeArguments": null,
                        "start": 590,
                        "end": 591
                      }
                    ],
                    "start": 589,
                    "end": 592
                  },
                  "start": 577,
                  "end": 592
                },
                "start": 575,
                "end": 592
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 564,
              "end": 592
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod1",
                "optional": false,
                "typeAnnotation": null,
                "start": 597,
                "end": 606
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
                    "start": 610,
                    "end": 623
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
                          "start": 624,
                          "end": 636
                        },
                        "typeArguments": null,
                        "start": 624,
                        "end": 636
                      }
                    ],
                    "start": 623,
                    "end": 637
                  },
                  "start": 610,
                  "end": 637
                },
                "start": 608,
                "end": 637
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 597,
              "end": 638
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod2",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 652
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
                    "start": 656,
                    "end": 669
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
                          "start": 670,
                          "end": 681
                        },
                        "typeArguments": null,
                        "start": 670,
                        "end": 681
                      }
                    ],
                    "start": 669,
                    "end": 682
                  },
                  "start": 656,
                  "end": 682
                },
                "start": 654,
                "end": 682
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 643,
              "end": 683
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod3",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 697
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
                    "start": 701,
                    "end": 713
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
                          "start": 714,
                          "end": 726
                        },
                        "typeArguments": null,
                        "start": 714,
                        "end": 726
                      }
                    ],
                    "start": 713,
                    "end": 727
                  },
                  "start": 701,
                  "end": 727
                },
                "start": 699,
                "end": 727
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 688,
              "end": 728
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod4",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 742
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
                    "start": 746,
                    "end": 758
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
                          "start": 759,
                          "end": 770
                        },
                        "typeArguments": null,
                        "start": 759,
                        "end": 770
                      }
                    ],
                    "start": 758,
                    "end": 771
                  },
                  "start": 746,
                  "end": 771
                },
                "start": 744,
                "end": 771
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 733,
              "end": 772
            }
          ],
          "start": 533,
          "end": 774
        },
        "declare": false,
        "start": 460,
        "end": 774
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 453,
      "end": 774
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 786,
        "end": 827
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
              "start": 828,
              "end": 829
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 850
              },
              "typeArguments": null,
              "start": 838,
              "end": 850
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 828,
            "end": 850
          }
        ],
        "start": 827,
        "end": 851
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
              "start": 858,
              "end": 866
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
                      "start": 872,
                      "end": 873
                    },
                    "typeArguments": null,
                    "start": 872,
                    "end": 873
                  },
                  "start": 870,
                  "end": 873
                },
                "start": 867,
                "end": 873
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
                  "start": 876,
                  "end": 877
                },
                "typeArguments": null,
                "start": 876,
                "end": 877
              },
              "start": 874,
              "end": 877
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 858,
            "end": 878
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 892
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
                  "start": 896,
                  "end": 908
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
                        "start": 909,
                        "end": 910
                      },
                      "typeArguments": null,
                      "start": 909,
                      "end": 910
                    }
                  ],
                  "start": 908,
                  "end": 911
                },
                "start": 896,
                "end": 911
              },
              "start": 894,
              "end": 911
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 883,
            "end": 912
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 926
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
                  "start": 930,
                  "end": 943
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
                        "start": 944,
                        "end": 956
                      },
                      "typeArguments": null,
                      "start": 944,
                      "end": 956
                    }
                  ],
                  "start": 943,
                  "end": 957
                },
                "start": 930,
                "end": 957
              },
              "start": 928,
              "end": 957
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 917,
            "end": 958
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 972
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
                  "start": 976,
                  "end": 989
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
                        "start": 990,
                        "end": 1001
                      },
                      "typeArguments": null,
                      "start": 990,
                      "end": 1001
                    }
                  ],
                  "start": 989,
                  "end": 1002
                },
                "start": 976,
                "end": 1002
              },
              "start": 974,
              "end": 1002
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 963,
            "end": 1003
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1008,
              "end": 1017
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
                  "start": 1021,
                  "end": 1033
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
                        "start": 1034,
                        "end": 1046
                      },
                      "typeArguments": null,
                      "start": 1034,
                      "end": 1046
                    }
                  ],
                  "start": 1033,
                  "end": 1047
                },
                "start": 1021,
                "end": 1047
              },
              "start": 1019,
              "end": 1047
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1008,
            "end": 1048
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1053,
              "end": 1062
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
                  "start": 1066,
                  "end": 1078
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
                        "start": 1079,
                        "end": 1090
                      },
                      "typeArguments": null,
                      "start": 1079,
                      "end": 1090
                    }
                  ],
                  "start": 1078,
                  "end": 1091
                },
                "start": 1066,
                "end": 1091
              },
              "start": 1064,
              "end": 1091
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1053,
            "end": 1092
          }
        ],
        "start": 852,
        "end": 1094
      },
      "declare": false,
      "start": 776,
      "end": 1094
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1106,
        "end": 1146
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
              "start": 1147,
              "end": 1148
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1157,
                "end": 1168
              },
              "typeArguments": null,
              "start": 1157,
              "end": 1168
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1147,
            "end": 1168
          }
        ],
        "start": 1146,
        "end": 1169
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
              "start": 1176,
              "end": 1184
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
                      "start": 1190,
                      "end": 1191
                    },
                    "typeArguments": null,
                    "start": 1190,
                    "end": 1191
                  },
                  "start": 1188,
                  "end": 1191
                },
                "start": 1185,
                "end": 1191
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
                  "start": 1194,
                  "end": 1195
                },
                "typeArguments": null,
                "start": 1194,
                "end": 1195
              },
              "start": 1192,
              "end": 1195
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1176,
            "end": 1196
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1201,
              "end": 1210
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
                  "start": 1214,
                  "end": 1226
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
                        "start": 1227,
                        "end": 1228
                      },
                      "typeArguments": null,
                      "start": 1227,
                      "end": 1228
                    }
                  ],
                  "start": 1226,
                  "end": 1229
                },
                "start": 1214,
                "end": 1229
              },
              "start": 1212,
              "end": 1229
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1201,
            "end": 1230
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1244
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
                  "start": 1248,
                  "end": 1261
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
                        "start": 1262,
                        "end": 1274
                      },
                      "typeArguments": null,
                      "start": 1262,
                      "end": 1274
                    }
                  ],
                  "start": 1261,
                  "end": 1275
                },
                "start": 1248,
                "end": 1275
              },
              "start": 1246,
              "end": 1275
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1235,
            "end": 1276
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1290
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
                  "start": 1294,
                  "end": 1307
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
                        "start": 1308,
                        "end": 1319
                      },
                      "typeArguments": null,
                      "start": 1308,
                      "end": 1319
                    }
                  ],
                  "start": 1307,
                  "end": 1320
                },
                "start": 1294,
                "end": 1320
              },
              "start": 1292,
              "end": 1320
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1281,
            "end": 1321
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1335
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
                  "start": 1339,
                  "end": 1351
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
                        "start": 1352,
                        "end": 1364
                      },
                      "typeArguments": null,
                      "start": 1352,
                      "end": 1364
                    }
                  ],
                  "start": 1351,
                  "end": 1365
                },
                "start": 1339,
                "end": 1365
              },
              "start": 1337,
              "end": 1365
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1326,
            "end": 1366
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1371,
              "end": 1380
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
                  "start": 1384,
                  "end": 1396
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
                        "start": 1397,
                        "end": 1408
                      },
                      "typeArguments": null,
                      "start": 1397,
                      "end": 1408
                    }
                  ],
                  "start": 1396,
                  "end": 1409
                },
                "start": 1384,
                "end": 1409
              },
              "start": 1382,
              "end": 1409
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1371,
            "end": 1410
          }
        ],
        "start": 1170,
        "end": 1412
      },
      "declare": false,
      "start": 1096,
      "end": 1412
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
          "start": 1431,
          "end": 1484
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
                "start": 1485,
                "end": 1486
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1485,
              "end": 1486
            }
          ],
          "start": 1484,
          "end": 1487
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
                "start": 1494,
                "end": 1502
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
                        "start": 1508,
                        "end": 1509
                      },
                      "typeArguments": null,
                      "start": 1508,
                      "end": 1509
                    },
                    "start": 1506,
                    "end": 1509
                  },
                  "start": 1503,
                  "end": 1509
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
                    "start": 1512,
                    "end": 1513
                  },
                  "typeArguments": null,
                  "start": 1512,
                  "end": 1513
                },
                "start": 1510,
                "end": 1513
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1494,
              "end": 1514
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod0",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1528
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
                    "start": 1532,
                    "end": 1544
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
                          "start": 1545,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1545,
                        "end": 1546
                      }
                    ],
                    "start": 1544,
                    "end": 1547
                  },
                  "start": 1532,
                  "end": 1547
                },
                "start": 1530,
                "end": 1547
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1519,
              "end": 1548
            }
          ],
          "start": 1488,
          "end": 1550
        },
        "declare": false,
        "start": 1421,
        "end": 1550
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1414,
      "end": 1550
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1616
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
              "start": 1617,
              "end": 1618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1617,
            "end": 1618
          }
        ],
        "start": 1616,
        "end": 1619
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
              "start": 1626,
              "end": 1634
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
                      "start": 1640,
                      "end": 1641
                    },
                    "typeArguments": null,
                    "start": 1640,
                    "end": 1641
                  },
                  "start": 1638,
                  "end": 1641
                },
                "start": 1635,
                "end": 1641
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
                  "start": 1644,
                  "end": 1645
                },
                "typeArguments": null,
                "start": 1644,
                "end": 1645
              },
              "start": 1642,
              "end": 1645
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1626,
            "end": 1646
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod0",
              "optional": false,
              "typeAnnotation": null,
              "start": 1651,
              "end": 1660
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
                  "start": 1664,
                  "end": 1676
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
                        "start": 1677,
                        "end": 1678
                      },
                      "typeArguments": null,
                      "start": 1677,
                      "end": 1678
                    }
                  ],
                  "start": 1676,
                  "end": 1679
                },
                "start": 1664,
                "end": 1679
              },
              "start": 1662,
              "end": 1679
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1651,
            "end": 1680
          }
        ],
        "start": 1620,
        "end": 1682
      },
      "declare": false,
      "start": 1552,
      "end": 1682
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1702,
          "end": 1758
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
                "start": 1759,
                "end": 1760
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1769,
                    "end": 1782
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1783,
                    "end": 1809
                  },
                  "start": 1769,
                  "end": 1809
                },
                "typeArguments": null,
                "start": 1769,
                "end": 1809
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1759,
              "end": 1809
            }
          ],
          "start": 1758,
          "end": 1810
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 1811,
          "end": 1823
        },
        "declare": false,
        "start": 1692,
        "end": 1823
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1685,
      "end": 1823
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
        "optional": false,
        "typeAnnotation": null,
        "start": 1835,
        "end": 1892
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
              "start": 1893,
              "end": 1894
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1903,
                  "end": 1916
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1917,
                  "end": 1943
                },
                "start": 1903,
                "end": 1943
              },
              "typeArguments": null,
              "start": 1903,
              "end": 1943
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1893,
            "end": 1943
          }
        ],
        "start": 1892,
        "end": 1944
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1945,
        "end": 1957
      },
      "declare": false,
      "start": 1825,
      "end": 1957
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 1976,
          "end": 1988
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2001,
                "end": 2027
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2028,
                "end": 2035
              },
              "abstract": false,
              "declare": false,
              "start": 1995,
              "end": 2035
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2054,
                  "end": 2079
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2080,
                  "end": 2087
                },
                "abstract": false,
                "declare": false,
                "start": 2048,
                "end": 2087
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2041,
              "end": 2087
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassInPublicModuleT",
                "optional": false,
                "typeAnnotation": null,
                "start": 2099,
                "end": 2126
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
                      "start": 2127,
                      "end": 2128
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2127,
                    "end": 2128
                  }
                ],
                "start": 2126,
                "end": 2129
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2130,
                "end": 2137
              },
              "abstract": false,
              "declare": false,
              "start": 2093,
              "end": 2137
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPublicModuleT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2156,
                  "end": 2182
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
                        "start": 2183,
                        "end": 2184
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2183,
                      "end": 2184
                    }
                  ],
                  "start": 2182,
                  "end": 2185
                },
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 2186,
                  "end": 2193
                },
                "abstract": false,
                "declare": false,
                "start": 2150,
                "end": 2193
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2143,
              "end": 2193
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
                  "start": 2216,
                  "end": 2256
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
                        "start": 2257,
                        "end": 2258
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2267,
                          "end": 2293
                        },
                        "typeArguments": null,
                        "start": 2267,
                        "end": 2293
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2257,
                      "end": 2293
                    }
                  ],
                  "start": 2256,
                  "end": 2294
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
                        "start": 2314,
                        "end": 2322
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
                                "start": 2328,
                                "end": 2329
                              },
                              "typeArguments": null,
                              "start": 2328,
                              "end": 2329
                            },
                            "start": 2326,
                            "end": 2329
                          },
                          "start": 2323,
                          "end": 2329
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
                            "start": 2332,
                            "end": 2333
                          },
                          "typeArguments": null,
                          "start": 2332,
                          "end": 2333
                        },
                        "start": 2330,
                        "end": 2333
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2314,
                      "end": 2334
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2343,
                        "end": 2352
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2382
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
                                  "start": 2383,
                                  "end": 2384
                                },
                                "typeArguments": null,
                                "start": 2383,
                                "end": 2384
                              }
                            ],
                            "start": 2382,
                            "end": 2385
                          },
                          "start": 2356,
                          "end": 2385
                        },
                        "start": 2354,
                        "end": 2385
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2343,
                      "end": 2386
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2395,
                        "end": 2404
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
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2408,
                            "end": 2435
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2436,
                                  "end": 2462
                                },
                                "typeArguments": null,
                                "start": 2436,
                                "end": 2462
                              }
                            ],
                            "start": 2435,
                            "end": 2463
                          },
                          "start": 2408,
                          "end": 2463
                        },
                        "start": 2406,
                        "end": 2463
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2395,
                      "end": 2464
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2482
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
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2486,
                            "end": 2513
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2514,
                                  "end": 2539
                                },
                                "typeArguments": null,
                                "start": 2514,
                                "end": 2539
                              }
                            ],
                            "start": 2513,
                            "end": 2540
                          },
                          "start": 2486,
                          "end": 2540
                        },
                        "start": 2484,
                        "end": 2540
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2473,
                      "end": 2541
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2550,
                        "end": 2559
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2563,
                            "end": 2589
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2590,
                                  "end": 2616
                                },
                                "typeArguments": null,
                                "start": 2590,
                                "end": 2616
                              }
                            ],
                            "start": 2589,
                            "end": 2617
                          },
                          "start": 2563,
                          "end": 2617
                        },
                        "start": 2561,
                        "end": 2617
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2550,
                      "end": 2618
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2636
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2640,
                            "end": 2666
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2667,
                                  "end": 2692
                                },
                                "typeArguments": null,
                                "start": 2667,
                                "end": 2692
                              }
                            ],
                            "start": 2666,
                            "end": 2693
                          },
                          "start": 2640,
                          "end": 2693
                        },
                        "start": 2638,
                        "end": 2693
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2627,
                      "end": 2694
                    }
                  ],
                  "start": 2295,
                  "end": 2700
                },
                "declare": false,
                "start": 2206,
                "end": 2700
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2199,
              "end": 2700
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
                  "start": 2723,
                  "end": 2762
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
                        "start": 2763,
                        "end": 2764
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2773,
                          "end": 2798
                        },
                        "typeArguments": null,
                        "start": 2773,
                        "end": 2798
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2763,
                      "end": 2798
                    }
                  ],
                  "start": 2762,
                  "end": 2799
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
                        "start": 2810,
                        "end": 2818
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
                                "start": 2824,
                                "end": 2825
                              },
                              "typeArguments": null,
                              "start": 2824,
                              "end": 2825
                            },
                            "start": 2822,
                            "end": 2825
                          },
                          "start": 2819,
                          "end": 2825
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
                      "readonly": false,
                      "static": false,
                      "start": 2810,
                      "end": 2830
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2839,
                        "end": 2848
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2852,
                            "end": 2878
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
                                  "start": 2879,
                                  "end": 2880
                                },
                                "typeArguments": null,
                                "start": 2879,
                                "end": 2880
                              }
                            ],
                            "start": 2878,
                            "end": 2881
                          },
                          "start": 2852,
                          "end": 2881
                        },
                        "start": 2850,
                        "end": 2881
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2839,
                      "end": 2881
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2890,
                        "end": 2899
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
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2903,
                            "end": 2930
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2931,
                                  "end": 2957
                                },
                                "typeArguments": null,
                                "start": 2931,
                                "end": 2957
                              }
                            ],
                            "start": 2930,
                            "end": 2958
                          },
                          "start": 2903,
                          "end": 2958
                        },
                        "start": 2901,
                        "end": 2958
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2890,
                      "end": 2959
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2968,
                        "end": 2977
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
                            "name": "privateClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2981,
                            "end": 3008
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3009,
                                  "end": 3034
                                },
                                "typeArguments": null,
                                "start": 3009,
                                "end": 3034
                              }
                            ],
                            "start": 3008,
                            "end": 3035
                          },
                          "start": 2981,
                          "end": 3035
                        },
                        "start": 2979,
                        "end": 3035
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 2968,
                      "end": 3036
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3045,
                        "end": 3054
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3058,
                            "end": 3084
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3085,
                                  "end": 3111
                                },
                                "typeArguments": null,
                                "start": 3085,
                                "end": 3111
                              }
                            ],
                            "start": 3084,
                            "end": 3112
                          },
                          "start": 3058,
                          "end": 3112
                        },
                        "start": 3056,
                        "end": 3112
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3045,
                      "end": 3113
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3122,
                        "end": 3131
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3135,
                            "end": 3161
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClassInPublicModule",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3162,
                                  "end": 3187
                                },
                                "typeArguments": null,
                                "start": 3162,
                                "end": 3187
                              }
                            ],
                            "start": 3161,
                            "end": 3188
                          },
                          "start": 3135,
                          "end": 3188
                        },
                        "start": 3133,
                        "end": 3188
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3122,
                      "end": 3189
                    }
                  ],
                  "start": 2800,
                  "end": 3195
                },
                "declare": false,
                "start": 2713,
                "end": 3195
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 2706,
              "end": 3195
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3211,
                "end": 3252
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
                      "start": 3253,
                      "end": 3254
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3263,
                        "end": 3289
                      },
                      "typeArguments": null,
                      "start": 3263,
                      "end": 3289
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3253,
                    "end": 3289
                  }
                ],
                "start": 3252,
                "end": 3290
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
                      "start": 3301,
                      "end": 3309
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
                              "start": 3315,
                              "end": 3316
                            },
                            "typeArguments": null,
                            "start": 3315,
                            "end": 3316
                          },
                          "start": 3313,
                          "end": 3316
                        },
                        "start": 3310,
                        "end": 3316
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
                          "start": 3319,
                          "end": 3320
                        },
                        "typeArguments": null,
                        "start": 3319,
                        "end": 3320
                      },
                      "start": 3317,
                      "end": 3320
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3301,
                    "end": 3321
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3330,
                      "end": 3339
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3343,
                          "end": 3369
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
                                "start": 3370,
                                "end": 3371
                              },
                              "typeArguments": null,
                              "start": 3370,
                              "end": 3371
                            }
                          ],
                          "start": 3369,
                          "end": 3372
                        },
                        "start": 3343,
                        "end": 3372
                      },
                      "start": 3341,
                      "end": 3372
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3330,
                    "end": 3373
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3382,
                      "end": 3391
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
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3395,
                          "end": 3422
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3423,
                                "end": 3449
                              },
                              "typeArguments": null,
                              "start": 3423,
                              "end": 3449
                            }
                          ],
                          "start": 3422,
                          "end": 3450
                        },
                        "start": 3395,
                        "end": 3450
                      },
                      "start": 3393,
                      "end": 3450
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3382,
                    "end": 3451
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3460,
                      "end": 3469
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
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3473,
                          "end": 3500
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3501,
                                "end": 3526
                              },
                              "typeArguments": null,
                              "start": 3501,
                              "end": 3526
                            }
                          ],
                          "start": 3500,
                          "end": 3527
                        },
                        "start": 3473,
                        "end": 3527
                      },
                      "start": 3471,
                      "end": 3527
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3460,
                    "end": 3528
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3537,
                      "end": 3546
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3550,
                          "end": 3576
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3577,
                                "end": 3603
                              },
                              "typeArguments": null,
                              "start": 3577,
                              "end": 3603
                            }
                          ],
                          "start": 3576,
                          "end": 3604
                        },
                        "start": 3550,
                        "end": 3604
                      },
                      "start": 3548,
                      "end": 3604
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3537,
                    "end": 3605
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3614,
                      "end": 3623
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3627,
                          "end": 3653
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3654,
                                "end": 3679
                              },
                              "typeArguments": null,
                              "start": 3654,
                              "end": 3679
                            }
                          ],
                          "start": 3653,
                          "end": 3680
                        },
                        "start": 3627,
                        "end": 3680
                      },
                      "start": 3625,
                      "end": 3680
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3614,
                    "end": 3681
                  }
                ],
                "start": 3291,
                "end": 3687
              },
              "declare": false,
              "start": 3201,
              "end": 3687
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 3703,
                "end": 3743
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
                      "start": 3744,
                      "end": 3745
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3754,
                        "end": 3779
                      },
                      "typeArguments": null,
                      "start": 3754,
                      "end": 3779
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3744,
                    "end": 3779
                  }
                ],
                "start": 3743,
                "end": 3780
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
                      "start": 3791,
                      "end": 3799
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
                              "start": 3805,
                              "end": 3806
                            },
                            "typeArguments": null,
                            "start": 3805,
                            "end": 3806
                          },
                          "start": 3803,
                          "end": 3806
                        },
                        "start": 3800,
                        "end": 3806
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
                          "start": 3809,
                          "end": 3810
                        },
                        "typeArguments": null,
                        "start": 3809,
                        "end": 3810
                      },
                      "start": 3807,
                      "end": 3810
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3791,
                    "end": 3811
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3820,
                      "end": 3829
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3833,
                          "end": 3859
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
                                "start": 3860,
                                "end": 3861
                              },
                              "typeArguments": null,
                              "start": 3860,
                              "end": 3861
                            }
                          ],
                          "start": 3859,
                          "end": 3862
                        },
                        "start": 3833,
                        "end": 3862
                      },
                      "start": 3831,
                      "end": 3862
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3820,
                    "end": 3863
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3872,
                      "end": 3881
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
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3885,
                          "end": 3912
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3913,
                                "end": 3939
                              },
                              "typeArguments": null,
                              "start": 3913,
                              "end": 3939
                            }
                          ],
                          "start": 3912,
                          "end": 3940
                        },
                        "start": 3885,
                        "end": 3940
                      },
                      "start": 3883,
                      "end": 3940
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3872,
                    "end": 3941
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3950,
                      "end": 3959
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
                          "name": "privateClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3963,
                          "end": 3990
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3991,
                                "end": 4016
                              },
                              "typeArguments": null,
                              "start": 3991,
                              "end": 4016
                            }
                          ],
                          "start": 3990,
                          "end": 4017
                        },
                        "start": 3963,
                        "end": 4017
                      },
                      "start": 3961,
                      "end": 4017
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3950,
                    "end": 4018
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4027,
                      "end": 4036
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4040,
                          "end": 4066
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4067,
                                "end": 4093
                              },
                              "typeArguments": null,
                              "start": 4067,
                              "end": 4093
                            }
                          ],
                          "start": 4066,
                          "end": 4094
                        },
                        "start": 4040,
                        "end": 4094
                      },
                      "start": 4038,
                      "end": 4094
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4027,
                    "end": 4095
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4104,
                      "end": 4113
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4117,
                          "end": 4143
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPublicModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4144,
                                "end": 4169
                              },
                              "typeArguments": null,
                              "start": 4144,
                              "end": 4169
                            }
                          ],
                          "start": 4143,
                          "end": 4170
                        },
                        "start": 4117,
                        "end": 4170
                      },
                      "start": 4115,
                      "end": 4170
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4104,
                    "end": 4171
                  }
                ],
                "start": 3781,
                "end": 4177
              },
              "declare": false,
              "start": 3693,
              "end": 4177
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
                  "start": 4200,
                  "end": 4253
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
                        "start": 4254,
                        "end": 4255
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4254,
                      "end": 4255
                    }
                  ],
                  "start": 4253,
                  "end": 4256
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
                        "start": 4267,
                        "end": 4275
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
                                "start": 4281,
                                "end": 4282
                              },
                              "typeArguments": null,
                              "start": 4281,
                              "end": 4282
                            },
                            "start": 4279,
                            "end": 4282
                          },
                          "start": 4276,
                          "end": 4282
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
                            "start": 4285,
                            "end": 4286
                          },
                          "typeArguments": null,
                          "start": 4285,
                          "end": 4286
                        },
                        "start": 4283,
                        "end": 4286
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4267,
                      "end": 4287
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4296,
                        "end": 4305
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
                            "name": "publicClassInPublicModuleT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4309,
                            "end": 4335
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
                                  "start": 4336,
                                  "end": 4337
                                },
                                "typeArguments": null,
                                "start": 4336,
                                "end": 4337
                              }
                            ],
                            "start": 4335,
                            "end": 4338
                          },
                          "start": 4309,
                          "end": 4338
                        },
                        "start": 4307,
                        "end": 4338
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 4296,
                      "end": 4339
                    }
                  ],
                  "start": 4257,
                  "end": 4345
                },
                "declare": false,
                "start": 4190,
                "end": 4345
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4183,
              "end": 4345
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 4361,
                "end": 4415
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
                      "start": 4416,
                      "end": 4417
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4416,
                    "end": 4417
                  }
                ],
                "start": 4415,
                "end": 4418
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
                      "start": 4429,
                      "end": 4437
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
                              "start": 4443,
                              "end": 4444
                            },
                            "typeArguments": null,
                            "start": 4443,
                            "end": 4444
                          },
                          "start": 4441,
                          "end": 4444
                        },
                        "start": 4438,
                        "end": 4444
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
                          "start": 4447,
                          "end": 4448
                        },
                        "typeArguments": null,
                        "start": 4447,
                        "end": 4448
                      },
                      "start": 4445,
                      "end": 4448
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4429,
                    "end": 4449
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4458,
                      "end": 4467
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
                          "name": "publicClassInPublicModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4471,
                          "end": 4497
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
                                "start": 4498,
                                "end": 4499
                              },
                              "typeArguments": null,
                              "start": 4498,
                              "end": 4499
                            }
                          ],
                          "start": 4497,
                          "end": 4500
                        },
                        "start": 4471,
                        "end": 4500
                      },
                      "start": 4469,
                      "end": 4500
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 4458,
                    "end": 4501
                  }
                ],
                "start": 4419,
                "end": 4507
              },
              "declare": false,
              "start": 4351,
              "end": 4507
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4530,
                  "end": 4586
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
                        "start": 4587,
                        "end": 4588
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4597,
                            "end": 4610
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4611,
                            "end": 4637
                          },
                          "start": 4597,
                          "end": 4637
                        },
                        "typeArguments": null,
                        "start": 4597,
                        "end": 4637
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4587,
                      "end": 4637
                    }
                  ],
                  "start": 4586,
                  "end": 4638
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 4639,
                  "end": 4655
                },
                "declare": false,
                "start": 4520,
                "end": 4655
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4513,
              "end": 4655
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
                "optional": false,
                "typeAnnotation": null,
                "start": 4671,
                "end": 4728
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
                      "start": 4729,
                      "end": 4730
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4739,
                          "end": 4752
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4753,
                          "end": 4779
                        },
                        "start": 4739,
                        "end": 4779
                      },
                      "typeArguments": null,
                      "start": 4739,
                      "end": 4779
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4729,
                    "end": 4779
                  }
                ],
                "start": 4728,
                "end": 4780
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4781,
                "end": 4797
              },
              "declare": false,
              "start": 4661,
              "end": 4797
            }
          ],
          "start": 1989,
          "end": 4799
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 1966,
        "end": 4799
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1959,
      "end": 4799
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 4811,
        "end": 4824
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 4837,
              "end": 4864
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4865,
              "end": 4872
            },
            "abstract": false,
            "declare": false,
            "start": 4831,
            "end": 4872
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 4891,
                "end": 4917
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4918,
                "end": 4925
              },
              "abstract": false,
              "declare": false,
              "start": 4885,
              "end": 4925
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4878,
            "end": 4925
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassInPrivateModuleT",
              "optional": false,
              "typeAnnotation": null,
              "start": 4937,
              "end": 4965
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
                    "start": 4966,
                    "end": 4967
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4966,
                  "end": 4967
                }
              ],
              "start": 4965,
              "end": 4968
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 4969,
              "end": 4976
            },
            "abstract": false,
            "declare": false,
            "start": 4931,
            "end": 4976
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassInPrivateModuleT",
                "optional": false,
                "typeAnnotation": null,
                "start": 4995,
                "end": 5022
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
                      "start": 5023,
                      "end": 5024
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5023,
                    "end": 5024
                  }
                ],
                "start": 5022,
                "end": 5025
              },
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 5026,
                "end": 5033
              },
              "abstract": false,
              "declare": false,
              "start": 4989,
              "end": 5033
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4982,
            "end": 5033
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
                "start": 5056,
                "end": 5096
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
                      "start": 5097,
                      "end": 5098
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5107,
                        "end": 5134
                      },
                      "typeArguments": null,
                      "start": 5107,
                      "end": 5134
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5097,
                    "end": 5134
                  }
                ],
                "start": 5096,
                "end": 5135
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
                      "start": 5146,
                      "end": 5154
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
                              "start": 5160,
                              "end": 5161
                            },
                            "typeArguments": null,
                            "start": 5160,
                            "end": 5161
                          },
                          "start": 5158,
                          "end": 5161
                        },
                        "start": 5155,
                        "end": 5161
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
                          "start": 5164,
                          "end": 5165
                        },
                        "typeArguments": null,
                        "start": 5164,
                        "end": 5165
                      },
                      "start": 5162,
                      "end": 5165
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5146,
                    "end": 5166
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5175,
                      "end": 5184
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5188,
                          "end": 5215
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
                                "start": 5216,
                                "end": 5217
                              },
                              "typeArguments": null,
                              "start": 5216,
                              "end": 5217
                            }
                          ],
                          "start": 5215,
                          "end": 5218
                        },
                        "start": 5188,
                        "end": 5218
                      },
                      "start": 5186,
                      "end": 5218
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5175,
                    "end": 5219
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5228,
                      "end": 5237
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
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5241,
                          "end": 5269
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5270,
                                "end": 5297
                              },
                              "typeArguments": null,
                              "start": 5270,
                              "end": 5297
                            }
                          ],
                          "start": 5269,
                          "end": 5298
                        },
                        "start": 5241,
                        "end": 5298
                      },
                      "start": 5239,
                      "end": 5298
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5228,
                    "end": 5299
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5308,
                      "end": 5317
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
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5321,
                          "end": 5349
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5350,
                                "end": 5376
                              },
                              "typeArguments": null,
                              "start": 5350,
                              "end": 5376
                            }
                          ],
                          "start": 5349,
                          "end": 5377
                        },
                        "start": 5321,
                        "end": 5377
                      },
                      "start": 5319,
                      "end": 5377
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5308,
                    "end": 5378
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5387,
                      "end": 5396
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5400,
                          "end": 5427
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5428,
                                "end": 5455
                              },
                              "typeArguments": null,
                              "start": 5428,
                              "end": 5455
                            }
                          ],
                          "start": 5427,
                          "end": 5456
                        },
                        "start": 5400,
                        "end": 5456
                      },
                      "start": 5398,
                      "end": 5456
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5387,
                    "end": 5457
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5466,
                      "end": 5475
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5479,
                          "end": 5506
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5507,
                                "end": 5533
                              },
                              "typeArguments": null,
                              "start": 5507,
                              "end": 5533
                            }
                          ],
                          "start": 5506,
                          "end": 5534
                        },
                        "start": 5479,
                        "end": 5534
                      },
                      "start": 5477,
                      "end": 5534
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5466,
                    "end": 5535
                  }
                ],
                "start": 5136,
                "end": 5541
              },
              "declare": false,
              "start": 5046,
              "end": 5541
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5039,
            "end": 5541
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
                "start": 5564,
                "end": 5603
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
                      "start": 5604,
                      "end": 5605
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5614,
                        "end": 5640
                      },
                      "typeArguments": null,
                      "start": 5614,
                      "end": 5640
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 5604,
                    "end": 5640
                  }
                ],
                "start": 5603,
                "end": 5641
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
                      "start": 5652,
                      "end": 5660
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
                              "start": 5666,
                              "end": 5667
                            },
                            "typeArguments": null,
                            "start": 5666,
                            "end": 5667
                          },
                          "start": 5664,
                          "end": 5667
                        },
                        "start": 5661,
                        "end": 5667
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
                          "start": 5670,
                          "end": 5671
                        },
                        "typeArguments": null,
                        "start": 5670,
                        "end": 5671
                      },
                      "start": 5668,
                      "end": 5671
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5652,
                    "end": 5672
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5681,
                      "end": 5690
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5694,
                          "end": 5721
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
                                "start": 5722,
                                "end": 5723
                              },
                              "typeArguments": null,
                              "start": 5722,
                              "end": 5723
                            }
                          ],
                          "start": 5721,
                          "end": 5724
                        },
                        "start": 5694,
                        "end": 5724
                      },
                      "start": 5692,
                      "end": 5724
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5681,
                    "end": 5724
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5733,
                      "end": 5742
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
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5746,
                          "end": 5774
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5775,
                                "end": 5802
                              },
                              "typeArguments": null,
                              "start": 5775,
                              "end": 5802
                            }
                          ],
                          "start": 5774,
                          "end": 5803
                        },
                        "start": 5746,
                        "end": 5803
                      },
                      "start": 5744,
                      "end": 5803
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5733,
                    "end": 5804
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5813,
                      "end": 5822
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
                          "name": "privateClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5826,
                          "end": 5854
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5855,
                                "end": 5881
                              },
                              "typeArguments": null,
                              "start": 5855,
                              "end": 5881
                            }
                          ],
                          "start": 5854,
                          "end": 5882
                        },
                        "start": 5826,
                        "end": 5882
                      },
                      "start": 5824,
                      "end": 5882
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5813,
                    "end": 5883
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5892,
                      "end": 5901
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5905,
                          "end": 5932
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5933,
                                "end": 5960
                              },
                              "typeArguments": null,
                              "start": 5933,
                              "end": 5960
                            }
                          ],
                          "start": 5932,
                          "end": 5961
                        },
                        "start": 5905,
                        "end": 5961
                      },
                      "start": 5903,
                      "end": 5961
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5892,
                    "end": 5962
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5971,
                      "end": 5980
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5984,
                          "end": 6011
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClassInPrivateModule",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6012,
                                "end": 6038
                              },
                              "typeArguments": null,
                              "start": 6012,
                              "end": 6038
                            }
                          ],
                          "start": 6011,
                          "end": 6039
                        },
                        "start": 5984,
                        "end": 6039
                      },
                      "start": 5982,
                      "end": 6039
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5971,
                    "end": 6040
                  }
                ],
                "start": 5642,
                "end": 6046
              },
              "declare": false,
              "start": 5554,
              "end": 6046
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 5547,
            "end": 6046
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6062,
              "end": 6103
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
                    "start": 6104,
                    "end": 6105
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6114,
                      "end": 6141
                    },
                    "typeArguments": null,
                    "start": 6114,
                    "end": 6141
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6104,
                  "end": 6141
                }
              ],
              "start": 6103,
              "end": 6142
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
                    "start": 6153,
                    "end": 6161
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
                            "start": 6167,
                            "end": 6168
                          },
                          "typeArguments": null,
                          "start": 6167,
                          "end": 6168
                        },
                        "start": 6165,
                        "end": 6168
                      },
                      "start": 6162,
                      "end": 6168
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
                        "start": 6171,
                        "end": 6172
                      },
                      "typeArguments": null,
                      "start": 6171,
                      "end": 6172
                    },
                    "start": 6169,
                    "end": 6172
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6153,
                  "end": 6173
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6182,
                    "end": 6191
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6195,
                        "end": 6222
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
                              "start": 6223,
                              "end": 6224
                            },
                            "typeArguments": null,
                            "start": 6223,
                            "end": 6224
                          }
                        ],
                        "start": 6222,
                        "end": 6225
                      },
                      "start": 6195,
                      "end": 6225
                    },
                    "start": 6193,
                    "end": 6225
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6182,
                  "end": 6226
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6235,
                    "end": 6244
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
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6248,
                        "end": 6276
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6277,
                              "end": 6304
                            },
                            "typeArguments": null,
                            "start": 6277,
                            "end": 6304
                          }
                        ],
                        "start": 6276,
                        "end": 6305
                      },
                      "start": 6248,
                      "end": 6305
                    },
                    "start": 6246,
                    "end": 6305
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6235,
                  "end": 6306
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6315,
                    "end": 6324
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
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6328,
                        "end": 6356
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6357,
                              "end": 6383
                            },
                            "typeArguments": null,
                            "start": 6357,
                            "end": 6383
                          }
                        ],
                        "start": 6356,
                        "end": 6384
                      },
                      "start": 6328,
                      "end": 6384
                    },
                    "start": 6326,
                    "end": 6384
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6315,
                  "end": 6385
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6394,
                    "end": 6403
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6407,
                        "end": 6434
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6435,
                              "end": 6462
                            },
                            "typeArguments": null,
                            "start": 6435,
                            "end": 6462
                          }
                        ],
                        "start": 6434,
                        "end": 6463
                      },
                      "start": 6407,
                      "end": 6463
                    },
                    "start": 6405,
                    "end": 6463
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6394,
                  "end": 6464
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6473,
                    "end": 6482
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6486,
                        "end": 6513
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6514,
                              "end": 6540
                            },
                            "typeArguments": null,
                            "start": 6514,
                            "end": 6540
                          }
                        ],
                        "start": 6513,
                        "end": 6541
                      },
                      "start": 6486,
                      "end": 6541
                    },
                    "start": 6484,
                    "end": 6541
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6473,
                  "end": 6542
                }
              ],
              "start": 6143,
              "end": 6548
            },
            "declare": false,
            "start": 6052,
            "end": 6548
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 6564,
              "end": 6604
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
                    "start": 6605,
                    "end": 6606
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6615,
                      "end": 6641
                    },
                    "typeArguments": null,
                    "start": 6615,
                    "end": 6641
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 6605,
                  "end": 6641
                }
              ],
              "start": 6604,
              "end": 6642
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
                    "start": 6653,
                    "end": 6661
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
                            "start": 6667,
                            "end": 6668
                          },
                          "typeArguments": null,
                          "start": 6667,
                          "end": 6668
                        },
                        "start": 6665,
                        "end": 6668
                      },
                      "start": 6662,
                      "end": 6668
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
                        "start": 6671,
                        "end": 6672
                      },
                      "typeArguments": null,
                      "start": 6671,
                      "end": 6672
                    },
                    "start": 6669,
                    "end": 6672
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6653,
                  "end": 6673
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6682,
                    "end": 6691
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6695,
                        "end": 6722
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
                              "start": 6723,
                              "end": 6724
                            },
                            "typeArguments": null,
                            "start": 6723,
                            "end": 6724
                          }
                        ],
                        "start": 6722,
                        "end": 6725
                      },
                      "start": 6695,
                      "end": 6725
                    },
                    "start": 6693,
                    "end": 6725
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6682,
                  "end": 6726
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6735,
                    "end": 6744
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
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6748,
                        "end": 6776
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6777,
                              "end": 6804
                            },
                            "typeArguments": null,
                            "start": 6777,
                            "end": 6804
                          }
                        ],
                        "start": 6776,
                        "end": 6805
                      },
                      "start": 6748,
                      "end": 6805
                    },
                    "start": 6746,
                    "end": 6805
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6735,
                  "end": 6806
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6815,
                    "end": 6824
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
                        "name": "privateClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6828,
                        "end": 6856
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6857,
                              "end": 6883
                            },
                            "typeArguments": null,
                            "start": 6857,
                            "end": 6883
                          }
                        ],
                        "start": 6856,
                        "end": 6884
                      },
                      "start": 6828,
                      "end": 6884
                    },
                    "start": 6826,
                    "end": 6884
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6815,
                  "end": 6885
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6894,
                    "end": 6903
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6907,
                        "end": 6934
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6935,
                              "end": 6962
                            },
                            "typeArguments": null,
                            "start": 6935,
                            "end": 6962
                          }
                        ],
                        "start": 6934,
                        "end": 6963
                      },
                      "start": 6907,
                      "end": 6963
                    },
                    "start": 6905,
                    "end": 6963
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6894,
                  "end": 6964
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6973,
                    "end": 6982
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6986,
                        "end": 7013
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClassInPrivateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7014,
                              "end": 7040
                            },
                            "typeArguments": null,
                            "start": 7014,
                            "end": 7040
                          }
                        ],
                        "start": 7013,
                        "end": 7041
                      },
                      "start": 6986,
                      "end": 7041
                    },
                    "start": 6984,
                    "end": 7041
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 6973,
                  "end": 7042
                }
              ],
              "start": 6643,
              "end": 7048
            },
            "declare": false,
            "start": 6554,
            "end": 7048
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
                "start": 7071,
                "end": 7124
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
                      "start": 7125,
                      "end": 7126
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7125,
                    "end": 7126
                  }
                ],
                "start": 7124,
                "end": 7127
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
                      "start": 7138,
                      "end": 7146
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
                              "start": 7152,
                              "end": 7153
                            },
                            "typeArguments": null,
                            "start": 7152,
                            "end": 7153
                          },
                          "start": 7150,
                          "end": 7153
                        },
                        "start": 7147,
                        "end": 7153
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
                          "start": 7156,
                          "end": 7157
                        },
                        "typeArguments": null,
                        "start": 7156,
                        "end": 7157
                      },
                      "start": 7154,
                      "end": 7157
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7138,
                    "end": 7158
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7167,
                      "end": 7176
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
                          "name": "publicClassInPrivateModuleT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7180,
                          "end": 7207
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
                                "start": 7208,
                                "end": 7209
                              },
                              "typeArguments": null,
                              "start": 7208,
                              "end": 7209
                            }
                          ],
                          "start": 7207,
                          "end": 7210
                        },
                        "start": 7180,
                        "end": 7210
                      },
                      "start": 7178,
                      "end": 7210
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7167,
                    "end": 7211
                  }
                ],
                "start": 7128,
                "end": 7217
              },
              "declare": false,
              "start": 7061,
              "end": 7217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 7054,
            "end": 7217
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 7233,
              "end": 7287
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
                    "start": 7288,
                    "end": 7289
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 7288,
                  "end": 7289
                }
              ],
              "start": 7287,
              "end": 7290
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
                    "start": 7301,
                    "end": 7309
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
                            "start": 7315,
                            "end": 7316
                          },
                          "typeArguments": null,
                          "start": 7315,
                          "end": 7316
                        },
                        "start": 7313,
                        "end": 7316
                      },
                      "start": 7310,
                      "end": 7316
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
                        "start": 7319,
                        "end": 7320
                      },
                      "typeArguments": null,
                      "start": 7319,
                      "end": 7320
                    },
                    "start": 7317,
                    "end": 7320
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7301,
                  "end": 7321
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7330,
                    "end": 7339
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
                        "name": "publicClassInPrivateModuleT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7343,
                        "end": 7370
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
                              "start": 7371,
                              "end": 7372
                            },
                            "typeArguments": null,
                            "start": 7371,
                            "end": 7372
                          }
                        ],
                        "start": 7370,
                        "end": 7373
                      },
                      "start": 7343,
                      "end": 7373
                    },
                    "start": 7341,
                    "end": 7373
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 7330,
                  "end": 7374
                }
              ],
              "start": 7291,
              "end": 7380
            },
            "declare": false,
            "start": 7223,
            "end": 7380
          }
        ],
        "start": 4825,
        "end": 7382
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4801,
      "end": 7382
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 7382
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
    "start": 116,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 123,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 133,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 176,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 184,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 222,
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
    "value": "T",
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
    "value": ":",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 238,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 251,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 272,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "privateClassT",
    "start": 285,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 299,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 319,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 328,
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
    "value": ":",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 332,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 346,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 364,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 377,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 390,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 409,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 422,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 435,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 453,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 460,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 470,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 512,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 520,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 539,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 564,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 577,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 597,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 610,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 624,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 643,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ":",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 656,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 670,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 688,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 701,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 714,
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
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 733,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 746,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 759,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 773,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 776,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 786,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 830,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 838,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "myMethod",
    "start": 858,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 867,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 870,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 873,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 883,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 896,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 908,
    "end": 909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 917,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 928,
    "end": 929
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 930,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 944,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 963,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
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
    "value": "privateClassT",
    "start": 976,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 989,
    "end": 990
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 990,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1001,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 1008,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1021,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1034,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1046,
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
    "value": "myMethod4",
    "start": 1053,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1066,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1079,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1096,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 1106,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1149,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1157,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1176,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "T",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1201,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1214,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 1235,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1248,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1262,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 1281,
    "end": 1290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1290,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "privateClassT",
    "start": 1294,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1308,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 1326,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1339,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1352,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 1371,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1384,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1397,
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
    "value": ";",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1414,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1421,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 1431,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1494,
    "end": 1502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1503,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1519,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1532,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1552,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 1562,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1626,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1635,
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
    "value": "T",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 1651,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Identifier",
    "value": "publicClassT",
    "start": 1664,
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
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1681,
    "end": 1682
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1685,
    "end": 1691
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1692,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
    "start": 1702,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1761,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1769,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1783,
    "end": 1809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1825,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
    "start": 1835,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1895,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1903,
    "end": 1916
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1916,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1917,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1959,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1966,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 1976,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1995,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 2001,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2041,
    "end": 2047
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2048,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 2054,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2093,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 2099,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2143,
    "end": 2149
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2150,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 2156,
    "end": 2182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2199,
    "end": 2205
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2206,
    "end": 2215
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 2216,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2259,
    "end": 2266
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 2267,
    "end": 2293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2293,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2295,
    "end": 2296
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2314,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2323,
    "end": 2326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2332,
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
    "value": "myMethod0",
    "start": 2343,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 2356,
    "end": 2382
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 2395,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 2408,
    "end": 2435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 2436,
    "end": 2462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
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
    "value": "myMethod2",
    "start": 2473,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2483,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 2486,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 2514,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2539,
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
    "value": "myMethod3",
    "start": 2550,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 2563,
    "end": 2589
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2589,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 2590,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 2627,
    "end": 2636
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 2640,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 2667,
    "end": 2692
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2692,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2706,
    "end": 2712
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2713,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 2723,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2765,
    "end": 2772
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 2773,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2810,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2819,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2824,
    "end": 2825
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
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
    "value": "myMethod0",
    "start": 2839,
    "end": 2848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2849,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 2852,
    "end": 2878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2878,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 2890,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 2903,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 2931,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 2968,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 2981,
    "end": 3008
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3009,
    "end": 3034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3034,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 3045,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 3058,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 3085,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3112,
    "end": 3113
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 3122,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3132,
    "end": 3133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 3135,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3162,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3188,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3201,
    "end": 3210
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 3211,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3255,
    "end": 3262
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 3263,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3301,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3310,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 3330,
    "end": 3339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3339,
    "end": 3340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3340,
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
    "value": "publicClassInPublicModuleT",
    "start": 3343,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 3382,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3392,
    "end": 3393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3393,
    "end": 3394
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 3395,
    "end": 3422
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 3423,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 3460,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 3473,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3500,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3501,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 3537,
    "end": 3546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3546,
    "end": 3547
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "publicClassInPublicModuleT",
    "start": 3550,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 3577,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 3614,
    "end": 3623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3623,
    "end": 3624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3624,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3625,
    "end": 3626
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 3627,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3654,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3680,
    "end": 3681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3686,
    "end": 3687
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3693,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 3703,
    "end": 3743
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3743,
    "end": 3744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3746,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3754,
    "end": 3779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3779,
    "end": 3780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3791,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3800,
    "end": 3803
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3806,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3810,
    "end": 3811
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 3820,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3830,
    "end": 3831
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3831,
    "end": 3832
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 3833,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3859,
    "end": 3860
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3860,
    "end": 3861
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3861,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 3872,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3883,
    "end": 3884
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 3885,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 3913,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 3950,
    "end": 3959
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3959,
    "end": 3960
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3960,
    "end": 3961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3961,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModuleT",
    "start": 3963,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 3991,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4017,
    "end": 4018
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 4027,
    "end": 4036
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4036,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4038,
    "end": 4039
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 4040,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 4067,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 4104,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4113,
    "end": 4114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 4117,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 4144,
    "end": 4169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4169,
    "end": 4170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4170,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4183,
    "end": 4189
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4190,
    "end": 4199
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 4200,
    "end": 4253
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4253,
    "end": 4254
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4255,
    "end": 4256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4257,
    "end": 4258
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 4267,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 4276,
    "end": 4279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4279,
    "end": 4280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4281,
    "end": 4282
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4282,
    "end": 4283
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4283,
    "end": 4284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4285,
    "end": 4286
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4286,
    "end": 4287
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 4296,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4306,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4307,
    "end": 4308
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 4309,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4336,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4344,
    "end": 4345
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4351,
    "end": 4360
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 4361,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4416,
    "end": 4417
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4419,
    "end": 4420
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 4429,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 4438,
    "end": 4441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4441,
    "end": 4442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4444,
    "end": 4445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 4458,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModuleT",
    "start": 4471,
    "end": 4497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4497,
    "end": 4498
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4498,
    "end": 4499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4499,
    "end": 4500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4500,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4513,
    "end": 4519
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4520,
    "end": 4529
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateModuleTypeParameterConstraints",
    "start": 4530,
    "end": 4586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4586,
    "end": 4587
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4587,
    "end": 4588
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4589,
    "end": 4596
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4597,
    "end": 4610
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4610,
    "end": 4611
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 4611,
    "end": 4637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4637,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4639,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4654,
    "end": 4655
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4661,
    "end": 4670
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateModuleTypeParameterConstraints",
    "start": 4671,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4729,
    "end": 4730
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4731,
    "end": 4738
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4739,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 4753,
    "end": 4779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4781,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4798,
    "end": 4799
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4801,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4811,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4831,
    "end": 4836
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 4837,
    "end": 4864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4865,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4878,
    "end": 4884
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4885,
    "end": 4890
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 4891,
    "end": 4917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4918,
    "end": 4919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4924,
    "end": 4925
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4931,
    "end": 4936
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 4937,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4966,
    "end": 4967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4967,
    "end": 4968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4969,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4975,
    "end": 4976
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4982,
    "end": 4988
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4989,
    "end": 4994
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 4995,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5026,
    "end": 5027
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5032,
    "end": 5033
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5039,
    "end": 5045
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5046,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 5056,
    "end": 5096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5096,
    "end": 5097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5097,
    "end": 5098
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5099,
    "end": 5106
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 5107,
    "end": 5134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5134,
    "end": 5135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5146,
    "end": 5154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5154,
    "end": 5155
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 5155,
    "end": 5158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5160,
    "end": 5161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5161,
    "end": 5162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5162,
    "end": 5163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 5175,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5188,
    "end": 5215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5215,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5216,
    "end": 5217
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5217,
    "end": 5218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5218,
    "end": 5219
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 5228,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 5241,
    "end": 5269
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5269,
    "end": 5270
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 5270,
    "end": 5297
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5297,
    "end": 5298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5298,
    "end": 5299
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 5308,
    "end": 5317
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5317,
    "end": 5318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5319,
    "end": 5320
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 5321,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 5350,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5376,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 5387,
    "end": 5396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5396,
    "end": 5397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5397,
    "end": 5398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5398,
    "end": 5399
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5400,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 5428,
    "end": 5455
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5455,
    "end": 5456
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5456,
    "end": 5457
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 5466,
    "end": 5475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5475,
    "end": 5476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5476,
    "end": 5477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5477,
    "end": 5478
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5479,
    "end": 5506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5506,
    "end": 5507
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 5507,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5534,
    "end": 5535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5540,
    "end": 5541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5547,
    "end": 5553
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5554,
    "end": 5563
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 5564,
    "end": 5603
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5603,
    "end": 5604
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5604,
    "end": 5605
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5606,
    "end": 5613
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 5614,
    "end": 5640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5640,
    "end": 5641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5642,
    "end": 5643
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5652,
    "end": 5660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 5661,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5668,
    "end": 5669
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5671,
    "end": 5672
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 5681,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5691,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5692,
    "end": 5693
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5694,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5722,
    "end": 5723
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5723,
    "end": 5724
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 5733,
    "end": 5742
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5742,
    "end": 5743
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5743,
    "end": 5744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5744,
    "end": 5745
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 5746,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 5775,
    "end": 5802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5802,
    "end": 5803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5803,
    "end": 5804
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 5813,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5822,
    "end": 5823
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5823,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 5826,
    "end": 5854
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5854,
    "end": 5855
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 5855,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 5892,
    "end": 5901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5901,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5902,
    "end": 5903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5903,
    "end": 5904
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5905,
    "end": 5932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5932,
    "end": 5933
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 5933,
    "end": 5960
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5960,
    "end": 5961
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5961,
    "end": 5962
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 5971,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5981,
    "end": 5982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5982,
    "end": 5983
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 5984,
    "end": 6011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6011,
    "end": 6012
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 6012,
    "end": 6038
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6038,
    "end": 6039
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6039,
    "end": 6040
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6045,
    "end": 6046
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6052,
    "end": 6061
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 6062,
    "end": 6103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6103,
    "end": 6104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6104,
    "end": 6105
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6106,
    "end": 6113
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 6114,
    "end": 6141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6141,
    "end": 6142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6143,
    "end": 6144
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 6153,
    "end": 6161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6161,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 6162,
    "end": 6165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6165,
    "end": 6166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6167,
    "end": 6168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6168,
    "end": 6169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6169,
    "end": 6170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6172,
    "end": 6173
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 6182,
    "end": 6191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6191,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6192,
    "end": 6193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6195,
    "end": 6222
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6222,
    "end": 6223
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6223,
    "end": 6224
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6224,
    "end": 6225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6225,
    "end": 6226
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 6235,
    "end": 6244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6244,
    "end": 6245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6245,
    "end": 6246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6246,
    "end": 6247
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 6248,
    "end": 6276
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6276,
    "end": 6277
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 6277,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6305,
    "end": 6306
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 6315,
    "end": 6324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6324,
    "end": 6325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6325,
    "end": 6326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6326,
    "end": 6327
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 6328,
    "end": 6356
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6356,
    "end": 6357
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 6357,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6384,
    "end": 6385
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 6394,
    "end": 6403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6404,
    "end": 6405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6405,
    "end": 6406
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6407,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 6435,
    "end": 6462
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6462,
    "end": 6463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6463,
    "end": 6464
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 6473,
    "end": 6482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6482,
    "end": 6483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6483,
    "end": 6484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6484,
    "end": 6485
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6486,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6513,
    "end": 6514
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 6514,
    "end": 6540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6540,
    "end": 6541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6541,
    "end": 6542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6547,
    "end": 6548
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 6554,
    "end": 6563
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 6564,
    "end": 6604
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6604,
    "end": 6605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6605,
    "end": 6606
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6607,
    "end": 6614
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 6615,
    "end": 6641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6643,
    "end": 6644
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 6653,
    "end": 6661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6661,
    "end": 6662
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 6662,
    "end": 6665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6665,
    "end": 6666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6667,
    "end": 6668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6668,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6669,
    "end": 6670
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6671,
    "end": 6672
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 6682,
    "end": 6691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6691,
    "end": 6692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6692,
    "end": 6693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6693,
    "end": 6694
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6695,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6722,
    "end": 6723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6724,
    "end": 6725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6725,
    "end": 6726
  },
  {
    "type": "Identifier",
    "value": "myMethod1",
    "start": 6735,
    "end": 6744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6744,
    "end": 6745
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6745,
    "end": 6746
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6746,
    "end": 6747
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 6748,
    "end": 6776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 6777,
    "end": 6804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6804,
    "end": 6805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6805,
    "end": 6806
  },
  {
    "type": "Identifier",
    "value": "myMethod2",
    "start": 6815,
    "end": 6824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6824,
    "end": 6825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6825,
    "end": 6826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6826,
    "end": 6827
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModuleT",
    "start": 6828,
    "end": 6856
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6856,
    "end": 6857
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 6857,
    "end": 6883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6883,
    "end": 6884
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6884,
    "end": 6885
  },
  {
    "type": "Identifier",
    "value": "myMethod3",
    "start": 6894,
    "end": 6903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6903,
    "end": 6904
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6905,
    "end": 6906
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6907,
    "end": 6934
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6934,
    "end": 6935
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 6935,
    "end": 6962
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6962,
    "end": 6963
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6963,
    "end": 6964
  },
  {
    "type": "Identifier",
    "value": "myMethod4",
    "start": 6973,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6982,
    "end": 6983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6983,
    "end": 6984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6984,
    "end": 6985
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 6986,
    "end": 7013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7013,
    "end": 7014
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 7014,
    "end": 7040
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7040,
    "end": 7041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7041,
    "end": 7042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7047,
    "end": 7048
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7054,
    "end": 7060
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7061,
    "end": 7070
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 7071,
    "end": 7124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7124,
    "end": 7125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7125,
    "end": 7126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7126,
    "end": 7127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7128,
    "end": 7129
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 7138,
    "end": 7146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7146,
    "end": 7147
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 7147,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7150,
    "end": 7151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7152,
    "end": 7153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7153,
    "end": 7154
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7154,
    "end": 7155
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7156,
    "end": 7157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 7167,
    "end": 7176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7176,
    "end": 7177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7177,
    "end": 7178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7178,
    "end": 7179
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 7180,
    "end": 7207
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7207,
    "end": 7208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7208,
    "end": 7209
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7209,
    "end": 7210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7210,
    "end": 7211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7216,
    "end": 7217
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7223,
    "end": 7232
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 7233,
    "end": 7287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7287,
    "end": 7288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7288,
    "end": 7289
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7289,
    "end": 7290
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7291,
    "end": 7292
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 7301,
    "end": 7309
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7309,
    "end": 7310
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 7310,
    "end": 7313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7313,
    "end": 7314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7315,
    "end": 7316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7316,
    "end": 7317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7317,
    "end": 7318
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7319,
    "end": 7320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7320,
    "end": 7321
  },
  {
    "type": "Identifier",
    "value": "myMethod0",
    "start": 7330,
    "end": 7339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7339,
    "end": 7340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7340,
    "end": 7341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7341,
    "end": 7342
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModuleT",
    "start": 7343,
    "end": 7370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7370,
    "end": 7371
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7371,
    "end": 7372
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7372,
    "end": 7373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7373,
    "end": 7374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7379,
    "end": 7380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7381,
    "end": 7382
  }
]
```
