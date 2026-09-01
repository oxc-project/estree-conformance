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
                      "start": 226,
                      "end": 227
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 236,
                      "end": 248
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 226,
                    "end": 248
                  }
                ],
                "start": 225,
                "end": 249
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
                    "start": 253,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 253,
                  "end": 265
                },
                "start": 251,
                "end": 265
              },
              "start": 221,
              "end": 266
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
                      "start": 377,
                      "end": 378
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 387,
                        "end": 399
                      },
                      "typeArguments": null,
                      "start": 387,
                      "end": 399
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 377,
                    "end": 399
                  }
                ],
                "start": 376,
                "end": 400
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
                    "start": 404,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 404,
                  "end": 416
                },
                "start": 402,
                "end": 416
              },
              "start": 376,
              "end": 417
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 511,
                "end": 519
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
                      "start": 520,
                      "end": 521
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 530,
                        "end": 542
                      },
                      "typeArguments": null,
                      "start": 530,
                      "end": 542
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 520,
                    "end": 542
                  }
                ],
                "start": 519,
                "end": 543
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
                    "start": 547,
                    "end": 559
                  },
                  "typeArguments": null,
                  "start": 547,
                  "end": 559
                },
                "start": 545,
                "end": 559
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 511,
              "end": 560
            }
          ],
          "start": 112,
          "end": 562
        },
        "declare": false,
        "start": 61,
        "end": 562
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 562
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
          "start": 581,
          "end": 620
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
                      "start": 632,
                      "end": 633
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 642,
                        "end": 653
                      },
                      "typeArguments": null,
                      "start": 642,
                      "end": 653
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 632,
                    "end": 653
                  }
                ],
                "start": 631,
                "end": 654
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
                    "start": 658,
                    "end": 669
                  },
                  "typeArguments": null,
                  "start": 658,
                  "end": 669
                },
                "start": 656,
                "end": 669
              },
              "start": 627,
              "end": 670
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
                      "start": 676,
                      "end": 677
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 697
                      },
                      "typeArguments": null,
                      "start": 686,
                      "end": 697
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 676,
                    "end": 697
                  }
                ],
                "start": 675,
                "end": 698
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
                    "start": 702,
                    "end": 713
                  },
                  "typeArguments": null,
                  "start": 702,
                  "end": 713
                },
                "start": 700,
                "end": 713
              },
              "start": 675,
              "end": 714
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 727
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
                      "start": 728,
                      "end": 729
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 738,
                        "end": 749
                      },
                      "typeArguments": null,
                      "start": 738,
                      "end": 749
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 728,
                    "end": 749
                  }
                ],
                "start": 727,
                "end": 750
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
                    "start": 754,
                    "end": 765
                  },
                  "typeArguments": null,
                  "start": 754,
                  "end": 765
                },
                "start": 752,
                "end": 765
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 719,
              "end": 766
            }
          ],
          "start": 621,
          "end": 768
        },
        "declare": false,
        "start": 571,
        "end": 768
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 564,
      "end": 768
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 780,
        "end": 821
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
                    "start": 833,
                    "end": 834
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 855
                    },
                    "typeArguments": null,
                    "start": 843,
                    "end": 855
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 833,
                  "end": 855
                }
              ],
              "start": 832,
              "end": 856
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
                  "start": 860,
                  "end": 872
                },
                "typeArguments": null,
                "start": 860,
                "end": 872
              },
              "start": 858,
              "end": 872
            },
            "start": 828,
            "end": 873
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
                    "start": 879,
                    "end": 880
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 889,
                      "end": 901
                    },
                    "typeArguments": null,
                    "start": 889,
                    "end": 901
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 879,
                  "end": 901
                }
              ],
              "start": 878,
              "end": 902
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
                  "start": 906,
                  "end": 918
                },
                "typeArguments": null,
                "start": 906,
                "end": 918
              },
              "start": 904,
              "end": 918
            },
            "start": 878,
            "end": 919
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 924,
              "end": 932
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
                    "start": 933,
                    "end": 934
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 943,
                      "end": 955
                    },
                    "typeArguments": null,
                    "start": 943,
                    "end": 955
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 933,
                  "end": 955
                }
              ],
              "start": 932,
              "end": 956
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
                  "start": 960,
                  "end": 972
                },
                "typeArguments": null,
                "start": 960,
                "end": 972
              },
              "start": 958,
              "end": 972
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 924,
            "end": 973
          }
        ],
        "start": 822,
        "end": 975
      },
      "declare": false,
      "start": 770,
      "end": 975
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 987,
        "end": 1027
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
                    "start": 1039,
                    "end": 1040
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1049,
                      "end": 1060
                    },
                    "typeArguments": null,
                    "start": 1049,
                    "end": 1060
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1039,
                  "end": 1060
                }
              ],
              "start": 1038,
              "end": 1061
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
                  "start": 1065,
                  "end": 1076
                },
                "typeArguments": null,
                "start": 1065,
                "end": 1076
              },
              "start": 1063,
              "end": 1076
            },
            "start": 1034,
            "end": 1077
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
                    "start": 1083,
                    "end": 1084
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1093,
                      "end": 1104
                    },
                    "typeArguments": null,
                    "start": 1093,
                    "end": 1104
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1083,
                  "end": 1104
                }
              ],
              "start": 1082,
              "end": 1105
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
                  "start": 1109,
                  "end": 1120
                },
                "typeArguments": null,
                "start": 1109,
                "end": 1120
              },
              "start": 1107,
              "end": 1120
            },
            "start": 1082,
            "end": 1121
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1126,
              "end": 1134
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
                    "start": 1135,
                    "end": 1136
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1145,
                      "end": 1156
                    },
                    "typeArguments": null,
                    "start": 1145,
                    "end": 1156
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1135,
                  "end": 1156
                }
              ],
              "start": 1134,
              "end": 1157
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
                  "start": 1161,
                  "end": 1172
                },
                "typeArguments": null,
                "start": 1161,
                "end": 1172
              },
              "start": 1159,
              "end": 1172
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1126,
            "end": 1173
          }
        ],
        "start": 1028,
        "end": 1175
      },
      "declare": false,
      "start": 977,
      "end": 1175
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
          "start": 1190,
          "end": 1230
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
                "start": 1342,
                "end": 1362
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
                        "start": 1363,
                        "end": 1364
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1373,
                          "end": 1385
                        },
                        "typeArguments": null,
                        "start": 1373,
                        "end": 1385
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1363,
                      "end": 1385
                    }
                  ],
                  "start": 1362,
                  "end": 1386
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1389,
                  "end": 1396
                },
                "expression": false,
                "start": 1362,
                "end": 1396
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1335,
              "end": 1396
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
                "start": 1416,
                "end": 1437
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
                        "start": 1438,
                        "end": 1439
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1448,
                          "end": 1460
                        },
                        "typeArguments": null,
                        "start": 1448,
                        "end": 1460
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1438,
                      "end": 1460
                    }
                  ],
                  "start": 1437,
                  "end": 1461
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1464,
                  "end": 1483
                },
                "expression": false,
                "start": 1437,
                "end": 1483
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1401,
              "end": 1483
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
                "start": 1579,
                "end": 1593
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
                        "start": 1594,
                        "end": 1595
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1604,
                          "end": 1616
                        },
                        "typeArguments": null,
                        "start": 1604,
                        "end": 1616
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1594,
                      "end": 1616
                    }
                  ],
                  "start": 1593,
                  "end": 1617
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1620,
                  "end": 1627
                },
                "expression": false,
                "start": 1593,
                "end": 1627
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1579,
              "end": 1627
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
                "start": 1640,
                "end": 1655
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
                        "start": 1656,
                        "end": 1657
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1666,
                          "end": 1678
                        },
                        "typeArguments": null,
                        "start": 1666,
                        "end": 1678
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1656,
                      "end": 1678
                    }
                  ],
                  "start": 1655,
                  "end": 1679
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1682,
                  "end": 1701
                },
                "expression": false,
                "start": 1655,
                "end": 1701
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1632,
              "end": 1701
            }
          ],
          "start": 1231,
          "end": 1703
        },
        "abstract": false,
        "declare": false,
        "start": 1184,
        "end": 1703
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1177,
      "end": 1703
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
          "start": 1718,
          "end": 1757
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
                "start": 1771,
                "end": 1791
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
                        "start": 1792,
                        "end": 1793
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1802,
                          "end": 1813
                        },
                        "typeArguments": null,
                        "start": 1802,
                        "end": 1813
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1792,
                      "end": 1813
                    }
                  ],
                  "start": 1791,
                  "end": 1814
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1817,
                  "end": 1824
                },
                "expression": false,
                "start": 1791,
                "end": 1824
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1764,
              "end": 1824
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
                "start": 1844,
                "end": 1865
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
                        "start": 1866,
                        "end": 1867
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1876,
                          "end": 1887
                        },
                        "typeArguments": null,
                        "start": 1876,
                        "end": 1887
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1866,
                      "end": 1887
                    }
                  ],
                  "start": 1865,
                  "end": 1888
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1891,
                  "end": 1899
                },
                "expression": false,
                "start": 1865,
                "end": 1899
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1829,
              "end": 1899
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
                "start": 1904,
                "end": 1918
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
                        "start": 1919,
                        "end": 1920
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1929,
                          "end": 1940
                        },
                        "typeArguments": null,
                        "start": 1929,
                        "end": 1940
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1919,
                      "end": 1940
                    }
                  ],
                  "start": 1918,
                  "end": 1941
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1944,
                  "end": 1951
                },
                "expression": false,
                "start": 1918,
                "end": 1951
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1904,
              "end": 1951
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
                "start": 1964,
                "end": 1979
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
                        "start": 1980,
                        "end": 1981
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1990,
                          "end": 2001
                        },
                        "typeArguments": null,
                        "start": 1990,
                        "end": 2001
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1980,
                      "end": 2001
                    }
                  ],
                  "start": 1979,
                  "end": 2002
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2005,
                  "end": 2012
                },
                "expression": false,
                "start": 1979,
                "end": 2012
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 1956,
              "end": 2012
            }
          ],
          "start": 1758,
          "end": 2014
        },
        "abstract": false,
        "declare": false,
        "start": 1712,
        "end": 2014
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1705,
      "end": 2014
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
        "start": 2022,
        "end": 2063
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
              "start": 2077,
              "end": 2097
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
                      "start": 2098,
                      "end": 2099
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2108,
                        "end": 2120
                      },
                      "typeArguments": null,
                      "start": 2108,
                      "end": 2120
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2098,
                    "end": 2120
                  }
                ],
                "start": 2097,
                "end": 2121
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2124,
                "end": 2131
              },
              "expression": false,
              "start": 2097,
              "end": 2131
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2070,
            "end": 2131
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
              "start": 2151,
              "end": 2172
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
                      "start": 2173,
                      "end": 2174
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2183,
                        "end": 2195
                      },
                      "typeArguments": null,
                      "start": 2183,
                      "end": 2195
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2173,
                    "end": 2195
                  }
                ],
                "start": 2172,
                "end": 2196
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2199,
                "end": 2218
              },
              "expression": false,
              "start": 2172,
              "end": 2218
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2136,
            "end": 2218
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
              "start": 2223,
              "end": 2237
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
                      "start": 2238,
                      "end": 2239
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2248,
                        "end": 2260
                      },
                      "typeArguments": null,
                      "start": 2248,
                      "end": 2260
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2238,
                    "end": 2260
                  }
                ],
                "start": 2237,
                "end": 2261
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2264,
                "end": 2271
              },
              "expression": false,
              "start": 2237,
              "end": 2271
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2223,
            "end": 2271
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
              "start": 2284,
              "end": 2299
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
                      "start": 2300,
                      "end": 2301
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2310,
                        "end": 2322
                      },
                      "typeArguments": null,
                      "start": 2310,
                      "end": 2322
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2300,
                    "end": 2322
                  }
                ],
                "start": 2299,
                "end": 2323
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2326,
                "end": 2345
              },
              "expression": false,
              "start": 2299,
              "end": 2345
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2276,
            "end": 2345
          }
        ],
        "start": 2064,
        "end": 2347
      },
      "abstract": false,
      "declare": false,
      "start": 2016,
      "end": 2347
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
        "start": 2355,
        "end": 2395
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
              "start": 2409,
              "end": 2429
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
                      "start": 2430,
                      "end": 2431
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2440,
                        "end": 2451
                      },
                      "typeArguments": null,
                      "start": 2440,
                      "end": 2451
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2430,
                    "end": 2451
                  }
                ],
                "start": 2429,
                "end": 2452
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2455,
                "end": 2462
              },
              "expression": false,
              "start": 2429,
              "end": 2462
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2402,
            "end": 2462
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
              "start": 2482,
              "end": 2503
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
                      "start": 2504,
                      "end": 2505
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2525
                      },
                      "typeArguments": null,
                      "start": 2514,
                      "end": 2525
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2504,
                    "end": 2525
                  }
                ],
                "start": 2503,
                "end": 2526
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2529,
                "end": 2536
              },
              "expression": false,
              "start": 2503,
              "end": 2536
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2467,
            "end": 2536
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
              "start": 2541,
              "end": 2555
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
                      "start": 2556,
                      "end": 2557
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2566,
                        "end": 2577
                      },
                      "typeArguments": null,
                      "start": 2566,
                      "end": 2577
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2556,
                    "end": 2577
                  }
                ],
                "start": 2555,
                "end": 2578
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2581,
                "end": 2588
              },
              "expression": false,
              "start": 2555,
              "end": 2588
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2541,
            "end": 2588
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
              "start": 2601,
              "end": 2616
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
                      "start": 2617,
                      "end": 2618
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2627,
                        "end": 2638
                      },
                      "typeArguments": null,
                      "start": 2627,
                      "end": 2638
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2617,
                    "end": 2638
                  }
                ],
                "start": 2616,
                "end": 2639
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2642,
                "end": 2649
              },
              "expression": false,
              "start": 2616,
              "end": 2649
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2593,
            "end": 2649
          }
        ],
        "start": 2396,
        "end": 2651
      },
      "abstract": false,
      "declare": false,
      "start": 2349,
      "end": 2651
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
          "start": 2740,
          "end": 2779
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
                "start": 2780,
                "end": 2781
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2790,
                  "end": 2802
                },
                "typeArguments": null,
                "start": 2790,
                "end": 2802
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2780,
              "end": 2802
            }
          ],
          "start": 2779,
          "end": 2803
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2806,
          "end": 2809
        },
        "expression": false,
        "start": 2731,
        "end": 2809
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2724,
      "end": 2809
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
          "start": 2827,
          "end": 2865
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
                "start": 2866,
                "end": 2867
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2876,
                  "end": 2887
                },
                "typeArguments": null,
                "start": 2876,
                "end": 2887
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2866,
              "end": 2887
            }
          ],
          "start": 2865,
          "end": 2888
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 2891,
          "end": 2894
        },
        "expression": false,
        "start": 2818,
        "end": 2894
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2811,
      "end": 2894
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2905,
        "end": 2945
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
              "start": 2946,
              "end": 2947
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2956,
                "end": 2968
              },
              "typeArguments": null,
              "start": 2956,
              "end": 2968
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2946,
            "end": 2968
          }
        ],
        "start": 2945,
        "end": 2969
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2972,
        "end": 2975
      },
      "expression": false,
      "start": 2896,
      "end": 2975
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 2986,
        "end": 3025
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
              "start": 3026,
              "end": 3027
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3036,
                "end": 3047
              },
              "typeArguments": null,
              "start": 3036,
              "end": 3047
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3026,
            "end": 3047
          }
        ],
        "start": 3025,
        "end": 3048
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3051,
        "end": 3054
      },
      "expression": false,
      "start": 2977,
      "end": 3054
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
          "start": 3073,
          "end": 3126
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
                      "start": 3138,
                      "end": 3139
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3138,
                    "end": 3139
                  }
                ],
                "start": 3137,
                "end": 3140
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
                    "start": 3144,
                    "end": 3155
                  },
                  "typeArguments": null,
                  "start": 3144,
                  "end": 3155
                },
                "start": 3142,
                "end": 3155
              },
              "start": 3133,
              "end": 3156
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
                      "start": 3162,
                      "end": 3163
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3162,
                    "end": 3163
                  }
                ],
                "start": 3161,
                "end": 3164
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
                    "start": 3168,
                    "end": 3179
                  },
                  "typeArguments": null,
                  "start": 3168,
                  "end": 3179
                },
                "start": 3166,
                "end": 3179
              },
              "start": 3161,
              "end": 3180
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 3185,
                "end": 3193
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
                      "start": 3194,
                      "end": 3195
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3194,
                    "end": 3195
                  }
                ],
                "start": 3193,
                "end": 3196
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
                    "start": 3200,
                    "end": 3211
                  },
                  "typeArguments": null,
                  "start": 3200,
                  "end": 3211
                },
                "start": 3198,
                "end": 3211
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3185,
              "end": 3212
            }
          ],
          "start": 3127,
          "end": 3214
        },
        "declare": false,
        "start": 3063,
        "end": 3214
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3056,
      "end": 3214
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateInterfaceWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3226,
        "end": 3280
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
                    "start": 3292,
                    "end": 3293
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3292,
                  "end": 3293
                }
              ],
              "start": 3291,
              "end": 3294
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
                  "start": 3298,
                  "end": 3309
                },
                "typeArguments": null,
                "start": 3298,
                "end": 3309
              },
              "start": 3296,
              "end": 3309
            },
            "start": 3287,
            "end": 3310
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
                    "start": 3316,
                    "end": 3317
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3316,
                  "end": 3317
                }
              ],
              "start": 3315,
              "end": 3318
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
                  "start": 3322,
                  "end": 3333
                },
                "typeArguments": null,
                "start": 3322,
                "end": 3333
              },
              "start": 3320,
              "end": 3333
            },
            "start": 3315,
            "end": 3334
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 3339,
              "end": 3347
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
                    "start": 3348,
                    "end": 3349
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3348,
                  "end": 3349
                }
              ],
              "start": 3347,
              "end": 3350
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
                  "start": 3354,
                  "end": 3365
                },
                "typeArguments": null,
                "start": 3354,
                "end": 3365
              },
              "start": 3352,
              "end": 3365
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3339,
            "end": 3366
          }
        ],
        "start": 3281,
        "end": 3368
      },
      "declare": false,
      "start": 3216,
      "end": 3368
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
          "start": 3383,
          "end": 3436
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
                "start": 3450,
                "end": 3470
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
                        "start": 3471,
                        "end": 3472
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3471,
                      "end": 3472
                    }
                  ],
                  "start": 3470,
                  "end": 3473
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3476,
                  "end": 3483
                },
                "expression": false,
                "start": 3470,
                "end": 3483
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3443,
              "end": 3483
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
                "start": 3503,
                "end": 3524
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
                        "start": 3525,
                        "end": 3526
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3525,
                      "end": 3526
                    }
                  ],
                  "start": 3524,
                  "end": 3527
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3530,
                  "end": 3537
                },
                "expression": false,
                "start": 3524,
                "end": 3537
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3488,
              "end": 3537
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
                "start": 3542,
                "end": 3556
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
                        "start": 3557,
                        "end": 3558
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3557,
                      "end": 3558
                    }
                  ],
                  "start": 3556,
                  "end": 3559
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3562,
                  "end": 3569
                },
                "expression": false,
                "start": 3556,
                "end": 3569
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3542,
              "end": 3569
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
                "start": 3582,
                "end": 3597
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
                        "start": 3598,
                        "end": 3599
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3598,
                      "end": 3599
                    }
                  ],
                  "start": 3597,
                  "end": 3600
                },
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3603,
                  "end": 3610
                },
                "expression": false,
                "start": 3597,
                "end": 3610
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3574,
              "end": 3610
            }
          ],
          "start": 3437,
          "end": 3612
        },
        "abstract": false,
        "declare": false,
        "start": 3377,
        "end": 3612
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3370,
      "end": 3612
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
        "start": 3619,
        "end": 3673
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
              "start": 3687,
              "end": 3707
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
                      "start": 3708,
                      "end": 3709
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3708,
                    "end": 3709
                  }
                ],
                "start": 3707,
                "end": 3710
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3713,
                "end": 3720
              },
              "expression": false,
              "start": 3707,
              "end": 3720
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3680,
            "end": 3720
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
              "start": 3740,
              "end": 3761
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
                      "start": 3762,
                      "end": 3763
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3762,
                    "end": 3763
                  }
                ],
                "start": 3761,
                "end": 3764
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3767,
                "end": 3774
              },
              "expression": false,
              "start": 3761,
              "end": 3774
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3725,
            "end": 3774
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
              "start": 3779,
              "end": 3793
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
                      "start": 3794,
                      "end": 3795
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3794,
                    "end": 3795
                  }
                ],
                "start": 3793,
                "end": 3796
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3799,
                "end": 3806
              },
              "expression": false,
              "start": 3793,
              "end": 3806
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3779,
            "end": 3806
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
              "start": 3819,
              "end": 3834
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
                      "start": 3835,
                      "end": 3836
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3835,
                    "end": 3836
                  }
                ],
                "start": 3834,
                "end": 3837
              },
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3840,
                "end": 3847
              },
              "expression": false,
              "start": 3834,
              "end": 3847
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3811,
            "end": 3847
          }
        ],
        "start": 3674,
        "end": 3849
      },
      "abstract": false,
      "declare": false,
      "start": 3613,
      "end": 3849
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
          "start": 3867,
          "end": 3919
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
                "start": 3920,
                "end": 3921
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3920,
              "end": 3921
            }
          ],
          "start": 3919,
          "end": 3922
        },
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 3925,
          "end": 3928
        },
        "expression": false,
        "start": 3858,
        "end": 3928
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3851,
      "end": 3928
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateFunctionWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 3939,
        "end": 3992
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
              "start": 3993,
              "end": 3994
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3993,
            "end": 3994
          }
        ],
        "start": 3992,
        "end": 3995
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 3998,
        "end": 4001
      },
      "expression": false,
      "start": 3930,
      "end": 4001
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4001
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
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 228,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 236,
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
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
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
    "value": "privateClass",
    "start": 253,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 377,
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
    "value": "privateClass",
    "start": 387,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
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
    "value": "privateClass",
    "start": 404,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 511,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 520,
    "end": 521
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 522,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 530,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 547,
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
    "type": "Keyword",
    "value": "export",
    "start": 564,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 571,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParameters",
    "start": 581,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 627,
    "end": 630
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
    "value": "publicClass",
    "start": 642,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 656,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 658,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 676,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 678,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 686,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 702,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 719,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 728,
    "end": 729
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 730,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 738,
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
    "value": "publicClass",
    "start": 754,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 770,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPrivateTypeParameters",
    "start": 780,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 822,
    "end": 823
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 828,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 833,
    "end": 834
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 835,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 843,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 858,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 860,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 879,
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
    "value": "privateClass",
    "start": 889,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 906,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 924,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 933,
    "end": 934
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 935,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 943,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 960,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 977,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParameters",
    "start": 987,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1034,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1041,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1049,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1063,
    "end": 1064
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1065,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077
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
    "value": "publicClass",
    "start": 1093,
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
    "value": "(",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1109,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1126,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1137,
    "end": 1144
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1145,
    "end": 1156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1158,
    "end": 1159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1161,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1184,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPrivateTypeParameters",
    "start": 1190,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1335,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 1342,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1365,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1373,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1385,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1401,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1409,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1416,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1440,
    "end": 1447
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1448,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 1579,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1593,
    "end": 1594
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1596,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1604,
    "end": 1616
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 1640,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1658,
    "end": 1665
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 1666,
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
    "type": "Punctuator",
    "value": ")",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1705,
    "end": 1711
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1712,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParameters",
    "start": 1718,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1764,
    "end": 1770
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 1771,
    "end": 1791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1791,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1794,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1802,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1829,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1837,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 1844,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1866,
    "end": 1867
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1868,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1876,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1888,
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
    "value": "{",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 1904,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1921,
    "end": 1928
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1929,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1956,
    "end": 1963
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 1964,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1982,
    "end": 1989
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 1990,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2016,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPrivateTypeParameters",
    "start": 2022,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 2077,
    "end": 2097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2100,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2108,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2122,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2136,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2144,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 2151,
    "end": 2172
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2172,
    "end": 2173
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2175,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2183,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2217,
    "end": 2218
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 2223,
    "end": 2237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2238,
    "end": 2239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2240,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2248,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2276,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 2284,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2302,
    "end": 2309
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2310,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2326,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2349,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParameters",
    "start": 2355,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2402,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 2409,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2432,
    "end": 2439
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2440,
    "end": 2451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2451,
    "end": 2452
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2452,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2453,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2455,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2467,
    "end": 2474
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2475,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 2482,
    "end": 2503
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2506,
    "end": 2513
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2514,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2535,
    "end": 2536
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 2541,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2558,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2566,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2578,
    "end": 2579
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2593,
    "end": 2600
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 2601,
    "end": 2616
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
    "type": "Keyword",
    "value": "extends",
    "start": 2619,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2627,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2724,
    "end": 2730
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2731,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPrivateTypeParameters",
    "start": 2740,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2782,
    "end": 2789
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2790,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2803,
    "end": 2804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2804,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2806,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2811,
    "end": 2817
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2818,
    "end": 2826
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParameters",
    "start": 2827,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2865,
    "end": 2866
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2866,
    "end": 2867
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2868,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 2876,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2896,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPrivateTypeParameters",
    "start": 2905,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2946,
    "end": 2947
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2948,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 2956,
    "end": 2968
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2970,
    "end": 2971
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2972,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2977,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParameters",
    "start": 2986,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3025,
    "end": 3026
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3028,
    "end": 3035
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3036,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3056,
    "end": 3062
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3063,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "publicInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 3073,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3127,
    "end": 3128
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3133,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3144,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3164,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3166,
    "end": 3167
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3168,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3185,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3200,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3216,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "privateInterfaceWithPublicTypeParametersWithoutExtends",
    "start": 3226,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3287,
    "end": 3290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3291,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3294,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3298,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3316,
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
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3322,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3339,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3347,
    "end": 3348
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3348,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3350,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 3354,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3370,
    "end": 3376
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3377,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "publicClassWithWithPublicTypeParametersWithoutExtends",
    "start": 3383,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3443,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 3450,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3476,
    "end": 3477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3488,
    "end": 3495
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3496,
    "end": 3502
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 3503,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3525,
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
    "value": "(",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3528,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 3542,
    "end": 3556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3556,
    "end": 3557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3557,
    "end": 3558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3558,
    "end": 3559
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3559,
    "end": 3560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3560,
    "end": 3561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3562,
    "end": 3563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3568,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3574,
    "end": 3581
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 3582,
    "end": 3597
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3597,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3613,
    "end": 3618
  },
  {
    "type": "Identifier",
    "value": "privateClassWithWithPublicTypeParametersWithoutExtends",
    "start": 3619,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3674,
    "end": 3675
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3680,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "myPublicStaticMethod",
    "start": 3687,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3711,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3725,
    "end": 3732
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3733,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "myPrivateStaticMethod",
    "start": 3740,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3764,
    "end": 3765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3767,
    "end": 3768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3773,
    "end": 3774
  },
  {
    "type": "Identifier",
    "value": "myPublicMethod",
    "start": 3779,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3794,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3811,
    "end": 3818
  },
  {
    "type": "Identifier",
    "value": "myPrivateMethod",
    "start": 3819,
    "end": 3834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3834,
    "end": 3835
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3835,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3837,
    "end": 3838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3851,
    "end": 3857
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3858,
    "end": 3866
  },
  {
    "type": "Identifier",
    "value": "publicFunctionWithPublicTypeParametersWithoutExtends",
    "start": 3867,
    "end": 3919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3919,
    "end": 3920
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3920,
    "end": 3921
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3921,
    "end": 3922
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3922,
    "end": 3923
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3923,
    "end": 3924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3930,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "privateFunctionWithPublicTypeParametersWithoutExtends",
    "start": 3939,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3993,
    "end": 3994
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3994,
    "end": 3995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3995,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3998,
    "end": 3999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4000,
    "end": 4001
  }
]
```
