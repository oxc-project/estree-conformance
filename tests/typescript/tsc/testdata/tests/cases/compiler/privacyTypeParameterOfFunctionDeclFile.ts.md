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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 71,
          "end": 111
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 123,
                      "end": 124
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 145
                      },
                      "typeArguments": null,
                      "start": 133,
                      "end": 145
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 123,
                    "end": 145
                  }
                ],
                "start": 122,
                "end": 146
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 150,
                  "end": 162
                },
                "start": 148,
                "end": 162
              },
              "start": 118,
              "end": 163
            },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 180
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 189,
                        "end": 201
                      },
                      "typeArguments": null,
                      "start": 189,
                      "end": 201
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 179,
                    "end": 201
                  }
                ],
                "start": 178,
                "end": 202
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 218
                  },
                  "typeArguments": null,
                  "start": 206,
                  "end": 218
                },
                "start": 204,
                "end": 218
              },
              "start": 178,
              "end": 219
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 234,
                "end": 242
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
                      "start": 243,
                      "end": 244
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 265
                      },
                      "typeArguments": null,
                      "start": 253,
                      "end": 265
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 243,
                    "end": 265
                  }
                ],
                "start": 242,
                "end": 266
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 282
                  },
                  "typeArguments": null,
                  "start": 270,
                  "end": 282
                },
                "start": 268,
                "end": 282
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 234,
              "end": 283
            }
          ],
          "start": 112,
          "end": 295
        },
        "declare": false,
        "start": 61,
        "end": 295
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 295
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
          "start": 314,
          "end": 353
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 365,
                      "end": 366
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 375,
                        "end": 386
                      },
                      "typeArguments": null,
                      "start": 375,
                      "end": 386
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 365,
                    "end": 386
                  }
                ],
                "start": 364,
                "end": 387
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 391,
                    "end": 402
                  },
                  "typeArguments": null,
                  "start": 391,
                  "end": 402
                },
                "start": 389,
                "end": 402
              },
              "start": 360,
              "end": 403
            },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 409,
                      "end": 410
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 430
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 430
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 409,
                    "end": 430
                  }
                ],
                "start": 408,
                "end": 431
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
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
                },
                "start": 433,
                "end": 446
              },
              "start": 408,
              "end": 447
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 460
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
                      "start": 461,
                      "end": 462
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 471,
                        "end": 482
                      },
                      "typeArguments": null,
                      "start": 471,
                      "end": 482
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 461,
                    "end": 482
                  }
                ],
                "start": 460,
                "end": 483
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 498
                  },
                  "typeArguments": null,
                  "start": 487,
                  "end": 498
                },
                "start": 485,
                "end": 498
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 452,
              "end": 499
            }
          ],
          "start": 354,
          "end": 501
        },
        "declare": false,
        "start": 304,
        "end": 501
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 297,
      "end": 501
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 554
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 566,
                    "end": 567
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 588
                    },
                    "typeArguments": null,
                    "start": 576,
                    "end": 588
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 566,
                  "end": 588
                }
              ],
              "start": 565,
              "end": 589
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 593,
                  "end": 605
                },
                "typeArguments": null,
                "start": 593,
                "end": 605
              },
              "start": 591,
              "end": 605
            },
            "start": 561,
            "end": 606
          },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 612,
                    "end": 613
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 622,
                      "end": 634
                    },
                    "typeArguments": null,
                    "start": 622,
                    "end": 634
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 612,
                  "end": 634
                }
              ],
              "start": 611,
              "end": 635
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 651
                },
                "typeArguments": null,
                "start": 639,
                "end": 651
              },
              "start": 637,
              "end": 651
            },
            "start": 611,
            "end": 652
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 657,
              "end": 665
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
                    "start": 666,
                    "end": 667
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 688
                    },
                    "typeArguments": null,
                    "start": 676,
                    "end": 688
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 666,
                  "end": 688
                }
              ],
              "start": 665,
              "end": 689
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 693,
                  "end": 705
                },
                "typeArguments": null,
                "start": 693,
                "end": 705
              },
              "start": 691,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 657,
            "end": 706
          }
        ],
        "start": 555,
        "end": 708
      },
      "declare": false,
      "start": 503,
      "end": 708
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 720,
        "end": 760
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 772,
                    "end": 773
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 782,
                      "end": 793
                    },
                    "typeArguments": null,
                    "start": 782,
                    "end": 793
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 772,
                  "end": 793
                }
              ],
              "start": 771,
              "end": 794
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 809
                },
                "typeArguments": null,
                "start": 798,
                "end": 809
              },
              "start": 796,
              "end": 809
            },
            "start": 767,
            "end": 810
          },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 816,
                    "end": 817
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 826,
                      "end": 837
                    },
                    "typeArguments": null,
                    "start": 826,
                    "end": 837
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 816,
                  "end": 837
                }
              ],
              "start": 815,
              "end": 838
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 842,
                  "end": 853
                },
                "typeArguments": null,
                "start": 842,
                "end": 853
              },
              "start": 840,
              "end": 853
            },
            "start": 815,
            "end": 854
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 867
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
                    "start": 868,
                    "end": 869
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 889
                    },
                    "typeArguments": null,
                    "start": 878,
                    "end": 889
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 868,
                  "end": 889
                }
              ],
              "start": 867,
              "end": 890
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 894,
                  "end": 905
                },
                "typeArguments": null,
                "start": 894,
                "end": 905
              },
              "start": 892,
              "end": 905
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 859,
            "end": 906
          }
        ],
        "start": 761,
        "end": 908
      },
      "declare": false,
      "start": 710,
      "end": 908
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 923,
          "end": 963
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 997
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 998,
                        "end": 999
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1020
                        },
                        "typeArguments": null,
                        "start": 1008,
                        "end": 1020
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 998,
                      "end": 1020
                    }
                  ],
                  "start": 997,
                  "end": 1021
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1024,
                  "end": 1041
                },
                "expression": false,
                "start": 997,
                "end": 1041
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 970,
              "end": 1041
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1061,
                "end": 1082
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1083,
                        "end": 1084
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1093,
                          "end": 1105
                        },
                        "typeArguments": null,
                        "start": 1093,
                        "end": 1105
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1083,
                      "end": 1105
                    }
                  ],
                  "start": 1082,
                  "end": 1106
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1109,
                  "end": 1116
                },
                "expression": false,
                "start": 1082,
                "end": 1116
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1046,
              "end": 1116
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1121,
                "end": 1135
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1136,
                        "end": 1137
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1158
                        },
                        "typeArguments": null,
                        "start": 1146,
                        "end": 1158
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1136,
                      "end": 1158
                    }
                  ],
                  "start": 1135,
                  "end": 1159
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1162,
                  "end": 1179
                },
                "expression": false,
                "start": 1135,
                "end": 1179
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1121,
              "end": 1179
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1192,
                "end": 1207
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1208,
                        "end": 1209
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1230
                        },
                        "typeArguments": null,
                        "start": 1218,
                        "end": 1230
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1208,
                      "end": 1230
                    }
                  ],
                  "start": 1207,
                  "end": 1231
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1234,
                  "end": 1241
                },
                "expression": false,
                "start": 1207,
                "end": 1241
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1184,
              "end": 1241
            }
          ],
          "start": 964,
          "end": 1243
        },
        "abstract": false,
        "declare": false,
        "start": 917,
        "end": 1243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 910,
      "end": 1243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 1258,
          "end": 1297
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1331
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1332,
                        "end": 1333
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1342,
                          "end": 1353
                        },
                        "typeArguments": null,
                        "start": 1342,
                        "end": 1353
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1332,
                      "end": 1353
                    }
                  ],
                  "start": 1331,
                  "end": 1354
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1357,
                  "end": 1364
                },
                "expression": false,
                "start": 1331,
                "end": 1364
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1304,
              "end": 1364
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1384,
                "end": 1405
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1406,
                        "end": 1407
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1416,
                          "end": 1427
                        },
                        "typeArguments": null,
                        "start": 1416,
                        "end": 1427
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1406,
                      "end": 1427
                    }
                  ],
                  "start": 1405,
                  "end": 1428
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1431,
                  "end": 1439
                },
                "expression": false,
                "start": 1405,
                "end": 1439
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1369,
              "end": 1439
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1458
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1459,
                        "end": 1460
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1469,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1469,
                        "end": 1480
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1459,
                      "end": 1480
                    }
                  ],
                  "start": 1458,
                  "end": 1481
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1484,
                  "end": 1491
                },
                "expression": false,
                "start": 1458,
                "end": 1491
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1444,
              "end": 1491
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 1504,
                "end": 1519
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 1520,
                        "end": 1521
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1530,
                          "end": 1541
                        },
                        "typeArguments": null,
                        "start": 1530,
                        "end": 1541
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1520,
                      "end": 1541
                    }
                  ],
                  "start": 1519,
                  "end": 1542
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1545,
                  "end": 1552
                },
                "expression": false,
                "start": 1519,
                "end": 1552
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1496,
              "end": 1552
            }
          ],
          "start": 1298,
          "end": 1554
        },
        "abstract": false,
        "declare": false,
        "start": 1252,
        "end": 1554
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1245,
      "end": 1554
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1562,
        "end": 1603
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1617,
              "end": 1637
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1638,
                      "end": 1639
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1648,
                        "end": 1660
                      },
                      "typeArguments": null,
                      "start": 1648,
                      "end": 1660
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1638,
                    "end": 1660
                  }
                ],
                "start": 1637,
                "end": 1661
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1664,
                "end": 1671
              },
              "expression": false,
              "start": 1637,
              "end": 1671
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1610,
            "end": 1671
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1691,
              "end": 1712
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1713,
                      "end": 1714
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1723,
                        "end": 1735
                      },
                      "typeArguments": null,
                      "start": 1723,
                      "end": 1735
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1713,
                    "end": 1735
                  }
                ],
                "start": 1712,
                "end": 1736
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1739,
                "end": 1746
              },
              "expression": false,
              "start": 1712,
              "end": 1746
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1676,
            "end": 1746
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1751,
              "end": 1765
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1766,
                      "end": 1767
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1776,
                        "end": 1788
                      },
                      "typeArguments": null,
                      "start": 1776,
                      "end": 1788
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1766,
                    "end": 1788
                  }
                ],
                "start": 1765,
                "end": 1789
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1792,
                "end": 1799
              },
              "expression": false,
              "start": 1765,
              "end": 1799
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1751,
            "end": 1799
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1812,
              "end": 1827
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1828,
                      "end": 1829
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1838,
                        "end": 1850
                      },
                      "typeArguments": null,
                      "start": 1838,
                      "end": 1850
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1828,
                    "end": 1850
                  }
                ],
                "start": 1827,
                "end": 1851
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1854,
                "end": 1861
              },
              "expression": false,
              "start": 1827,
              "end": 1861
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1804,
            "end": 1861
          }
        ],
        "start": 1604,
        "end": 1863
      },
      "abstract": false,
      "declare": false,
      "start": 1556,
      "end": 1863
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 1871,
        "end": 1911
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1925,
              "end": 1945
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1946,
                      "end": 1947
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1956,
                        "end": 1967
                      },
                      "typeArguments": null,
                      "start": 1956,
                      "end": 1967
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1946,
                    "end": 1967
                  }
                ],
                "start": 1945,
                "end": 1968
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1971,
                "end": 1978
              },
              "expression": false,
              "start": 1945,
              "end": 1978
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1918,
            "end": 1978
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1998,
              "end": 2019
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2020,
                      "end": 2021
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2030,
                        "end": 2041
                      },
                      "typeArguments": null,
                      "start": 2030,
                      "end": 2041
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2020,
                    "end": 2041
                  }
                ],
                "start": 2019,
                "end": 2042
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2045,
                "end": 2052
              },
              "expression": false,
              "start": 2019,
              "end": 2052
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1983,
            "end": 2052
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2057,
              "end": 2071
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2072,
                      "end": 2073
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2082,
                        "end": 2093
                      },
                      "typeArguments": null,
                      "start": 2082,
                      "end": 2093
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2072,
                    "end": 2093
                  }
                ],
                "start": 2071,
                "end": 2094
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2097,
                "end": 2104
              },
              "expression": false,
              "start": 2071,
              "end": 2104
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2057,
            "end": 2104
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2117,
              "end": 2132
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 2133,
                      "end": 2134
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2143,
                        "end": 2154
                      },
                      "typeArguments": null,
                      "start": 2143,
                      "end": 2154
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2133,
                    "end": 2154
                  }
                ],
                "start": 2132,
                "end": 2155
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2158,
                "end": 2165
              },
              "expression": false,
              "start": 2132,
              "end": 2165
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2109,
            "end": 2165
          }
        ],
        "start": 1912,
        "end": 2167
      },
      "abstract": false,
      "declare": false,
      "start": 1865,
      "end": 2167
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2185,
          "end": 2224
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
                "start": 2225,
                "end": 2226
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2247
                },
                "typeArguments": null,
                "start": 2235,
                "end": 2247
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2225,
              "end": 2247
            }
          ],
          "start": 2224,
          "end": 2248
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2251,
          "end": 2264
        },
        "expression": false,
        "start": 2176,
        "end": 2264
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2169,
      "end": 2264
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 2282,
          "end": 2320
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
                "start": 2321,
                "end": 2322
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2331,
                  "end": 2342
                },
                "typeArguments": null,
                "start": 2331,
                "end": 2342
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2321,
              "end": 2342
            }
          ],
          "start": 2320,
          "end": 2343
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2346,
          "end": 2349
        },
        "expression": false,
        "start": 2273,
        "end": 2349
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2266,
      "end": 2349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2360,
        "end": 2400
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
              "start": 2401,
              "end": 2402
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2423
              },
              "typeArguments": null,
              "start": 2411,
              "end": 2423
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2401,
            "end": 2423
          }
        ],
        "start": 2400,
        "end": 2424
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2427,
        "end": 2430
      },
      "expression": false,
      "start": 2351,
      "end": 2430
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2441,
        "end": 2480
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
              "start": 2481,
              "end": 2482
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2491,
                "end": 2502
              },
              "typeArguments": null,
              "start": 2491,
              "end": 2502
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2481,
            "end": 2502
          }
        ],
        "start": 2480,
        "end": 2503
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2506,
        "end": 2509
      },
      "expression": false,
      "start": 2432,
      "end": 2509
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
          "start": 2528,
          "end": 2581
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 2593,
                      "end": 2594
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2593,
                    "end": 2594
                  }
                ],
                "start": 2592,
                "end": 2595
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2599,
                    "end": 2610
                  },
                  "typeArguments": null,
                  "start": 2599,
                  "end": 2610
                },
                "start": 2597,
                "end": 2610
              },
              "start": 2588,
              "end": 2611
            },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2617,
                      "end": 2618
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2617,
                    "end": 2618
                  }
                ],
                "start": 2616,
                "end": 2619
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2623,
                    "end": 2634
                  },
                  "typeArguments": null,
                  "start": 2623,
                  "end": 2634
                },
                "start": 2621,
                "end": 2634
              },
              "start": 2616,
              "end": 2635
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2640,
                "end": 2648
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
                      "start": 2649,
                      "end": 2650
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2649,
                    "end": 2650
                  }
                ],
                "start": 2648,
                "end": 2651
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2655,
                    "end": 2666
                  },
                  "typeArguments": null,
                  "start": 2655,
                  "end": 2666
                },
                "start": 2653,
                "end": 2666
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2640,
              "end": 2667
            }
          ],
          "start": 2582,
          "end": 2669
        },
        "declare": false,
        "start": 2518,
        "end": 2669
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2511,
      "end": 2669
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 2681,
        "end": 2735
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 2747,
                    "end": 2748
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2747,
                  "end": 2748
                }
              ],
              "start": 2746,
              "end": 2749
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2753,
                  "end": 2764
                },
                "typeArguments": null,
                "start": 2753,
                "end": 2764
              },
              "start": 2751,
              "end": 2764
            },
            "start": 2742,
            "end": 2765
          },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2771,
                    "end": 2772
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2771,
                  "end": 2772
                }
              ],
              "start": 2770,
              "end": 2773
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2777,
                  "end": 2788
                },
                "typeArguments": null,
                "start": 2777,
                "end": 2788
              },
              "start": 2775,
              "end": 2788
            },
            "start": 2770,
            "end": 2789
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 2794,
              "end": 2802
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
                    "start": 2803,
                    "end": 2804
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2803,
                  "end": 2804
                }
              ],
              "start": 2802,
              "end": 2805
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2809,
                  "end": 2820
                },
                "typeArguments": null,
                "start": 2809,
                "end": 2820
              },
              "start": 2807,
              "end": 2820
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2794,
            "end": 2821
          }
        ],
        "start": 2736,
        "end": 2823
      },
      "declare": false,
      "start": 2671,
      "end": 2823
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 2838,
          "end": 2891
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2905,
                "end": 2925
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 2926,
                        "end": 2927
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2926,
                      "end": 2927
                    }
                  ],
                  "start": 2925,
                  "end": 2928
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2931,
                  "end": 2938
                },
                "expression": false,
                "start": 2925,
                "end": 2938
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2898,
              "end": 2938
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2958,
                "end": 2979
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 2980,
                        "end": 2981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2980,
                      "end": 2981
                    }
                  ],
                  "start": 2979,
                  "end": 2982
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2985,
                  "end": 2992
                },
                "expression": false,
                "start": 2979,
                "end": 2992
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2943,
              "end": 2992
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 2997,
                "end": 3011
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 3012,
                        "end": 3013
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3012,
                      "end": 3013
                    }
                  ],
                  "start": 3011,
                  "end": 3014
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3017,
                  "end": 3024
                },
                "expression": false,
                "start": 3011,
                "end": 3024
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2997,
              "end": 3024
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPrivateMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3037,
                "end": 3052
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 3053,
                        "end": 3054
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3053,
                      "end": 3054
                    }
                  ],
                  "start": 3052,
                  "end": 3055
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3058,
                  "end": 3065
                },
                "expression": false,
                "start": 3052,
                "end": 3065
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3029,
              "end": 3065
            }
          ],
          "start": 2892,
          "end": 3067
        },
        "abstract": false,
        "declare": false,
        "start": 2832,
        "end": 3067
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2825,
      "end": 3067
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3128
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3142,
              "end": 3162
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3163,
                      "end": 3164
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3163,
                    "end": 3164
                  }
                ],
                "start": 3162,
                "end": 3165
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3168,
                "end": 3175
              },
              "expression": false,
              "start": 3162,
              "end": 3175
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3135,
            "end": 3175
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3195,
              "end": 3216
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3217,
                      "end": 3218
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3217,
                    "end": 3218
                  }
                ],
                "start": 3216,
                "end": 3219
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3222,
                "end": 3229
              },
              "expression": false,
              "start": 3216,
              "end": 3229
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3180,
            "end": 3229
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3234,
              "end": 3248
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3249,
                      "end": 3250
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3249,
                    "end": 3250
                  }
                ],
                "start": 3248,
                "end": 3251
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3254,
                "end": 3261
              },
              "expression": false,
              "start": 3248,
              "end": 3261
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3234,
            "end": 3261
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPrivateMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3274,
              "end": 3289
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 3290,
                      "end": 3291
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3290,
                    "end": 3291
                  }
                ],
                "start": 3289,
                "end": 3292
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3295,
                "end": 3302
              },
              "expression": false,
              "start": 3289,
              "end": 3302
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3266,
            "end": 3302
          }
        ],
        "start": 3129,
        "end": 3304
      },
      "abstract": false,
      "declare": false,
      "start": 3068,
      "end": 3304
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 3322,
          "end": 3374
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
                "start": 3375,
                "end": 3376
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3375,
              "end": 3376
            }
          ],
          "start": 3374,
          "end": 3377
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3380,
          "end": 3383
        },
        "expression": false,
        "start": 3313,
        "end": 3383
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3306,
      "end": 3383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3394,
        "end": 3447
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
              "start": 3448,
              "end": 3449
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3448,
            "end": 3449
          }
        ],
        "start": 3447,
        "end": 3450
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3453,
        "end": 3456
      },
      "expression": false,
      "start": 3385,
      "end": 3456
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicInterfaceWithPrivatModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 3475,
          "end": 3520
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
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
                      "start": 3532,
                      "end": 3533
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
                          "start": 3542,
                          "end": 3555
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3556,
                          "end": 3567
                        },
                        "start": 3542,
                        "end": 3567
                      },
                      "typeArguments": null,
                      "start": 3542,
                      "end": 3567
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3532,
                    "end": 3567
                  }
                ],
                "start": 3531,
                "end": 3568
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3572,
                      "end": 3585
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3586,
                      "end": 3597
                    },
                    "start": 3572,
                    "end": 3597
                  },
                  "typeArguments": null,
                  "start": 3572,
                  "end": 3597
                },
                "start": 3570,
                "end": 3597
              },
              "start": 3527,
              "end": 3598
            },
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3614,
                      "end": 3615
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
                          "start": 3624,
                          "end": 3637
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3638,
                          "end": 3649
                        },
                        "start": 3624,
                        "end": 3649
                      },
                      "typeArguments": null,
                      "start": 3624,
                      "end": 3649
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3614,
                    "end": 3649
                  }
                ],
                "start": 3613,
                "end": 3650
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3654,
                      "end": 3667
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3679
                    },
                    "start": 3654,
                    "end": 3679
                  },
                  "typeArguments": null,
                  "start": 3654,
                  "end": 3679
                },
                "start": 3652,
                "end": 3679
              },
              "start": 3613,
              "end": 3680
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3695,
                "end": 3703
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
                      "start": 3704,
                      "end": 3705
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
                          "start": 3714,
                          "end": 3727
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3728,
                          "end": 3739
                        },
                        "start": 3714,
                        "end": 3739
                      },
                      "typeArguments": null,
                      "start": 3714,
                      "end": 3739
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3704,
                    "end": 3739
                  }
                ],
                "start": 3703,
                "end": 3740
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3744,
                      "end": 3757
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3758,
                      "end": 3769
                    },
                    "start": 3744,
                    "end": 3769
                  },
                  "typeArguments": null,
                  "start": 3744,
                  "end": 3769
                },
                "start": 3742,
                "end": 3769
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3695,
              "end": 3770
            }
          ],
          "start": 3521,
          "end": 3782
        },
        "declare": false,
        "start": 3465,
        "end": 3782
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3458,
      "end": 3782
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithWithPrivateModuleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 3796,
          "end": 3842
        },
        "typeParameters": null,
        "superClass": null,
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
                "name": "myPublicStaticMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3856,
                "end": 3876
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 3877,
                        "end": 3878
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
                            "start": 3887,
                            "end": 3900
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3901,
                            "end": 3912
                          },
                          "start": 3887,
                          "end": 3912
                        },
                        "typeArguments": null,
                        "start": 3887,
                        "end": 3912
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3877,
                      "end": 3912
                    }
                  ],
                  "start": 3876,
                  "end": 3913
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3916,
                  "end": 3933
                },
                "expression": false,
                "start": 3876,
                "end": 3933
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3849,
              "end": 3933
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myPublicMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3938,
                "end": 3952
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 3953,
                        "end": 3954
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
                            "start": 3963,
                            "end": 3976
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3977,
                            "end": 3988
                          },
                          "start": 3963,
                          "end": 3988
                        },
                        "typeArguments": null,
                        "start": 3963,
                        "end": 3988
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3953,
                      "end": 3988
                    }
                  ],
                  "start": 3952,
                  "end": 3989
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3992,
                  "end": 4009
                },
                "expression": false,
                "start": 3952,
                "end": 4009
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3938,
              "end": 4009
            }
          ],
          "start": 3843,
          "end": 4011
        },
        "abstract": false,
        "declare": false,
        "start": 3790,
        "end": 4011
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3783,
      "end": 4011
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicFunctionWithPrivateMopduleTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 4028,
          "end": 4074
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
                "start": 4075,
                "end": 4076
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
                    "start": 4085,
                    "end": 4098
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4099,
                    "end": 4110
                  },
                  "start": 4085,
                  "end": 4110
                },
                "typeArguments": null,
                "start": 4085,
                "end": 4110
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4075,
              "end": 4110
            }
          ],
          "start": 4074,
          "end": 4111
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 4114,
          "end": 4127
        },
        "expression": false,
        "start": 4019,
        "end": 4127
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4012,
      "end": 4127
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivatModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4140,
        "end": 4186
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
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
                    "start": 4198,
                    "end": 4199
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
                        "start": 4208,
                        "end": 4221
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4222,
                        "end": 4233
                      },
                      "start": 4208,
                      "end": 4233
                    },
                    "typeArguments": null,
                    "start": 4208,
                    "end": 4233
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4198,
                  "end": 4233
                }
              ],
              "start": 4197,
              "end": 4234
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4238,
                    "end": 4251
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4252,
                    "end": 4263
                  },
                  "start": 4238,
                  "end": 4263
                },
                "typeArguments": null,
                "start": 4238,
                "end": 4263
              },
              "start": 4236,
              "end": 4263
            },
            "start": 4193,
            "end": 4264
          },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4270,
                    "end": 4271
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
                        "start": 4280,
                        "end": 4293
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4294,
                        "end": 4305
                      },
                      "start": 4280,
                      "end": 4305
                    },
                    "typeArguments": null,
                    "start": 4280,
                    "end": 4305
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4270,
                  "end": 4305
                }
              ],
              "start": 4269,
              "end": 4306
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4310,
                    "end": 4323
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4324,
                    "end": 4335
                  },
                  "start": 4310,
                  "end": 4335
                },
                "typeArguments": null,
                "start": 4310,
                "end": 4335
              },
              "start": 4308,
              "end": 4335
            },
            "start": 4269,
            "end": 4336
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4341,
              "end": 4349
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
                    "start": 4350,
                    "end": 4351
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
                        "start": 4360,
                        "end": 4373
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4374,
                        "end": 4385
                      },
                      "start": 4360,
                      "end": 4385
                    },
                    "typeArguments": null,
                    "start": 4360,
                    "end": 4385
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 4350,
                  "end": 4385
                }
              ],
              "start": 4349,
              "end": 4386
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "privateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4390,
                    "end": 4403
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4404,
                    "end": 4415
                  },
                  "start": 4390,
                  "end": 4415
                },
                "typeArguments": null,
                "start": 4390,
                "end": 4415
              },
              "start": 4388,
              "end": 4415
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4341,
            "end": 4416
          }
        ],
        "start": 4187,
        "end": 4418
      },
      "declare": false,
      "start": 4130,
      "end": 4418
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithWithPrivateModuleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4425,
        "end": 4472
      },
      "typeParameters": null,
      "superClass": null,
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
              "name": "myPublicStaticMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4486,
              "end": 4506
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4507,
                      "end": 4508
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
                          "start": 4517,
                          "end": 4530
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4531,
                          "end": 4542
                        },
                        "start": 4517,
                        "end": 4542
                      },
                      "typeArguments": null,
                      "start": 4517,
                      "end": 4542
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4507,
                    "end": 4542
                  }
                ],
                "start": 4506,
                "end": 4543
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4546,
                "end": 4553
              },
              "expression": false,
              "start": 4506,
              "end": 4553
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4479,
            "end": 4553
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myPublicMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 4558,
              "end": 4572
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 4573,
                      "end": 4574
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
                          "start": 4583,
                          "end": 4596
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4597,
                          "end": 4608
                        },
                        "start": 4583,
                        "end": 4608
                      },
                      "typeArguments": null,
                      "start": 4583,
                      "end": 4608
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 4573,
                    "end": 4608
                  }
                ],
                "start": 4572,
                "end": 4609
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4612,
                "end": 4619
              },
              "expression": false,
              "start": 4572,
              "end": 4619
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4558,
            "end": 4619
          }
        ],
        "start": 4473,
        "end": 4621
      },
      "abstract": false,
      "declare": false,
      "start": 4419,
      "end": 4621
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateMopduleTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 4631,
        "end": 4678
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
              "start": 4679,
              "end": 4680
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
                  "start": 4689,
                  "end": 4702
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4703,
                  "end": 4714
                },
                "start": 4689,
                "end": 4714
              },
              "typeArguments": null,
              "start": 4689,
              "end": 4714
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4679,
            "end": 4714
          }
        ],
        "start": 4678,
        "end": 4715
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4718,
        "end": 4721
      },
      "expression": false,
      "start": 4622,
      "end": 4721
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
          "start": 4741,
          "end": 4753
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
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 4766,
                "end": 4778
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 4779,
                "end": 4786
              },
              "abstract": false,
              "declare": false,
              "start": 4760,
              "end": 4786
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
                  "start": 4805,
                  "end": 4816
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 4817,
                  "end": 4824
                },
                "abstract": false,
                "declare": false,
                "start": 4799,
                "end": 4824
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 4792,
              "end": 4824
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
                  "start": 4847,
                  "end": 4887
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 4903,
                              "end": 4904
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4913,
                                "end": 4925
                              },
                              "typeArguments": null,
                              "start": 4913,
                              "end": 4925
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4903,
                            "end": 4925
                          }
                        ],
                        "start": 4902,
                        "end": 4926
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4930,
                            "end": 4942
                          },
                          "typeArguments": null,
                          "start": 4930,
                          "end": 4942
                        },
                        "start": 4928,
                        "end": 4942
                      },
                      "start": 4898,
                      "end": 4943
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4963,
                              "end": 4964
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4973,
                                "end": 4985
                              },
                              "typeArguments": null,
                              "start": 4973,
                              "end": 4985
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4963,
                            "end": 4985
                          }
                        ],
                        "start": 4962,
                        "end": 4986
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4990,
                            "end": 5002
                          },
                          "typeArguments": null,
                          "start": 4990,
                          "end": 5002
                        },
                        "start": 4988,
                        "end": 5002
                      },
                      "start": 4962,
                      "end": 5003
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5022,
                        "end": 5030
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
                              "start": 5031,
                              "end": 5032
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5041,
                                "end": 5053
                              },
                              "typeArguments": null,
                              "start": 5041,
                              "end": 5053
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5031,
                            "end": 5053
                          }
                        ],
                        "start": 5030,
                        "end": 5054
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5058,
                            "end": 5070
                          },
                          "typeArguments": null,
                          "start": 5058,
                          "end": 5070
                        },
                        "start": 5056,
                        "end": 5070
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5022,
                      "end": 5071
                    }
                  ],
                  "start": 4888,
                  "end": 5087
                },
                "declare": false,
                "start": 4837,
                "end": 5087
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 4830,
              "end": 5087
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
                  "start": 5110,
                  "end": 5149
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 5165,
                              "end": 5166
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5175,
                                "end": 5186
                              },
                              "typeArguments": null,
                              "start": 5175,
                              "end": 5186
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5165,
                            "end": 5186
                          }
                        ],
                        "start": 5164,
                        "end": 5187
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5191,
                            "end": 5202
                          },
                          "typeArguments": null,
                          "start": 5191,
                          "end": 5202
                        },
                        "start": 5189,
                        "end": 5202
                      },
                      "start": 5160,
                      "end": 5203
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5213,
                              "end": 5214
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5223,
                                "end": 5234
                              },
                              "typeArguments": null,
                              "start": 5223,
                              "end": 5234
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5213,
                            "end": 5234
                          }
                        ],
                        "start": 5212,
                        "end": 5235
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5239,
                            "end": 5250
                          },
                          "typeArguments": null,
                          "start": 5239,
                          "end": 5250
                        },
                        "start": 5237,
                        "end": 5250
                      },
                      "start": 5212,
                      "end": 5251
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5260,
                        "end": 5268
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
                              "start": 5269,
                              "end": 5270
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5279,
                                "end": 5290
                              },
                              "typeArguments": null,
                              "start": 5279,
                              "end": 5290
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5269,
                            "end": 5290
                          }
                        ],
                        "start": 5268,
                        "end": 5291
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5295,
                            "end": 5306
                          },
                          "typeArguments": null,
                          "start": 5295,
                          "end": 5306
                        },
                        "start": 5293,
                        "end": 5306
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 5260,
                      "end": 5307
                    }
                  ],
                  "start": 5150,
                  "end": 5313
                },
                "declare": false,
                "start": 5100,
                "end": 5313
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 5093,
              "end": 5313
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5329,
                "end": 5370
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 5386,
                            "end": 5387
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5396,
                              "end": 5408
                            },
                            "typeArguments": null,
                            "start": 5396,
                            "end": 5408
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5386,
                          "end": 5408
                        }
                      ],
                      "start": 5385,
                      "end": 5409
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5413,
                          "end": 5425
                        },
                        "typeArguments": null,
                        "start": 5413,
                        "end": 5425
                      },
                      "start": 5411,
                      "end": 5425
                    },
                    "start": 5381,
                    "end": 5426
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5436,
                            "end": 5437
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5446,
                              "end": 5458
                            },
                            "typeArguments": null,
                            "start": 5446,
                            "end": 5458
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5436,
                          "end": 5458
                        }
                      ],
                      "start": 5435,
                      "end": 5459
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5463,
                          "end": 5475
                        },
                        "typeArguments": null,
                        "start": 5463,
                        "end": 5475
                      },
                      "start": 5461,
                      "end": 5475
                    },
                    "start": 5435,
                    "end": 5476
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5485,
                      "end": 5493
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
                            "start": 5494,
                            "end": 5495
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5504,
                              "end": 5516
                            },
                            "typeArguments": null,
                            "start": 5504,
                            "end": 5516
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5494,
                          "end": 5516
                        }
                      ],
                      "start": 5493,
                      "end": 5517
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5521,
                          "end": 5533
                        },
                        "typeArguments": null,
                        "start": 5521,
                        "end": 5533
                      },
                      "start": 5519,
                      "end": 5533
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5485,
                    "end": 5534
                  }
                ],
                "start": 5371,
                "end": 5540
              },
              "declare": false,
              "start": 5319,
              "end": 5540
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 5556,
                "end": 5596
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 5612,
                            "end": 5613
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5622,
                              "end": 5633
                            },
                            "typeArguments": null,
                            "start": 5622,
                            "end": 5633
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5612,
                          "end": 5633
                        }
                      ],
                      "start": 5611,
                      "end": 5634
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5638,
                          "end": 5649
                        },
                        "typeArguments": null,
                        "start": 5638,
                        "end": 5649
                      },
                      "start": 5636,
                      "end": 5649
                    },
                    "start": 5607,
                    "end": 5650
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5660,
                            "end": 5661
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5670,
                              "end": 5681
                            },
                            "typeArguments": null,
                            "start": 5670,
                            "end": 5681
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5660,
                          "end": 5681
                        }
                      ],
                      "start": 5659,
                      "end": 5682
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5686,
                          "end": 5697
                        },
                        "typeArguments": null,
                        "start": 5686,
                        "end": 5697
                      },
                      "start": 5684,
                      "end": 5697
                    },
                    "start": 5659,
                    "end": 5698
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5707,
                      "end": 5715
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
                            "start": 5716,
                            "end": 5717
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5726,
                              "end": 5737
                            },
                            "typeArguments": null,
                            "start": 5726,
                            "end": 5737
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5716,
                          "end": 5737
                        }
                      ],
                      "start": 5715,
                      "end": 5738
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5742,
                          "end": 5753
                        },
                        "typeArguments": null,
                        "start": 5742,
                        "end": 5753
                      },
                      "start": 5740,
                      "end": 5753
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5707,
                    "end": 5754
                  }
                ],
                "start": 5597,
                "end": 5760
              },
              "declare": false,
              "start": 5546,
              "end": 5760
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5779,
                  "end": 5819
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5837,
                        "end": 5857
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 5858,
                                "end": 5859
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5868,
                                  "end": 5880
                                },
                                "typeArguments": null,
                                "start": 5868,
                                "end": 5880
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5858,
                              "end": 5880
                            }
                          ],
                          "start": 5857,
                          "end": 5881
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5884,
                          "end": 5905
                        },
                        "expression": false,
                        "start": 5857,
                        "end": 5905
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5830,
                      "end": 5905
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5929,
                        "end": 5950
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 5951,
                                "end": 5952
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5961,
                                  "end": 5973
                                },
                                "typeArguments": null,
                                "start": 5961,
                                "end": 5973
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 5951,
                              "end": 5973
                            }
                          ],
                          "start": 5950,
                          "end": 5974
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 5977,
                          "end": 5988
                        },
                        "expression": false,
                        "start": 5950,
                        "end": 5988
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 5914,
                      "end": 5988
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5997,
                        "end": 6011
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6012,
                                "end": 6013
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6022,
                                  "end": 6034
                                },
                                "typeArguments": null,
                                "start": 6022,
                                "end": 6034
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6012,
                              "end": 6034
                            }
                          ],
                          "start": 6011,
                          "end": 6035
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6038,
                          "end": 6059
                        },
                        "expression": false,
                        "start": 6011,
                        "end": 6059
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 5997,
                      "end": 6059
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6076,
                        "end": 6091
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6092,
                                "end": 6093
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "privateClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6102,
                                  "end": 6114
                                },
                                "typeArguments": null,
                                "start": 6102,
                                "end": 6114
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6092,
                              "end": 6114
                            }
                          ],
                          "start": 6091,
                          "end": 6115
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6118,
                          "end": 6129
                        },
                        "expression": false,
                        "start": 6091,
                        "end": 6129
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6068,
                      "end": 6129
                    }
                  ],
                  "start": 5820,
                  "end": 6135
                },
                "abstract": false,
                "declare": false,
                "start": 5773,
                "end": 6135
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 5766,
              "end": 6135
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6154,
                  "end": 6193
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6211,
                        "end": 6231
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6232,
                                "end": 6233
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6242,
                                  "end": 6253
                                },
                                "typeArguments": null,
                                "start": 6242,
                                "end": 6253
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6232,
                              "end": 6253
                            }
                          ],
                          "start": 6231,
                          "end": 6254
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6257,
                          "end": 6268
                        },
                        "expression": false,
                        "start": 6231,
                        "end": 6268
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6204,
                      "end": 6268
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6292,
                        "end": 6313
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6314,
                                "end": 6315
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6324,
                                  "end": 6335
                                },
                                "typeArguments": null,
                                "start": 6324,
                                "end": 6335
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6314,
                              "end": 6335
                            }
                          ],
                          "start": 6313,
                          "end": 6336
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6339,
                          "end": 6350
                        },
                        "expression": false,
                        "start": 6313,
                        "end": 6350
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6277,
                      "end": 6350
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6359,
                        "end": 6373
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6374,
                                "end": 6375
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6384,
                                  "end": 6395
                                },
                                "typeArguments": null,
                                "start": 6384,
                                "end": 6395
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6374,
                              "end": 6395
                            }
                          ],
                          "start": 6373,
                          "end": 6396
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6399,
                          "end": 6410
                        },
                        "expression": false,
                        "start": 6373,
                        "end": 6410
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 6359,
                      "end": 6410
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6427,
                        "end": 6442
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 6443,
                                "end": 6444
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6453,
                                  "end": 6464
                                },
                                "typeArguments": null,
                                "start": 6453,
                                "end": 6464
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 6443,
                              "end": 6464
                            }
                          ],
                          "start": 6442,
                          "end": 6465
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 6468,
                          "end": 6479
                        },
                        "expression": false,
                        "start": 6442,
                        "end": 6479
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 6419,
                      "end": 6479
                    }
                  ],
                  "start": 6194,
                  "end": 6485
                },
                "abstract": false,
                "declare": false,
                "start": 6148,
                "end": 6485
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6141,
              "end": 6485
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 6497,
                "end": 6538
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6556,
                      "end": 6576
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 6577,
                              "end": 6578
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6587,
                                "end": 6599
                              },
                              "typeArguments": null,
                              "start": 6587,
                              "end": 6599
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6577,
                            "end": 6599
                          }
                        ],
                        "start": 6576,
                        "end": 6600
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6603,
                        "end": 6614
                      },
                      "expression": false,
                      "start": 6576,
                      "end": 6614
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6549,
                    "end": 6614
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6638,
                      "end": 6659
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 6660,
                              "end": 6661
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6670,
                                "end": 6682
                              },
                              "typeArguments": null,
                              "start": 6670,
                              "end": 6682
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6660,
                            "end": 6682
                          }
                        ],
                        "start": 6659,
                        "end": 6683
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6686,
                        "end": 6697
                      },
                      "expression": false,
                      "start": 6659,
                      "end": 6697
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6623,
                    "end": 6697
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6706,
                      "end": 6720
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 6721,
                              "end": 6722
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6731,
                                "end": 6743
                              },
                              "typeArguments": null,
                              "start": 6731,
                              "end": 6743
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6721,
                            "end": 6743
                          }
                        ],
                        "start": 6720,
                        "end": 6744
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6747,
                        "end": 6758
                      },
                      "expression": false,
                      "start": 6720,
                      "end": 6758
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6706,
                    "end": 6758
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6775,
                      "end": 6790
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 6791,
                              "end": 6792
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6801,
                                "end": 6813
                              },
                              "typeArguments": null,
                              "start": 6801,
                              "end": 6813
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6791,
                            "end": 6813
                          }
                        ],
                        "start": 6790,
                        "end": 6814
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6817,
                        "end": 6828
                      },
                      "expression": false,
                      "start": 6790,
                      "end": 6828
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6767,
                    "end": 6828
                  }
                ],
                "start": 6539,
                "end": 6834
              },
              "abstract": false,
              "declare": false,
              "start": 6491,
              "end": 6834
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 6846,
                "end": 6886
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6904,
                      "end": 6924
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 6925,
                              "end": 6926
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6935,
                                "end": 6946
                              },
                              "typeArguments": null,
                              "start": 6935,
                              "end": 6946
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6925,
                            "end": 6946
                          }
                        ],
                        "start": 6924,
                        "end": 6947
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6950,
                        "end": 6961
                      },
                      "expression": false,
                      "start": 6924,
                      "end": 6961
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6897,
                    "end": 6961
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6985,
                      "end": 7006
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 7007,
                              "end": 7008
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7017,
                                "end": 7028
                              },
                              "typeArguments": null,
                              "start": 7017,
                              "end": 7028
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7007,
                            "end": 7028
                          }
                        ],
                        "start": 7006,
                        "end": 7029
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7032,
                        "end": 7043
                      },
                      "expression": false,
                      "start": 7006,
                      "end": 7043
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 6970,
                    "end": 7043
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7052,
                      "end": 7066
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 7067,
                              "end": 7068
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7077,
                                "end": 7088
                              },
                              "typeArguments": null,
                              "start": 7077,
                              "end": 7088
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7067,
                            "end": 7088
                          }
                        ],
                        "start": 7066,
                        "end": 7089
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7092,
                        "end": 7103
                      },
                      "expression": false,
                      "start": 7066,
                      "end": 7103
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7052,
                    "end": 7103
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7120,
                      "end": 7135
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 7136,
                              "end": 7137
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7146,
                                "end": 7157
                              },
                              "typeArguments": null,
                              "start": 7146,
                              "end": 7157
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7136,
                            "end": 7157
                          }
                        ],
                        "start": 7135,
                        "end": 7158
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 7161,
                        "end": 7172
                      },
                      "expression": false,
                      "start": 7135,
                      "end": 7172
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 7112,
                    "end": 7172
                  }
                ],
                "start": 6887,
                "end": 7178
              },
              "abstract": false,
              "declare": false,
              "start": 6840,
              "end": 7178
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7200,
                  "end": 7239
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
                        "start": 7240,
                        "end": 7241
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7250,
                          "end": 7262
                        },
                        "typeArguments": null,
                        "start": 7250,
                        "end": 7262
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7240,
                      "end": 7262
                    }
                  ],
                  "start": 7239,
                  "end": 7263
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7266,
                  "end": 7283
                },
                "expression": false,
                "start": 7191,
                "end": 7283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7184,
              "end": 7283
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7305,
                  "end": 7343
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
                        "start": 7344,
                        "end": 7345
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7354,
                          "end": 7365
                        },
                        "typeArguments": null,
                        "start": 7354,
                        "end": 7365
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7344,
                      "end": 7365
                    }
                  ],
                  "start": 7343,
                  "end": 7366
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7369,
                  "end": 7376
                },
                "expression": false,
                "start": 7296,
                "end": 7376
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7289,
              "end": 7376
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 7391,
                "end": 7431
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
                      "start": 7432,
                      "end": 7433
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7442,
                        "end": 7454
                      },
                      "typeArguments": null,
                      "start": 7442,
                      "end": 7454
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7432,
                    "end": 7454
                  }
                ],
                "start": 7431,
                "end": 7455
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7458,
                "end": 7465
              },
              "expression": false,
              "start": 7382,
              "end": 7465
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 7480,
                "end": 7519
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
                      "start": 7520,
                      "end": 7521
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7530,
                        "end": 7541
                      },
                      "typeArguments": null,
                      "start": 7530,
                      "end": 7541
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7520,
                    "end": 7541
                  }
                ],
                "start": 7519,
                "end": 7542
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 7545,
                "end": 7552
              },
              "expression": false,
              "start": 7471,
              "end": 7552
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
                  "start": 7575,
                  "end": 7628
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 7644,
                              "end": 7645
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7644,
                            "end": 7645
                          }
                        ],
                        "start": 7643,
                        "end": 7646
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7650,
                            "end": 7661
                          },
                          "typeArguments": null,
                          "start": 7650,
                          "end": 7661
                        },
                        "start": 7648,
                        "end": 7661
                      },
                      "start": 7639,
                      "end": 7662
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7672,
                              "end": 7673
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7672,
                            "end": 7673
                          }
                        ],
                        "start": 7671,
                        "end": 7674
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7678,
                            "end": 7689
                          },
                          "typeArguments": null,
                          "start": 7678,
                          "end": 7689
                        },
                        "start": 7676,
                        "end": 7689
                      },
                      "start": 7671,
                      "end": 7690
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7699,
                        "end": 7707
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
                              "start": 7708,
                              "end": 7709
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 7708,
                            "end": 7709
                          }
                        ],
                        "start": 7707,
                        "end": 7710
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7714,
                            "end": 7725
                          },
                          "typeArguments": null,
                          "start": 7714,
                          "end": 7725
                        },
                        "start": 7712,
                        "end": 7725
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 7699,
                      "end": 7726
                    }
                  ],
                  "start": 7629,
                  "end": 7732
                },
                "declare": false,
                "start": 7565,
                "end": 7732
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 7558,
              "end": 7732
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 7748,
                "end": 7802
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 7818,
                            "end": 7819
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7818,
                          "end": 7819
                        }
                      ],
                      "start": 7817,
                      "end": 7820
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7824,
                          "end": 7835
                        },
                        "typeArguments": null,
                        "start": 7824,
                        "end": 7835
                      },
                      "start": 7822,
                      "end": 7835
                    },
                    "start": 7813,
                    "end": 7836
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7846,
                            "end": 7847
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7846,
                          "end": 7847
                        }
                      ],
                      "start": 7845,
                      "end": 7848
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7852,
                          "end": 7863
                        },
                        "typeArguments": null,
                        "start": 7852,
                        "end": 7863
                      },
                      "start": 7850,
                      "end": 7863
                    },
                    "start": 7845,
                    "end": 7864
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7873,
                      "end": 7881
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
                            "start": 7882,
                            "end": 7883
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 7882,
                          "end": 7883
                        }
                      ],
                      "start": 7881,
                      "end": 7884
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7888,
                          "end": 7899
                        },
                        "typeArguments": null,
                        "start": 7888,
                        "end": 7899
                      },
                      "start": 7886,
                      "end": 7899
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 7873,
                    "end": 7900
                  }
                ],
                "start": 7803,
                "end": 7906
              },
              "declare": false,
              "start": 7738,
              "end": 7906
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7925,
                  "end": 7978
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7996,
                        "end": 8016
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 8017,
                                "end": 8018
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8017,
                              "end": 8018
                            }
                          ],
                          "start": 8016,
                          "end": 8019
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8022,
                          "end": 8033
                        },
                        "expression": false,
                        "start": 8016,
                        "end": 8033
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 7989,
                      "end": 8033
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8057,
                        "end": 8078
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 8079,
                                "end": 8080
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8079,
                              "end": 8080
                            }
                          ],
                          "start": 8078,
                          "end": 8081
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8084,
                          "end": 8095
                        },
                        "expression": false,
                        "start": 8078,
                        "end": 8095
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8042,
                      "end": 8095
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8104,
                        "end": 8118
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 8119,
                                "end": 8120
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8119,
                              "end": 8120
                            }
                          ],
                          "start": 8118,
                          "end": 8121
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8124,
                          "end": 8135
                        },
                        "expression": false,
                        "start": 8118,
                        "end": 8135
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 8104,
                      "end": 8135
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPrivateMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8152,
                        "end": 8167
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 8168,
                                "end": 8169
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 8168,
                              "end": 8169
                            }
                          ],
                          "start": 8167,
                          "end": 8170
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 8173,
                          "end": 8184
                        },
                        "expression": false,
                        "start": 8167,
                        "end": 8184
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 8144,
                      "end": 8184
                    }
                  ],
                  "start": 7979,
                  "end": 8190
                },
                "abstract": false,
                "declare": false,
                "start": 7919,
                "end": 8190
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 7912,
              "end": 8190
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 8201,
                "end": 8255
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8273,
                      "end": 8293
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 8294,
                              "end": 8295
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8294,
                            "end": 8295
                          }
                        ],
                        "start": 8293,
                        "end": 8296
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8299,
                        "end": 8310
                      },
                      "expression": false,
                      "start": 8293,
                      "end": 8310
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8266,
                    "end": 8310
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8334,
                      "end": 8355
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 8356,
                              "end": 8357
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8356,
                            "end": 8357
                          }
                        ],
                        "start": 8355,
                        "end": 8358
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8361,
                        "end": 8372
                      },
                      "expression": false,
                      "start": 8355,
                      "end": 8372
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8319,
                    "end": 8372
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8381,
                      "end": 8395
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 8396,
                              "end": 8397
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8396,
                            "end": 8397
                          }
                        ],
                        "start": 8395,
                        "end": 8398
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8401,
                        "end": 8412
                      },
                      "expression": false,
                      "start": 8395,
                      "end": 8412
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8381,
                    "end": 8412
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8429,
                      "end": 8444
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 8445,
                              "end": 8446
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8445,
                            "end": 8446
                          }
                        ],
                        "start": 8444,
                        "end": 8447
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 8450,
                        "end": 8461
                      },
                      "expression": false,
                      "start": 8444,
                      "end": 8461
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 8421,
                    "end": 8461
                  }
                ],
                "start": 8256,
                "end": 8467
              },
              "abstract": false,
              "declare": false,
              "start": 8195,
              "end": 8467
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8489,
                  "end": 8541
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
                        "start": 8542,
                        "end": 8543
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8542,
                      "end": 8543
                    }
                  ],
                  "start": 8541,
                  "end": 8544
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 8547,
                  "end": 8554
                },
                "expression": false,
                "start": 8480,
                "end": 8554
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8473,
              "end": 8554
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 8569,
                "end": 8622
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
                      "start": 8623,
                      "end": 8624
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 8623,
                    "end": 8624
                  }
                ],
                "start": 8622,
                "end": 8625
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8628,
                "end": 8635
              },
              "expression": false,
              "start": 8560,
              "end": 8635
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicInterfaceWithPrivatModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8658,
                  "end": 8703
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSConstructSignatureDeclaration",
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
                              "start": 8719,
                              "end": 8720
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
                                  "start": 8729,
                                  "end": 8742
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8743,
                                  "end": 8754
                                },
                                "start": 8729,
                                "end": 8754
                              },
                              "typeArguments": null,
                              "start": 8729,
                              "end": 8754
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8719,
                            "end": 8754
                          }
                        ],
                        "start": 8718,
                        "end": 8755
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8759,
                              "end": 8772
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8773,
                              "end": 8784
                            },
                            "start": 8759,
                            "end": 8784
                          },
                          "typeArguments": null,
                          "start": 8759,
                          "end": 8784
                        },
                        "start": 8757,
                        "end": 8784
                      },
                      "start": 8714,
                      "end": 8785
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8805,
                              "end": 8806
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
                                  "start": 8815,
                                  "end": 8828
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8829,
                                  "end": 8840
                                },
                                "start": 8815,
                                "end": 8840
                              },
                              "typeArguments": null,
                              "start": 8815,
                              "end": 8840
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8805,
                            "end": 8840
                          }
                        ],
                        "start": 8804,
                        "end": 8841
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8845,
                              "end": 8858
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8859,
                              "end": 8870
                            },
                            "start": 8845,
                            "end": 8870
                          },
                          "typeArguments": null,
                          "start": 8845,
                          "end": 8870
                        },
                        "start": 8843,
                        "end": 8870
                      },
                      "start": 8804,
                      "end": 8871
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8890,
                        "end": 8898
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
                              "start": 8899,
                              "end": 8900
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
                                  "start": 8909,
                                  "end": 8922
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8923,
                                  "end": 8934
                                },
                                "start": 8909,
                                "end": 8934
                              },
                              "typeArguments": null,
                              "start": 8909,
                              "end": 8934
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8899,
                            "end": 8934
                          }
                        ],
                        "start": 8898,
                        "end": 8935
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateModule",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8939,
                              "end": 8952
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8953,
                              "end": 8964
                            },
                            "start": 8939,
                            "end": 8964
                          },
                          "typeArguments": null,
                          "start": 8939,
                          "end": 8964
                        },
                        "start": 8937,
                        "end": 8964
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8890,
                      "end": 8965
                    }
                  ],
                  "start": 8704,
                  "end": 8981
                },
                "declare": false,
                "start": 8648,
                "end": 8981
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8641,
              "end": 8981
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithWithPrivateModuleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8999,
                  "end": 9045
                },
                "typeParameters": null,
                "superClass": null,
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
                        "name": "myPublicStaticMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9063,
                        "end": 9083
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 9084,
                                "end": 9085
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
                                    "start": 9094,
                                    "end": 9107
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9108,
                                    "end": 9119
                                  },
                                  "start": 9094,
                                  "end": 9119
                                },
                                "typeArguments": null,
                                "start": 9094,
                                "end": 9119
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 9084,
                              "end": 9119
                            }
                          ],
                          "start": 9083,
                          "end": 9120
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9123,
                          "end": 9144
                        },
                        "expression": false,
                        "start": 9083,
                        "end": 9144
                      },
                      "kind": "method",
                      "computed": false,
                      "static": true,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9056,
                      "end": 9144
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myPublicMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9153,
                        "end": 9167
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
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
                                "start": 9168,
                                "end": 9169
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
                                    "start": 9178,
                                    "end": 9191
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "publicClass",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9192,
                                    "end": 9203
                                  },
                                  "start": 9178,
                                  "end": 9203
                                },
                                "typeArguments": null,
                                "start": 9178,
                                "end": 9203
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 9168,
                              "end": 9203
                            }
                          ],
                          "start": 9167,
                          "end": 9204
                        },
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 9207,
                          "end": 9228
                        },
                        "expression": false,
                        "start": 9167,
                        "end": 9228
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 9153,
                      "end": 9228
                    }
                  ],
                  "start": 9046,
                  "end": 9234
                },
                "abstract": false,
                "declare": false,
                "start": 8993,
                "end": 9234
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 8986,
              "end": 9234
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicFunctionWithPrivateMopduleTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9255,
                  "end": 9301
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
                        "start": 9302,
                        "end": 9303
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
                            "start": 9312,
                            "end": 9325
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9326,
                            "end": 9337
                          },
                          "start": 9312,
                          "end": 9337
                        },
                        "typeArguments": null,
                        "start": 9312,
                        "end": 9337
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 9302,
                      "end": 9337
                    }
                  ],
                  "start": 9301,
                  "end": 9338
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9341,
                  "end": 9358
                },
                "expression": false,
                "start": 9246,
                "end": 9358
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9239,
              "end": 9358
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateInterfaceWithPrivatModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9375,
                "end": 9421
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 9437,
                            "end": 9438
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
                                "start": 9447,
                                "end": 9460
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9461,
                                "end": 9472
                              },
                              "start": 9447,
                              "end": 9472
                            },
                            "typeArguments": null,
                            "start": 9447,
                            "end": 9472
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9437,
                          "end": 9472
                        }
                      ],
                      "start": 9436,
                      "end": 9473
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9477,
                            "end": 9490
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9491,
                            "end": 9502
                          },
                          "start": 9477,
                          "end": 9502
                        },
                        "typeArguments": null,
                        "start": 9477,
                        "end": 9502
                      },
                      "start": 9475,
                      "end": 9502
                    },
                    "start": 9432,
                    "end": 9503
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9515,
                            "end": 9516
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
                                "start": 9525,
                                "end": 9538
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9539,
                                "end": 9550
                              },
                              "start": 9525,
                              "end": 9550
                            },
                            "typeArguments": null,
                            "start": 9525,
                            "end": 9550
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9515,
                          "end": 9550
                        }
                      ],
                      "start": 9514,
                      "end": 9551
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9555,
                            "end": 9568
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9569,
                            "end": 9580
                          },
                          "start": 9555,
                          "end": 9580
                        },
                        "typeArguments": null,
                        "start": 9555,
                        "end": 9580
                      },
                      "start": 9553,
                      "end": 9580
                    },
                    "start": 9514,
                    "end": 9581
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9592,
                      "end": 9600
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
                            "start": 9601,
                            "end": 9602
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
                                "start": 9611,
                                "end": 9624
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9625,
                                "end": 9636
                              },
                              "start": 9611,
                              "end": 9636
                            },
                            "typeArguments": null,
                            "start": 9611,
                            "end": 9636
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 9601,
                          "end": 9636
                        }
                      ],
                      "start": 9600,
                      "end": 9637
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9641,
                            "end": 9654
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9655,
                            "end": 9666
                          },
                          "start": 9641,
                          "end": 9666
                        },
                        "typeArguments": null,
                        "start": 9641,
                        "end": 9666
                      },
                      "start": 9639,
                      "end": 9666
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 9592,
                    "end": 9667
                  }
                ],
                "start": 9422,
                "end": 9675
              },
              "declare": false,
              "start": 9365,
              "end": 9675
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithWithPrivateModuleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9686,
                "end": 9733
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9751,
                      "end": 9771
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 9772,
                              "end": 9773
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
                                  "start": 9782,
                                  "end": 9795
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9796,
                                  "end": 9807
                                },
                                "start": 9782,
                                "end": 9807
                              },
                              "typeArguments": null,
                              "start": 9782,
                              "end": 9807
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 9772,
                            "end": 9807
                          }
                        ],
                        "start": 9771,
                        "end": 9808
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9811,
                        "end": 9824
                      },
                      "expression": false,
                      "start": 9771,
                      "end": 9824
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9744,
                    "end": 9824
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9833,
                      "end": 9847
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 9848,
                              "end": 9849
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
                                  "start": 9858,
                                  "end": 9871
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "publicClass",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9872,
                                  "end": 9883
                                },
                                "start": 9858,
                                "end": 9883
                              },
                              "typeArguments": null,
                              "start": 9858,
                              "end": 9883
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 9848,
                            "end": 9883
                          }
                        ],
                        "start": 9847,
                        "end": 9884
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 9887,
                        "end": 9899
                      },
                      "expression": false,
                      "start": 9847,
                      "end": 9899
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9833,
                    "end": 9899
                  }
                ],
                "start": 9734,
                "end": 9905
              },
              "abstract": false,
              "declare": false,
              "start": 9680,
              "end": 9905
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateFunctionWithPrivateMopduleTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 9919,
                "end": 9966
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
                      "start": 9967,
                      "end": 9968
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
                          "start": 9977,
                          "end": 9990
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9991,
                          "end": 10002
                        },
                        "start": 9977,
                        "end": 10002
                      },
                      "typeArguments": null,
                      "start": 9977,
                      "end": 10002
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 9967,
                    "end": 10002
                  }
                ],
                "start": 9966,
                "end": 10003
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 10006,
                "end": 10014
              },
              "expression": false,
              "start": 9910,
              "end": 10014
            }
          ],
          "start": 4754,
          "end": 10017
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 4731,
        "end": 10017
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4724,
      "end": 10017
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 10029,
        "end": 10042
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
              "name": "privateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 10055,
              "end": 10067
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 10068,
              "end": 10075
            },
            "abstract": false,
            "declare": false,
            "start": 10049,
            "end": 10075
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
                "start": 10094,
                "end": 10105
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 10106,
                "end": 10113
              },
              "abstract": false,
              "declare": false,
              "start": 10088,
              "end": 10113
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10081,
            "end": 10113
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
                "start": 10136,
                "end": 10176
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 10192,
                            "end": 10193
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10202,
                              "end": 10214
                            },
                            "typeArguments": null,
                            "start": 10202,
                            "end": 10214
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10192,
                          "end": 10214
                        }
                      ],
                      "start": 10191,
                      "end": 10215
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10219,
                          "end": 10231
                        },
                        "typeArguments": null,
                        "start": 10219,
                        "end": 10231
                      },
                      "start": 10217,
                      "end": 10231
                    },
                    "start": 10187,
                    "end": 10232
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10243,
                            "end": 10244
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10253,
                              "end": 10265
                            },
                            "typeArguments": null,
                            "start": 10253,
                            "end": 10265
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10243,
                          "end": 10265
                        }
                      ],
                      "start": 10242,
                      "end": 10266
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10270,
                          "end": 10282
                        },
                        "typeArguments": null,
                        "start": 10270,
                        "end": 10282
                      },
                      "start": 10268,
                      "end": 10282
                    },
                    "start": 10242,
                    "end": 10283
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10292,
                      "end": 10300
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
                            "start": 10301,
                            "end": 10302
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10311,
                              "end": 10323
                            },
                            "typeArguments": null,
                            "start": 10311,
                            "end": 10323
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10301,
                          "end": 10323
                        }
                      ],
                      "start": 10300,
                      "end": 10324
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10328,
                          "end": 10340
                        },
                        "typeArguments": null,
                        "start": 10328,
                        "end": 10340
                      },
                      "start": 10326,
                      "end": 10340
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10292,
                    "end": 10341
                  }
                ],
                "start": 10177,
                "end": 10348
              },
              "declare": false,
              "start": 10126,
              "end": 10348
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10119,
            "end": 10348
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
                "start": 10371,
                "end": 10410
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 10426,
                            "end": 10427
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10436,
                              "end": 10447
                            },
                            "typeArguments": null,
                            "start": 10436,
                            "end": 10447
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10426,
                          "end": 10447
                        }
                      ],
                      "start": 10425,
                      "end": 10448
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10452,
                          "end": 10463
                        },
                        "typeArguments": null,
                        "start": 10452,
                        "end": 10463
                      },
                      "start": 10450,
                      "end": 10463
                    },
                    "start": 10421,
                    "end": 10464
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10474,
                            "end": 10475
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10484,
                              "end": 10495
                            },
                            "typeArguments": null,
                            "start": 10484,
                            "end": 10495
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10474,
                          "end": 10495
                        }
                      ],
                      "start": 10473,
                      "end": 10496
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10500,
                          "end": 10511
                        },
                        "typeArguments": null,
                        "start": 10500,
                        "end": 10511
                      },
                      "start": 10498,
                      "end": 10511
                    },
                    "start": 10473,
                    "end": 10512
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10521,
                      "end": 10529
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
                            "start": 10530,
                            "end": 10531
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10540,
                              "end": 10551
                            },
                            "typeArguments": null,
                            "start": 10540,
                            "end": 10551
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 10530,
                          "end": 10551
                        }
                      ],
                      "start": 10529,
                      "end": 10552
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10556,
                          "end": 10567
                        },
                        "typeArguments": null,
                        "start": 10556,
                        "end": 10567
                      },
                      "start": 10554,
                      "end": 10567
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 10521,
                    "end": 10568
                  }
                ],
                "start": 10411,
                "end": 10574
              },
              "declare": false,
              "start": 10361,
              "end": 10574
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 10354,
            "end": 10574
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 10590,
              "end": 10631
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 10647,
                          "end": 10648
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10657,
                            "end": 10669
                          },
                          "typeArguments": null,
                          "start": 10657,
                          "end": 10669
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10647,
                        "end": 10669
                      }
                    ],
                    "start": 10646,
                    "end": 10670
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10674,
                        "end": 10686
                      },
                      "typeArguments": null,
                      "start": 10674,
                      "end": 10686
                    },
                    "start": 10672,
                    "end": 10686
                  },
                  "start": 10642,
                  "end": 10687
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10697,
                          "end": 10698
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10707,
                            "end": 10719
                          },
                          "typeArguments": null,
                          "start": 10707,
                          "end": 10719
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10697,
                        "end": 10719
                      }
                    ],
                    "start": 10696,
                    "end": 10720
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10724,
                        "end": 10736
                      },
                      "typeArguments": null,
                      "start": 10724,
                      "end": 10736
                    },
                    "start": 10722,
                    "end": 10736
                  },
                  "start": 10696,
                  "end": 10737
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10746,
                    "end": 10754
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
                          "start": 10755,
                          "end": 10756
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "privateClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10765,
                            "end": 10777
                          },
                          "typeArguments": null,
                          "start": 10765,
                          "end": 10777
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10755,
                        "end": 10777
                      }
                    ],
                    "start": 10754,
                    "end": 10778
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10782,
                        "end": 10794
                      },
                      "typeArguments": null,
                      "start": 10782,
                      "end": 10794
                    },
                    "start": 10780,
                    "end": 10794
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10746,
                  "end": 10795
                }
              ],
              "start": 10632,
              "end": 10801
            },
            "declare": false,
            "start": 10580,
            "end": 10801
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 10817,
              "end": 10857
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 10873,
                          "end": 10874
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10883,
                            "end": 10894
                          },
                          "typeArguments": null,
                          "start": 10883,
                          "end": 10894
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10873,
                        "end": 10894
                      }
                    ],
                    "start": 10872,
                    "end": 10895
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10899,
                        "end": 10910
                      },
                      "typeArguments": null,
                      "start": 10899,
                      "end": 10910
                    },
                    "start": 10897,
                    "end": 10910
                  },
                  "start": 10868,
                  "end": 10911
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10921,
                          "end": 10922
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10931,
                            "end": 10942
                          },
                          "typeArguments": null,
                          "start": 10931,
                          "end": 10942
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10921,
                        "end": 10942
                      }
                    ],
                    "start": 10920,
                    "end": 10943
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10947,
                        "end": 10958
                      },
                      "typeArguments": null,
                      "start": 10947,
                      "end": 10958
                    },
                    "start": 10945,
                    "end": 10958
                  },
                  "start": 10920,
                  "end": 10959
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 10968,
                    "end": 10976
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
                          "start": 10977,
                          "end": 10978
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10987,
                            "end": 10998
                          },
                          "typeArguments": null,
                          "start": 10987,
                          "end": 10998
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 10977,
                        "end": 10998
                      }
                    ],
                    "start": 10976,
                    "end": 10999
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11003,
                        "end": 11014
                      },
                      "typeArguments": null,
                      "start": 11003,
                      "end": 11014
                    },
                    "start": 11001,
                    "end": 11014
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 10968,
                  "end": 11015
                }
              ],
              "start": 10858,
              "end": 11021
            },
            "declare": false,
            "start": 10807,
            "end": 11021
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 11040,
                "end": 11080
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11098,
                      "end": 11118
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11119,
                              "end": 11120
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11129,
                                "end": 11141
                              },
                              "typeArguments": null,
                              "start": 11129,
                              "end": 11141
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11119,
                            "end": 11141
                          }
                        ],
                        "start": 11118,
                        "end": 11142
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11145,
                        "end": 11157
                      },
                      "expression": false,
                      "start": 11118,
                      "end": 11157
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11091,
                    "end": 11157
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11181,
                      "end": 11202
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11203,
                              "end": 11204
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11213,
                                "end": 11225
                              },
                              "typeArguments": null,
                              "start": 11213,
                              "end": 11225
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11203,
                            "end": 11225
                          }
                        ],
                        "start": 11202,
                        "end": 11226
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11229,
                        "end": 11240
                      },
                      "expression": false,
                      "start": 11202,
                      "end": 11240
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11166,
                    "end": 11240
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11249,
                      "end": 11263
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11264,
                              "end": 11265
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11274,
                                "end": 11286
                              },
                              "typeArguments": null,
                              "start": 11274,
                              "end": 11286
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11264,
                            "end": 11286
                          }
                        ],
                        "start": 11263,
                        "end": 11287
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11290,
                        "end": 11303
                      },
                      "expression": false,
                      "start": 11263,
                      "end": 11303
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11249,
                    "end": 11303
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11320,
                      "end": 11335
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11336,
                              "end": 11337
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "privateClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11346,
                                "end": 11358
                              },
                              "typeArguments": null,
                              "start": 11346,
                              "end": 11358
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11336,
                            "end": 11358
                          }
                        ],
                        "start": 11335,
                        "end": 11359
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11362,
                        "end": 11373
                      },
                      "expression": false,
                      "start": 11335,
                      "end": 11373
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11312,
                    "end": 11373
                  }
                ],
                "start": 11081,
                "end": 11379
              },
              "abstract": false,
              "declare": false,
              "start": 11034,
              "end": 11379
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11027,
            "end": 11379
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 11398,
                "end": 11437
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11455,
                      "end": 11475
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11476,
                              "end": 11477
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11486,
                                "end": 11497
                              },
                              "typeArguments": null,
                              "start": 11486,
                              "end": 11497
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11476,
                            "end": 11497
                          }
                        ],
                        "start": 11475,
                        "end": 11498
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11501,
                        "end": 11512
                      },
                      "expression": false,
                      "start": 11475,
                      "end": 11512
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11448,
                    "end": 11512
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11536,
                      "end": 11557
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11558,
                              "end": 11559
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11568,
                                "end": 11579
                              },
                              "typeArguments": null,
                              "start": 11568,
                              "end": 11579
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11558,
                            "end": 11579
                          }
                        ],
                        "start": 11557,
                        "end": 11580
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11583,
                        "end": 11594
                      },
                      "expression": false,
                      "start": 11557,
                      "end": 11594
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11521,
                    "end": 11594
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11603,
                      "end": 11617
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11618,
                              "end": 11619
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11628,
                                "end": 11639
                              },
                              "typeArguments": null,
                              "start": 11628,
                              "end": 11639
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11618,
                            "end": 11639
                          }
                        ],
                        "start": 11617,
                        "end": 11640
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11643,
                        "end": 11654
                      },
                      "expression": false,
                      "start": 11617,
                      "end": 11654
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 11603,
                    "end": 11654
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11671,
                      "end": 11686
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 11687,
                              "end": 11688
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "publicClass",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11697,
                                "end": 11708
                              },
                              "typeArguments": null,
                              "start": 11697,
                              "end": 11708
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 11687,
                            "end": 11708
                          }
                        ],
                        "start": 11686,
                        "end": 11709
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 11712,
                        "end": 11723
                      },
                      "expression": false,
                      "start": 11686,
                      "end": 11723
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 11663,
                    "end": 11723
                  }
                ],
                "start": 11438,
                "end": 11729
              },
              "abstract": false,
              "declare": false,
              "start": 11392,
              "end": 11729
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11385,
            "end": 11729
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 11741,
              "end": 11782
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11800,
                    "end": 11820
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 11821,
                            "end": 11822
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11831,
                              "end": 11843
                            },
                            "typeArguments": null,
                            "start": 11831,
                            "end": 11843
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11821,
                          "end": 11843
                        }
                      ],
                      "start": 11820,
                      "end": 11844
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11847,
                      "end": 11858
                    },
                    "expression": false,
                    "start": 11820,
                    "end": 11858
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11793,
                  "end": 11858
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11882,
                    "end": 11903
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 11904,
                            "end": 11905
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11914,
                              "end": 11926
                            },
                            "typeArguments": null,
                            "start": 11914,
                            "end": 11926
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11904,
                          "end": 11926
                        }
                      ],
                      "start": 11903,
                      "end": 11927
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11930,
                      "end": 11941
                    },
                    "expression": false,
                    "start": 11903,
                    "end": 11941
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 11867,
                  "end": 11941
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11950,
                    "end": 11964
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 11965,
                            "end": 11966
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11975,
                              "end": 11987
                            },
                            "typeArguments": null,
                            "start": 11975,
                            "end": 11987
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 11965,
                          "end": 11987
                        }
                      ],
                      "start": 11964,
                      "end": 11988
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 11991,
                      "end": 12002
                    },
                    "expression": false,
                    "start": 11964,
                    "end": 12002
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 11950,
                  "end": 12002
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12019,
                    "end": 12034
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 12035,
                            "end": 12036
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "privateClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12045,
                              "end": 12057
                            },
                            "typeArguments": null,
                            "start": 12045,
                            "end": 12057
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12035,
                          "end": 12057
                        }
                      ],
                      "start": 12034,
                      "end": 12058
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12061,
                      "end": 12072
                    },
                    "expression": false,
                    "start": 12034,
                    "end": 12072
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12011,
                  "end": 12072
                }
              ],
              "start": 11783,
              "end": 12078
            },
            "abstract": false,
            "declare": false,
            "start": 11735,
            "end": 12078
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12090,
              "end": 12130
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12148,
                    "end": 12168
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 12169,
                            "end": 12170
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12179,
                              "end": 12190
                            },
                            "typeArguments": null,
                            "start": 12179,
                            "end": 12190
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12169,
                          "end": 12190
                        }
                      ],
                      "start": 12168,
                      "end": 12191
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12194,
                      "end": 12205
                    },
                    "expression": false,
                    "start": 12168,
                    "end": 12205
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12141,
                  "end": 12205
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12229,
                    "end": 12250
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 12251,
                            "end": 12252
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12261,
                              "end": 12272
                            },
                            "typeArguments": null,
                            "start": 12261,
                            "end": 12272
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12251,
                          "end": 12272
                        }
                      ],
                      "start": 12250,
                      "end": 12273
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12276,
                      "end": 12287
                    },
                    "expression": false,
                    "start": 12250,
                    "end": 12287
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12214,
                  "end": 12287
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12296,
                    "end": 12310
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 12311,
                            "end": 12312
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12321,
                              "end": 12332
                            },
                            "typeArguments": null,
                            "start": 12321,
                            "end": 12332
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12311,
                          "end": 12332
                        }
                      ],
                      "start": 12310,
                      "end": 12333
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12336,
                      "end": 12347
                    },
                    "expression": false,
                    "start": 12310,
                    "end": 12347
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 12296,
                  "end": 12347
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12364,
                    "end": 12379
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 12380,
                            "end": 12381
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "publicClass",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 12390,
                              "end": 12401
                            },
                            "typeArguments": null,
                            "start": 12390,
                            "end": 12401
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12380,
                          "end": 12401
                        }
                      ],
                      "start": 12379,
                      "end": 12402
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 12405,
                      "end": 12416
                    },
                    "expression": false,
                    "start": 12379,
                    "end": 12416
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 12356,
                  "end": 12416
                }
              ],
              "start": 12131,
              "end": 12422
            },
            "abstract": false,
            "declare": false,
            "start": 12084,
            "end": 12422
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 12444,
                "end": 12483
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
                      "start": 12484,
                      "end": 12485
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12494,
                        "end": 12506
                      },
                      "typeArguments": null,
                      "start": 12494,
                      "end": 12506
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12484,
                    "end": 12506
                  }
                ],
                "start": 12483,
                "end": 12507
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12510,
                "end": 12518
              },
              "expression": false,
              "start": 12435,
              "end": 12518
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12428,
            "end": 12518
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 12540,
                "end": 12578
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
                      "start": 12579,
                      "end": 12580
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12589,
                        "end": 12600
                      },
                      "typeArguments": null,
                      "start": 12589,
                      "end": 12600
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 12579,
                    "end": 12600
                  }
                ],
                "start": 12578,
                "end": 12601
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 12604,
                "end": 12611
              },
              "expression": false,
              "start": 12531,
              "end": 12611
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 12524,
            "end": 12611
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12626,
              "end": 12666
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
                    "start": 12667,
                    "end": 12668
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12677,
                      "end": 12689
                    },
                    "typeArguments": null,
                    "start": 12677,
                    "end": 12689
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 12667,
                  "end": 12689
                }
              ],
              "start": 12666,
              "end": 12690
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12693,
              "end": 12700
            },
            "expression": false,
            "start": 12617,
            "end": 12700
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 12715,
              "end": 12754
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
                    "start": 12755,
                    "end": 12756
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12765,
                      "end": 12776
                    },
                    "typeArguments": null,
                    "start": 12765,
                    "end": 12776
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 12755,
                  "end": 12776
                }
              ],
              "start": 12754,
              "end": 12777
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 12780,
              "end": 12787
            },
            "expression": false,
            "start": 12706,
            "end": 12787
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
                "start": 12810,
                "end": 12863
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
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
                            "start": 12879,
                            "end": 12880
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12879,
                          "end": 12880
                        }
                      ],
                      "start": 12878,
                      "end": 12881
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12885,
                          "end": 12896
                        },
                        "typeArguments": null,
                        "start": 12885,
                        "end": 12896
                      },
                      "start": 12883,
                      "end": 12896
                    },
                    "start": 12874,
                    "end": 12897
                  },
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 12907,
                            "end": 12908
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12907,
                          "end": 12908
                        }
                      ],
                      "start": 12906,
                      "end": 12909
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12913,
                          "end": 12924
                        },
                        "typeArguments": null,
                        "start": 12913,
                        "end": 12924
                      },
                      "start": 12911,
                      "end": 12924
                    },
                    "start": 12906,
                    "end": 12925
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12934,
                      "end": 12942
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
                            "start": 12943,
                            "end": 12944
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 12943,
                          "end": 12944
                        }
                      ],
                      "start": 12942,
                      "end": 12945
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12949,
                          "end": 12960
                        },
                        "typeArguments": null,
                        "start": 12949,
                        "end": 12960
                      },
                      "start": 12947,
                      "end": 12960
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 12934,
                    "end": 12961
                  }
                ],
                "start": 12864,
                "end": 12967
              },
              "declare": false,
              "start": 12800,
              "end": 12967
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 12793,
            "end": 12967
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 12983,
              "end": 13037
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSConstructSignatureDeclaration",
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
                          "start": 13053,
                          "end": 13054
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13053,
                        "end": 13054
                      }
                    ],
                    "start": 13052,
                    "end": 13055
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13059,
                        "end": 13070
                      },
                      "typeArguments": null,
                      "start": 13059,
                      "end": 13070
                    },
                    "start": 13057,
                    "end": 13070
                  },
                  "start": 13048,
                  "end": 13071
                },
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 13081,
                          "end": 13082
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13081,
                        "end": 13082
                      }
                    ],
                    "start": 13080,
                    "end": 13083
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13087,
                        "end": 13098
                      },
                      "typeArguments": null,
                      "start": 13087,
                      "end": 13098
                    },
                    "start": 13085,
                    "end": 13098
                  },
                  "start": 13080,
                  "end": 13099
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13108,
                    "end": 13116
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
                          "start": 13117,
                          "end": 13118
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 13117,
                        "end": 13118
                      }
                    ],
                    "start": 13116,
                    "end": 13119
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 13123,
                        "end": 13134
                      },
                      "typeArguments": null,
                      "start": 13123,
                      "end": 13134
                    },
                    "start": 13121,
                    "end": 13134
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 13108,
                  "end": 13135
                }
              ],
              "start": 13038,
              "end": 13141
            },
            "declare": false,
            "start": 12973,
            "end": 13141
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 13160,
                "end": 13213
              },
              "typeParameters": null,
              "superClass": null,
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
                      "name": "myPublicStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13231,
                      "end": 13251
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 13252,
                              "end": 13253
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13252,
                            "end": 13253
                          }
                        ],
                        "start": 13251,
                        "end": 13254
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13257,
                        "end": 13268
                      },
                      "expression": false,
                      "start": 13251,
                      "end": 13268
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13224,
                    "end": 13268
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateStaticMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13292,
                      "end": 13313
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 13314,
                              "end": 13315
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13314,
                            "end": 13315
                          }
                        ],
                        "start": 13313,
                        "end": 13316
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13319,
                        "end": 13330
                      },
                      "expression": false,
                      "start": 13313,
                      "end": 13330
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13277,
                    "end": 13330
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPublicMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13339,
                      "end": 13353
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 13354,
                              "end": 13355
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13354,
                            "end": 13355
                          }
                        ],
                        "start": 13353,
                        "end": 13356
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13359,
                        "end": 13370
                      },
                      "expression": false,
                      "start": 13353,
                      "end": 13370
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 13339,
                    "end": 13370
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "myPrivateMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 13387,
                      "end": 13402
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                              "start": 13403,
                              "end": 13404
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 13403,
                            "end": 13404
                          }
                        ],
                        "start": 13402,
                        "end": 13405
                      },
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 13408,
                        "end": 13419
                      },
                      "expression": false,
                      "start": 13402,
                      "end": 13419
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 13379,
                    "end": 13419
                  }
                ],
                "start": 13214,
                "end": 13425
              },
              "abstract": false,
              "declare": false,
              "start": 13154,
              "end": 13425
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13147,
            "end": 13425
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 13436,
              "end": 13490
            },
            "typeParameters": null,
            "superClass": null,
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
                    "name": "myPublicStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13508,
                    "end": 13528
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 13529,
                            "end": 13530
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13529,
                          "end": 13530
                        }
                      ],
                      "start": 13528,
                      "end": 13531
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13534,
                      "end": 13545
                    },
                    "expression": false,
                    "start": 13528,
                    "end": 13545
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13501,
                  "end": 13545
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateStaticMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13569,
                    "end": 13590
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 13591,
                            "end": 13592
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13591,
                          "end": 13592
                        }
                      ],
                      "start": 13590,
                      "end": 13593
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13596,
                      "end": 13607
                    },
                    "expression": false,
                    "start": 13590,
                    "end": 13607
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13554,
                  "end": 13607
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPublicMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13616,
                    "end": 13630
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 13631,
                            "end": 13632
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13631,
                          "end": 13632
                        }
                      ],
                      "start": 13630,
                      "end": 13633
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13636,
                      "end": 13647
                    },
                    "expression": false,
                    "start": 13630,
                    "end": 13647
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 13616,
                  "end": 13647
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "myPrivateMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13664,
                    "end": 13679
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "start": 13680,
                            "end": 13681
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 13680,
                          "end": 13681
                        }
                      ],
                      "start": 13679,
                      "end": 13682
                    },
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 13685,
                      "end": 13696
                    },
                    "expression": false,
                    "start": 13679,
                    "end": 13696
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 13656,
                  "end": 13696
                }
              ],
              "start": 13491,
              "end": 13702
            },
            "abstract": false,
            "declare": false,
            "start": 13430,
            "end": 13702
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicFunctionWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 13724,
                "end": 13776
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
                      "start": 13777,
                      "end": 13778
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 13777,
                    "end": 13778
                  }
                ],
                "start": 13776,
                "end": 13779
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 13782,
                "end": 13789
              },
              "expression": false,
              "start": 13715,
              "end": 13789
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 13708,
            "end": 13789
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 13804,
              "end": 13857
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
                    "start": 13858,
                    "end": 13859
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 13858,
                  "end": 13859
                }
              ],
              "start": 13857,
              "end": 13860
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 13863,
              "end": 13870
            },
            "expression": false,
            "start": 13795,
            "end": 13870
          }
        ],
        "start": 10043,
        "end": 13872
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 10019,
      "end": 13872
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 13872
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
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 61,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 71,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 118,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 125,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 133,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
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
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 150,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "privateClass",
    "start": 189,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 206,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 234,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 253,
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
    "value": "privateClass",
    "start": 270,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 297,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 304,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 314,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 367,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 375,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 391,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 409,
    "end": 410
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 419,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 435,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 452,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 463,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 471,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 487,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 503,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 513,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 561,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 568,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 576,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 593,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 612,
    "end": 613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 614,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 622,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 639,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 657,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 666,
    "end": 667
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 668,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 676,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 693,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 710,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 720,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 767,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 774,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 782,
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
    "value": "(",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 798,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 818,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 826,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 842,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 859,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 868,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 870,
    "end": 877
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 878,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 894,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 905,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 907,
    "end": 908
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 910,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 917,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateTypeParameters",
    "start": 923,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 970,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 977,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1000,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1008,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1046,
    "end": 1053
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1054,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1061,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1085,
    "end": 1092
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1093,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 1121,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1136,
    "end": 1137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1138,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1146,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1184,
    "end": 1191
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 1192,
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
    "value": "T",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1210,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1218,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1245,
    "end": 1251
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1252,
    "end": 1257
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParameters",
    "start": 1258,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 1311,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1334,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1342,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1384,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1408,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1416,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 1444,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1461,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1469,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1496,
    "end": 1503
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 1504,
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
    "type": "Keyword",
    "value": "extends",
    "start": 1522,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1530,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1556,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateTypeParameters",
    "start": 1562,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1610,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 1617,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1638,
    "end": 1639
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1640,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1648,
    "end": 1660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1662,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1676,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1684,
    "end": 1690
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1691,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1715,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1723,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 1751,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1768,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1776,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1804,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 1812,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1830,
    "end": 1837
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1838,
    "end": 1850
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1850,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1862,
    "end": 1863
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1865,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParameters",
    "start": 1871,
    "end": 1911
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1918,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 1925,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1948,
    "end": 1955
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1956,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1977,
    "end": 1978
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1983,
    "end": 1990
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1991,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1998,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2022,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2030,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 2057,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2074,
    "end": 2081
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2082,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2109,
    "end": 2116
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 2117,
    "end": 2132
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2135,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2143,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2169,
    "end": 2175
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2176,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateTypeParameters",
    "start": 2185,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2227,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2235,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2248,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2266,
    "end": 2272
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2273,
    "end": 2281
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParameters",
    "start": 2282,
    "end": 2320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2320,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2321,
    "end": 2322
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2323,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2331,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2351,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateTypeParameters",
    "start": 2360,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2403,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2411,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2427,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2432,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParameters",
    "start": 2441,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2483,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2491,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2511,
    "end": 2517
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2518,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 2528,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2588,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2594,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2595,
    "end": 2596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2599,
    "end": 2610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2621,
    "end": 2622
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2623,
    "end": 2634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2634,
    "end": 2635
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2640,
    "end": 2648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2655,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2668,
    "end": 2669
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2671,
    "end": 2680
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 2681,
    "end": 2735
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2742,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2746,
    "end": 2747
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2748,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2749,
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
    "value": "publicClass",
    "start": 2753,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2777,
    "end": 2788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2788,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2794,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2806,
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
    "value": "publicClass",
    "start": 2809,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2825,
    "end": 2831
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2832,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParametersWithoutExtends",
    "start": 2838,
    "end": 2891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2898,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 2905,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2926,
    "end": 2927
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2943,
    "end": 2950
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2951,
    "end": 2957
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 2958,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2991,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 2997,
    "end": 3011
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3015,
    "end": 3016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3017,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3029,
    "end": 3036
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 3037,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3068,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParametersWithoutExtends",
    "start": 3074,
    "end": 3128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3135,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 3142,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3180,
    "end": 3187
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3188,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 3195,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 3234,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3252,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3266,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 3274,
    "end": 3289
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3289,
    "end": 3290
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3290,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3301,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3306,
    "end": 3312
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3313,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParametersWithoutExtends",
    "start": 3322,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3376,
    "end": 3377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3378,
    "end": 3379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3380,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3382,
    "end": 3383
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3385,
    "end": 3393
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParametersWithoutExtends",
    "start": 3394,
    "end": 3447
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3447,
    "end": 3448
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3448,
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
    "value": "(",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3458,
    "end": 3464
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3465,
    "end": 3474
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatModuleTypeParameters",
    "start": 3475,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3521,
    "end": 3522
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3527,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3534,
    "end": 3541
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3542,
    "end": 3555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3555,
    "end": 3556
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3556,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3567,
    "end": 3568
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3572,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3586,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3616,
    "end": 3623
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3624,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3638,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3649,
    "end": 3650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3651,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3654,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3668,
    "end": 3679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3679,
    "end": 3680
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3695,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3706,
    "end": 3713
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3714,
    "end": 3727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3728,
    "end": 3739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3742,
    "end": 3743
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3744,
    "end": 3757
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3758,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3781,
    "end": 3782
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3783,
    "end": 3789
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3790,
    "end": 3795
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateModuleTypeParameters",
    "start": 3796,
    "end": 3842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3843,
    "end": 3844
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3849,
    "end": 3855
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 3856,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3879,
    "end": 3886
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3887,
    "end": 3900
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3900,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3901,
    "end": 3912
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3912,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3914,
    "end": 3915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3916,
    "end": 3917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 3938,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3955,
    "end": 3962
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 3963,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3977,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3988,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4010,
    "end": 4011
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4012,
    "end": 4018
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4019,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateMopduleTypeParameters",
    "start": 4028,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4077,
    "end": 4084
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4085,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4099,
    "end": 4110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4111,
    "end": 4112
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4112,
    "end": 4113
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4114,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4126,
    "end": 4127
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4130,
    "end": 4139
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatModuleTypeParameters",
    "start": 4140,
    "end": 4186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4193,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4200,
    "end": 4207
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4208,
    "end": 4221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4221,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4222,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4238,
    "end": 4251
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4251,
    "end": 4252
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4252,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4269,
    "end": 4270
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4270,
    "end": 4271
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4272,
    "end": 4279
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4280,
    "end": 4293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4293,
    "end": 4294
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4294,
    "end": 4305
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4305,
    "end": 4306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4306,
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
    "value": ":",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4310,
    "end": 4323
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4323,
    "end": 4324
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4324,
    "end": 4335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4335,
    "end": 4336
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 4341,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4350,
    "end": 4351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4352,
    "end": 4359
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4360,
    "end": 4373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4373,
    "end": 4374
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4374,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4387,
    "end": 4388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4390,
    "end": 4403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4403,
    "end": 4404
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4404,
    "end": 4415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4415,
    "end": 4416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4417,
    "end": 4418
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4419,
    "end": 4424
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateModuleTypeParameters",
    "start": 4425,
    "end": 4472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4473,
    "end": 4474
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4479,
    "end": 4485
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 4486,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4509,
    "end": 4516
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4517,
    "end": 4530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4530,
    "end": 4531
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4531,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4546,
    "end": 4547
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 4558,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4575,
    "end": 4582
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4583,
    "end": 4596
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4596,
    "end": 4597
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4597,
    "end": 4608
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4610,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4618,
    "end": 4619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4620,
    "end": 4621
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4622,
    "end": 4630
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateMopduleTypeParameters",
    "start": 4631,
    "end": 4678
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4681,
    "end": 4688
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 4689,
    "end": 4702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4703,
    "end": 4714
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4714,
    "end": 4715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4715,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4716,
    "end": 4717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4718,
    "end": 4719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4720,
    "end": 4721
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4724,
    "end": 4730
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4731,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 4741,
    "end": 4753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4754,
    "end": 4755
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4760,
    "end": 4765
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4766,
    "end": 4778
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4779,
    "end": 4780
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4785,
    "end": 4786
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4792,
    "end": 4798
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4799,
    "end": 4804
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 4805,
    "end": 4816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4823,
    "end": 4824
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4830,
    "end": 4836
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4837,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 4847,
    "end": 4887
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4898,
    "end": 4901
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4903,
    "end": 4904
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4905,
    "end": 4912
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4913,
    "end": 4925
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4925,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4926,
    "end": 4927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4930,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4965,
    "end": 4972
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4973,
    "end": 4985
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4985,
    "end": 4986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4986,
    "end": 4987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4987,
    "end": 4988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 4990,
    "end": 5002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5002,
    "end": 5003
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5022,
    "end": 5030
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5033,
    "end": 5040
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5041,
    "end": 5053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5053,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5058,
    "end": 5070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5070,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5086,
    "end": 5087
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5093,
    "end": 5099
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5100,
    "end": 5109
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 5110,
    "end": 5149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5150,
    "end": 5151
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5160,
    "end": 5163
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5167,
    "end": 5174
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5175,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5187,
    "end": 5188
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5188,
    "end": 5189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5189,
    "end": 5190
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5191,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5213,
    "end": 5214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5215,
    "end": 5222
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5223,
    "end": 5234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5234,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5237,
    "end": 5238
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5239,
    "end": 5250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5250,
    "end": 5251
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5260,
    "end": 5268
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5268,
    "end": 5269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5269,
    "end": 5270
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5271,
    "end": 5278
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5279,
    "end": 5290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5290,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5293,
    "end": 5294
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5295,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5312,
    "end": 5313
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5319,
    "end": 5328
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 5329,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5371,
    "end": 5372
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5381,
    "end": 5384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5385,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5386,
    "end": 5387
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5388,
    "end": 5395
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5396,
    "end": 5408
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5408,
    "end": 5409
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5409,
    "end": 5410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5410,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5413,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5436,
    "end": 5437
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5438,
    "end": 5445
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5446,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5459,
    "end": 5460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5463,
    "end": 5475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5475,
    "end": 5476
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5485,
    "end": 5493
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5493,
    "end": 5494
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5494,
    "end": 5495
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5496,
    "end": 5503
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5504,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5516,
    "end": 5517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5518,
    "end": 5519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5519,
    "end": 5520
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5521,
    "end": 5533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5533,
    "end": 5534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5539,
    "end": 5540
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 5546,
    "end": 5555
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 5556,
    "end": 5596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5597,
    "end": 5598
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5607,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5611,
    "end": 5612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5612,
    "end": 5613
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5614,
    "end": 5621
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5622,
    "end": 5633
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5634,
    "end": 5635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5635,
    "end": 5636
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5636,
    "end": 5637
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5638,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5660,
    "end": 5661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5662,
    "end": 5669
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5670,
    "end": 5681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5681,
    "end": 5682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5682,
    "end": 5683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5683,
    "end": 5684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5684,
    "end": 5685
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5686,
    "end": 5697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5697,
    "end": 5698
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 5707,
    "end": 5715
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5715,
    "end": 5716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5716,
    "end": 5717
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5718,
    "end": 5725
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5726,
    "end": 5737
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5737,
    "end": 5738
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5738,
    "end": 5739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5739,
    "end": 5740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5740,
    "end": 5741
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 5742,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5753,
    "end": 5754
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5759,
    "end": 5760
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5766,
    "end": 5772
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5773,
    "end": 5778
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateTypeParameters",
    "start": 5779,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5830,
    "end": 5836
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 5837,
    "end": 5857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5857,
    "end": 5858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5860,
    "end": 5867
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5868,
    "end": 5880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5880,
    "end": 5881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5881,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5884,
    "end": 5885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5914,
    "end": 5921
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5922,
    "end": 5928
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 5929,
    "end": 5950
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5950,
    "end": 5951
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 5951,
    "end": 5952
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5953,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 5961,
    "end": 5973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5973,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5974,
    "end": 5975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5977,
    "end": 5978
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5987,
    "end": 5988
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 5997,
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
    "value": "T",
    "start": 6012,
    "end": 6013
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6014,
    "end": 6021
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6022,
    "end": 6034
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6034,
    "end": 6035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6035,
    "end": 6036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6036,
    "end": 6037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6038,
    "end": 6039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6058,
    "end": 6059
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6068,
    "end": 6075
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 6076,
    "end": 6091
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6091,
    "end": 6092
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6092,
    "end": 6093
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6094,
    "end": 6101
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6102,
    "end": 6114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6114,
    "end": 6115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6115,
    "end": 6116
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6116,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6118,
    "end": 6119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6134,
    "end": 6135
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6141,
    "end": 6147
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6148,
    "end": 6153
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParameters",
    "start": 6154,
    "end": 6193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6194,
    "end": 6195
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6204,
    "end": 6210
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 6211,
    "end": 6231
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6231,
    "end": 6232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6232,
    "end": 6233
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6234,
    "end": 6241
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6242,
    "end": 6253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6253,
    "end": 6254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6254,
    "end": 6255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6255,
    "end": 6256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6257,
    "end": 6258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6267,
    "end": 6268
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6277,
    "end": 6284
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6285,
    "end": 6291
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 6292,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6313,
    "end": 6314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6316,
    "end": 6323
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6324,
    "end": 6335
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6335,
    "end": 6336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6336,
    "end": 6337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6337,
    "end": 6338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6339,
    "end": 6340
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6349,
    "end": 6350
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 6359,
    "end": 6373
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6373,
    "end": 6374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6374,
    "end": 6375
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6376,
    "end": 6383
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6384,
    "end": 6395
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6395,
    "end": 6396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6396,
    "end": 6397
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6397,
    "end": 6398
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6399,
    "end": 6400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6409,
    "end": 6410
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6419,
    "end": 6426
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 6427,
    "end": 6442
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6442,
    "end": 6443
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6443,
    "end": 6444
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6445,
    "end": 6452
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6453,
    "end": 6464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6464,
    "end": 6465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6465,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6478,
    "end": 6479
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6484,
    "end": 6485
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6491,
    "end": 6496
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateTypeParameters",
    "start": 6497,
    "end": 6538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6549,
    "end": 6555
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 6556,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6577,
    "end": 6578
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6579,
    "end": 6586
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6587,
    "end": 6599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6599,
    "end": 6600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6600,
    "end": 6601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6601,
    "end": 6602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6603,
    "end": 6604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6613,
    "end": 6614
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6623,
    "end": 6630
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6631,
    "end": 6637
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 6638,
    "end": 6659
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6659,
    "end": 6660
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6660,
    "end": 6661
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6662,
    "end": 6669
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6670,
    "end": 6682
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6682,
    "end": 6683
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6683,
    "end": 6684
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6684,
    "end": 6685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6686,
    "end": 6687
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6696,
    "end": 6697
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 6706,
    "end": 6720
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6720,
    "end": 6721
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6721,
    "end": 6722
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6723,
    "end": 6730
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6731,
    "end": 6743
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6743,
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
    "value": "{",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6757,
    "end": 6758
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6767,
    "end": 6774
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 6775,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6790,
    "end": 6791
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6793,
    "end": 6800
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 6801,
    "end": 6813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6813,
    "end": 6814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6814,
    "end": 6815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6815,
    "end": 6816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6817,
    "end": 6818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6827,
    "end": 6828
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6833,
    "end": 6834
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6840,
    "end": 6845
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParameters",
    "start": 6846,
    "end": 6886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6897,
    "end": 6903
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 6904,
    "end": 6924
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6924,
    "end": 6925
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6925,
    "end": 6926
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6927,
    "end": 6934
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 6935,
    "end": 6946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6946,
    "end": 6947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6947,
    "end": 6948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6948,
    "end": 6949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6950,
    "end": 6951
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6960,
    "end": 6961
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 6970,
    "end": 6977
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6978,
    "end": 6984
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 6985,
    "end": 7006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7006,
    "end": 7007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7007,
    "end": 7008
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7009,
    "end": 7016
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7017,
    "end": 7028
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7028,
    "end": 7029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7029,
    "end": 7030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7030,
    "end": 7031
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7032,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7042,
    "end": 7043
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 7052,
    "end": 7066
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7066,
    "end": 7067
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7067,
    "end": 7068
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7069,
    "end": 7076
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7077,
    "end": 7088
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7088,
    "end": 7089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7089,
    "end": 7090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7090,
    "end": 7091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7092,
    "end": 7093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7102,
    "end": 7103
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7112,
    "end": 7119
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 7120,
    "end": 7135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7135,
    "end": 7136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7138,
    "end": 7145
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7146,
    "end": 7157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7157,
    "end": 7158
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7158,
    "end": 7159
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7159,
    "end": 7160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7171,
    "end": 7172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7177,
    "end": 7178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7184,
    "end": 7190
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7191,
    "end": 7199
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateTypeParameters",
    "start": 7200,
    "end": 7239
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7239,
    "end": 7240
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7240,
    "end": 7241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7242,
    "end": 7249
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7250,
    "end": 7262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7263,
    "end": 7264
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7264,
    "end": 7265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7266,
    "end": 7267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7282,
    "end": 7283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7289,
    "end": 7295
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7296,
    "end": 7304
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParameters",
    "start": 7305,
    "end": 7343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7343,
    "end": 7344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7344,
    "end": 7345
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7346,
    "end": 7353
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7354,
    "end": 7365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7365,
    "end": 7366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7366,
    "end": 7367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7367,
    "end": 7368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7369,
    "end": 7370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7375,
    "end": 7376
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7382,
    "end": 7390
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateTypeParameters",
    "start": 7391,
    "end": 7431
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7431,
    "end": 7432
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7432,
    "end": 7433
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7434,
    "end": 7441
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 7442,
    "end": 7454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7454,
    "end": 7455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7455,
    "end": 7456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7456,
    "end": 7457
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7458,
    "end": 7459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7464,
    "end": 7465
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7471,
    "end": 7479
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParameters",
    "start": 7480,
    "end": 7519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7519,
    "end": 7520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7520,
    "end": 7521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7522,
    "end": 7529
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7530,
    "end": 7541
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7541,
    "end": 7542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7543,
    "end": 7544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7545,
    "end": 7546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7551,
    "end": 7552
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7558,
    "end": 7564
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7565,
    "end": 7574
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 7575,
    "end": 7628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7629,
    "end": 7630
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7639,
    "end": 7642
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7643,
    "end": 7644
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7644,
    "end": 7645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7645,
    "end": 7646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7646,
    "end": 7647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7647,
    "end": 7648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7650,
    "end": 7661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7661,
    "end": 7662
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7671,
    "end": 7672
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7672,
    "end": 7673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7673,
    "end": 7674
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7674,
    "end": 7675
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7675,
    "end": 7676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7676,
    "end": 7677
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7678,
    "end": 7689
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 7699,
    "end": 7707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7707,
    "end": 7708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7708,
    "end": 7709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7709,
    "end": 7710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7710,
    "end": 7711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7712,
    "end": 7713
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7714,
    "end": 7725
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7725,
    "end": 7726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7731,
    "end": 7732
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7738,
    "end": 7747
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 7748,
    "end": 7802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7803,
    "end": 7804
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7813,
    "end": 7816
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7817,
    "end": 7818
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7818,
    "end": 7819
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7819,
    "end": 7820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7820,
    "end": 7821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7821,
    "end": 7822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7822,
    "end": 7823
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7824,
    "end": 7835
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7835,
    "end": 7836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7845,
    "end": 7846
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7846,
    "end": 7847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7847,
    "end": 7848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7848,
    "end": 7849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7849,
    "end": 7850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7850,
    "end": 7851
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7852,
    "end": 7863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7863,
    "end": 7864
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 7873,
    "end": 7881
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7881,
    "end": 7882
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 7882,
    "end": 7883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7883,
    "end": 7884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7884,
    "end": 7885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7885,
    "end": 7886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7886,
    "end": 7887
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 7888,
    "end": 7899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7899,
    "end": 7900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7905,
    "end": 7906
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7912,
    "end": 7918
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7919,
    "end": 7924
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParametersWithoutExtends",
    "start": 7925,
    "end": 7978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7979,
    "end": 7980
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7989,
    "end": 7995
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 7996,
    "end": 8016
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8016,
    "end": 8017
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8017,
    "end": 8018
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8018,
    "end": 8019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8019,
    "end": 8020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8020,
    "end": 8021
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8022,
    "end": 8023
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8032,
    "end": 8033
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8042,
    "end": 8049
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8050,
    "end": 8056
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 8057,
    "end": 8078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8078,
    "end": 8079
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8079,
    "end": 8080
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8080,
    "end": 8081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8081,
    "end": 8082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8082,
    "end": 8083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8084,
    "end": 8085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8094,
    "end": 8095
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 8104,
    "end": 8118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8118,
    "end": 8119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8119,
    "end": 8120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8121,
    "end": 8122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8122,
    "end": 8123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8124,
    "end": 8125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8134,
    "end": 8135
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8144,
    "end": 8151
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 8152,
    "end": 8167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8167,
    "end": 8168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8168,
    "end": 8169
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8170,
    "end": 8171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8171,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8173,
    "end": 8174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8183,
    "end": 8184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8189,
    "end": 8190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8195,
    "end": 8200
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParametersWithoutExtends",
    "start": 8201,
    "end": 8255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8266,
    "end": 8272
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 8273,
    "end": 8293
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8293,
    "end": 8294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8294,
    "end": 8295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8295,
    "end": 8296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8296,
    "end": 8297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8297,
    "end": 8298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8299,
    "end": 8300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8309,
    "end": 8310
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8319,
    "end": 8326
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8327,
    "end": 8333
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 8334,
    "end": 8355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8355,
    "end": 8356
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8356,
    "end": 8357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8357,
    "end": 8358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8358,
    "end": 8359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8359,
    "end": 8360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8361,
    "end": 8362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 8381,
    "end": 8395
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8395,
    "end": 8396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8396,
    "end": 8397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8397,
    "end": 8398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8398,
    "end": 8399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8399,
    "end": 8400
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8421,
    "end": 8428
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 8429,
    "end": 8444
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8444,
    "end": 8445
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8445,
    "end": 8446
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8446,
    "end": 8447
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8447,
    "end": 8448
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8448,
    "end": 8449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8450,
    "end": 8451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8460,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8466,
    "end": 8467
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8473,
    "end": 8479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8480,
    "end": 8488
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParametersWithoutExtends",
    "start": 8489,
    "end": 8541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8541,
    "end": 8542
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8542,
    "end": 8543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8543,
    "end": 8544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8544,
    "end": 8545
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8545,
    "end": 8546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8547,
    "end": 8548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8553,
    "end": 8554
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8560,
    "end": 8568
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParametersWithoutExtends",
    "start": 8569,
    "end": 8622
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8622,
    "end": 8623
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8623,
    "end": 8624
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8624,
    "end": 8625
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8626,
    "end": 8627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8628,
    "end": 8629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8634,
    "end": 8635
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8641,
    "end": 8647
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8648,
    "end": 8657
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivatModuleTypeParameters",
    "start": 8658,
    "end": 8703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8704,
    "end": 8705
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8714,
    "end": 8717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8718,
    "end": 8719
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8719,
    "end": 8720
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8721,
    "end": 8728
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8729,
    "end": 8742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8742,
    "end": 8743
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8743,
    "end": 8754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8754,
    "end": 8755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8755,
    "end": 8756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8756,
    "end": 8757
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8757,
    "end": 8758
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8759,
    "end": 8772
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8772,
    "end": 8773
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8773,
    "end": 8784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8804,
    "end": 8805
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8805,
    "end": 8806
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8807,
    "end": 8814
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8815,
    "end": 8828
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8828,
    "end": 8829
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8829,
    "end": 8840
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8840,
    "end": 8841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8841,
    "end": 8842
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8842,
    "end": 8843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8843,
    "end": 8844
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8845,
    "end": 8858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8858,
    "end": 8859
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8859,
    "end": 8870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8870,
    "end": 8871
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 8890,
    "end": 8898
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8898,
    "end": 8899
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 8899,
    "end": 8900
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8901,
    "end": 8908
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8909,
    "end": 8922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8922,
    "end": 8923
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8923,
    "end": 8934
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8934,
    "end": 8935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8935,
    "end": 8936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8936,
    "end": 8937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8937,
    "end": 8938
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 8939,
    "end": 8952
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8952,
    "end": 8953
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 8953,
    "end": 8964
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8964,
    "end": 8965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8980,
    "end": 8981
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8986,
    "end": 8992
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8993,
    "end": 8998
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateModuleTypeParameters",
    "start": 8999,
    "end": 9045
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9046,
    "end": 9047
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9056,
    "end": 9062
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 9063,
    "end": 9083
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9083,
    "end": 9084
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9084,
    "end": 9085
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9086,
    "end": 9093
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9094,
    "end": 9107
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9107,
    "end": 9108
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9108,
    "end": 9119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9119,
    "end": 9120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9120,
    "end": 9121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9121,
    "end": 9122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9123,
    "end": 9124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9143,
    "end": 9144
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 9153,
    "end": 9167
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9167,
    "end": 9168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9168,
    "end": 9169
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9170,
    "end": 9177
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9178,
    "end": 9191
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9191,
    "end": 9192
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9192,
    "end": 9203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9203,
    "end": 9204
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9204,
    "end": 9205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9205,
    "end": 9206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9207,
    "end": 9208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9227,
    "end": 9228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9233,
    "end": 9234
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9239,
    "end": 9245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9246,
    "end": 9254
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateMopduleTypeParameters",
    "start": 9255,
    "end": 9301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9301,
    "end": 9302
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9302,
    "end": 9303
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9304,
    "end": 9311
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9312,
    "end": 9325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9325,
    "end": 9326
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9326,
    "end": 9337
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9337,
    "end": 9338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9338,
    "end": 9339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9339,
    "end": 9340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9341,
    "end": 9342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9357,
    "end": 9358
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9365,
    "end": 9374
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivatModuleTypeParameters",
    "start": 9375,
    "end": 9421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9422,
    "end": 9423
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9432,
    "end": 9435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9436,
    "end": 9437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9437,
    "end": 9438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9439,
    "end": 9446
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9447,
    "end": 9460
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9460,
    "end": 9461
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9461,
    "end": 9472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9472,
    "end": 9473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9473,
    "end": 9474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9474,
    "end": 9475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9475,
    "end": 9476
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9477,
    "end": 9490
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9490,
    "end": 9491
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9491,
    "end": 9502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9502,
    "end": 9503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9514,
    "end": 9515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9515,
    "end": 9516
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9517,
    "end": 9524
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9525,
    "end": 9538
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9538,
    "end": 9539
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9539,
    "end": 9550
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9550,
    "end": 9551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9551,
    "end": 9552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9552,
    "end": 9553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9553,
    "end": 9554
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9555,
    "end": 9568
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9568,
    "end": 9569
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9569,
    "end": 9580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9580,
    "end": 9581
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 9592,
    "end": 9600
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9600,
    "end": 9601
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9601,
    "end": 9602
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9603,
    "end": 9610
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9611,
    "end": 9624
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9624,
    "end": 9625
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9625,
    "end": 9636
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9636,
    "end": 9637
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9637,
    "end": 9638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9638,
    "end": 9639
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9639,
    "end": 9640
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9641,
    "end": 9654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9654,
    "end": 9655
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9655,
    "end": 9666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9666,
    "end": 9667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9674,
    "end": 9675
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9680,
    "end": 9685
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateModuleTypeParameters",
    "start": 9686,
    "end": 9733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9734,
    "end": 9735
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9744,
    "end": 9750
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 9751,
    "end": 9771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9771,
    "end": 9772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9772,
    "end": 9773
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9774,
    "end": 9781
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9782,
    "end": 9795
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9795,
    "end": 9796
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9796,
    "end": 9807
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9807,
    "end": 9808
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9808,
    "end": 9809
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9809,
    "end": 9810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9811,
    "end": 9812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9823,
    "end": 9824
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 9833,
    "end": 9847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9847,
    "end": 9848
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9848,
    "end": 9849
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9850,
    "end": 9857
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9858,
    "end": 9871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9871,
    "end": 9872
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9872,
    "end": 9883
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9883,
    "end": 9884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9884,
    "end": 9885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9885,
    "end": 9886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9887,
    "end": 9888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9898,
    "end": 9899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9904,
    "end": 9905
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9910,
    "end": 9918
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateMopduleTypeParameters",
    "start": 9919,
    "end": 9966
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9966,
    "end": 9967
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 9969,
    "end": 9976
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 9977,
    "end": 9990
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9990,
    "end": 9991
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 9991,
    "end": 10002
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10002,
    "end": 10003
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10003,
    "end": 10004
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10004,
    "end": 10005
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10006,
    "end": 10007
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10013,
    "end": 10014
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10016,
    "end": 10017
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 10019,
    "end": 10028
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 10029,
    "end": 10042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10043,
    "end": 10044
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 10049,
    "end": 10054
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10055,
    "end": 10067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10068,
    "end": 10069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10074,
    "end": 10075
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10081,
    "end": 10087
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 10088,
    "end": 10093
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10094,
    "end": 10105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10106,
    "end": 10107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10112,
    "end": 10113
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10119,
    "end": 10125
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10126,
    "end": 10135
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPrivateTypeParameters",
    "start": 10136,
    "end": 10176
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10177,
    "end": 10178
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10187,
    "end": 10190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10191,
    "end": 10192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10192,
    "end": 10193
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10194,
    "end": 10201
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10202,
    "end": 10214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10214,
    "end": 10215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10215,
    "end": 10216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10216,
    "end": 10217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10217,
    "end": 10218
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10219,
    "end": 10231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10231,
    "end": 10232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10242,
    "end": 10243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10243,
    "end": 10244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10245,
    "end": 10252
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10253,
    "end": 10265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10265,
    "end": 10266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10266,
    "end": 10267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10267,
    "end": 10268
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10268,
    "end": 10269
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10270,
    "end": 10282
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10282,
    "end": 10283
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 10292,
    "end": 10300
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10300,
    "end": 10301
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10301,
    "end": 10302
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10303,
    "end": 10310
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10311,
    "end": 10323
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10323,
    "end": 10324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10324,
    "end": 10325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10325,
    "end": 10326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10326,
    "end": 10327
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10328,
    "end": 10340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10340,
    "end": 10341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10347,
    "end": 10348
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10354,
    "end": 10360
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10361,
    "end": 10370
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 10371,
    "end": 10410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10411,
    "end": 10412
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10421,
    "end": 10424
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10425,
    "end": 10426
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10426,
    "end": 10427
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10428,
    "end": 10435
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10436,
    "end": 10447
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10447,
    "end": 10448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10448,
    "end": 10449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10449,
    "end": 10450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10450,
    "end": 10451
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10452,
    "end": 10463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10463,
    "end": 10464
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10473,
    "end": 10474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10474,
    "end": 10475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10476,
    "end": 10483
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10484,
    "end": 10495
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10495,
    "end": 10496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10496,
    "end": 10497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10497,
    "end": 10498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10498,
    "end": 10499
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10500,
    "end": 10511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10511,
    "end": 10512
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 10521,
    "end": 10529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10529,
    "end": 10530
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10530,
    "end": 10531
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10532,
    "end": 10539
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10540,
    "end": 10551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10551,
    "end": 10552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10552,
    "end": 10553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10553,
    "end": 10554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10554,
    "end": 10555
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10556,
    "end": 10567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10567,
    "end": 10568
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10573,
    "end": 10574
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10580,
    "end": 10589
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 10590,
    "end": 10631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10632,
    "end": 10633
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10642,
    "end": 10645
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10646,
    "end": 10647
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10647,
    "end": 10648
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10649,
    "end": 10656
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10657,
    "end": 10669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10669,
    "end": 10670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10670,
    "end": 10671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10671,
    "end": 10672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10672,
    "end": 10673
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10674,
    "end": 10686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10686,
    "end": 10687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10696,
    "end": 10697
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10697,
    "end": 10698
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10699,
    "end": 10706
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10707,
    "end": 10719
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10719,
    "end": 10720
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10720,
    "end": 10721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10721,
    "end": 10722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10722,
    "end": 10723
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10724,
    "end": 10736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10736,
    "end": 10737
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 10746,
    "end": 10754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10754,
    "end": 10755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10755,
    "end": 10756
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10757,
    "end": 10764
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10765,
    "end": 10777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10777,
    "end": 10778
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10778,
    "end": 10779
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10779,
    "end": 10780
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10780,
    "end": 10781
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 10782,
    "end": 10794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10794,
    "end": 10795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10800,
    "end": 10801
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10807,
    "end": 10816
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 10817,
    "end": 10857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10858,
    "end": 10859
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10868,
    "end": 10871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10872,
    "end": 10873
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10873,
    "end": 10874
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10875,
    "end": 10882
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10883,
    "end": 10894
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10894,
    "end": 10895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10895,
    "end": 10896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10896,
    "end": 10897
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10897,
    "end": 10898
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10899,
    "end": 10910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10910,
    "end": 10911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10920,
    "end": 10921
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10921,
    "end": 10922
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10923,
    "end": 10930
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10931,
    "end": 10942
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10942,
    "end": 10943
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10943,
    "end": 10944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10944,
    "end": 10945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10945,
    "end": 10946
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10947,
    "end": 10958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10958,
    "end": 10959
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 10968,
    "end": 10976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10976,
    "end": 10977
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 10977,
    "end": 10978
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 10979,
    "end": 10986
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 10987,
    "end": 10998
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 10998,
    "end": 10999
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10999,
    "end": 11000
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11000,
    "end": 11001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11001,
    "end": 11002
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 11003,
    "end": 11014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11014,
    "end": 11015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11020,
    "end": 11021
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11027,
    "end": 11033
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 11034,
    "end": 11039
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateTypeParameters",
    "start": 11040,
    "end": 11080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11081,
    "end": 11082
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11091,
    "end": 11097
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 11098,
    "end": 11118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11118,
    "end": 11119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11119,
    "end": 11120
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11121,
    "end": 11128
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11129,
    "end": 11141
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11141,
    "end": 11142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11142,
    "end": 11143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11143,
    "end": 11144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11145,
    "end": 11146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11156,
    "end": 11157
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 11166,
    "end": 11173
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11174,
    "end": 11180
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 11181,
    "end": 11202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11202,
    "end": 11203
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11203,
    "end": 11204
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11205,
    "end": 11212
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11213,
    "end": 11225
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11225,
    "end": 11226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11226,
    "end": 11227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11227,
    "end": 11228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11229,
    "end": 11230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11239,
    "end": 11240
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 11249,
    "end": 11263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11263,
    "end": 11264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11264,
    "end": 11265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11266,
    "end": 11273
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11274,
    "end": 11286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11286,
    "end": 11287
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11287,
    "end": 11288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11288,
    "end": 11289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11290,
    "end": 11291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11302,
    "end": 11303
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 11312,
    "end": 11319
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 11320,
    "end": 11335
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11335,
    "end": 11336
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11336,
    "end": 11337
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11338,
    "end": 11345
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11346,
    "end": 11358
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11358,
    "end": 11359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11359,
    "end": 11360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11360,
    "end": 11361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11362,
    "end": 11363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11372,
    "end": 11373
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11378,
    "end": 11379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11385,
    "end": 11391
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 11392,
    "end": 11397
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParameters",
    "start": 11398,
    "end": 11437
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11438,
    "end": 11439
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11448,
    "end": 11454
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 11455,
    "end": 11475
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11475,
    "end": 11476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11476,
    "end": 11477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11478,
    "end": 11485
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 11486,
    "end": 11497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11497,
    "end": 11498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11498,
    "end": 11499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11499,
    "end": 11500
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11501,
    "end": 11502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11511,
    "end": 11512
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 11521,
    "end": 11528
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11529,
    "end": 11535
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 11536,
    "end": 11557
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11557,
    "end": 11558
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11558,
    "end": 11559
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11560,
    "end": 11567
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 11568,
    "end": 11579
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11579,
    "end": 11580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11580,
    "end": 11581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11581,
    "end": 11582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11583,
    "end": 11584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11593,
    "end": 11594
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 11603,
    "end": 11617
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11617,
    "end": 11618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11618,
    "end": 11619
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11620,
    "end": 11627
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 11628,
    "end": 11639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11639,
    "end": 11640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11640,
    "end": 11641
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11641,
    "end": 11642
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11643,
    "end": 11644
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11653,
    "end": 11654
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 11663,
    "end": 11670
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 11671,
    "end": 11686
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11686,
    "end": 11687
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11687,
    "end": 11688
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11689,
    "end": 11696
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 11697,
    "end": 11708
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11708,
    "end": 11709
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11709,
    "end": 11710
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11710,
    "end": 11711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11712,
    "end": 11713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11722,
    "end": 11723
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11728,
    "end": 11729
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 11735,
    "end": 11740
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateTypeParameters",
    "start": 11741,
    "end": 11782
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11783,
    "end": 11784
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11793,
    "end": 11799
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 11800,
    "end": 11820
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11820,
    "end": 11821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11821,
    "end": 11822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11823,
    "end": 11830
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11831,
    "end": 11843
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11843,
    "end": 11844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11844,
    "end": 11845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11845,
    "end": 11846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11847,
    "end": 11848
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11857,
    "end": 11858
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 11867,
    "end": 11874
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 11875,
    "end": 11881
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 11882,
    "end": 11903
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11903,
    "end": 11904
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11904,
    "end": 11905
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11906,
    "end": 11913
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11914,
    "end": 11926
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11926,
    "end": 11927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11927,
    "end": 11928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11928,
    "end": 11929
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11930,
    "end": 11931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11940,
    "end": 11941
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 11950,
    "end": 11964
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11964,
    "end": 11965
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11965,
    "end": 11966
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 11967,
    "end": 11974
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 11975,
    "end": 11987
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 11987,
    "end": 11988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11988,
    "end": 11989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11989,
    "end": 11990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11991,
    "end": 11992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12001,
    "end": 12002
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 12011,
    "end": 12018
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 12019,
    "end": 12034
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12034,
    "end": 12035
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12035,
    "end": 12036
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12037,
    "end": 12044
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 12045,
    "end": 12057
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12057,
    "end": 12058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12058,
    "end": 12059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12059,
    "end": 12060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12061,
    "end": 12062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12071,
    "end": 12072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12077,
    "end": 12078
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 12084,
    "end": 12089
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParameters",
    "start": 12090,
    "end": 12130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12131,
    "end": 12132
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 12141,
    "end": 12147
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 12148,
    "end": 12168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12168,
    "end": 12169
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12169,
    "end": 12170
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12171,
    "end": 12178
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12179,
    "end": 12190
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12190,
    "end": 12191
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12191,
    "end": 12192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12192,
    "end": 12193
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12194,
    "end": 12195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12204,
    "end": 12205
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 12214,
    "end": 12221
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 12222,
    "end": 12228
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 12229,
    "end": 12250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12250,
    "end": 12251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12251,
    "end": 12252
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12253,
    "end": 12260
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12261,
    "end": 12272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12272,
    "end": 12273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12273,
    "end": 12274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12274,
    "end": 12275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12276,
    "end": 12277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12286,
    "end": 12287
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 12296,
    "end": 12310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12310,
    "end": 12311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12311,
    "end": 12312
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12313,
    "end": 12320
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12321,
    "end": 12332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12332,
    "end": 12333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12333,
    "end": 12334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12334,
    "end": 12335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12336,
    "end": 12337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12346,
    "end": 12347
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 12356,
    "end": 12363
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 12364,
    "end": 12379
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12379,
    "end": 12380
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12380,
    "end": 12381
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12382,
    "end": 12389
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12390,
    "end": 12401
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12401,
    "end": 12402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12402,
    "end": 12403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12403,
    "end": 12404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12405,
    "end": 12406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12415,
    "end": 12416
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12421,
    "end": 12422
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12428,
    "end": 12434
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12435,
    "end": 12443
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateTypeParameters",
    "start": 12444,
    "end": 12483
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12483,
    "end": 12484
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12484,
    "end": 12485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12486,
    "end": 12493
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 12494,
    "end": 12506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12506,
    "end": 12507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12507,
    "end": 12508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12508,
    "end": 12509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12510,
    "end": 12511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12517,
    "end": 12518
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12524,
    "end": 12530
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12531,
    "end": 12539
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParameters",
    "start": 12540,
    "end": 12578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12578,
    "end": 12579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12579,
    "end": 12580
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12581,
    "end": 12588
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12589,
    "end": 12600
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12600,
    "end": 12601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12601,
    "end": 12602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12602,
    "end": 12603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12604,
    "end": 12605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12610,
    "end": 12611
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12617,
    "end": 12625
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateTypeParameters",
    "start": 12626,
    "end": 12666
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12666,
    "end": 12667
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12667,
    "end": 12668
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12669,
    "end": 12676
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 12677,
    "end": 12689
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12689,
    "end": 12690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12690,
    "end": 12691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12691,
    "end": 12692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12693,
    "end": 12694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12699,
    "end": 12700
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 12706,
    "end": 12714
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParameters",
    "start": 12715,
    "end": 12754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12754,
    "end": 12755
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12755,
    "end": 12756
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 12757,
    "end": 12764
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12765,
    "end": 12776
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12776,
    "end": 12777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12777,
    "end": 12778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12778,
    "end": 12779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12780,
    "end": 12781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12786,
    "end": 12787
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12793,
    "end": 12799
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12800,
    "end": 12809
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 12810,
    "end": 12863
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12864,
    "end": 12865
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 12874,
    "end": 12877
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12878,
    "end": 12879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12879,
    "end": 12880
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12880,
    "end": 12881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12881,
    "end": 12882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12882,
    "end": 12883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12883,
    "end": 12884
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12885,
    "end": 12896
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12896,
    "end": 12897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12906,
    "end": 12907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12907,
    "end": 12908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12908,
    "end": 12909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12909,
    "end": 12910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12910,
    "end": 12911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12911,
    "end": 12912
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12913,
    "end": 12924
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12924,
    "end": 12925
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 12934,
    "end": 12942
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12942,
    "end": 12943
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12943,
    "end": 12944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 12944,
    "end": 12945
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12945,
    "end": 12946
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12946,
    "end": 12947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12947,
    "end": 12948
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 12949,
    "end": 12960
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12960,
    "end": 12961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12966,
    "end": 12967
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12973,
    "end": 12982
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 12983,
    "end": 13037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13038,
    "end": 13039
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 13048,
    "end": 13051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13052,
    "end": 13053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13053,
    "end": 13054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13054,
    "end": 13055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13055,
    "end": 13056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13056,
    "end": 13057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13057,
    "end": 13058
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 13059,
    "end": 13070
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13070,
    "end": 13071
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13080,
    "end": 13081
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13081,
    "end": 13082
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13082,
    "end": 13083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13083,
    "end": 13084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13084,
    "end": 13085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13085,
    "end": 13086
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 13087,
    "end": 13098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13098,
    "end": 13099
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 13108,
    "end": 13116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13116,
    "end": 13117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13117,
    "end": 13118
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13118,
    "end": 13119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13119,
    "end": 13120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13120,
    "end": 13121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13121,
    "end": 13122
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 13123,
    "end": 13134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 13134,
    "end": 13135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13140,
    "end": 13141
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 13147,
    "end": 13153
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 13154,
    "end": 13159
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParametersWithoutExtends",
    "start": 13160,
    "end": 13213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13214,
    "end": 13215
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 13224,
    "end": 13230
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 13231,
    "end": 13251
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13251,
    "end": 13252
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13252,
    "end": 13253
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13253,
    "end": 13254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13254,
    "end": 13255
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13255,
    "end": 13256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13257,
    "end": 13258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13267,
    "end": 13268
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 13277,
    "end": 13284
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 13285,
    "end": 13291
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 13292,
    "end": 13313
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13313,
    "end": 13314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13314,
    "end": 13315
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13315,
    "end": 13316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13316,
    "end": 13317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13317,
    "end": 13318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13319,
    "end": 13320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13329,
    "end": 13330
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 13339,
    "end": 13353
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13353,
    "end": 13354
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13354,
    "end": 13355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13355,
    "end": 13356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13356,
    "end": 13357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13357,
    "end": 13358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13359,
    "end": 13360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13369,
    "end": 13370
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 13379,
    "end": 13386
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 13387,
    "end": 13402
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13402,
    "end": 13403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13403,
    "end": 13404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13404,
    "end": 13405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13405,
    "end": 13406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13406,
    "end": 13407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13408,
    "end": 13409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13418,
    "end": 13419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13424,
    "end": 13425
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 13430,
    "end": 13435
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParametersWithoutExtends",
    "start": 13436,
    "end": 13490
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13491,
    "end": 13492
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 13501,
    "end": 13507
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 13508,
    "end": 13528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13528,
    "end": 13529
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13529,
    "end": 13530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13530,
    "end": 13531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13531,
    "end": 13532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13532,
    "end": 13533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13534,
    "end": 13535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13544,
    "end": 13545
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 13554,
    "end": 13561
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 13562,
    "end": 13568
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 13569,
    "end": 13590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13590,
    "end": 13591
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13591,
    "end": 13592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13592,
    "end": 13593
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13593,
    "end": 13594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13594,
    "end": 13595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13596,
    "end": 13597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13606,
    "end": 13607
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 13616,
    "end": 13630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13630,
    "end": 13631
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13631,
    "end": 13632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13632,
    "end": 13633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13633,
    "end": 13634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13634,
    "end": 13635
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13636,
    "end": 13637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13646,
    "end": 13647
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 13656,
    "end": 13663
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 13664,
    "end": 13679
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13679,
    "end": 13680
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13680,
    "end": 13681
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13681,
    "end": 13682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13682,
    "end": 13683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13683,
    "end": 13684
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13685,
    "end": 13686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13695,
    "end": 13696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13701,
    "end": 13702
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 13708,
    "end": 13714
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13715,
    "end": 13723
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParametersWithoutExtends",
    "start": 13724,
    "end": 13776
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13776,
    "end": 13777
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13777,
    "end": 13778
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13778,
    "end": 13779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13779,
    "end": 13780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13780,
    "end": 13781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13782,
    "end": 13783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13788,
    "end": 13789
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 13795,
    "end": 13803
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParametersWithoutExtends",
    "start": 13804,
    "end": 13857
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 13857,
    "end": 13858
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 13858,
    "end": 13859
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13859,
    "end": 13860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 13860,
    "end": 13861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 13861,
    "end": 13862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13863,
    "end": 13864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13869,
    "end": 13870
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 13871,
    "end": 13872
  }
]
```
