__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 41
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 62
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
                        "body": [],
                        "start": 65,
                        "end": 76
                      },
                      "expression": false,
                      "start": 62,
                      "end": 76
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 52,
                    "end": 76
                  }
                ],
                "start": 42,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 104
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 105,
              "end": 112
            },
            "abstract": false,
            "declare": false,
            "start": 88,
            "end": 112
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 140
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 159,
                      "end": 172
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 174,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 174,
                        "end": 183
                      },
                      "start": 172,
                      "end": 183
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 151,
                    "end": 184
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 212
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 223
                        },
                        "typeArguments": null,
                        "start": 214,
                        "end": 223
                      },
                      "start": 212,
                      "end": 223
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 193,
                    "end": 224
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 241,
                      "end": 254
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 266
                        },
                        "typeArguments": null,
                        "start": 256,
                        "end": 266
                      },
                      "start": 254,
                      "end": 266
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 233,
                    "end": 267
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 295
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 297,
                          "end": 307
                        },
                        "typeArguments": null,
                        "start": 297,
                        "end": 307
                      },
                      "start": 295,
                      "end": 307
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 276,
                    "end": 308
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v11_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 349
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 365
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 352,
                      "end": 367
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 327,
                    "end": 368
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v12_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 384,
                      "end": 397
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 404,
                        "end": 413
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 400,
                      "end": 415
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 377,
                    "end": 416
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v13_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 447
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 454,
                        "end": 464
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 450,
                      "end": 466
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 425,
                    "end": 467
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v14_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 496
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 503,
                        "end": 513
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 499,
                      "end": 515
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 476,
                    "end": 516
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v21_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 543,
                      "end": 557
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 568
                        },
                        "typeArguments": null,
                        "start": 559,
                        "end": 568
                      },
                      "start": 557,
                      "end": 568
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 575,
                        "end": 584
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 571,
                      "end": 586
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 535,
                    "end": 587
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v22_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 616
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 618,
                          "end": 627
                        },
                        "typeArguments": null,
                        "start": 618,
                        "end": 627
                      },
                      "start": 616,
                      "end": 627
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 634,
                        "end": 643
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 630,
                      "end": 645
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 596,
                    "end": 646
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v23_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 663,
                      "end": 677
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 679,
                          "end": 689
                        },
                        "typeArguments": null,
                        "start": 679,
                        "end": 689
                      },
                      "start": 677,
                      "end": 689
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 696,
                        "end": 706
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 692,
                      "end": 708
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 655,
                    "end": 709
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C3_v24_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 725,
                      "end": 738
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 750
                        },
                        "typeArguments": null,
                        "start": 740,
                        "end": 750
                      },
                      "start": 738,
                      "end": 750
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 757,
                        "end": 767
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 753,
                      "end": 769
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 718,
                    "end": 770
                  }
                ],
                "start": 141,
                "end": 785
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 785
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 785
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 797,
              "end": 806
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 838
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 840,
                        "end": 849
                      },
                      "typeArguments": null,
                      "start": 840,
                      "end": 849
                    },
                    "start": 838,
                    "end": 849
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 817,
                  "end": 850
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 866,
                    "end": 878
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 880,
                        "end": 889
                      },
                      "typeArguments": null,
                      "start": 880,
                      "end": 889
                    },
                    "start": 878,
                    "end": 889
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 859,
                  "end": 890
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 907,
                    "end": 920
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 932
                      },
                      "typeArguments": null,
                      "start": 922,
                      "end": 932
                    },
                    "start": 920,
                    "end": 932
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 899,
                  "end": 933
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 949,
                    "end": 961
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 963,
                        "end": 973
                      },
                      "typeArguments": null,
                      "start": 963,
                      "end": 973
                    },
                    "start": 961,
                    "end": 973
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 942,
                  "end": 974
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v11_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 992,
                    "end": 1006
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1013,
                      "end": 1022
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1009,
                    "end": 1024
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 984,
                  "end": 1025
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1054
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1061,
                      "end": 1070
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1057,
                    "end": 1072
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1034,
                  "end": 1073
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v13_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1090,
                    "end": 1104
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1111,
                      "end": 1121
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1107,
                    "end": 1123
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1082,
                  "end": 1124
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1153
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1160,
                      "end": 1170
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1156,
                    "end": 1172
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1133,
                  "end": 1173
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v21_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1191,
                    "end": 1205
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1207,
                        "end": 1216
                      },
                      "typeArguments": null,
                      "start": 1207,
                      "end": 1216
                    },
                    "start": 1205,
                    "end": 1216
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1223,
                      "end": 1232
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1219,
                    "end": 1234
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1183,
                  "end": 1235
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v22_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1251,
                    "end": 1264
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1266,
                        "end": 1275
                      },
                      "typeArguments": null,
                      "start": 1266,
                      "end": 1275
                    },
                    "start": 1264,
                    "end": 1275
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1291
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1278,
                    "end": 1293
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1244,
                  "end": 1294
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v23_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1311,
                    "end": 1325
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1327,
                        "end": 1337
                      },
                      "typeArguments": null,
                      "start": 1327,
                      "end": 1337
                    },
                    "start": 1325,
                    "end": 1337
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1344,
                      "end": 1354
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1340,
                    "end": 1356
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 1303,
                  "end": 1357
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C4_v24_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1373,
                    "end": 1386
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1388,
                        "end": 1398
                      },
                      "typeArguments": null,
                      "start": 1388,
                      "end": 1398
                    },
                    "start": 1386,
                    "end": 1398
                  },
                  "value": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1405,
                      "end": 1415
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1401,
                    "end": 1417
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "public",
                  "start": 1366,
                  "end": 1418
                }
              ],
              "start": 807,
              "end": 1424
            },
            "abstract": false,
            "declare": false,
            "start": 791,
            "end": 1424
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
                  "name": "m1_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1449,
                        "end": 1458
                      },
                      "typeArguments": null,
                      "start": 1449,
                      "end": 1458
                    },
                    "start": 1447,
                    "end": 1458
                  },
                  "start": 1434,
                  "end": 1458
                },
                "init": null,
                "definite": false,
                "start": 1434,
                "end": 1458
              }
            ],
            "declare": false,
            "start": 1430,
            "end": 1459
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1489,
                          "end": 1498
                        },
                        "typeArguments": null,
                        "start": 1489,
                        "end": 1498
                      },
                      "start": 1487,
                      "end": 1498
                    },
                    "start": 1475,
                    "end": 1498
                  },
                  "init": null,
                  "definite": false,
                  "start": 1475,
                  "end": 1498
                }
              ],
              "declare": false,
              "start": 1471,
              "end": 1499
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1464,
            "end": 1499
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
                  "name": "m1_v3_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1523,
                        "end": 1533
                      },
                      "typeArguments": null,
                      "start": 1523,
                      "end": 1533
                    },
                    "start": 1521,
                    "end": 1533
                  },
                  "start": 1508,
                  "end": 1533
                },
                "init": null,
                "definite": false,
                "start": 1508,
                "end": 1533
              }
            ],
            "declare": false,
            "start": 1504,
            "end": 1534
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v4_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1564,
                          "end": 1574
                        },
                        "typeArguments": null,
                        "start": 1564,
                        "end": 1574
                      },
                      "start": 1562,
                      "end": 1574
                    },
                    "start": 1550,
                    "end": 1574
                  },
                  "init": null,
                  "definite": false,
                  "start": 1550,
                  "end": 1574
                }
              ],
              "declare": false,
              "start": 1546,
              "end": 1575
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1539,
            "end": 1575
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
                  "name": "m1_v11_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1594,
                  "end": 1608
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1615,
                    "end": 1624
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1611,
                  "end": 1626
                },
                "definite": false,
                "start": 1594,
                "end": 1626
              }
            ],
            "declare": false,
            "start": 1590,
            "end": 1627
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1643,
                    "end": 1656
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1663,
                      "end": 1672
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1659,
                    "end": 1674
                  },
                  "definite": false,
                  "start": 1643,
                  "end": 1674
                }
              ],
              "declare": false,
              "start": 1639,
              "end": 1675
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1632,
            "end": 1675
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
                  "name": "m1_v13_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1684,
                  "end": 1698
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1705,
                    "end": 1715
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1701,
                  "end": 1717
                },
                "definite": false,
                "start": 1684,
                "end": 1717
              }
            ],
            "declare": false,
            "start": 1680,
            "end": 1718
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v14_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1734,
                    "end": 1747
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1754,
                      "end": 1764
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1750,
                    "end": 1766
                  },
                  "definite": false,
                  "start": 1734,
                  "end": 1766
                }
              ],
              "declare": false,
              "start": 1730,
              "end": 1767
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1723,
            "end": 1767
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
                  "name": "m1_v21_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1802,
                        "end": 1811
                      },
                      "typeArguments": null,
                      "start": 1802,
                      "end": 1811
                    },
                    "start": 1800,
                    "end": 1811
                  },
                  "start": 1786,
                  "end": 1811
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1818,
                    "end": 1827
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1814,
                  "end": 1829
                },
                "definite": false,
                "start": 1786,
                "end": 1829
              }
            ],
            "declare": false,
            "start": 1782,
            "end": 1830
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v22_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1861,
                          "end": 1870
                        },
                        "typeArguments": null,
                        "start": 1861,
                        "end": 1870
                      },
                      "start": 1859,
                      "end": 1870
                    },
                    "start": 1846,
                    "end": 1870
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1877,
                      "end": 1886
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1873,
                    "end": 1888
                  },
                  "definite": false,
                  "start": 1846,
                  "end": 1888
                }
              ],
              "declare": false,
              "start": 1842,
              "end": 1889
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1835,
            "end": 1889
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
                  "name": "m1_v23_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1914,
                        "end": 1924
                      },
                      "typeArguments": null,
                      "start": 1914,
                      "end": 1924
                    },
                    "start": 1912,
                    "end": 1924
                  },
                  "start": 1898,
                  "end": 1924
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1931,
                    "end": 1941
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 1927,
                  "end": 1943
                },
                "definite": false,
                "start": 1898,
                "end": 1943
              }
            ],
            "declare": false,
            "start": 1894,
            "end": 1944
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_v24_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1975,
                          "end": 1985
                        },
                        "typeArguments": null,
                        "start": 1975,
                        "end": 1985
                      },
                      "start": 1973,
                      "end": 1985
                    },
                    "start": 1960,
                    "end": 1985
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1992,
                      "end": 2002
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1988,
                    "end": 2004
                  },
                  "definite": false,
                  "start": 1960,
                  "end": 2004
                }
              ],
              "declare": false,
              "start": 1956,
              "end": 2005
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1949,
            "end": 2005
          }
        ],
        "start": 13,
        "end": 2016
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2016
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2024,
        "end": 2037
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
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2052,
              "end": 2054
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
                "body": [],
                "start": 2057,
                "end": 2064
              },
              "expression": false,
              "start": 2054,
              "end": 2064
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2044,
            "end": 2064
          }
        ],
        "start": 2038,
        "end": 2066
      },
      "abstract": false,
      "declare": false,
      "start": 2018,
      "end": 2066
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2074,
        "end": 2087
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2102,
              "end": 2119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2121,
                  "end": 2134
                },
                "typeArguments": null,
                "start": 2121,
                "end": 2134
              },
              "start": 2119,
              "end": 2134
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2094,
            "end": 2135
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2147,
              "end": 2163
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2165,
                  "end": 2178
                },
                "typeArguments": null,
                "start": 2165,
                "end": 2178
              },
              "start": 2163,
              "end": 2178
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2140,
            "end": 2179
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2193,
              "end": 2211
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2218,
                "end": 2231
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2214,
              "end": 2233
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2185,
            "end": 2234
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v12_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2246,
              "end": 2263
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2270,
                "end": 2283
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2266,
              "end": 2285
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2239,
            "end": 2286
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v21_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2300,
              "end": 2318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2320,
                  "end": 2333
                },
                "typeArguments": null,
                "start": 2320,
                "end": 2333
              },
              "start": 2318,
              "end": 2333
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2340,
                "end": 2353
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2336,
              "end": 2355
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 2292,
            "end": 2356
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C3_v22_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2368,
              "end": 2385
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2387,
                  "end": 2400
                },
                "typeArguments": null,
                "start": 2387,
                "end": 2400
              },
              "start": 2385,
              "end": 2400
            },
            "value": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2407,
                "end": 2420
              },
              "typeArguments": null,
              "arguments": [],
              "start": 2403,
              "end": 2422
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 2361,
            "end": 2423
          }
        ],
        "start": 2088,
        "end": 2425
      },
      "abstract": false,
      "declare": false,
      "start": 2068,
      "end": 2425
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
            "name": "glo_v2_public",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2447,
                  "end": 2460
                },
                "typeArguments": null,
                "start": 2447,
                "end": 2460
              },
              "start": 2445,
              "end": 2460
            },
            "start": 2432,
            "end": 2460
          },
          "init": null,
          "definite": false,
          "start": 2432,
          "end": 2460
        }
      ],
      "declare": false,
      "start": 2428,
      "end": 2461
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
            "name": "glo_v12_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2466,
            "end": 2480
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2487,
              "end": 2500
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2483,
            "end": 2502
          },
          "definite": false,
          "start": 2466,
          "end": 2502
        }
      ],
      "declare": false,
      "start": 2462,
      "end": 2503
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
            "name": "glo_v22_public",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2524,
                  "end": 2537
                },
                "typeArguments": null,
                "start": 2524,
                "end": 2537
              },
              "start": 2522,
              "end": 2537
            },
            "start": 2508,
            "end": 2537
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_C1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2557
            },
            "typeArguments": null,
            "arguments": [],
            "start": 2540,
            "end": 2559
          },
          "definite": false,
          "start": 2508,
          "end": 2559
        }
      ],
      "declare": false,
      "start": 2504,
      "end": 2560
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2560
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 26,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 52,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 60,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 88,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 94,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 118,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 125,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 131,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 151,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "C3_v1_private",
    "start": 159,
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
    "value": "C1_public",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 193,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "C3_v2_public",
    "start": 200,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 214,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 233,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "C3_v3_private",
    "start": 241,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 256,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 276,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "C3_v4_public",
    "start": 283,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 297,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 327,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "C3_v11_private",
    "start": 335,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 352,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 356,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 377,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "C3_v12_public",
    "start": 384,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 400,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 404,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 425,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "C3_v13_private",
    "start": 433,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 448,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 454,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 476,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "C3_v14_public",
    "start": 483,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 499,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 503,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 535,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "C3_v21_private",
    "start": 543,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 559,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 569,
    "end": 570
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 571,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 575,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "public",
    "start": 596,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "C3_v22_public",
    "start": 603,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 618,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 630,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 634,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
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
    "value": ";",
    "start": 645,
    "end": 646
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 655,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "C3_v23_private",
    "start": 663,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 679,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 692,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 696,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 718,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "C3_v24_public",
    "start": 725,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 740,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 751,
    "end": 752
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 757,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 784,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 791,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "C4_public",
    "start": 797,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 817,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "C4_v1_private",
    "start": 825,
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
    "value": "C1_public",
    "start": 840,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 859,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "C4_v2_public",
    "start": 866,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 880,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 899,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "C4_v3_private",
    "start": 907,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 922,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 942,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "C4_v4_public",
    "start": 949,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 963,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 973,
    "end": 974
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 984,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "C4_v11_private",
    "start": 992,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1009,
    "end": 1012
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1013,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "C4_v12_public",
    "start": 1041,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1057,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1061,
    "end": 1070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1082,
    "end": 1089
  },
  {
    "type": "Identifier",
    "value": "C4_v13_private",
    "start": 1090,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1107,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1111,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "C4_v14_public",
    "start": 1140,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1156,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1160,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1183,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "C4_v21_private",
    "start": 1191,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1207,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1219,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1223,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "C4_v22_public",
    "start": 1251,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1266,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1278,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1282,
    "end": 1291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1291,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1303,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "C4_v23_private",
    "start": 1311,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1327,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1344,
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
    "value": ";",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1366,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "C4_v24_public",
    "start": 1373,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1388,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1405,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1430,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "m1_v1_private",
    "start": 1434,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1449,
    "end": 1458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1464,
    "end": 1470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1471,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "m1_v2_public",
    "start": 1475,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1489,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1504,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "m1_v3_private",
    "start": 1508,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1523,
    "end": 1533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1539,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1546,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "m1_v4_public",
    "start": 1550,
    "end": 1562
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1564,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1590,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "m1_v11_private",
    "start": 1594,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1611,
    "end": 1614
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1615,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1632,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1639,
    "end": 1642
  },
  {
    "type": "Identifier",
    "value": "m1_v12_public",
    "start": 1643,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1659,
    "end": 1662
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1663,
    "end": 1672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1672,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "m1_v13_private",
    "start": 1684,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1701,
    "end": 1704
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1705,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1723,
    "end": 1729
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1730,
    "end": 1733
  },
  {
    "type": "Identifier",
    "value": "m1_v14_public",
    "start": 1734,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1754,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1782,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "m1_v21_private",
    "start": 1786,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1802,
    "end": 1811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1818,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1835,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1842,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "m1_v22_public",
    "start": 1846,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1859,
    "end": 1860
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1861,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1873,
    "end": 1876
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1877,
    "end": 1886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1886,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1894,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "m1_v23_private",
    "start": 1898,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1914,
    "end": 1924
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1931,
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
    "value": ";",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1949,
    "end": 1955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1956,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "m1_v24_public",
    "start": 1960,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1975,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1988,
    "end": 1991
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1992,
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
    "value": ";",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2018,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2024,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2044,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2052,
    "end": 2054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2054,
    "end": 2055
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2068,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 2074,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2088,
    "end": 2089
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2094,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v1_private",
    "start": 2102,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2121,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2140,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v2_public",
    "start": 2147,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2165,
    "end": 2178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2178,
    "end": 2179
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2185,
    "end": 2192
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v11_private",
    "start": 2193,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2214,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2218,
    "end": 2231
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2231,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2239,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v12_public",
    "start": 2246,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2266,
    "end": 2269
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2270,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2292,
    "end": 2299
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v21_private",
    "start": 2300,
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
    "value": "glo_C1_public",
    "start": 2320,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2336,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2340,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2361,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "glo_C3_v22_public",
    "start": 2368,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2387,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2401,
    "end": 2402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2403,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2407,
    "end": 2420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2422,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2428,
    "end": 2431
  },
  {
    "type": "Identifier",
    "value": "glo_v2_public",
    "start": 2432,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2447,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2462,
    "end": 2465
  },
  {
    "type": "Identifier",
    "value": "glo_v12_public",
    "start": 2466,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2483,
    "end": 2486
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2487,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2504,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "glo_v22_public",
    "start": 2508,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2524,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2538,
    "end": 2539
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2540,
    "end": 2543
  },
  {
    "type": "Identifier",
    "value": "glo_C1_public",
    "start": 2544,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560
  }
]
```
