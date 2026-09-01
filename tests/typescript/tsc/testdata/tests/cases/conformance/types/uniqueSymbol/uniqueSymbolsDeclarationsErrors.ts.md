__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 24,
                  "end": 30
                },
                "start": 17,
                "end": 30
              },
              "start": 15,
              "end": 30
            },
            "start": 14,
            "end": 30
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 30
        }
      ],
      "declare": true,
      "start": 0,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "readonlyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 67
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 76,
                  "end": 82
                },
                "start": 69,
                "end": 82
              },
              "start": 67,
              "end": 82
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 83
          }
        ],
        "start": 44,
        "end": 85
      },
      "declare": false,
      "start": 32,
      "end": 85
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
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 146
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 155,
                    "end": 162
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 166,
                            "end": 174
                          },
                          "start": 164,
                          "end": 174
                        },
                        "start": 163,
                        "end": 174
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 185
                        },
                        "typeArguments": null,
                        "start": 177,
                        "end": 185
                      },
                      "start": 175,
                      "end": 185
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 203,
                            "end": 204
                          },
                          "start": 196,
                          "end": 205
                        }
                      ],
                      "start": 186,
                      "end": 211
                    },
                    "expression": false,
                    "start": 162,
                    "end": 211
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 155,
                  "end": 211
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 224
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
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 228,
                                "end": 229
                              },
                              "typeArguments": null,
                              "start": 228,
                              "end": 229
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "readonlyType",
                                "raw": "\"readonlyType\"",
                                "start": 230,
                                "end": 244
                              },
                              "start": 230,
                              "end": 244
                            },
                            "start": 228,
                            "end": 245
                          },
                          "start": 226,
                          "end": 245
                        },
                        "start": 225,
                        "end": 245
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "I",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 248,
                            "end": 249
                          },
                          "typeArguments": null,
                          "start": 248,
                          "end": 249
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "readonlyType",
                            "raw": "\"readonlyType\"",
                            "start": 250,
                            "end": 264
                          },
                          "start": 250,
                          "end": 264
                        },
                        "start": 248,
                        "end": 265
                      },
                      "start": 246,
                      "end": 265
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "p",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 283,
                            "end": 284
                          },
                          "start": 276,
                          "end": 285
                        }
                      ],
                      "start": 266,
                      "end": 291
                    },
                    "expression": false,
                    "start": 224,
                    "end": 291
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 217,
                  "end": 291
                }
              ],
              "start": 149,
              "end": 293
            },
            "definite": false,
            "start": 143,
            "end": 293
          }
        ],
        "declare": false,
        "start": 137,
        "end": 294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 130,
      "end": 294
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
              "name": "classExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 309,
              "end": 324
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
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
                      "name": "method1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 339,
                      "end": 346
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 357,
                                "end": 358
                              },
                              "typeArguments": null,
                              "start": 350,
                              "end": 358
                            },
                            "start": 348,
                            "end": 358
                          },
                          "start": 347,
                          "end": 358
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeQuery",
                          "exprName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 368,
                            "end": 369
                          },
                          "typeArguments": null,
                          "start": 361,
                          "end": 369
                        },
                        "start": 359,
                        "end": 369
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 387,
                              "end": 388
                            },
                            "start": 380,
                            "end": 389
                          }
                        ],
                        "start": 370,
                        "end": 395
                      },
                      "expression": false,
                      "start": 346,
                      "end": 395
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 339,
                    "end": 395
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 407
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
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "I",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 411,
                                  "end": 412
                                },
                                "typeArguments": null,
                                "start": 411,
                                "end": 412
                              },
                              "indexType": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "readonlyType",
                                  "raw": "\"readonlyType\"",
                                  "start": 413,
                                  "end": 427
                                },
                                "start": 413,
                                "end": 427
                              },
                              "start": 411,
                              "end": 428
                            },
                            "start": 409,
                            "end": 428
                          },
                          "start": 408,
                          "end": 428
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 431,
                              "end": 432
                            },
                            "typeArguments": null,
                            "start": 431,
                            "end": 432
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "readonlyType",
                              "raw": "\"readonlyType\"",
                              "start": 433,
                              "end": 447
                            },
                            "start": 433,
                            "end": 447
                          },
                          "start": 431,
                          "end": 448
                        },
                        "start": 429,
                        "end": 448
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 467
                            },
                            "start": 459,
                            "end": 468
                          }
                        ],
                        "start": 449,
                        "end": 474
                      },
                      "expression": false,
                      "start": 407,
                      "end": 474
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 400,
                    "end": 474
                  }
                ],
                "start": 333,
                "end": 476
              },
              "abstract": false,
              "declare": false,
              "start": 327,
              "end": 476
            },
            "definite": false,
            "start": 309,
            "end": 476
          }
        ],
        "declare": false,
        "start": 303,
        "end": 477
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 296,
      "end": 477
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "funcInferredReturnType",
          "optional": false,
          "typeAnnotation": null,
          "start": 495,
          "end": 517
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 531
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 542,
                              "end": 543
                            },
                            "typeArguments": null,
                            "start": 535,
                            "end": 543
                          },
                          "start": 533,
                          "end": 543
                        },
                        "start": 532,
                        "end": 543
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 546,
                        "end": 550
                      },
                      "start": 544,
                      "end": 550
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 525,
                    "end": 550
                  }
                ],
                "start": 523,
                "end": 552
              },
              "start": 521,
              "end": 552
            },
            "start": 518,
            "end": 552
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 570
              },
              "start": 560,
              "end": 571
            }
          ],
          "start": 554,
          "end": 573
        },
        "expression": false,
        "start": 486,
        "end": 573
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 479,
      "end": 573
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 592,
          "end": 627
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 636
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 639,
                  "end": 642
                },
                "start": 637,
                "end": 642
              },
              "accessibility": null,
              "static": false,
              "start": 634,
              "end": 643
            }
          ],
          "start": 628,
          "end": 645
        },
        "declare": false,
        "start": 582,
        "end": 645
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 575,
      "end": 645
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null,
          "start": 664,
          "end": 696
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 710,
                  "end": 713
                },
                "start": 708,
                "end": 713
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 703,
              "end": 714
            }
          ],
          "start": 697,
          "end": 716
        },
        "declare": false,
        "start": 654,
        "end": 716
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 647,
      "end": 716
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 767
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 778
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 781,
                  "end": 784
                },
                "start": 779,
                "end": 784
              },
              "accessibility": null,
              "static": false,
              "start": 776,
              "end": 785
            }
          ],
          "start": 770,
          "end": 787
        },
        "declare": false,
        "start": 725,
        "end": 787
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 718,
      "end": 787
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeLiteralWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null,
          "start": 801,
          "end": 835
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 845,
                "end": 846
              },
              "computed": true,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 851,
                  "end": 854
                },
                "start": 849,
                "end": 854
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 844,
              "end": 855
            }
          ],
          "start": 838,
          "end": 857
        },
        "declare": false,
        "start": 796,
        "end": 857
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 789,
      "end": 857
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedProperties",
          "optional": false,
          "typeAnnotation": null,
          "start": 872,
          "end": 903
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 915,
                  "end": 918
                },
                "start": 913,
                "end": 918
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 910,
              "end": 919
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 933
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 936,
                  "end": 939
                },
                "start": 934,
                "end": 939
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 924,
              "end": 940
            }
          ],
          "start": 904,
          "end": 942
        },
        "abstract": false,
        "declare": false,
        "start": 866,
        "end": 942
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 859,
      "end": 942
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedMethods",
          "optional": false,
          "typeAnnotation": null,
          "start": 957,
          "end": 985
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 993,
                "end": 994
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
                  "start": 998,
                  "end": 1000
                },
                "expression": false,
                "start": 995,
                "end": 1000
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 992,
              "end": 1000
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1013,
                "end": 1014
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
                  "start": 1018,
                  "end": 1020
                },
                "expression": false,
                "start": 1015,
                "end": 1020
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1005,
              "end": 1020
            }
          ],
          "start": 986,
          "end": 1022
        },
        "abstract": false,
        "declare": false,
        "start": 951,
        "end": 1022
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 944,
      "end": 1022
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ClassWithPrivateNamedAccessors",
          "optional": false,
          "typeAnnotation": null,
          "start": 1037,
          "end": 1067
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
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1079,
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
                    "type": "TSAnyKeyword",
                    "start": 1085,
                    "end": 1088
                  },
                  "start": 1083,
                  "end": 1088
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1098,
                        "end": 1107
                      },
                      "start": 1091,
                      "end": 1108
                    }
                  ],
                  "start": 1089,
                  "end": 1110
                },
                "expression": false,
                "start": 1081,
                "end": 1110
              },
              "kind": "get",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1074,
              "end": 1110
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1121
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1126,
                        "end": 1129
                      },
                      "start": 1124,
                      "end": 1129
                    },
                    "start": 1123,
                    "end": 1129
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1131,
                  "end": 1134
                },
                "expression": false,
                "start": 1122,
                "end": 1134
              },
              "kind": "set",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1115,
              "end": 1134
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1151,
                "end": 1152
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
                    "type": "TSAnyKeyword",
                    "start": 1157,
                    "end": 1160
                  },
                  "start": 1155,
                  "end": 1160
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1170,
                        "end": 1179
                      },
                      "start": 1163,
                      "end": 1180
                    }
                  ],
                  "start": 1161,
                  "end": 1182
                },
                "expression": false,
                "start": 1153,
                "end": 1182
              },
              "kind": "get",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1139,
              "end": 1182
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1200
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1205,
                        "end": 1208
                      },
                      "start": 1203,
                      "end": 1208
                    },
                    "start": 1202,
                    "end": 1208
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 1210,
                  "end": 1213
                },
                "expression": false,
                "start": 1201,
                "end": 1213
              },
              "kind": "set",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1187,
              "end": 1213
            }
          ],
          "start": 1068,
          "end": 1215
        },
        "abstract": false,
        "declare": false,
        "start": 1031,
        "end": 1215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1024,
      "end": 1215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1215
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 17,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 24,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 46,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "readonlyType",
    "start": 55,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 130,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 137,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 166,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "s",
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
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 196,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 229,
    "end": 230
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 230,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 249,
    "end": 250
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 250,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Keyword",
    "value": "return",
    "start": 276,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "p",
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
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 296,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 303,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "classExpression",
    "start": 309,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 325,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 327,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "method1",
    "start": 339,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 350,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 361,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 380,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 387,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "method2",
    "start": 400,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 408,
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
    "value": "I",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 413,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 432,
    "end": 433
  },
  {
    "type": "String",
    "value": "\"readonlyType\"",
    "start": 433,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 459,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 479,
    "end": 485
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 486,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "funcInferredReturnType",
    "start": 495,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 518,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 525,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 535,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 544,
    "end": 545
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 546,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 560,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 567,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 572,
    "end": 573
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 575,
    "end": 581
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 582,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "InterfaceWithPrivateNamedProperties",
    "start": 592,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 639,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 647,
    "end": 653
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 654,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "InterfaceWithPrivateNamedMethods",
    "start": 664,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 705,
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
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 710,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 715,
    "end": 716
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 718,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 725,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "TypeLiteralWithPrivateNamedProperties",
    "start": 730,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "[",
    "start": 776,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 781,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 786,
    "end": 787
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 789,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 796,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "TypeLiteralWithPrivateNamedMethods",
    "start": 801,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
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
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 856,
    "end": 857
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 859,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 866,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "ClassWithPrivateNamedProperties",
    "start": 872,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 915,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 924,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 931,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 936,
    "end": 939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 939,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 944,
    "end": 950
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 951,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "ClassWithPrivateNamedMethods",
    "start": 957,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 992,
    "end": 993
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 994,
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
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1024,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "ClassWithPrivateNamedAccessors",
    "start": 1037,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1098,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1123,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1126,
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
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1146,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1152,
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
    "value": ":",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1157,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1163,
    "end": 1169
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1170,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1187,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1194,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1205,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1214,
    "end": 1215
  }
]
```
