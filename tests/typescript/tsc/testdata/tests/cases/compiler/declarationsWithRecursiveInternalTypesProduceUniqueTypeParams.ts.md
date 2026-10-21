__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 299
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 300,
              "end": 301
            }
          ],
          "start": 299,
          "end": 302
        },
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 312
            },
            "typeArguments": null,
            "start": 311,
            "end": 312
          },
          "start": 305,
          "end": 312
        },
        "declare": false,
        "start": 291,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 284,
      "end": 313
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null,
          "start": 326,
          "end": 331
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 345
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 346,
                        "end": 347
                      },
                      "typeArguments": null,
                      "start": 346,
                      "end": 347
                    }
                  ],
                  "start": 345,
                  "end": 348
                },
                "start": 342,
                "end": 348
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 332,
              "end": 348
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 351
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 350,
              "end": 351
            }
          ],
          "start": 331,
          "end": 352
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
            },
            "typeArguments": null,
            "start": 355,
            "end": 356
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 358
            },
            "typeArguments": null,
            "start": 357,
            "end": 358
          },
          "start": 355,
          "end": 359
        },
        "declare": false,
        "start": 321,
        "end": 360
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 314,
      "end": 360
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
              "name": "updateIfChanged",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 389
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 393,
                      "end": 394
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 393,
                    "end": 394
                  }
                ],
                "start": 392,
                "end": 395
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 399,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 399,
                      "end": 400
                    },
                    "start": 397,
                    "end": 400
                  },
                  "start": 396,
                  "end": 400
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 417,
                          "end": 423
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 427,
                                  "end": 428
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 427,
                                "end": 428
                              }
                            ],
                            "start": 426,
                            "end": 429
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 433,
                                    "end": 434
                                  },
                                  "typeArguments": null,
                                  "start": 433,
                                  "end": 434
                                },
                                "start": 431,
                                "end": 434
                              },
                              "start": 430,
                              "end": 434
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "update",
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
                                      "name": "u",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 448,
                                            "end": 449
                                          },
                                          "typeArguments": null,
                                          "start": 448,
                                          "end": 449
                                        },
                                        "start": 446,
                                        "end": 449
                                      },
                                      "start": 445,
                                      "end": 449
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
                                        "start": 454,
                                        "end": 455
                                      },
                                      "typeArguments": null,
                                      "start": 454,
                                      "end": 455
                                    },
                                    "start": 451,
                                    "end": 455
                                  },
                                  "start": 444,
                                  "end": 455
                                },
                                "start": 442,
                                "end": 455
                              },
                              "start": 436,
                              "end": 455
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
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
                                      "name": "set",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 476,
                                      "end": 479
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "newU",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "U",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 489,
                                                "end": 490
                                              },
                                              "typeArguments": null,
                                              "start": 489,
                                              "end": 490
                                            },
                                            "start": 487,
                                            "end": 490
                                          },
                                          "start": 483,
                                          "end": 490
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "test": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 495,
                                              "end": 501
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "is",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 502,
                                              "end": 504
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 495,
                                            "end": 504
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "u",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 505,
                                              "end": 506
                                            },
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 508,
                                              "end": 512
                                            }
                                          ],
                                          "optional": false,
                                          "start": 495,
                                          "end": 513
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 516,
                                          "end": 517
                                        },
                                        "alternate": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "update",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 520,
                                            "end": 526
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 527,
                                              "end": 531
                                            }
                                          ],
                                          "optional": false,
                                          "start": 520,
                                          "end": 532
                                        },
                                        "start": 495,
                                        "end": 532
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 482,
                                      "end": 532
                                    },
                                    "definite": false,
                                    "start": 476,
                                    "end": 532
                                  }
                                ],
                                "declare": false,
                                "start": 470,
                                "end": 533
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 549,
                                      "end": 555
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "assign",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 556,
                                      "end": 562
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 549,
                                    "end": 562
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "name": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 577,
                                              "end": 578
                                            },
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Key",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 587,
                                                "end": 590
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 591,
                                                      "end": 592
                                                    },
                                                    "typeArguments": null,
                                                    "start": 591,
                                                    "end": 592
                                                  }
                                                ],
                                                "start": 590,
                                                "end": 593
                                              },
                                              "start": 587,
                                              "end": 593
                                            },
                                            "default": null,
                                            "in": false,
                                            "out": false,
                                            "const": false,
                                            "start": 577,
                                            "end": 593
                                          }
                                        ],
                                        "start": 576,
                                        "end": 594
                                      },
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "K",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 600,
                                                "end": 601
                                              },
                                              "typeArguments": null,
                                              "start": 600,
                                              "end": 601
                                            },
                                            "start": 598,
                                            "end": 601
                                          },
                                          "start": 595,
                                          "end": 601
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 622,
                                          "end": 628
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 629,
                                                "end": 634
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 635,
                                                      "end": 636
                                                    },
                                                    "typeArguments": null,
                                                    "start": 635,
                                                    "end": 636
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 638,
                                                      "end": 639
                                                    },
                                                    "typeArguments": null,
                                                    "start": 638,
                                                    "end": 639
                                                  }
                                                ],
                                                "start": 634,
                                                "end": 640
                                              },
                                              "start": 629,
                                              "end": 640
                                            }
                                          ],
                                          "start": 628,
                                          "end": 641
                                        },
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "expression": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "u",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 642,
                                                "end": 643
                                              },
                                              "property": {
                                                "type": "TSAsExpression",
                                                "expression": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "key",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 644,
                                                  "end": 647
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 657,
                                                      "end": 658
                                                    },
                                                    "typeArguments": null,
                                                    "start": 657,
                                                    "end": 658
                                                  },
                                                  "start": 651,
                                                  "end": 658
                                                },
                                                "start": 644,
                                                "end": 658
                                              },
                                              "optional": false,
                                              "computed": true,
                                              "start": 642,
                                              "end": 659
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 663,
                                                "end": 668
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 669,
                                                      "end": 670
                                                    },
                                                    "typeArguments": null,
                                                    "start": 669,
                                                    "end": 670
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 672,
                                                      "end": 673
                                                    },
                                                    "typeArguments": null,
                                                    "start": 672,
                                                    "end": 673
                                                  }
                                                ],
                                                "start": 668,
                                                "end": 674
                                              },
                                              "start": 663,
                                              "end": 674
                                            },
                                            "start": 642,
                                            "end": 674
                                          },
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "expression": false,
                                            "async": false,
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
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Value",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 680,
                                                      "end": 685
                                                    },
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "K",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 686,
                                                            "end": 687
                                                          },
                                                          "typeArguments": null,
                                                          "start": 686,
                                                          "end": 687
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "U",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 689,
                                                            "end": 690
                                                          },
                                                          "typeArguments": null,
                                                          "start": 689,
                                                          "end": 690
                                                        }
                                                      ],
                                                      "start": 685,
                                                      "end": 691
                                                    },
                                                    "start": 680,
                                                    "end": 691
                                                  },
                                                  "start": 678,
                                                  "end": 691
                                                },
                                                "start": 677,
                                                "end": 691
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "BlockStatement",
                                              "body": [
                                                {
                                                  "type": "ReturnStatement",
                                                  "argument": {
                                                    "type": "CallExpression",
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "update",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 725,
                                                      "end": 731
                                                    },
                                                    "typeArguments": null,
                                                    "arguments": [
                                                      {
                                                        "type": "CallExpression",
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "object": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "Object",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 732,
                                                            "end": 738
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "assign",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 739,
                                                            "end": 745
                                                          },
                                                          "optional": false,
                                                          "computed": false,
                                                          "start": 732,
                                                          "end": 745
                                                        },
                                                        "typeArguments": null,
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "Array",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 746,
                                                                  "end": 751
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "isArray",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 752,
                                                                  "end": 759
                                                                },
                                                                "optional": false,
                                                                "computed": false,
                                                                "start": 746,
                                                                "end": 759
                                                              },
                                                              "typeArguments": null,
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "u",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 760,
                                                                  "end": 761
                                                                }
                                                              ],
                                                              "optional": false,
                                                              "start": 746,
                                                              "end": 762
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "elements": [],
                                                              "start": 765,
                                                              "end": 767
                                                            },
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "properties": [],
                                                              "start": 770,
                                                              "end": 772
                                                            },
                                                            "start": 746,
                                                            "end": 772
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "u",
                                                            "optional": false,
                                                            "typeAnnotation": null,
                                                            "start": 774,
                                                            "end": 775
                                                          },
                                                          {
                                                            "type": "ObjectExpression",
                                                            "properties": [
                                                              {
                                                                "type": "Property",
                                                                "kind": "init",
                                                                "key": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "key",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 780,
                                                                  "end": 783
                                                                },
                                                                "value": {
                                                                  "type": "Identifier",
                                                                  "decorators": [],
                                                                  "name": "v",
                                                                  "optional": false,
                                                                  "typeAnnotation": null,
                                                                  "start": 786,
                                                                  "end": 787
                                                                },
                                                                "method": false,
                                                                "shorthand": false,
                                                                "computed": true,
                                                                "optional": false,
                                                                "start": 779,
                                                                "end": 787
                                                              }
                                                            ],
                                                            "start": 777,
                                                            "end": 789
                                                          }
                                                        ],
                                                        "optional": false,
                                                        "start": 732,
                                                        "end": 790
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "start": 725,
                                                    "end": 791
                                                  },
                                                  "start": 718,
                                                  "end": 792
                                                }
                                              ],
                                              "start": 696,
                                              "end": 810
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 676,
                                            "end": 810
                                          }
                                        ],
                                        "optional": false,
                                        "start": 622,
                                        "end": 811
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 576,
                                      "end": 811
                                    },
                                    {
                                      "type": "ObjectExpression",
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "map",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 827,
                                            "end": 830
                                          },
                                          "value": {
                                            "type": "ArrowFunctionExpression",
                                            "expression": true,
                                            "async": false,
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "updater",
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
                                                        "name": "u",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "decorators": [],
                                                              "name": "U",
                                                              "optional": false,
                                                              "typeAnnotation": null,
                                                              "start": 846,
                                                              "end": 847
                                                            },
                                                            "typeArguments": null,
                                                            "start": 846,
                                                            "end": 847
                                                          },
                                                          "start": 844,
                                                          "end": 847
                                                        },
                                                        "start": 843,
                                                        "end": 847
                                                      }
                                                    ],
                                                    "returnType": {
                                                      "type": "TSTypeAnnotation",
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "U",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 852,
                                                          "end": 853
                                                        },
                                                        "typeArguments": null,
                                                        "start": 852,
                                                        "end": 853
                                                      },
                                                      "start": 849,
                                                      "end": 853
                                                    },
                                                    "start": 842,
                                                    "end": 853
                                                  },
                                                  "start": 840,
                                                  "end": 853
                                                },
                                                "start": 833,
                                                "end": 853
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "set",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 858,
                                                "end": 861
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "updater",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 862,
                                                    "end": 869
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "u",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 870,
                                                      "end": 871
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 862,
                                                  "end": 872
                                                }
                                              ],
                                              "optional": false,
                                              "start": 858,
                                              "end": 873
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 832,
                                            "end": 873
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 827,
                                          "end": 873
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 875,
                                            "end": 878
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 875,
                                            "end": 878
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 875,
                                          "end": 878
                                        }
                                      ],
                                      "start": 825,
                                      "end": 880
                                    }
                                  ],
                                  "optional": false,
                                  "start": 549,
                                  "end": 881
                                },
                                "start": 542,
                                "end": 882
                              }
                            ],
                            "start": 460,
                            "end": 888
                          },
                          "id": null,
                          "generator": false,
                          "start": 426,
                          "end": 888
                        },
                        "definite": false,
                        "start": 417,
                        "end": 888
                      }
                    ],
                    "declare": false,
                    "start": 411,
                    "end": 889
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reduce",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 901,
                        "end": 907
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 908,
                              "end": 909
                            },
                            "typeArguments": null,
                            "start": 908,
                            "end": 909
                          }
                        ],
                        "start": 907,
                        "end": 910
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 912
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
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
                                    "start": 918,
                                    "end": 919
                                  },
                                  "typeArguments": null,
                                  "start": 918,
                                  "end": 919
                                },
                                "start": 916,
                                "end": 919
                              },
                              "start": 915,
                              "end": 919
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 924,
                            "end": 925
                          },
                          "id": null,
                          "generator": false,
                          "start": 914,
                          "end": 925
                        }
                      ],
                      "optional": false,
                      "start": 901,
                      "end": 926
                    },
                    "start": 894,
                    "end": 927
                  }
                ],
                "start": 405,
                "end": 929
              },
              "id": null,
              "generator": false,
              "start": 392,
              "end": 929
            },
            "definite": false,
            "start": 374,
            "end": 929
          }
        ],
        "declare": false,
        "start": 368,
        "end": 930
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 361,
      "end": 930
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
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1025
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
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
                      "start": 1029,
                      "end": 1030
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1039,
                        "end": 1045
                      },
                      "typeArguments": null,
                      "start": 1039,
                      "end": 1045
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1029,
                    "end": 1045
                  }
                ],
                "start": 1028,
                "end": 1046
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
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
                        "start": 1055,
                        "end": 1056
                      },
                      "typeArguments": null,
                      "start": 1055,
                      "end": 1056
                    },
                    "start": 1053,
                    "end": 1056
                  },
                  "start": 1047,
                  "end": 1056
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1084,
                            "end": 1090
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "parent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1092,
                            "end": 1098
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1084,
                          "end": 1098
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "deeper",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1108,
                            "end": 1114
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1117,
                                    "end": 1118
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1127,
                                      "end": 1133
                                    },
                                    "typeArguments": null,
                                    "start": 1127,
                                    "end": 1133
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1117,
                                  "end": 1133
                                }
                              ],
                              "start": 1116,
                              "end": 1134
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "child",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1142,
                                      "end": 1143
                                    },
                                    "typeArguments": null,
                                    "start": 1142,
                                    "end": 1143
                                  },
                                  "start": 1140,
                                  "end": 1143
                                },
                                "start": 1135,
                                "end": 1143
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "testRecFun",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1160,
                                "end": 1170
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSIntersectionType",
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1171,
                                          "end": 1172
                                        },
                                        "typeArguments": null,
                                        "start": 1171,
                                        "end": 1172
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1175,
                                          "end": 1176
                                        },
                                        "typeArguments": null,
                                        "start": 1175,
                                        "end": 1176
                                      }
                                    ],
                                    "start": 1171,
                                    "end": 1176
                                  }
                                ],
                                "start": 1170,
                                "end": 1177
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "parent",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1183,
                                        "end": 1189
                                      },
                                      "start": 1180,
                                      "end": 1189
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1194,
                                        "end": 1199
                                      },
                                      "start": 1191,
                                      "end": 1199
                                    }
                                  ],
                                  "start": 1178,
                                  "end": 1201
                                }
                              ],
                              "optional": false,
                              "start": 1160,
                              "end": 1202
                            },
                            "id": null,
                            "generator": false,
                            "start": 1116,
                            "end": 1202
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1108,
                          "end": 1202
                        }
                      ],
                      "start": 1074,
                      "end": 1208
                    },
                    "start": 1067,
                    "end": 1209
                  }
                ],
                "start": 1061,
                "end": 1211
              },
              "id": null,
              "generator": false,
              "start": 1028,
              "end": 1211
            },
            "definite": false,
            "start": 1015,
            "end": 1211
          }
        ],
        "declare": false,
        "start": 1009,
        "end": 1211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1002,
      "end": 1211
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1218,
            "end": 1220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1223,
              "end": 1233
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1236,
                      "end": 1239
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 1241,
                      "end": 1244
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1236,
                    "end": 1244
                  }
                ],
                "start": 1234,
                "end": 1246
              }
            ],
            "optional": false,
            "start": 1223,
            "end": 1247
          },
          "definite": false,
          "start": 1218,
          "end": 1247
        }
      ],
      "declare": false,
      "start": 1214,
      "end": 1247
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1255
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1256,
              "end": 1262
            },
            "optional": false,
            "computed": false,
            "start": 1253,
            "end": 1262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1266
          },
          "optional": false,
          "computed": false,
          "start": 1253,
          "end": 1266
        },
        "prefix": true,
        "start": 1248,
        "end": 1266
      },
      "directive": null,
      "start": 1248,
      "end": 1267
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1272,
            "end": 1274
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 1277,
                "end": 1279
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1280,
                "end": 1286
              },
              "optional": false,
              "computed": false,
              "start": 1277,
              "end": 1286
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1292
                    },
                    "value": {
                      "type": "Literal",
                      "value": "2",
                      "raw": "'2'",
                      "start": 1294,
                      "end": 1297
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1289,
                    "end": 1297
                  }
                ],
                "start": 1287,
                "end": 1299
              }
            ],
            "optional": false,
            "start": 1277,
            "end": 1300
          },
          "definite": false,
          "start": 1272,
          "end": 1300
        }
      ],
      "declare": false,
      "start": 1268,
      "end": 1300
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1306,
              "end": 1308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1309,
              "end": 1315
            },
            "optional": false,
            "computed": false,
            "start": 1306,
            "end": 1315
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1316,
            "end": 1319
          },
          "optional": false,
          "computed": false,
          "start": 1306,
          "end": 1319
        },
        "prefix": true,
        "start": 1301,
        "end": 1319
      },
      "directive": null,
      "start": 1301,
      "end": 1320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1326,
              "end": 1328
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1335
            },
            "optional": false,
            "computed": false,
            "start": 1326,
            "end": 1335
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1336,
            "end": 1339
          },
          "optional": false,
          "computed": false,
          "start": 1326,
          "end": 1339
        },
        "prefix": true,
        "start": 1321,
        "end": 1339
      },
      "directive": null,
      "start": 1321,
      "end": 1340
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1345,
            "end": 1347
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1350,
                "end": 1352
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1353,
                "end": 1359
              },
              "optional": false,
              "computed": false,
              "start": 1350,
              "end": 1359
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "three",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1362,
                      "end": 1367
                    },
                    "value": {
                      "type": "Literal",
                      "value": "3",
                      "raw": "'3'",
                      "start": 1369,
                      "end": 1372
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1362,
                    "end": 1372
                  }
                ],
                "start": 1360,
                "end": 1374
              }
            ],
            "optional": false,
            "start": 1350,
            "end": 1375
          },
          "definite": false,
          "start": 1345,
          "end": 1375
        }
      ],
      "declare": false,
      "start": 1341,
      "end": 1375
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1381,
              "end": 1383
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1390
            },
            "optional": false,
            "computed": false,
            "start": 1381,
            "end": 1390
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null,
            "start": 1391,
            "end": 1394
          },
          "optional": false,
          "computed": false,
          "start": 1381,
          "end": 1394
        },
        "prefix": true,
        "start": 1376,
        "end": 1394
      },
      "directive": null,
      "start": 1376,
      "end": 1395
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1401,
              "end": 1403
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1404,
              "end": 1410
            },
            "optional": false,
            "computed": false,
            "start": 1401,
            "end": 1410
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null,
            "start": 1411,
            "end": 1414
          },
          "optional": false,
          "computed": false,
          "start": 1401,
          "end": 1414
        },
        "prefix": true,
        "start": 1396,
        "end": 1414
      },
      "directive": null,
      "start": 1396,
      "end": 1415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1421,
              "end": 1423
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1430
            },
            "optional": false,
            "computed": false,
            "start": 1421,
            "end": 1430
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null,
            "start": 1431,
            "end": 1436
          },
          "optional": false,
          "computed": false,
          "start": 1421,
          "end": 1436
        },
        "prefix": true,
        "start": 1416,
        "end": 1436
      },
      "directive": null,
      "start": 1416,
      "end": 1437
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 284,
  "end": 1437
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 284,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 291,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 296,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 305,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 314,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 321,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 326,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 342,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 361,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "updateIfChanged",
    "start": 374,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 402,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 405,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 411,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 436,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 451,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 460,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 470,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 492,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 502,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 508,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 520,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "newU",
    "start": 527,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 532,
    "end": 533
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 542,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 549,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 556,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 579,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "Key",
    "start": 587,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 595,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 603,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 622,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 629,
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
    "value": "K",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 644,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 648,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 651,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 660,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 663,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 668,
    "end": 669
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 677,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 680,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 696,
    "end": 697
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 718,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 725,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 732,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "assign",
    "start": 739,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 746,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 752,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 760,
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
    "value": "?",
    "start": 763,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 766,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "start": 771,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 777,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 825,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "updater",
    "start": 833,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 840,
    "end": 841
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 849,
    "end": 851
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 852,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 855,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 858,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "updater",
    "start": 862,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 881,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 894,
    "end": 900
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 901,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 907,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 911,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 914,
    "end": 915
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 921,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 929,
    "end": 930
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1002,
    "end": 1008
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1009,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1015,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1031,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1039,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1047,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1058,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1067,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1084,
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
    "value": "parent",
    "start": 1092,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1108,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1119,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1127,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 1135,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 1145,
    "end": 1147
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1160,
    "end": 1170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1173,
    "end": 1174
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1176,
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
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1180,
    "end": 1183
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 1183,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1191,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "child",
    "start": 1194,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1214,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "testRecFun",
    "start": 1223,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1236,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1241,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1248,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1253,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1256,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1263,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1268,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1272,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1280,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1289,
    "end": 1292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1292,
    "end": 1293
  },
  {
    "type": "String",
    "value": "'2'",
    "start": 1294,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "void",
    "start": 1301,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1306,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1309,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1316,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1321,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1326,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1329,
    "end": 1335
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1335,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1341,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 1350,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Identifier",
    "value": "deeper",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "String",
    "value": "'3'",
    "start": 1369,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Keyword",
    "value": "void",
    "start": 1376,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1381,
    "end": 1383
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1383,
    "end": 1384
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1384,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 1391,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1396,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1401,
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
    "value": "result",
    "start": 1404,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1410,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1421,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1424,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "three",
    "start": 1431,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1436,
    "end": 1437
  }
]
```
