__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "OverloadUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 36,
                    "end": 42
                  },
                  "start": 34,
                  "end": 42
                },
                "start": 31,
                "end": 42
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 45,
                  "end": 52
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 53,
                      "end": 60
                    }
                  ],
                  "start": 52,
                  "end": 61
                },
                "start": 45,
                "end": 61
              },
              "start": 43,
              "end": 61
            },
            "start": 30,
            "end": 62
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 73,
                    "end": 79
                  },
                  "start": 71,
                  "end": 79
                },
                "start": 68,
                "end": 79
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 99,
                                  "end": 104
                                },
                                "typeArguments": null,
                                "start": 99,
                                "end": 104
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 107,
                                "end": 111
                              }
                            ],
                            "start": 99,
                            "end": 111
                          },
                          "start": 97,
                          "end": 111
                        },
                        "start": 92,
                        "end": 111
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 121,
                            "end": 128
                          },
                          "start": 119,
                          "end": 128
                        },
                        "start": 113,
                        "end": 128
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 133,
                        "end": 137
                      },
                      "start": 130,
                      "end": 137
                    },
                    "start": 91,
                    "end": 137
                  },
                  "start": 89,
                  "end": 137
                },
                "start": 81,
                "end": 137
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 140,
                "end": 144
              },
              "start": 138,
              "end": 144
            },
            "start": 67,
            "end": 145
          }
        ],
        "start": 24,
        "end": 147
      },
      "declare": false,
      "start": 0,
      "end": 147
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "overloadInterface",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "OverloadUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 193
                },
                "typeArguments": null,
                "start": 180,
                "end": 193
              },
              "start": 178,
              "end": 193
            },
            "start": 161,
            "end": 193
          },
          "init": null,
          "definite": false,
          "start": 161,
          "end": 193
        }
      ],
      "declare": true,
      "start": 149,
      "end": 194
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "overloadInline",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 236,
                            "end": 242
                          },
                          "start": 234,
                          "end": 242
                        },
                        "start": 231,
                        "end": 242
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 247,
                          "end": 254
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSBooleanKeyword",
                              "start": 255,
                              "end": 262
                            }
                          ],
                          "start": 254,
                          "end": 263
                        },
                        "start": 247,
                        "end": 263
                      },
                      "start": 244,
                      "end": 263
                    },
                    "start": 230,
                    "end": 263
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 278,
                            "end": 284
                          },
                          "start": 276,
                          "end": 284
                        },
                        "start": 273,
                        "end": 284
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "callback",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "error",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 304,
                                          "end": 309
                                        },
                                        "typeArguments": null,
                                        "start": 304,
                                        "end": 309
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 312,
                                        "end": 316
                                      }
                                    ],
                                    "start": 304,
                                    "end": 316
                                  },
                                  "start": 302,
                                  "end": 316
                                },
                                "start": 297,
                                "end": 316
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "result",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 326,
                                    "end": 333
                                  },
                                  "start": 324,
                                  "end": 333
                                },
                                "start": 318,
                                "end": 333
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 338,
                                "end": 342
                              },
                              "start": 335,
                              "end": 342
                            },
                            "start": 296,
                            "end": 342
                          },
                          "start": 294,
                          "end": 342
                        },
                        "start": 286,
                        "end": 342
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 347,
                        "end": 351
                      },
                      "start": 344,
                      "end": 351
                    },
                    "start": 272,
                    "end": 351
                  }
                ],
                "start": 227,
                "end": 352
              },
              "start": 221,
              "end": 352
            },
            "start": 207,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 207,
          "end": 352
        }
      ],
      "declare": true,
      "start": 195,
      "end": 352
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 368
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
                "name": "classMethodInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 375,
                "end": 395
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
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 403
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 415
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInterface",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 423,
                                "end": 440
                              },
                              "typeArguments": null,
                              "start": 416,
                              "end": 440
                            }
                          ],
                          "start": 415,
                          "end": 441
                        },
                        "start": 405,
                        "end": 441
                      },
                      "start": 403,
                      "end": 441
                    },
                    "value": null,
                    "start": 396,
                    "end": 441
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 443,
                  "end": 445
                },
                "expression": false,
                "start": 395,
                "end": 445
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 375,
              "end": 445
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classMethodInline",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 467
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
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 471,
                      "end": 475
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 487
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInline",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 495,
                                "end": 509
                              },
                              "typeArguments": null,
                              "start": 488,
                              "end": 509
                            }
                          ],
                          "start": 487,
                          "end": 510
                        },
                        "start": 477,
                        "end": 510
                      },
                      "start": 475,
                      "end": 510
                    },
                    "value": null,
                    "start": 468,
                    "end": 510
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 512,
                  "end": 514
                },
                "expression": false,
                "start": 467,
                "end": 514
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 450,
              "end": 514
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldFunctionInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 520,
                "end": 547
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 563,
                      "end": 567
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 569,
                          "end": 579
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInterface",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 587,
                                "end": 604
                              },
                              "typeArguments": null,
                              "start": 580,
                              "end": 604
                            }
                          ],
                          "start": 579,
                          "end": 605
                        },
                        "start": 569,
                        "end": 605
                      },
                      "start": 567,
                      "end": 605
                    },
                    "value": null,
                    "start": 560,
                    "end": 605
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 607,
                  "end": 609
                },
                "expression": false,
                "start": 550,
                "end": 609
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 520,
              "end": 609
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldFunctionInline",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 638
              },
              "typeAnnotation": null,
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 654,
                      "end": 658
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 670
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInline",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 678,
                                "end": 692
                              },
                              "typeArguments": null,
                              "start": 671,
                              "end": 692
                            }
                          ],
                          "start": 670,
                          "end": 693
                        },
                        "start": 660,
                        "end": 693
                      },
                      "start": 658,
                      "end": 693
                    },
                    "value": null,
                    "start": 651,
                    "end": 693
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 695,
                  "end": 697
                },
                "expression": false,
                "start": 641,
                "end": 697
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 614,
              "end": 697
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldArrowInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 727
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 734,
                      "end": 738
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 740,
                          "end": 750
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInterface",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 758,
                                "end": 775
                              },
                              "typeArguments": null,
                              "start": 751,
                              "end": 775
                            }
                          ],
                          "start": 750,
                          "end": 776
                        },
                        "start": 740,
                        "end": 776
                      },
                      "start": 738,
                      "end": 776
                    },
                    "value": null,
                    "start": 731,
                    "end": 776
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 781,
                  "end": 783
                },
                "id": null,
                "generator": false,
                "start": 730,
                "end": 783
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 703,
              "end": 783
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldArrowInline",
                "optional": false,
                "typeAnnotation": null,
                "start": 788,
                "end": 809
              },
              "typeAnnotation": null,
              "value": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 816,
                      "end": 820
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Parameters",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 822,
                          "end": 832
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "overloadInline",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 840,
                                "end": 854
                              },
                              "typeArguments": null,
                              "start": 833,
                              "end": 854
                            }
                          ],
                          "start": 832,
                          "end": 855
                        },
                        "start": 822,
                        "end": 855
                      },
                      "start": 820,
                      "end": 855
                    },
                    "value": null,
                    "start": 813,
                    "end": 855
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 860,
                  "end": 862
                },
                "id": null,
                "generator": false,
                "start": 812,
                "end": 862
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 788,
              "end": 862
            }
          ],
          "start": 369,
          "end": 864
        },
        "abstract": false,
        "declare": false,
        "start": 361,
        "end": 864
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 354,
      "end": 864
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 882,
          "end": 899
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 903,
              "end": 907
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 909,
                  "end": 919
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overloadInterface",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 927,
                        "end": 944
                      },
                      "typeArguments": null,
                      "start": 920,
                      "end": 944
                    }
                  ],
                  "start": 919,
                  "end": 945
                },
                "start": 909,
                "end": 945
              },
              "start": 907,
              "end": 945
            },
            "value": null,
            "start": 900,
            "end": 945
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 947,
          "end": 949
        },
        "expression": false,
        "start": 873,
        "end": 949
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 866,
      "end": 949
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FunctionInline",
          "optional": false,
          "typeAnnotation": null,
          "start": 966,
          "end": 980
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 984,
              "end": 988
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Parameters",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 1000
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "overloadInline",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1008,
                        "end": 1022
                      },
                      "typeArguments": null,
                      "start": 1001,
                      "end": 1022
                    }
                  ],
                  "start": 1000,
                  "end": 1023
                },
                "start": 990,
                "end": 1023
              },
              "start": 988,
              "end": 1023
            },
            "value": null,
            "start": 981,
            "end": 1023
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 1025,
          "end": 1027
        },
        "expression": false,
        "start": 957,
        "end": 1027
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 950,
      "end": 1027
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionAssignInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1041,
              "end": 1064
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1080,
                    "end": 1084
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1086,
                        "end": 1096
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "overloadInterface",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1104,
                              "end": 1121
                            },
                            "typeArguments": null,
                            "start": 1097,
                            "end": 1121
                          }
                        ],
                        "start": 1096,
                        "end": 1122
                      },
                      "start": 1086,
                      "end": 1122
                    },
                    "start": 1084,
                    "end": 1122
                  },
                  "value": null,
                  "start": 1077,
                  "end": 1122
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1124,
                "end": 1126
              },
              "expression": false,
              "start": 1067,
              "end": 1126
            },
            "definite": false,
            "start": 1041,
            "end": 1126
          }
        ],
        "declare": false,
        "start": 1035,
        "end": 1126
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1028,
      "end": 1126
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FunctionAssignInline",
              "optional": false,
              "typeAnnotation": null,
              "start": 1140,
              "end": 1160
            },
            "init": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1180
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1182,
                        "end": 1192
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "overloadInline",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1200,
                              "end": 1214
                            },
                            "typeArguments": null,
                            "start": 1193,
                            "end": 1214
                          }
                        ],
                        "start": 1192,
                        "end": 1215
                      },
                      "start": 1182,
                      "end": 1215
                    },
                    "start": 1180,
                    "end": 1215
                  },
                  "value": null,
                  "start": 1173,
                  "end": 1215
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1217,
                "end": 1219
              },
              "expression": false,
              "start": 1163,
              "end": 1219
            },
            "definite": false,
            "start": 1140,
            "end": 1219
          }
        ],
        "declare": false,
        "start": 1134,
        "end": 1219
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1127,
      "end": 1219
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1247
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1254,
                    "end": 1258
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1260,
                        "end": 1270
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "overloadInterface",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1278,
                              "end": 1295
                            },
                            "typeArguments": null,
                            "start": 1271,
                            "end": 1295
                          }
                        ],
                        "start": 1270,
                        "end": 1296
                      },
                      "start": 1260,
                      "end": 1296
                    },
                    "start": 1258,
                    "end": 1296
                  },
                  "value": null,
                  "start": 1251,
                  "end": 1296
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1301,
                "end": 1303
              },
              "id": null,
              "generator": false,
              "start": 1250,
              "end": 1303
            },
            "definite": false,
            "start": 1233,
            "end": 1303
          }
        ],
        "declare": false,
        "start": 1227,
        "end": 1303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1220,
      "end": 1303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArrowInline",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1328
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1335,
                    "end": 1339
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1341,
                        "end": 1351
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "overloadInline",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1359,
                              "end": 1373
                            },
                            "typeArguments": null,
                            "start": 1352,
                            "end": 1373
                          }
                        ],
                        "start": 1351,
                        "end": 1374
                      },
                      "start": 1341,
                      "end": 1374
                    },
                    "start": 1339,
                    "end": 1374
                  },
                  "value": null,
                  "start": 1332,
                  "end": 1374
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1379,
                "end": 1381
              },
              "id": null,
              "generator": false,
              "start": 1331,
              "end": 1381
            },
            "definite": false,
            "start": 1317,
            "end": 1381
          }
        ],
        "declare": false,
        "start": 1311,
        "end": 1381
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1304,
      "end": 1381
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1381
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "OverloadUnion",
    "start": 10,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 68,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 105,
    "end": 106
  },
  {
    "type": "Null",
    "value": "null",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 121,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 130,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 133,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 140,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 149,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 157,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 161,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "OverloadUnion",
    "start": 180,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 195,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 203,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 207,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 244,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 255,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 273,
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
    "value": "string",
    "start": 278,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 286,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 297,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 310,
    "end": 311
  },
  {
    "type": "Null",
    "value": "null",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 318,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 335,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 344,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 347,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 351,
    "end": 352
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 354,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 361,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "classMethodInterface",
    "start": 375,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 396,
    "end": 399
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 399,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 405,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 416,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 423,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "classMethodInline",
    "start": 450,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 471,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 477,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 488,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 495,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "classFieldFunctionInterface",
    "start": 520,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 550,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 563,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 569,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 579,
    "end": 580
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 580,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 587,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "classFieldFunctionInline",
    "start": 614,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 641,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 650,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 651,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 654,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 660,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 670,
    "end": 671
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 671,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 678,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "classFieldArrowInterface",
    "start": 703,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 731,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 734,
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
    "value": "Parameters",
    "start": 740,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 751,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 758,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 775,
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
    "value": "=>",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "classFieldArrowInline",
    "start": 788,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 813,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 816,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 822,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 833,
    "end": 839
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 840,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 857,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 863,
    "end": 864
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 866,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 873,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "FunctionInterface",
    "start": 882,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 900,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 903,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 909,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 919,
    "end": 920
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 920,
    "end": 926
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 927,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 948,
    "end": 949
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 950,
    "end": 956
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 957,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "FunctionInline",
    "start": 966,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 984,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 990,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 1008,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1028,
    "end": 1034
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "FunctionAssignInterface",
    "start": 1041,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1067,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1077,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1080,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1086,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1097,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 1104,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "{",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1134,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "FunctionAssignInline",
    "start": 1140,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1163,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1173,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1176,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1182,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 1200,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1227,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "ArrowInterface",
    "start": 1233,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1251,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1254,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1260,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1271,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "overloadInterface",
    "start": 1278,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1311,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "ArrowInline",
    "start": 1317,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1332,
    "end": 1335
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1335,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 1341,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1352,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "overloadInline",
    "start": 1359,
    "end": 1373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1373,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1380,
    "end": 1381
  }
]
```
