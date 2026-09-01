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
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 48
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
                        "start": 67,
                        "end": 69
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
                          "start": 72,
                          "end": 83
                        },
                        "expression": false,
                        "start": 69,
                        "end": 83
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 59,
                      "end": 83
                    }
                  ],
                  "start": 49,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 33,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 89
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
                "start": 101,
                "end": 111
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 112,
                "end": 119
              },
              "abstract": false,
              "declare": false,
              "start": 95,
              "end": 119
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
                  "start": 138,
                  "end": 147
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
                        "start": 158,
                        "end": 169
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
                                  "start": 181,
                                  "end": 190
                                },
                                "typeArguments": null,
                                "start": 181,
                                "end": 190
                              },
                              "start": 179,
                              "end": 190
                            },
                            "start": 171,
                            "end": 190
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 170,
                        "end": 192
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 158,
                      "end": 192
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
                        "start": 201,
                        "end": 212
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
                                  "start": 224,
                                  "end": 234
                                },
                                "typeArguments": null,
                                "start": 224,
                                "end": 234
                              },
                              "start": 222,
                              "end": 234
                            },
                            "start": 214,
                            "end": 234
                          }
                        ],
                        "returnType": null,
                        "body": null,
                        "expression": false,
                        "start": 213,
                        "end": 236
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 201,
                      "end": 236
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
                        "start": 253,
                        "end": 264
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
                                "start": 278,
                                "end": 281
                              },
                              "start": 276,
                              "end": 281
                            },
                            "start": 266,
                            "end": 281
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 283,
                          "end": 294
                        },
                        "expression": false,
                        "start": 265,
                        "end": 294
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 253,
                      "end": 294
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
                        "start": 312,
                        "end": 322
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
                                  "start": 337,
                                  "end": 346
                                },
                                "typeArguments": null,
                                "start": 337,
                                "end": 346
                              },
                              "start": 335,
                              "end": 346
                            },
                            "start": 323,
                            "end": 346
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 348,
                          "end": 359
                        },
                        "expression": false,
                        "start": 322,
                        "end": 359
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 304,
                      "end": 359
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
                        "start": 376,
                        "end": 385
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
                                  "start": 400,
                                  "end": 409
                                },
                                "typeArguments": null,
                                "start": 400,
                                "end": 409
                              },
                              "start": 398,
                              "end": 409
                            },
                            "start": 386,
                            "end": 409
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 411,
                          "end": 422
                        },
                        "expression": false,
                        "start": 385,
                        "end": 422
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 369,
                      "end": 422
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
                        "start": 440,
                        "end": 450
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
                                  "start": 465,
                                  "end": 475
                                },
                                "typeArguments": null,
                                "start": 465,
                                "end": 475
                              },
                              "start": 463,
                              "end": 475
                            },
                            "start": 451,
                            "end": 475
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 477,
                          "end": 488
                        },
                        "expression": false,
                        "start": 450,
                        "end": 488
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 432,
                      "end": 488
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
                        "start": 505,
                        "end": 514
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
                            "start": 515,
                            "end": 539
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 541,
                          "end": 561
                        },
                        "expression": false,
                        "start": 514,
                        "end": 561
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 498,
                      "end": 561
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
                        "start": 579,
                        "end": 589
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
                                  "start": 617,
                                  "end": 626
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 613,
                                "end": 628
                              },
                              "start": 606,
                              "end": 629
                            }
                          ],
                          "start": 592,
                          "end": 639
                        },
                        "expression": false,
                        "start": 589,
                        "end": 639
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 571,
                      "end": 639
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
                        "start": 656,
                        "end": 665
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
                                  "start": 693,
                                  "end": 702
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 689,
                                "end": 704
                              },
                              "start": 682,
                              "end": 705
                            }
                          ],
                          "start": 668,
                          "end": 715
                        },
                        "expression": false,
                        "start": 665,
                        "end": 715
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 649,
                      "end": 715
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
                        "start": 733,
                        "end": 743
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
                                  "start": 771,
                                  "end": 781
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 767,
                                "end": 783
                              },
                              "start": 760,
                              "end": 784
                            }
                          ],
                          "start": 746,
                          "end": 794
                        },
                        "expression": false,
                        "start": 743,
                        "end": 794
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 725,
                      "end": 794
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
                        "start": 811,
                        "end": 820
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
                                  "start": 848,
                                  "end": 858
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 844,
                                "end": 860
                              },
                              "start": 837,
                              "end": 861
                            }
                          ],
                          "start": 823,
                          "end": 881
                        },
                        "expression": false,
                        "start": 820,
                        "end": 881
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 804,
                      "end": 881
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
                        "start": 899,
                        "end": 909
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
                              "start": 913,
                              "end": 922
                            },
                            "typeArguments": null,
                            "start": 913,
                            "end": 922
                          },
                          "start": 911,
                          "end": 922
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
                                  "start": 948,
                                  "end": 957
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 944,
                                "end": 959
                              },
                              "start": 937,
                              "end": 960
                            }
                          ],
                          "start": 923,
                          "end": 970
                        },
                        "expression": false,
                        "start": 909,
                        "end": 970
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 891,
                      "end": 970
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
                        "start": 987,
                        "end": 997
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
                              "start": 1001,
                              "end": 1010
                            },
                            "typeArguments": null,
                            "start": 1001,
                            "end": 1010
                          },
                          "start": 999,
                          "end": 1010
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
                                  "start": 1036,
                                  "end": 1045
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1032,
                                "end": 1047
                              },
                              "start": 1025,
                              "end": 1048
                            }
                          ],
                          "start": 1011,
                          "end": 1058
                        },
                        "expression": false,
                        "start": 997,
                        "end": 1058
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 980,
                      "end": 1058
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
                        "start": 1076,
                        "end": 1087
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
                              "start": 1091,
                              "end": 1101
                            },
                            "typeArguments": null,
                            "start": 1091,
                            "end": 1101
                          },
                          "start": 1089,
                          "end": 1101
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
                                  "start": 1127,
                                  "end": 1137
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1123,
                                "end": 1139
                              },
                              "start": 1116,
                              "end": 1140
                            }
                          ],
                          "start": 1102,
                          "end": 1150
                        },
                        "expression": false,
                        "start": 1087,
                        "end": 1150
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 1068,
                      "end": 1150
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
                        "start": 1167,
                        "end": 1177
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
                              "start": 1181,
                              "end": 1191
                            },
                            "typeArguments": null,
                            "start": 1181,
                            "end": 1191
                          },
                          "start": 1179,
                          "end": 1191
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
                                  "start": 1226,
                                  "end": 1236
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 1222,
                                "end": 1238
                              },
                              "start": 1215,
                              "end": 1239
                            }
                          ],
                          "start": 1192,
                          "end": 1257
                        },
                        "expression": false,
                        "start": 1177,
                        "end": 1257
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 1160,
                      "end": 1257
                    }
                  ],
                  "start": 148,
                  "end": 1263
                },
                "abstract": false,
                "declare": false,
                "start": 132,
                "end": 1263
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 1263
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
                "start": 1275,
                "end": 1285
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
                      "start": 1296,
                      "end": 1307
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
                                "start": 1319,
                                "end": 1328
                              },
                              "typeArguments": null,
                              "start": 1319,
                              "end": 1328
                            },
                            "start": 1317,
                            "end": 1328
                          },
                          "start": 1309,
                          "end": 1328
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1308,
                      "end": 1330
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1296,
                    "end": 1330
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
                      "start": 1339,
                      "end": 1350
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
                                "start": 1362,
                                "end": 1372
                              },
                              "typeArguments": null,
                              "start": 1362,
                              "end": 1372
                            },
                            "start": 1360,
                            "end": 1372
                          },
                          "start": 1352,
                          "end": 1372
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1351,
                      "end": 1374
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1339,
                    "end": 1374
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
                      "start": 1383,
                      "end": 1394
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
                              "start": 1408,
                              "end": 1411
                            },
                            "start": 1406,
                            "end": 1411
                          },
                          "start": 1396,
                          "end": 1411
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1413,
                        "end": 1424
                      },
                      "expression": false,
                      "start": 1395,
                      "end": 1424
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1383,
                    "end": 1424
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
                      "start": 1441,
                      "end": 1451
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
                                "start": 1466,
                                "end": 1475
                              },
                              "typeArguments": null,
                              "start": 1466,
                              "end": 1475
                            },
                            "start": 1464,
                            "end": 1475
                          },
                          "start": 1452,
                          "end": 1475
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1477,
                        "end": 1488
                      },
                      "expression": false,
                      "start": 1451,
                      "end": 1488
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1433,
                    "end": 1488
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
                      "start": 1505,
                      "end": 1514
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
                                "start": 1529,
                                "end": 1538
                              },
                              "typeArguments": null,
                              "start": 1529,
                              "end": 1538
                            },
                            "start": 1527,
                            "end": 1538
                          },
                          "start": 1515,
                          "end": 1538
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1540,
                        "end": 1551
                      },
                      "expression": false,
                      "start": 1514,
                      "end": 1551
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1498,
                    "end": 1551
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
                      "start": 1569,
                      "end": 1579
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
                                "start": 1594,
                                "end": 1604
                              },
                              "typeArguments": null,
                              "start": 1594,
                              "end": 1604
                            },
                            "start": 1592,
                            "end": 1604
                          },
                          "start": 1580,
                          "end": 1604
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1606,
                        "end": 1617
                      },
                      "expression": false,
                      "start": 1579,
                      "end": 1617
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1561,
                    "end": 1617
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
                      "start": 1634,
                      "end": 1643
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
                                "start": 1658,
                                "end": 1668
                              },
                              "typeArguments": null,
                              "start": 1658,
                              "end": 1668
                            },
                            "start": 1656,
                            "end": 1668
                          },
                          "start": 1644,
                          "end": 1668
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1670,
                        "end": 1681
                      },
                      "expression": false,
                      "start": 1643,
                      "end": 1681
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1627,
                    "end": 1681
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
                      "start": 1700,
                      "end": 1710
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
                                "start": 1738,
                                "end": 1747
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1734,
                              "end": 1749
                            },
                            "start": 1727,
                            "end": 1750
                          }
                        ],
                        "start": 1713,
                        "end": 1760
                      },
                      "expression": false,
                      "start": 1710,
                      "end": 1760
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1692,
                    "end": 1760
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
                      "start": 1777,
                      "end": 1786
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
                                "start": 1814,
                                "end": 1823
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1810,
                              "end": 1825
                            },
                            "start": 1803,
                            "end": 1826
                          }
                        ],
                        "start": 1789,
                        "end": 1836
                      },
                      "expression": false,
                      "start": 1786,
                      "end": 1836
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1770,
                    "end": 1836
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
                      "start": 1854,
                      "end": 1864
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
                                "start": 1892,
                                "end": 1902
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1888,
                              "end": 1904
                            },
                            "start": 1881,
                            "end": 1905
                          }
                        ],
                        "start": 1867,
                        "end": 1915
                      },
                      "expression": false,
                      "start": 1864,
                      "end": 1915
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1846,
                    "end": 1915
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
                      "start": 1932,
                      "end": 1941
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
                                "start": 1969,
                                "end": 1979
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1965,
                              "end": 1981
                            },
                            "start": 1958,
                            "end": 1982
                          }
                        ],
                        "start": 1944,
                        "end": 1992
                      },
                      "expression": false,
                      "start": 1941,
                      "end": 1992
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1925,
                    "end": 1992
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
                      "start": 2011,
                      "end": 2021
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
                            "start": 2025,
                            "end": 2034
                          },
                          "typeArguments": null,
                          "start": 2025,
                          "end": 2034
                        },
                        "start": 2023,
                        "end": 2034
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
                                "start": 2060,
                                "end": 2069
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2056,
                              "end": 2071
                            },
                            "start": 2049,
                            "end": 2072
                          }
                        ],
                        "start": 2035,
                        "end": 2082
                      },
                      "expression": false,
                      "start": 2021,
                      "end": 2082
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2003,
                    "end": 2082
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
                      "start": 2099,
                      "end": 2109
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
                            "start": 2113,
                            "end": 2122
                          },
                          "typeArguments": null,
                          "start": 2113,
                          "end": 2122
                        },
                        "start": 2111,
                        "end": 2122
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
                                "start": 2148,
                                "end": 2157
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2144,
                              "end": 2159
                            },
                            "start": 2137,
                            "end": 2160
                          }
                        ],
                        "start": 2123,
                        "end": 2170
                      },
                      "expression": false,
                      "start": 2109,
                      "end": 2170
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2092,
                    "end": 2170
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
                      "start": 2188,
                      "end": 2199
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
                            "start": 2203,
                            "end": 2213
                          },
                          "typeArguments": null,
                          "start": 2203,
                          "end": 2213
                        },
                        "start": 2201,
                        "end": 2213
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
                                "start": 2239,
                                "end": 2249
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2235,
                              "end": 2251
                            },
                            "start": 2228,
                            "end": 2252
                          }
                        ],
                        "start": 2214,
                        "end": 2262
                      },
                      "expression": false,
                      "start": 2199,
                      "end": 2262
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2180,
                    "end": 2262
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
                      "start": 2279,
                      "end": 2289
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
                            "start": 2293,
                            "end": 2303
                          },
                          "typeArguments": null,
                          "start": 2293,
                          "end": 2303
                        },
                        "start": 2291,
                        "end": 2303
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
                                "start": 2329,
                                "end": 2339
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2325,
                              "end": 2341
                            },
                            "start": 2318,
                            "end": 2342
                          }
                        ],
                        "start": 2304,
                        "end": 2352
                      },
                      "expression": false,
                      "start": 2289,
                      "end": 2352
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2272,
                    "end": 2352
                  }
                ],
                "start": 1286,
                "end": 2358
              },
              "abstract": false,
              "declare": false,
              "start": 1269,
              "end": 2358
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
                  "start": 2377,
                  "end": 2386
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
                        "start": 2397,
                        "end": 2408
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
                                  "start": 2419,
                                  "end": 2428
                                },
                                "typeArguments": null,
                                "start": 2419,
                                "end": 2428
                              },
                              "start": 2417,
                              "end": 2428
                            },
                            "start": 2410,
                            "end": 2428
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2430,
                          "end": 2441
                        },
                        "expression": false,
                        "start": 2409,
                        "end": 2441
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2397,
                      "end": 2441
                    }
                  ],
                  "start": 2387,
                  "end": 2447
                },
                "abstract": false,
                "declare": false,
                "start": 2371,
                "end": 2447
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2364,
              "end": 2447
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
                "start": 2463,
                "end": 2473
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
                      "start": 2484,
                      "end": 2495
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
                                "start": 2506,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2506,
                              "end": 2515
                            },
                            "start": 2504,
                            "end": 2515
                          },
                          "start": 2497,
                          "end": 2515
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2517,
                        "end": 2528
                      },
                      "expression": false,
                      "start": 2496,
                      "end": 2528
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2484,
                    "end": 2528
                  }
                ],
                "start": 2474,
                "end": 2534
              },
              "abstract": false,
              "declare": false,
              "start": 2457,
              "end": 2534
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
                  "start": 2552,
                  "end": 2561
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
                        "start": 2572,
                        "end": 2583
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
                                  "start": 2594,
                                  "end": 2604
                                },
                                "typeArguments": null,
                                "start": 2594,
                                "end": 2604
                              },
                              "start": 2592,
                              "end": 2604
                            },
                            "start": 2585,
                            "end": 2604
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 2606,
                          "end": 2626
                        },
                        "expression": false,
                        "start": 2584,
                        "end": 2626
                      },
                      "kind": "constructor",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": null,
                      "start": 2572,
                      "end": 2626
                    }
                  ],
                  "start": 2562,
                  "end": 2632
                },
                "abstract": false,
                "declare": false,
                "start": 2546,
                "end": 2632
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2539,
              "end": 2632
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
                "start": 2648,
                "end": 2658
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
                      "start": 2669,
                      "end": 2680
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
                                "start": 2691,
                                "end": 2701
                              },
                              "typeArguments": null,
                              "start": 2691,
                              "end": 2701
                            },
                            "start": 2689,
                            "end": 2701
                          },
                          "start": 2682,
                          "end": 2701
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2703,
                        "end": 2714
                      },
                      "expression": false,
                      "start": 2681,
                      "end": 2714
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 2669,
                    "end": 2714
                  }
                ],
                "start": 2659,
                "end": 2720
              },
              "abstract": false,
              "declare": false,
              "start": 2642,
              "end": 2720
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2735,
                "end": 2744
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
                        "start": 2756,
                        "end": 2765
                      },
                      "typeArguments": null,
                      "start": 2756,
                      "end": 2765
                    },
                    "start": 2754,
                    "end": 2765
                  },
                  "start": 2745,
                  "end": 2765
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2767,
                "end": 2774
              },
              "expression": false,
              "start": 2726,
              "end": 2774
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
                  "start": 2796,
                  "end": 2805
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
                          "start": 2817,
                          "end": 2826
                        },
                        "typeArguments": null,
                        "start": 2817,
                        "end": 2826
                      },
                      "start": 2815,
                      "end": 2826
                    },
                    "start": 2806,
                    "end": 2826
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2828,
                  "end": 2835
                },
                "expression": false,
                "start": 2787,
                "end": 2835
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2780,
              "end": 2835
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2850,
                "end": 2859
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
                        "start": 2871,
                        "end": 2881
                      },
                      "typeArguments": null,
                      "start": 2871,
                      "end": 2881
                    },
                    "start": 2869,
                    "end": 2881
                  },
                  "start": 2860,
                  "end": 2881
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2883,
                "end": 2890
              },
              "expression": false,
              "start": 2841,
              "end": 2890
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
                  "start": 2912,
                  "end": 2921
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
                          "start": 2933,
                          "end": 2943
                        },
                        "typeArguments": null,
                        "start": 2933,
                        "end": 2943
                      },
                      "start": 2931,
                      "end": 2943
                    },
                    "start": 2922,
                    "end": 2943
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2945,
                  "end": 2961
                },
                "expression": false,
                "start": 2903,
                "end": 2961
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 2896,
              "end": 2961
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 2977,
                "end": 2986
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
                        "start": 3010,
                        "end": 3019
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3006,
                      "end": 3021
                    },
                    "start": 2999,
                    "end": 3022
                  }
                ],
                "start": 2989,
                "end": 3028
              },
              "expression": false,
              "start": 2968,
              "end": 3028
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
                  "start": 3050,
                  "end": 3059
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
                          "start": 3083,
                          "end": 3092
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3079,
                        "end": 3094
                      },
                      "start": 3072,
                      "end": 3095
                    }
                  ],
                  "start": 3062,
                  "end": 3101
                },
                "expression": false,
                "start": 3041,
                "end": 3101
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3034,
              "end": 3101
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3116,
                "end": 3125
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
                        "start": 3149,
                        "end": 3159
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3145,
                      "end": 3161
                    },
                    "start": 3138,
                    "end": 3162
                  }
                ],
                "start": 3128,
                "end": 3168
              },
              "expression": false,
              "start": 3107,
              "end": 3168
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
                  "start": 3190,
                  "end": 3199
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
                          "start": 3223,
                          "end": 3233
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3219,
                        "end": 3235
                      },
                      "start": 3212,
                      "end": 3236
                    }
                  ],
                  "start": 3202,
                  "end": 3252
                },
                "expression": false,
                "start": 3181,
                "end": 3252
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3174,
              "end": 3252
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f9_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3268,
                "end": 3278
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
                    "start": 3282,
                    "end": 3291
                  },
                  "typeArguments": null,
                  "start": 3282,
                  "end": 3291
                },
                "start": 3280,
                "end": 3291
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
                        "start": 3313,
                        "end": 3322
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3309,
                      "end": 3324
                    },
                    "start": 3302,
                    "end": 3325
                  }
                ],
                "start": 3292,
                "end": 3331
              },
              "expression": false,
              "start": 3259,
              "end": 3331
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
                  "start": 3353,
                  "end": 3363
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
                      "start": 3367,
                      "end": 3376
                    },
                    "typeArguments": null,
                    "start": 3367,
                    "end": 3376
                  },
                  "start": 3365,
                  "end": 3376
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
                          "start": 3398,
                          "end": 3407
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3394,
                        "end": 3409
                      },
                      "start": 3387,
                      "end": 3410
                    }
                  ],
                  "start": 3377,
                  "end": 3416
                },
                "expression": false,
                "start": 3344,
                "end": 3416
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3337,
              "end": 3416
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f11_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3431,
                "end": 3442
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
                    "start": 3446,
                    "end": 3456
                  },
                  "typeArguments": null,
                  "start": 3446,
                  "end": 3456
                },
                "start": 3444,
                "end": 3456
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
                        "start": 3478,
                        "end": 3488
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3474,
                      "end": 3490
                    },
                    "start": 3467,
                    "end": 3491
                  }
                ],
                "start": 3457,
                "end": 3497
              },
              "expression": false,
              "start": 3422,
              "end": 3497
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
                  "start": 3519,
                  "end": 3529
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
                      "start": 3533,
                      "end": 3543
                    },
                    "typeArguments": null,
                    "start": 3533,
                    "end": 3543
                  },
                  "start": 3531,
                  "end": 3543
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
                          "start": 3574,
                          "end": 3584
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3570,
                        "end": 3586
                      },
                      "start": 3563,
                      "end": 3587
                    }
                  ],
                  "start": 3544,
                  "end": 3601
                },
                "expression": false,
                "start": 3510,
                "end": 3601
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 3503,
              "end": 3601
            }
          ],
          "start": 20,
          "end": 3603
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 3603
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 3603
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3615,
        "end": 3617
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
                "name": "m2_C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3637,
                "end": 3649
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
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3668,
                      "end": 3669
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
                        "start": 3672,
                        "end": 3683
                      },
                      "expression": false,
                      "start": 3669,
                      "end": 3683
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3660,
                    "end": 3683
                  }
                ],
                "start": 3650,
                "end": 3689
              },
              "abstract": false,
              "declare": false,
              "start": 3631,
              "end": 3689
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3624,
            "end": 3689
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3714
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 3715,
              "end": 3722
            },
            "abstract": false,
            "declare": false,
            "start": 3695,
            "end": 3722
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3741,
                "end": 3753
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
                      "start": 3764,
                      "end": 3775
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
                          "name": "m2_c3_c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3787,
                                "end": 3799
                              },
                              "typeArguments": null,
                              "start": 3787,
                              "end": 3799
                            },
                            "start": 3785,
                            "end": 3799
                          },
                          "start": 3777,
                          "end": 3799
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3776,
                      "end": 3801
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3764,
                    "end": 3801
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
                      "start": 3810,
                      "end": 3821
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
                          "name": "m2_c3_c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3833,
                                "end": 3846
                              },
                              "typeArguments": null,
                              "start": 3833,
                              "end": 3846
                            },
                            "start": 3831,
                            "end": 3846
                          },
                          "start": 3823,
                          "end": 3846
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 3822,
                      "end": 3848
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3810,
                    "end": 3848
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
                      "start": 3857,
                      "end": 3868
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
                          "name": "m2_c3_c1_2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 3882,
                              "end": 3885
                            },
                            "start": 3880,
                            "end": 3885
                          },
                          "start": 3870,
                          "end": 3885
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3887,
                        "end": 3898
                      },
                      "expression": false,
                      "start": 3869,
                      "end": 3898
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3857,
                    "end": 3898
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
                      "start": 3916,
                      "end": 3926
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
                          "name": "m2_c3_f1_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3941,
                                "end": 3953
                              },
                              "typeArguments": null,
                              "start": 3941,
                              "end": 3953
                            },
                            "start": 3939,
                            "end": 3953
                          },
                          "start": 3927,
                          "end": 3953
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3955,
                        "end": 3966
                      },
                      "expression": false,
                      "start": 3926,
                      "end": 3966
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 3908,
                    "end": 3966
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
                      "start": 3983,
                      "end": 3992
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
                          "name": "m2_c3_f2_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4007,
                                "end": 4019
                              },
                              "typeArguments": null,
                              "start": 4007,
                              "end": 4019
                            },
                            "start": 4005,
                            "end": 4019
                          },
                          "start": 3993,
                          "end": 4019
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4021,
                        "end": 4032
                      },
                      "expression": false,
                      "start": 3992,
                      "end": 4032
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 3976,
                    "end": 4032
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
                      "start": 4050,
                      "end": 4060
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
                          "name": "m2_c3_f3_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4075,
                                "end": 4088
                              },
                              "typeArguments": null,
                              "start": 4075,
                              "end": 4088
                            },
                            "start": 4073,
                            "end": 4088
                          },
                          "start": 4061,
                          "end": 4088
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4090,
                        "end": 4101
                      },
                      "expression": false,
                      "start": 4060,
                      "end": 4101
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4042,
                    "end": 4101
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
                      "start": 4118,
                      "end": 4127
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
                          "name": "m2_c3_f4_arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4142,
                                "end": 4155
                              },
                              "typeArguments": null,
                              "start": 4142,
                              "end": 4155
                            },
                            "start": 4140,
                            "end": 4155
                          },
                          "start": 4128,
                          "end": 4155
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4157,
                        "end": 4168
                      },
                      "expression": false,
                      "start": 4127,
                      "end": 4168
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4111,
                    "end": 4168
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
                      "start": 4186,
                      "end": 4196
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4224,
                                "end": 4236
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4220,
                              "end": 4238
                            },
                            "start": 4213,
                            "end": 4239
                          }
                        ],
                        "start": 4199,
                        "end": 4249
                      },
                      "expression": false,
                      "start": 4196,
                      "end": 4249
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4178,
                    "end": 4249
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
                      "start": 4266,
                      "end": 4275
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4303,
                                "end": 4315
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4299,
                              "end": 4317
                            },
                            "start": 4292,
                            "end": 4318
                          }
                        ],
                        "start": 4278,
                        "end": 4328
                      },
                      "expression": false,
                      "start": 4275,
                      "end": 4328
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4259,
                    "end": 4328
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
                      "start": 4346,
                      "end": 4356
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4384,
                                "end": 4397
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4380,
                              "end": 4399
                            },
                            "start": 4373,
                            "end": 4400
                          }
                        ],
                        "start": 4359,
                        "end": 4410
                      },
                      "expression": false,
                      "start": 4356,
                      "end": 4410
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4338,
                    "end": 4410
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
                      "start": 4427,
                      "end": 4436
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4464,
                                "end": 4477
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4460,
                              "end": 4479
                            },
                            "start": 4453,
                            "end": 4480
                          }
                        ],
                        "start": 4439,
                        "end": 4490
                      },
                      "expression": false,
                      "start": 4436,
                      "end": 4490
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4420,
                    "end": 4490
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
                      "start": 4508,
                      "end": 4518
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
                            "name": "m2_C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4522,
                            "end": 4534
                          },
                          "typeArguments": null,
                          "start": 4522,
                          "end": 4534
                        },
                        "start": 4520,
                        "end": 4534
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4560,
                                "end": 4572
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4556,
                              "end": 4574
                            },
                            "start": 4549,
                            "end": 4575
                          }
                        ],
                        "start": 4535,
                        "end": 4585
                      },
                      "expression": false,
                      "start": 4518,
                      "end": 4585
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4500,
                    "end": 4585
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
                      "start": 4602,
                      "end": 4612
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
                            "name": "m2_C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4616,
                            "end": 4628
                          },
                          "typeArguments": null,
                          "start": 4616,
                          "end": 4628
                        },
                        "start": 4614,
                        "end": 4628
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
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4654,
                                "end": 4666
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4650,
                              "end": 4668
                            },
                            "start": 4643,
                            "end": 4669
                          }
                        ],
                        "start": 4629,
                        "end": 4679
                      },
                      "expression": false,
                      "start": 4612,
                      "end": 4679
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4595,
                    "end": 4679
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
                      "start": 4697,
                      "end": 4708
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
                            "name": "m2_C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4712,
                            "end": 4725
                          },
                          "typeArguments": null,
                          "start": 4712,
                          "end": 4725
                        },
                        "start": 4710,
                        "end": 4725
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4751,
                                "end": 4764
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4747,
                              "end": 4766
                            },
                            "start": 4740,
                            "end": 4767
                          }
                        ],
                        "start": 4726,
                        "end": 4777
                      },
                      "expression": false,
                      "start": 4708,
                      "end": 4777
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 4689,
                    "end": 4777
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
                      "start": 4794,
                      "end": 4804
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
                            "name": "m2_C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4808,
                            "end": 4821
                          },
                          "typeArguments": null,
                          "start": 4808,
                          "end": 4821
                        },
                        "start": 4806,
                        "end": 4821
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4847,
                                "end": 4860
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 4843,
                              "end": 4862
                            },
                            "start": 4836,
                            "end": 4863
                          }
                        ],
                        "start": 4822,
                        "end": 4873
                      },
                      "expression": false,
                      "start": 4804,
                      "end": 4873
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 4787,
                    "end": 4873
                  }
                ],
                "start": 3754,
                "end": 4879
              },
              "abstract": false,
              "declare": false,
              "start": 3735,
              "end": 4879
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3728,
            "end": 4879
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4891,
              "end": 4904
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
                    "start": 4915,
                    "end": 4926
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
                        "name": "m2_c4_c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4938,
                              "end": 4950
                            },
                            "typeArguments": null,
                            "start": 4938,
                            "end": 4950
                          },
                          "start": 4936,
                          "end": 4950
                        },
                        "start": 4928,
                        "end": 4950
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4927,
                    "end": 4952
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4915,
                  "end": 4952
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
                    "start": 4961,
                    "end": 4972
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
                        "name": "m2_c4_c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4984,
                              "end": 4997
                            },
                            "typeArguments": null,
                            "start": 4984,
                            "end": 4997
                          },
                          "start": 4982,
                          "end": 4997
                        },
                        "start": 4974,
                        "end": 4997
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false,
                    "start": 4973,
                    "end": 4999
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4961,
                  "end": 4999
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
                    "start": 5008,
                    "end": 5019
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
                        "name": "m2_c4_c1_2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 5033,
                            "end": 5036
                          },
                          "start": 5031,
                          "end": 5036
                        },
                        "start": 5021,
                        "end": 5036
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5038,
                      "end": 5049
                    },
                    "expression": false,
                    "start": 5020,
                    "end": 5049
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5008,
                  "end": 5049
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
                    "start": 5067,
                    "end": 5077
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
                        "name": "m2_c4_f1_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5092,
                              "end": 5104
                            },
                            "typeArguments": null,
                            "start": 5092,
                            "end": 5104
                          },
                          "start": 5090,
                          "end": 5104
                        },
                        "start": 5078,
                        "end": 5104
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5106,
                      "end": 5117
                    },
                    "expression": false,
                    "start": 5077,
                    "end": 5117
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5059,
                  "end": 5117
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
                    "start": 5134,
                    "end": 5143
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
                        "name": "m2_c4_f2_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5158,
                              "end": 5170
                            },
                            "typeArguments": null,
                            "start": 5158,
                            "end": 5170
                          },
                          "start": 5156,
                          "end": 5170
                        },
                        "start": 5144,
                        "end": 5170
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5172,
                      "end": 5183
                    },
                    "expression": false,
                    "start": 5143,
                    "end": 5183
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5127,
                  "end": 5183
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
                    "start": 5201,
                    "end": 5211
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
                        "name": "m2_c4_f3_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5226,
                              "end": 5239
                            },
                            "typeArguments": null,
                            "start": 5226,
                            "end": 5239
                          },
                          "start": 5224,
                          "end": 5239
                        },
                        "start": 5212,
                        "end": 5239
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5241,
                      "end": 5252
                    },
                    "expression": false,
                    "start": 5211,
                    "end": 5252
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5193,
                  "end": 5252
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
                    "start": 5269,
                    "end": 5278
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
                        "name": "m2_c4_f4_arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5293,
                              "end": 5306
                            },
                            "typeArguments": null,
                            "start": 5293,
                            "end": 5306
                          },
                          "start": 5291,
                          "end": 5306
                        },
                        "start": 5279,
                        "end": 5306
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 5308,
                      "end": 5319
                    },
                    "expression": false,
                    "start": 5278,
                    "end": 5319
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5262,
                  "end": 5319
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
                    "start": 5338,
                    "end": 5348
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5376,
                              "end": 5388
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5372,
                            "end": 5390
                          },
                          "start": 5365,
                          "end": 5391
                        }
                      ],
                      "start": 5351,
                      "end": 5401
                    },
                    "expression": false,
                    "start": 5348,
                    "end": 5401
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5330,
                  "end": 5401
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
                    "start": 5418,
                    "end": 5427
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5455,
                              "end": 5467
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5451,
                            "end": 5469
                          },
                          "start": 5444,
                          "end": 5470
                        }
                      ],
                      "start": 5430,
                      "end": 5480
                    },
                    "expression": false,
                    "start": 5427,
                    "end": 5480
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5411,
                  "end": 5480
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
                    "start": 5498,
                    "end": 5508
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5536,
                              "end": 5549
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5532,
                            "end": 5551
                          },
                          "start": 5525,
                          "end": 5552
                        }
                      ],
                      "start": 5511,
                      "end": 5562
                    },
                    "expression": false,
                    "start": 5508,
                    "end": 5562
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5490,
                  "end": 5562
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
                    "start": 5579,
                    "end": 5588
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5616,
                              "end": 5629
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5612,
                            "end": 5631
                          },
                          "start": 5605,
                          "end": 5632
                        }
                      ],
                      "start": 5591,
                      "end": 5642
                    },
                    "expression": false,
                    "start": 5588,
                    "end": 5642
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5572,
                  "end": 5642
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
                    "start": 5661,
                    "end": 5671
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
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5675,
                          "end": 5687
                        },
                        "typeArguments": null,
                        "start": 5675,
                        "end": 5687
                      },
                      "start": 5673,
                      "end": 5687
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5713,
                              "end": 5725
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5709,
                            "end": 5727
                          },
                          "start": 5702,
                          "end": 5728
                        }
                      ],
                      "start": 5688,
                      "end": 5738
                    },
                    "expression": false,
                    "start": 5671,
                    "end": 5738
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5653,
                  "end": 5738
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
                    "start": 5755,
                    "end": 5765
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
                          "name": "m2_C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5769,
                          "end": 5781
                        },
                        "typeArguments": null,
                        "start": 5769,
                        "end": 5781
                      },
                      "start": 5767,
                      "end": 5781
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
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5807,
                              "end": 5819
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5803,
                            "end": 5821
                          },
                          "start": 5796,
                          "end": 5822
                        }
                      ],
                      "start": 5782,
                      "end": 5832
                    },
                    "expression": false,
                    "start": 5765,
                    "end": 5832
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5748,
                  "end": 5832
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
                    "start": 5850,
                    "end": 5861
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
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5865,
                          "end": 5878
                        },
                        "typeArguments": null,
                        "start": 5865,
                        "end": 5878
                      },
                      "start": 5863,
                      "end": 5878
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5904,
                              "end": 5917
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5900,
                            "end": 5919
                          },
                          "start": 5893,
                          "end": 5920
                        }
                      ],
                      "start": 5879,
                      "end": 5930
                    },
                    "expression": false,
                    "start": 5861,
                    "end": 5930
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 5842,
                  "end": 5930
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
                    "start": 5947,
                    "end": 5957
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
                          "name": "m2_C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5961,
                          "end": 5974
                        },
                        "typeArguments": null,
                        "start": 5961,
                        "end": 5974
                      },
                      "start": 5959,
                      "end": 5974
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
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6000,
                              "end": 6013
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 5996,
                            "end": 6015
                          },
                          "start": 5989,
                          "end": 6016
                        }
                      ],
                      "start": 5975,
                      "end": 6026
                    },
                    "expression": false,
                    "start": 5957,
                    "end": 6026
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 5940,
                  "end": 6026
                }
              ],
              "start": 4905,
              "end": 6032
            },
            "abstract": false,
            "declare": false,
            "start": 4885,
            "end": 6032
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C5_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6051,
                "end": 6063
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
                      "start": 6074,
                      "end": 6085
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
                          "name": "m2_c5_c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6096,
                                "end": 6108
                              },
                              "typeArguments": null,
                              "start": 6096,
                              "end": 6108
                            },
                            "start": 6094,
                            "end": 6108
                          },
                          "start": 6087,
                          "end": 6108
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6110,
                        "end": 6121
                      },
                      "expression": false,
                      "start": 6086,
                      "end": 6121
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6074,
                    "end": 6121
                  }
                ],
                "start": 6064,
                "end": 6127
              },
              "abstract": false,
              "declare": false,
              "start": 6045,
              "end": 6127
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6038,
            "end": 6127
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C6_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6143,
              "end": 6156
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
                    "start": 6167,
                    "end": 6178
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
                        "name": "m2_c6_c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6189,
                              "end": 6201
                            },
                            "typeArguments": null,
                            "start": 6189,
                            "end": 6201
                          },
                          "start": 6187,
                          "end": 6201
                        },
                        "start": 6180,
                        "end": 6201
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6203,
                      "end": 6214
                    },
                    "expression": false,
                    "start": 6179,
                    "end": 6214
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6167,
                  "end": 6214
                }
              ],
              "start": 6157,
              "end": 6220
            },
            "abstract": false,
            "declare": false,
            "start": 6137,
            "end": 6220
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_C7_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 6238,
                "end": 6250
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
                      "start": 6261,
                      "end": 6272
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
                          "name": "m2_c7_c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6283,
                                "end": 6296
                              },
                              "typeArguments": null,
                              "start": 6283,
                              "end": 6296
                            },
                            "start": 6281,
                            "end": 6296
                          },
                          "start": 6274,
                          "end": 6296
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6298,
                        "end": 6310
                      },
                      "expression": false,
                      "start": 6273,
                      "end": 6310
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 6261,
                    "end": 6310
                  }
                ],
                "start": 6251,
                "end": 6316
              },
              "abstract": false,
              "declare": false,
              "start": 6232,
              "end": 6316
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6225,
            "end": 6316
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2_C8_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6332,
              "end": 6345
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
                    "start": 6356,
                    "end": 6367
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
                        "name": "m2_c8_c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2_C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6378,
                              "end": 6391
                            },
                            "typeArguments": null,
                            "start": 6378,
                            "end": 6391
                          },
                          "start": 6376,
                          "end": 6391
                        },
                        "start": 6369,
                        "end": 6391
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 6393,
                      "end": 6404
                    },
                    "expression": false,
                    "start": 6368,
                    "end": 6404
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6356,
                  "end": 6404
                }
              ],
              "start": 6346,
              "end": 6410
            },
            "abstract": false,
            "declare": false,
            "start": 6326,
            "end": 6410
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6425,
              "end": 6434
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_f1_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6446,
                      "end": 6458
                    },
                    "typeArguments": null,
                    "start": 6446,
                    "end": 6458
                  },
                  "start": 6444,
                  "end": 6458
                },
                "start": 6435,
                "end": 6458
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6460,
              "end": 6467
            },
            "expression": false,
            "start": 6416,
            "end": 6467
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
                "start": 6489,
                "end": 6498
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_f2_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6510,
                        "end": 6522
                      },
                      "typeArguments": null,
                      "start": 6510,
                      "end": 6522
                    },
                    "start": 6508,
                    "end": 6522
                  },
                  "start": 6499,
                  "end": 6522
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6524,
                "end": 6531
              },
              "expression": false,
              "start": 6480,
              "end": 6531
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6473,
            "end": 6531
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6546,
              "end": 6555
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m2_f3_arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6567,
                      "end": 6580
                    },
                    "typeArguments": null,
                    "start": 6567,
                    "end": 6580
                  },
                  "start": 6565,
                  "end": 6580
                },
                "start": 6556,
                "end": 6580
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6582,
              "end": 6589
            },
            "expression": false,
            "start": 6537,
            "end": 6589
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
                "start": 6611,
                "end": 6620
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m2_f4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6632,
                        "end": 6645
                      },
                      "typeArguments": null,
                      "start": 6632,
                      "end": 6645
                    },
                    "start": 6630,
                    "end": 6645
                  },
                  "start": 6621,
                  "end": 6645
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 6647,
                "end": 6654
              },
              "expression": false,
              "start": 6602,
              "end": 6654
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6595,
            "end": 6654
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f5_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6670,
              "end": 6679
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
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6703,
                      "end": 6715
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6699,
                    "end": 6717
                  },
                  "start": 6692,
                  "end": 6718
                }
              ],
              "start": 6682,
              "end": 6724
            },
            "expression": false,
            "start": 6661,
            "end": 6724
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
                "start": 6746,
                "end": 6755
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
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6779,
                        "end": 6791
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6775,
                      "end": 6793
                    },
                    "start": 6768,
                    "end": 6794
                  }
                ],
                "start": 6758,
                "end": 6800
              },
              "expression": false,
              "start": 6737,
              "end": 6800
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6730,
            "end": 6800
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f7_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 6815,
              "end": 6824
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
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6848,
                      "end": 6861
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 6844,
                    "end": 6863
                  },
                  "start": 6837,
                  "end": 6864
                }
              ],
              "start": 6827,
              "end": 6870
            },
            "expression": false,
            "start": 6806,
            "end": 6870
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
                "start": 6892,
                "end": 6901
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
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6925,
                        "end": 6938
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 6921,
                      "end": 6940
                    },
                    "start": 6914,
                    "end": 6941
                  }
                ],
                "start": 6904,
                "end": 6947
              },
              "expression": false,
              "start": 6883,
              "end": 6947
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 6876,
            "end": 6947
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f9_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 6963,
              "end": 6973
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
                  "name": "m2_C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6977,
                  "end": 6989
                },
                "typeArguments": null,
                "start": 6977,
                "end": 6989
              },
              "start": 6975,
              "end": 6989
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
                      "name": "m2_C1_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7011,
                      "end": 7023
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7007,
                    "end": 7025
                  },
                  "start": 7000,
                  "end": 7026
                }
              ],
              "start": 6990,
              "end": 7032
            },
            "expression": false,
            "start": 6954,
            "end": 7032
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
                "start": 7054,
                "end": 7064
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
                    "name": "m2_C1_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7068,
                    "end": 7080
                  },
                  "typeArguments": null,
                  "start": 7068,
                  "end": 7080
                },
                "start": 7066,
                "end": 7080
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
                        "name": "m2_C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7102,
                        "end": 7114
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7098,
                      "end": 7116
                    },
                    "start": 7091,
                    "end": 7117
                  }
                ],
                "start": 7081,
                "end": 7123
              },
              "expression": false,
              "start": 7045,
              "end": 7123
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7038,
            "end": 7123
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f11_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 7138,
              "end": 7149
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
                  "name": "m2_C2_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7153,
                  "end": 7166
                },
                "typeArguments": null,
                "start": 7153,
                "end": 7166
              },
              "start": 7151,
              "end": 7166
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
                      "name": "m2_C2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7188,
                      "end": 7201
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 7184,
                    "end": 7203
                  },
                  "start": 7177,
                  "end": 7204
                }
              ],
              "start": 7167,
              "end": 7210
            },
            "expression": false,
            "start": 7129,
            "end": 7210
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
                "start": 7232,
                "end": 7242
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
                    "name": "m2_C2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7246,
                    "end": 7259
                  },
                  "typeArguments": null,
                  "start": 7246,
                  "end": 7259
                },
                "start": 7244,
                "end": 7259
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
                        "name": "m2_C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7281,
                        "end": 7294
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 7277,
                      "end": 7296
                    },
                    "start": 7270,
                    "end": 7297
                  }
                ],
                "start": 7260,
                "end": 7303
              },
              "expression": false,
              "start": 7223,
              "end": 7303
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 7216,
            "end": 7303
          }
        ],
        "start": 3618,
        "end": 7305
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3605,
      "end": 7305
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 7313,
        "end": 7323
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
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 7338,
              "end": 7339
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
                "start": 7342,
                "end": 7349
              },
              "expression": false,
              "start": 7339,
              "end": 7349
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 7330,
            "end": 7349
          }
        ],
        "start": 7324,
        "end": 7351
      },
      "abstract": false,
      "declare": false,
      "start": 7307,
      "end": 7351
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C6_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 7366,
          "end": 7375
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 7376,
          "end": 7379
        },
        "abstract": false,
        "declare": false,
        "start": 7360,
        "end": 7379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7353,
      "end": 7379
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
          "start": 7394,
          "end": 7403
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
                "start": 7410,
                "end": 7421
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
                    "name": "c7_c1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7430,
                          "end": 7440
                        },
                        "typeArguments": null,
                        "start": 7430,
                        "end": 7440
                      },
                      "start": 7428,
                      "end": 7440
                    },
                    "start": 7423,
                    "end": 7440
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7422,
                "end": 7442
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7410,
              "end": 7442
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
                "start": 7456,
                "end": 7467
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
                          "start": 7476,
                          "end": 7485
                        },
                        "typeArguments": null,
                        "start": 7476,
                        "end": 7485
                      },
                      "start": 7474,
                      "end": 7485
                    },
                    "start": 7469,
                    "end": 7485
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 7468,
                "end": 7487
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7456,
              "end": 7487
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
                "start": 7492,
                "end": 7503
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
                        "start": 7514,
                        "end": 7517
                      },
                      "start": 7512,
                      "end": 7517
                    },
                    "start": 7505,
                    "end": 7517
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7519,
                  "end": 7526
                },
                "expression": false,
                "start": 7504,
                "end": 7526
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7492,
              "end": 7526
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
                "start": 7539,
                "end": 7549
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
                          "start": 7561,
                          "end": 7570
                        },
                        "typeArguments": null,
                        "start": 7561,
                        "end": 7570
                      },
                      "start": 7559,
                      "end": 7570
                    },
                    "start": 7550,
                    "end": 7570
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7572,
                  "end": 7579
                },
                "expression": false,
                "start": 7549,
                "end": 7579
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7531,
              "end": 7579
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
                "start": 7592,
                "end": 7601
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
                          "start": 7613,
                          "end": 7622
                        },
                        "typeArguments": null,
                        "start": 7613,
                        "end": 7622
                      },
                      "start": 7611,
                      "end": 7622
                    },
                    "start": 7602,
                    "end": 7622
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7624,
                  "end": 7631
                },
                "expression": false,
                "start": 7601,
                "end": 7631
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7585,
              "end": 7631
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
                "start": 7645,
                "end": 7655
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
                    "name": "c7_f3_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7667,
                          "end": 7677
                        },
                        "typeArguments": null,
                        "start": 7667,
                        "end": 7677
                      },
                      "start": 7665,
                      "end": 7677
                    },
                    "start": 7656,
                    "end": 7677
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7679,
                  "end": 7686
                },
                "expression": false,
                "start": 7655,
                "end": 7686
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7637,
              "end": 7686
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
                "start": 7699,
                "end": 7708
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
                    "name": "c7_f4_arg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7720,
                          "end": 7730
                        },
                        "typeArguments": null,
                        "start": 7720,
                        "end": 7730
                      },
                      "start": 7718,
                      "end": 7730
                    },
                    "start": 7709,
                    "end": 7730
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 7732,
                  "end": 7747
                },
                "expression": false,
                "start": 7708,
                "end": 7747
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7692,
              "end": 7747
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
                "start": 7761,
                "end": 7771
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
                          "start": 7795,
                          "end": 7804
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7791,
                        "end": 7806
                      },
                      "start": 7784,
                      "end": 7807
                    }
                  ],
                  "start": 7774,
                  "end": 7813
                },
                "expression": false,
                "start": 7771,
                "end": 7813
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7753,
              "end": 7813
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
                "start": 7826,
                "end": 7835
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
                          "start": 7859,
                          "end": 7868
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7855,
                        "end": 7870
                      },
                      "start": 7848,
                      "end": 7871
                    }
                  ],
                  "start": 7838,
                  "end": 7877
                },
                "expression": false,
                "start": 7835,
                "end": 7877
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7819,
              "end": 7877
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
                "start": 7891,
                "end": 7901
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7925,
                          "end": 7935
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7921,
                        "end": 7937
                      },
                      "start": 7914,
                      "end": 7938
                    }
                  ],
                  "start": 7904,
                  "end": 7944
                },
                "expression": false,
                "start": 7901,
                "end": 7944
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 7883,
              "end": 7944
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
                "start": 7957,
                "end": 7966
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7990,
                          "end": 8000
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 7986,
                        "end": 8002
                      },
                      "start": 7979,
                      "end": 8003
                    }
                  ],
                  "start": 7969,
                  "end": 8017
                },
                "expression": false,
                "start": 7966,
                "end": 8017
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 7950,
              "end": 8017
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
                "start": 8031,
                "end": 8041
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
                      "start": 8045,
                      "end": 8054
                    },
                    "typeArguments": null,
                    "start": 8045,
                    "end": 8054
                  },
                  "start": 8043,
                  "end": 8054
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
                          "start": 8076,
                          "end": 8085
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8072,
                        "end": 8087
                      },
                      "start": 8065,
                      "end": 8088
                    }
                  ],
                  "start": 8055,
                  "end": 8094
                },
                "expression": false,
                "start": 8041,
                "end": 8094
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8023,
              "end": 8094
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
                "start": 8107,
                "end": 8117
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
                      "start": 8121,
                      "end": 8130
                    },
                    "typeArguments": null,
                    "start": 8121,
                    "end": 8130
                  },
                  "start": 8119,
                  "end": 8130
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
                          "start": 8152,
                          "end": 8161
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8148,
                        "end": 8163
                      },
                      "start": 8141,
                      "end": 8164
                    }
                  ],
                  "start": 8131,
                  "end": 8170
                },
                "expression": false,
                "start": 8117,
                "end": 8170
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8100,
              "end": 8170
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
                "start": 8184,
                "end": 8195
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
                      "name": "C5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8199,
                      "end": 8209
                    },
                    "typeArguments": null,
                    "start": 8199,
                    "end": 8209
                  },
                  "start": 8197,
                  "end": 8209
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8231,
                          "end": 8241
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8227,
                        "end": 8243
                      },
                      "start": 8220,
                      "end": 8244
                    }
                  ],
                  "start": 8210,
                  "end": 8250
                },
                "expression": false,
                "start": 8195,
                "end": 8250
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 8176,
              "end": 8250
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
                "start": 8263,
                "end": 8273
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
                      "name": "C5_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8277,
                      "end": 8287
                    },
                    "typeArguments": null,
                    "start": 8277,
                    "end": 8287
                  },
                  "start": 8275,
                  "end": 8287
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
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8317,
                          "end": 8327
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 8313,
                        "end": 8329
                      },
                      "start": 8306,
                      "end": 8330
                    }
                  ],
                  "start": 8288,
                  "end": 8344
                },
                "expression": false,
                "start": 8273,
                "end": 8344
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 8256,
              "end": 8344
            }
          ],
          "start": 7404,
          "end": 8346
        },
        "abstract": false,
        "declare": false,
        "start": 7388,
        "end": 8346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7381,
      "end": 8346
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
        "start": 8354,
        "end": 8364
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
              "start": 8371,
              "end": 8382
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
                  "name": "c8_c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8391,
                        "end": 8401
                      },
                      "typeArguments": null,
                      "start": 8391,
                      "end": 8401
                    },
                    "start": 8389,
                    "end": 8401
                  },
                  "start": 8384,
                  "end": 8401
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8383,
              "end": 8403
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8371,
            "end": 8403
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
              "start": 8408,
              "end": 8419
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
                  "name": "c8_c2",
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
                        "start": 8428,
                        "end": 8437
                      },
                      "typeArguments": null,
                      "start": 8428,
                      "end": 8437
                    },
                    "start": 8426,
                    "end": 8437
                  },
                  "start": 8421,
                  "end": 8437
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 8420,
              "end": 8439
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8408,
            "end": 8439
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
              "start": 8444,
              "end": 8455
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
                  "name": "c8_c1_2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 8466,
                      "end": 8469
                    },
                    "start": 8464,
                    "end": 8469
                  },
                  "start": 8457,
                  "end": 8469
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8471,
                "end": 8478
              },
              "expression": false,
              "start": 8456,
              "end": 8478
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 8444,
            "end": 8478
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
              "start": 8500,
              "end": 8510
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
                  "name": "c8_f1_arg",
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
                        "start": 8522,
                        "end": 8531
                      },
                      "typeArguments": null,
                      "start": 8522,
                      "end": 8531
                    },
                    "start": 8520,
                    "end": 8531
                  },
                  "start": 8511,
                  "end": 8531
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8533,
                "end": 8540
              },
              "expression": false,
              "start": 8510,
              "end": 8540
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8492,
            "end": 8540
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
              "start": 8553,
              "end": 8562
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
                  "name": "c8_f2_arg",
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
                        "start": 8574,
                        "end": 8583
                      },
                      "typeArguments": null,
                      "start": 8574,
                      "end": 8583
                    },
                    "start": 8572,
                    "end": 8583
                  },
                  "start": 8563,
                  "end": 8583
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8585,
                "end": 8592
              },
              "expression": false,
              "start": 8562,
              "end": 8592
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8546,
            "end": 8592
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
              "start": 8606,
              "end": 8616
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
                  "name": "c8_f3_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8628,
                        "end": 8638
                      },
                      "typeArguments": null,
                      "start": 8628,
                      "end": 8638
                    },
                    "start": 8626,
                    "end": 8638
                  },
                  "start": 8617,
                  "end": 8638
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8640,
                "end": 8647
              },
              "expression": false,
              "start": 8616,
              "end": 8647
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8598,
            "end": 8647
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
              "start": 8660,
              "end": 8669
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
                  "name": "c8_f4_arg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8681,
                        "end": 8691
                      },
                      "typeArguments": null,
                      "start": 8681,
                      "end": 8691
                    },
                    "start": 8679,
                    "end": 8691
                  },
                  "start": 8670,
                  "end": 8691
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 8693,
                "end": 8700
              },
              "expression": false,
              "start": 8669,
              "end": 8700
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8653,
            "end": 8700
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
              "start": 8714,
              "end": 8724
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
                        "start": 8748,
                        "end": 8757
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8744,
                      "end": 8759
                    },
                    "start": 8737,
                    "end": 8760
                  }
                ],
                "start": 8727,
                "end": 8766
              },
              "expression": false,
              "start": 8724,
              "end": 8766
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8706,
            "end": 8766
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
              "start": 8779,
              "end": 8788
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
                        "start": 8812,
                        "end": 8821
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8808,
                      "end": 8823
                    },
                    "start": 8801,
                    "end": 8824
                  }
                ],
                "start": 8791,
                "end": 8830
              },
              "expression": false,
              "start": 8788,
              "end": 8830
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8772,
            "end": 8830
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
              "start": 8844,
              "end": 8854
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8878,
                        "end": 8888
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8874,
                      "end": 8890
                    },
                    "start": 8867,
                    "end": 8891
                  }
                ],
                "start": 8857,
                "end": 8897
              },
              "expression": false,
              "start": 8854,
              "end": 8897
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8836,
            "end": 8897
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
              "start": 8910,
              "end": 8919
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8943,
                        "end": 8953
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 8939,
                      "end": 8955
                    },
                    "start": 8932,
                    "end": 8956
                  }
                ],
                "start": 8922,
                "end": 8962
              },
              "expression": false,
              "start": 8919,
              "end": 8962
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 8903,
            "end": 8962
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
              "start": 8976,
              "end": 8986
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
                    "start": 8990,
                    "end": 8999
                  },
                  "typeArguments": null,
                  "start": 8990,
                  "end": 8999
                },
                "start": 8988,
                "end": 8999
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
                        "start": 9021,
                        "end": 9030
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9017,
                      "end": 9032
                    },
                    "start": 9010,
                    "end": 9033
                  }
                ],
                "start": 9000,
                "end": 9039
              },
              "expression": false,
              "start": 8986,
              "end": 9039
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 8968,
            "end": 9039
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
              "start": 9052,
              "end": 9062
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
                    "start": 9066,
                    "end": 9075
                  },
                  "typeArguments": null,
                  "start": 9066,
                  "end": 9075
                },
                "start": 9064,
                "end": 9075
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
                        "start": 9097,
                        "end": 9106
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9093,
                      "end": 9108
                    },
                    "start": 9086,
                    "end": 9109
                  }
                ],
                "start": 9076,
                "end": 9115
              },
              "expression": false,
              "start": 9062,
              "end": 9115
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9045,
            "end": 9115
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
              "start": 9129,
              "end": 9140
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
                    "name": "C5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9144,
                    "end": 9154
                  },
                  "typeArguments": null,
                  "start": 9144,
                  "end": 9154
                },
                "start": 9142,
                "end": 9154
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9176,
                        "end": 9186
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9172,
                      "end": 9188
                    },
                    "start": 9165,
                    "end": 9189
                  }
                ],
                "start": 9155,
                "end": 9195
              },
              "expression": false,
              "start": 9140,
              "end": 9195
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 9121,
            "end": 9195
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
              "start": 9208,
              "end": 9218
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
                    "name": "C5_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9222,
                    "end": 9232
                  },
                  "typeArguments": null,
                  "start": 9222,
                  "end": 9232
                },
                "start": 9220,
                "end": 9232
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
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9254,
                        "end": 9264
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 9250,
                      "end": 9266
                    },
                    "start": 9243,
                    "end": 9267
                  }
                ],
                "start": 9233,
                "end": 9273
              },
              "expression": false,
              "start": 9218,
              "end": 9273
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 9201,
            "end": 9273
          }
        ],
        "start": 8365,
        "end": 9275
      },
      "abstract": false,
      "declare": false,
      "start": 8348,
      "end": 9275
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C9_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9291,
          "end": 9300
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
                "start": 9307,
                "end": 9318
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
                          "start": 9326,
                          "end": 9335
                        },
                        "typeArguments": null,
                        "start": 9326,
                        "end": 9335
                      },
                      "start": 9324,
                      "end": 9335
                    },
                    "start": 9320,
                    "end": 9335
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9337,
                  "end": 9344
                },
                "expression": false,
                "start": 9319,
                "end": 9344
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9307,
              "end": 9344
            }
          ],
          "start": 9301,
          "end": 9346
        },
        "abstract": false,
        "declare": false,
        "start": 9285,
        "end": 9346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9278,
      "end": 9346
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C10_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9358,
        "end": 9369
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
              "start": 9376,
              "end": 9387
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
                  "name": "c10_c",
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
                        "start": 9396,
                        "end": 9405
                      },
                      "typeArguments": null,
                      "start": 9396,
                      "end": 9405
                    },
                    "start": 9394,
                    "end": 9405
                  },
                  "start": 9389,
                  "end": 9405
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9407,
                "end": 9414
              },
              "expression": false,
              "start": 9388,
              "end": 9414
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9376,
            "end": 9414
          }
        ],
        "start": 9370,
        "end": 9416
      },
      "abstract": false,
      "declare": false,
      "start": 9352,
      "end": 9416
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C11_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 9430,
          "end": 9440
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
                "start": 9447,
                "end": 9458
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
                    "name": "c11_c",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C5_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9467,
                          "end": 9477
                        },
                        "typeArguments": null,
                        "start": 9467,
                        "end": 9477
                      },
                      "start": 9465,
                      "end": 9477
                    },
                    "start": 9460,
                    "end": 9477
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 9479,
                  "end": 9495
                },
                "expression": false,
                "start": 9459,
                "end": 9495
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9447,
              "end": 9495
            }
          ],
          "start": 9441,
          "end": 9497
        },
        "abstract": false,
        "declare": false,
        "start": 9424,
        "end": 9497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9417,
      "end": 9497
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C12_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9509,
        "end": 9520
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
              "start": 9527,
              "end": 9538
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
                  "name": "c12_c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9547,
                        "end": 9557
                      },
                      "typeArguments": null,
                      "start": 9547,
                      "end": 9557
                    },
                    "start": 9545,
                    "end": 9557
                  },
                  "start": 9540,
                  "end": 9557
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 9559,
                "end": 9566
              },
              "expression": false,
              "start": 9539,
              "end": 9566
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 9527,
            "end": 9566
          }
        ],
        "start": 9521,
        "end": 9568
      },
      "abstract": false,
      "declare": false,
      "start": 9503,
      "end": 9568
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9579,
        "end": 9589
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f1_arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 9598,
                "end": 9608
              },
              "typeArguments": null,
              "start": 9598,
              "end": 9608
            },
            "start": 9596,
            "end": 9608
          },
          "start": 9590,
          "end": 9608
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9610,
        "end": 9613
      },
      "expression": false,
      "start": 9570,
      "end": 9613
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
          "start": 9631,
          "end": 9640
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "f2_arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9649,
                  "end": 9659
                },
                "typeArguments": null,
                "start": 9649,
                "end": 9659
              },
              "start": 9647,
              "end": 9659
            },
            "start": 9641,
            "end": 9659
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9661,
          "end": 9673
        },
        "expression": false,
        "start": 9622,
        "end": 9673
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9615,
      "end": 9673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9684,
        "end": 9694
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f3_arg",
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
                "start": 9703,
                "end": 9712
              },
              "typeArguments": null,
              "start": 9703,
              "end": 9712
            },
            "start": 9701,
            "end": 9712
          },
          "start": 9695,
          "end": 9712
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 9714,
        "end": 9717
      },
      "expression": false,
      "start": 9675,
      "end": 9717
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
          "start": 9735,
          "end": 9744
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
                  "start": 9753,
                  "end": 9762
                },
                "typeArguments": null,
                "start": 9753,
                "end": 9762
              },
              "start": 9751,
              "end": 9762
            },
            "start": 9745,
            "end": 9762
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 9764,
          "end": 9767
        },
        "expression": false,
        "start": 9726,
        "end": 9767
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9719,
      "end": 9767
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9778,
        "end": 9788
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
                "start": 9808,
                "end": 9817
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9804,
              "end": 9819
            },
            "start": 9797,
            "end": 9820
          }
        ],
        "start": 9791,
        "end": 9822
      },
      "expression": false,
      "start": 9769,
      "end": 9822
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
          "start": 9840,
          "end": 9849
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
                  "start": 9869,
                  "end": 9878
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9865,
                "end": 9880
              },
              "start": 9858,
              "end": 9881
            }
          ],
          "start": 9852,
          "end": 9883
        },
        "expression": false,
        "start": 9831,
        "end": 9883
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9824,
      "end": 9883
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 9894,
        "end": 9904
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
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 9924,
                "end": 9934
              },
              "typeArguments": null,
              "arguments": [],
              "start": 9920,
              "end": 9936
            },
            "start": 9913,
            "end": 9937
          }
        ],
        "start": 9907,
        "end": 9939
      },
      "expression": false,
      "start": 9885,
      "end": 9939
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
          "start": 9957,
          "end": 9966
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
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9986,
                  "end": 9996
                },
                "typeArguments": null,
                "arguments": [],
                "start": 9982,
                "end": 9998
              },
              "start": 9975,
              "end": 9999
            }
          ],
          "start": 9969,
          "end": 10009
        },
        "expression": false,
        "start": 9948,
        "end": 10009
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9941,
      "end": 10009
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10020,
        "end": 10030
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
            "start": 10034,
            "end": 10043
          },
          "typeArguments": null,
          "start": 10034,
          "end": 10043
        },
        "start": 10032,
        "end": 10043
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
                "start": 10061,
                "end": 10070
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10057,
              "end": 10072
            },
            "start": 10050,
            "end": 10073
          }
        ],
        "start": 10044,
        "end": 10075
      },
      "expression": false,
      "start": 10011,
      "end": 10075
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
          "start": 10093,
          "end": 10103
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
              "start": 10107,
              "end": 10116
            },
            "typeArguments": null,
            "start": 10107,
            "end": 10116
          },
          "start": 10105,
          "end": 10116
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
                  "start": 10134,
                  "end": 10143
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10130,
                "end": 10145
              },
              "start": 10123,
              "end": 10146
            }
          ],
          "start": 10117,
          "end": 10148
        },
        "expression": false,
        "start": 10084,
        "end": 10148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10077,
      "end": 10148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 10159,
        "end": 10170
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
            "name": "C5_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 10174,
            "end": 10184
          },
          "typeArguments": null,
          "start": 10174,
          "end": 10184
        },
        "start": 10172,
        "end": 10184
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
                "name": "C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 10202,
                "end": 10212
              },
              "typeArguments": null,
              "arguments": [],
              "start": 10198,
              "end": 10214
            },
            "start": 10191,
            "end": 10215
          }
        ],
        "start": 10185,
        "end": 10217
      },
      "expression": false,
      "start": 10150,
      "end": 10217
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
          "start": 10235,
          "end": 10245
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
              "name": "C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 10249,
              "end": 10259
            },
            "typeArguments": null,
            "start": 10249,
            "end": 10259
          },
          "start": 10247,
          "end": 10259
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
                  "name": "C5_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10286,
                  "end": 10296
                },
                "typeArguments": null,
                "arguments": [],
                "start": 10282,
                "end": 10298
              },
              "start": 10275,
              "end": 10299
            }
          ],
          "start": 10260,
          "end": 10309
        },
        "expression": false,
        "start": 10226,
        "end": 10309
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 10219,
      "end": 10309
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 10309
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
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 39,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 59,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 95,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 101,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 138,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 158,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1",
    "start": 171,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 181,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 201,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c2",
    "start": 214,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 224,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 253,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "m1_c3_c1_2",
    "start": 266,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 304,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 312,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f1_arg",
    "start": 323,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 337,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 369,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 376,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f2_arg",
    "start": 386,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 400,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 432,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 440,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f3_arg",
    "start": 451,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 498,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 505,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "m1_c3_f4_arg",
    "start": 515,
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
    "value": ")",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 571,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 579,
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
    "value": "{",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 606,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 627,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 638,
    "end": 639
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 649,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 656,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 668,
    "end": 669
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 682,
    "end": 688
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 689,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 693,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 703,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 725,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 733,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 746,
    "end": 747
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 760,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 771,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 804,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 811,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 837,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 844,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 848,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 891,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 899,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
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
    "value": "C1_public",
    "start": 913,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 937,
    "end": 943
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 944,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 948,
    "end": 957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 958,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 969,
    "end": 970
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 980,
    "end": 986
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 987,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 998,
    "end": 999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1001,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1032,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1036,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1068,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 1076,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1091,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1116,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1123,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1127,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1160,
    "end": 1166
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 1167,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1181,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1215,
    "end": 1221
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1226,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1238,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1269,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 1275,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1296,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1",
    "start": 1309,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1319,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1339,
    "end": 1350
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c2",
    "start": 1352,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1362,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1383,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "m1_c4_c1_2",
    "start": 1396,
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
    "value": "any",
    "start": 1408,
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
    "value": "{",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1433,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 1441,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f1_arg",
    "start": 1452,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1466,
    "end": 1475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1477,
    "end": 1478
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1498,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 1505,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f2_arg",
    "start": 1515,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1529,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1561,
    "end": 1568
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 1569,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f3_arg",
    "start": 1580,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1594,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1627,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 1634,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "m1_c4_f4_arg",
    "start": 1644,
    "end": 1656
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1658,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1668,
    "end": 1669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1692,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 1700,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1713,
    "end": 1714
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1727,
    "end": 1733
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1734,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1738,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1748,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1749,
    "end": 1750
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1770,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 1777,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1803,
    "end": 1809
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1810,
    "end": 1813
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1814,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1846,
    "end": 1853
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 1854,
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
    "value": "{",
    "start": 1867,
    "end": 1868
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1881,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1892,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1925,
    "end": 1931
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 1932,
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
    "type": "Keyword",
    "value": "return",
    "start": 1958,
    "end": 1964
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1965,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1969,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1979,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2003,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 2011,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2025,
    "end": 2034
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2049,
    "end": 2055
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2056,
    "end": 2059
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2060,
    "end": 2069
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2071,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2092,
    "end": 2098
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 2099,
    "end": 2109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2109,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2113,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2137,
    "end": 2143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2144,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2148,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2158,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2180,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 2188,
    "end": 2199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2200,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2203,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2214,
    "end": 2215
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2228,
    "end": 2234
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2235,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2239,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2261,
    "end": 2262
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2272,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 2279,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2293,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2318,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2325,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2329,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2340,
    "end": 2341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2341,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2364,
    "end": 2370
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2371,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2377,
    "end": 2386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2397,
    "end": 2408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "m1_c5_c",
    "start": 2410,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2419,
    "end": 2428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2428,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2457,
    "end": 2462
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2463,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2474,
    "end": 2475
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2484,
    "end": 2495
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Identifier",
    "value": "m1_c6_c",
    "start": 2497,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2506,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2539,
    "end": 2545
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2546,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 2552,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2572,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2584,
    "end": 2585
  },
  {
    "type": "Identifier",
    "value": "m1_c7_c",
    "start": 2585,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2594,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2606,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2642,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 2648,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 2669,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "m1_c8_c",
    "start": 2682,
    "end": 2689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2689,
    "end": 2690
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2691,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2713,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2726,
    "end": 2734
  },
  {
    "type": "Identifier",
    "value": "f1_public",
    "start": 2735,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "m1_f1_arg",
    "start": 2745,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2756,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2780,
    "end": 2786
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2787,
    "end": 2795
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 2796,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Identifier",
    "value": "m1_f2_arg",
    "start": 2806,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2817,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2828,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2841,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "f3_public",
    "start": 2850,
    "end": 2859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2859,
    "end": 2860
  },
  {
    "type": "Identifier",
    "value": "m1_f3_arg",
    "start": 2860,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2871,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2896,
    "end": 2902
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2903,
    "end": 2911
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 2912,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "m1_f4_arg",
    "start": 2922,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2933,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2960,
    "end": 2961
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2968,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "f5_public",
    "start": 2977,
    "end": 2986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2986,
    "end": 2987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2989,
    "end": 2990
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2999,
    "end": 3005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3006,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3010,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3027,
    "end": 3028
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3034,
    "end": 3040
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3041,
    "end": 3049
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 3050,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3072,
    "end": 3078
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3079,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3083,
    "end": 3092
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3092,
    "end": 3093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3093,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3100,
    "end": 3101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3107,
    "end": 3115
  },
  {
    "type": "Identifier",
    "value": "f7_public",
    "start": 3116,
    "end": 3125
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3138,
    "end": 3144
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3145,
    "end": 3148
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3149,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3167,
    "end": 3168
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3174,
    "end": 3180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3181,
    "end": 3189
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 3190,
    "end": 3199
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3199,
    "end": 3200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3212,
    "end": 3218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3219,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3223,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3234,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3259,
    "end": 3267
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 3268,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3282,
    "end": 3291
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3292,
    "end": 3293
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3302,
    "end": 3308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3309,
    "end": 3312
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3313,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3323,
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
    "type": "Keyword",
    "value": "export",
    "start": 3337,
    "end": 3343
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3344,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 3353,
    "end": 3363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3363,
    "end": 3364
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3364,
    "end": 3365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3365,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3367,
    "end": 3376
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3377,
    "end": 3378
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3387,
    "end": 3393
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3394,
    "end": 3397
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 3398,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3422,
    "end": 3430
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 3431,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3444,
    "end": 3445
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3446,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3467,
    "end": 3473
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3474,
    "end": 3477
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3478,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3503,
    "end": 3509
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3510,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 3519,
    "end": 3529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3529,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3533,
    "end": 3543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3544,
    "end": 3545
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3563,
    "end": 3569
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3570,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 3574,
    "end": 3584
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3584,
    "end": 3585
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3585,
    "end": 3586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3586,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3605,
    "end": 3614
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 3615,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3624,
    "end": 3630
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3631,
    "end": 3636
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3637,
    "end": 3649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3650,
    "end": 3651
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3660,
    "end": 3667
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 3668,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3669,
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
    "value": "{",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3682,
    "end": 3683
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3688,
    "end": 3689
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3695,
    "end": 3700
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 3701,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3715,
    "end": 3716
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3728,
    "end": 3734
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3735,
    "end": 3740
  },
  {
    "type": "Identifier",
    "value": "m2_C3_public",
    "start": 3741,
    "end": 3753
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3754,
    "end": 3755
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3764,
    "end": 3775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3776,
    "end": 3777
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c1",
    "start": 3777,
    "end": 3785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3785,
    "end": 3786
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3787,
    "end": 3799
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3799,
    "end": 3800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3800,
    "end": 3801
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3810,
    "end": 3821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c2",
    "start": 3823,
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
    "value": "m2_C2_private",
    "start": 3833,
    "end": 3846
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3846,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 3857,
    "end": 3868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3869,
    "end": 3870
  },
  {
    "type": "Identifier",
    "value": "m2_c3_c1_2",
    "start": 3870,
    "end": 3880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3880,
    "end": 3881
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3882,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3897,
    "end": 3898
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3908,
    "end": 3915
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 3916,
    "end": 3926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3926,
    "end": 3927
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f1_arg",
    "start": 3927,
    "end": 3939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 3941,
    "end": 3953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3965,
    "end": 3966
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3976,
    "end": 3982
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 3983,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3992,
    "end": 3993
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f2_arg",
    "start": 3993,
    "end": 4005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4005,
    "end": 4006
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4007,
    "end": 4019
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4019,
    "end": 4020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4021,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4031,
    "end": 4032
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4042,
    "end": 4049
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 4050,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f3_arg",
    "start": 4061,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4075,
    "end": 4088
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4088,
    "end": 4089
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4090,
    "end": 4091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4100,
    "end": 4101
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4111,
    "end": 4117
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 4118,
    "end": 4127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4127,
    "end": 4128
  },
  {
    "type": "Identifier",
    "value": "m2_c3_f4_arg",
    "start": 4128,
    "end": 4140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4140,
    "end": 4141
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4142,
    "end": 4155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4155,
    "end": 4156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4157,
    "end": 4158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4167,
    "end": 4168
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4178,
    "end": 4185
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 4186,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4197,
    "end": 4198
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4199,
    "end": 4200
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4213,
    "end": 4219
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4220,
    "end": 4223
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4224,
    "end": 4236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4236,
    "end": 4237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4237,
    "end": 4238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4248,
    "end": 4249
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4259,
    "end": 4265
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 4266,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4278,
    "end": 4279
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4292,
    "end": 4298
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4299,
    "end": 4302
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4303,
    "end": 4315
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4315,
    "end": 4316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4316,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4338,
    "end": 4345
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 4346,
    "end": 4356
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4373,
    "end": 4379
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4380,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4384,
    "end": 4397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4397,
    "end": 4398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4398,
    "end": 4399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4399,
    "end": 4400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4409,
    "end": 4410
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4420,
    "end": 4426
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 4427,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4437,
    "end": 4438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4439,
    "end": 4440
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4453,
    "end": 4459
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4460,
    "end": 4463
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4464,
    "end": 4477
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4477,
    "end": 4478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4478,
    "end": 4479
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4479,
    "end": 4480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4489,
    "end": 4490
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4500,
    "end": 4507
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 4508,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4522,
    "end": 4534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4535,
    "end": 4536
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4549,
    "end": 4555
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4556,
    "end": 4559
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4560,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4573,
    "end": 4574
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4574,
    "end": 4575
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4584,
    "end": 4585
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4595,
    "end": 4601
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 4602,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4614,
    "end": 4615
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4616,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4629,
    "end": 4630
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4643,
    "end": 4649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4650,
    "end": 4653
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4654,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4666,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4668,
    "end": 4669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4678,
    "end": 4679
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 4689,
    "end": 4696
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 4697,
    "end": 4708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4708,
    "end": 4709
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4710,
    "end": 4711
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4712,
    "end": 4725
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4740,
    "end": 4746
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4747,
    "end": 4750
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4751,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4776,
    "end": 4777
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4787,
    "end": 4793
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 4794,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4806,
    "end": 4807
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4808,
    "end": 4821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4836,
    "end": 4842
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4843,
    "end": 4846
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4847,
    "end": 4860
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4860,
    "end": 4861
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4861,
    "end": 4862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4862,
    "end": 4863
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4885,
    "end": 4890
  },
  {
    "type": "Identifier",
    "value": "m2_C4_private",
    "start": 4891,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4905,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4915,
    "end": 4926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4927,
    "end": 4928
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c1",
    "start": 4928,
    "end": 4936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4936,
    "end": 4937
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 4938,
    "end": 4950
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4950,
    "end": 4951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4951,
    "end": 4952
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 4961,
    "end": 4972
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c2",
    "start": 4974,
    "end": 4982
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4982,
    "end": 4983
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 4984,
    "end": 4997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4997,
    "end": 4998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4998,
    "end": 4999
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 5008,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "m2_c4_c1_2",
    "start": 5021,
    "end": 5031
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5031,
    "end": 5032
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5033,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5048,
    "end": 5049
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5059,
    "end": 5066
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 5067,
    "end": 5077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5077,
    "end": 5078
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f1_arg",
    "start": 5078,
    "end": 5090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5090,
    "end": 5091
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5092,
    "end": 5104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5104,
    "end": 5105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5116,
    "end": 5117
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5127,
    "end": 5133
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 5134,
    "end": 5143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5143,
    "end": 5144
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f2_arg",
    "start": 5144,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5158,
    "end": 5170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5182,
    "end": 5183
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5193,
    "end": 5200
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 5201,
    "end": 5211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5211,
    "end": 5212
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f3_arg",
    "start": 5212,
    "end": 5224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5226,
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
    "value": "{",
    "start": 5241,
    "end": 5242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5251,
    "end": 5252
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5262,
    "end": 5268
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 5269,
    "end": 5278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5278,
    "end": 5279
  },
  {
    "type": "Identifier",
    "value": "m2_c4_f4_arg",
    "start": 5279,
    "end": 5291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5291,
    "end": 5292
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5293,
    "end": 5306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5306,
    "end": 5307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5308,
    "end": 5309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5318,
    "end": 5319
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5330,
    "end": 5337
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 5338,
    "end": 5348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5365,
    "end": 5371
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5372,
    "end": 5375
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5376,
    "end": 5388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5388,
    "end": 5389
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5389,
    "end": 5390
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5390,
    "end": 5391
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5400,
    "end": 5401
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5411,
    "end": 5417
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 5418,
    "end": 5427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5428,
    "end": 5429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5430,
    "end": 5431
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5444,
    "end": 5450
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5451,
    "end": 5454
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5455,
    "end": 5467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5467,
    "end": 5468
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5468,
    "end": 5469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5469,
    "end": 5470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5479,
    "end": 5480
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5490,
    "end": 5497
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 5498,
    "end": 5508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5508,
    "end": 5509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5509,
    "end": 5510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5511,
    "end": 5512
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5525,
    "end": 5531
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5532,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5536,
    "end": 5549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5549,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5551,
    "end": 5552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5561,
    "end": 5562
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5572,
    "end": 5578
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 5579,
    "end": 5588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5588,
    "end": 5589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5589,
    "end": 5590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5591,
    "end": 5592
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5605,
    "end": 5611
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5612,
    "end": 5615
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5616,
    "end": 5629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5629,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5641,
    "end": 5642
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5653,
    "end": 5660
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 5661,
    "end": 5671
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5671,
    "end": 5672
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5672,
    "end": 5673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5673,
    "end": 5674
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5675,
    "end": 5687
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5688,
    "end": 5689
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5702,
    "end": 5708
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5709,
    "end": 5712
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5713,
    "end": 5725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5725,
    "end": 5726
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5726,
    "end": 5727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5727,
    "end": 5728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5737,
    "end": 5738
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5748,
    "end": 5754
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 5755,
    "end": 5765
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5765,
    "end": 5766
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5766,
    "end": 5767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5767,
    "end": 5768
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5769,
    "end": 5781
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5782,
    "end": 5783
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5796,
    "end": 5802
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5803,
    "end": 5806
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 5807,
    "end": 5819
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5819,
    "end": 5820
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5820,
    "end": 5821
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5821,
    "end": 5822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5831,
    "end": 5832
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 5842,
    "end": 5849
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 5850,
    "end": 5861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5861,
    "end": 5862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5862,
    "end": 5863
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5863,
    "end": 5864
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5865,
    "end": 5878
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5879,
    "end": 5880
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5893,
    "end": 5899
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5900,
    "end": 5903
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5904,
    "end": 5917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5917,
    "end": 5918
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5918,
    "end": 5919
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5919,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5929,
    "end": 5930
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 5940,
    "end": 5946
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 5947,
    "end": 5957
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5957,
    "end": 5958
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5958,
    "end": 5959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5959,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 5961,
    "end": 5974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5975,
    "end": 5976
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5989,
    "end": 5995
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5996,
    "end": 5999
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6000,
    "end": 6013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6013,
    "end": 6014
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6014,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6015,
    "end": 6016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6031,
    "end": 6032
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6038,
    "end": 6044
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6045,
    "end": 6050
  },
  {
    "type": "Identifier",
    "value": "m2_C5_public",
    "start": 6051,
    "end": 6063
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6064,
    "end": 6065
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6074,
    "end": 6085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Identifier",
    "value": "m2_c5_c",
    "start": 6087,
    "end": 6094
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6094,
    "end": 6095
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6096,
    "end": 6108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6108,
    "end": 6109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6120,
    "end": 6121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6126,
    "end": 6127
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6137,
    "end": 6142
  },
  {
    "type": "Identifier",
    "value": "m2_C6_private",
    "start": 6143,
    "end": 6156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6157,
    "end": 6158
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6167,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6179,
    "end": 6180
  },
  {
    "type": "Identifier",
    "value": "m2_c6_c",
    "start": 6180,
    "end": 6187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6187,
    "end": 6188
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6189,
    "end": 6201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6201,
    "end": 6202
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6203,
    "end": 6204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6213,
    "end": 6214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6225,
    "end": 6231
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6232,
    "end": 6237
  },
  {
    "type": "Identifier",
    "value": "m2_C7_public",
    "start": 6238,
    "end": 6250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6251,
    "end": 6252
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6261,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6273,
    "end": 6274
  },
  {
    "type": "Identifier",
    "value": "m2_c7_c",
    "start": 6274,
    "end": 6281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6281,
    "end": 6282
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6283,
    "end": 6296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6296,
    "end": 6297
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6298,
    "end": 6299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6309,
    "end": 6310
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6315,
    "end": 6316
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6326,
    "end": 6331
  },
  {
    "type": "Identifier",
    "value": "m2_C8_private",
    "start": 6332,
    "end": 6345
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6346,
    "end": 6347
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 6356,
    "end": 6367
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6368,
    "end": 6369
  },
  {
    "type": "Identifier",
    "value": "m2_c8_c",
    "start": 6369,
    "end": 6376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6376,
    "end": 6377
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6378,
    "end": 6391
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6391,
    "end": 6392
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6393,
    "end": 6394
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6403,
    "end": 6404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6409,
    "end": 6410
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6416,
    "end": 6424
  },
  {
    "type": "Identifier",
    "value": "f1_public",
    "start": 6425,
    "end": 6434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6434,
    "end": 6435
  },
  {
    "type": "Identifier",
    "value": "m2_f1_arg",
    "start": 6435,
    "end": 6444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6444,
    "end": 6445
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6446,
    "end": 6458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6458,
    "end": 6459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6460,
    "end": 6461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6473,
    "end": 6479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6480,
    "end": 6488
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 6489,
    "end": 6498
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6498,
    "end": 6499
  },
  {
    "type": "Identifier",
    "value": "m2_f2_arg",
    "start": 6499,
    "end": 6508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6508,
    "end": 6509
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6510,
    "end": 6522
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6522,
    "end": 6523
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6524,
    "end": 6525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6530,
    "end": 6531
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6537,
    "end": 6545
  },
  {
    "type": "Identifier",
    "value": "f3_public",
    "start": 6546,
    "end": 6555
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6555,
    "end": 6556
  },
  {
    "type": "Identifier",
    "value": "m2_f3_arg",
    "start": 6556,
    "end": 6565
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6565,
    "end": 6566
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6567,
    "end": 6580
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6580,
    "end": 6581
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6582,
    "end": 6583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6588,
    "end": 6589
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6595,
    "end": 6601
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6602,
    "end": 6610
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 6611,
    "end": 6620
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6620,
    "end": 6621
  },
  {
    "type": "Identifier",
    "value": "m2_f4_arg",
    "start": 6621,
    "end": 6630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6630,
    "end": 6631
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6632,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6647,
    "end": 6648
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6661,
    "end": 6669
  },
  {
    "type": "Identifier",
    "value": "f5_public",
    "start": 6670,
    "end": 6679
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6679,
    "end": 6680
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6680,
    "end": 6681
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6682,
    "end": 6683
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6692,
    "end": 6698
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6699,
    "end": 6702
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6703,
    "end": 6715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6715,
    "end": 6716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6717,
    "end": 6718
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6723,
    "end": 6724
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6730,
    "end": 6736
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6737,
    "end": 6745
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 6746,
    "end": 6755
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6755,
    "end": 6756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6756,
    "end": 6757
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6758,
    "end": 6759
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6768,
    "end": 6774
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6775,
    "end": 6778
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6779,
    "end": 6791
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6791,
    "end": 6792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6792,
    "end": 6793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6793,
    "end": 6794
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6806,
    "end": 6814
  },
  {
    "type": "Identifier",
    "value": "f7_public",
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
    "value": "{",
    "start": 6827,
    "end": 6828
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6837,
    "end": 6843
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6844,
    "end": 6847
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6848,
    "end": 6861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6861,
    "end": 6862
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6862,
    "end": 6863
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6863,
    "end": 6864
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6876,
    "end": 6882
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6883,
    "end": 6891
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 6892,
    "end": 6901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6901,
    "end": 6902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6902,
    "end": 6903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6904,
    "end": 6905
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6914,
    "end": 6920
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 6921,
    "end": 6924
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 6925,
    "end": 6938
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6938,
    "end": 6939
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6939,
    "end": 6940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6940,
    "end": 6941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6946,
    "end": 6947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6954,
    "end": 6962
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 6963,
    "end": 6973
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6973,
    "end": 6974
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6974,
    "end": 6975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6975,
    "end": 6976
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 6977,
    "end": 6989
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6990,
    "end": 6991
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7000,
    "end": 7006
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7007,
    "end": 7010
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7011,
    "end": 7023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7023,
    "end": 7024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7024,
    "end": 7025
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7025,
    "end": 7026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7031,
    "end": 7032
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7038,
    "end": 7044
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7045,
    "end": 7053
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 7054,
    "end": 7064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7064,
    "end": 7065
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7065,
    "end": 7066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7066,
    "end": 7067
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7068,
    "end": 7080
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7081,
    "end": 7082
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7091,
    "end": 7097
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7098,
    "end": 7101
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 7102,
    "end": 7114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7114,
    "end": 7115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7115,
    "end": 7116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7116,
    "end": 7117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7129,
    "end": 7137
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 7138,
    "end": 7149
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7149,
    "end": 7150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7150,
    "end": 7151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7151,
    "end": 7152
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7153,
    "end": 7166
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7167,
    "end": 7168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7177,
    "end": 7183
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7184,
    "end": 7187
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7188,
    "end": 7201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7201,
    "end": 7202
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7202,
    "end": 7203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7203,
    "end": 7204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7209,
    "end": 7210
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7216,
    "end": 7222
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7223,
    "end": 7231
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 7232,
    "end": 7242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7242,
    "end": 7243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7243,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7246,
    "end": 7259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7260,
    "end": 7261
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7270,
    "end": 7276
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7277,
    "end": 7280
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 7281,
    "end": 7294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7294,
    "end": 7295
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7295,
    "end": 7296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7296,
    "end": 7297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7302,
    "end": 7303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7304,
    "end": 7305
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7307,
    "end": 7312
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7313,
    "end": 7323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7324,
    "end": 7325
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7330,
    "end": 7337
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 7338,
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
    "value": "{",
    "start": 7342,
    "end": 7343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7348,
    "end": 7349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7350,
    "end": 7351
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7353,
    "end": 7359
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7360,
    "end": 7365
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7366,
    "end": 7375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7376,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7378,
    "end": 7379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7381,
    "end": 7387
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7388,
    "end": 7393
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 7394,
    "end": 7403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7404,
    "end": 7405
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7410,
    "end": 7421
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7422,
    "end": 7423
  },
  {
    "type": "Identifier",
    "value": "c7_c1",
    "start": 7423,
    "end": 7428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7428,
    "end": 7429
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7430,
    "end": 7440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7440,
    "end": 7441
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7441,
    "end": 7442
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7456,
    "end": 7467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7468,
    "end": 7469
  },
  {
    "type": "Identifier",
    "value": "c7_c2",
    "start": 7469,
    "end": 7474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7474,
    "end": 7475
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7476,
    "end": 7485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7485,
    "end": 7486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7486,
    "end": 7487
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 7492,
    "end": 7503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7504,
    "end": 7505
  },
  {
    "type": "Identifier",
    "value": "c7_c1_2",
    "start": 7505,
    "end": 7512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7512,
    "end": 7513
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 7514,
    "end": 7517
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7517,
    "end": 7518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7519,
    "end": 7520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7525,
    "end": 7526
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7531,
    "end": 7538
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 7539,
    "end": 7549
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7549,
    "end": 7550
  },
  {
    "type": "Identifier",
    "value": "c7_f1_arg",
    "start": 7550,
    "end": 7559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7559,
    "end": 7560
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7561,
    "end": 7570
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7570,
    "end": 7571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7572,
    "end": 7573
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7578,
    "end": 7579
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7585,
    "end": 7591
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 7592,
    "end": 7601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7601,
    "end": 7602
  },
  {
    "type": "Identifier",
    "value": "c7_f2_arg",
    "start": 7602,
    "end": 7611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7611,
    "end": 7612
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7613,
    "end": 7622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7622,
    "end": 7623
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7624,
    "end": 7625
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7630,
    "end": 7631
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7637,
    "end": 7644
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 7645,
    "end": 7655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7655,
    "end": 7656
  },
  {
    "type": "Identifier",
    "value": "c7_f3_arg",
    "start": 7656,
    "end": 7665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7665,
    "end": 7666
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7667,
    "end": 7677
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7677,
    "end": 7678
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7679,
    "end": 7680
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7685,
    "end": 7686
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7692,
    "end": 7698
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 7699,
    "end": 7708
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7708,
    "end": 7709
  },
  {
    "type": "Identifier",
    "value": "c7_f4_arg",
    "start": 7709,
    "end": 7718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7718,
    "end": 7719
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7720,
    "end": 7730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7730,
    "end": 7731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7732,
    "end": 7733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7746,
    "end": 7747
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7753,
    "end": 7760
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 7761,
    "end": 7771
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7771,
    "end": 7772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7772,
    "end": 7773
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7774,
    "end": 7775
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7784,
    "end": 7790
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7791,
    "end": 7794
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7795,
    "end": 7804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7804,
    "end": 7805
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7805,
    "end": 7806
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7806,
    "end": 7807
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7812,
    "end": 7813
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7819,
    "end": 7825
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 7826,
    "end": 7835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7835,
    "end": 7836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7836,
    "end": 7837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7838,
    "end": 7839
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7848,
    "end": 7854
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7855,
    "end": 7858
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 7859,
    "end": 7868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7868,
    "end": 7869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7869,
    "end": 7870
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7870,
    "end": 7871
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7876,
    "end": 7877
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 7883,
    "end": 7890
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 7891,
    "end": 7901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7901,
    "end": 7902
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7902,
    "end": 7903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7904,
    "end": 7905
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7914,
    "end": 7920
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7921,
    "end": 7924
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7925,
    "end": 7935
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7936,
    "end": 7937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7937,
    "end": 7938
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7943,
    "end": 7944
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7950,
    "end": 7956
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 7957,
    "end": 7966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7966,
    "end": 7967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7967,
    "end": 7968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7969,
    "end": 7970
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7979,
    "end": 7985
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7986,
    "end": 7989
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 7990,
    "end": 8000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8000,
    "end": 8001
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8001,
    "end": 8002
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8002,
    "end": 8003
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8016,
    "end": 8017
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8023,
    "end": 8030
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 8031,
    "end": 8041
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8041,
    "end": 8042
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8042,
    "end": 8043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8043,
    "end": 8044
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8045,
    "end": 8054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8055,
    "end": 8056
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8065,
    "end": 8071
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8072,
    "end": 8075
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8076,
    "end": 8085
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8085,
    "end": 8086
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8086,
    "end": 8087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8087,
    "end": 8088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8093,
    "end": 8094
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8100,
    "end": 8106
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 8107,
    "end": 8117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8117,
    "end": 8118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8118,
    "end": 8119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8119,
    "end": 8120
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8121,
    "end": 8130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8131,
    "end": 8132
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8141,
    "end": 8147
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8148,
    "end": 8151
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8152,
    "end": 8161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8161,
    "end": 8162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8162,
    "end": 8163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8163,
    "end": 8164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8176,
    "end": 8183
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 8184,
    "end": 8195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8195,
    "end": 8196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8196,
    "end": 8197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8197,
    "end": 8198
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8199,
    "end": 8209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8210,
    "end": 8211
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8220,
    "end": 8226
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8227,
    "end": 8230
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8231,
    "end": 8241
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8241,
    "end": 8242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8242,
    "end": 8243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8243,
    "end": 8244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8249,
    "end": 8250
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8256,
    "end": 8262
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 8263,
    "end": 8273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8273,
    "end": 8274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8274,
    "end": 8275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8275,
    "end": 8276
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8277,
    "end": 8287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8288,
    "end": 8289
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8306,
    "end": 8312
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8313,
    "end": 8316
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8317,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8328,
    "end": 8329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8329,
    "end": 8330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8343,
    "end": 8344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8345,
    "end": 8346
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8348,
    "end": 8353
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 8354,
    "end": 8364
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8365,
    "end": 8366
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8371,
    "end": 8382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8383,
    "end": 8384
  },
  {
    "type": "Identifier",
    "value": "c8_c1",
    "start": 8384,
    "end": 8389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8389,
    "end": 8390
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8391,
    "end": 8401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8402,
    "end": 8403
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8408,
    "end": 8419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8420,
    "end": 8421
  },
  {
    "type": "Identifier",
    "value": "c8_c2",
    "start": 8421,
    "end": 8426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8426,
    "end": 8427
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8428,
    "end": 8437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8437,
    "end": 8438
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8438,
    "end": 8439
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 8444,
    "end": 8455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8456,
    "end": 8457
  },
  {
    "type": "Identifier",
    "value": "c8_c1_2",
    "start": 8457,
    "end": 8464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8464,
    "end": 8465
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8466,
    "end": 8469
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8469,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8471,
    "end": 8472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8477,
    "end": 8478
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8492,
    "end": 8499
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 8500,
    "end": 8510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8510,
    "end": 8511
  },
  {
    "type": "Identifier",
    "value": "c8_f1_arg",
    "start": 8511,
    "end": 8520
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8520,
    "end": 8521
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8522,
    "end": 8531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8531,
    "end": 8532
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8533,
    "end": 8534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8539,
    "end": 8540
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8546,
    "end": 8552
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 8553,
    "end": 8562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8562,
    "end": 8563
  },
  {
    "type": "Identifier",
    "value": "c8_f2_arg",
    "start": 8563,
    "end": 8572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8572,
    "end": 8573
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8574,
    "end": 8583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8583,
    "end": 8584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8585,
    "end": 8586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8591,
    "end": 8592
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8598,
    "end": 8605
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 8606,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Identifier",
    "value": "c8_f3_arg",
    "start": 8617,
    "end": 8626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8626,
    "end": 8627
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8628,
    "end": 8638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8638,
    "end": 8639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8640,
    "end": 8641
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8646,
    "end": 8647
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8653,
    "end": 8659
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 8660,
    "end": 8669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8669,
    "end": 8670
  },
  {
    "type": "Identifier",
    "value": "c8_f4_arg",
    "start": 8670,
    "end": 8679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8679,
    "end": 8680
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8681,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8693,
    "end": 8694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8699,
    "end": 8700
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8706,
    "end": 8713
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 8714,
    "end": 8724
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8724,
    "end": 8725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8725,
    "end": 8726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8727,
    "end": 8728
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8737,
    "end": 8743
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8744,
    "end": 8747
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8748,
    "end": 8757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8757,
    "end": 8758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8758,
    "end": 8759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8759,
    "end": 8760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8765,
    "end": 8766
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8772,
    "end": 8778
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 8779,
    "end": 8788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8788,
    "end": 8789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8789,
    "end": 8790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8791,
    "end": 8792
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8801,
    "end": 8807
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8808,
    "end": 8811
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8812,
    "end": 8821
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8821,
    "end": 8822
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8822,
    "end": 8823
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8823,
    "end": 8824
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8829,
    "end": 8830
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8836,
    "end": 8843
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 8844,
    "end": 8854
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8854,
    "end": 8855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8855,
    "end": 8856
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8857,
    "end": 8858
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8867,
    "end": 8873
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8874,
    "end": 8877
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8878,
    "end": 8888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8888,
    "end": 8889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8889,
    "end": 8890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8890,
    "end": 8891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8896,
    "end": 8897
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 8903,
    "end": 8909
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 8910,
    "end": 8919
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8919,
    "end": 8920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8920,
    "end": 8921
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8922,
    "end": 8923
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8932,
    "end": 8938
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8939,
    "end": 8942
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 8943,
    "end": 8953
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8953,
    "end": 8954
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8954,
    "end": 8955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8955,
    "end": 8956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8961,
    "end": 8962
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 8968,
    "end": 8975
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 8976,
    "end": 8986
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8986,
    "end": 8987
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8987,
    "end": 8988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8988,
    "end": 8989
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 8990,
    "end": 8999
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9000,
    "end": 9001
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9010,
    "end": 9016
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9017,
    "end": 9020
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9021,
    "end": 9030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9030,
    "end": 9031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9031,
    "end": 9032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9032,
    "end": 9033
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9038,
    "end": 9039
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 9045,
    "end": 9051
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 9052,
    "end": 9062
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9062,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9063,
    "end": 9064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9064,
    "end": 9065
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9066,
    "end": 9075
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9076,
    "end": 9077
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9086,
    "end": 9092
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9093,
    "end": 9096
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9097,
    "end": 9106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9106,
    "end": 9107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9107,
    "end": 9108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9108,
    "end": 9109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9114,
    "end": 9115
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 9121,
    "end": 9128
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 9129,
    "end": 9140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9140,
    "end": 9141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9141,
    "end": 9142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9142,
    "end": 9143
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9144,
    "end": 9154
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9155,
    "end": 9156
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9165,
    "end": 9171
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9172,
    "end": 9175
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9176,
    "end": 9186
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9186,
    "end": 9187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9187,
    "end": 9188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9188,
    "end": 9189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9194,
    "end": 9195
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 9201,
    "end": 9207
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 9208,
    "end": 9218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9218,
    "end": 9219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9219,
    "end": 9220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9220,
    "end": 9221
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9222,
    "end": 9232
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9233,
    "end": 9234
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9243,
    "end": 9249
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9250,
    "end": 9253
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9254,
    "end": 9264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9264,
    "end": 9265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9265,
    "end": 9266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9266,
    "end": 9267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9272,
    "end": 9273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9274,
    "end": 9275
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9278,
    "end": 9284
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9285,
    "end": 9290
  },
  {
    "type": "Identifier",
    "value": "C9_public",
    "start": 9291,
    "end": 9300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9301,
    "end": 9302
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9307,
    "end": 9318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9319,
    "end": 9320
  },
  {
    "type": "Identifier",
    "value": "c9_c",
    "start": 9320,
    "end": 9324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9324,
    "end": 9325
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9326,
    "end": 9335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9335,
    "end": 9336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9337,
    "end": 9338
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9343,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9345,
    "end": 9346
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9352,
    "end": 9357
  },
  {
    "type": "Identifier",
    "value": "C10_private",
    "start": 9358,
    "end": 9369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9370,
    "end": 9371
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9376,
    "end": 9387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9388,
    "end": 9389
  },
  {
    "type": "Identifier",
    "value": "c10_c",
    "start": 9389,
    "end": 9394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9394,
    "end": 9395
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9396,
    "end": 9405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9405,
    "end": 9406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9407,
    "end": 9408
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9413,
    "end": 9414
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9415,
    "end": 9416
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9417,
    "end": 9423
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9424,
    "end": 9429
  },
  {
    "type": "Identifier",
    "value": "C11_public",
    "start": 9430,
    "end": 9440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9441,
    "end": 9442
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9447,
    "end": 9458
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9459,
    "end": 9460
  },
  {
    "type": "Identifier",
    "value": "c11_c",
    "start": 9460,
    "end": 9465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9465,
    "end": 9466
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9467,
    "end": 9477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9477,
    "end": 9478
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9479,
    "end": 9480
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9494,
    "end": 9495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9496,
    "end": 9497
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9503,
    "end": 9508
  },
  {
    "type": "Identifier",
    "value": "C12_private",
    "start": 9509,
    "end": 9520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9521,
    "end": 9522
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 9527,
    "end": 9538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9539,
    "end": 9540
  },
  {
    "type": "Identifier",
    "value": "c12_c",
    "start": 9540,
    "end": 9545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9545,
    "end": 9546
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9547,
    "end": 9557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9557,
    "end": 9558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9559,
    "end": 9560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9565,
    "end": 9566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9567,
    "end": 9568
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9570,
    "end": 9578
  },
  {
    "type": "Identifier",
    "value": "f1_private",
    "start": 9579,
    "end": 9589
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9589,
    "end": 9590
  },
  {
    "type": "Identifier",
    "value": "f1_arg",
    "start": 9590,
    "end": 9596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9596,
    "end": 9597
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9598,
    "end": 9608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9608,
    "end": 9609
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9610,
    "end": 9611
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9612,
    "end": 9613
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9615,
    "end": 9621
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9622,
    "end": 9630
  },
  {
    "type": "Identifier",
    "value": "f2_public",
    "start": 9631,
    "end": 9640
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9640,
    "end": 9641
  },
  {
    "type": "Identifier",
    "value": "f2_arg",
    "start": 9641,
    "end": 9647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9647,
    "end": 9648
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9649,
    "end": 9659
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9659,
    "end": 9660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9661,
    "end": 9662
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9672,
    "end": 9673
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9675,
    "end": 9683
  },
  {
    "type": "Identifier",
    "value": "f3_private",
    "start": 9684,
    "end": 9694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9694,
    "end": 9695
  },
  {
    "type": "Identifier",
    "value": "f3_arg",
    "start": 9695,
    "end": 9701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9701,
    "end": 9702
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9703,
    "end": 9712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9712,
    "end": 9713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9714,
    "end": 9715
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9716,
    "end": 9717
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9719,
    "end": 9725
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9726,
    "end": 9734
  },
  {
    "type": "Identifier",
    "value": "f4_public",
    "start": 9735,
    "end": 9744
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9744,
    "end": 9745
  },
  {
    "type": "Identifier",
    "value": "f4_arg",
    "start": 9745,
    "end": 9751
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9751,
    "end": 9752
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9753,
    "end": 9762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9762,
    "end": 9763
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9764,
    "end": 9765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9766,
    "end": 9767
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9769,
    "end": 9777
  },
  {
    "type": "Identifier",
    "value": "f5_private",
    "start": 9778,
    "end": 9788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9788,
    "end": 9789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9789,
    "end": 9790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9791,
    "end": 9792
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9797,
    "end": 9803
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9804,
    "end": 9807
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9808,
    "end": 9817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9817,
    "end": 9818
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9818,
    "end": 9819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9819,
    "end": 9820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9821,
    "end": 9822
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9824,
    "end": 9830
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9831,
    "end": 9839
  },
  {
    "type": "Identifier",
    "value": "f6_public",
    "start": 9840,
    "end": 9849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9849,
    "end": 9850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9850,
    "end": 9851
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9852,
    "end": 9853
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9858,
    "end": 9864
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9865,
    "end": 9868
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 9869,
    "end": 9878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9878,
    "end": 9879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9879,
    "end": 9880
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9880,
    "end": 9881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9882,
    "end": 9883
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9885,
    "end": 9893
  },
  {
    "type": "Identifier",
    "value": "f7_private",
    "start": 9894,
    "end": 9904
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9904,
    "end": 9905
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9905,
    "end": 9906
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9907,
    "end": 9908
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9913,
    "end": 9919
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9920,
    "end": 9923
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9924,
    "end": 9934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9934,
    "end": 9935
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9935,
    "end": 9936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9936,
    "end": 9937
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9938,
    "end": 9939
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9941,
    "end": 9947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9948,
    "end": 9956
  },
  {
    "type": "Identifier",
    "value": "f8_public",
    "start": 9957,
    "end": 9966
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9966,
    "end": 9967
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9967,
    "end": 9968
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9969,
    "end": 9970
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9975,
    "end": 9981
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 9982,
    "end": 9985
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 9986,
    "end": 9996
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9996,
    "end": 9997
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9997,
    "end": 9998
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9998,
    "end": 9999
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10008,
    "end": 10009
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10011,
    "end": 10019
  },
  {
    "type": "Identifier",
    "value": "f9_private",
    "start": 10020,
    "end": 10030
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10030,
    "end": 10031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10031,
    "end": 10032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10032,
    "end": 10033
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10034,
    "end": 10043
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10044,
    "end": 10045
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10050,
    "end": 10056
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10057,
    "end": 10060
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10061,
    "end": 10070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10070,
    "end": 10071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10071,
    "end": 10072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10072,
    "end": 10073
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
    "start": 10077,
    "end": 10083
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10084,
    "end": 10092
  },
  {
    "type": "Identifier",
    "value": "f10_public",
    "start": 10093,
    "end": 10103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10103,
    "end": 10104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10104,
    "end": 10105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10105,
    "end": 10106
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10107,
    "end": 10116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10117,
    "end": 10118
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10123,
    "end": 10129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10130,
    "end": 10133
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 10134,
    "end": 10143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10143,
    "end": 10144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10144,
    "end": 10145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10145,
    "end": 10146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10147,
    "end": 10148
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10150,
    "end": 10158
  },
  {
    "type": "Identifier",
    "value": "f11_private",
    "start": 10159,
    "end": 10170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10170,
    "end": 10171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10171,
    "end": 10172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10172,
    "end": 10173
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10174,
    "end": 10184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10185,
    "end": 10186
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10191,
    "end": 10197
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10198,
    "end": 10201
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10202,
    "end": 10212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10212,
    "end": 10213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10213,
    "end": 10214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10214,
    "end": 10215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10216,
    "end": 10217
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 10219,
    "end": 10225
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 10226,
    "end": 10234
  },
  {
    "type": "Identifier",
    "value": "f12_public",
    "start": 10235,
    "end": 10245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10245,
    "end": 10246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10246,
    "end": 10247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 10247,
    "end": 10248
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10249,
    "end": 10259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10260,
    "end": 10261
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 10275,
    "end": 10281
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 10282,
    "end": 10285
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 10286,
    "end": 10296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10296,
    "end": 10297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 10297,
    "end": 10298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10298,
    "end": 10299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10308,
    "end": 10309
  }
]
```
