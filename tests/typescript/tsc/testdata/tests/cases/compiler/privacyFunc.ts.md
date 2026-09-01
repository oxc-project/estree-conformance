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
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 162
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_c3_c1",
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
                          "start": 164,
                          "end": 183
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 163,
                      "end": 185
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 151,
                    "end": 185
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 205
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m1_c3_c2",
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
                                "start": 217,
                                "end": 227
                              },
                              "typeArguments": null,
                              "start": 217,
                              "end": 227
                            },
                            "start": 215,
                            "end": 227
                          },
                          "start": 207,
                          "end": 227
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 206,
                      "end": 229
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 194,
                    "end": 229
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 246,
                      "end": 257
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
                          "name": "m1_c3_c1_2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 271,
                              "end": 274
                            },
                            "start": 269,
                            "end": 274
                          },
                          "start": 259,
                          "end": 274
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 276,
                        "end": 287
                      },
                      "expression": false,
                      "start": 258,
                      "end": 287
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 246,
                    "end": 287
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 315
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
                          "name": "m1_c3_f1_arg",
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
                                "start": 330,
                                "end": 339
                              },
                              "typeArguments": null,
                              "start": 330,
                              "end": 339
                            },
                            "start": 328,
                            "end": 339
                          },
                          "start": 316,
                          "end": 339
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 341,
                        "end": 352
                      },
                      "expression": false,
                      "start": 315,
                      "end": 352
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 297,
                    "end": 352
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 378
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
                          "name": "m1_c3_f2_arg",
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
                                "start": 393,
                                "end": 402
                              },
                              "typeArguments": null,
                              "start": 393,
                              "end": 402
                            },
                            "start": 391,
                            "end": 402
                          },
                          "start": 379,
                          "end": 402
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 404,
                        "end": 415
                      },
                      "expression": false,
                      "start": 378,
                      "end": 415
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 362,
                    "end": 415
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 443
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
                          "name": "m1_c3_f3_arg",
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
                                "start": 458,
                                "end": 468
                              },
                              "typeArguments": null,
                              "start": 458,
                              "end": 468
                            },
                            "start": 456,
                            "end": 468
                          },
                          "start": 444,
                          "end": 468
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 470,
                        "end": 481
                      },
                      "expression": false,
                      "start": 443,
                      "end": 481
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 425,
                    "end": 481
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 507
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
                          "name": "m1_c3_f4_arg",
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
                                "start": 522,
                                "end": 532
                              },
                              "typeArguments": null,
                              "start": 522,
                              "end": 532
                            },
                            "start": 520,
                            "end": 532
                          },
                          "start": 508,
                          "end": 532
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 534,
                        "end": 554
                      },
                      "expression": false,
                      "start": 507,
                      "end": 554
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 491,
                    "end": 554
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 582
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
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 610,
                                "end": 619
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 606,
                              "end": 621
                            },
                            "start": 599,
                            "end": 622
                          }
                        ],
                        "start": 585,
                        "end": 632
                      },
                      "expression": false,
                      "start": 582,
                      "end": 632
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 564,
                    "end": 632
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f6_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 658
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
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 686,
                                "end": 695
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 682,
                              "end": 697
                            },
                            "start": 675,
                            "end": 698
                          }
                        ],
                        "start": 661,
                        "end": 708
                      },
                      "expression": false,
                      "start": 658,
                      "end": 708
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 642,
                    "end": 708
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f7_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 726,
                      "end": 736
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
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 764,
                                "end": 774
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 760,
                              "end": 776
                            },
                            "start": 753,
                            "end": 777
                          }
                        ],
                        "start": 739,
                        "end": 787
                      },
                      "expression": false,
                      "start": 736,
                      "end": 787
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 718,
                    "end": 787
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f8_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 813
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
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 841,
                                "end": 851
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 837,
                              "end": 853
                            },
                            "start": 830,
                            "end": 854
                          }
                        ],
                        "start": 816,
                        "end": 874
                      },
                      "expression": false,
                      "start": 813,
                      "end": 874
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 797,
                    "end": 874
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f9_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 892,
                      "end": 902
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                            "start": 906,
                            "end": 915
                          },
                          "typeArguments": null,
                          "start": 906,
                          "end": 915
                        },
                        "start": 904,
                        "end": 915
                      },
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 941,
                                "end": 950
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 937,
                              "end": 952
                            },
                            "start": 930,
                            "end": 953
                          }
                        ],
                        "start": 916,
                        "end": 963
                      },
                      "expression": false,
                      "start": 902,
                      "end": 963
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 884,
                    "end": 963
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f10_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 980,
                      "end": 990
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1029,
                                "end": 1038
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1025,
                              "end": 1040
                            },
                            "start": 1018,
                            "end": 1041
                          }
                        ],
                        "start": 1004,
                        "end": 1051
                      },
                      "expression": false,
                      "start": 990,
                      "end": 1051
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 973,
                    "end": 1051
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f11_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1069,
                      "end": 1080
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                            "start": 1084,
                            "end": 1094
                          },
                          "typeArguments": null,
                          "start": 1084,
                          "end": 1094
                        },
                        "start": 1082,
                        "end": 1094
                      },
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
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1120,
                                "end": 1130
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1116,
                              "end": 1132
                            },
                            "start": 1109,
                            "end": 1133
                          }
                        ],
                        "start": 1095,
                        "end": 1143
                      },
                      "expression": false,
                      "start": 1080,
                      "end": 1143
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1061,
                    "end": 1143
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f12_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1160,
                      "end": 1170
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
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
                            "start": 1174,
                            "end": 1184
                          },
                          "typeArguments": null,
                          "start": 1174,
                          "end": 1184
                        },
                        "start": 1172,
                        "end": 1184
                      },
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
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1219,
                                "end": 1229
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1215,
                              "end": 1231
                            },
                            "start": 1208,
                            "end": 1232
                          }
                        ],
                        "start": 1185,
                        "end": 1250
                      },
                      "expression": false,
                      "start": 1170,
                      "end": 1250
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1153,
                    "end": 1250
                  }
                ],
                "start": 141,
                "end": 1256
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 1256
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 1256
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1268,
              "end": 1278
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1300
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_c4_c1",
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
                              "start": 1312,
                              "end": 1321
                            },
                            "typeArguments": null,
                            "start": 1312,
                            "end": 1321
                          },
                          "start": 1310,
                          "end": 1321
                        },
                        "start": 1302,
                        "end": 1321
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1301,
                    "end": 1323
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1289,
                  "end": 1323
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1332,
                    "end": 1343
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m1_c4_c2",
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
                              "start": 1355,
                              "end": 1365
                            },
                            "typeArguments": null,
                            "start": 1355,
                            "end": 1365
                          },
                          "start": 1353,
                          "end": 1365
                        },
                        "start": 1345,
                        "end": 1365
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 1344,
                    "end": 1367
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1332,
                  "end": 1367
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1376,
                    "end": 1387
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
                        "name": "m1_c4_c1_2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1401,
                            "end": 1404
                          },
                          "start": 1399,
                          "end": 1404
                        },
                        "start": 1389,
                        "end": 1404
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1406,
                      "end": 1417
                    },
                    "expression": false,
                    "start": 1388,
                    "end": 1417
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 1376,
                  "end": 1417
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1434,
                    "end": 1444
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
                        "name": "m1_c4_f1_arg",
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
                              "start": 1459,
                              "end": 1468
                            },
                            "typeArguments": null,
                            "start": 1459,
                            "end": 1468
                          },
                          "start": 1457,
                          "end": 1468
                        },
                        "start": 1445,
                        "end": 1468
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1470,
                      "end": 1481
                    },
                    "expression": false,
                    "start": 1444,
                    "end": 1481
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1426,
                  "end": 1481
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1498,
                    "end": 1507
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
                        "name": "m1_c4_f2_arg",
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
                              "start": 1522,
                              "end": 1531
                            },
                            "typeArguments": null,
                            "start": 1522,
                            "end": 1531
                          },
                          "start": 1520,
                          "end": 1531
                        },
                        "start": 1508,
                        "end": 1531
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1533,
                      "end": 1544
                    },
                    "expression": false,
                    "start": 1507,
                    "end": 1544
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1491,
                  "end": 1544
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1562,
                    "end": 1572
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
                        "name": "m1_c4_f3_arg",
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
                              "start": 1587,
                              "end": 1597
                            },
                            "typeArguments": null,
                            "start": 1587,
                            "end": 1597
                          },
                          "start": 1585,
                          "end": 1597
                        },
                        "start": 1573,
                        "end": 1597
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1599,
                      "end": 1610
                    },
                    "expression": false,
                    "start": 1572,
                    "end": 1610
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1554,
                  "end": 1610
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1627,
                    "end": 1636
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
                        "name": "m1_c4_f4_arg",
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
                              "start": 1651,
                              "end": 1661
                            },
                            "typeArguments": null,
                            "start": 1651,
                            "end": 1661
                          },
                          "start": 1649,
                          "end": 1661
                        },
                        "start": 1637,
                        "end": 1661
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1663,
                      "end": 1674
                    },
                    "expression": false,
                    "start": 1636,
                    "end": 1674
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1620,
                  "end": 1674
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1693,
                    "end": 1703
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
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1731,
                              "end": 1740
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1727,
                            "end": 1742
                          },
                          "start": 1720,
                          "end": 1743
                        }
                      ],
                      "start": 1706,
                      "end": 1753
                    },
                    "expression": false,
                    "start": 1703,
                    "end": 1753
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1685,
                  "end": 1753
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1770,
                    "end": 1779
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
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1807,
                              "end": 1816
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1803,
                            "end": 1818
                          },
                          "start": 1796,
                          "end": 1819
                        }
                      ],
                      "start": 1782,
                      "end": 1829
                    },
                    "expression": false,
                    "start": 1779,
                    "end": 1829
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1763,
                  "end": 1829
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f7_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1847,
                    "end": 1857
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
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1885,
                              "end": 1895
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1881,
                            "end": 1897
                          },
                          "start": 1874,
                          "end": 1898
                        }
                      ],
                      "start": 1860,
                      "end": 1908
                    },
                    "expression": false,
                    "start": 1857,
                    "end": 1908
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1839,
                  "end": 1908
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f8_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1925,
                    "end": 1934
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
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1962,
                              "end": 1972
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1958,
                            "end": 1974
                          },
                          "start": 1951,
                          "end": 1975
                        }
                      ],
                      "start": 1937,
                      "end": 1985
                    },
                    "expression": false,
                    "start": 1934,
                    "end": 1985
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1918,
                  "end": 1985
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f9_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2004,
                    "end": 2014
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                          "start": 2018,
                          "end": 2027
                        },
                        "typeArguments": null,
                        "start": 2018,
                        "end": 2027
                      },
                      "start": 2016,
                      "end": 2027
                    },
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
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2053,
                              "end": 2062
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2049,
                            "end": 2064
                          },
                          "start": 2042,
                          "end": 2065
                        }
                      ],
                      "start": 2028,
                      "end": 2075
                    },
                    "expression": false,
                    "start": 2014,
                    "end": 2075
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1996,
                  "end": 2075
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f10_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2092,
                    "end": 2102
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                          "start": 2106,
                          "end": 2115
                        },
                        "typeArguments": null,
                        "start": 2106,
                        "end": 2115
                      },
                      "start": 2104,
                      "end": 2115
                    },
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
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2141,
                              "end": 2150
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2137,
                            "end": 2152
                          },
                          "start": 2130,
                          "end": 2153
                        }
                      ],
                      "start": 2116,
                      "end": 2163
                    },
                    "expression": false,
                    "start": 2102,
                    "end": 2163
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2085,
                  "end": 2163
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f11_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2181,
                    "end": 2192
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                          "start": 2196,
                          "end": 2206
                        },
                        "typeArguments": null,
                        "start": 2196,
                        "end": 2206
                      },
                      "start": 2194,
                      "end": 2206
                    },
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
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2232,
                              "end": 2242
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2228,
                            "end": 2244
                          },
                          "start": 2221,
                          "end": 2245
                        }
                      ],
                      "start": 2207,
                      "end": 2255
                    },
                    "expression": false,
                    "start": 2192,
                    "end": 2255
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2173,
                  "end": 2255
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f12_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2272,
                    "end": 2282
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
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
                          "start": 2286,
                          "end": 2296
                        },
                        "typeArguments": null,
                        "start": 2286,
                        "end": 2296
                      },
                      "start": 2284,
                      "end": 2296
                    },
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
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2322,
                              "end": 2332
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2318,
                            "end": 2334
                          },
                          "start": 2311,
                          "end": 2335
                        }
                      ],
                      "start": 2297,
                      "end": 2345
                    },
                    "expression": false,
                    "start": 2282,
                    "end": 2345
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2265,
                  "end": 2345
                }
              ],
              "start": 1279,
              "end": 2351
            },
            "abstract": false,
            "declare": false,
            "start": 1262,
            "end": 2351
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2370,
                "end": 2379
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2401
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
                          "name": "m1_c5_c",
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
                                "start": 2412,
                                "end": 2421
                              },
                              "typeArguments": null,
                              "start": 2412,
                              "end": 2421
                            },
                            "start": 2410,
                            "end": 2421
                          },
                          "start": 2403,
                          "end": 2421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2423,
                        "end": 2434
                      },
                      "expression": false,
                      "start": 2402,
                      "end": 2434
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2390,
                    "end": 2434
                  }
                ],
                "start": 2380,
                "end": 2440
              },
              "abstract": false,
              "declare": false,
              "start": 2364,
              "end": 2440
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2357,
            "end": 2440
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C6_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2456,
              "end": 2466
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2477,
                    "end": 2488
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
                        "name": "m1_c6_c",
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
                              "start": 2499,
                              "end": 2508
                            },
                            "typeArguments": null,
                            "start": 2499,
                            "end": 2508
                          },
                          "start": 2497,
                          "end": 2508
                        },
                        "start": 2490,
                        "end": 2508
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2510,
                      "end": 2521
                    },
                    "expression": false,
                    "start": 2489,
                    "end": 2521
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2477,
                  "end": 2521
                }
              ],
              "start": 2467,
              "end": 2527
            },
            "abstract": false,
            "declare": false,
            "start": 2450,
            "end": 2527
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2545,
                "end": 2554
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2565,
                      "end": 2576
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
                          "name": "m1_c7_c",
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
                                "start": 2587,
                                "end": 2597
                              },
                              "typeArguments": null,
                              "start": 2587,
                              "end": 2597
                            },
                            "start": 2585,
                            "end": 2597
                          },
                          "start": 2578,
                          "end": 2597
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2599,
                        "end": 2619
                      },
                      "expression": false,
                      "start": 2577,
                      "end": 2619
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2565,
                    "end": 2619
                  }
                ],
                "start": 2555,
                "end": 2625
              },
              "abstract": false,
              "declare": false,
              "start": 2539,
              "end": 2625
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2532,
            "end": 2625
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C8_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 2641,
              "end": 2651
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
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2662,
                    "end": 2673
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
                        "name": "m1_c8_c",
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
                              "start": 2684,
                              "end": 2694
                            },
                            "typeArguments": null,
                            "start": 2684,
                            "end": 2694
                          },
                          "start": 2682,
                          "end": 2694
                        },
                        "start": 2675,
                        "end": 2694
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2696,
                      "end": 2707
                    },
                    "expression": false,
                    "start": 2674,
                    "end": 2707
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 2662,
                  "end": 2707
                }
              ],
              "start": 2652,
              "end": 2713
            },
            "abstract": false,
            "declare": false,
            "start": 2635,
            "end": 2713
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2728,
              "end": 2737
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_f1_arg",
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
                      "start": 2749,
                      "end": 2758
                    },
                    "typeArguments": null,
                    "start": 2749,
                    "end": 2758
                  },
                  "start": 2747,
                  "end": 2758
                },
                "start": 2738,
                "end": 2758
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2760,
              "end": 2767
            },
            "expression": false,
            "start": 2719,
            "end": 2767
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2789,
                "end": 2798
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_f2_arg",
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
                        "start": 2810,
                        "end": 2819
                      },
                      "typeArguments": null,
                      "start": 2810,
                      "end": 2819
                    },
                    "start": 2808,
                    "end": 2819
                  },
                  "start": 2799,
                  "end": 2819
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2821,
                "end": 2828
              },
              "expression": false,
              "start": 2780,
              "end": 2828
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2773,
            "end": 2828
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2843,
              "end": 2852
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m1_f3_arg",
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
                      "start": 2864,
                      "end": 2874
                    },
                    "typeArguments": null,
                    "start": 2864,
                    "end": 2874
                  },
                  "start": 2862,
                  "end": 2874
                },
                "start": 2853,
                "end": 2874
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 2876,
              "end": 2883
            },
            "expression": false,
            "start": 2834,
            "end": 2883
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2905,
                "end": 2914
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m1_f4_arg",
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
                        "start": 2926,
                        "end": 2936
                      },
                      "typeArguments": null,
                      "start": 2926,
                      "end": 2936
                    },
                    "start": 2924,
                    "end": 2936
                  },
                  "start": 2915,
                  "end": 2936
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2938,
                "end": 2954
              },
              "expression": false,
              "start": 2896,
              "end": 2954
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 2889,
            "end": 2954
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 2970,
              "end": 2979
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
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3003,
                      "end": 3012
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 2999,
                    "end": 3014
                  },
                  "start": 2992,
                  "end": 3015
                }
              ],
              "start": 2982,
              "end": 3021
            },
            "expression": false,
            "start": 2961,
            "end": 3021
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3052
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
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3076,
                        "end": 3085
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3072,
                      "end": 3087
                    },
                    "start": 3065,
                    "end": 3088
                  }
                ],
                "start": 3055,
                "end": 3094
              },
              "expression": false,
              "start": 3034,
              "end": 3094
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3027,
            "end": 3094
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f7_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3109,
              "end": 3118
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
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3142,
                      "end": 3152
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3138,
                    "end": 3154
                  },
                  "start": 3131,
                  "end": 3155
                }
              ],
              "start": 3121,
              "end": 3161
            },
            "expression": false,
            "start": 3100,
            "end": 3161
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f8_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3183,
                "end": 3192
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
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3216,
                        "end": 3226
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3212,
                      "end": 3228
                    },
                    "start": 3205,
                    "end": 3229
                  }
                ],
                "start": 3195,
                "end": 3245
              },
              "expression": false,
              "start": 3174,
              "end": 3245
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3167,
            "end": 3245
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3261,
              "end": 3271
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                  "start": 3275,
                  "end": 3284
                },
                "typeArguments": null,
                "start": 3275,
                "end": 3284
              },
              "start": 3273,
              "end": 3284
            },
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
                      "name": "C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3306,
                      "end": 3315
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3302,
                    "end": 3317
                  },
                  "start": 3295,
                  "end": 3318
                }
              ],
              "start": 3285,
              "end": 3324
            },
            "expression": false,
            "start": 3252,
            "end": 3324
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f10_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3346,
                "end": 3356
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                    "start": 3360,
                    "end": 3369
                  },
                  "typeArguments": null,
                  "start": 3360,
                  "end": 3369
                },
                "start": 3358,
                "end": 3369
              },
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
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3391,
                        "end": 3400
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3387,
                      "end": 3402
                    },
                    "start": 3380,
                    "end": 3403
                  }
                ],
                "start": 3370,
                "end": 3409
              },
              "expression": false,
              "start": 3337,
              "end": 3409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3330,
            "end": 3409
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3435
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                  "start": 3439,
                  "end": 3449
                },
                "typeArguments": null,
                "start": 3439,
                "end": 3449
              },
              "start": 3437,
              "end": 3449
            },
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
                      "name": "C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3471,
                      "end": 3481
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 3467,
                    "end": 3483
                  },
                  "start": 3460,
                  "end": 3484
                }
              ],
              "start": 3450,
              "end": 3490
            },
            "expression": false,
            "start": 3415,
            "end": 3490
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f12_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3512,
                "end": 3522
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                    "start": 3526,
                    "end": 3536
                  },
                  "typeArguments": null,
                  "start": 3526,
                  "end": 3536
                },
                "start": 3524,
                "end": 3536
              },
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
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3567,
                        "end": 3577
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3563,
                      "end": 3579
                    },
                    "start": 3556,
                    "end": 3580
                  }
                ],
                "start": 3537,
                "end": 3594
              },
              "expression": false,
              "start": 3503,
              "end": 3594
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3496,
            "end": 3594
          }
        ],
        "start": 13,
        "end": 3596
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 3596
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3604,
        "end": 3613
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 3614,
        "end": 3617
      },
      "abstract": false,
      "declare": false,
      "start": 3598,
      "end": 3617
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C7_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 3625,
        "end": 3634
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3641,
              "end": 3652
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c7_c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3661,
                        "end": 3670
                      },
                      "typeArguments": null,
                      "start": 3661,
                      "end": 3670
                    },
                    "start": 3659,
                    "end": 3670
                  },
                  "start": 3654,
                  "end": 3670
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 3653,
              "end": 3672
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3641,
            "end": 3672
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3677,
              "end": 3688
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
                  "name": "c7_c1_2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 3699,
                      "end": 3702
                    },
                    "start": 3697,
                    "end": 3702
                  },
                  "start": 3690,
                  "end": 3702
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3704,
                "end": 3711
              },
              "expression": false,
              "start": 3689,
              "end": 3711
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3677,
            "end": 3711
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3724,
              "end": 3734
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
                  "name": "c7_f1_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3746,
                        "end": 3755
                      },
                      "typeArguments": null,
                      "start": 3746,
                      "end": 3755
                    },
                    "start": 3744,
                    "end": 3755
                  },
                  "start": 3735,
                  "end": 3755
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3757,
                "end": 3764
              },
              "expression": false,
              "start": 3734,
              "end": 3764
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3716,
            "end": 3764
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3777,
              "end": 3786
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
                  "name": "c7_f2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3798,
                        "end": 3807
                      },
                      "typeArguments": null,
                      "start": 3798,
                      "end": 3807
                    },
                    "start": 3796,
                    "end": 3807
                  },
                  "start": 3787,
                  "end": 3807
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3809,
                "end": 3816
              },
              "expression": false,
              "start": 3786,
              "end": 3816
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3770,
            "end": 3816
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3830,
              "end": 3840
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3864,
                        "end": 3873
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3860,
                      "end": 3875
                    },
                    "start": 3853,
                    "end": 3876
                  }
                ],
                "start": 3843,
                "end": 3882
              },
              "expression": false,
              "start": 3840,
              "end": 3882
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3822,
            "end": 3882
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f6_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 3895,
              "end": 3904
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3928,
                        "end": 3937
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3924,
                      "end": 3939
                    },
                    "start": 3917,
                    "end": 3940
                  }
                ],
                "start": 3907,
                "end": 3946
              },
              "expression": false,
              "start": 3904,
              "end": 3946
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3888,
            "end": 3946
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3960,
              "end": 3970
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3974,
                    "end": 3983
                  },
                  "typeArguments": null,
                  "start": 3974,
                  "end": 3983
                },
                "start": 3972,
                "end": 3983
              },
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
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4005,
                        "end": 4014
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4001,
                      "end": 4016
                    },
                    "start": 3994,
                    "end": 4017
                  }
                ],
                "start": 3984,
                "end": 4023
              },
              "expression": false,
              "start": 3970,
              "end": 4023
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3952,
            "end": 4023
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f10_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4036,
              "end": 4046
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4050,
                    "end": 4059
                  },
                  "typeArguments": null,
                  "start": 4050,
                  "end": 4059
                },
                "start": 4048,
                "end": 4059
              },
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
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4081,
                        "end": 4090
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4077,
                      "end": 4092
                    },
                    "start": 4070,
                    "end": 4093
                  }
                ],
                "start": 4060,
                "end": 4099
              },
              "expression": false,
              "start": 4046,
              "end": 4099
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4029,
            "end": 4099
          }
        ],
        "start": 3635,
        "end": 4101
      },
      "abstract": false,
      "declare": false,
      "start": 3619,
      "end": 4101
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C9_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4109,
        "end": 4118
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 4125,
              "end": 4136
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
                  "name": "c9_c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4144,
                        "end": 4153
                      },
                      "typeArguments": null,
                      "start": 4144,
                      "end": 4153
                    },
                    "start": 4142,
                    "end": 4153
                  },
                  "start": 4138,
                  "end": 4153
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4155,
                "end": 4162
              },
              "expression": false,
              "start": 4137,
              "end": 4162
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4125,
            "end": 4162
          }
        ],
        "start": 4119,
        "end": 4164
      },
      "abstract": false,
      "declare": false,
      "start": 4103,
      "end": 4164
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4178,
        "end": 4187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f4_arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4196,
                "end": 4205
              },
              "typeArguments": null,
              "start": 4196,
              "end": 4205
            },
            "start": 4194,
            "end": 4205
          },
          "start": 4188,
          "end": 4205
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4207,
        "end": 4210
      },
      "expression": false,
      "start": 4169,
      "end": 4210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4223,
        "end": 4232
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
                "name": "C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4252,
                "end": 4261
              },
              "typeArguments": null,
              "arguments": [],
              "start": 4248,
              "end": 4263
            },
            "start": 4241,
            "end": 4264
          }
        ],
        "start": 4235,
        "end": 4266
      },
      "expression": false,
      "start": 4214,
      "end": 4266
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10_public",
        "optional": false,
        "typeAnnotation": null,
        "start": 4278,
        "end": 4288
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "C6_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 4292,
            "end": 4301
          },
          "typeArguments": null,
          "start": 4292,
          "end": 4301
        },
        "start": 4290,
        "end": 4301
      },
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
                "name": "C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4319,
                "end": 4328
              },
              "typeArguments": null,
              "arguments": [],
              "start": 4315,
              "end": 4330
            },
            "start": 4308,
            "end": 4331
          }
        ],
        "start": 4302,
        "end": 4333
      },
      "expression": false,
      "start": 4269,
      "end": 4333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4333
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
    "type": "Identifier",
    "value": "constructor",
    "start": 151,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1",
    "start": 164,
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
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 194,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c2",
    "start": 207,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 217,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 246,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1_2",
    "start": 259,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 286,
    "end": 287
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 305,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f1_arg",
    "start": 316,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 330,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 362,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 369,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f2_arg",
    "start": 379,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 393,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 425,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 433,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f3_arg",
    "start": 444,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 458,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 480,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 491,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 498,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f4_arg",
    "start": 508,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 522,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 564,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 572,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 585,
    "end": 586
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 599,
    "end": 605
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 606,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 610,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 642,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 649,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 661,
    "end": 662
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 675,
    "end": 681
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 682,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 686,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 718,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 726,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 753,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 760,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 764,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 797,
    "end": 803
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 804,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 816,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 830,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 841,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 884,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 892,
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
    "value": "C1_public",
    "start": 906,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 930,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 937,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 941,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 952,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 973,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 980,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 990,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1018,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1029,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 1069,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1084,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1109,
    "end": 1115
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1116,
    "end": 1119
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1120,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1153,
    "end": 1159
  },
  {
    "type": "Identifier",
    "value": "f12_public",
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
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1174,
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
    "value": "return",
    "start": 1208,
    "end": 1214
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1219,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1262,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 1268,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1289,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1",
    "start": 1302,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1312,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1332,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c2",
    "start": 1345,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1355,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1376,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1_2",
    "start": 1389,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1401,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1426,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 1434,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1444,
    "end": 1445
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f1_arg",
    "start": 1445,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1459,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1491,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 1498,
    "end": 1507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f2_arg",
    "start": 1508,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1522,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1533,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1554,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 1562,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f3_arg",
    "start": 1573,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1587,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1620,
    "end": 1626
  },
  {
    "type": "Identifier",
    "value": "f4_public",
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
    "type": "Identifier",
    "value": "m1_c4_f4_arg",
    "start": 1637,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1651,
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
    "value": "{",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1685,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 1693,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1720,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1731,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1763,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 1770,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1779,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1796,
    "end": 1802
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1803,
    "end": 1806
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1807,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1818,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1839,
    "end": 1846
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 1847,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1874,
    "end": 1880
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1881,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1885,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1918,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 1925,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1937,
    "end": 1938
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1951,
    "end": 1957
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1958,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1962,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1973,
    "end": 1974
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1996,
    "end": 2003
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 2004,
    "end": 2014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2018,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2042,
    "end": 2048
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2049,
    "end": 2052
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2053,
    "end": 2062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2062,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2063,
    "end": 2064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2074,
    "end": 2075
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2085,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 2092,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2106,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2130,
    "end": 2136
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2137,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2141,
    "end": 2150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2150,
    "end": 2151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2151,
    "end": 2152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2152,
    "end": 2153
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2162,
    "end": 2163
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2173,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 2181,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2196,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2221,
    "end": 2227
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2228,
    "end": 2231
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2232,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2254,
    "end": 2255
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 2272,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2286,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2311,
    "end": 2317
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2318,
    "end": 2321
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2322,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2332,
    "end": 2333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335
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
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2357,
    "end": 2363
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2364,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2370,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2390,
    "end": 2401
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "m1_c5_c",
    "start": 2403,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2412,
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
    "value": "{",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2433,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2450,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2456,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2477,
    "end": 2488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Identifier",
    "value": "m1_c6_c",
    "start": 2490,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2499,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2532,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2539,
    "end": 2544
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 2545,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2565,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Identifier",
    "value": "m1_c7_c",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2587,
    "end": 2597
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2597,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2599,
    "end": 2600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2618,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2635,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 2641,
    "end": 2651
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2662,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "m1_c8_c",
    "start": 2675,
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
    "value": "C2_private",
    "start": 2684,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2719,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "f1_public",
    "start": 2728,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "m1_f1_arg",
    "start": 2738,
    "end": 2747
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2747,
    "end": 2748
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2749,
    "end": 2758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2758,
    "end": 2759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2760,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2780,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 2789,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "m1_f2_arg",
    "start": 2799,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2808,
    "end": 2809
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2810,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2834,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "f3_public",
    "start": 2843,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "m1_f3_arg",
    "start": 2853,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2862,
    "end": 2863
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2864,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2876,
    "end": 2877
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2889,
    "end": 2895
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2896,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 2905,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "m1_f4_arg",
    "start": 2915,
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
    "value": "C2_private",
    "start": 2926,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2961,
    "end": 2969
  },
  {
    "type": "Identifier",
    "value": "f5_public",
    "start": 2970,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2992,
    "end": 2998
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2999,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3003,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3013,
    "end": 3014
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3027,
    "end": 3033
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3034,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 3043,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3065,
    "end": 3071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3072,
    "end": 3075
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3076,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3100,
    "end": 3108
  },
  {
    "type": "Identifier",
    "value": "f7_public",
    "start": 3109,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3119,
    "end": 3120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3121,
    "end": 3122
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3131,
    "end": 3137
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3138,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3142,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3167,
    "end": 3173
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3174,
    "end": 3182
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 3183,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3205,
    "end": 3211
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3212,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3216,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3252,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 3261,
    "end": 3271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3272,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3275,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3295,
    "end": 3301
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3302,
    "end": 3305
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3306,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3330,
    "end": 3336
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3337,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 3346,
    "end": 3356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3356,
    "end": 3357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3357,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3358,
    "end": 3359
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3360,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3380,
    "end": 3386
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3387,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3391,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3415,
    "end": 3423
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 3424,
    "end": 3435
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3435,
    "end": 3436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3436,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3439,
    "end": 3449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3450,
    "end": 3451
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3460,
    "end": 3466
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3467,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3471,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3481,
    "end": 3482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3483,
    "end": 3484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3496,
    "end": 3502
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3503,
    "end": 3511
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 3512,
    "end": 3522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3522,
    "end": 3523
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3523,
    "end": 3524
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3524,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3526,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3556,
    "end": 3562
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3563,
    "end": 3566
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3567,
    "end": 3577
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3577,
    "end": 3578
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3578,
    "end": 3579
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3579,
    "end": 3580
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3595,
    "end": 3596
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3598,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3604,
    "end": 3613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3619,
    "end": 3624
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 3625,
    "end": 3634
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3635,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3641,
    "end": 3652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3653,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "c7_c2",
    "start": 3654,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3661,
    "end": 3670
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3671,
    "end": 3672
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3677,
    "end": 3688
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "c7_c1_2",
    "start": 3690,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3699,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3710,
    "end": 3711
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3716,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 3724,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Identifier",
    "value": "c7_f1_arg",
    "start": 3735,
    "end": 3744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3744,
    "end": 3745
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3746,
    "end": 3755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3755,
    "end": 3756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3757,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3770,
    "end": 3776
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 3777,
    "end": 3786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3786,
    "end": 3787
  },
  {
    "type": "Identifier",
    "value": "c7_f2_arg",
    "start": 3787,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3798,
    "end": 3807
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3807,
    "end": 3808
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3809,
    "end": 3810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3815,
    "end": 3816
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3822,
    "end": 3829
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 3830,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3841,
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
    "value": "return",
    "start": 3853,
    "end": 3859
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3860,
    "end": 3863
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3864,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3881,
    "end": 3882
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3888,
    "end": 3894
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 3895,
    "end": 3904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3904,
    "end": 3905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3905,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3917,
    "end": 3923
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3924,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3928,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3938,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3945,
    "end": 3946
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3952,
    "end": 3959
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 3960,
    "end": 3970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3970,
    "end": 3971
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3971,
    "end": 3972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3972,
    "end": 3973
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3974,
    "end": 3983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3984,
    "end": 3985
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3994,
    "end": 4000
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4001,
    "end": 4004
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4005,
    "end": 4014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4014,
    "end": 4015
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4015,
    "end": 4016
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4016,
    "end": 4017
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4029,
    "end": 4035
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 4036,
    "end": 4046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4046,
    "end": 4047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4047,
    "end": 4048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4048,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4050,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4070,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4077,
    "end": 4080
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4081,
    "end": 4090
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4091,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4098,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4103,
    "end": 4108
  },
  {
    "type": "Identifier",
    "value": "C9_public",
    "start": 4109,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4119,
    "end": 4120
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4125,
    "end": 4136
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4137,
    "end": 4138
  },
  {
    "type": "Identifier",
    "value": "c9_c",
    "start": 4138,
    "end": 4142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4144,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4163,
    "end": 4164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4169,
    "end": 4177
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 4178,
    "end": 4187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4187,
    "end": 4188
  },
  {
    "type": "Identifier",
    "value": "f4_arg",
    "start": 4188,
    "end": 4194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4196,
    "end": 4205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4205,
    "end": 4206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4207,
    "end": 4208
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4214,
    "end": 4222
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 4223,
    "end": 4232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4232,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4235,
    "end": 4236
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4241,
    "end": 4247
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4248,
    "end": 4251
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4252,
    "end": 4261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4261,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4262,
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
    "value": "}",
    "start": 4265,
    "end": 4266
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4269,
    "end": 4277
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 4278,
    "end": 4288
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4288,
    "end": 4289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4289,
    "end": 4290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4290,
    "end": 4291
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4292,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4302,
    "end": 4303
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4308,
    "end": 4314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4315,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 4319,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4332,
    "end": 4333
  }
]
```
