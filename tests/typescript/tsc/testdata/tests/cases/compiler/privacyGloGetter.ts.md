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
                      "name": "p1_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 173
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
                                "start": 201,
                                "end": 210
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 197,
                              "end": 212
                            },
                            "start": 190,
                            "end": 213
                          }
                        ],
                        "start": 176,
                        "end": 223
                      },
                      "expression": false,
                      "start": 173,
                      "end": 223
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 151,
                    "end": 223
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
                      "start": 245,
                      "end": 255
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
                                "start": 270,
                                "end": 279
                              },
                              "typeArguments": null,
                              "start": 270,
                              "end": 279
                            },
                            "start": 268,
                            "end": 279
                          },
                          "start": 256,
                          "end": 279
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 281,
                        "end": 292
                      },
                      "expression": false,
                      "start": 255,
                      "end": 292
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 233,
                    "end": 292
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
                      "start": 314,
                      "end": 324
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
                                "start": 352,
                                "end": 361
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 348,
                              "end": 363
                            },
                            "start": 341,
                            "end": 364
                          }
                        ],
                        "start": 327,
                        "end": 374
                      },
                      "expression": false,
                      "start": 324,
                      "end": 374
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 302,
                    "end": 374
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
                      "start": 396,
                      "end": 406
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
                                "start": 421,
                                "end": 430
                              },
                              "typeArguments": null,
                              "start": 421,
                              "end": 430
                            },
                            "start": 419,
                            "end": 430
                          },
                          "start": 407,
                          "end": 430
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 432,
                        "end": 443
                      },
                      "expression": false,
                      "start": 406,
                      "end": 443
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 384,
                    "end": 443
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
                      "start": 465,
                      "end": 475
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
                                "start": 503,
                                "end": 513
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 499,
                              "end": 515
                            },
                            "start": 492,
                            "end": 516
                          }
                        ],
                        "start": 478,
                        "end": 526
                      },
                      "expression": false,
                      "start": 475,
                      "end": 526
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 453,
                    "end": 526
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
                      "start": 548,
                      "end": 558
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
                                "start": 573,
                                "end": 583
                              },
                              "typeArguments": null,
                              "start": 573,
                              "end": 583
                            },
                            "start": 571,
                            "end": 583
                          },
                          "start": 559,
                          "end": 583
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 585,
                        "end": 596
                      },
                      "expression": false,
                      "start": 558,
                      "end": 596
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 536,
                    "end": 596
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
                      "start": 617,
                      "end": 626
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
                            "start": 630,
                            "end": 640
                          },
                          "typeArguments": null,
                          "start": 630,
                          "end": 640
                        },
                        "start": 628,
                        "end": 640
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
                                "start": 675,
                                "end": 685
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 671,
                              "end": 687
                            },
                            "start": 664,
                            "end": 688
                          }
                        ],
                        "start": 641,
                        "end": 706
                      },
                      "expression": false,
                      "start": 626,
                      "end": 706
                    },
                    "kind": "get",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 606,
                    "end": 706
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
                      "start": 727,
                      "end": 736
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
                                "start": 751,
                                "end": 761
                              },
                              "typeArguments": null,
                              "start": 751,
                              "end": 761
                            },
                            "start": 749,
                            "end": 761
                          },
                          "start": 737,
                          "end": 761
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 763,
                        "end": 783
                      },
                      "expression": false,
                      "start": 736,
                      "end": 783
                    },
                    "kind": "set",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 716,
                    "end": 783
                  }
                ],
                "start": 141,
                "end": 789
              },
              "abstract": false,
              "declare": false,
              "start": 125,
              "end": 789
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 118,
            "end": 789
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
              "start": 801,
              "end": 811
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
                    "start": 834,
                    "end": 844
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
                              "start": 872,
                              "end": 881
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 868,
                            "end": 883
                          },
                          "start": 861,
                          "end": 884
                        }
                      ],
                      "start": 847,
                      "end": 894
                    },
                    "expression": false,
                    "start": 844,
                    "end": 894
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 822,
                  "end": 894
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
                    "start": 916,
                    "end": 926
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
                              "start": 941,
                              "end": 950
                            },
                            "typeArguments": null,
                            "start": 941,
                            "end": 950
                          },
                          "start": 939,
                          "end": 950
                        },
                        "start": 927,
                        "end": 950
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 952,
                      "end": 963
                    },
                    "expression": false,
                    "start": 926,
                    "end": 963
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 904,
                  "end": 963
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
                    "start": 985,
                    "end": 995
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
                              "start": 1023,
                              "end": 1032
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1019,
                            "end": 1034
                          },
                          "start": 1012,
                          "end": 1035
                        }
                      ],
                      "start": 998,
                      "end": 1045
                    },
                    "expression": false,
                    "start": 995,
                    "end": 1045
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 973,
                  "end": 1045
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
                    "start": 1067,
                    "end": 1077
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
                        "start": 1078,
                        "end": 1101
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1103,
                      "end": 1114
                    },
                    "expression": false,
                    "start": 1077,
                    "end": 1114
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1055,
                  "end": 1114
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
                    "start": 1136,
                    "end": 1146
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
                              "start": 1174,
                              "end": 1184
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1170,
                            "end": 1186
                          },
                          "start": 1163,
                          "end": 1187
                        }
                      ],
                      "start": 1149,
                      "end": 1197
                    },
                    "expression": false,
                    "start": 1146,
                    "end": 1197
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1124,
                  "end": 1197
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
                    "start": 1219,
                    "end": 1229
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
                              "start": 1244,
                              "end": 1254
                            },
                            "typeArguments": null,
                            "start": 1244,
                            "end": 1254
                          },
                          "start": 1242,
                          "end": 1254
                        },
                        "start": 1230,
                        "end": 1254
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1256,
                      "end": 1267
                    },
                    "expression": false,
                    "start": 1229,
                    "end": 1267
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "private",
                  "start": 1207,
                  "end": 1267
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
                    "start": 1288,
                    "end": 1297
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
                          "start": 1301,
                          "end": 1311
                        },
                        "typeArguments": null,
                        "start": 1301,
                        "end": 1311
                      },
                      "start": 1299,
                      "end": 1311
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
                              "start": 1337,
                              "end": 1347
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1333,
                            "end": 1349
                          },
                          "start": 1326,
                          "end": 1350
                        }
                      ],
                      "start": 1312,
                      "end": 1360
                    },
                    "expression": false,
                    "start": 1297,
                    "end": 1360
                  },
                  "kind": "get",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1277,
                  "end": 1360
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
                    "start": 1381,
                    "end": 1390
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
                              "start": 1405,
                              "end": 1415
                            },
                            "typeArguments": null,
                            "start": 1405,
                            "end": 1415
                          },
                          "start": 1403,
                          "end": 1415
                        },
                        "start": 1391,
                        "end": 1415
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1417,
                      "end": 1428
                    },
                    "expression": false,
                    "start": 1390,
                    "end": 1428
                  },
                  "kind": "set",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1370,
                  "end": 1428
                }
              ],
              "start": 812,
              "end": 1434
            },
            "abstract": false,
            "declare": false,
            "start": 795,
            "end": 1434
          }
        ],
        "start": 13,
        "end": 1436
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1436
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
        "start": 1444,
        "end": 1453
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1454,
        "end": 1457
      },
      "abstract": false,
      "declare": false,
      "start": 1438,
      "end": 1457
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
        "start": 1465,
        "end": 1474
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
              "start": 1493,
              "end": 1503
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
                        "start": 1527,
                        "end": 1536
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1523,
                      "end": 1538
                    },
                    "start": 1516,
                    "end": 1539
                  }
                ],
                "start": 1506,
                "end": 1545
              },
              "expression": false,
              "start": 1503,
              "end": 1545
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1481,
            "end": 1545
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
              "start": 1563,
              "end": 1573
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
                        "start": 1588,
                        "end": 1597
                      },
                      "typeArguments": null,
                      "start": 1588,
                      "end": 1597
                    },
                    "start": 1586,
                    "end": 1597
                  },
                  "start": 1574,
                  "end": 1597
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1599,
                "end": 1606
              },
              "expression": false,
              "start": 1573,
              "end": 1606
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1551,
            "end": 1606
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
              "start": 1624,
              "end": 1634
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
                        "start": 1658,
                        "end": 1667
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 1654,
                      "end": 1669
                    },
                    "start": 1647,
                    "end": 1670
                  }
                ],
                "start": 1637,
                "end": 1676
              },
              "expression": false,
              "start": 1634,
              "end": 1676
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1612,
            "end": 1676
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
              "start": 1694,
              "end": 1704
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
                        "start": 1719,
                        "end": 1728
                      },
                      "typeArguments": null,
                      "start": 1719,
                      "end": 1728
                    },
                    "start": 1717,
                    "end": 1728
                  },
                  "start": 1705,
                  "end": 1728
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1730,
                "end": 1737
              },
              "expression": false,
              "start": 1704,
              "end": 1737
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 1682,
            "end": 1737
          }
        ],
        "start": 1475,
        "end": 1739
      },
      "abstract": false,
      "declare": false,
      "start": 1459,
      "end": 1739
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1739
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
    "value": "get",
    "start": 159,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 163,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 197,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 233,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 241,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 245,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 256,
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
    "value": "C1_public",
    "start": 270,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 291,
    "end": 292
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 302,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 310,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 314,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 341,
    "end": 347
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 348,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 352,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 384,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 392,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 396,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 407,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 421,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 453,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 465,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 492,
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
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 536,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 544,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 548,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 559,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 573,
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
    "type": "Punctuator",
    "value": "}",
    "start": 595,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 606,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 613,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "p4_public",
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
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 630,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 641,
    "end": 642
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 664,
    "end": 670
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 671,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 675,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 716,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 727,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 737,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 749,
    "end": 750
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 751,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 795,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 801,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 822,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 830,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 834,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 861,
    "end": 867
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 868,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 872,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 893,
    "end": 894
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 904,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 912,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 916,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 926,
    "end": 927
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 927,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 939,
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
    "value": ")",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "value": "private",
    "start": 973,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 985,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 998,
    "end": 999
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1012,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1023,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1055,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1067,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 1078,
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
    "value": "{",
    "start": 1103,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1124,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1132,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "p3_private",
    "start": 1136,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1170,
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
    "value": "(",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1207,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "p3_private",
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
    "type": "Identifier",
    "value": "m1_c3_p3_arg",
    "start": 1230,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1244,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1277,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1288,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1301,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1326,
    "end": 1332
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1333,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1337,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1348,
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
    "value": "}",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1370,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1377,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "p4_public",
    "start": 1381,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p4_arg",
    "start": 1391,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
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
    "value": ")",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1433,
    "end": 1434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1438,
    "end": 1443
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1444,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1459,
    "end": 1464
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 1465,
    "end": 1474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1475,
    "end": 1476
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1489,
    "end": 1492
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1493,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1506,
    "end": 1507
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1516,
    "end": 1522
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1527,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1551,
    "end": 1558
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1559,
    "end": 1562
  },
  {
    "type": "Identifier",
    "value": "p1_private",
    "start": 1563,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p1_arg",
    "start": 1574,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1588,
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
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1612,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1624,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1635,
    "end": 1636
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1647,
    "end": 1653
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1658,
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
    "start": 1675,
    "end": 1676
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1682,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1690,
    "end": 1693
  },
  {
    "type": "Identifier",
    "value": "p2_private",
    "start": 1694,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "m1_c3_p2_arg",
    "start": 1705,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "C6_public",
    "start": 1719,
    "end": 1728
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1728,
    "end": 1729
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1738,
    "end": 1739
  }
]
```
