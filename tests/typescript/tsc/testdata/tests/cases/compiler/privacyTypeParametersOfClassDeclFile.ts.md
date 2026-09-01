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
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPrivateTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 103
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
                "start": 104,
                "end": 105
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "privateClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 126
                },
                "typeArguments": null,
                "start": 114,
                "end": 126
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 104,
              "end": 126
            }
          ],
          "start": 103,
          "end": 127
        },
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 151
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
                          "start": 157,
                          "end": 158
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 158
                      },
                      "start": 155,
                      "end": 158
                    },
                    "start": 152,
                    "end": 158
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
                      "start": 161,
                      "end": 162
                    },
                    "typeArguments": null,
                    "start": 161,
                    "end": 162
                  },
                  "start": 159,
                  "end": 162
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 183
                      },
                      "start": 173,
                      "end": 184
                    }
                  ],
                  "start": 163,
                  "end": 190
                },
                "expression": false,
                "start": 151,
                "end": 190
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 143,
              "end": 190
            }
          ],
          "start": 128,
          "end": 192
        },
        "abstract": false,
        "declare": false,
        "start": 61,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 192
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParameters",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 242
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
                "start": 243,
                "end": 244
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 264
                },
                "typeArguments": null,
                "start": 253,
                "end": 264
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 243,
              "end": 264
            }
          ],
          "start": 242,
          "end": 265
        },
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 272,
                "end": 280
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
                          "start": 286,
                          "end": 287
                        },
                        "typeArguments": null,
                        "start": 286,
                        "end": 287
                      },
                      "start": 284,
                      "end": 287
                    },
                    "start": 281,
                    "end": 287
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
                      "start": 290,
                      "end": 291
                    },
                    "typeArguments": null,
                    "start": 290,
                    "end": 291
                  },
                  "start": 288,
                  "end": 291
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 309,
                        "end": 312
                      },
                      "start": 302,
                      "end": 313
                    }
                  ],
                  "start": 292,
                  "end": 319
                },
                "expression": false,
                "start": 280,
                "end": 319
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 272,
              "end": 319
            }
          ],
          "start": 266,
          "end": 321
        },
        "abstract": false,
        "declare": false,
        "start": 201,
        "end": 321
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 321
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPrivateTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 366
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
              "start": 367,
              "end": 368
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 389
              },
              "typeArguments": null,
              "start": 377,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 367,
            "end": 389
          }
        ],
        "start": 366,
        "end": 390
      },
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 405
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
                        "start": 411,
                        "end": 412
                      },
                      "typeArguments": null,
                      "start": 411,
                      "end": 412
                    },
                    "start": 409,
                    "end": 412
                  },
                  "start": 406,
                  "end": 412
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
                    "start": 415,
                    "end": 416
                  },
                  "typeArguments": null,
                  "start": 415,
                  "end": 416
                },
                "start": 413,
                "end": 416
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 437
                    },
                    "start": 427,
                    "end": 438
                  }
                ],
                "start": 417,
                "end": 444
              },
              "expression": false,
              "start": 405,
              "end": 444
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 397,
            "end": 444
          }
        ],
        "start": 391,
        "end": 446
      },
      "abstract": false,
      "declare": false,
      "start": 323,
      "end": 446
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParameters",
        "optional": false,
        "typeAnnotation": null,
        "start": 454,
        "end": 490
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
              "start": 491,
              "end": 492
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 501,
                "end": 512
              },
              "typeArguments": null,
              "start": 501,
              "end": 512
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 491,
            "end": 512
          }
        ],
        "start": 490,
        "end": 513
      },
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 520,
              "end": 528
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
                        "start": 534,
                        "end": 535
                      },
                      "typeArguments": null,
                      "start": 534,
                      "end": 535
                    },
                    "start": 532,
                    "end": 535
                  },
                  "start": 529,
                  "end": 535
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
                    "start": 538,
                    "end": 539
                  },
                  "typeArguments": null,
                  "start": 538,
                  "end": 539
                },
                "start": 536,
                "end": 539
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 558,
                      "end": 561
                    },
                    "start": 551,
                    "end": 562
                  }
                ],
                "start": 540,
                "end": 568
              },
              "expression": false,
              "start": 528,
              "end": 568
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 520,
            "end": 568
          }
        ],
        "start": 514,
        "end": 570
      },
      "abstract": false,
      "declare": false,
      "start": 448,
      "end": 570
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithPublicTypeParametersWithoutExtends",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 634
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
                "start": 635,
                "end": 636
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 635,
              "end": 636
            }
          ],
          "start": 634,
          "end": 637
        },
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 652
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
                          "start": 658,
                          "end": 659
                        },
                        "typeArguments": null,
                        "start": 658,
                        "end": 659
                      },
                      "start": 656,
                      "end": 659
                    },
                    "start": 653,
                    "end": 659
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
                      "start": 662,
                      "end": 663
                    },
                    "typeArguments": null,
                    "start": 662,
                    "end": 663
                  },
                  "start": 660,
                  "end": 663
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 682,
                        "end": 685
                      },
                      "start": 675,
                      "end": 686
                    }
                  ],
                  "start": 664,
                  "end": 692
                },
                "expression": false,
                "start": 652,
                "end": 692
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 644,
              "end": 692
            }
          ],
          "start": 638,
          "end": 694
        },
        "abstract": false,
        "declare": false,
        "start": 579,
        "end": 694
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 572,
      "end": 694
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithPublicTypeParametersWithoutExtends",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 752
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
              "start": 753,
              "end": 754
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 753,
            "end": 754
          }
        ],
        "start": 752,
        "end": 755
      },
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 762,
              "end": 770
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
                        "start": 776,
                        "end": 777
                      },
                      "typeArguments": null,
                      "start": 776,
                      "end": 777
                    },
                    "start": 774,
                    "end": 777
                  },
                  "start": 771,
                  "end": 777
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
                    "start": 780,
                    "end": 781
                  },
                  "typeArguments": null,
                  "start": 780,
                  "end": 781
                },
                "start": 778,
                "end": 781
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 800,
                      "end": 803
                    },
                    "start": 793,
                    "end": 804
                  }
                ],
                "start": 782,
                "end": 810
              },
              "expression": false,
              "start": 770,
              "end": 810
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 762,
            "end": 810
          }
        ],
        "start": 756,
        "end": 812
      },
      "abstract": false,
      "declare": false,
      "start": 696,
      "end": 812
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "publicClassWithTypeParametersFromPrivateModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 827,
          "end": 873
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
                "start": 874,
                "end": 875
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
                    "start": 884,
                    "end": 897
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "publicClassInPrivateModule",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 924
                  },
                  "start": 884,
                  "end": 924
                },
                "typeArguments": null,
                "start": 884,
                "end": 924
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 874,
              "end": 924
            }
          ],
          "start": 873,
          "end": 925
        },
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
                "name": "myMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 941,
                "end": 949
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
                          "start": 955,
                          "end": 956
                        },
                        "typeArguments": null,
                        "start": 955,
                        "end": 956
                      },
                      "start": 953,
                      "end": 956
                    },
                    "start": 950,
                    "end": 956
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
                      "start": 959,
                      "end": 960
                    },
                    "typeArguments": null,
                    "start": 959,
                    "end": 960
                  },
                  "start": 957,
                  "end": 960
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 978,
                        "end": 981
                      },
                      "start": 971,
                      "end": 982
                    }
                  ],
                  "start": 961,
                  "end": 988
                },
                "expression": false,
                "start": 949,
                "end": 988
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 941,
              "end": 988
            }
          ],
          "start": 926,
          "end": 990
        },
        "abstract": false,
        "declare": false,
        "start": 821,
        "end": 990
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 814,
      "end": 990
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateClassWithTypeParametersFromPrivateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 998,
        "end": 1045
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
              "start": 1046,
              "end": 1047
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
                  "start": 1056,
                  "end": 1069
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassInPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1070,
                  "end": 1096
                },
                "start": 1056,
                "end": 1096
              },
              "typeArguments": null,
              "start": 1056,
              "end": 1096
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1046,
            "end": 1096
          }
        ],
        "start": 1045,
        "end": 1097
      },
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
              "name": "myMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 1104,
              "end": 1112
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
                        "start": 1118,
                        "end": 1119
                      },
                      "typeArguments": null,
                      "start": 1118,
                      "end": 1119
                    },
                    "start": 1116,
                    "end": 1119
                  },
                  "start": 1113,
                  "end": 1119
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
                    "start": 1122,
                    "end": 1123
                  },
                  "typeArguments": null,
                  "start": 1122,
                  "end": 1123
                },
                "start": 1120,
                "end": 1123
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1141,
                      "end": 1144
                    },
                    "start": 1134,
                    "end": 1145
                  }
                ],
                "start": 1124,
                "end": 1151
              },
              "expression": false,
              "start": 1112,
              "end": 1151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1104,
            "end": 1151
          }
        ],
        "start": 1098,
        "end": 1153
      },
      "abstract": false,
      "declare": false,
      "start": 992,
      "end": 1153
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
          "start": 1172,
          "end": 1184
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
                "start": 1197,
                "end": 1223
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 1224,
                "end": 1231
              },
              "abstract": false,
              "declare": false,
              "start": 1191,
              "end": 1231
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
                  "start": 1250,
                  "end": 1275
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 1276,
                  "end": 1283
                },
                "abstract": false,
                "declare": false,
                "start": 1244,
                "end": 1283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1237,
              "end": 1283
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPrivateTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1302,
                  "end": 1338
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
                        "start": 1339,
                        "end": 1340
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "privateClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1349,
                          "end": 1375
                        },
                        "typeArguments": null,
                        "start": 1349,
                        "end": 1375
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1339,
                      "end": 1375
                    }
                  ],
                  "start": 1338,
                  "end": 1376
                },
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
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1396,
                        "end": 1404
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
                                  "start": 1410,
                                  "end": 1411
                                },
                                "typeArguments": null,
                                "start": 1410,
                                "end": 1411
                              },
                              "start": 1408,
                              "end": 1411
                            },
                            "start": 1405,
                            "end": 1411
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
                              "start": 1414,
                              "end": 1415
                            },
                            "typeArguments": null,
                            "start": 1414,
                            "end": 1415
                          },
                          "start": 1412,
                          "end": 1415
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1437,
                                "end": 1440
                              },
                              "start": 1430,
                              "end": 1441
                            }
                          ],
                          "start": 1416,
                          "end": 1451
                        },
                        "expression": false,
                        "start": 1404,
                        "end": 1451
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 1396,
                      "end": 1451
                    }
                  ],
                  "start": 1377,
                  "end": 1457
                },
                "abstract": false,
                "declare": false,
                "start": 1296,
                "end": 1457
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1289,
              "end": 1457
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPublicTypeParameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1476,
                  "end": 1511
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
                        "start": 1512,
                        "end": 1513
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPublicModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1522,
                          "end": 1547
                        },
                        "typeArguments": null,
                        "start": 1522,
                        "end": 1547
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1512,
                      "end": 1547
                    }
                  ],
                  "start": 1511,
                  "end": 1548
                },
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
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1559,
                        "end": 1567
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
                                  "start": 1573,
                                  "end": 1574
                                },
                                "typeArguments": null,
                                "start": 1573,
                                "end": 1574
                              },
                              "start": 1571,
                              "end": 1574
                            },
                            "start": 1568,
                            "end": 1574
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
                              "start": 1577,
                              "end": 1578
                            },
                            "typeArguments": null,
                            "start": 1577,
                            "end": 1578
                          },
                          "start": 1575,
                          "end": 1578
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1600,
                                "end": 1603
                              },
                              "start": 1593,
                              "end": 1604
                            }
                          ],
                          "start": 1579,
                          "end": 1614
                        },
                        "expression": false,
                        "start": 1567,
                        "end": 1614
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 1559,
                      "end": 1614
                    }
                  ],
                  "start": 1549,
                  "end": 1620
                },
                "abstract": false,
                "declare": false,
                "start": 1470,
                "end": 1620
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1463,
              "end": 1620
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 1632,
                "end": 1669
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
                      "start": 1670,
                      "end": 1671
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1680,
                        "end": 1706
                      },
                      "typeArguments": null,
                      "start": 1680,
                      "end": 1706
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1670,
                    "end": 1706
                  }
                ],
                "start": 1669,
                "end": 1707
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1718,
                      "end": 1726
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
                                "start": 1732,
                                "end": 1733
                              },
                              "typeArguments": null,
                              "start": 1732,
                              "end": 1733
                            },
                            "start": 1730,
                            "end": 1733
                          },
                          "start": 1727,
                          "end": 1733
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
                            "start": 1736,
                            "end": 1737
                          },
                          "typeArguments": null,
                          "start": 1736,
                          "end": 1737
                        },
                        "start": 1734,
                        "end": 1737
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1759,
                              "end": 1762
                            },
                            "start": 1752,
                            "end": 1763
                          }
                        ],
                        "start": 1738,
                        "end": 1773
                      },
                      "expression": false,
                      "start": 1726,
                      "end": 1773
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1718,
                    "end": 1773
                  }
                ],
                "start": 1708,
                "end": 1779
              },
              "abstract": false,
              "declare": false,
              "start": 1626,
              "end": 1779
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1827
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
                      "start": 1828,
                      "end": 1829
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPublicModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1838,
                        "end": 1863
                      },
                      "typeArguments": null,
                      "start": 1838,
                      "end": 1863
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1828,
                    "end": 1863
                  }
                ],
                "start": 1827,
                "end": 1864
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1883
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
                                "start": 1889,
                                "end": 1890
                              },
                              "typeArguments": null,
                              "start": 1889,
                              "end": 1890
                            },
                            "start": 1887,
                            "end": 1890
                          },
                          "start": 1884,
                          "end": 1890
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
                            "start": 1893,
                            "end": 1894
                          },
                          "typeArguments": null,
                          "start": 1893,
                          "end": 1894
                        },
                        "start": 1891,
                        "end": 1894
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1916,
                              "end": 1919
                            },
                            "start": 1909,
                            "end": 1920
                          }
                        ],
                        "start": 1895,
                        "end": 1930
                      },
                      "expression": false,
                      "start": 1883,
                      "end": 1930
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1875,
                    "end": 1930
                  }
                ],
                "start": 1865,
                "end": 1936
              },
              "abstract": false,
              "declare": false,
              "start": 1785,
              "end": 1936
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithPublicTypeParametersWithoutExtends",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1955,
                  "end": 2004
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
                        "start": 2005,
                        "end": 2006
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2005,
                      "end": 2006
                    }
                  ],
                  "start": 2004,
                  "end": 2007
                },
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
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2018,
                        "end": 2026
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
                                  "start": 2032,
                                  "end": 2033
                                },
                                "typeArguments": null,
                                "start": 2032,
                                "end": 2033
                              },
                              "start": 2030,
                              "end": 2033
                            },
                            "start": 2027,
                            "end": 2033
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
                              "start": 2036,
                              "end": 2037
                            },
                            "typeArguments": null,
                            "start": 2036,
                            "end": 2037
                          },
                          "start": 2034,
                          "end": 2037
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2059,
                                "end": 2062
                              },
                              "start": 2052,
                              "end": 2063
                            }
                          ],
                          "start": 2038,
                          "end": 2073
                        },
                        "expression": false,
                        "start": 2026,
                        "end": 2073
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2018,
                      "end": 2073
                    }
                  ],
                  "start": 2008,
                  "end": 2079
                },
                "abstract": false,
                "declare": false,
                "start": 1949,
                "end": 2079
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1942,
              "end": 2079
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 2091,
                "end": 2141
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
                      "start": 2142,
                      "end": 2143
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2142,
                    "end": 2143
                  }
                ],
                "start": 2141,
                "end": 2144
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2155,
                      "end": 2163
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
                                "start": 2169,
                                "end": 2170
                              },
                              "typeArguments": null,
                              "start": 2169,
                              "end": 2170
                            },
                            "start": 2167,
                            "end": 2170
                          },
                          "start": 2164,
                          "end": 2170
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
                            "start": 2173,
                            "end": 2174
                          },
                          "typeArguments": null,
                          "start": 2173,
                          "end": 2174
                        },
                        "start": 2171,
                        "end": 2174
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2196,
                              "end": 2199
                            },
                            "start": 2189,
                            "end": 2200
                          }
                        ],
                        "start": 2175,
                        "end": 2210
                      },
                      "expression": false,
                      "start": 2163,
                      "end": 2210
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2155,
                    "end": 2210
                  }
                ],
                "start": 2145,
                "end": 2216
              },
              "abstract": false,
              "declare": false,
              "start": 2085,
              "end": 2216
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "publicClassWithTypeParametersFromPrivateModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2235,
                  "end": 2281
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
                        "start": 2282,
                        "end": 2283
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
                            "start": 2292,
                            "end": 2305
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "publicClassInPrivateModule",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2306,
                            "end": 2332
                          },
                          "start": 2292,
                          "end": 2332
                        },
                        "typeArguments": null,
                        "start": 2292,
                        "end": 2332
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2282,
                      "end": 2332
                    }
                  ],
                  "start": 2281,
                  "end": 2333
                },
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
                        "name": "myMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2353,
                        "end": 2361
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
                                  "start": 2367,
                                  "end": 2368
                                },
                                "typeArguments": null,
                                "start": 2367,
                                "end": 2368
                              },
                              "start": 2365,
                              "end": 2368
                            },
                            "start": 2362,
                            "end": 2368
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
                              "start": 2371,
                              "end": 2372
                            },
                            "typeArguments": null,
                            "start": 2371,
                            "end": 2372
                          },
                          "start": 2369,
                          "end": 2372
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "val",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2394,
                                "end": 2397
                              },
                              "start": 2387,
                              "end": 2398
                            }
                          ],
                          "start": 2373,
                          "end": 2408
                        },
                        "expression": false,
                        "start": 2361,
                        "end": 2408
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2353,
                      "end": 2408
                    }
                  ],
                  "start": 2334,
                  "end": 2414
                },
                "abstract": false,
                "declare": false,
                "start": 2229,
                "end": 2414
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2222,
              "end": 2414
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "privateClassWithTypeParametersFromPrivateModule",
                "optional": false,
                "typeAnnotation": null,
                "start": 2426,
                "end": 2473
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
                      "start": 2474,
                      "end": 2475
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
                          "start": 2484,
                          "end": 2497
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "publicClassInPrivateModule",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2498,
                          "end": 2524
                        },
                        "start": 2484,
                        "end": 2524
                      },
                      "typeArguments": null,
                      "start": 2484,
                      "end": 2524
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2474,
                    "end": 2524
                  }
                ],
                "start": 2473,
                "end": 2525
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2536,
                      "end": 2544
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
                                "start": 2550,
                                "end": 2551
                              },
                              "typeArguments": null,
                              "start": 2550,
                              "end": 2551
                            },
                            "start": 2548,
                            "end": 2551
                          },
                          "start": 2545,
                          "end": 2551
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
                            "start": 2554,
                            "end": 2555
                          },
                          "typeArguments": null,
                          "start": 2554,
                          "end": 2555
                        },
                        "start": 2552,
                        "end": 2555
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2577,
                              "end": 2580
                            },
                            "start": 2570,
                            "end": 2581
                          }
                        ],
                        "start": 2556,
                        "end": 2591
                      },
                      "expression": false,
                      "start": 2544,
                      "end": 2591
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2536,
                    "end": 2591
                  }
                ],
                "start": 2526,
                "end": 2597
              },
              "abstract": false,
              "declare": false,
              "start": 2420,
              "end": 2597
            }
          ],
          "start": 1185,
          "end": 2599
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 1162,
        "end": 2599
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1155,
      "end": 2599
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "privateModule",
        "optional": false,
        "typeAnnotation": null,
        "start": 2611,
        "end": 2624
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
              "start": 2637,
              "end": 2664
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 2665,
              "end": 2672
            },
            "abstract": false,
            "declare": false,
            "start": 2631,
            "end": 2672
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
                "start": 2691,
                "end": 2717
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 2718,
                "end": 2725
              },
              "abstract": false,
              "declare": false,
              "start": 2685,
              "end": 2725
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2678,
            "end": 2725
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPrivateTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 2744,
                "end": 2780
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
                      "start": 2781,
                      "end": 2782
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "privateClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2791,
                        "end": 2818
                      },
                      "typeArguments": null,
                      "start": 2791,
                      "end": 2818
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2781,
                    "end": 2818
                  }
                ],
                "start": 2780,
                "end": 2819
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2830,
                      "end": 2838
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
                                "start": 2844,
                                "end": 2845
                              },
                              "typeArguments": null,
                              "start": 2844,
                              "end": 2845
                            },
                            "start": 2842,
                            "end": 2845
                          },
                          "start": 2839,
                          "end": 2845
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
                            "start": 2848,
                            "end": 2849
                          },
                          "typeArguments": null,
                          "start": 2848,
                          "end": 2849
                        },
                        "start": 2846,
                        "end": 2849
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2871,
                              "end": 2874
                            },
                            "start": 2864,
                            "end": 2875
                          }
                        ],
                        "start": 2850,
                        "end": 2885
                      },
                      "expression": false,
                      "start": 2838,
                      "end": 2885
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2830,
                    "end": 2885
                  }
                ],
                "start": 2820,
                "end": 2891
              },
              "abstract": false,
              "declare": false,
              "start": 2738,
              "end": 2891
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2731,
            "end": 2891
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPublicTypeParameters",
                "optional": false,
                "typeAnnotation": null,
                "start": 2910,
                "end": 2945
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
                      "start": 2946,
                      "end": 2947
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "publicClassInPrivateModule",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2956,
                        "end": 2982
                      },
                      "typeArguments": null,
                      "start": 2956,
                      "end": 2982
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2946,
                    "end": 2982
                  }
                ],
                "start": 2945,
                "end": 2983
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2994,
                      "end": 3002
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
                                "start": 3008,
                                "end": 3009
                              },
                              "typeArguments": null,
                              "start": 3008,
                              "end": 3009
                            },
                            "start": 3006,
                            "end": 3009
                          },
                          "start": 3003,
                          "end": 3009
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
                            "start": 3012,
                            "end": 3013
                          },
                          "typeArguments": null,
                          "start": 3012,
                          "end": 3013
                        },
                        "start": 3010,
                        "end": 3013
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3035,
                              "end": 3038
                            },
                            "start": 3028,
                            "end": 3039
                          }
                        ],
                        "start": 3014,
                        "end": 3049
                      },
                      "expression": false,
                      "start": 3002,
                      "end": 3049
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2994,
                    "end": 3049
                  }
                ],
                "start": 2984,
                "end": 3055
              },
              "abstract": false,
              "declare": false,
              "start": 2904,
              "end": 3055
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2897,
            "end": 3055
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPrivateTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 3067,
              "end": 3104
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
                    "start": 3105,
                    "end": 3106
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "privateClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3115,
                      "end": 3142
                    },
                    "typeArguments": null,
                    "start": 3115,
                    "end": 3142
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3105,
                  "end": 3142
                }
              ],
              "start": 3104,
              "end": 3143
            },
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
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3154,
                    "end": 3162
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
                              "start": 3168,
                              "end": 3169
                            },
                            "typeArguments": null,
                            "start": 3168,
                            "end": 3169
                          },
                          "start": 3166,
                          "end": 3169
                        },
                        "start": 3163,
                        "end": 3169
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
                          "start": 3172,
                          "end": 3173
                        },
                        "typeArguments": null,
                        "start": 3172,
                        "end": 3173
                      },
                      "start": 3170,
                      "end": 3173
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3195,
                            "end": 3198
                          },
                          "start": 3188,
                          "end": 3199
                        }
                      ],
                      "start": 3174,
                      "end": 3209
                    },
                    "expression": false,
                    "start": 3162,
                    "end": 3209
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3154,
                  "end": 3209
                }
              ],
              "start": 3144,
              "end": 3215
            },
            "abstract": false,
            "declare": false,
            "start": 3061,
            "end": 3215
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPublicTypeParameters",
              "optional": false,
              "typeAnnotation": null,
              "start": 3227,
              "end": 3263
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
                    "start": 3264,
                    "end": 3265
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "publicClassInPrivateModule",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3274,
                      "end": 3300
                    },
                    "typeArguments": null,
                    "start": 3274,
                    "end": 3300
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3264,
                  "end": 3300
                }
              ],
              "start": 3263,
              "end": 3301
            },
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
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3312,
                    "end": 3320
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
                              "start": 3326,
                              "end": 3327
                            },
                            "typeArguments": null,
                            "start": 3326,
                            "end": 3327
                          },
                          "start": 3324,
                          "end": 3327
                        },
                        "start": 3321,
                        "end": 3327
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
                          "start": 3330,
                          "end": 3331
                        },
                        "typeArguments": null,
                        "start": 3330,
                        "end": 3331
                      },
                      "start": 3328,
                      "end": 3331
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3353,
                            "end": 3356
                          },
                          "start": 3346,
                          "end": 3357
                        }
                      ],
                      "start": 3332,
                      "end": 3367
                    },
                    "expression": false,
                    "start": 3320,
                    "end": 3367
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3312,
                  "end": 3367
                }
              ],
              "start": 3302,
              "end": 3373
            },
            "abstract": false,
            "declare": false,
            "start": 3221,
            "end": 3373
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "publicClassWithPublicTypeParametersWithoutExtends",
                "optional": false,
                "typeAnnotation": null,
                "start": 3392,
                "end": 3441
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
                      "start": 3442,
                      "end": 3443
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 3442,
                    "end": 3443
                  }
                ],
                "start": 3441,
                "end": 3444
              },
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
                      "name": "myMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3455,
                      "end": 3463
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
                                "start": 3469,
                                "end": 3470
                              },
                              "typeArguments": null,
                              "start": 3469,
                              "end": 3470
                            },
                            "start": 3467,
                            "end": 3470
                          },
                          "start": 3464,
                          "end": 3470
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
                            "start": 3473,
                            "end": 3474
                          },
                          "typeArguments": null,
                          "start": 3473,
                          "end": 3474
                        },
                        "start": 3471,
                        "end": 3474
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3496,
                              "end": 3499
                            },
                            "start": 3489,
                            "end": 3500
                          }
                        ],
                        "start": 3475,
                        "end": 3510
                      },
                      "expression": false,
                      "start": 3463,
                      "end": 3510
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3455,
                    "end": 3510
                  }
                ],
                "start": 3445,
                "end": 3516
              },
              "abstract": false,
              "declare": false,
              "start": 3386,
              "end": 3516
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3379,
            "end": 3516
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "privateClassWithPublicTypeParametersWithoutExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 3528,
              "end": 3578
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
                    "start": 3579,
                    "end": 3580
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3579,
                  "end": 3580
                }
              ],
              "start": 3578,
              "end": 3581
            },
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
                    "name": "myMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3592,
                    "end": 3600
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
                              "start": 3606,
                              "end": 3607
                            },
                            "typeArguments": null,
                            "start": 3606,
                            "end": 3607
                          },
                          "start": 3604,
                          "end": 3607
                        },
                        "start": 3601,
                        "end": 3607
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
                          "start": 3610,
                          "end": 3611
                        },
                        "typeArguments": null,
                        "start": 3610,
                        "end": 3611
                      },
                      "start": 3608,
                      "end": 3611
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "val",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3633,
                            "end": 3636
                          },
                          "start": 3626,
                          "end": 3637
                        }
                      ],
                      "start": 3612,
                      "end": 3647
                    },
                    "expression": false,
                    "start": 3600,
                    "end": 3647
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3592,
                  "end": 3647
                }
              ],
              "start": 3582,
              "end": 3653
            },
            "abstract": false,
            "declare": false,
            "start": 3522,
            "end": 3653
          }
        ],
        "start": 2625,
        "end": 3655
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2601,
      "end": 3655
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 3655
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
    "value": "class",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateTypeParameters",
    "start": 67,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 106,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 114,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 143,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 152,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 173,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 194,
    "end": 200
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParameters",
    "start": 207,
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
    "value": "publicClass",
    "start": 253,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 272,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 302,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 309,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 323,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateTypeParameters",
    "start": 329,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 367,
    "end": 368
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 369,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "privateClass",
    "start": 377,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 397,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 406,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 434,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 448,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParameters",
    "start": 454,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 493,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "publicClass",
    "start": 501,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 520,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 529,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 536,
    "end": 537
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 551,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 558,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
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
    "value": "class",
    "start": 579,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParametersWithoutExtends",
    "start": 585,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 635,
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
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 644,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 653,
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
    "value": "T",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 664,
    "end": 665
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 675,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 682,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 693,
    "end": 694
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 696,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParametersWithoutExtends",
    "start": 702,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 762,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 771,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "T",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 793,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 814,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 821,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "publicClassWithTypeParametersFromPrivateModule",
    "start": 827,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 876,
    "end": 883
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 884,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 897,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 898,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 941,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 949,
    "end": 950
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 956,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 971,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 978,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 987,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 992,
    "end": 997
  },
  {
    "type": "Identifier",
    "value": "privateClassWithTypeParametersFromPrivateModule",
    "start": 998,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1048,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 1056,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 1070,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1104,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1113,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1141,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1162,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "publicModule",
    "start": 1172,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1191,
    "end": 1196
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 1197,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1244,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 1250,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1289,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1296,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateTypeParameters",
    "start": 1302,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1341,
    "end": 1348
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 1349,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1396,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1405,
    "end": 1408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1430,
    "end": 1436
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1463,
    "end": 1469
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1470,
    "end": 1475
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParameters",
    "start": 1476,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1512,
    "end": 1513
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1514,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "publicClassInPublicModule",
    "start": 1522,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1559,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1568,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1600,
    "end": 1603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1619,
    "end": 1620
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1626,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateTypeParameters",
    "start": 1632,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1672,
    "end": 1679
  },
  {
    "type": "Identifier",
    "value": "privateClassInPublicModule",
    "start": 1680,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1718,
    "end": 1726
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1752,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1785,
    "end": 1790
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParameters",
    "start": 1791,
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
    "value": "publicClassInPublicModule",
    "start": 1838,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1884,
    "end": 1887
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1887,
    "end": 1888
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1889,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1893,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1909,
    "end": 1915
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1929,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1942,
    "end": 1948
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1949,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParametersWithoutExtends",
    "start": 1955,
    "end": 2004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2004,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2018,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2027,
    "end": 2030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2036,
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
    "value": "return",
    "start": 2052,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2059,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2085,
    "end": 2090
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParametersWithoutExtends",
    "start": 2091,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2155,
    "end": 2163
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2163,
    "end": 2164
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2164,
    "end": 2167
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2171,
    "end": 2172
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2189,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2196,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2209,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2222,
    "end": 2228
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2229,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "publicClassWithTypeParametersFromPrivateModule",
    "start": 2235,
    "end": 2281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2284,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2292,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 2306,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2353,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2361,
    "end": 2362
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2362,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2387,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2394,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2407,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2420,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "privateClassWithTypeParametersFromPrivateModule",
    "start": 2426,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2476,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2484,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 2498,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2536,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2545,
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
    "value": "T",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2552,
    "end": 2553
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2554,
    "end": 2555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2570,
    "end": 2576
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2577,
    "end": 2580
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2580,
    "end": 2581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2590,
    "end": 2591
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2601,
    "end": 2610
  },
  {
    "type": "Identifier",
    "value": "privateModule",
    "start": 2611,
    "end": 2624
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2631,
    "end": 2636
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 2637,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2678,
    "end": 2684
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2685,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 2691,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2731,
    "end": 2737
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2738,
    "end": 2743
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPrivateTypeParameters",
    "start": 2744,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2783,
    "end": 2790
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 2791,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2830,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2839,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2848,
    "end": 2849
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2850,
    "end": 2851
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2864,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 2871,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2897,
    "end": 2903
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2904,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParameters",
    "start": 2910,
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
    "value": "publicClassInPrivateModule",
    "start": 2956,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 2994,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3003,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3008,
    "end": 3009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3009,
    "end": 3010
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3010,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3028,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3035,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3061,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPrivateTypeParameters",
    "start": 3067,
    "end": 3104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3104,
    "end": 3105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3105,
    "end": 3106
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3107,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "privateClassInPrivateModule",
    "start": 3115,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3154,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3163,
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
    "value": "T",
    "start": 3168,
    "end": 3169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3172,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3188,
    "end": 3194
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3195,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3221,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParameters",
    "start": 3227,
    "end": 3263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3266,
    "end": 3273
  },
  {
    "type": "Identifier",
    "value": "publicClassInPrivateModule",
    "start": 3274,
    "end": 3300
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3300,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3312,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3321,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3346,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3353,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3379,
    "end": 3385
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3386,
    "end": 3391
  },
  {
    "type": "Identifier",
    "value": "publicClassWithPublicTypeParametersWithoutExtends",
    "start": 3392,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3455,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3464,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "T",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3475,
    "end": 3476
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3489,
    "end": 3495
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3496,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3499,
    "end": 3500
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3522,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "privateClassWithPublicTypeParametersWithoutExtends",
    "start": 3528,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3580,
    "end": 3581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Identifier",
    "value": "myMethod",
    "start": 3592,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3601,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3607,
    "end": 3608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3608,
    "end": 3609
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3612,
    "end": 3613
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3626,
    "end": 3632
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3633,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3646,
    "end": 3647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3652,
    "end": 3653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3654,
    "end": 3655
  }
]
```
