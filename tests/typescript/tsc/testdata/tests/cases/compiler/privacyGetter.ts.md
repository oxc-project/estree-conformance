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
                        "name": "p1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 180
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
                                  "start": 208,
                                  "end": 217
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 204,
                                "end": 219
                              },
                              "start": 197,
                              "end": 220
                            }
                          ],
                          "start": 183,
                          "end": 230
                        },
                        "expression": false,
                        "start": 180,
                        "end": 230
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 158,
                      "end": 230
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p1_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 262
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
                            "name": "m1_c3_p1_arg",
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
                                  "start": 277,
                                  "end": 286
                                },
                                "typeArguments": null,
                                "start": 277,
                                "end": 286
                              },
                              "start": 275,
                              "end": 286
                            },
                            "start": 263,
                            "end": 286
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 288,
                          "end": 299
                        },
                        "expression": false,
                        "start": 262,
                        "end": 299
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 240,
                      "end": 299
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 321,
                        "end": 331
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
                                  "start": 359,
                                  "end": 368
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 355,
                                "end": 370
                              },
                              "start": 348,
                              "end": 371
                            }
                          ],
                          "start": 334,
                          "end": 381
                        },
                        "expression": false,
                        "start": 331,
                        "end": 381
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 309,
                      "end": 381
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 413
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
                            "name": "m1_c3_p2_arg",
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
                                  "start": 428,
                                  "end": 437
                                },
                                "typeArguments": null,
                                "start": 428,
                                "end": 437
                              },
                              "start": 426,
                              "end": 437
                            },
                            "start": 414,
                            "end": 437
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 439,
                          "end": 450
                        },
                        "expression": false,
                        "start": 413,
                        "end": 450
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 391,
                      "end": 450
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 482
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
                                  "start": 510,
                                  "end": 520
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 506,
                                "end": 522
                              },
                              "start": 499,
                              "end": 523
                            }
                          ],
                          "start": 485,
                          "end": 533
                        },
                        "expression": false,
                        "start": 482,
                        "end": 533
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 460,
                      "end": 533
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p3_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 555,
                        "end": 565
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
                            "name": "m1_c3_p3_arg",
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
                                  "start": 580,
                                  "end": 590
                                },
                                "typeArguments": null,
                                "start": 580,
                                "end": 590
                              },
                              "start": 578,
                              "end": 590
                            },
                            "start": 566,
                            "end": 590
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 592,
                          "end": 603
                        },
                        "expression": false,
                        "start": 565,
                        "end": 603
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 543,
                      "end": 603
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p4_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 633
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
                              "start": 637,
                              "end": 647
                            },
                            "typeArguments": null,
                            "start": 637,
                            "end": 647
                          },
                          "start": 635,
                          "end": 647
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
                                  "start": 682,
                                  "end": 692
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "start": 678,
                                "end": 694
                              },
                              "start": 671,
                              "end": 695
                            }
                          ],
                          "start": 648,
                          "end": 713
                        },
                        "expression": false,
                        "start": 633,
                        "end": 713
                      },
                      "kind": "get",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 613,
                      "end": 713
                    },
                    {
                      "type": "MethodDefinition",
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p4_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 743
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
                            "name": "m1_c3_p4_arg",
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
                                  "start": 758,
                                  "end": 768
                                },
                                "typeArguments": null,
                                "start": 758,
                                "end": 768
                              },
                              "start": 756,
                              "end": 768
                            },
                            "start": 744,
                            "end": 768
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 770,
                          "end": 790
                        },
                        "expression": false,
                        "start": 743,
                        "end": 790
                      },
                      "kind": "set",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "public",
                      "start": 723,
                      "end": 790
                    }
                  ],
                  "start": 148,
                  "end": 796
                },
                "abstract": false,
                "declare": false,
                "start": 132,
                "end": 796
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 125,
              "end": 796
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
                "start": 808,
                "end": 818
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
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 841,
                      "end": 851
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
                                "start": 879,
                                "end": 888
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 875,
                              "end": 890
                            },
                            "start": 868,
                            "end": 891
                          }
                        ],
                        "start": 854,
                        "end": 901
                      },
                      "expression": false,
                      "start": 851,
                      "end": 901
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 829,
                    "end": 901
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 923,
                      "end": 933
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
                          "name": "m1_c3_p1_arg",
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
                                "start": 948,
                                "end": 957
                              },
                              "typeArguments": null,
                              "start": 948,
                              "end": 957
                            },
                            "start": 946,
                            "end": 957
                          },
                          "start": 934,
                          "end": 957
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 959,
                        "end": 970
                      },
                      "expression": false,
                      "start": 933,
                      "end": 970
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 911,
                    "end": 970
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 1002
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
                                "start": 1030,
                                "end": 1039
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1026,
                              "end": 1041
                            },
                            "start": 1019,
                            "end": 1042
                          }
                        ],
                        "start": 1005,
                        "end": 1052
                      },
                      "expression": false,
                      "start": 1002,
                      "end": 1052
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 980,
                    "end": 1052
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1074,
                      "end": 1084
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
                          "name": "m1_c3_p2_arg",
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
                                "start": 1099,
                                "end": 1108
                              },
                              "typeArguments": null,
                              "start": 1099,
                              "end": 1108
                            },
                            "start": 1097,
                            "end": 1108
                          },
                          "start": 1085,
                          "end": 1108
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1110,
                        "end": 1121
                      },
                      "expression": false,
                      "start": 1084,
                      "end": 1121
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1062,
                    "end": 1121
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1143,
                      "end": 1153
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
                                "start": 1181,
                                "end": 1191
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1177,
                              "end": 1193
                            },
                            "start": 1170,
                            "end": 1194
                          }
                        ],
                        "start": 1156,
                        "end": 1204
                      },
                      "expression": false,
                      "start": 1153,
                      "end": 1204
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1131,
                    "end": 1204
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1226,
                      "end": 1236
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
                          "name": "m1_c3_p3_arg",
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
                                "start": 1251,
                                "end": 1261
                              },
                              "typeArguments": null,
                              "start": 1251,
                              "end": 1261
                            },
                            "start": 1249,
                            "end": 1261
                          },
                          "start": 1237,
                          "end": 1261
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1263,
                        "end": 1274
                      },
                      "expression": false,
                      "start": 1236,
                      "end": 1274
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1214,
                    "end": 1274
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1304
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
                            "start": 1308,
                            "end": 1318
                          },
                          "typeArguments": null,
                          "start": 1308,
                          "end": 1318
                        },
                        "start": 1306,
                        "end": 1318
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
                                "start": 1344,
                                "end": 1354
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1340,
                              "end": 1356
                            },
                            "start": 1333,
                            "end": 1357
                          }
                        ],
                        "start": 1319,
                        "end": 1367
                      },
                      "expression": false,
                      "start": 1304,
                      "end": 1367
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1284,
                    "end": 1367
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1388,
                      "end": 1397
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
                          "name": "m1_c3_p4_arg",
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
                                "start": 1412,
                                "end": 1422
                              },
                              "typeArguments": null,
                              "start": 1412,
                              "end": 1422
                            },
                            "start": 1410,
                            "end": 1422
                          },
                          "start": 1398,
                          "end": 1422
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1424,
                        "end": 1435
                      },
                      "expression": false,
                      "start": 1397,
                      "end": 1435
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1377,
                    "end": 1435
                  }
                ],
                "start": 819,
                "end": 1441
              },
              "abstract": false,
              "declare": false,
              "start": 802,
              "end": 1441
            }
          ],
          "start": 20,
          "end": 1443
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1443
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1443
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1455,
        "end": 1457
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
                "start": 1477,
                "end": 1489
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
                      "start": 1508,
                      "end": 1510
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
                        "start": 1513,
                        "end": 1524
                      },
                      "expression": false,
                      "start": 1510,
                      "end": 1524
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1500,
                    "end": 1524
                  }
                ],
                "start": 1490,
                "end": 1530
              },
              "abstract": false,
              "declare": false,
              "start": 1471,
              "end": 1530
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1464,
            "end": 1530
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
              "start": 1542,
              "end": 1555
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1556,
              "end": 1563
            },
            "abstract": false,
            "declare": false,
            "start": 1536,
            "end": 1563
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
                "start": 1582,
                "end": 1594
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
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1617,
                      "end": 1627
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
                                "start": 1655,
                                "end": 1667
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1651,
                              "end": 1669
                            },
                            "start": 1644,
                            "end": 1670
                          }
                        ],
                        "start": 1630,
                        "end": 1680
                      },
                      "expression": false,
                      "start": 1627,
                      "end": 1680
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1605,
                    "end": 1680
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1702,
                      "end": 1712
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
                          "name": "m2_c3_p1_arg",
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
                                "start": 1727,
                                "end": 1739
                              },
                              "typeArguments": null,
                              "start": 1727,
                              "end": 1739
                            },
                            "start": 1725,
                            "end": 1739
                          },
                          "start": 1713,
                          "end": 1739
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1741,
                        "end": 1752
                      },
                      "expression": false,
                      "start": 1712,
                      "end": 1752
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1690,
                    "end": 1752
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1774,
                      "end": 1784
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
                                "start": 1812,
                                "end": 1824
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1808,
                              "end": 1826
                            },
                            "start": 1801,
                            "end": 1827
                          }
                        ],
                        "start": 1787,
                        "end": 1837
                      },
                      "expression": false,
                      "start": 1784,
                      "end": 1837
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1762,
                    "end": 1837
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p2_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1859,
                      "end": 1869
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
                          "name": "m2_c3_p2_arg",
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
                                "start": 1884,
                                "end": 1896
                              },
                              "typeArguments": null,
                              "start": 1884,
                              "end": 1896
                            },
                            "start": 1882,
                            "end": 1896
                          },
                          "start": 1870,
                          "end": 1896
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1898,
                        "end": 1909
                      },
                      "expression": false,
                      "start": 1869,
                      "end": 1909
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1847,
                    "end": 1909
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1931,
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1969,
                                "end": 1982
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 1965,
                              "end": 1984
                            },
                            "start": 1958,
                            "end": 1985
                          }
                        ],
                        "start": 1944,
                        "end": 1995
                      },
                      "expression": false,
                      "start": 1941,
                      "end": 1995
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1919,
                    "end": 1995
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p3_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2017,
                      "end": 2027
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
                          "name": "m2_c3_p3_arg",
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
                                "start": 2042,
                                "end": 2055
                              },
                              "typeArguments": null,
                              "start": 2042,
                              "end": 2055
                            },
                            "start": 2040,
                            "end": 2055
                          },
                          "start": 2028,
                          "end": 2055
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2057,
                        "end": 2068
                      },
                      "expression": false,
                      "start": 2027,
                      "end": 2068
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 2005,
                    "end": 2068
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2089,
                      "end": 2098
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
                            "start": 2102,
                            "end": 2115
                          },
                          "typeArguments": null,
                          "start": 2102,
                          "end": 2115
                        },
                        "start": 2100,
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
                                "name": "m2_C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2141,
                                "end": 2154
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 2137,
                              "end": 2156
                            },
                            "start": 2130,
                            "end": 2157
                          }
                        ],
                        "start": 2116,
                        "end": 2167
                      },
                      "expression": false,
                      "start": 2098,
                      "end": 2167
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2078,
                    "end": 2167
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p4_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2188,
                      "end": 2197
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
                          "name": "m2_c3_p4_arg",
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
                                "start": 2212,
                                "end": 2225
                              },
                              "typeArguments": null,
                              "start": 2212,
                              "end": 2225
                            },
                            "start": 2210,
                            "end": 2225
                          },
                          "start": 2198,
                          "end": 2225
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2227,
                        "end": 2238
                      },
                      "expression": false,
                      "start": 2197,
                      "end": 2238
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2177,
                    "end": 2238
                  }
                ],
                "start": 1595,
                "end": 2244
              },
              "abstract": false,
              "declare": false,
              "start": 1576,
              "end": 2244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1569,
            "end": 2244
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
              "start": 2256,
              "end": 2269
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
                    "name": "p1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2292,
                    "end": 2302
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
                              "start": 2330,
                              "end": 2342
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2326,
                            "end": 2344
                          },
                          "start": 2319,
                          "end": 2345
                        }
                      ],
                      "start": 2305,
                      "end": 2355
                    },
                    "expression": false,
                    "start": 2302,
                    "end": 2355
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2280,
                  "end": 2355
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p1_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2377,
                    "end": 2387
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
                        "name": "m2_c3_p1_arg",
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
                              "start": 2402,
                              "end": 2414
                            },
                            "typeArguments": null,
                            "start": 2402,
                            "end": 2414
                          },
                          "start": 2400,
                          "end": 2414
                        },
                        "start": 2388,
                        "end": 2414
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2416,
                      "end": 2427
                    },
                    "expression": false,
                    "start": 2387,
                    "end": 2427
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2365,
                  "end": 2427
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2449,
                    "end": 2459
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
                              "start": 2487,
                              "end": 2499
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2483,
                            "end": 2501
                          },
                          "start": 2476,
                          "end": 2502
                        }
                      ],
                      "start": 2462,
                      "end": 2512
                    },
                    "expression": false,
                    "start": 2459,
                    "end": 2512
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2437,
                  "end": 2512
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p2_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2534,
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
                        "name": "m2_c3_p2_arg",
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
                              "start": 2559,
                              "end": 2571
                            },
                            "typeArguments": null,
                            "start": 2559,
                            "end": 2571
                          },
                          "start": 2557,
                          "end": 2571
                        },
                        "start": 2545,
                        "end": 2571
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2573,
                      "end": 2584
                    },
                    "expression": false,
                    "start": 2544,
                    "end": 2584
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2522,
                  "end": 2584
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2606,
                    "end": 2616
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
                              "start": 2644,
                              "end": 2657
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2640,
                            "end": 2659
                          },
                          "start": 2633,
                          "end": 2660
                        }
                      ],
                      "start": 2619,
                      "end": 2670
                    },
                    "expression": false,
                    "start": 2616,
                    "end": 2670
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2594,
                  "end": 2670
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p3_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2692,
                    "end": 2702
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
                        "name": "m2_c3_p3_arg",
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
                              "start": 2717,
                              "end": 2730
                            },
                            "typeArguments": null,
                            "start": 2717,
                            "end": 2730
                          },
                          "start": 2715,
                          "end": 2730
                        },
                        "start": 2703,
                        "end": 2730
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2732,
                      "end": 2743
                    },
                    "expression": false,
                    "start": 2702,
                    "end": 2743
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 2680,
                  "end": 2743
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2764,
                    "end": 2773
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
                          "start": 2777,
                          "end": 2790
                        },
                        "typeArguments": null,
                        "start": 2777,
                        "end": 2790
                      },
                      "start": 2775,
                      "end": 2790
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
                              "start": 2816,
                              "end": 2829
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 2812,
                            "end": 2831
                          },
                          "start": 2805,
                          "end": 2832
                        }
                      ],
                      "start": 2791,
                      "end": 2842
                    },
                    "expression": false,
                    "start": 2773,
                    "end": 2842
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2753,
                  "end": 2842
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p4_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2863,
                    "end": 2872
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
                        "name": "m2_c3_p4_arg",
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
                              "start": 2887,
                              "end": 2900
                            },
                            "typeArguments": null,
                            "start": 2887,
                            "end": 2900
                          },
                          "start": 2885,
                          "end": 2900
                        },
                        "start": 2873,
                        "end": 2900
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 2902,
                      "end": 2913
                    },
                    "expression": false,
                    "start": 2872,
                    "end": 2913
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2852,
                  "end": 2913
                }
              ],
              "start": 2270,
              "end": 2919
            },
            "abstract": false,
            "declare": false,
            "start": 2250,
            "end": 2919
          }
        ],
        "start": 1458,
        "end": 2921
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1445,
      "end": 2921
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
        "start": 2929,
        "end": 2939
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
              "start": 2954,
              "end": 2955
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
                "start": 2958,
                "end": 2965
              },
              "expression": false,
              "start": 2955,
              "end": 2965
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 2946,
            "end": 2965
          }
        ],
        "start": 2940,
        "end": 2967
      },
      "abstract": false,
      "declare": false,
      "start": 2923,
      "end": 2967
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
          "start": 2982,
          "end": 2991
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2992,
          "end": 2995
        },
        "abstract": false,
        "declare": false,
        "start": 2976,
        "end": 2995
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2969,
      "end": 2995
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
          "start": 3010,
          "end": 3019
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
                "name": "p1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3038,
                "end": 3048
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
                          "start": 3072,
                          "end": 3081
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3068,
                        "end": 3083
                      },
                      "start": 3061,
                      "end": 3084
                    }
                  ],
                  "start": 3051,
                  "end": 3090
                },
                "expression": false,
                "start": 3048,
                "end": 3090
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3026,
              "end": 3090
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3108,
                "end": 3118
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
                    "name": "m1_c3_p1_arg",
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
                          "start": 3133,
                          "end": 3142
                        },
                        "typeArguments": null,
                        "start": 3133,
                        "end": 3142
                      },
                      "start": 3131,
                      "end": 3142
                    },
                    "start": 3119,
                    "end": 3142
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3144,
                  "end": 3151
                },
                "expression": false,
                "start": 3118,
                "end": 3151
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3096,
              "end": 3151
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3169,
                "end": 3179
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
                          "start": 3203,
                          "end": 3212
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3199,
                        "end": 3214
                      },
                      "start": 3192,
                      "end": 3215
                    }
                  ],
                  "start": 3182,
                  "end": 3221
                },
                "expression": false,
                "start": 3179,
                "end": 3221
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3157,
              "end": 3221
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3239,
                "end": 3249
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
                    "name": "m1_c3_p2_arg",
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
                          "start": 3264,
                          "end": 3273
                        },
                        "typeArguments": null,
                        "start": 3264,
                        "end": 3273
                      },
                      "start": 3262,
                      "end": 3273
                    },
                    "start": 3250,
                    "end": 3273
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3275,
                  "end": 3282
                },
                "expression": false,
                "start": 3249,
                "end": 3282
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3227,
              "end": 3282
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3300,
                "end": 3310
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
                          "start": 3334,
                          "end": 3344
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3330,
                        "end": 3346
                      },
                      "start": 3323,
                      "end": 3347
                    }
                  ],
                  "start": 3313,
                  "end": 3353
                },
                "expression": false,
                "start": 3310,
                "end": 3353
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3288,
              "end": 3353
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p3_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3371,
                "end": 3381
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
                    "name": "m1_c3_p3_arg",
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
                          "start": 3396,
                          "end": 3406
                        },
                        "typeArguments": null,
                        "start": 3396,
                        "end": 3406
                      },
                      "start": 3394,
                      "end": 3406
                    },
                    "start": 3382,
                    "end": 3406
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3408,
                  "end": 3415
                },
                "expression": false,
                "start": 3381,
                "end": 3415
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 3359,
              "end": 3415
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3432,
                "end": 3441
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
                      "start": 3445,
                      "end": 3455
                    },
                    "typeArguments": null,
                    "start": 3445,
                    "end": 3455
                  },
                  "start": 3443,
                  "end": 3455
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
                          "start": 3486,
                          "end": 3496
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 3482,
                        "end": 3498
                      },
                      "start": 3475,
                      "end": 3499
                    }
                  ],
                  "start": 3456,
                  "end": 3513
                },
                "expression": false,
                "start": 3441,
                "end": 3513
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 3421,
              "end": 3513
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "p4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3530,
                "end": 3539
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
                    "name": "m1_c3_p4_arg",
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
                          "start": 3554,
                          "end": 3564
                        },
                        "typeArguments": null,
                        "start": 3554,
                        "end": 3564
                      },
                      "start": 3552,
                      "end": 3564
                    },
                    "start": 3540,
                    "end": 3564
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 3566,
                  "end": 3582
                },
                "expression": false,
                "start": 3539,
                "end": 3582
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 3519,
              "end": 3582
            }
          ],
          "start": 3020,
          "end": 3584
        },
        "abstract": false,
        "declare": false,
        "start": 3004,
        "end": 3584
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2997,
      "end": 3584
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
        "start": 3592,
        "end": 3602
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
              "name": "p1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3621,
              "end": 3631
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
                        "start": 3655,
                        "end": 3664
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3651,
                      "end": 3666
                    },
                    "start": 3644,
                    "end": 3667
                  }
                ],
                "start": 3634,
                "end": 3673
              },
              "expression": false,
              "start": 3631,
              "end": 3673
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3609,
            "end": 3673
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3691,
              "end": 3701
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
                  "name": "m1_c3_p1_arg",
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
                        "start": 3716,
                        "end": 3725
                      },
                      "typeArguments": null,
                      "start": 3716,
                      "end": 3725
                    },
                    "start": 3714,
                    "end": 3725
                  },
                  "start": 3702,
                  "end": 3725
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3727,
                "end": 3734
              },
              "expression": false,
              "start": 3701,
              "end": 3734
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3679,
            "end": 3734
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3752,
              "end": 3762
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
                        "start": 3786,
                        "end": 3795
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3782,
                      "end": 3797
                    },
                    "start": 3775,
                    "end": 3798
                  }
                ],
                "start": 3765,
                "end": 3804
              },
              "expression": false,
              "start": 3762,
              "end": 3804
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3740,
            "end": 3804
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3822,
              "end": 3832
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
                  "name": "m1_c3_p2_arg",
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
                        "start": 3847,
                        "end": 3856
                      },
                      "typeArguments": null,
                      "start": 3847,
                      "end": 3856
                    },
                    "start": 3845,
                    "end": 3856
                  },
                  "start": 3833,
                  "end": 3856
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3858,
                "end": 3865
              },
              "expression": false,
              "start": 3832,
              "end": 3865
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3810,
            "end": 3865
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3883,
              "end": 3893
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
                        "start": 3917,
                        "end": 3927
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 3913,
                      "end": 3929
                    },
                    "start": 3906,
                    "end": 3930
                  }
                ],
                "start": 3896,
                "end": 3936
              },
              "expression": false,
              "start": 3893,
              "end": 3936
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3871,
            "end": 3936
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 3954,
              "end": 3964
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
                  "name": "m1_c3_p3_arg",
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
                        "start": 3979,
                        "end": 3989
                      },
                      "typeArguments": null,
                      "start": 3979,
                      "end": 3989
                    },
                    "start": 3977,
                    "end": 3989
                  },
                  "start": 3965,
                  "end": 3989
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 3991,
                "end": 3998
              },
              "expression": false,
              "start": 3964,
              "end": 3998
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 3942,
            "end": 3998
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4015,
              "end": 4024
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
                    "start": 4028,
                    "end": 4038
                  },
                  "typeArguments": null,
                  "start": 4028,
                  "end": 4038
                },
                "start": 4026,
                "end": 4038
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
                        "start": 4060,
                        "end": 4070
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4056,
                      "end": 4072
                    },
                    "start": 4049,
                    "end": 4073
                  }
                ],
                "start": 4039,
                "end": 4079
              },
              "expression": false,
              "start": 4024,
              "end": 4079
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4004,
            "end": 4079
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p4_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4096,
              "end": 4105
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
                  "name": "m1_c3_p4_arg",
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
                        "start": 4120,
                        "end": 4130
                      },
                      "typeArguments": null,
                      "start": 4120,
                      "end": 4130
                    },
                    "start": 4118,
                    "end": 4130
                  },
                  "start": 4106,
                  "end": 4130
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4132,
                "end": 4139
              },
              "expression": false,
              "start": 4105,
              "end": 4139
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4085,
            "end": 4139
          }
        ],
        "start": 3603,
        "end": 4141
      },
      "abstract": false,
      "declare": false,
      "start": 3586,
      "end": 4141
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4141
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
    "type": "Keyword",
    "value": "private",
    "start": 158,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 166,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 170,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 183,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 197,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 204,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 208,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 240,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 248,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 252,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 263,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 277,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 309,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 317,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 321,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 348,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 355,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 359,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 391,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 399,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 403,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 414,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 428,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 460,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 472,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 499,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 506,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 510,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 543,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 551,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 555,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 566,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 580,
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
    "type": "Punctuator",
    "value": "}",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 613,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 620,
    "end": 623
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 624,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 637,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 671,
    "end": 677
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 678,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 682,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 712,
    "end": 713
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 723,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 730,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 734,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 744,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 758,
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
    "value": "{",
    "start": 770,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 802,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 808,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 829,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 837,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "p1_private",
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
    "value": "{",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 868,
    "end": 874
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 875,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 879,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 888,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 900,
    "end": 901
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 911,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 919,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 923,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 934,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
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
    "value": ")",
    "start": 957,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "private",
    "start": 980,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 988,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 992,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1019,
    "end": 1025
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1026,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1030,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1062,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1070,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1074,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 1085,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1099,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1131,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 1143,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1170,
    "end": 1176
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1177,
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
    "value": "(",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1214,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1222,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "p3_private",
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
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 1237,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1251,
    "end": 1261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1284,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1291,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1295,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1308,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1333,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1377,
    "end": 1383
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1384,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1388,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 1398,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1412,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1445,
    "end": 1454
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1455,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "class",
    "start": 1471,
    "end": 1476
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 1477,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1500,
    "end": 1507
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1508,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1536,
    "end": 1541
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 1542,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1569,
    "end": 1575
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1576,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "m2_C3_public",
    "start": 1582,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1605,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1613,
    "end": 1616
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1617,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1644,
    "end": 1650
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1651,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 1655,
    "end": 1667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1667,
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
    "value": ";",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1690,
    "end": 1697
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1698,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1702,
    "end": 1712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1712,
    "end": 1713
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p1_arg",
    "start": 1713,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 1727,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1741,
    "end": 1742
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1774,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1801,
    "end": 1807
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1808,
    "end": 1811
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 1812,
    "end": 1824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1847,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1859,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p2_arg",
    "start": 1870,
    "end": 1882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1882,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 1884,
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
    "value": "{",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1908,
    "end": 1909
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1919,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1927,
    "end": 1930
  },
  {
    "type": "Identifier",
    "value": "p3_private",
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
    "value": "m2_C2_private",
    "start": 1969,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2005,
    "end": 2012
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2013,
    "end": 2016
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 2017,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2027,
    "end": 2028
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p3_arg",
    "start": 2028,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2042,
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
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2078,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2085,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 2089,
    "end": 2098
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2102,
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
    "value": "m2_C2_private",
    "start": 2141,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2156,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2166,
    "end": 2167
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2177,
    "end": 2183
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2184,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 2188,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2197,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p4_arg",
    "start": 2198,
    "end": 2210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2212,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2227,
    "end": 2228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2250,
    "end": 2255
  },
  {
    "type": "Identifier",
    "value": "m2_C4_private",
    "start": 2256,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2270,
    "end": 2271
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2280,
    "end": 2287
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2288,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 2292,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2319,
    "end": 2325
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2330,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2365,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 2377,
    "end": 2387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p1_arg",
    "start": 2388,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2400,
    "end": 2401
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2402,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2437,
    "end": 2444
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 2449,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2462,
    "end": 2463
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2476,
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
    "value": "m2_C1_public",
    "start": 2487,
    "end": 2499
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2522,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 2534,
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
    "value": "m2_c3_p2_arg",
    "start": 2545,
    "end": 2557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "m2_C1_public",
    "start": 2559,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2594,
    "end": 2601
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2602,
    "end": 2605
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 2606,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2633,
    "end": 2639
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2640,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2644,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2658,
    "end": 2659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2669,
    "end": 2670
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2680,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2688,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 2692,
    "end": 2702
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p3_arg",
    "start": 2703,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2717,
    "end": 2730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2753,
    "end": 2759
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2760,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 2764,
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
    "value": "m2_C2_private",
    "start": 2777,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2805,
    "end": 2811
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2812,
    "end": 2815
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2816,
    "end": 2829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2830,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2852,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 2859,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 2863,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "m2_c3_p4_arg",
    "start": 2873,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Identifier",
    "value": "m2_C2_private",
    "start": 2887,
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
    "value": "{",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2923,
    "end": 2928
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 2929,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2946,
    "end": 2953
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2958,
    "end": 2959
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2969,
    "end": 2975
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2976,
    "end": 2981
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 2982,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2997,
    "end": 3003
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3004,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 3010,
    "end": 3019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3026,
    "end": 3033
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3034,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 3038,
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
    "type": "Keyword",
    "value": "return",
    "start": 3061,
    "end": 3067
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3068,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3072,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3096,
    "end": 3103
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3104,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 3108,
    "end": 3118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3118,
    "end": 3119
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 3119,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3133,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3157,
    "end": 3164
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3165,
    "end": 3168
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 3169,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3192,
    "end": 3198
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3199,
    "end": 3202
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3203,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3227,
    "end": 3234
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3235,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 3239,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 3250,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3264,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3275,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3288,
    "end": 3295
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3296,
    "end": 3299
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 3300,
    "end": 3310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3310,
    "end": 3311
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3311,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3323,
    "end": 3329
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3330,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3334,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3346,
    "end": 3347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3352,
    "end": 3353
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3359,
    "end": 3366
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3367,
    "end": 3370
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 3371,
    "end": 3381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3381,
    "end": 3382
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 3382,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3394,
    "end": 3395
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3396,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3421,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3428,
    "end": 3431
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 3432,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3441,
    "end": 3442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3445,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3475,
    "end": 3481
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3482,
    "end": 3485
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3486,
    "end": 3496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3496,
    "end": 3497
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3497,
    "end": 3498
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3498,
    "end": 3499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3512,
    "end": 3513
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 3519,
    "end": 3525
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3526,
    "end": 3529
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 3530,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 3540,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3554,
    "end": 3564
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3564,
    "end": 3565
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3566,
    "end": 3567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3581,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3586,
    "end": 3591
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 3592,
    "end": 3602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3609,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3617,
    "end": 3620
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 3621,
    "end": 3631
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3631,
    "end": 3632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3632,
    "end": 3633
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3634,
    "end": 3635
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3644,
    "end": 3650
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3651,
    "end": 3654
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3655,
    "end": 3664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3664,
    "end": 3665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3665,
    "end": 3666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3666,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3672,
    "end": 3673
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3679,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3687,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 3691,
    "end": 3701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3701,
    "end": 3702
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 3702,
    "end": 3714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3714,
    "end": 3715
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3716,
    "end": 3725
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3725,
    "end": 3726
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3727,
    "end": 3728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3740,
    "end": 3747
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3748,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 3752,
    "end": 3762
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3762,
    "end": 3763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3763,
    "end": 3764
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3765,
    "end": 3766
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3775,
    "end": 3781
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3782,
    "end": 3785
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3786,
    "end": 3795
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3795,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3796,
    "end": 3797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3810,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3818,
    "end": 3821
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 3822,
    "end": 3832
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3832,
    "end": 3833
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 3833,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 3847,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3858,
    "end": 3859
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3864,
    "end": 3865
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3871,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 3879,
    "end": 3882
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 3883,
    "end": 3893
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3893,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3896,
    "end": 3897
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3906,
    "end": 3912
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3913,
    "end": 3916
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3917,
    "end": 3927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3927,
    "end": 3928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3928,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3935,
    "end": 3936
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 3942,
    "end": 3949
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 3950,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 3954,
    "end": 3964
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3964,
    "end": 3965
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 3965,
    "end": 3977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3977,
    "end": 3978
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 3979,
    "end": 3989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3991,
    "end": 3992
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3997,
    "end": 3998
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4004,
    "end": 4010
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 4011,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 4015,
    "end": 4024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4024,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4025,
    "end": 4026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 4028,
    "end": 4038
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4049,
    "end": 4055
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 4056,
    "end": 4059
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 4060,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4078,
    "end": 4079
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4085,
    "end": 4091
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 4092,
    "end": 4095
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 4096,
    "end": 4105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4105,
    "end": 4106
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 4106,
    "end": 4118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Identifier",
    "value": "C5_private",
    "start": 4120,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4130,
    "end": 4131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4138,
    "end": 4139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4140,
    "end": 4141
  }
]
```
