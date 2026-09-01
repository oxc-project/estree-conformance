__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 43,
                  "end": 55
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 79,
                          "end": 81
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 82,
                          "end": 93
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 73,
                        "end": 93
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 66,
                      "end": 93
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "FunctionDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 120
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "NewExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 148,
                                  "end": 150
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 144,
                                "end": 150
                              },
                              "start": 137,
                              "end": 151
                            }
                          ],
                          "start": 123,
                          "end": 161
                        },
                        "expression": false,
                        "start": 109,
                        "end": 161
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 102,
                      "end": 161
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
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 181,
                              "end": 183
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 188
                            },
                            "definite": false,
                            "start": 181,
                            "end": 188
                          }
                        ],
                        "declare": false,
                        "start": 177,
                        "end": 189
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 170,
                      "end": 189
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
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 213,
                                    "end": 215
                                  },
                                  "typeArguments": null,
                                  "start": 213,
                                  "end": 215
                                },
                                "start": 211,
                                "end": 215
                              },
                              "start": 209,
                              "end": 215
                            },
                            "init": null,
                            "definite": false,
                            "start": 209,
                            "end": 215
                          }
                        ],
                        "declare": false,
                        "start": 205,
                        "end": 216
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 198,
                      "end": 216
                    }
                  ],
                  "start": 56,
                  "end": 222
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 33,
                "end": 222
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 222
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 238,
                "end": 251
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 277
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 278,
                        "end": 289
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 269,
                      "end": 289
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 262,
                    "end": 289
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 316
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 346
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 340,
                              "end": 346
                            },
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 319,
                        "end": 357
                      },
                      "expression": false,
                      "start": 305,
                      "end": 357
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 298,
                    "end": 357
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 377,
                            "end": 379
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 384
                          },
                          "definite": false,
                          "start": 377,
                          "end": 384
                        }
                      ],
                      "declare": false,
                      "start": 373,
                      "end": 385
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 366,
                    "end": 385
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 409,
                                  "end": 411
                                },
                                "typeArguments": null,
                                "start": 409,
                                "end": 411
                              },
                              "start": 407,
                              "end": 411
                            },
                            "start": 405,
                            "end": 411
                          },
                          "init": null,
                          "definite": false,
                          "start": 405,
                          "end": 411
                        }
                      ],
                      "declare": false,
                      "start": 401,
                      "end": 412
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 394,
                    "end": 412
                  }
                ],
                "start": 252,
                "end": 418
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 228,
              "end": 418
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 446,
                  "end": 460
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSDeclareFunction",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 487,
                          "end": 489
                        },
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 478,
                        "end": 492
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 471,
                      "end": 492
                    },
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "ClassDeclaration",
                        "decorators": [],
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 516
                        },
                        "typeParameters": null,
                        "superClass": null,
                        "superTypeArguments": null,
                        "implements": [],
                        "body": {
                          "type": "ClassBody",
                          "body": [],
                          "start": 517,
                          "end": 528
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 508,
                        "end": 528
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 501,
                      "end": 528
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
                              "name": "v1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeLiteral",
                                  "members": [
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
                                            "name": "c1",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 562,
                                            "end": 564
                                          },
                                          "typeArguments": null,
                                          "start": 562,
                                          "end": 564
                                        },
                                        "start": 560,
                                        "end": 564
                                      },
                                      "start": 554,
                                      "end": 565
                                    }
                                  ],
                                  "start": 552,
                                  "end": 567
                                },
                                "start": 550,
                                "end": 567
                              },
                              "start": 548,
                              "end": 567
                            },
                            "init": null,
                            "definite": false,
                            "start": 548,
                            "end": 567
                          }
                        ],
                        "declare": false,
                        "start": 544,
                        "end": 568
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 537,
                      "end": 568
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
                              "name": "v2",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 592,
                                    "end": 594
                                  },
                                  "typeArguments": null,
                                  "start": 592,
                                  "end": 594
                                },
                                "start": 590,
                                "end": 594
                              },
                              "start": 588,
                              "end": 594
                            },
                            "init": null,
                            "definite": false,
                            "start": 588,
                            "end": 594
                          }
                        ],
                        "declare": false,
                        "start": 584,
                        "end": 595
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 577,
                      "end": 595
                    }
                  ],
                  "start": 461,
                  "end": 601
                },
                "kind": "module",
                "declare": true,
                "global": false,
                "start": 431,
                "end": 601
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 424,
              "end": 601
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m1_M4_private",
                "raw": "\"m1_M4_private\"",
                "start": 622,
                "end": 637
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 664,
                        "end": 666
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 655,
                      "end": 669
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 648,
                    "end": 669
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 691,
                        "end": 693
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 694,
                        "end": 705
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 685,
                      "end": 705
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 678,
                    "end": 705
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
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
                                          "name": "c1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 739,
                                          "end": 741
                                        },
                                        "typeArguments": null,
                                        "start": 739,
                                        "end": 741
                                      },
                                      "start": 737,
                                      "end": 741
                                    },
                                    "start": 731,
                                    "end": 742
                                  }
                                ],
                                "start": 729,
                                "end": 744
                              },
                              "start": 727,
                              "end": 744
                            },
                            "start": 725,
                            "end": 744
                          },
                          "init": null,
                          "definite": false,
                          "start": 725,
                          "end": 744
                        }
                      ],
                      "declare": false,
                      "start": 721,
                      "end": 745
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 714,
                    "end": 745
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 769,
                                  "end": 771
                                },
                                "typeArguments": null,
                                "start": 769,
                                "end": 771
                              },
                              "start": 767,
                              "end": 771
                            },
                            "start": 765,
                            "end": 771
                          },
                          "init": null,
                          "definite": false,
                          "start": 765,
                          "end": 771
                        }
                      ],
                      "declare": false,
                      "start": 761,
                      "end": 772
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 754,
                    "end": 772
                  }
                ],
                "start": 638,
                "end": 778
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 607,
              "end": 778
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 805
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 820
              },
              "importKind": "value",
              "start": 784,
              "end": 821
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
                      "name": "m1_im1_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 837,
                      "end": 861
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 878
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 879,
                        "end": 881
                      },
                      "optional": false,
                      "computed": false,
                      "start": 864,
                      "end": 881
                    },
                    "definite": false,
                    "start": 837,
                    "end": 881
                  }
                ],
                "declare": false,
                "start": 833,
                "end": 882
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 826,
              "end": 882
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
                      "name": "m1_im1_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 898,
                      "end": 922
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 929,
                          "end": 943
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 944,
                          "end": 946
                        },
                        "optional": false,
                        "computed": false,
                        "start": 929,
                        "end": 946
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 925,
                      "end": 948
                    },
                    "definite": false,
                    "start": 898,
                    "end": 948
                  }
                ],
                "declare": false,
                "start": 894,
                "end": 949
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 887,
              "end": 949
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
                      "name": "m1_im1_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 965,
                      "end": 989
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 992,
                        "end": 1006
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1009
                      },
                      "optional": false,
                      "computed": false,
                      "start": 992,
                      "end": 1009
                    },
                    "definite": false,
                    "start": 965,
                    "end": 1009
                  }
                ],
                "declare": false,
                "start": 961,
                "end": 1010
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 954,
              "end": 1010
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
                      "name": "m1_im1_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1026,
                      "end": 1050
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im1_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1053,
                          "end": 1067
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1068,
                          "end": 1070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1053,
                        "end": 1070
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1053,
                      "end": 1072
                    },
                    "definite": false,
                    "start": 1026,
                    "end": 1072
                  }
                ],
                "declare": false,
                "start": 1022,
                "end": 1073
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1015,
              "end": 1073
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
                    "name": "m1_im1_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1082,
                    "end": 1107
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1124
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1125,
                      "end": 1127
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1110,
                    "end": 1127
                  },
                  "definite": false,
                  "start": 1082,
                  "end": 1127
                }
              ],
              "declare": false,
              "start": 1078,
              "end": 1128
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
                    "name": "m1_im1_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1137,
                    "end": 1162
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1169,
                        "end": 1183
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1184,
                        "end": 1186
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1169,
                      "end": 1186
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1165,
                    "end": 1188
                  },
                  "definite": false,
                  "start": 1137,
                  "end": 1188
                }
              ],
              "declare": false,
              "start": 1133,
              "end": 1189
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
                    "name": "m1_im1_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1223
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1226,
                      "end": 1240
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1241,
                      "end": 1243
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1226,
                    "end": 1243
                  },
                  "definite": false,
                  "start": 1198,
                  "end": 1243
                }
              ],
              "declare": false,
              "start": 1194,
              "end": 1244
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
                    "name": "m1_im1_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1253,
                    "end": 1278
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1281,
                        "end": 1295
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1296,
                        "end": 1298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1281,
                      "end": 1298
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1281,
                    "end": 1300
                  },
                  "definite": false,
                  "start": 1253,
                  "end": 1300
                }
              ],
              "declare": false,
              "start": 1249,
              "end": 1301
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1315,
                "end": 1329
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1332,
                "end": 1345
              },
              "importKind": "value",
              "start": 1308,
              "end": 1346
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
                      "name": "m1_im2_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1362,
                      "end": 1386
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1389,
                        "end": 1403
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1406
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1389,
                      "end": 1406
                    },
                    "definite": false,
                    "start": 1362,
                    "end": 1406
                  }
                ],
                "declare": false,
                "start": 1358,
                "end": 1407
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1351,
              "end": 1407
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
                      "name": "m1_im2_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1423,
                      "end": 1447
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1454,
                          "end": 1468
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1469,
                          "end": 1471
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1454,
                        "end": 1471
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1450,
                      "end": 1473
                    },
                    "definite": false,
                    "start": 1423,
                    "end": 1473
                  }
                ],
                "declare": false,
                "start": 1419,
                "end": 1474
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1412,
              "end": 1474
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
                      "name": "m1_im2_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1490,
                      "end": 1514
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1517,
                        "end": 1531
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1532,
                        "end": 1534
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1517,
                      "end": 1534
                    },
                    "definite": false,
                    "start": 1490,
                    "end": 1534
                  }
                ],
                "declare": false,
                "start": 1486,
                "end": 1535
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1479,
              "end": 1535
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
                      "name": "m1_im2_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1551,
                      "end": 1575
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1578,
                          "end": 1592
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1593,
                          "end": 1595
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1578,
                        "end": 1595
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1578,
                      "end": 1597
                    },
                    "definite": false,
                    "start": 1551,
                    "end": 1597
                  }
                ],
                "declare": false,
                "start": 1547,
                "end": 1598
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1540,
              "end": 1598
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
                    "name": "m1_im2_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1607,
                    "end": 1632
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1635,
                      "end": 1649
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1652
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1635,
                    "end": 1652
                  },
                  "definite": false,
                  "start": 1607,
                  "end": 1652
                }
              ],
              "declare": false,
              "start": 1603,
              "end": 1653
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
                    "name": "m1_im2_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1662,
                    "end": 1687
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1694,
                        "end": 1708
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1709,
                        "end": 1711
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1694,
                      "end": 1711
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 1690,
                    "end": 1713
                  },
                  "definite": false,
                  "start": 1662,
                  "end": 1713
                }
              ],
              "declare": false,
              "start": 1658,
              "end": 1714
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
                    "name": "m1_im2_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1723,
                    "end": 1748
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1751,
                      "end": 1765
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1766,
                      "end": 1768
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1751,
                    "end": 1768
                  },
                  "definite": false,
                  "start": 1723,
                  "end": 1768
                }
              ],
              "declare": false,
              "start": 1719,
              "end": 1769
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
                    "name": "m1_im2_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1778,
                    "end": 1803
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1806,
                        "end": 1820
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1821,
                        "end": 1823
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1806,
                      "end": 1823
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1806,
                    "end": 1825
                  },
                  "definite": false,
                  "start": 1778,
                  "end": 1825
                }
              ],
              "declare": false,
              "start": 1774,
              "end": 1826
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 1839,
                "end": 1853
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M3_public",
                  "raw": "\"m1_M3_public\"",
                  "start": 1864,
                  "end": 1878
                },
                "start": 1856,
                "end": 1879
              },
              "importKind": "value",
              "start": 1832,
              "end": 1880
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
                      "name": "m1_im3_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1896,
                      "end": 1920
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1923,
                        "end": 1937
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1938,
                        "end": 1940
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1923,
                      "end": 1940
                    },
                    "definite": false,
                    "start": 1896,
                    "end": 1940
                  }
                ],
                "declare": false,
                "start": 1892,
                "end": 1941
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1885,
              "end": 1941
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
                      "name": "m1_im3_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1957,
                      "end": 1981
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1988,
                          "end": 2002
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2003,
                          "end": 2005
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1988,
                        "end": 2005
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1984,
                      "end": 2007
                    },
                    "definite": false,
                    "start": 1957,
                    "end": 2007
                  }
                ],
                "declare": false,
                "start": 1953,
                "end": 2008
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 1946,
              "end": 2008
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
                      "name": "m1_im3_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2024,
                      "end": 2048
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2051,
                        "end": 2065
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2066,
                        "end": 2068
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2051,
                      "end": 2068
                    },
                    "definite": false,
                    "start": 2024,
                    "end": 2068
                  }
                ],
                "declare": false,
                "start": 2020,
                "end": 2069
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2013,
              "end": 2069
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
                      "name": "m1_im3_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2085,
                      "end": 2109
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2112,
                          "end": 2126
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2127,
                          "end": 2129
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2112,
                        "end": 2129
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2112,
                      "end": 2131
                    },
                    "definite": false,
                    "start": 2085,
                    "end": 2131
                  }
                ],
                "declare": false,
                "start": 2081,
                "end": 2132
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2074,
              "end": 2132
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
                    "name": "m1_im3_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2141,
                    "end": 2166
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2169,
                      "end": 2183
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2184,
                      "end": 2186
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2169,
                    "end": 2186
                  },
                  "definite": false,
                  "start": 2141,
                  "end": 2186
                }
              ],
              "declare": false,
              "start": 2137,
              "end": 2187
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
                    "name": "m1_im3_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2196,
                    "end": 2221
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2228,
                        "end": 2242
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2243,
                        "end": 2245
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2228,
                      "end": 2245
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2224,
                    "end": 2247
                  },
                  "definite": false,
                  "start": 2196,
                  "end": 2247
                }
              ],
              "declare": false,
              "start": 2192,
              "end": 2248
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
                    "name": "m1_im3_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2257,
                    "end": 2282
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2285,
                      "end": 2299
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2302
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2285,
                    "end": 2302
                  },
                  "definite": false,
                  "start": 2257,
                  "end": 2302
                }
              ],
              "declare": false,
              "start": 2253,
              "end": 2303
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
                    "name": "m1_im3_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2312,
                    "end": 2337
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2340,
                        "end": 2354
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2355,
                        "end": 2357
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2340,
                      "end": 2357
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2340,
                    "end": 2359
                  },
                  "definite": false,
                  "start": 2312,
                  "end": 2359
                }
              ],
              "declare": false,
              "start": 2308,
              "end": 2360
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 2373,
                "end": 2387
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m1_M4_private",
                  "raw": "\"m1_M4_private\"",
                  "start": 2398,
                  "end": 2413
                },
                "start": 2390,
                "end": 2414
              },
              "importKind": "value",
              "start": 2366,
              "end": 2415
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
                      "name": "m1_im4_private_v1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2431,
                      "end": 2455
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2458,
                        "end": 2472
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2473,
                        "end": 2475
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2458,
                      "end": 2475
                    },
                    "definite": false,
                    "start": 2431,
                    "end": 2475
                  }
                ],
                "declare": false,
                "start": 2427,
                "end": 2476
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2420,
              "end": 2476
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
                      "name": "m1_im4_private_v2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2492,
                      "end": 2516
                    },
                    "init": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im4_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2523,
                          "end": 2537
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2538,
                          "end": 2540
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2523,
                        "end": 2540
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 2519,
                      "end": 2542
                    },
                    "definite": false,
                    "start": 2492,
                    "end": 2542
                  }
                ],
                "declare": false,
                "start": 2488,
                "end": 2543
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2481,
              "end": 2543
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
                      "name": "m1_im4_private_v3_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2559,
                      "end": 2583
                    },
                    "init": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2586,
                        "end": 2600
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2601,
                        "end": 2603
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2586,
                      "end": 2603
                    },
                    "definite": false,
                    "start": 2559,
                    "end": 2603
                  }
                ],
                "declare": false,
                "start": 2555,
                "end": 2604
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2548,
              "end": 2604
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
                      "name": "m1_im4_private_v4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2620,
                      "end": 2644
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_im4_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2647,
                          "end": 2661
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2662,
                          "end": 2664
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2647,
                        "end": 2664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2647,
                      "end": 2666
                    },
                    "definite": false,
                    "start": 2620,
                    "end": 2666
                  }
                ],
                "declare": false,
                "start": 2616,
                "end": 2667
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2609,
              "end": 2667
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
                    "name": "m1_im4_private_v1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2676,
                    "end": 2701
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2704,
                      "end": 2718
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2719,
                      "end": 2721
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2704,
                    "end": 2721
                  },
                  "definite": false,
                  "start": 2676,
                  "end": 2721
                }
              ],
              "declare": false,
              "start": 2672,
              "end": 2722
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
                    "name": "m1_im4_private_v2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2731,
                    "end": 2756
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2763,
                        "end": 2777
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2778,
                        "end": 2780
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2763,
                      "end": 2780
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2759,
                    "end": 2782
                  },
                  "definite": false,
                  "start": 2731,
                  "end": 2782
                }
              ],
              "declare": false,
              "start": 2727,
              "end": 2783
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
                    "name": "m1_im4_private_v3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2792,
                    "end": 2817
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2820,
                      "end": 2834
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2835,
                      "end": 2837
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2820,
                    "end": 2837
                  },
                  "definite": false,
                  "start": 2792,
                  "end": 2837
                }
              ],
              "declare": false,
              "start": 2788,
              "end": 2838
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
                    "name": "m1_im4_private_v4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2847,
                    "end": 2872
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2875,
                        "end": 2889
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2890,
                        "end": 2892
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2875,
                      "end": 2892
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2875,
                    "end": 2894
                  },
                  "definite": false,
                  "start": 2847,
                  "end": 2894
                }
              ],
              "declare": false,
              "start": 2843,
              "end": 2895
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2915,
                  "end": 2928
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2931,
                  "end": 2943
                },
                "importKind": "value",
                "start": 2908,
                "end": 2944
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2901,
              "end": 2944
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im2_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2963,
                  "end": 2976
                },
                "moduleReference": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_M2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2979,
                  "end": 2992
                },
                "importKind": "value",
                "start": 2956,
                "end": 2993
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2949,
              "end": 2993
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im3_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3012,
                  "end": 3025
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M3_public",
                    "raw": "\"m1_M3_public\"",
                    "start": 3036,
                    "end": 3050
                  },
                  "start": 3028,
                  "end": 3051
                },
                "importKind": "value",
                "start": 3005,
                "end": 3052
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2998,
              "end": 3052
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSImportEqualsDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_im4_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3071,
                  "end": 3084
                },
                "moduleReference": {
                  "type": "TSExternalModuleReference",
                  "expression": {
                    "type": "Literal",
                    "value": "m1_M4_private",
                    "raw": "\"m1_M4_private\"",
                    "start": 3095,
                    "end": 3110
                  },
                  "start": 3087,
                  "end": 3111
                },
                "importKind": "value",
                "start": 3064,
                "end": 3112
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3057,
              "end": 3112
            }
          ],
          "start": 20,
          "end": 3114
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3114
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3126,
        "end": 3128
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3152,
                "end": 3164
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3188,
                        "end": 3190
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3191,
                        "end": 3202
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3182,
                      "end": 3202
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3175,
                    "end": 3202
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3227,
                        "end": 3229
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3257,
                                "end": 3259
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 3253,
                              "end": 3259
                            },
                            "start": 3246,
                            "end": 3260
                          }
                        ],
                        "start": 3232,
                        "end": 3270
                      },
                      "expression": false,
                      "start": 3218,
                      "end": 3270
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3211,
                    "end": 3270
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3290,
                            "end": 3292
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3295,
                            "end": 3297
                          },
                          "definite": false,
                          "start": 3290,
                          "end": 3297
                        }
                      ],
                      "declare": false,
                      "start": 3286,
                      "end": 3298
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3279,
                    "end": 3298
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3322,
                                  "end": 3324
                                },
                                "typeArguments": null,
                                "start": 3322,
                                "end": 3324
                              },
                              "start": 3320,
                              "end": 3324
                            },
                            "start": 3318,
                            "end": 3324
                          },
                          "init": null,
                          "definite": false,
                          "start": 3318,
                          "end": 3324
                        }
                      ],
                      "declare": false,
                      "start": 3314,
                      "end": 3325
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3307,
                    "end": 3325
                  }
                ],
                "start": 3165,
                "end": 3331
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 3142,
              "end": 3331
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3135,
            "end": 3331
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3347,
              "end": 3360
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
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3384,
                      "end": 3386
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3387,
                      "end": 3398
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3378,
                    "end": 3398
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3371,
                  "end": 3398
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3423,
                      "end": 3425
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3453,
                              "end": 3455
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 3449,
                            "end": 3455
                          },
                          "start": 3442,
                          "end": 3456
                        }
                      ],
                      "start": 3428,
                      "end": 3466
                    },
                    "expression": false,
                    "start": 3414,
                    "end": 3466
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3407,
                  "end": 3466
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3486,
                          "end": 3488
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3491,
                          "end": 3493
                        },
                        "definite": false,
                        "start": 3486,
                        "end": 3493
                      }
                    ],
                    "declare": false,
                    "start": 3482,
                    "end": 3494
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3475,
                  "end": 3494
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
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3518,
                                "end": 3520
                              },
                              "typeArguments": null,
                              "start": 3518,
                              "end": 3520
                            },
                            "start": 3516,
                            "end": 3520
                          },
                          "start": 3514,
                          "end": 3520
                        },
                        "init": null,
                        "definite": false,
                        "start": 3514,
                        "end": 3520
                      }
                    ],
                    "declare": false,
                    "start": 3510,
                    "end": 3521
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3503,
                  "end": 3521
                }
              ],
              "start": 3361,
              "end": 3527
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3337,
            "end": 3527
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 3555,
                "end": 3569
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSDeclareFunction",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3596,
                        "end": 3598
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3587,
                      "end": 3601
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3580,
                    "end": 3601
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3623,
                        "end": 3625
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 3626,
                        "end": 3637
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 3617,
                      "end": 3637
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3610,
                    "end": 3637
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
                            "name": "v1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
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
                                          "name": "c1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3671,
                                          "end": 3673
                                        },
                                        "typeArguments": null,
                                        "start": 3671,
                                        "end": 3673
                                      },
                                      "start": 3669,
                                      "end": 3673
                                    },
                                    "start": 3663,
                                    "end": 3674
                                  }
                                ],
                                "start": 3661,
                                "end": 3676
                              },
                              "start": 3659,
                              "end": 3676
                            },
                            "start": 3657,
                            "end": 3676
                          },
                          "init": null,
                          "definite": false,
                          "start": 3657,
                          "end": 3676
                        }
                      ],
                      "declare": false,
                      "start": 3653,
                      "end": 3677
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3646,
                    "end": 3677
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
                            "name": "v2",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3701,
                                  "end": 3703
                                },
                                "typeArguments": null,
                                "start": 3701,
                                "end": 3703
                              },
                              "start": 3699,
                              "end": 3703
                            },
                            "start": 3697,
                            "end": 3703
                          },
                          "init": null,
                          "definite": false,
                          "start": 3697,
                          "end": 3703
                        }
                      ],
                      "declare": false,
                      "start": 3693,
                      "end": 3704
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 3686,
                    "end": 3704
                  }
                ],
                "start": 3570,
                "end": 3710
              },
              "kind": "module",
              "declare": true,
              "global": false,
              "start": 3540,
              "end": 3710
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3533,
            "end": 3710
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "m2_M4_private",
              "raw": "\"m2_M4_private\"",
              "start": 3731,
              "end": 3746
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3773,
                      "end": 3775
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 3764,
                    "end": 3778
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3757,
                  "end": 3778
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3800,
                      "end": 3802
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 3803,
                      "end": 3814
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 3794,
                    "end": 3814
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3787,
                  "end": 3814
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
                          "name": "v1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
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
                                        "name": "c1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3848,
                                        "end": 3850
                                      },
                                      "typeArguments": null,
                                      "start": 3848,
                                      "end": 3850
                                    },
                                    "start": 3846,
                                    "end": 3850
                                  },
                                  "start": 3840,
                                  "end": 3851
                                }
                              ],
                              "start": 3838,
                              "end": 3853
                            },
                            "start": 3836,
                            "end": 3853
                          },
                          "start": 3834,
                          "end": 3853
                        },
                        "init": null,
                        "definite": false,
                        "start": 3834,
                        "end": 3853
                      }
                    ],
                    "declare": false,
                    "start": 3830,
                    "end": 3854
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3823,
                  "end": 3854
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
                          "name": "v2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3878,
                                "end": 3880
                              },
                              "typeArguments": null,
                              "start": 3878,
                              "end": 3880
                            },
                            "start": 3876,
                            "end": 3880
                          },
                          "start": 3874,
                          "end": 3880
                        },
                        "init": null,
                        "definite": false,
                        "start": 3874,
                        "end": 3880
                      }
                    ],
                    "declare": false,
                    "start": 3870,
                    "end": 3881
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 3863,
                  "end": 3881
                }
              ],
              "start": 3747,
              "end": 3887
            },
            "kind": "module",
            "declare": true,
            "global": false,
            "start": 3716,
            "end": 3887
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3900,
              "end": 3914
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3917,
              "end": 3929
            },
            "importKind": "value",
            "start": 3893,
            "end": 3930
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
                    "name": "m1_im1_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3946,
                    "end": 3970
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3973,
                      "end": 3987
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3988,
                      "end": 3990
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3973,
                    "end": 3990
                  },
                  "definite": false,
                  "start": 3946,
                  "end": 3990
                }
              ],
              "declare": false,
              "start": 3942,
              "end": 3991
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3935,
            "end": 3991
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
                    "name": "m1_im1_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4007,
                    "end": 4031
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4038,
                        "end": 4052
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4053,
                        "end": 4055
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4038,
                      "end": 4055
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4034,
                    "end": 4057
                  },
                  "definite": false,
                  "start": 4007,
                  "end": 4057
                }
              ],
              "declare": false,
              "start": 4003,
              "end": 4058
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3996,
            "end": 4058
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
                    "name": "m1_im1_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4074,
                    "end": 4098
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4101,
                      "end": 4115
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4116,
                      "end": 4118
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4101,
                    "end": 4118
                  },
                  "definite": false,
                  "start": 4074,
                  "end": 4118
                }
              ],
              "declare": false,
              "start": 4070,
              "end": 4119
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4063,
            "end": 4119
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
                    "name": "m1_im1_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4135,
                    "end": 4159
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4162,
                        "end": 4176
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4177,
                        "end": 4179
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4162,
                      "end": 4179
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4162,
                    "end": 4181
                  },
                  "definite": false,
                  "start": 4135,
                  "end": 4181
                }
              ],
              "declare": false,
              "start": 4131,
              "end": 4182
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4124,
            "end": 4182
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
                  "name": "m1_im1_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4191,
                  "end": 4216
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4219,
                    "end": 4233
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4234,
                    "end": 4236
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4219,
                  "end": 4236
                },
                "definite": false,
                "start": 4191,
                "end": 4236
              }
            ],
            "declare": false,
            "start": 4187,
            "end": 4237
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
                  "name": "m1_im1_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4246,
                  "end": 4271
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4278,
                      "end": 4292
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4293,
                      "end": 4295
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4278,
                    "end": 4295
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4274,
                  "end": 4297
                },
                "definite": false,
                "start": 4246,
                "end": 4297
              }
            ],
            "declare": false,
            "start": 4242,
            "end": 4298
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
                  "name": "m1_im1_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4307,
                  "end": 4332
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4335,
                    "end": 4349
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4350,
                    "end": 4352
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4335,
                  "end": 4352
                },
                "definite": false,
                "start": 4307,
                "end": 4352
              }
            ],
            "declare": false,
            "start": 4303,
            "end": 4353
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
                  "name": "m1_im1_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4362,
                  "end": 4387
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4390,
                      "end": 4404
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4405,
                      "end": 4407
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4390,
                    "end": 4407
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4390,
                  "end": 4409
                },
                "definite": false,
                "start": 4362,
                "end": 4409
              }
            ],
            "declare": false,
            "start": 4358,
            "end": 4410
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4424,
              "end": 4438
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_M2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4441,
              "end": 4454
            },
            "importKind": "value",
            "start": 4417,
            "end": 4455
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
                    "name": "m1_im2_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4471,
                    "end": 4495
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4498,
                      "end": 4512
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4513,
                      "end": 4515
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4498,
                    "end": 4515
                  },
                  "definite": false,
                  "start": 4471,
                  "end": 4515
                }
              ],
              "declare": false,
              "start": 4467,
              "end": 4516
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4460,
            "end": 4516
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
                    "name": "m1_im2_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4532,
                    "end": 4556
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4563,
                        "end": 4577
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4578,
                        "end": 4580
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4563,
                      "end": 4580
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 4559,
                    "end": 4582
                  },
                  "definite": false,
                  "start": 4532,
                  "end": 4582
                }
              ],
              "declare": false,
              "start": 4528,
              "end": 4583
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4521,
            "end": 4583
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
                    "name": "m1_im2_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4599,
                    "end": 4623
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4626,
                      "end": 4640
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4641,
                      "end": 4643
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4626,
                    "end": 4643
                  },
                  "definite": false,
                  "start": 4599,
                  "end": 4643
                }
              ],
              "declare": false,
              "start": 4595,
              "end": 4644
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4588,
            "end": 4644
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
                    "name": "m1_im2_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4660,
                    "end": 4684
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4687,
                        "end": 4701
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4702,
                        "end": 4704
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4687,
                      "end": 4704
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 4687,
                    "end": 4706
                  },
                  "definite": false,
                  "start": 4660,
                  "end": 4706
                }
              ],
              "declare": false,
              "start": 4656,
              "end": 4707
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4649,
            "end": 4707
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
                  "name": "m1_im2_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4716,
                  "end": 4741
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4744,
                    "end": 4758
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4759,
                    "end": 4761
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4744,
                  "end": 4761
                },
                "definite": false,
                "start": 4716,
                "end": 4761
              }
            ],
            "declare": false,
            "start": 4712,
            "end": 4762
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
                  "name": "m1_im2_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4771,
                  "end": 4796
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4803,
                      "end": 4817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4818,
                      "end": 4820
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4803,
                    "end": 4820
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 4799,
                  "end": 4822
                },
                "definite": false,
                "start": 4771,
                "end": 4822
              }
            ],
            "declare": false,
            "start": 4767,
            "end": 4823
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
                  "name": "m1_im2_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4832,
                  "end": 4857
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4860,
                    "end": 4874
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4875,
                    "end": 4877
                  },
                  "optional": false,
                  "computed": false,
                  "start": 4860,
                  "end": 4877
                },
                "definite": false,
                "start": 4832,
                "end": 4877
              }
            ],
            "declare": false,
            "start": 4828,
            "end": 4878
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
                  "name": "m1_im2_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4887,
                  "end": 4912
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4915,
                      "end": 4929
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4930,
                      "end": 4932
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4915,
                    "end": 4932
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 4915,
                  "end": 4934
                },
                "definite": false,
                "start": 4887,
                "end": 4934
              }
            ],
            "declare": false,
            "start": 4883,
            "end": 4935
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4948,
              "end": 4962
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M3_public",
                "raw": "\"m2_M3_public\"",
                "start": 4973,
                "end": 4987
              },
              "start": 4965,
              "end": 4988
            },
            "importKind": "value",
            "start": 4941,
            "end": 4989
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
                    "name": "m1_im3_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5005,
                    "end": 5029
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5032,
                      "end": 5046
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5047,
                      "end": 5049
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5032,
                    "end": 5049
                  },
                  "definite": false,
                  "start": 5005,
                  "end": 5049
                }
              ],
              "declare": false,
              "start": 5001,
              "end": 5050
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 4994,
            "end": 5050
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
                    "name": "m1_im3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5066,
                    "end": 5090
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5097,
                        "end": 5111
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5112,
                        "end": 5114
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5097,
                      "end": 5114
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5093,
                    "end": 5116
                  },
                  "definite": false,
                  "start": 5066,
                  "end": 5116
                }
              ],
              "declare": false,
              "start": 5062,
              "end": 5117
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5055,
            "end": 5117
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
                    "name": "m1_im3_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5133,
                    "end": 5157
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5160,
                      "end": 5174
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5175,
                      "end": 5177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5160,
                    "end": 5177
                  },
                  "definite": false,
                  "start": 5133,
                  "end": 5177
                }
              ],
              "declare": false,
              "start": 5129,
              "end": 5178
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5122,
            "end": 5178
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
                    "name": "m1_im3_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5194,
                    "end": 5218
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5221,
                        "end": 5235
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5236,
                        "end": 5238
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5221,
                      "end": 5238
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5221,
                    "end": 5240
                  },
                  "definite": false,
                  "start": 5194,
                  "end": 5240
                }
              ],
              "declare": false,
              "start": 5190,
              "end": 5241
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5183,
            "end": 5241
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
                  "name": "m1_im3_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5250,
                  "end": 5275
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5278,
                    "end": 5292
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5293,
                    "end": 5295
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5278,
                  "end": 5295
                },
                "definite": false,
                "start": 5250,
                "end": 5295
              }
            ],
            "declare": false,
            "start": 5246,
            "end": 5296
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
                  "name": "m1_im3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5305,
                  "end": 5330
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5337,
                      "end": 5351
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5352,
                      "end": 5354
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5337,
                    "end": 5354
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5333,
                  "end": 5356
                },
                "definite": false,
                "start": 5305,
                "end": 5356
              }
            ],
            "declare": false,
            "start": 5301,
            "end": 5357
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
                  "name": "m1_im3_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5366,
                  "end": 5391
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5394,
                    "end": 5408
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5409,
                    "end": 5411
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5394,
                  "end": 5411
                },
                "definite": false,
                "start": 5366,
                "end": 5411
              }
            ],
            "declare": false,
            "start": 5362,
            "end": 5412
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
                  "name": "m1_im3_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5421,
                  "end": 5446
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5449,
                      "end": 5463
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5464,
                      "end": 5466
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5449,
                    "end": 5466
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5449,
                  "end": 5468
                },
                "definite": false,
                "start": 5421,
                "end": 5468
              }
            ],
            "declare": false,
            "start": 5417,
            "end": 5469
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 5482,
              "end": 5496
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "m2_M4_private",
                "raw": "\"m2_M4_private\"",
                "start": 5507,
                "end": 5522
              },
              "start": 5499,
              "end": 5523
            },
            "importKind": "value",
            "start": 5475,
            "end": 5524
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
                    "name": "m1_im4_private_v1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5540,
                    "end": 5564
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5567,
                      "end": 5581
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5582,
                      "end": 5584
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5567,
                    "end": 5584
                  },
                  "definite": false,
                  "start": 5540,
                  "end": 5584
                }
              ],
              "declare": false,
              "start": 5536,
              "end": 5585
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5529,
            "end": 5585
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
                    "name": "m1_im4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5601,
                    "end": 5625
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5632,
                        "end": 5646
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5647,
                        "end": 5649
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5632,
                      "end": 5649
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 5628,
                    "end": 5651
                  },
                  "definite": false,
                  "start": 5601,
                  "end": 5651
                }
              ],
              "declare": false,
              "start": 5597,
              "end": 5652
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5590,
            "end": 5652
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
                    "name": "m1_im4_private_v3_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5668,
                    "end": 5692
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5695,
                      "end": 5709
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5710,
                      "end": 5712
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5695,
                    "end": 5712
                  },
                  "definite": false,
                  "start": 5668,
                  "end": 5712
                }
              ],
              "declare": false,
              "start": 5664,
              "end": 5713
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5657,
            "end": 5713
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
                    "name": "m1_im4_private_v4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5729,
                    "end": 5753
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_im4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5756,
                        "end": 5770
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5771,
                        "end": 5773
                      },
                      "optional": false,
                      "computed": false,
                      "start": 5756,
                      "end": 5773
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 5756,
                    "end": 5775
                  },
                  "definite": false,
                  "start": 5729,
                  "end": 5775
                }
              ],
              "declare": false,
              "start": 5725,
              "end": 5776
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 5718,
            "end": 5776
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
                  "name": "m1_im4_private_v1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5785,
                  "end": 5810
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5813,
                    "end": 5827
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5828,
                    "end": 5830
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5813,
                  "end": 5830
                },
                "definite": false,
                "start": 5785,
                "end": 5830
              }
            ],
            "declare": false,
            "start": 5781,
            "end": 5831
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
                  "name": "m1_im4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5840,
                  "end": 5865
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5872,
                      "end": 5886
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5887,
                      "end": 5889
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5872,
                    "end": 5889
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "start": 5868,
                  "end": 5891
                },
                "definite": false,
                "start": 5840,
                "end": 5891
              }
            ],
            "declare": false,
            "start": 5836,
            "end": 5892
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
                  "name": "m1_im4_private_v3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5901,
                  "end": 5926
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1_im4_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5929,
                    "end": 5943
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5944,
                    "end": 5946
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5929,
                  "end": 5946
                },
                "definite": false,
                "start": 5901,
                "end": 5946
              }
            ],
            "declare": false,
            "start": 5897,
            "end": 5947
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
                  "name": "m1_im4_private_v4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5956,
                  "end": 5981
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m1_im4_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5984,
                      "end": 5998
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5999,
                      "end": 6001
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5984,
                    "end": 6001
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 5984,
                  "end": 6003
                },
                "definite": false,
                "start": 5956,
                "end": 6003
              }
            ],
            "declare": false,
            "start": 5952,
            "end": 6004
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6060,
                "end": 6073
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6076,
                "end": 6088
              },
              "importKind": "value",
              "start": 6053,
              "end": 6089
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6046,
            "end": 6089
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6108,
                "end": 6121
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_M2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6124,
                "end": 6137
              },
              "importKind": "value",
              "start": 6101,
              "end": 6138
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6094,
            "end": 6138
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6157,
                "end": 6170
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M3_public",
                  "raw": "\"m2_M3_public\"",
                  "start": 6181,
                  "end": 6195
                },
                "start": 6173,
                "end": 6196
              },
              "importKind": "value",
              "start": 6150,
              "end": 6197
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6143,
            "end": 6197
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_im4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6216,
                "end": 6229
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "m2_M4_private",
                  "raw": "\"m2_M4_private\"",
                  "start": 6240,
                  "end": 6255
                },
                "start": 6232,
                "end": 6256
              },
              "importKind": "value",
              "start": 6209,
              "end": 6257
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6202,
            "end": 6257
          }
        ],
        "start": 3129,
        "end": 6259
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3116,
      "end": 6259
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 6278,
          "end": 6291
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6311,
                  "end": 6313
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6314,
                  "end": 6321
                },
                "abstract": false,
                "declare": false,
                "start": 6305,
                "end": 6321
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6298,
              "end": 6321
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6342,
                  "end": 6344
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6368,
                          "end": 6370
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6364,
                        "end": 6370
                      },
                      "start": 6357,
                      "end": 6371
                    }
                  ],
                  "start": 6347,
                  "end": 6377
                },
                "expression": false,
                "start": 6333,
                "end": 6377
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6326,
              "end": 6377
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6393,
                      "end": 6395
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6398,
                      "end": 6400
                    },
                    "definite": false,
                    "start": 6393,
                    "end": 6400
                  }
                ],
                "declare": false,
                "start": 6389,
                "end": 6401
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6382,
              "end": 6401
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6421,
                            "end": 6423
                          },
                          "typeArguments": null,
                          "start": 6421,
                          "end": 6423
                        },
                        "start": 6419,
                        "end": 6423
                      },
                      "start": 6417,
                      "end": 6423
                    },
                    "init": null,
                    "definite": false,
                    "start": 6417,
                    "end": 6423
                  }
                ],
                "declare": false,
                "start": 6413,
                "end": 6424
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6406,
              "end": 6424
            }
          ],
          "start": 6292,
          "end": 6426
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6268,
        "end": 6426
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6261,
      "end": 6426
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 6450,
          "end": 6465
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSDeclareFunction",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6488,
                  "end": 6490
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6479,
                "end": 6493
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6472,
              "end": 6493
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6511,
                  "end": 6513
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6514,
                  "end": 6521
                },
                "abstract": false,
                "declare": false,
                "start": 6505,
                "end": 6521
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6498,
              "end": 6521
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
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
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6551,
                                    "end": 6553
                                  },
                                  "typeArguments": null,
                                  "start": 6551,
                                  "end": 6553
                                },
                                "start": 6549,
                                "end": 6553
                              },
                              "start": 6543,
                              "end": 6554
                            }
                          ],
                          "start": 6541,
                          "end": 6556
                        },
                        "start": 6539,
                        "end": 6556
                      },
                      "start": 6537,
                      "end": 6556
                    },
                    "init": null,
                    "definite": false,
                    "start": 6537,
                    "end": 6556
                  }
                ],
                "declare": false,
                "start": 6533,
                "end": 6557
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6526,
              "end": 6557
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6577,
                            "end": 6579
                          },
                          "typeArguments": null,
                          "start": 6577,
                          "end": 6579
                        },
                        "start": 6575,
                        "end": 6579
                      },
                      "start": 6573,
                      "end": 6579
                    },
                    "init": null,
                    "definite": false,
                    "start": 6573,
                    "end": 6579
                  }
                ],
                "declare": false,
                "start": 6569,
                "end": 6580
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6562,
              "end": 6580
            }
          ],
          "start": 6466,
          "end": 6582
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6435,
        "end": 6582
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6428,
      "end": 6582
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 6601,
          "end": 6615
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
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6635,
                  "end": 6637
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6638,
                  "end": 6645
                },
                "abstract": false,
                "declare": false,
                "start": 6629,
                "end": 6645
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6622,
              "end": 6645
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6666,
                  "end": 6668
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6692,
                          "end": 6694
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 6688,
                        "end": 6694
                      },
                      "start": 6681,
                      "end": 6695
                    }
                  ],
                  "start": 6671,
                  "end": 6701
                },
                "expression": false,
                "start": 6657,
                "end": 6701
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6650,
              "end": 6701
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6717,
                      "end": 6719
                    },
                    "init": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6722,
                      "end": 6724
                    },
                    "definite": false,
                    "start": 6717,
                    "end": 6724
                  }
                ],
                "declare": false,
                "start": 6713,
                "end": 6725
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6706,
              "end": 6725
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6745,
                            "end": 6747
                          },
                          "typeArguments": null,
                          "start": 6745,
                          "end": 6747
                        },
                        "start": 6743,
                        "end": 6747
                      },
                      "start": 6741,
                      "end": 6747
                    },
                    "init": null,
                    "definite": false,
                    "start": 6741,
                    "end": 6747
                  }
                ],
                "declare": false,
                "start": 6737,
                "end": 6748
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6730,
              "end": 6748
            }
          ],
          "start": 6616,
          "end": 6750
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 6591,
        "end": 6750
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6584,
      "end": 6750
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 6774,
          "end": 6790
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSDeclareFunction",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6813,
                  "end": 6815
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 6804,
                "end": 6818
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6797,
              "end": 6818
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6836,
                  "end": 6838
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 6839,
                  "end": 6846
                },
                "abstract": false,
                "declare": false,
                "start": 6830,
                "end": 6846
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6823,
              "end": 6846
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
                      "name": "v1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
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
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6876,
                                    "end": 6878
                                  },
                                  "typeArguments": null,
                                  "start": 6876,
                                  "end": 6878
                                },
                                "start": 6874,
                                "end": 6878
                              },
                              "start": 6868,
                              "end": 6879
                            }
                          ],
                          "start": 6866,
                          "end": 6881
                        },
                        "start": 6864,
                        "end": 6881
                      },
                      "start": 6862,
                      "end": 6881
                    },
                    "init": null,
                    "definite": false,
                    "start": 6862,
                    "end": 6881
                  }
                ],
                "declare": false,
                "start": 6858,
                "end": 6882
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6851,
              "end": 6882
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
                      "name": "v2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6902,
                            "end": 6904
                          },
                          "typeArguments": null,
                          "start": 6902,
                          "end": 6904
                        },
                        "start": 6900,
                        "end": 6904
                      },
                      "start": 6898,
                      "end": 6904
                    },
                    "init": null,
                    "definite": false,
                    "start": 6898,
                    "end": 6904
                  }
                ],
                "declare": false,
                "start": 6894,
                "end": 6905
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 6887,
              "end": 6905
            }
          ],
          "start": 6791,
          "end": 6907
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 6759,
        "end": 6907
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 6752,
      "end": 6907
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 6917,
        "end": 6932
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M1_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 6935,
        "end": 6948
      },
      "importKind": "value",
      "start": 6910,
      "end": 6949
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
              "name": "glo_im1_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6961,
              "end": 6986
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 6989,
                "end": 7004
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7005,
                "end": 7007
              },
              "optional": false,
              "computed": false,
              "start": 6989,
              "end": 7007
            },
            "definite": false,
            "start": 6961,
            "end": 7007
          }
        ],
        "declare": false,
        "start": 6957,
        "end": 7008
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6950,
      "end": 7008
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
              "name": "glo_im1_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7020,
              "end": 7045
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7052,
                  "end": 7067
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7068,
                  "end": 7070
                },
                "optional": false,
                "computed": false,
                "start": 7052,
                "end": 7070
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7048,
              "end": 7072
            },
            "definite": false,
            "start": 7020,
            "end": 7072
          }
        ],
        "declare": false,
        "start": 7016,
        "end": 7073
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7009,
      "end": 7073
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
              "name": "glo_im1_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7085,
              "end": 7110
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7113,
                "end": 7128
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7129,
                "end": 7131
              },
              "optional": false,
              "computed": false,
              "start": 7113,
              "end": 7131
            },
            "definite": false,
            "start": 7085,
            "end": 7131
          }
        ],
        "declare": false,
        "start": 7081,
        "end": 7132
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7074,
      "end": 7132
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
              "name": "glo_im1_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7144,
              "end": 7169
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im1_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7172,
                  "end": 7187
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7188,
                  "end": 7190
                },
                "optional": false,
                "computed": false,
                "start": 7172,
                "end": 7190
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7172,
              "end": 7192
            },
            "definite": false,
            "start": 7144,
            "end": 7192
          }
        ],
        "declare": false,
        "start": 7140,
        "end": 7193
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7133,
      "end": 7193
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
            "name": "glo_im1_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7198,
            "end": 7224
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7227,
              "end": 7242
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7243,
              "end": 7245
            },
            "optional": false,
            "computed": false,
            "start": 7227,
            "end": 7245
          },
          "definite": false,
          "start": 7198,
          "end": 7245
        }
      ],
      "declare": false,
      "start": 7194,
      "end": 7246
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
            "name": "glo_im1_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7251,
            "end": 7277
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7284,
                "end": 7299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7300,
                "end": 7302
              },
              "optional": false,
              "computed": false,
              "start": 7284,
              "end": 7302
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7280,
            "end": 7304
          },
          "definite": false,
          "start": 7251,
          "end": 7304
        }
      ],
      "declare": false,
      "start": 7247,
      "end": 7305
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
            "name": "glo_im1_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7310,
            "end": 7336
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7339,
              "end": 7354
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7355,
              "end": 7357
            },
            "optional": false,
            "computed": false,
            "start": 7339,
            "end": 7357
          },
          "definite": false,
          "start": 7310,
          "end": 7357
        }
      ],
      "declare": false,
      "start": 7306,
      "end": 7358
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
            "name": "glo_im1_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7363,
            "end": 7389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7392,
                "end": 7407
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7408,
                "end": 7410
              },
              "optional": false,
              "computed": false,
              "start": 7392,
              "end": 7410
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7392,
            "end": 7412
          },
          "definite": false,
          "start": 7363,
          "end": 7412
        }
      ],
      "declare": false,
      "start": 7359,
      "end": 7413
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7423,
        "end": 7438
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M2_public",
          "raw": "\"glo_M2_public\"",
          "start": 7449,
          "end": 7464
        },
        "start": 7441,
        "end": 7465
      },
      "importKind": "value",
      "start": 7416,
      "end": 7466
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
              "name": "glo_im2_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7478,
              "end": 7503
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7506,
                "end": 7521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7522,
                "end": 7524
              },
              "optional": false,
              "computed": false,
              "start": 7506,
              "end": 7524
            },
            "definite": false,
            "start": 7478,
            "end": 7524
          }
        ],
        "declare": false,
        "start": 7474,
        "end": 7525
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7467,
      "end": 7525
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
              "name": "glo_im2_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7537,
              "end": 7562
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7569,
                  "end": 7584
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7585,
                  "end": 7587
                },
                "optional": false,
                "computed": false,
                "start": 7569,
                "end": 7587
              },
              "typeArguments": null,
              "arguments": [],
              "start": 7565,
              "end": 7589
            },
            "definite": false,
            "start": 7537,
            "end": 7589
          }
        ],
        "declare": false,
        "start": 7533,
        "end": 7590
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7526,
      "end": 7590
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
              "name": "glo_im2_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7602,
              "end": 7627
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7630,
                "end": 7645
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7646,
                "end": 7648
              },
              "optional": false,
              "computed": false,
              "start": 7630,
              "end": 7648
            },
            "definite": false,
            "start": 7602,
            "end": 7648
          }
        ],
        "declare": false,
        "start": 7598,
        "end": 7649
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7591,
      "end": 7649
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
              "name": "glo_im2_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7661,
              "end": 7686
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7689,
                  "end": 7704
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7705,
                  "end": 7707
                },
                "optional": false,
                "computed": false,
                "start": 7689,
                "end": 7707
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 7689,
              "end": 7709
            },
            "definite": false,
            "start": 7661,
            "end": 7709
          }
        ],
        "declare": false,
        "start": 7657,
        "end": 7710
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7650,
      "end": 7710
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
            "name": "glo_im2_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7715,
            "end": 7741
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7744,
              "end": 7759
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7760,
              "end": 7762
            },
            "optional": false,
            "computed": false,
            "start": 7744,
            "end": 7762
          },
          "definite": false,
          "start": 7715,
          "end": 7762
        }
      ],
      "declare": false,
      "start": 7711,
      "end": 7763
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
            "name": "glo_im2_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7768,
            "end": 7794
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7801,
                "end": 7816
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7817,
                "end": 7819
              },
              "optional": false,
              "computed": false,
              "start": 7801,
              "end": 7819
            },
            "typeArguments": null,
            "arguments": [],
            "start": 7797,
            "end": 7821
          },
          "definite": false,
          "start": 7768,
          "end": 7821
        }
      ],
      "declare": false,
      "start": 7764,
      "end": 7822
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
            "name": "glo_im2_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7827,
            "end": 7853
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7856,
              "end": 7871
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 7872,
              "end": 7874
            },
            "optional": false,
            "computed": false,
            "start": 7856,
            "end": 7874
          },
          "definite": false,
          "start": 7827,
          "end": 7874
        }
      ],
      "declare": false,
      "start": 7823,
      "end": 7875
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
            "name": "glo_im2_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 7880,
            "end": 7906
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 7909,
                "end": 7924
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 7925,
                "end": 7927
              },
              "optional": false,
              "computed": false,
              "start": 7909,
              "end": 7927
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 7909,
            "end": 7929
          },
          "definite": false,
          "start": 7880,
          "end": 7929
        }
      ],
      "declare": false,
      "start": 7876,
      "end": 7930
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7939,
        "end": 7954
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_M3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7957,
        "end": 7971
      },
      "importKind": "value",
      "start": 7932,
      "end": 7972
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
              "name": "glo_im3_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 7984,
              "end": 8009
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8012,
                "end": 8027
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8028,
                "end": 8030
              },
              "optional": false,
              "computed": false,
              "start": 8012,
              "end": 8030
            },
            "definite": false,
            "start": 7984,
            "end": 8030
          }
        ],
        "declare": false,
        "start": 7980,
        "end": 8031
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7973,
      "end": 8031
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
              "name": "glo_im3_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8043,
              "end": 8068
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8075,
                  "end": 8090
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8091,
                  "end": 8093
                },
                "optional": false,
                "computed": false,
                "start": 8075,
                "end": 8093
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8071,
              "end": 8095
            },
            "definite": false,
            "start": 8043,
            "end": 8095
          }
        ],
        "declare": false,
        "start": 8039,
        "end": 8096
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8032,
      "end": 8096
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
              "name": "glo_im3_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8108,
              "end": 8133
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8136,
                "end": 8151
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8152,
                "end": 8154
              },
              "optional": false,
              "computed": false,
              "start": 8136,
              "end": 8154
            },
            "definite": false,
            "start": 8108,
            "end": 8154
          }
        ],
        "declare": false,
        "start": 8104,
        "end": 8155
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8097,
      "end": 8155
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
              "name": "glo_im3_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8167,
              "end": 8192
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im3_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8195,
                  "end": 8210
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8211,
                  "end": 8213
                },
                "optional": false,
                "computed": false,
                "start": 8195,
                "end": 8213
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8195,
              "end": 8215
            },
            "definite": false,
            "start": 8167,
            "end": 8215
          }
        ],
        "declare": false,
        "start": 8163,
        "end": 8216
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8156,
      "end": 8216
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
            "name": "glo_im3_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8221,
            "end": 8247
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8250,
              "end": 8265
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8266,
              "end": 8268
            },
            "optional": false,
            "computed": false,
            "start": 8250,
            "end": 8268
          },
          "definite": false,
          "start": 8221,
          "end": 8268
        }
      ],
      "declare": false,
      "start": 8217,
      "end": 8269
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
            "name": "glo_im3_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8274,
            "end": 8300
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8307,
                "end": 8322
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8323,
                "end": 8325
              },
              "optional": false,
              "computed": false,
              "start": 8307,
              "end": 8325
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8303,
            "end": 8327
          },
          "definite": false,
          "start": 8274,
          "end": 8327
        }
      ],
      "declare": false,
      "start": 8270,
      "end": 8328
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
            "name": "glo_im3_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8333,
            "end": 8359
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8362,
              "end": 8377
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8378,
              "end": 8380
            },
            "optional": false,
            "computed": false,
            "start": 8362,
            "end": 8380
          },
          "definite": false,
          "start": 8333,
          "end": 8380
        }
      ],
      "declare": false,
      "start": 8329,
      "end": 8381
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
            "name": "glo_im3_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8386,
            "end": 8412
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8415,
                "end": 8430
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8431,
                "end": 8433
              },
              "optional": false,
              "computed": false,
              "start": 8415,
              "end": 8433
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8415,
            "end": 8435
          },
          "definite": false,
          "start": 8386,
          "end": 8435
        }
      ],
      "declare": false,
      "start": 8382,
      "end": 8436
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_im4_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 8445,
        "end": 8460
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "glo_M4_private",
          "raw": "\"glo_M4_private\"",
          "start": 8471,
          "end": 8487
        },
        "start": 8463,
        "end": 8488
      },
      "importKind": "value",
      "start": 8438,
      "end": 8489
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
              "name": "glo_im4_private_v1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8501,
              "end": 8526
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8529,
                "end": 8544
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8545,
                "end": 8547
              },
              "optional": false,
              "computed": false,
              "start": 8529,
              "end": 8547
            },
            "definite": false,
            "start": 8501,
            "end": 8547
          }
        ],
        "declare": false,
        "start": 8497,
        "end": 8548
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8490,
      "end": 8548
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
              "name": "glo_im4_private_v2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8560,
              "end": 8585
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8592,
                  "end": 8607
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8608,
                  "end": 8610
                },
                "optional": false,
                "computed": false,
                "start": 8592,
                "end": 8610
              },
              "typeArguments": null,
              "arguments": [],
              "start": 8588,
              "end": 8612
            },
            "definite": false,
            "start": 8560,
            "end": 8612
          }
        ],
        "declare": false,
        "start": 8556,
        "end": 8613
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8549,
      "end": 8613
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
              "name": "glo_im4_private_v3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8625,
              "end": 8650
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8653,
                "end": 8668
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8669,
                "end": 8671
              },
              "optional": false,
              "computed": false,
              "start": 8653,
              "end": 8671
            },
            "definite": false,
            "start": 8625,
            "end": 8671
          }
        ],
        "declare": false,
        "start": 8621,
        "end": 8672
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8614,
      "end": 8672
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
              "name": "glo_im4_private_v4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 8684,
              "end": 8709
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "glo_im4_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8712,
                  "end": 8727
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8728,
                  "end": 8730
                },
                "optional": false,
                "computed": false,
                "start": 8712,
                "end": 8730
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8712,
              "end": 8732
            },
            "definite": false,
            "start": 8684,
            "end": 8732
          }
        ],
        "declare": false,
        "start": 8680,
        "end": 8733
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8673,
      "end": 8733
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
            "name": "glo_im4_private_v1_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8738,
            "end": 8764
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8767,
              "end": 8782
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8783,
              "end": 8785
            },
            "optional": false,
            "computed": false,
            "start": 8767,
            "end": 8785
          },
          "definite": false,
          "start": 8738,
          "end": 8785
        }
      ],
      "declare": false,
      "start": 8734,
      "end": 8786
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
            "name": "glo_im4_private_v2_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8791,
            "end": 8817
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8824,
                "end": 8839
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8840,
                "end": 8842
              },
              "optional": false,
              "computed": false,
              "start": 8824,
              "end": 8842
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8820,
            "end": 8844
          },
          "definite": false,
          "start": 8791,
          "end": 8844
        }
      ],
      "declare": false,
      "start": 8787,
      "end": 8845
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
            "name": "glo_im4_private_v3_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8850,
            "end": 8876
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_im4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 8879,
              "end": 8894
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 8895,
              "end": 8897
            },
            "optional": false,
            "computed": false,
            "start": 8879,
            "end": 8897
          },
          "definite": false,
          "start": 8850,
          "end": 8897
        }
      ],
      "declare": false,
      "start": 8846,
      "end": 8898
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
            "name": "glo_im4_private_v4_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 8903,
            "end": 8929
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_im4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 8932,
                "end": 8947
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 8948,
                "end": 8950
              },
              "optional": false,
              "computed": false,
              "start": 8932,
              "end": 8950
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8932,
            "end": 8952
          },
          "definite": false,
          "start": 8903,
          "end": 8952
        }
      ],
      "declare": false,
      "start": 8899,
      "end": 8953
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9001,
          "end": 9015
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M1_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9018,
          "end": 9031
        },
        "importKind": "value",
        "start": 8994,
        "end": 9032
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8987,
      "end": 9032
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im2_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9047,
          "end": 9061
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_M3_private",
          "optional": false,
          "typeAnnotation": null,
          "start": 9064,
          "end": 9078
        },
        "importKind": "value",
        "start": 9040,
        "end": 9079
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9033,
      "end": 9079
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9094,
          "end": 9108
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M2_public",
            "raw": "\"glo_M2_public\"",
            "start": 9119,
            "end": 9134
          },
          "start": 9111,
          "end": 9135
        },
        "importKind": "value",
        "start": 9087,
        "end": 9136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9080,
      "end": 9136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_im4_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9151,
          "end": 9165
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "glo_M4_private",
            "raw": "\"glo_M4_private\"",
            "start": 9176,
            "end": 9192
          },
          "start": 9168,
          "end": 9193
        },
        "importKind": "value",
        "start": 9144,
        "end": 9194
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9137,
      "end": 9194
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Literal",
          "value": "use_glo_M1_public",
          "raw": "\"use_glo_M1_public\"",
          "start": 9219,
          "end": 9238
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "use_glo_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9252,
                "end": 9269
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "glo_M1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9272,
                "end": 9285
              },
              "importKind": "value",
              "start": 9245,
              "end": 9286
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
                      "name": "use_glo_M1_public_v1_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "typeParameters": null,
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
                                      "name": "use_glo_M1_public",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9341,
                                      "end": 9358
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9359,
                                      "end": 9361
                                    },
                                    "start": 9341,
                                    "end": 9361
                                  },
                                  "typeArguments": null,
                                  "start": 9341,
                                  "end": 9361
                                },
                                "start": 9339,
                                "end": 9361
                              },
                              "start": 9333,
                              "end": 9362
                            }
                          ],
                          "start": 9331,
                          "end": 9364
                        },
                        "start": 9329,
                        "end": 9364
                      },
                      "start": 9302,
                      "end": 9364
                    },
                    "init": null,
                    "definite": false,
                    "start": 9302,
                    "end": 9364
                  }
                ],
                "declare": false,
                "start": 9298,
                "end": 9365
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9291,
              "end": 9365
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
                      "name": "use_glo_M1_public_v2_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use_glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9410,
                            "end": 9427
                          },
                          "typeArguments": null,
                          "start": 9410,
                          "end": 9427
                        },
                        "start": 9408,
                        "end": 9427
                      },
                      "start": 9381,
                      "end": 9427
                    },
                    "init": null,
                    "definite": false,
                    "start": 9381,
                    "end": 9427
                  }
                ],
                "declare": false,
                "start": 9377,
                "end": 9428
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9370,
              "end": 9428
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
                      "name": "use_glo_M1_public_v3_public",
                      "optional": false,
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
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "use_glo_M1_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9479,
                                  "end": 9496
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9497,
                                  "end": 9499
                                },
                                "start": 9479,
                                "end": 9499
                              },
                              "typeArguments": null,
                              "start": 9479,
                              "end": 9499
                            },
                            "start": 9476,
                            "end": 9499
                          },
                          "start": 9473,
                          "end": 9499
                        },
                        "start": 9471,
                        "end": 9499
                      },
                      "start": 9444,
                      "end": 9499
                    },
                    "init": null,
                    "definite": false,
                    "start": 9444,
                    "end": 9499
                  }
                ],
                "declare": false,
                "start": 9440,
                "end": 9500
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9433,
              "end": 9500
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
                    "name": "use_glo_M1_public_v1_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
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
                                    "name": "use_glo_M1_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9549,
                                    "end": 9566
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 9567,
                                    "end": 9569
                                  },
                                  "start": 9549,
                                  "end": 9569
                                },
                                "typeArguments": null,
                                "start": 9549,
                                "end": 9569
                              },
                              "start": 9547,
                              "end": 9569
                            },
                            "start": 9541,
                            "end": 9570
                          }
                        ],
                        "start": 9539,
                        "end": 9572
                      },
                      "start": 9537,
                      "end": 9572
                    },
                    "start": 9509,
                    "end": 9572
                  },
                  "init": null,
                  "definite": false,
                  "start": 9509,
                  "end": 9572
                }
              ],
              "declare": false,
              "start": 9505,
              "end": 9573
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
                    "name": "use_glo_M1_public_v2_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9612,
                          "end": 9629
                        },
                        "typeArguments": null,
                        "start": 9612,
                        "end": 9629
                      },
                      "start": 9610,
                      "end": 9629
                    },
                    "start": 9582,
                    "end": 9629
                  },
                  "init": null,
                  "definite": false,
                  "start": 9582,
                  "end": 9629
                }
              ],
              "declare": false,
              "start": 9578,
              "end": 9630
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
                    "name": "use_glo_M1_public_v3_private",
                    "optional": false,
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9675,
                                "end": 9692
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 9693,
                                "end": 9695
                              },
                              "start": 9675,
                              "end": 9695
                            },
                            "typeArguments": null,
                            "start": 9675,
                            "end": 9695
                          },
                          "start": 9672,
                          "end": 9695
                        },
                        "start": 9669,
                        "end": 9695
                      },
                      "start": 9667,
                      "end": 9695
                    },
                    "start": 9639,
                    "end": 9695
                  },
                  "init": null,
                  "definite": false,
                  "start": 9639,
                  "end": 9695
                }
              ],
              "declare": false,
              "start": 9635,
              "end": 9696
            },
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "use_glo_M2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 9709,
                "end": 9726
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "glo_M2_public",
                  "raw": "\"glo_M2_public\"",
                  "start": 9737,
                  "end": 9752
                },
                "start": 9729,
                "end": 9753
              },
              "importKind": "value",
              "start": 9702,
              "end": 9754
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
                      "name": "use_glo_M2_public_v1_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "typeParameters": null,
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
                                      "name": "use_glo_M2_public",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9809,
                                      "end": 9826
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "c1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 9827,
                                      "end": 9829
                                    },
                                    "start": 9809,
                                    "end": 9829
                                  },
                                  "typeArguments": null,
                                  "start": 9809,
                                  "end": 9829
                                },
                                "start": 9807,
                                "end": 9829
                              },
                              "start": 9801,
                              "end": 9830
                            }
                          ],
                          "start": 9799,
                          "end": 9832
                        },
                        "start": 9797,
                        "end": 9832
                      },
                      "start": 9770,
                      "end": 9832
                    },
                    "init": null,
                    "definite": false,
                    "start": 9770,
                    "end": 9832
                  }
                ],
                "declare": false,
                "start": 9766,
                "end": 9833
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9759,
              "end": 9833
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
                      "name": "use_glo_M2_public_v2_public",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "use_glo_M2_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9878,
                            "end": 9895
                          },
                          "typeArguments": null,
                          "start": 9878,
                          "end": 9895
                        },
                        "start": 9876,
                        "end": 9895
                      },
                      "start": 9849,
                      "end": 9895
                    },
                    "init": null,
                    "definite": false,
                    "start": 9849,
                    "end": 9895
                  }
                ],
                "declare": false,
                "start": 9845,
                "end": 9896
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9838,
              "end": 9896
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
                      "name": "use_glo_M2_public_v3_public",
                      "optional": false,
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
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "use_glo_M2_public",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9947,
                                  "end": 9964
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9965,
                                  "end": 9967
                                },
                                "start": 9947,
                                "end": 9967
                              },
                              "typeArguments": null,
                              "start": 9947,
                              "end": 9967
                            },
                            "start": 9944,
                            "end": 9967
                          },
                          "start": 9941,
                          "end": 9967
                        },
                        "start": 9939,
                        "end": 9967
                      },
                      "start": 9912,
                      "end": 9967
                    },
                    "init": null,
                    "definite": false,
                    "start": 9912,
                    "end": 9967
                  }
                ],
                "declare": false,
                "start": 9908,
                "end": 9968
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 9901,
              "end": 9968
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
                    "name": "use_glo_M2_public_v1_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
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
                                    "name": "use_glo_M2_public",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10017,
                                    "end": 10034
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10035,
                                    "end": 10037
                                  },
                                  "start": 10017,
                                  "end": 10037
                                },
                                "typeArguments": null,
                                "start": 10017,
                                "end": 10037
                              },
                              "start": 10015,
                              "end": 10037
                            },
                            "start": 10009,
                            "end": 10038
                          }
                        ],
                        "start": 10007,
                        "end": 10040
                      },
                      "start": 10005,
                      "end": 10040
                    },
                    "start": 9977,
                    "end": 10040
                  },
                  "init": null,
                  "definite": false,
                  "start": 9977,
                  "end": 10040
                }
              ],
              "declare": false,
              "start": 9973,
              "end": 10041
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
                    "name": "use_glo_M2_public_v2_private",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M2_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10080,
                          "end": 10097
                        },
                        "typeArguments": null,
                        "start": 10080,
                        "end": 10097
                      },
                      "start": 10078,
                      "end": 10097
                    },
                    "start": 10050,
                    "end": 10097
                  },
                  "init": null,
                  "definite": false,
                  "start": 10050,
                  "end": 10097
                }
              ],
              "declare": false,
              "start": 10046,
              "end": 10098
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
                    "name": "use_glo_M2_public_v3_private",
                    "optional": false,
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M2_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10143,
                                "end": 10160
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10161,
                                "end": 10163
                              },
                              "start": 10143,
                              "end": 10163
                            },
                            "typeArguments": null,
                            "start": 10143,
                            "end": 10163
                          },
                          "start": 10140,
                          "end": 10163
                        },
                        "start": 10137,
                        "end": 10163
                      },
                      "start": 10135,
                      "end": 10163
                    },
                    "start": 10107,
                    "end": 10163
                  },
                  "init": null,
                  "definite": false,
                  "start": 10107,
                  "end": 10163
                }
              ],
              "declare": false,
              "start": 10103,
              "end": 10164
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 10180,
                "end": 10182
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "errorImport",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10200,
                      "end": 10211
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "glo_M2_public",
                        "raw": "\"glo_M2_public\"",
                        "start": 10222,
                        "end": 10237
                      },
                      "start": 10214,
                      "end": 10238
                    },
                    "importKind": "value",
                    "start": 10193,
                    "end": 10239
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nonerrorImport",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10255,
                      "end": 10269
                    },
                    "moduleReference": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "glo_M1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10272,
                      "end": 10285
                    },
                    "importKind": "value",
                    "start": 10248,
                    "end": 10286
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m5",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10306,
                      "end": 10308
                    },
                    "body": {
                      "type": "TSModuleBlock",
                      "body": [
                        {
                          "type": "TSImportEqualsDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5_errorImport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10330,
                            "end": 10344
                          },
                          "moduleReference": {
                            "type": "TSExternalModuleReference",
                            "expression": {
                              "type": "Literal",
                              "value": "glo_M2_public",
                              "raw": "\"glo_M2_public\"",
                              "start": 10355,
                              "end": 10370
                            },
                            "start": 10347,
                            "end": 10371
                          },
                          "importKind": "value",
                          "start": 10323,
                          "end": 10372
                        },
                        {
                          "type": "TSImportEqualsDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5_nonerrorImport",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10392,
                            "end": 10409
                          },
                          "moduleReference": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "glo_M1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 10412,
                            "end": 10425
                          },
                          "importKind": "value",
                          "start": 10385,
                          "end": 10426
                        }
                      ],
                      "start": 10309,
                      "end": 10436
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false,
                    "start": 10296,
                    "end": 10436
                  }
                ],
                "start": 10183,
                "end": 10442
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 10170,
              "end": 10442
            }
          ],
          "start": 9239,
          "end": 10444
        },
        "kind": "module",
        "declare": true,
        "global": false,
        "start": 9204,
        "end": 10444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 9197,
      "end": 10444
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "use_glo_M3_private",
        "raw": "\"use_glo_M3_private\"",
        "start": 10462,
        "end": 10482
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10496,
              "end": 10514
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_M3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10517,
              "end": 10531
            },
            "importKind": "value",
            "start": 10489,
            "end": 10532
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
                    "name": "use_glo_M3_private_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
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
                                    "name": "use_glo_M3_private",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10588,
                                    "end": 10606
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 10607,
                                    "end": 10609
                                  },
                                  "start": 10588,
                                  "end": 10609
                                },
                                "typeArguments": null,
                                "start": 10588,
                                "end": 10609
                              },
                              "start": 10586,
                              "end": 10609
                            },
                            "start": 10580,
                            "end": 10610
                          }
                        ],
                        "start": 10578,
                        "end": 10612
                      },
                      "start": 10576,
                      "end": 10612
                    },
                    "start": 10548,
                    "end": 10612
                  },
                  "init": null,
                  "definite": false,
                  "start": 10548,
                  "end": 10612
                }
              ],
              "declare": false,
              "start": 10544,
              "end": 10613
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10537,
            "end": 10613
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
                    "name": "use_glo_M3_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 10659,
                          "end": 10677
                        },
                        "typeArguments": null,
                        "start": 10659,
                        "end": 10677
                      },
                      "start": 10657,
                      "end": 10677
                    },
                    "start": 10629,
                    "end": 10677
                  },
                  "init": null,
                  "definite": false,
                  "start": 10629,
                  "end": 10677
                }
              ],
              "declare": false,
              "start": 10625,
              "end": 10678
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10618,
            "end": 10678
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
                    "name": "use_glo_M3_private_v3_public",
                    "optional": false,
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M3_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10730,
                                "end": 10748
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 10749,
                                "end": 10751
                              },
                              "start": 10730,
                              "end": 10751
                            },
                            "typeArguments": null,
                            "start": 10730,
                            "end": 10751
                          },
                          "start": 10727,
                          "end": 10751
                        },
                        "start": 10724,
                        "end": 10751
                      },
                      "start": 10722,
                      "end": 10751
                    },
                    "start": 10694,
                    "end": 10751
                  },
                  "init": null,
                  "definite": false,
                  "start": 10694,
                  "end": 10751
                }
              ],
              "declare": false,
              "start": 10690,
              "end": 10752
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 10683,
            "end": 10752
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
                  "name": "use_glo_M3_private_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
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
                                  "name": "use_glo_M3_private",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10802,
                                  "end": 10820
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 10821,
                                  "end": 10823
                                },
                                "start": 10802,
                                "end": 10823
                              },
                              "typeArguments": null,
                              "start": 10802,
                              "end": 10823
                            },
                            "start": 10800,
                            "end": 10823
                          },
                          "start": 10794,
                          "end": 10824
                        }
                      ],
                      "start": 10792,
                      "end": 10826
                    },
                    "start": 10790,
                    "end": 10826
                  },
                  "start": 10761,
                  "end": 10826
                },
                "init": null,
                "definite": false,
                "start": 10761,
                "end": 10826
              }
            ],
            "declare": false,
            "start": 10757,
            "end": 10827
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
                  "name": "use_glo_M3_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 10867,
                        "end": 10885
                      },
                      "typeArguments": null,
                      "start": 10867,
                      "end": 10885
                    },
                    "start": 10865,
                    "end": 10885
                  },
                  "start": 10836,
                  "end": 10885
                },
                "init": null,
                "definite": false,
                "start": 10836,
                "end": 10885
              }
            ],
            "declare": false,
            "start": 10832,
            "end": 10886
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
                  "name": "use_glo_M3_private_v3_private",
                  "optional": false,
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use_glo_M3_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10932,
                              "end": 10950
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 10951,
                              "end": 10953
                            },
                            "start": 10932,
                            "end": 10953
                          },
                          "typeArguments": null,
                          "start": 10932,
                          "end": 10953
                        },
                        "start": 10929,
                        "end": 10953
                      },
                      "start": 10926,
                      "end": 10953
                    },
                    "start": 10924,
                    "end": 10953
                  },
                  "start": 10895,
                  "end": 10953
                },
                "init": null,
                "definite": false,
                "start": 10895,
                "end": 10953
              }
            ],
            "declare": false,
            "start": 10891,
            "end": 10954
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "use_glo_M4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10967,
              "end": 10985
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "glo_M4_private",
                "raw": "\"glo_M4_private\"",
                "start": 10996,
                "end": 11012
              },
              "start": 10988,
              "end": 11013
            },
            "importKind": "value",
            "start": 10960,
            "end": 11014
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
                    "name": "use_glo_M4_private_v1_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSConstructSignatureDeclaration",
                            "typeParameters": null,
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
                                    "name": "use_glo_M4_private",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11070,
                                    "end": 11088
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 11089,
                                    "end": 11091
                                  },
                                  "start": 11070,
                                  "end": 11091
                                },
                                "typeArguments": null,
                                "start": 11070,
                                "end": 11091
                              },
                              "start": 11068,
                              "end": 11091
                            },
                            "start": 11062,
                            "end": 11092
                          }
                        ],
                        "start": 11060,
                        "end": 11094
                      },
                      "start": 11058,
                      "end": 11094
                    },
                    "start": 11030,
                    "end": 11094
                  },
                  "init": null,
                  "definite": false,
                  "start": 11030,
                  "end": 11094
                }
              ],
              "declare": false,
              "start": 11026,
              "end": 11095
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11019,
            "end": 11095
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
                    "name": "use_glo_M4_private_v2_public",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "use_glo_M4_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11141,
                          "end": 11159
                        },
                        "typeArguments": null,
                        "start": 11141,
                        "end": 11159
                      },
                      "start": 11139,
                      "end": 11159
                    },
                    "start": 11111,
                    "end": 11159
                  },
                  "init": null,
                  "definite": false,
                  "start": 11111,
                  "end": 11159
                }
              ],
              "declare": false,
              "start": 11107,
              "end": 11160
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11100,
            "end": 11160
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
                    "name": "use_glo_M4_private_v3_public",
                    "optional": false,
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
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "use_glo_M4_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11212,
                                "end": 11230
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 11231,
                                "end": 11233
                              },
                              "start": 11212,
                              "end": 11233
                            },
                            "typeArguments": null,
                            "start": 11212,
                            "end": 11233
                          },
                          "start": 11209,
                          "end": 11233
                        },
                        "start": 11206,
                        "end": 11233
                      },
                      "start": 11204,
                      "end": 11233
                    },
                    "start": 11176,
                    "end": 11233
                  },
                  "init": null,
                  "definite": false,
                  "start": 11176,
                  "end": 11233
                }
              ],
              "declare": false,
              "start": 11172,
              "end": 11234
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 11165,
            "end": 11234
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
                  "name": "use_glo_M4_private_v1_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
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
                                  "name": "use_glo_M4_private",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11284,
                                  "end": 11302
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 11303,
                                  "end": 11305
                                },
                                "start": 11284,
                                "end": 11305
                              },
                              "typeArguments": null,
                              "start": 11284,
                              "end": 11305
                            },
                            "start": 11282,
                            "end": 11305
                          },
                          "start": 11276,
                          "end": 11306
                        }
                      ],
                      "start": 11274,
                      "end": 11308
                    },
                    "start": 11272,
                    "end": 11308
                  },
                  "start": 11243,
                  "end": 11308
                },
                "init": null,
                "definite": false,
                "start": 11243,
                "end": 11308
              }
            ],
            "declare": false,
            "start": 11239,
            "end": 11309
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
                  "name": "use_glo_M4_private_v2_private",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "use_glo_M4_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 11349,
                        "end": 11367
                      },
                      "typeArguments": null,
                      "start": 11349,
                      "end": 11367
                    },
                    "start": 11347,
                    "end": 11367
                  },
                  "start": 11318,
                  "end": 11367
                },
                "init": null,
                "definite": false,
                "start": 11318,
                "end": 11367
              }
            ],
            "declare": false,
            "start": 11314,
            "end": 11368
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
                  "name": "use_glo_M4_private_v3_private",
                  "optional": false,
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
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "use_glo_M4_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11414,
                              "end": 11432
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 11433,
                              "end": 11435
                            },
                            "start": 11414,
                            "end": 11435
                          },
                          "typeArguments": null,
                          "start": 11414,
                          "end": 11435
                        },
                        "start": 11411,
                        "end": 11435
                      },
                      "start": 11408,
                      "end": 11435
                    },
                    "start": 11406,
                    "end": 11435
                  },
                  "start": 11377,
                  "end": 11435
                },
                "init": null,
                "definite": false,
                "start": 11377,
                "end": 11435
              }
            ],
            "declare": false,
            "start": 11373,
            "end": 11436
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11452,
              "end": 11454
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "errorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11472,
                    "end": 11483
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "glo_M4_private",
                      "raw": "\"glo_M4_private\"",
                      "start": 11494,
                      "end": 11510
                    },
                    "start": 11486,
                    "end": 11511
                  },
                  "importKind": "value",
                  "start": 11465,
                  "end": 11512
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonerrorImport",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11528,
                    "end": 11542
                  },
                  "moduleReference": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "glo_M3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11545,
                    "end": 11559
                  },
                  "importKind": "value",
                  "start": 11521,
                  "end": 11560
                },
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 11580,
                    "end": 11582
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_errorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11604,
                          "end": 11618
                        },
                        "moduleReference": {
                          "type": "TSExternalModuleReference",
                          "expression": {
                            "type": "Literal",
                            "value": "glo_M4_private",
                            "raw": "\"glo_M4_private\"",
                            "start": 11629,
                            "end": 11645
                          },
                          "start": 11621,
                          "end": 11646
                        },
                        "importKind": "value",
                        "start": 11597,
                        "end": 11647
                      },
                      {
                        "type": "TSImportEqualsDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m5_nonerrorImport",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11667,
                          "end": 11684
                        },
                        "moduleReference": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "glo_M3_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 11687,
                          "end": 11701
                        },
                        "importKind": "value",
                        "start": 11660,
                        "end": 11702
                      }
                    ],
                    "start": 11583,
                    "end": 11712
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 11570,
                  "end": 11712
                }
              ],
              "start": 11455,
              "end": 11718
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11442,
            "end": 11718
          }
        ],
        "start": 10483,
        "end": 11720
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 10447,
      "end": 11720
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError",
        "raw": "\"anotherParseError\"",
        "start": 11737,
        "end": 11756
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11773,
              "end": 11775
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 11801,
                    "end": 11806
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11807,
                    "end": 11818
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11786,
                  "end": 11818
                }
              ],
              "start": 11776,
              "end": 11824
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11763,
            "end": 11824
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11840,
              "end": 11842
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc2",
                    "raw": "\"abc2\"",
                    "start": 11860,
                    "end": 11866
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 11867,
                    "end": 11878
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 11853,
                  "end": 11878
                }
              ],
              "start": 11843,
              "end": 11884
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11830,
            "end": 11884
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 11896,
              "end": 11902
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 11903,
              "end": 11910
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 11889,
            "end": 11910
          }
        ],
        "start": 11757,
        "end": 11912
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11722,
      "end": 11912
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "anotherParseError2",
        "raw": "\"anotherParseError2\"",
        "start": 11936,
        "end": 11956
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 11973,
              "end": 11975
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc",
                    "raw": "\"abc\"",
                    "start": 12001,
                    "end": 12006
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 12007,
                    "end": 12018
                  },
                  "kind": "module",
                  "declare": true,
                  "global": false,
                  "start": 11986,
                  "end": 12018
                }
              ],
              "start": 11976,
              "end": 12024
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 11963,
            "end": 12024
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 12040,
              "end": 12042
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Literal",
                    "value": "abc2",
                    "raw": "\"abc2\"",
                    "start": 12060,
                    "end": 12066
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [],
                    "start": 12067,
                    "end": 12078
                  },
                  "kind": "module",
                  "declare": false,
                  "global": false,
                  "start": 12053,
                  "end": 12078
                }
              ],
              "start": 12043,
              "end": 12084
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12030,
            "end": 12084
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Literal",
              "value": "abc3",
              "raw": "\"abc3\"",
              "start": 12096,
              "end": 12102
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [],
              "start": 12103,
              "end": 12110
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 12089,
            "end": 12110
          }
        ],
        "start": 11957,
        "end": 12112
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 11914,
      "end": 12112
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 12124,
        "end": 12126
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 12140,
              "end": 12142
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "use_glo_M1_public",
                "raw": "\"use_glo_M1_public\"",
                "start": 12153,
                "end": 12172
              },
              "start": 12145,
              "end": 12173
            },
            "importKind": "value",
            "start": 12133,
            "end": 12174
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4",
              "optional": false,
              "typeAnnotation": null,
              "start": 12189,
              "end": 12191
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 12206,
                        "end": 12207
                      },
                      "init": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 12210,
                        "end": 12212
                      },
                      "definite": false,
                      "start": 12206,
                      "end": 12212
                    }
                  ],
                  "declare": false,
                  "start": 12202,
                  "end": 12213
                },
                {
                  "type": "TSImportEqualsDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 12229,
                    "end": 12231
                  },
                  "moduleReference": {
                    "type": "TSExternalModuleReference",
                    "expression": {
                      "type": "Literal",
                      "value": "use_glo_M1_public",
                      "raw": "\"use_glo_M1_public\"",
                      "start": 12242,
                      "end": 12261
                    },
                    "start": 12234,
                    "end": 12262
                  },
                  "importKind": "value",
                  "start": 12222,
                  "end": 12263
                }
              ],
              "start": 12192,
              "end": 12269
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 12179,
            "end": 12269
          }
        ],
        "start": 12127,
        "end": 12272
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 12114,
      "end": 12272
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 12291,
          "end": 12293
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 12307,
                "end": 12309
              },
              "moduleReference": {
                "type": "TSExternalModuleReference",
                "expression": {
                  "type": "Literal",
                  "value": "use_glo_M1_public",
                  "raw": "\"use_glo_M1_public\"",
                  "start": 12320,
                  "end": 12339
                },
                "start": 12312,
                "end": 12340
              },
              "importKind": "value",
              "start": 12300,
              "end": 12341
            },
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4",
                "optional": false,
                "typeAnnotation": null,
                "start": 12356,
                "end": 12358
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 12373,
                          "end": 12374
                        },
                        "init": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 12377,
                          "end": 12379
                        },
                        "definite": false,
                        "start": 12373,
                        "end": 12379
                      }
                    ],
                    "declare": false,
                    "start": 12369,
                    "end": 12380
                  },
                  {
                    "type": "TSImportEqualsDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 12396,
                      "end": 12398
                    },
                    "moduleReference": {
                      "type": "TSExternalModuleReference",
                      "expression": {
                        "type": "Literal",
                        "value": "use_glo_M1_public",
                        "raw": "\"use_glo_M1_public\"",
                        "start": 12409,
                        "end": 12428
                      },
                      "start": 12401,
                      "end": 12429
                    },
                    "importKind": "value",
                    "start": 12389,
                    "end": 12430
                  }
                ],
                "start": 12359,
                "end": 12436
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 12346,
              "end": 12436
            }
          ],
          "start": 12294,
          "end": 12439
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 12281,
        "end": 12439
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 12274,
      "end": 12439
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 12439
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
    "type": "Identifier",
    "value": "namespace",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 43,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 66,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 79,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 137,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 144,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 170,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 181,
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
    "value": "c1",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 228,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 238,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 252,
    "end": 253
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 262,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 269,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 275,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 288,
    "end": 289
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 298,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 305,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 314,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 333,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 344,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 366,
    "end": 372
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 373,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 382,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 394,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 409,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 424,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 431,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 439,
    "end": 445
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 446,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 471,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 478,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 487,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 501,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 508,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 514,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 537,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 548,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 554,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 562,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "export",
    "start": 577,
    "end": 583
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 584,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 592,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 607,
    "end": 614
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 615,
    "end": 621
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 622,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 648,
    "end": 654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 655,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 678,
    "end": 684
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 685,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 714,
    "end": 720
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 721,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 725,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 729,
    "end": 730
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 739,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 741,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 754,
    "end": 760
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 761,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 769,
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
    "start": 777,
    "end": 778
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 784,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 791,
    "end": 805
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 808,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 820,
    "end": 821
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 826,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 837,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 864,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 879,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 887,
    "end": 893
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 894,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 898,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 925,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 929,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 944,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 954,
    "end": 960
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 961,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 965,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 992,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1015,
    "end": 1021
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1022,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 1026,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1053,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1068,
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
    "value": "var",
    "start": 1078,
    "end": 1081
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 1082,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1110,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1125,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1133,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 1137,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1165,
    "end": 1168
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1169,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1184,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 1198,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1226,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 1253,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 1281,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1296,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1299,
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
    "value": "import",
    "start": 1308,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1315,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 1332,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1351,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1358,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 1362,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1389,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1404,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1412,
    "end": 1418
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1419,
    "end": 1422
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 1423,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1450,
    "end": 1453
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1454,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1469,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1479,
    "end": 1485
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1486,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 1490,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1517,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1532,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1540,
    "end": 1546
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1547,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 1551,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1578,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1593,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1603,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 1607,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1635,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1650,
    "end": 1652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1658,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 1662,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1694,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1709,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1719,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 1723,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1751,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1766,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1774,
    "end": 1777
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 1778,
    "end": 1803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 1806,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1821,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 1832,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1839,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 1856,
    "end": 1863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1863,
    "end": 1864
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 1864,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1885,
    "end": 1891
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1892,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_public",
    "start": 1896,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1921,
    "end": 1922
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1923,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1938,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1946,
    "end": 1952
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1953,
    "end": 1956
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_public",
    "start": 1957,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1984,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 1988,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2002,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2003,
    "end": 2005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2013,
    "end": 2019
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2020,
    "end": 2023
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_public",
    "start": 2024,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2051,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2065,
    "end": 2066
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2074,
    "end": 2080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2081,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_public",
    "start": 2085,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2112,
    "end": 2126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2127,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2137,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_private",
    "start": 2141,
    "end": 2166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2167,
    "end": 2168
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2169,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2184,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2192,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_private",
    "start": 2196,
    "end": 2221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2224,
    "end": 2227
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2228,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2243,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2245,
    "end": 2246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2247,
    "end": 2248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2253,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_private",
    "start": 2257,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2285,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2300,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2308,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_private",
    "start": 2312,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2338,
    "end": 2339
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 2340,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2355,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2358,
    "end": 2359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2359,
    "end": 2360
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2366,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2373,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 2390,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 2398,
    "end": 2413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2420,
    "end": 2426
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2427,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_public",
    "start": 2431,
    "end": 2455
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2458,
    "end": 2472
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2472,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2473,
    "end": 2475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2481,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2488,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_public",
    "start": 2492,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2519,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2523,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2538,
    "end": 2540
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2548,
    "end": 2554
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2555,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_public",
    "start": 2559,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2586,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2600,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2601,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2609,
    "end": 2615
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2616,
    "end": 2619
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_public",
    "start": 2620,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2645,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2647,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2661,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2666,
    "end": 2667
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2672,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_private",
    "start": 2676,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2704,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2719,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2727,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_private",
    "start": 2731,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2757,
    "end": 2758
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2759,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2763,
    "end": 2777
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2778,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2788,
    "end": 2791
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_private",
    "start": 2792,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2820,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2835,
    "end": 2837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2843,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_private",
    "start": 2847,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 2875,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2890,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2893,
    "end": 2894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2894,
    "end": 2895
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2901,
    "end": 2907
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2908,
    "end": 2914
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 2915,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "m1_M1_public",
    "start": 2931,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2949,
    "end": 2955
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 2956,
    "end": 2962
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 2963,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Identifier",
    "value": "m1_M2_private",
    "start": 2979,
    "end": 2992
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2998,
    "end": 3004
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3005,
    "end": 3011
  },
  {
    "type": "Identifier",
    "value": "m1_im3_public",
    "start": 3012,
    "end": 3025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3026,
    "end": 3027
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 3028,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3035,
    "end": 3036
  },
  {
    "type": "String",
    "value": "\"m1_M3_public\"",
    "start": 3036,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3057,
    "end": 3063
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3064,
    "end": 3070
  },
  {
    "type": "Identifier",
    "value": "m1_im4_public",
    "start": 3071,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 3087,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "String",
    "value": "\"m1_M4_private\"",
    "start": 3095,
    "end": 3110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3110,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3116,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 3126,
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
    "value": "export",
    "start": 3135,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3142,
    "end": 3151
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 3152,
    "end": 3164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3175,
    "end": 3181
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3182,
    "end": 3187
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3188,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3201,
    "end": 3202
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3211,
    "end": 3217
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3218,
    "end": 3226
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3227,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3246,
    "end": 3252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3257,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3269,
    "end": 3270
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3279,
    "end": 3285
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3286,
    "end": 3289
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3290,
    "end": 3292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3293,
    "end": 3294
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3295,
    "end": 3297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3297,
    "end": 3298
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3307,
    "end": 3313
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3314,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3318,
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
    "value": "c1",
    "start": 3322,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3337,
    "end": 3346
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 3347,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3371,
    "end": 3377
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3378,
    "end": 3383
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3384,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3407,
    "end": 3413
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3414,
    "end": 3422
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3423,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3442,
    "end": 3448
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3449,
    "end": 3452
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3453,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3475,
    "end": 3481
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3482,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3486,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3491,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3503,
    "end": 3509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3510,
    "end": 3513
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3514,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3516,
    "end": 3517
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3518,
    "end": 3520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3520,
    "end": 3521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3533,
    "end": 3539
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3540,
    "end": 3547
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3548,
    "end": 3554
  },
  {
    "type": "String",
    "value": "\"m2_M3_public\"",
    "start": 3555,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3580,
    "end": 3586
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3587,
    "end": 3595
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3596,
    "end": 3598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3598,
    "end": 3599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3599,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3610,
    "end": 3616
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3617,
    "end": 3622
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3623,
    "end": 3625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3626,
    "end": 3627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3646,
    "end": 3652
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3653,
    "end": 3656
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3657,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3661,
    "end": 3662
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3663,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3669,
    "end": 3670
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3671,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3673,
    "end": 3674
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3675,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3686,
    "end": 3692
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3693,
    "end": 3696
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3697,
    "end": 3699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3699,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3701,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3716,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 3724,
    "end": 3730
  },
  {
    "type": "String",
    "value": "\"m2_M4_private\"",
    "start": 3731,
    "end": 3746
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3747,
    "end": 3748
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3757,
    "end": 3763
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3764,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3773,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3775,
    "end": 3776
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3777,
    "end": 3778
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3787,
    "end": 3793
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3794,
    "end": 3799
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3800,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3813,
    "end": 3814
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3823,
    "end": 3829
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3830,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 3834,
    "end": 3836
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3836,
    "end": 3837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3838,
    "end": 3839
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3840,
    "end": 3843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3844,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3848,
    "end": 3850
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3850,
    "end": 3851
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3852,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3863,
    "end": 3869
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3870,
    "end": 3873
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 3874,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3878,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 3893,
    "end": 3899
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 3900,
    "end": 3914
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3915,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 3917,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3935,
    "end": 3941
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3942,
    "end": 3945
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_public",
    "start": 3946,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 3973,
    "end": 3987
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3987,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3988,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3996,
    "end": 4002
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4003,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_public",
    "start": 4007,
    "end": 4031
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4032,
    "end": 4033
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4034,
    "end": 4037
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4038,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4053,
    "end": 4055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4055,
    "end": 4056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4056,
    "end": 4057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4057,
    "end": 4058
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4063,
    "end": 4069
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4070,
    "end": 4073
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_public",
    "start": 4074,
    "end": 4098
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4101,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4116,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4124,
    "end": 4130
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4131,
    "end": 4134
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_public",
    "start": 4135,
    "end": 4159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4162,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4177,
    "end": 4179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4179,
    "end": 4180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4180,
    "end": 4181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4181,
    "end": 4182
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4187,
    "end": 4190
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v1_private",
    "start": 4191,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4217,
    "end": 4218
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4219,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4234,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4242,
    "end": 4245
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v2_private",
    "start": 4246,
    "end": 4271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4274,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4278,
    "end": 4292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4292,
    "end": 4293
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4293,
    "end": 4295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4303,
    "end": 4306
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v3_private",
    "start": 4307,
    "end": 4332
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4333,
    "end": 4334
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4335,
    "end": 4349
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4349,
    "end": 4350
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4350,
    "end": 4352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4352,
    "end": 4353
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4358,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private_v4_private",
    "start": 4362,
    "end": 4387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Identifier",
    "value": "m1_im1_private",
    "start": 4390,
    "end": 4404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4404,
    "end": 4405
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4405,
    "end": 4407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4407,
    "end": 4408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4408,
    "end": 4409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4417,
    "end": 4423
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4424,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 4441,
    "end": 4454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4454,
    "end": 4455
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4460,
    "end": 4466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4467,
    "end": 4470
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_public",
    "start": 4471,
    "end": 4495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4496,
    "end": 4497
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4498,
    "end": 4512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4512,
    "end": 4513
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4513,
    "end": 4515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4515,
    "end": 4516
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4521,
    "end": 4527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4528,
    "end": 4531
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_public",
    "start": 4532,
    "end": 4556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4557,
    "end": 4558
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4559,
    "end": 4562
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4563,
    "end": 4577
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4577,
    "end": 4578
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4578,
    "end": 4580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4580,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4582,
    "end": 4583
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4588,
    "end": 4594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4595,
    "end": 4598
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_public",
    "start": 4599,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4626,
    "end": 4640
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4640,
    "end": 4641
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4641,
    "end": 4643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4643,
    "end": 4644
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4649,
    "end": 4655
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4656,
    "end": 4659
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_public",
    "start": 4660,
    "end": 4684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4685,
    "end": 4686
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4687,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4702,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4712,
    "end": 4715
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v1_private",
    "start": 4716,
    "end": 4741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4742,
    "end": 4743
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4744,
    "end": 4758
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4758,
    "end": 4759
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4759,
    "end": 4761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4761,
    "end": 4762
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4767,
    "end": 4770
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v2_private",
    "start": 4771,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4799,
    "end": 4802
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4803,
    "end": 4817
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4817,
    "end": 4818
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 4818,
    "end": 4820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4820,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4821,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4828,
    "end": 4831
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v3_private",
    "start": 4832,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4858,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4860,
    "end": 4874
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4874,
    "end": 4875
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4875,
    "end": 4877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4883,
    "end": 4886
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private_v4_private",
    "start": 4887,
    "end": 4912
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4913,
    "end": 4914
  },
  {
    "type": "Identifier",
    "value": "m1_im2_private",
    "start": 4915,
    "end": 4929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4929,
    "end": 4930
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4930,
    "end": 4932
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4932,
    "end": 4933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4933,
    "end": 4934
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4934,
    "end": 4935
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 4941,
    "end": 4947
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 4948,
    "end": 4962
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 4965,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4972,
    "end": 4973
  },
  {
    "type": "String",
    "value": "\"m2_M3_public\"",
    "start": 4973,
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
    "value": ";",
    "start": 4988,
    "end": 4989
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4994,
    "end": 5000
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5001,
    "end": 5004
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_public",
    "start": 5005,
    "end": 5029
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5030,
    "end": 5031
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5032,
    "end": 5046
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5046,
    "end": 5047
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5047,
    "end": 5049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5049,
    "end": 5050
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5055,
    "end": 5061
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5062,
    "end": 5065
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_public",
    "start": 5066,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5091,
    "end": 5092
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5093,
    "end": 5096
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5097,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5111,
    "end": 5112
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5112,
    "end": 5114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5114,
    "end": 5115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5115,
    "end": 5116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5122,
    "end": 5128
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5129,
    "end": 5132
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_public",
    "start": 5133,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5158,
    "end": 5159
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5160,
    "end": 5174
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5174,
    "end": 5175
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5175,
    "end": 5177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5177,
    "end": 5178
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5183,
    "end": 5189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5190,
    "end": 5193
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_public",
    "start": 5194,
    "end": 5218
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5219,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5221,
    "end": 5235
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5235,
    "end": 5236
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5236,
    "end": 5238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5238,
    "end": 5239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5239,
    "end": 5240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5240,
    "end": 5241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5246,
    "end": 5249
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v1_private",
    "start": 5250,
    "end": 5275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5278,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5293,
    "end": 5295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5295,
    "end": 5296
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5301,
    "end": 5304
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v2_private",
    "start": 5305,
    "end": 5330
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5331,
    "end": 5332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5333,
    "end": 5336
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5337,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5352,
    "end": 5354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5354,
    "end": 5355
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5355,
    "end": 5356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5356,
    "end": 5357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5362,
    "end": 5365
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v3_private",
    "start": 5366,
    "end": 5391
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5392,
    "end": 5393
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5394,
    "end": 5408
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5408,
    "end": 5409
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5409,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5417,
    "end": 5420
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private_v4_private",
    "start": 5421,
    "end": 5446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5447,
    "end": 5448
  },
  {
    "type": "Identifier",
    "value": "m1_im3_private",
    "start": 5449,
    "end": 5463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5463,
    "end": 5464
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5464,
    "end": 5466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5466,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5468,
    "end": 5469
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 5475,
    "end": 5481
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5482,
    "end": 5496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 5499,
    "end": 5506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5506,
    "end": 5507
  },
  {
    "type": "String",
    "value": "\"m2_M4_private\"",
    "start": 5507,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5522,
    "end": 5523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5523,
    "end": 5524
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5529,
    "end": 5535
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5536,
    "end": 5539
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_public",
    "start": 5540,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5567,
    "end": 5581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5581,
    "end": 5582
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5582,
    "end": 5584
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5584,
    "end": 5585
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5590,
    "end": 5596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5597,
    "end": 5600
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_public",
    "start": 5601,
    "end": 5625
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5626,
    "end": 5627
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5628,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5632,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5647,
    "end": 5649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5649,
    "end": 5650
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5650,
    "end": 5651
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5651,
    "end": 5652
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5657,
    "end": 5663
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5664,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_public",
    "start": 5668,
    "end": 5692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5693,
    "end": 5694
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5695,
    "end": 5709
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5709,
    "end": 5710
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5710,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 5718,
    "end": 5724
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5725,
    "end": 5728
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_public",
    "start": 5729,
    "end": 5753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5754,
    "end": 5755
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5756,
    "end": 5770
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5770,
    "end": 5771
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5771,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5775,
    "end": 5776
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5781,
    "end": 5784
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v1_private",
    "start": 5785,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5811,
    "end": 5812
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5813,
    "end": 5827
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5827,
    "end": 5828
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5828,
    "end": 5830
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5830,
    "end": 5831
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5836,
    "end": 5839
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v2_private",
    "start": 5840,
    "end": 5865
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5866,
    "end": 5867
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5868,
    "end": 5871
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5872,
    "end": 5886
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 5887,
    "end": 5889
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5889,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5891,
    "end": 5892
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5897,
    "end": 5900
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v3_private",
    "start": 5901,
    "end": 5926
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5927,
    "end": 5928
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5929,
    "end": 5943
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5943,
    "end": 5944
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5944,
    "end": 5946
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5952,
    "end": 5955
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private_v4_private",
    "start": 5956,
    "end": 5981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5982,
    "end": 5983
  },
  {
    "type": "Identifier",
    "value": "m1_im4_private",
    "start": 5984,
    "end": 5998
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 5999,
    "end": 6001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6001,
    "end": 6002
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6002,
    "end": 6003
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6003,
    "end": 6004
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6046,
    "end": 6052
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6053,
    "end": 6059
  },
  {
    "type": "Identifier",
    "value": "m1_im1_public",
    "start": 6060,
    "end": 6073
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6074,
    "end": 6075
  },
  {
    "type": "Identifier",
    "value": "m2_M1_public",
    "start": 6076,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6094,
    "end": 6100
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6101,
    "end": 6107
  },
  {
    "type": "Identifier",
    "value": "m1_im2_public",
    "start": 6108,
    "end": 6121
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6122,
    "end": 6123
  },
  {
    "type": "Identifier",
    "value": "m2_M2_private",
    "start": 6124,
    "end": 6137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6137,
    "end": 6138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6143,
    "end": 6149
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6150,
    "end": 6156
  },
  {
    "type": "Identifier",
    "value": "m1_im3_public",
    "start": 6157,
    "end": 6170
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6171,
    "end": 6172
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 6173,
    "end": 6180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6180,
    "end": 6181
  },
  {
    "type": "String",
    "value": "\"m2_M3_public\"",
    "start": 6181,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6196,
    "end": 6197
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6202,
    "end": 6208
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6209,
    "end": 6215
  },
  {
    "type": "Identifier",
    "value": "m1_im4_public",
    "start": 6216,
    "end": 6229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6230,
    "end": 6231
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 6232,
    "end": 6239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6239,
    "end": 6240
  },
  {
    "type": "String",
    "value": "\"m2_M4_private\"",
    "start": 6240,
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
    "value": ";",
    "start": 6256,
    "end": 6257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6258,
    "end": 6259
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6261,
    "end": 6267
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6268,
    "end": 6277
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 6278,
    "end": 6291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6298,
    "end": 6304
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6305,
    "end": 6310
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6311,
    "end": 6313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6314,
    "end": 6315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6320,
    "end": 6321
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6326,
    "end": 6332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6333,
    "end": 6341
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6342,
    "end": 6344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6344,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6345,
    "end": 6346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6347,
    "end": 6348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6357,
    "end": 6363
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6364,
    "end": 6367
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6368,
    "end": 6370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6370,
    "end": 6371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6376,
    "end": 6377
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6382,
    "end": 6388
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6389,
    "end": 6392
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6393,
    "end": 6395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6396,
    "end": 6397
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6398,
    "end": 6400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6400,
    "end": 6401
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6406,
    "end": 6412
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6413,
    "end": 6416
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6417,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6421,
    "end": 6423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6423,
    "end": 6424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6425,
    "end": 6426
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6428,
    "end": 6434
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6435,
    "end": 6442
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 6443,
    "end": 6449
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 6450,
    "end": 6465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6472,
    "end": 6478
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6479,
    "end": 6487
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6488,
    "end": 6490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6492,
    "end": 6493
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6498,
    "end": 6504
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6505,
    "end": 6510
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6511,
    "end": 6513
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6514,
    "end": 6515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6520,
    "end": 6521
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6526,
    "end": 6532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6533,
    "end": 6536
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6537,
    "end": 6539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6541,
    "end": 6542
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6543,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6547,
    "end": 6548
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6548,
    "end": 6549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6549,
    "end": 6550
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6551,
    "end": 6553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6553,
    "end": 6554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6556,
    "end": 6557
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6562,
    "end": 6568
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6569,
    "end": 6572
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6573,
    "end": 6575
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6577,
    "end": 6579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6579,
    "end": 6580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6581,
    "end": 6582
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6584,
    "end": 6590
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6591,
    "end": 6600
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 6601,
    "end": 6615
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6616,
    "end": 6617
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6622,
    "end": 6628
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6629,
    "end": 6634
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6635,
    "end": 6637
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6638,
    "end": 6639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6644,
    "end": 6645
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6650,
    "end": 6656
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6657,
    "end": 6665
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6666,
    "end": 6668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6668,
    "end": 6669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6669,
    "end": 6670
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6671,
    "end": 6672
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6681,
    "end": 6687
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6688,
    "end": 6691
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6692,
    "end": 6694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6694,
    "end": 6695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6706,
    "end": 6712
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6713,
    "end": 6716
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6717,
    "end": 6719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6720,
    "end": 6721
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6722,
    "end": 6724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6724,
    "end": 6725
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6730,
    "end": 6736
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6737,
    "end": 6740
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6741,
    "end": 6743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6743,
    "end": 6744
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6745,
    "end": 6747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6747,
    "end": 6748
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6749,
    "end": 6750
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6752,
    "end": 6758
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 6759,
    "end": 6766
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 6767,
    "end": 6773
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 6774,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6797,
    "end": 6803
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6804,
    "end": 6812
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 6813,
    "end": 6815
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6815,
    "end": 6816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6816,
    "end": 6817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6817,
    "end": 6818
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6823,
    "end": 6829
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6830,
    "end": 6835
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6836,
    "end": 6838
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6839,
    "end": 6840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6845,
    "end": 6846
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6851,
    "end": 6857
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6858,
    "end": 6861
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 6862,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6864,
    "end": 6865
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6866,
    "end": 6867
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6868,
    "end": 6871
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6872,
    "end": 6873
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6873,
    "end": 6874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6874,
    "end": 6875
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6876,
    "end": 6878
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6880,
    "end": 6881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6881,
    "end": 6882
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6887,
    "end": 6893
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6894,
    "end": 6897
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 6898,
    "end": 6900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6900,
    "end": 6901
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 6902,
    "end": 6904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6906,
    "end": 6907
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 6910,
    "end": 6916
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 6917,
    "end": 6932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6933,
    "end": 6934
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 6935,
    "end": 6948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6948,
    "end": 6949
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6950,
    "end": 6956
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 6957,
    "end": 6960
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v1_public",
    "start": 6961,
    "end": 6986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6987,
    "end": 6988
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 6989,
    "end": 7004
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7004,
    "end": 7005
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7005,
    "end": 7007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7007,
    "end": 7008
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7009,
    "end": 7015
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7016,
    "end": 7019
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v2_public",
    "start": 7020,
    "end": 7045
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7046,
    "end": 7047
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7048,
    "end": 7051
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7052,
    "end": 7067
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7067,
    "end": 7068
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7068,
    "end": 7070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7070,
    "end": 7071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7071,
    "end": 7072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7072,
    "end": 7073
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7074,
    "end": 7080
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7081,
    "end": 7084
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v3_public",
    "start": 7085,
    "end": 7110
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7111,
    "end": 7112
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7113,
    "end": 7128
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7128,
    "end": 7129
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7129,
    "end": 7131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7131,
    "end": 7132
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7133,
    "end": 7139
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7140,
    "end": 7143
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v4_public",
    "start": 7144,
    "end": 7169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7170,
    "end": 7171
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7172,
    "end": 7187
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7187,
    "end": 7188
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7188,
    "end": 7190
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7190,
    "end": 7191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7191,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7194,
    "end": 7197
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v1_private",
    "start": 7198,
    "end": 7224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7225,
    "end": 7226
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7227,
    "end": 7242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7242,
    "end": 7243
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7243,
    "end": 7245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7245,
    "end": 7246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7247,
    "end": 7250
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v2_private",
    "start": 7251,
    "end": 7277
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7278,
    "end": 7279
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7280,
    "end": 7283
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7284,
    "end": 7299
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7299,
    "end": 7300
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7300,
    "end": 7302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7302,
    "end": 7303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7303,
    "end": 7304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7304,
    "end": 7305
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7306,
    "end": 7309
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v3_private",
    "start": 7310,
    "end": 7336
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7337,
    "end": 7338
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7339,
    "end": 7354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7354,
    "end": 7355
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7355,
    "end": 7357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7357,
    "end": 7358
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7359,
    "end": 7362
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private_v4_private",
    "start": 7363,
    "end": 7389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Identifier",
    "value": "glo_im1_private",
    "start": 7392,
    "end": 7407
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7407,
    "end": 7408
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7408,
    "end": 7410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7410,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7412,
    "end": 7413
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 7416,
    "end": 7422
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7423,
    "end": 7438
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7439,
    "end": 7440
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 7441,
    "end": 7448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7448,
    "end": 7449
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 7449,
    "end": 7464
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7464,
    "end": 7465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7465,
    "end": 7466
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7467,
    "end": 7473
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7474,
    "end": 7477
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v1_public",
    "start": 7478,
    "end": 7503
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7506,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7521,
    "end": 7522
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7522,
    "end": 7524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7524,
    "end": 7525
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7526,
    "end": 7532
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7533,
    "end": 7536
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v2_public",
    "start": 7537,
    "end": 7562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7563,
    "end": 7564
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7565,
    "end": 7568
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7569,
    "end": 7584
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7584,
    "end": 7585
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7585,
    "end": 7587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7587,
    "end": 7588
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7588,
    "end": 7589
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7589,
    "end": 7590
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7591,
    "end": 7597
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7598,
    "end": 7601
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v3_public",
    "start": 7602,
    "end": 7627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7628,
    "end": 7629
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7630,
    "end": 7645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7645,
    "end": 7646
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7646,
    "end": 7648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7648,
    "end": 7649
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7650,
    "end": 7656
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7657,
    "end": 7660
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v4_public",
    "start": 7661,
    "end": 7686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7687,
    "end": 7688
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7689,
    "end": 7704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7704,
    "end": 7705
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7705,
    "end": 7707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7707,
    "end": 7708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7708,
    "end": 7709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7709,
    "end": 7710
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7711,
    "end": 7714
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v1_private",
    "start": 7715,
    "end": 7741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7742,
    "end": 7743
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7744,
    "end": 7759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7759,
    "end": 7760
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7760,
    "end": 7762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7762,
    "end": 7763
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7764,
    "end": 7767
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v2_private",
    "start": 7768,
    "end": 7794
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7795,
    "end": 7796
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7797,
    "end": 7800
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7801,
    "end": 7816
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7816,
    "end": 7817
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 7817,
    "end": 7819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7819,
    "end": 7820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7820,
    "end": 7821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7821,
    "end": 7822
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7823,
    "end": 7826
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v3_private",
    "start": 7827,
    "end": 7853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7854,
    "end": 7855
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7856,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7871,
    "end": 7872
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7872,
    "end": 7874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7874,
    "end": 7875
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7876,
    "end": 7879
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private_v4_private",
    "start": 7880,
    "end": 7906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7907,
    "end": 7908
  },
  {
    "type": "Identifier",
    "value": "glo_im2_private",
    "start": 7909,
    "end": 7924
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7924,
    "end": 7925
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 7925,
    "end": 7927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7927,
    "end": 7928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7928,
    "end": 7929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7929,
    "end": 7930
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 7932,
    "end": 7938
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 7939,
    "end": 7954
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7955,
    "end": 7956
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 7957,
    "end": 7971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7971,
    "end": 7972
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7973,
    "end": 7979
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 7980,
    "end": 7983
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v1_public",
    "start": 7984,
    "end": 8009
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8010,
    "end": 8011
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8012,
    "end": 8027
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8027,
    "end": 8028
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8028,
    "end": 8030
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8030,
    "end": 8031
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8032,
    "end": 8038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8039,
    "end": 8042
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v2_public",
    "start": 8043,
    "end": 8068
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8069,
    "end": 8070
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8071,
    "end": 8074
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8075,
    "end": 8090
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8090,
    "end": 8091
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8091,
    "end": 8093
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8093,
    "end": 8094
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8094,
    "end": 8095
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8095,
    "end": 8096
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8097,
    "end": 8103
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8104,
    "end": 8107
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v3_public",
    "start": 8108,
    "end": 8133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8134,
    "end": 8135
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8136,
    "end": 8151
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8151,
    "end": 8152
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8152,
    "end": 8154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8154,
    "end": 8155
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8156,
    "end": 8162
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8163,
    "end": 8166
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v4_public",
    "start": 8167,
    "end": 8192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8193,
    "end": 8194
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8195,
    "end": 8210
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8210,
    "end": 8211
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8211,
    "end": 8213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8213,
    "end": 8214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8214,
    "end": 8215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8215,
    "end": 8216
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8217,
    "end": 8220
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v1_private",
    "start": 8221,
    "end": 8247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8248,
    "end": 8249
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8250,
    "end": 8265
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8265,
    "end": 8266
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8266,
    "end": 8268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8268,
    "end": 8269
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8270,
    "end": 8273
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v2_private",
    "start": 8274,
    "end": 8300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8301,
    "end": 8302
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8303,
    "end": 8306
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8307,
    "end": 8322
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8322,
    "end": 8323
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8323,
    "end": 8325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8325,
    "end": 8326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8326,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8329,
    "end": 8332
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v3_private",
    "start": 8333,
    "end": 8359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8360,
    "end": 8361
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8362,
    "end": 8377
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8377,
    "end": 8378
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8378,
    "end": 8380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8380,
    "end": 8381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8382,
    "end": 8385
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private_v4_private",
    "start": 8386,
    "end": 8412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8413,
    "end": 8414
  },
  {
    "type": "Identifier",
    "value": "glo_im3_private",
    "start": 8415,
    "end": 8430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8430,
    "end": 8431
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8431,
    "end": 8433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8433,
    "end": 8434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8434,
    "end": 8435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8435,
    "end": 8436
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 8438,
    "end": 8444
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8445,
    "end": 8460
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8461,
    "end": 8462
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 8463,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8470,
    "end": 8471
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 8471,
    "end": 8487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8487,
    "end": 8488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8488,
    "end": 8489
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8490,
    "end": 8496
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8497,
    "end": 8500
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v1_public",
    "start": 8501,
    "end": 8526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8527,
    "end": 8528
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8529,
    "end": 8544
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8544,
    "end": 8545
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8545,
    "end": 8547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8547,
    "end": 8548
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8549,
    "end": 8555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8556,
    "end": 8559
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v2_public",
    "start": 8560,
    "end": 8585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8586,
    "end": 8587
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8588,
    "end": 8591
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8592,
    "end": 8607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8607,
    "end": 8608
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8608,
    "end": 8610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8610,
    "end": 8611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8611,
    "end": 8612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8612,
    "end": 8613
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8614,
    "end": 8620
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8621,
    "end": 8624
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v3_public",
    "start": 8625,
    "end": 8650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8651,
    "end": 8652
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8653,
    "end": 8668
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8668,
    "end": 8669
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8669,
    "end": 8671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8671,
    "end": 8672
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8673,
    "end": 8679
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8680,
    "end": 8683
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v4_public",
    "start": 8684,
    "end": 8709
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8710,
    "end": 8711
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8712,
    "end": 8727
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8727,
    "end": 8728
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8728,
    "end": 8730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8730,
    "end": 8731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8731,
    "end": 8732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8732,
    "end": 8733
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8734,
    "end": 8737
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v1_private",
    "start": 8738,
    "end": 8764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8765,
    "end": 8766
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8767,
    "end": 8782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8782,
    "end": 8783
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8783,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8785,
    "end": 8786
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8787,
    "end": 8790
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v2_private",
    "start": 8791,
    "end": 8817
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8818,
    "end": 8819
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8820,
    "end": 8823
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8824,
    "end": 8839
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8839,
    "end": 8840
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 8840,
    "end": 8842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8842,
    "end": 8843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8843,
    "end": 8844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8844,
    "end": 8845
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8846,
    "end": 8849
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v3_private",
    "start": 8850,
    "end": 8876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8877,
    "end": 8878
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8879,
    "end": 8894
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8894,
    "end": 8895
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8895,
    "end": 8897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8897,
    "end": 8898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8899,
    "end": 8902
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private_v4_private",
    "start": 8903,
    "end": 8929
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8930,
    "end": 8931
  },
  {
    "type": "Identifier",
    "value": "glo_im4_private",
    "start": 8932,
    "end": 8947
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8947,
    "end": 8948
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 8948,
    "end": 8950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8950,
    "end": 8951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8951,
    "end": 8952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8952,
    "end": 8953
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8987,
    "end": 8993
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 8994,
    "end": 9000
  },
  {
    "type": "Identifier",
    "value": "glo_im1_public",
    "start": 9001,
    "end": 9015
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9016,
    "end": 9017
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 9018,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9033,
    "end": 9039
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9040,
    "end": 9046
  },
  {
    "type": "Identifier",
    "value": "glo_im2_public",
    "start": 9047,
    "end": 9061
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9062,
    "end": 9063
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 9064,
    "end": 9078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9078,
    "end": 9079
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9080,
    "end": 9086
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9087,
    "end": 9093
  },
  {
    "type": "Identifier",
    "value": "glo_im3_public",
    "start": 9094,
    "end": 9108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9109,
    "end": 9110
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 9111,
    "end": 9118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9118,
    "end": 9119
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 9119,
    "end": 9134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9134,
    "end": 9135
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9135,
    "end": 9136
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9137,
    "end": 9143
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9144,
    "end": 9150
  },
  {
    "type": "Identifier",
    "value": "glo_im4_public",
    "start": 9151,
    "end": 9165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9166,
    "end": 9167
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 9168,
    "end": 9175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9175,
    "end": 9176
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 9176,
    "end": 9192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9192,
    "end": 9193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9193,
    "end": 9194
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9197,
    "end": 9203
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9204,
    "end": 9211
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 9212,
    "end": 9218
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 9219,
    "end": 9238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9239,
    "end": 9240
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9245,
    "end": 9251
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9252,
    "end": 9269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9270,
    "end": 9271
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 9272,
    "end": 9285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9285,
    "end": 9286
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9291,
    "end": 9297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9298,
    "end": 9301
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_public",
    "start": 9302,
    "end": 9329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9329,
    "end": 9330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9331,
    "end": 9332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9333,
    "end": 9336
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9337,
    "end": 9338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9338,
    "end": 9339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9339,
    "end": 9340
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9341,
    "end": 9358
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9358,
    "end": 9359
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9359,
    "end": 9361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9361,
    "end": 9362
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9363,
    "end": 9364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9364,
    "end": 9365
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9370,
    "end": 9376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9377,
    "end": 9380
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_public",
    "start": 9381,
    "end": 9408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9408,
    "end": 9409
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9410,
    "end": 9427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9427,
    "end": 9428
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9433,
    "end": 9439
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9440,
    "end": 9443
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_public",
    "start": 9444,
    "end": 9471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9471,
    "end": 9472
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
    "value": "=>",
    "start": 9476,
    "end": 9478
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9479,
    "end": 9496
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9496,
    "end": 9497
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9497,
    "end": 9499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9499,
    "end": 9500
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9505,
    "end": 9508
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v1_private",
    "start": 9509,
    "end": 9537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9537,
    "end": 9538
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9539,
    "end": 9540
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9541,
    "end": 9544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9545,
    "end": 9546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9546,
    "end": 9547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9547,
    "end": 9548
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9549,
    "end": 9566
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9566,
    "end": 9567
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9567,
    "end": 9569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9569,
    "end": 9570
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9571,
    "end": 9572
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9572,
    "end": 9573
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9578,
    "end": 9581
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v2_private",
    "start": 9582,
    "end": 9610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9610,
    "end": 9611
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9612,
    "end": 9629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9629,
    "end": 9630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9635,
    "end": 9638
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public_v3_private",
    "start": 9639,
    "end": 9667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9667,
    "end": 9668
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9669,
    "end": 9670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9670,
    "end": 9671
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9672,
    "end": 9674
  },
  {
    "type": "Identifier",
    "value": "use_glo_M1_public",
    "start": 9675,
    "end": 9692
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9692,
    "end": 9693
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9693,
    "end": 9695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9695,
    "end": 9696
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 9702,
    "end": 9708
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 9709,
    "end": 9726
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9727,
    "end": 9728
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 9729,
    "end": 9736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9736,
    "end": 9737
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 9737,
    "end": 9752
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9752,
    "end": 9753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9753,
    "end": 9754
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9759,
    "end": 9765
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9766,
    "end": 9769
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_public",
    "start": 9770,
    "end": 9797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9797,
    "end": 9798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9799,
    "end": 9800
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9801,
    "end": 9804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9805,
    "end": 9806
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9806,
    "end": 9807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9807,
    "end": 9808
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 9809,
    "end": 9826
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9826,
    "end": 9827
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9827,
    "end": 9829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9829,
    "end": 9830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9831,
    "end": 9832
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9832,
    "end": 9833
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9838,
    "end": 9844
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9845,
    "end": 9848
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_public",
    "start": 9849,
    "end": 9876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9876,
    "end": 9877
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 9878,
    "end": 9895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9895,
    "end": 9896
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9901,
    "end": 9907
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9908,
    "end": 9911
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_public",
    "start": 9912,
    "end": 9939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9939,
    "end": 9940
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9941,
    "end": 9942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9942,
    "end": 9943
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9944,
    "end": 9946
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 9947,
    "end": 9964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9964,
    "end": 9965
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 9965,
    "end": 9967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9973,
    "end": 9976
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v1_private",
    "start": 9977,
    "end": 10005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10005,
    "end": 10006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10007,
    "end": 10008
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10009,
    "end": 10012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10013,
    "end": 10014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10014,
    "end": 10015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10015,
    "end": 10016
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 10017,
    "end": 10034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10034,
    "end": 10035
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10035,
    "end": 10037
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10037,
    "end": 10038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10039,
    "end": 10040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10040,
    "end": 10041
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10046,
    "end": 10049
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v2_private",
    "start": 10050,
    "end": 10078
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10078,
    "end": 10079
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 10080,
    "end": 10097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10097,
    "end": 10098
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10103,
    "end": 10106
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public_v3_private",
    "start": 10107,
    "end": 10135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10135,
    "end": 10136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10137,
    "end": 10138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10138,
    "end": 10139
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10140,
    "end": 10142
  },
  {
    "type": "Identifier",
    "value": "use_glo_M2_public",
    "start": 10143,
    "end": 10160
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10160,
    "end": 10161
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10161,
    "end": 10163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10163,
    "end": 10164
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 10170,
    "end": 10179
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 10180,
    "end": 10182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10183,
    "end": 10184
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10193,
    "end": 10199
  },
  {
    "type": "Identifier",
    "value": "errorImport",
    "start": 10200,
    "end": 10211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10212,
    "end": 10213
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10214,
    "end": 10221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10221,
    "end": 10222
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 10222,
    "end": 10237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10237,
    "end": 10238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10238,
    "end": 10239
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10248,
    "end": 10254
  },
  {
    "type": "Identifier",
    "value": "nonerrorImport",
    "start": 10255,
    "end": 10269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10270,
    "end": 10271
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 10272,
    "end": 10285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10285,
    "end": 10286
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 10296,
    "end": 10305
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 10306,
    "end": 10308
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10309,
    "end": 10310
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10323,
    "end": 10329
  },
  {
    "type": "Identifier",
    "value": "m5_errorImport",
    "start": 10330,
    "end": 10344
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10345,
    "end": 10346
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10347,
    "end": 10354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10354,
    "end": 10355
  },
  {
    "type": "String",
    "value": "\"glo_M2_public\"",
    "start": 10355,
    "end": 10370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10370,
    "end": 10371
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10371,
    "end": 10372
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10385,
    "end": 10391
  },
  {
    "type": "Identifier",
    "value": "m5_nonerrorImport",
    "start": 10392,
    "end": 10409
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10410,
    "end": 10411
  },
  {
    "type": "Identifier",
    "value": "glo_M1_public",
    "start": 10412,
    "end": 10425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10425,
    "end": 10426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10435,
    "end": 10436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10441,
    "end": 10442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10443,
    "end": 10444
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 10447,
    "end": 10454
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 10455,
    "end": 10461
  },
  {
    "type": "String",
    "value": "\"use_glo_M3_private\"",
    "start": 10462,
    "end": 10482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10483,
    "end": 10484
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10489,
    "end": 10495
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10496,
    "end": 10514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10515,
    "end": 10516
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 10517,
    "end": 10531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10531,
    "end": 10532
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10537,
    "end": 10543
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10544,
    "end": 10547
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v1_public",
    "start": 10548,
    "end": 10576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10576,
    "end": 10577
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10578,
    "end": 10579
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10580,
    "end": 10583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10584,
    "end": 10585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10585,
    "end": 10586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10586,
    "end": 10587
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10588,
    "end": 10606
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10606,
    "end": 10607
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10607,
    "end": 10609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10609,
    "end": 10610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10611,
    "end": 10612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10612,
    "end": 10613
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10618,
    "end": 10624
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10625,
    "end": 10628
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v2_public",
    "start": 10629,
    "end": 10657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10657,
    "end": 10658
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10659,
    "end": 10677
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10677,
    "end": 10678
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10683,
    "end": 10689
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10690,
    "end": 10693
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v3_public",
    "start": 10694,
    "end": 10722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10722,
    "end": 10723
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10724,
    "end": 10725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10725,
    "end": 10726
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10727,
    "end": 10729
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10730,
    "end": 10748
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10748,
    "end": 10749
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10749,
    "end": 10751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10751,
    "end": 10752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10757,
    "end": 10760
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v1_private",
    "start": 10761,
    "end": 10790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10790,
    "end": 10791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10792,
    "end": 10793
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10794,
    "end": 10797
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10798,
    "end": 10799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10799,
    "end": 10800
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10800,
    "end": 10801
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10802,
    "end": 10820
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10820,
    "end": 10821
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10821,
    "end": 10823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10823,
    "end": 10824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10825,
    "end": 10826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10826,
    "end": 10827
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10832,
    "end": 10835
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v2_private",
    "start": 10836,
    "end": 10865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10865,
    "end": 10866
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10867,
    "end": 10885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10885,
    "end": 10886
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 10891,
    "end": 10894
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private_v3_private",
    "start": 10895,
    "end": 10924
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10924,
    "end": 10925
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10926,
    "end": 10927
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10927,
    "end": 10928
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 10929,
    "end": 10931
  },
  {
    "type": "Identifier",
    "value": "use_glo_M3_private",
    "start": 10932,
    "end": 10950
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10950,
    "end": 10951
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 10951,
    "end": 10953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10953,
    "end": 10954
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 10960,
    "end": 10966
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 10967,
    "end": 10985
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10986,
    "end": 10987
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 10988,
    "end": 10995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10995,
    "end": 10996
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 10996,
    "end": 11012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11012,
    "end": 11013
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11013,
    "end": 11014
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11019,
    "end": 11025
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11026,
    "end": 11029
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v1_public",
    "start": 11030,
    "end": 11058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11058,
    "end": 11059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11060,
    "end": 11061
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11062,
    "end": 11065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11066,
    "end": 11067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11067,
    "end": 11068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11068,
    "end": 11069
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11070,
    "end": 11088
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11088,
    "end": 11089
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 11089,
    "end": 11091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11091,
    "end": 11092
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11093,
    "end": 11094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11094,
    "end": 11095
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11100,
    "end": 11106
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11107,
    "end": 11110
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v2_public",
    "start": 11111,
    "end": 11139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11139,
    "end": 11140
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11141,
    "end": 11159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11159,
    "end": 11160
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11165,
    "end": 11171
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11172,
    "end": 11175
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v3_public",
    "start": 11176,
    "end": 11204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11204,
    "end": 11205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11206,
    "end": 11207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11207,
    "end": 11208
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 11209,
    "end": 11211
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11212,
    "end": 11230
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11230,
    "end": 11231
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 11231,
    "end": 11233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11233,
    "end": 11234
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11239,
    "end": 11242
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v1_private",
    "start": 11243,
    "end": 11272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11272,
    "end": 11273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11274,
    "end": 11275
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 11276,
    "end": 11279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11280,
    "end": 11281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11281,
    "end": 11282
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11282,
    "end": 11283
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11284,
    "end": 11302
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11302,
    "end": 11303
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 11303,
    "end": 11305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11305,
    "end": 11306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11307,
    "end": 11308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11308,
    "end": 11309
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11314,
    "end": 11317
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v2_private",
    "start": 11318,
    "end": 11347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11347,
    "end": 11348
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11349,
    "end": 11367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11367,
    "end": 11368
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 11373,
    "end": 11376
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private_v3_private",
    "start": 11377,
    "end": 11406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11406,
    "end": 11407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11408,
    "end": 11409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11409,
    "end": 11410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 11411,
    "end": 11413
  },
  {
    "type": "Identifier",
    "value": "use_glo_M4_private",
    "start": 11414,
    "end": 11432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 11432,
    "end": 11433
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 11433,
    "end": 11435
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11435,
    "end": 11436
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11442,
    "end": 11451
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 11452,
    "end": 11454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11455,
    "end": 11456
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 11465,
    "end": 11471
  },
  {
    "type": "Identifier",
    "value": "errorImport",
    "start": 11472,
    "end": 11483
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11484,
    "end": 11485
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11486,
    "end": 11493
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11493,
    "end": 11494
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 11494,
    "end": 11510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11510,
    "end": 11511
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11511,
    "end": 11512
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 11521,
    "end": 11527
  },
  {
    "type": "Identifier",
    "value": "nonerrorImport",
    "start": 11528,
    "end": 11542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11543,
    "end": 11544
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 11545,
    "end": 11559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11559,
    "end": 11560
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11570,
    "end": 11579
  },
  {
    "type": "Identifier",
    "value": "m5",
    "start": 11580,
    "end": 11582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11583,
    "end": 11584
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 11597,
    "end": 11603
  },
  {
    "type": "Identifier",
    "value": "m5_errorImport",
    "start": 11604,
    "end": 11618
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11619,
    "end": 11620
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 11621,
    "end": 11628
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11628,
    "end": 11629
  },
  {
    "type": "String",
    "value": "\"glo_M4_private\"",
    "start": 11629,
    "end": 11645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11645,
    "end": 11646
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11646,
    "end": 11647
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 11660,
    "end": 11666
  },
  {
    "type": "Identifier",
    "value": "m5_nonerrorImport",
    "start": 11667,
    "end": 11684
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11685,
    "end": 11686
  },
  {
    "type": "Identifier",
    "value": "glo_M3_private",
    "start": 11687,
    "end": 11701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11701,
    "end": 11702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11711,
    "end": 11712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11717,
    "end": 11718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11719,
    "end": 11720
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11722,
    "end": 11729
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11730,
    "end": 11736
  },
  {
    "type": "String",
    "value": "\"anotherParseError\"",
    "start": 11737,
    "end": 11756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11757,
    "end": 11758
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11763,
    "end": 11772
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 11773,
    "end": 11775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11776,
    "end": 11777
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11786,
    "end": 11793
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11794,
    "end": 11800
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 11801,
    "end": 11806
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11807,
    "end": 11808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11817,
    "end": 11818
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11823,
    "end": 11824
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11830,
    "end": 11839
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 11840,
    "end": 11842
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11843,
    "end": 11844
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11853,
    "end": 11859
  },
  {
    "type": "String",
    "value": "\"abc2\"",
    "start": 11860,
    "end": 11866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11867,
    "end": 11868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11877,
    "end": 11878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11883,
    "end": 11884
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11889,
    "end": 11895
  },
  {
    "type": "String",
    "value": "\"abc3\"",
    "start": 11896,
    "end": 11902
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11903,
    "end": 11904
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11909,
    "end": 11910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 11911,
    "end": 11912
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11914,
    "end": 11921
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 11922,
    "end": 11928
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11929,
    "end": 11935
  },
  {
    "type": "String",
    "value": "\"anotherParseError2\"",
    "start": 11936,
    "end": 11956
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11957,
    "end": 11958
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 11963,
    "end": 11972
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 11973,
    "end": 11975
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11976,
    "end": 11977
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 11986,
    "end": 11993
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 11994,
    "end": 12000
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 12001,
    "end": 12006
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12007,
    "end": 12008
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12017,
    "end": 12018
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12023,
    "end": 12024
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12030,
    "end": 12039
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 12040,
    "end": 12042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12043,
    "end": 12044
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 12053,
    "end": 12059
  },
  {
    "type": "String",
    "value": "\"abc2\"",
    "start": 12060,
    "end": 12066
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12067,
    "end": 12068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12077,
    "end": 12078
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12083,
    "end": 12084
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 12089,
    "end": 12095
  },
  {
    "type": "String",
    "value": "\"abc3\"",
    "start": 12096,
    "end": 12102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12103,
    "end": 12104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12109,
    "end": 12110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12111,
    "end": 12112
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12114,
    "end": 12123
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 12124,
    "end": 12126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12127,
    "end": 12128
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 12133,
    "end": 12139
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 12140,
    "end": 12142
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12143,
    "end": 12144
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12145,
    "end": 12152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12152,
    "end": 12153
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 12153,
    "end": 12172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12172,
    "end": 12173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12173,
    "end": 12174
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12179,
    "end": 12188
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 12189,
    "end": 12191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12192,
    "end": 12193
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12202,
    "end": 12205
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12206,
    "end": 12207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12208,
    "end": 12209
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 12210,
    "end": 12212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12212,
    "end": 12213
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 12222,
    "end": 12228
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 12229,
    "end": 12231
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12232,
    "end": 12233
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12234,
    "end": 12241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12241,
    "end": 12242
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 12242,
    "end": 12261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12261,
    "end": 12262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12262,
    "end": 12263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12268,
    "end": 12269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12271,
    "end": 12272
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 12274,
    "end": 12280
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12281,
    "end": 12290
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 12291,
    "end": 12293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12294,
    "end": 12295
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 12300,
    "end": 12306
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 12307,
    "end": 12309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12310,
    "end": 12311
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12312,
    "end": 12319
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12319,
    "end": 12320
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 12320,
    "end": 12339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12339,
    "end": 12340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12340,
    "end": 12341
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 12346,
    "end": 12355
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 12356,
    "end": 12358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12359,
    "end": 12360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 12369,
    "end": 12372
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 12373,
    "end": 12374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12375,
    "end": 12376
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 12377,
    "end": 12379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12379,
    "end": 12380
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 12389,
    "end": 12395
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 12396,
    "end": 12398
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12399,
    "end": 12400
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 12401,
    "end": 12408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12408,
    "end": 12409
  },
  {
    "type": "String",
    "value": "\"use_glo_M1_public\"",
    "start": 12409,
    "end": 12428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12428,
    "end": 12429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12429,
    "end": 12430
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12435,
    "end": 12436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 12438,
    "end": 12439
  }
]
```
