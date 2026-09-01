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
        "name": "T0",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 151
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 156
        },
        "typeArguments": null,
        "start": 154,
        "end": 156
      },
      "declare": false,
      "start": 144,
      "end": 156
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 166
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0_2",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 173
        },
        "typeArguments": null,
        "start": 169,
        "end": 173
      },
      "declare": false,
      "start": 157,
      "end": 173
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 183
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0_3",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 190
        },
        "typeArguments": null,
        "start": 186,
        "end": 190
      },
      "declare": false,
      "start": 174,
      "end": 190
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T0_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 200
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T0_1",
          "optional": false,
          "typeAnnotation": null,
          "start": 203,
          "end": 207
        },
        "typeArguments": null,
        "start": 203,
        "end": 207
      },
      "declare": false,
      "start": 191,
      "end": 207
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 320
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
              "start": 321,
              "end": 322
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 321,
            "end": 322
          }
        ],
        "start": 320,
        "end": 323
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 324,
        "end": 326
      },
      "declare": false,
      "start": 309,
      "end": 326
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 332,
        "end": 334
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 338
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 341
              },
              "typeArguments": null,
              "start": 339,
              "end": 341
            }
          ],
          "start": 338,
          "end": 342
        },
        "start": 337,
        "end": 342
      },
      "declare": false,
      "start": 327,
      "end": 342
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 418
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 423
            },
            "typeArguments": null,
            "start": 421,
            "end": 423
          },
          {
            "type": "TSStringKeyword",
            "start": 426,
            "end": 432
          }
        ],
        "start": 421,
        "end": 432
      },
      "declare": false,
      "start": 411,
      "end": 432
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 439,
        "end": 440
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
              "start": 441,
              "end": 442
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 441,
            "end": 442
          }
        ],
        "start": 440,
        "end": 443
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 444,
        "end": 446
      },
      "abstract": false,
      "declare": false,
      "start": 433,
      "end": 446
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 456
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2_1",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 463
              },
              "typeArguments": null,
              "start": 459,
              "end": 463
            },
            "start": 459,
            "end": 465
          },
          {
            "type": "TSNumberKeyword",
            "start": 468,
            "end": 474
          }
        ],
        "start": 459,
        "end": 474
      },
      "declare": false,
      "start": 447,
      "end": 474
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 536,
        "end": 538
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T3",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 543
          },
          "typeArguments": null,
          "start": 541,
          "end": 543
        },
        "start": 541,
        "end": 545
      },
      "declare": false,
      "start": 531,
      "end": 545
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T4",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 617
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 621,
            "end": 627
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T4",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 631
            },
            "typeArguments": null,
            "start": 629,
            "end": 631
          }
        ],
        "start": 620,
        "end": 632
      },
      "declare": false,
      "start": 610,
      "end": 632
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
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 712,
                    "end": 714
                  },
                  "typeArguments": null,
                  "start": 712,
                  "end": 714
                },
                "start": 712,
                "end": 716
              },
              "start": 710,
              "end": 716
            },
            "start": 709,
            "end": 716
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 719,
            "end": 721
          },
          "definite": false,
          "start": 709,
          "end": 721
        }
      ],
      "declare": false,
      "start": 705,
      "end": 721
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T5",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 729
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 739,
          "end": 740
        },
        "typeArguments": null,
        "start": 732,
        "end": 740
      },
      "declare": false,
      "start": 722,
      "end": 740
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 750
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
              "start": 751,
              "end": 752
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 751,
            "end": 752
          }
        ],
        "start": 750,
        "end": 753
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 754,
        "end": 756
      },
      "abstract": false,
      "declare": false,
      "start": 742,
      "end": 756
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T6",
        "optional": false,
        "typeAnnotation": null,
        "start": 762,
        "end": 764
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T7",
              "optional": false,
              "typeAnnotation": null,
              "start": 767,
              "end": 769
            },
            "typeArguments": null,
            "start": 767,
            "end": 769
          },
          {
            "type": "TSNumberKeyword",
            "start": 772,
            "end": 778
          }
        ],
        "start": 767,
        "end": 778
      },
      "declare": false,
      "start": 757,
      "end": 778
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T7",
        "optional": false,
        "typeAnnotation": null,
        "start": 784,
        "end": 786
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "yy",
          "optional": false,
          "typeAnnotation": null,
          "start": 796,
          "end": 798
        },
        "typeArguments": null,
        "start": 789,
        "end": 798
      },
      "declare": false,
      "start": 779,
      "end": 798
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 808,
                    "end": 814
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T8",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 816,
                        "end": 818
                      },
                      "typeArguments": null,
                      "start": 816,
                      "end": 818
                    },
                    "start": 816,
                    "end": 820
                  }
                ],
                "start": 807,
                "end": 821
              },
              "start": 805,
              "end": 821
            },
            "start": 803,
            "end": 821
          },
          "init": null,
          "definite": false,
          "start": 803,
          "end": 821
        }
      ],
      "declare": false,
      "start": 799,
      "end": 822
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T8",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 830
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 833,
          "end": 834
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T6",
                "optional": false,
                "typeAnnotation": null,
                "start": 835,
                "end": 837
              },
              "typeArguments": null,
              "start": 835,
              "end": 837
            }
          ],
          "start": 834,
          "end": 838
        },
        "start": 833,
        "end": 838
      },
      "declare": false,
      "start": 823,
      "end": 838
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T9",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 862
      },
      "typeParameters": null,
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
              "name": "T9",
              "optional": false,
              "typeAnnotation": null,
              "start": 871,
              "end": 873
            },
            "typeArguments": null,
            "start": 871,
            "end": 873
          },
          "start": 868,
          "end": 873
        },
        "start": 865,
        "end": 873
      },
      "declare": false,
      "start": 855,
      "end": 873
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null,
        "start": 879,
        "end": 882
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 888
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 890,
                      "end": 893
                    },
                    "typeArguments": null,
                    "start": 890,
                    "end": 893
                  },
                  "start": 888,
                  "end": 893
                },
                "accessibility": null,
                "static": false,
                "start": 887,
                "end": 893
              }
            ],
            "start": 885,
            "end": 895
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSConstructSignatureDeclaration",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T10",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 907,
                          "end": 910
                        },
                        "typeArguments": null,
                        "start": 907,
                        "end": 910
                      },
                      "start": 905,
                      "end": 910
                    },
                    "start": 904,
                    "end": 910
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 913,
                    "end": 919
                  },
                  "start": 911,
                  "end": 919
                },
                "start": 900,
                "end": 919
              }
            ],
            "start": 898,
            "end": 921
          }
        ],
        "start": 885,
        "end": 921
      },
      "declare": false,
      "start": 874,
      "end": 921
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 930
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T12",
            "optional": false,
            "typeAnnotation": null,
            "start": 933,
            "end": 936
          },
          "typeArguments": null,
          "start": 933,
          "end": 936
        },
        "start": 933,
        "end": 938
      },
      "declare": false,
      "start": 922,
      "end": 938
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T12",
        "optional": false,
        "typeAnnotation": null,
        "start": 944,
        "end": 947
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T13",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 954
            },
            "typeArguments": null,
            "start": 951,
            "end": 954
          },
          {
            "type": "TSStringKeyword",
            "start": 956,
            "end": 962
          }
        ],
        "start": 950,
        "end": 963
      },
      "declare": false,
      "start": 939,
      "end": 963
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T13",
        "optional": false,
        "typeAnnotation": null,
        "start": 969,
        "end": 972
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "zz",
          "optional": false,
          "typeAnnotation": null,
          "start": 982,
          "end": 984
        },
        "typeArguments": null,
        "start": 975,
        "end": 984
      },
      "declare": false,
      "start": 964,
      "end": 984
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 995,
                      "end": 996
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T11",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 998,
                          "end": 1001
                        },
                        "typeArguments": null,
                        "start": 998,
                        "end": 1001
                      },
                      "start": 996,
                      "end": 1001
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 995,
                    "end": 1001
                  }
                ],
                "start": 993,
                "end": 1003
              },
              "start": 991,
              "end": 1003
            },
            "start": 989,
            "end": 1003
          },
          "init": null,
          "definite": false,
          "start": 989,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 985,
      "end": 1003
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 144,
  "end": 1004
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 144,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 149,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "T0",
    "start": 154,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 157,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "T0_1",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "T0_2",
    "start": 169,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 174,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "T0_2",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T0_3",
    "start": 186,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 191,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "T0_3",
    "start": 196,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "T0_1",
    "start": 203,
    "end": 207
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 309,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 327,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 332,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 339,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 411,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 426,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 433,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 447,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "T2_1",
    "start": 452,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "T2_1",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 468,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 531,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "T3",
    "start": 541,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 610,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 615,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 618,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 621,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "T4",
    "start": 629,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 705,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 712,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 715,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 722,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "T5",
    "start": 727,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 730,
    "end": 731
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 732,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 742,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 748,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 751,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 757,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 762,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 767,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 772,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 779,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "T7",
    "start": 784,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 787,
    "end": 788
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 789,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 796,
    "end": 798
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 799,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 803,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 805,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 816,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 823,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "T8",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "T6",
    "start": 835,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 855,
    "end": 859
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 860,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 868,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "T9",
    "start": 871,
    "end": 873
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 874,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 890,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 898,
    "end": 899
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 900,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 903,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "T10",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 910,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 913,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 922,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 927,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 933,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 939,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "T12",
    "start": 944,
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
    "value": "[",
    "start": 950,
    "end": 951
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 951,
    "end": 954
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 956,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 964,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "T13",
    "start": 969,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 975,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 982,
    "end": 984
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 985,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 993,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 996,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "T11",
    "start": 998,
    "end": 1001
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1002,
    "end": 1003
  }
]
```
