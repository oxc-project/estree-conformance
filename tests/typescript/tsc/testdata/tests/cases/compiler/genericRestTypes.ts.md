__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tail",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 126
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
              "start": 127,
              "end": 128
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 137,
                "end": 140
              },
              "start": 137,
              "end": 142
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 127,
            "end": 142
          }
        ],
        "start": 126,
        "end": 143
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSFunctionType",
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
                "start": 151,
                "end": 155
              },
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
              "value": null,
              "start": 148,
              "end": 158
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 163,
              "end": 166
            },
            "start": 160,
            "end": 166
          },
          "start": 147,
          "end": 166
        },
        "extendsType": {
          "type": "TSFunctionType",
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "head",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 184,
                  "end": 187
                },
                "start": 182,
                "end": 187
              },
              "start": 178,
              "end": 187
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "tail",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 196
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 204,
                    "end": 205
                  },
                  "start": 198,
                  "end": 205
                },
                "start": 196,
                "end": 205
              },
              "value": null,
              "start": 189,
              "end": 205
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 210,
              "end": 213
            },
            "start": 207,
            "end": 213
          },
          "start": 177,
          "end": 213
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 218
          },
          "typeArguments": null,
          "start": 217,
          "end": 218
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 221,
          "end": 226
        },
        "start": 146,
        "end": 226
      },
      "declare": false,
      "start": 117,
      "end": 227
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyFunctionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 257,
                "end": 263
              },
              "start": 255,
              "end": 263
            },
            "start": 252,
            "end": 263
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 270,
                "end": 276
              },
              "start": 268,
              "end": 276
            },
            "start": 265,
            "end": 276
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSBooleanKeyword",
            "start": 281,
            "end": 288
          },
          "start": 278,
          "end": 288
        },
        "start": 251,
        "end": 288
      },
      "declare": false,
      "start": 229,
      "end": 289
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Explicit",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 304
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
              "start": 311,
              "end": 315
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 321
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 332
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyFunctionType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 333,
                              "end": 347
                            },
                            "typeArguments": null,
                            "start": 333,
                            "end": 347
                          }
                        ],
                        "start": 332,
                        "end": 348
                      },
                      "start": 322,
                      "end": 348
                    }
                  ],
                  "start": 321,
                  "end": 349
                },
                "start": 317,
                "end": 349
              },
              "start": 315,
              "end": 349
            },
            "value": null,
            "start": 308,
            "end": 349
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 364
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyFunctionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 379
                  },
                  "typeArguments": null,
                  "start": 365,
                  "end": 379
                }
              ],
              "start": 364,
              "end": 380
            },
            "start": 354,
            "end": 380
          },
          "start": 351,
          "end": 380
        },
        "start": 307,
        "end": 380
      },
      "declare": false,
      "start": 291,
      "end": 381
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bind1",
        "optional": false,
        "typeAnnotation": null,
        "start": 416,
        "end": 421
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
              "start": 422,
              "end": 423
            },
            "constraint": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "head",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
                    },
                    "start": 437,
                    "end": 442
                  },
                  "start": 433,
                  "end": 442
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 451
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 453,
                        "end": 456
                      },
                      "start": 453,
                      "end": 458
                    },
                    "start": 451,
                    "end": 458
                  },
                  "value": null,
                  "start": 444,
                  "end": 458
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 463,
                  "end": 466
                },
                "start": 460,
                "end": 466
              },
              "start": 432,
              "end": 466
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 422,
            "end": 466
          }
        ],
        "start": 421,
        "end": 467
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
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
              "start": 474,
              "end": 478
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 484
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Parameters",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 495
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
                              "start": 496,
                              "end": 497
                            },
                            "typeArguments": null,
                            "start": 496,
                            "end": 497
                          }
                        ],
                        "start": 495,
                        "end": 498
                      },
                      "start": 485,
                      "end": 498
                    }
                  ],
                  "start": 484,
                  "end": 499
                },
                "start": 480,
                "end": 499
              },
              "start": 478,
              "end": 499
            },
            "value": null,
            "start": 471,
            "end": 499
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 514
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
                    "start": 515,
                    "end": 516
                  },
                  "typeArguments": null,
                  "start": 515,
                  "end": 516
                }
              ],
              "start": 514,
              "end": 517
            },
            "start": 504,
            "end": 517
          },
          "start": 501,
          "end": 517
        },
        "start": 470,
        "end": 517
      },
      "declare": false,
      "start": 411,
      "end": 518
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 531
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bind1",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 539
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyFunctionType",
                "optional": false,
                "typeAnnotation": null,
                "start": 540,
                "end": 554
              },
              "typeArguments": null,
              "start": 540,
              "end": 554
            }
          ],
          "start": 539,
          "end": 555
        },
        "start": 534,
        "end": 555
      },
      "declare": false,
      "start": 519,
      "end": 556
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 620
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 621,
              "end": 622
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 631,
                "end": 634
              },
              "start": 631,
              "end": 636
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 636
          }
        ],
        "start": 620,
        "end": 637
      },
      "params": [],
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
                  "name": "fn1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 661,
                              "end": 667
                            },
                            "start": 659,
                            "end": 667
                          },
                          "start": 658,
                          "end": 667
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 672,
                            "end": 676
                          },
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
                                "start": 678,
                                "end": 679
                              },
                              "typeArguments": null,
                              "start": 678,
                              "end": 679
                            },
                            "start": 676,
                            "end": 679
                          },
                          "value": null,
                          "start": 669,
                          "end": 679
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 684,
                          "end": 688
                        },
                        "start": 681,
                        "end": 688
                      },
                      "start": 657,
                      "end": 688
                    },
                    "start": 655,
                    "end": 688
                  },
                  "start": 652,
                  "end": 688
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 692,
                      "end": 693
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 698,
                        "end": 699
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 695,
                      "end": 699
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 704,
                    "end": 705
                  },
                  "id": null,
                  "generator": false,
                  "start": 691,
                  "end": 705
                },
                "definite": false,
                "start": 652,
                "end": 705
              }
            ],
            "declare": false,
            "start": 646,
            "end": 706
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                            "start": 726,
                            "end": 730
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNeverKeyword",
                              "start": 732,
                              "end": 737
                            },
                            "start": 730,
                            "end": 737
                          },
                          "value": null,
                          "start": 723,
                          "end": 737
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 742,
                          "end": 746
                        },
                        "start": 739,
                        "end": 746
                      },
                      "start": 722,
                      "end": 746
                    },
                    "start": 720,
                    "end": 746
                  },
                  "start": 717,
                  "end": 746
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 752
                },
                "definite": false,
                "start": 717,
                "end": 752
              }
            ],
            "declare": false,
            "start": 711,
            "end": 753
          }
        ],
        "start": 640,
        "end": 755
      },
      "expression": false,
      "start": 586,
      "end": 755
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 766,
        "end": 792
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 793,
              "end": 794
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 803,
                "end": 806
              },
              "start": 803,
              "end": 808
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 793,
            "end": 808
          }
        ],
        "start": 792,
        "end": 809
      },
      "params": [],
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
                  "name": "fn1",
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
                          "name": "cb",
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 838,
                                      "end": 844
                                    },
                                    "start": 836,
                                    "end": 844
                                  },
                                  "start": 835,
                                  "end": 844
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 849,
                                    "end": 853
                                  },
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
                                        "start": 855,
                                        "end": 856
                                      },
                                      "typeArguments": null,
                                      "start": 855,
                                      "end": 856
                                    },
                                    "start": 853,
                                    "end": 856
                                  },
                                  "value": null,
                                  "start": 846,
                                  "end": 856
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 861,
                                  "end": 865
                                },
                                "start": 858,
                                "end": 865
                              },
                              "start": 834,
                              "end": 865
                            },
                            "start": 832,
                            "end": 865
                          },
                          "start": 830,
                          "end": 865
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 870,
                          "end": 874
                        },
                        "start": 867,
                        "end": 874
                      },
                      "start": 829,
                      "end": 874
                    },
                    "start": 827,
                    "end": 874
                  },
                  "start": 824,
                  "end": 874
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 880
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 885,
                    "end": 887
                  },
                  "id": null,
                  "generator": false,
                  "start": 877,
                  "end": 887
                },
                "definite": false,
                "start": 824,
                "end": 887
              }
            ],
            "declare": false,
            "start": 818,
            "end": 888
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
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
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
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
                                    "start": 913,
                                    "end": 917
                                  },
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNeverKeyword",
                                      "start": 919,
                                      "end": 924
                                    },
                                    "start": 917,
                                    "end": 924
                                  },
                                  "value": null,
                                  "start": 910,
                                  "end": 924
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 929,
                                  "end": 933
                                },
                                "start": 926,
                                "end": 933
                              },
                              "start": 909,
                              "end": 933
                            },
                            "start": 907,
                            "end": 933
                          },
                          "start": 905,
                          "end": 933
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 938,
                          "end": 942
                        },
                        "start": 935,
                        "end": 942
                      },
                      "start": 904,
                      "end": 942
                    },
                    "start": 902,
                    "end": 942
                  },
                  "start": 899,
                  "end": 942
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 945,
                  "end": 948
                },
                "definite": false,
                "start": 899,
                "end": 948
              }
            ],
            "declare": false,
            "start": 893,
            "end": 949
          }
        ],
        "start": 812,
        "end": 951
      },
      "expression": false,
      "start": 757,
      "end": 951
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assignmentWithComplexRest3",
        "optional": false,
        "typeAnnotation": null,
        "start": 962,
        "end": 988
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 989,
              "end": 990
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 999,
                "end": 1002
              },
              "start": 999,
              "end": 1004
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 989,
            "end": 1004
          }
        ],
        "start": 988,
        "end": 1005
      },
      "params": [],
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
                  "name": "fn1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1029,
                              "end": 1035
                            },
                            "start": 1027,
                            "end": 1035
                          },
                          "start": 1026,
                          "end": 1035
                        },
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1040,
                            "end": 1044
                          },
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
                                "start": 1046,
                                "end": 1047
                              },
                              "typeArguments": null,
                              "start": 1046,
                              "end": 1047
                            },
                            "start": 1044,
                            "end": 1047
                          },
                          "value": null,
                          "start": 1037,
                          "end": 1047
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1052,
                          "end": 1056
                        },
                        "start": 1049,
                        "end": 1056
                      },
                      "start": 1025,
                      "end": 1056
                    },
                    "start": 1023,
                    "end": 1056
                  },
                  "start": 1020,
                  "end": 1056
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1060,
                      "end": 1061
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1066,
                        "end": 1067
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 1063,
                      "end": 1067
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1073
                  },
                  "id": null,
                  "generator": false,
                  "start": 1059,
                  "end": 1073
                },
                "definite": false,
                "start": 1020,
                "end": 1073
              }
            ],
            "declare": false,
            "start": 1014,
            "end": 1074
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                            "start": 1094,
                            "end": 1098
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIntersectionType",
                              "types": [
                                {
                                  "type": "TSTypeLiteral",
                                  "members": [
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
                                        "start": 1101,
                                        "end": 1102
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "a",
                                            "raw": "\"a\"",
                                            "start": 1104,
                                            "end": 1107
                                          },
                                          "start": 1104,
                                          "end": 1107
                                        },
                                        "start": 1102,
                                        "end": 1107
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 1101,
                                      "end": 1107
                                    }
                                  ],
                                  "start": 1100,
                                  "end": 1108
                                },
                                {
                                  "type": "TSTypeLiteral",
                                  "members": [
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
                                        "start": 1112,
                                        "end": 1113
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "b",
                                            "raw": "\"b\"",
                                            "start": 1115,
                                            "end": 1118
                                          },
                                          "start": 1115,
                                          "end": 1118
                                        },
                                        "start": 1113,
                                        "end": 1118
                                      },
                                      "accessibility": null,
                                      "static": false,
                                      "start": 1112,
                                      "end": 1118
                                    }
                                  ],
                                  "start": 1111,
                                  "end": 1119
                                }
                              ],
                              "start": 1100,
                              "end": 1119
                            },
                            "start": 1098,
                            "end": 1119
                          },
                          "value": null,
                          "start": 1091,
                          "end": 1119
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1124,
                          "end": 1128
                        },
                        "start": 1121,
                        "end": 1128
                      },
                      "start": 1090,
                      "end": 1128
                    },
                    "start": 1088,
                    "end": 1128
                  },
                  "start": 1085,
                  "end": 1128
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1131,
                  "end": 1134
                },
                "definite": false,
                "start": 1085,
                "end": 1134
              }
            ],
            "declare": false,
            "start": 1079,
            "end": 1135
          }
        ],
        "start": 1008,
        "end": 1137
      },
      "expression": false,
      "start": 953,
      "end": 1137
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 1137
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 117,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 122,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 129,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 151,
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
    "value": "=>",
    "start": 160,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 168,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 198,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 207,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 221,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 229,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "MyFunctionType",
    "start": 234,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 252,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 265,
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
    "value": "string",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 278,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 291,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "Explicit",
    "start": 296,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 311,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 321,
    "end": 322
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 322,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "MyFunctionType",
    "start": 333,
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
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 351,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 354,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "MyFunctionType",
    "start": 365,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 411,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Bind1",
    "start": 416,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 424,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "head",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 439,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "tail",
    "start": 447,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 453,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 460,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 471,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 474,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Tail",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 485,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 497,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 501,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 504,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 519,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "Generic",
    "start": 524,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "Bind1",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "MyFunctionType",
    "start": 540,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 586,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "assignmentWithComplexRest",
    "start": 595,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 621,
    "end": 622
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 623,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 631,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "(",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 640,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 646,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 661,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 669,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 678,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 679,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 681,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 684,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 691,
    "end": 692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 695,
    "end": 698
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 701,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 711,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 717,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 723,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 732,
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
    "value": "=>",
    "start": 739,
    "end": 741
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 742,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 749,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 757,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "assignmentWithComplexRest2",
    "start": 766,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 795,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 807,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "{",
    "start": 812,
    "end": 813
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 818,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 824,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 827,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 830,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 835,
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
    "value": "string",
    "start": 838,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 846,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 856,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 858,
    "end": 860
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 867,
    "end": 869
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 870,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 878,
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
    "value": "=>",
    "start": 882,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 887,
    "end": 888
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 893,
    "end": 898
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 899,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 905,
    "end": 907
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 909,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 910,
    "end": 913
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 919,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 924,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 926,
    "end": 928
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 929,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 935,
    "end": 937
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 945,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 953,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "assignmentWithComplexRest3",
    "start": 962,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 988,
    "end": 989
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 991,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1002,
    "end": 1003
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1003,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1014,
    "end": 1019
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1029,
    "end": 1035
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1037,
    "end": 1040
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 1040,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1052,
    "end": 1056
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1069,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1079,
    "end": 1084
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1088,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 1091,
    "end": 1094
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1104,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1115,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 1121,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1124,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "fn1",
    "start": 1131,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137
  }
]
```
