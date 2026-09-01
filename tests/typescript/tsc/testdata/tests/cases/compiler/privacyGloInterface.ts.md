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
              "start": 95,
              "end": 105
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 106,
              "end": 113
            },
            "abstract": false,
            "declare": false,
            "start": 89,
            "end": 113
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
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
                              "start": 161,
                              "end": 170
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 170
                          },
                          "start": 159,
                          "end": 170
                        },
                        "start": 157,
                        "end": 170
                      }
                    ],
                    "returnType": null,
                    "start": 156,
                    "end": 172
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
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
                              "start": 186,
                              "end": 196
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 196
                          },
                          "start": 184,
                          "end": 196
                        },
                        "start": 182,
                        "end": 196
                      }
                    ],
                    "returnType": null,
                    "start": 181,
                    "end": 198
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 220
                        },
                        "typeArguments": null,
                        "start": 211,
                        "end": 220
                      },
                      "start": 209,
                      "end": 220
                    },
                    "start": 207,
                    "end": 221
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 235,
                            "end": 241
                          },
                          "start": 233,
                          "end": 241
                        },
                        "start": 231,
                        "end": 241
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 254
                        },
                        "typeArguments": null,
                        "start": 244,
                        "end": 254
                      },
                      "start": 242,
                      "end": 254
                    },
                    "start": 230,
                    "end": 255
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
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
                              "start": 274,
                              "end": 283
                            },
                            "typeArguments": null,
                            "start": 274,
                            "end": 283
                          },
                          "start": 272,
                          "end": 283
                        },
                        "start": 270,
                        "end": 283
                      }
                    ],
                    "returnType": null,
                    "start": 265,
                    "end": 285
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
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
                              "start": 303,
                              "end": 313
                            },
                            "typeArguments": null,
                            "start": 303,
                            "end": 313
                          },
                          "start": 301,
                          "end": 313
                        },
                        "start": 299,
                        "end": 313
                      }
                    ],
                    "returnType": null,
                    "start": 294,
                    "end": 315
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 341
                        },
                        "typeArguments": null,
                        "start": 332,
                        "end": 341
                      },
                      "start": 330,
                      "end": 341
                    },
                    "start": 324,
                    "end": 342
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 360,
                            "end": 366
                          },
                          "start": 358,
                          "end": 366
                        },
                        "start": 356,
                        "end": 366
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 369,
                          "end": 379
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 379
                      },
                      "start": 367,
                      "end": 379
                    },
                    "start": 351,
                    "end": 380
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 394,
                            "end": 400
                          },
                          "start": 392,
                          "end": 400
                        },
                        "start": 391,
                        "end": 400
                      }
                    ],
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
                          "start": 403,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 403,
                        "end": 412
                      },
                      "start": 401,
                      "end": 412
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 390,
                    "end": 413
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 426,
                            "end": 432
                          },
                          "start": 424,
                          "end": 432
                        },
                        "start": 423,
                        "end": 432
                      }
                    ],
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
                          "start": 435,
                          "end": 445
                        },
                        "typeArguments": null,
                        "start": 435,
                        "end": 445
                      },
                      "start": 433,
                      "end": 445
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 422,
                    "end": 446
                  },
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
                      "start": 456,
                      "end": 457
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
                          "start": 459,
                          "end": 468
                        },
                        "typeArguments": null,
                        "start": 459,
                        "end": 468
                      },
                      "start": 457,
                      "end": 468
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 456,
                    "end": 469
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 478,
                      "end": 479
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
                          "start": 481,
                          "end": 491
                        },
                        "typeArguments": null,
                        "start": 481,
                        "end": 491
                      },
                      "start": 479,
                      "end": 491
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 478,
                    "end": 492
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 503
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
                          "start": 506,
                          "end": 515
                        },
                        "typeArguments": null,
                        "start": 506,
                        "end": 515
                      },
                      "start": 504,
                      "end": 515
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 502,
                    "end": 516
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
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
                          "start": 529,
                          "end": 539
                        },
                        "typeArguments": null,
                        "start": 529,
                        "end": 539
                      },
                      "start": 527,
                      "end": 539
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 525,
                    "end": 540
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 550,
                      "end": 552
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
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
                              "start": 557,
                              "end": 566
                            },
                            "typeArguments": null,
                            "start": 557,
                            "end": 566
                          },
                          "start": 555,
                          "end": 566
                        },
                        "start": 553,
                        "end": 566
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 550,
                    "end": 568
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 577,
                      "end": 579
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
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
                              "start": 584,
                              "end": 594
                            },
                            "typeArguments": null,
                            "start": 584,
                            "end": 594
                          },
                          "start": 582,
                          "end": 594
                        },
                        "start": 580,
                        "end": 594
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 577,
                    "end": 596
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 607
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
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 620
                        },
                        "typeArguments": null,
                        "start": 611,
                        "end": 620
                      },
                      "start": 609,
                      "end": 620
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 605,
                    "end": 621
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 630,
                      "end": 632
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
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 636,
                          "end": 646
                        },
                        "typeArguments": null,
                        "start": 636,
                        "end": 646
                      },
                      "start": 634,
                      "end": 646
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 630,
                    "end": 647
                  }
                ],
                "start": 146,
                "end": 654
              },
              "declare": false,
              "start": 126,
              "end": 654
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 119,
            "end": 654
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 670,
              "end": 680
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
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
                            "start": 696,
                            "end": 705
                          },
                          "typeArguments": null,
                          "start": 696,
                          "end": 705
                        },
                        "start": 694,
                        "end": 705
                      },
                      "start": 692,
                      "end": 705
                    }
                  ],
                  "returnType": null,
                  "start": 691,
                  "end": 707
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
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
                            "start": 721,
                            "end": 731
                          },
                          "typeArguments": null,
                          "start": 721,
                          "end": 731
                        },
                        "start": 719,
                        "end": 731
                      },
                      "start": 717,
                      "end": 731
                    }
                  ],
                  "returnType": null,
                  "start": 716,
                  "end": 733
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 746,
                        "end": 755
                      },
                      "typeArguments": null,
                      "start": 746,
                      "end": 755
                    },
                    "start": 744,
                    "end": 755
                  },
                  "start": 742,
                  "end": 756
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 770,
                          "end": 776
                        },
                        "start": 768,
                        "end": 776
                      },
                      "start": 766,
                      "end": 776
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 789
                      },
                      "typeArguments": null,
                      "start": 779,
                      "end": 789
                    },
                    "start": 777,
                    "end": 789
                  },
                  "start": 765,
                  "end": 790
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
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
                            "start": 809,
                            "end": 818
                          },
                          "typeArguments": null,
                          "start": 809,
                          "end": 818
                        },
                        "start": 807,
                        "end": 818
                      },
                      "start": 805,
                      "end": 818
                    }
                  ],
                  "returnType": null,
                  "start": 800,
                  "end": 820
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
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
                            "start": 838,
                            "end": 848
                          },
                          "typeArguments": null,
                          "start": 838,
                          "end": 848
                        },
                        "start": 836,
                        "end": 848
                      },
                      "start": 834,
                      "end": 848
                    }
                  ],
                  "returnType": null,
                  "start": 829,
                  "end": 850
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 867,
                        "end": 876
                      },
                      "typeArguments": null,
                      "start": 867,
                      "end": 876
                    },
                    "start": 865,
                    "end": 876
                  },
                  "start": 859,
                  "end": 877
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 895,
                          "end": 901
                        },
                        "start": 893,
                        "end": 901
                      },
                      "start": 891,
                      "end": 901
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 904,
                        "end": 914
                      },
                      "typeArguments": null,
                      "start": 904,
                      "end": 914
                    },
                    "start": 902,
                    "end": 914
                  },
                  "start": 886,
                  "end": 915
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 929,
                          "end": 935
                        },
                        "start": 927,
                        "end": 935
                      },
                      "start": 926,
                      "end": 935
                    }
                  ],
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
                        "start": 938,
                        "end": 947
                      },
                      "typeArguments": null,
                      "start": 938,
                      "end": 947
                    },
                    "start": 936,
                    "end": 947
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 925,
                  "end": 948
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 961,
                          "end": 967
                        },
                        "start": 959,
                        "end": 967
                      },
                      "start": 958,
                      "end": 967
                    }
                  ],
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
                        "start": 970,
                        "end": 980
                      },
                      "typeArguments": null,
                      "start": 970,
                      "end": 980
                    },
                    "start": 968,
                    "end": 980
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 957,
                  "end": 981
                },
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
                    "start": 991,
                    "end": 992
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
                        "start": 994,
                        "end": 1003
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 1003
                    },
                    "start": 992,
                    "end": 1003
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 991,
                  "end": 1004
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1013,
                    "end": 1014
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
                        "start": 1016,
                        "end": 1026
                      },
                      "typeArguments": null,
                      "start": 1016,
                      "end": 1026
                    },
                    "start": 1014,
                    "end": 1026
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1013,
                  "end": 1027
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1037,
                    "end": 1038
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
                        "start": 1041,
                        "end": 1050
                      },
                      "typeArguments": null,
                      "start": 1041,
                      "end": 1050
                    },
                    "start": 1039,
                    "end": 1050
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1037,
                  "end": 1051
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1060,
                    "end": 1061
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
                        "start": 1064,
                        "end": 1074
                      },
                      "typeArguments": null,
                      "start": 1064,
                      "end": 1074
                    },
                    "start": 1062,
                    "end": 1074
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1060,
                  "end": 1075
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1085,
                    "end": 1087
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
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
                            "start": 1092,
                            "end": 1101
                          },
                          "typeArguments": null,
                          "start": 1092,
                          "end": 1101
                        },
                        "start": 1090,
                        "end": 1101
                      },
                      "start": 1088,
                      "end": 1101
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1085,
                  "end": 1103
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1114
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
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
                            "start": 1119,
                            "end": 1129
                          },
                          "typeArguments": null,
                          "start": 1119,
                          "end": 1129
                        },
                        "start": 1117,
                        "end": 1129
                      },
                      "start": 1115,
                      "end": 1129
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1112,
                  "end": 1131
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1140,
                    "end": 1142
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
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1155
                      },
                      "typeArguments": null,
                      "start": 1146,
                      "end": 1155
                    },
                    "start": 1144,
                    "end": 1155
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1140,
                  "end": 1156
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1167
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
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1171,
                        "end": 1181
                      },
                      "typeArguments": null,
                      "start": 1171,
                      "end": 1181
                    },
                    "start": 1169,
                    "end": 1181
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1165,
                  "end": 1182
                }
              ],
              "start": 681,
              "end": 1189
            },
            "declare": false,
            "start": 660,
            "end": 1189
          }
        ],
        "start": 13,
        "end": 1191
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1191
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1208
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
              "start": 1223,
              "end": 1225
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
                "start": 1228,
                "end": 1235
              },
              "expression": false,
              "start": 1225,
              "end": 1235
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1215,
            "end": 1235
          }
        ],
        "start": 1209,
        "end": 1237
      },
      "abstract": false,
      "declare": false,
      "start": 1193,
      "end": 1237
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 1250,
        "end": 1259
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1271,
                      "end": 1280
                    },
                    "typeArguments": null,
                    "start": 1271,
                    "end": 1280
                  },
                  "start": 1269,
                  "end": 1280
                },
                "start": 1267,
                "end": 1280
              }
            ],
            "returnType": null,
            "start": 1266,
            "end": 1282
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1291,
                  "end": 1300
                },
                "typeArguments": null,
                "start": 1291,
                "end": 1300
              },
              "start": 1289,
              "end": 1300
            },
            "start": 1287,
            "end": 1301
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1325
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1325
                  },
                  "start": 1314,
                  "end": 1325
                },
                "start": 1312,
                "end": 1325
              }
            ],
            "returnType": null,
            "start": 1307,
            "end": 1327
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1340,
                  "end": 1349
                },
                "typeArguments": null,
                "start": 1340,
                "end": 1349
              },
              "start": 1338,
              "end": 1349
            },
            "start": 1332,
            "end": 1350
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1360,
                    "end": 1366
                  },
                  "start": 1358,
                  "end": 1366
                },
                "start": 1357,
                "end": 1366
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1369,
                  "end": 1378
                },
                "typeArguments": null,
                "start": 1369,
                "end": 1378
              },
              "start": 1367,
              "end": 1378
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1356,
            "end": 1379
          },
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
              "start": 1385,
              "end": 1386
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1388,
                  "end": 1397
                },
                "typeArguments": null,
                "start": 1388,
                "end": 1397
              },
              "start": 1386,
              "end": 1397
            },
            "accessibility": null,
            "static": false,
            "start": 1385,
            "end": 1398
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1405
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1408,
                  "end": 1417
                },
                "typeArguments": null,
                "start": 1408,
                "end": 1417
              },
              "start": 1406,
              "end": 1417
            },
            "accessibility": null,
            "static": false,
            "start": 1404,
            "end": 1418
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1426
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1431,
                      "end": 1440
                    },
                    "typeArguments": null,
                    "start": 1431,
                    "end": 1440
                  },
                  "start": 1429,
                  "end": 1440
                },
                "start": 1427,
                "end": 1440
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1424,
            "end": 1442
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1447,
              "end": 1449
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
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1453,
                  "end": 1462
                },
                "typeArguments": null,
                "start": 1453,
                "end": 1462
              },
              "start": 1451,
              "end": 1462
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1447,
            "end": 1463
          }
        ],
        "start": 1260,
        "end": 1465
      },
      "declare": false,
      "start": 1240,
      "end": 1465
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1477,
        "end": 1479
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1503,
                "end": 1514
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1525,
                      "end": 1527
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1531,
                        "end": 1537
                      },
                      "start": 1529,
                      "end": 1537
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1525,
                    "end": 1538
                  }
                ],
                "start": 1515,
                "end": 1544
              },
              "declare": false,
              "start": 1493,
              "end": 1544
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1486,
            "end": 1544
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1560,
              "end": 1572
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1583,
                    "end": 1585
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1589,
                      "end": 1595
                    },
                    "start": 1587,
                    "end": 1595
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1583,
                  "end": 1596
                }
              ],
              "start": 1573,
              "end": 1602
            },
            "declare": false,
            "start": 1550,
            "end": 1602
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1618,
              "end": 1631
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1640,
                  "end": 1651
                },
                "typeArguments": null,
                "start": 1640,
                "end": 1651
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1652,
              "end": 1659
            },
            "declare": false,
            "start": 1608,
            "end": 1659
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1674,
              "end": 1687
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1696,
                  "end": 1708
                },
                "typeArguments": null,
                "start": 1696,
                "end": 1708
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1709,
              "end": 1716
            },
            "declare": false,
            "start": 1664,
            "end": 1716
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1738,
                "end": 1750
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1759,
                    "end": 1770
                  },
                  "typeArguments": null,
                  "start": 1759,
                  "end": 1770
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1771,
                "end": 1778
              },
              "declare": false,
              "start": 1728,
              "end": 1778
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1721,
            "end": 1778
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1800,
                "end": 1812
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1821,
                    "end": 1833
                  },
                  "typeArguments": null,
                  "start": 1821,
                  "end": 1833
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1834,
                "end": 1841
              },
              "declare": false,
              "start": 1790,
              "end": 1841
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1783,
            "end": 1841
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1857,
              "end": 1870
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1879,
                  "end": 1891
                },
                "typeArguments": null,
                "start": 1879,
                "end": 1891
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1893,
                  "end": 1904
                },
                "typeArguments": null,
                "start": 1893,
                "end": 1904
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 1905,
              "end": 1912
            },
            "declare": false,
            "start": 1847,
            "end": 1912
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1946
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1968
                  },
                  "typeArguments": null,
                  "start": 1956,
                  "end": 1968
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1970,
                    "end": 1981
                  },
                  "typeArguments": null,
                  "start": 1970,
                  "end": 1981
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 1982,
                "end": 1989
              },
              "declare": false,
              "start": 1924,
              "end": 1989
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1917,
            "end": 1989
          }
        ],
        "start": 1480,
        "end": 1991
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1467,
      "end": 1991
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2003,
        "end": 2015
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2022,
              "end": 2024
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2028,
                "end": 2034
              },
              "start": 2026,
              "end": 2034
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2022,
            "end": 2035
          }
        ],
        "start": 2016,
        "end": 2037
      },
      "declare": false,
      "start": 1993,
      "end": 2037
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C3_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 2049,
        "end": 2062
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 2071,
            "end": 2083
          },
          "typeArguments": null,
          "start": 2071,
          "end": 2083
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 2084,
        "end": 2087
      },
      "declare": false,
      "start": 2039,
      "end": 2087
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2087
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
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 95,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 119,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 126,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 136,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 157,
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
    "value": "C1_public",
    "start": 161,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 186,
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
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 211,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 231,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 244,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 265,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 274,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 294,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 303,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 324,
    "end": 327
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
    "value": "C1_public",
    "start": 332,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 356,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 360,
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
    "value": ":",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 369,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 403,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Punctuator",
    "value": "]",
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
    "value": "C2_private",
    "start": 435,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 459,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 481,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 529,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 550,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 553,
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
    "value": "C1_public",
    "start": 557,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 577,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 584,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 605,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 611,
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
    "value": "f4",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 636,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 653,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 660,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 670,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 696,
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
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 717,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 719,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 721,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733
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
    "value": "C1_public",
    "start": 746,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 770,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 779,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 789,
    "end": 790
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 800,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 805,
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
    "value": "C1_public",
    "start": 809,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 829,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 838,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 848,
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
    "value": "new",
    "start": 859,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 867,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 876,
    "end": 877
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 886,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 895,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 901,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 904,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 914,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 925,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 929,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 938,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 957,
    "end": 958
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 961,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 967,
    "end": 968
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 968,
    "end": 969
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 970,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 991,
    "end": 992
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 994,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1016,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1041,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1064,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1085,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1088,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1092,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1112,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1115,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1119,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1140,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1146,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1165,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1168,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1171,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1193,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1199,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1215,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1223,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1240,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 1250,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1271,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1291,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1312,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1314,
    "end": 1315
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1316,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1340,
    "end": 1349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1360,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1369,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1385,
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
    "value": "C5_public",
    "start": 1388,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1408,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1424,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1427,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1431,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1447,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 1453,
    "end": 1462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1467,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1486,
    "end": 1492
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1493,
    "end": 1502
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 1503,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1531,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1550,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 1560,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1583,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1589,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1608,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "m3_C1_private",
    "start": 1618,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 1640,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1664,
    "end": 1673
  },
  {
    "type": "Identifier",
    "value": "m3_C2_private",
    "start": 1674,
    "end": 1687
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1688,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 1696,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1721,
    "end": 1727
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1728,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "m3_C3_public",
    "start": 1738,
    "end": 1750
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1751,
    "end": 1758
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 1759,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1771,
    "end": 1772
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1783,
    "end": 1789
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1790,
    "end": 1799
  },
  {
    "type": "Identifier",
    "value": "m3_C4_public",
    "start": 1800,
    "end": 1812
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1813,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 1821,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1847,
    "end": 1856
  },
  {
    "type": "Identifier",
    "value": "m3_C5_private",
    "start": 1857,
    "end": 1870
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1871,
    "end": 1878
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 1879,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 1893,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1905,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1911,
    "end": 1912
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1917,
    "end": 1923
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1924,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "m3_C6_public",
    "start": 1934,
    "end": 1946
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1947,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 1956,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 1970,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1993,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2003,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2028,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2034,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2039,
    "end": 2048
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 2049,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2063,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 2071,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2086,
    "end": 2087
  }
]
```
