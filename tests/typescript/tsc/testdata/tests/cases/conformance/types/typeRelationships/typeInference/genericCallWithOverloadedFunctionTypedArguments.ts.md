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
        "name": "NonGenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 215
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "type": "TSBooleanKeyword",
                                  "start": 243,
                                  "end": 250
                                },
                                "start": 241,
                                "end": 250
                              },
                              "start": 240,
                              "end": 250
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 253,
                              "end": 260
                            },
                            "start": 251,
                            "end": 260
                          },
                          "start": 239,
                          "end": 261
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 274,
                                  "end": 280
                                },
                                "start": 272,
                                "end": 280
                              },
                              "start": 271,
                              "end": 280
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 283,
                              "end": 289
                            },
                            "start": 281,
                            "end": 289
                          },
                          "start": 270,
                          "end": 290
                        }
                      ],
                      "start": 229,
                      "end": 296
                    },
                    "start": 227,
                    "end": 296
                  },
                  "start": 226,
                  "end": 296
                },
                "init": null,
                "definite": false,
                "start": 226,
                "end": 296
              }
            ],
            "declare": false,
            "start": 222,
            "end": 296
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 315
            },
            "generator": false,
            "async": false,
            "declare": false,
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
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 328
                    },
                    "typeArguments": null,
                    "start": 320,
                    "end": 328
                  },
                  "start": 318,
                  "end": 328
                },
                "start": 316,
                "end": 328
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 347,
                    "end": 349
                  },
                  "start": 340,
                  "end": 350
                }
              ],
              "start": 330,
              "end": 356
            },
            "expression": false,
            "start": 302,
            "end": 356
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 370,
                    "end": 374
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 375,
                      "end": 376
                    }
                  ],
                  "optional": false,
                  "start": 370,
                  "end": 377
                },
                "definite": false,
                "start": 366,
                "end": 377
              }
            ],
            "declare": false,
            "start": 362,
            "end": 378
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 389
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 392,
                    "end": 396
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 398,
                              "end": 399
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 398,
                            "end": 399
                          }
                        ],
                        "start": 397,
                        "end": 400
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 404,
                                "end": 405
                              },
                              "typeArguments": null,
                              "start": 404,
                              "end": 405
                            },
                            "start": 402,
                            "end": 405
                          },
                          "start": 401,
                          "end": 405
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 410,
                        "end": 411
                      },
                      "id": null,
                      "generator": false,
                      "start": 397,
                      "end": 411
                    }
                  ],
                  "optional": false,
                  "start": 392,
                  "end": 412
                },
                "definite": false,
                "start": 387,
                "end": 412
              }
            ],
            "declare": false,
            "start": 383,
            "end": 413
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
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 424
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 427,
                    "end": 431
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                          "start": 432,
                          "end": 433
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "id": null,
                      "generator": false,
                      "start": 432,
                      "end": 438
                    }
                  ],
                  "optional": false,
                  "start": 427,
                  "end": 439
                },
                "definite": false,
                "start": 422,
                "end": 439
              }
            ],
            "declare": false,
            "start": 418,
            "end": 440
          }
        ],
        "start": 216,
        "end": 446
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 446
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 474
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 490,
              "end": 494
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
                    "start": 495,
                    "end": 496
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 495,
                  "end": 496
                }
              ],
              "start": 494,
              "end": 497
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 508,
                                  "end": 509
                                },
                                "typeArguments": null,
                                "start": 508,
                                "end": 509
                              },
                              "start": 506,
                              "end": 509
                            },
                            "start": 505,
                            "end": 509
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 512,
                            "end": 518
                          },
                          "start": 510,
                          "end": 518
                        },
                        "start": 504,
                        "end": 519
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSNumberKeyword",
                                "start": 524,
                                "end": 530
                              },
                              "start": 522,
                              "end": 530
                            },
                            "start": 521,
                            "end": 530
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
                              "start": 533,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 533,
                            "end": 534
                          },
                          "start": 531,
                          "end": 534
                        },
                        "start": 520,
                        "end": 534
                      }
                    ],
                    "start": 502,
                    "end": 536
                  },
                  "start": 500,
                  "end": 536
                },
                "start": 498,
                "end": 536
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 557
                  },
                  "start": 548,
                  "end": 558
                }
              ],
              "start": 538,
              "end": 564
            },
            "expression": false,
            "start": 481,
            "end": 564
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 574,
                  "end": 576
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 583
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                          "start": 584,
                          "end": 585
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "id": null,
                      "generator": false,
                      "start": 584,
                      "end": 590
                    }
                  ],
                  "optional": false,
                  "start": 579,
                  "end": 591
                },
                "definite": false,
                "start": 574,
                "end": 591
              }
            ],
            "declare": false,
            "start": 570,
            "end": 592
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 711,
                                  "end": 712
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 711,
                                "end": 712
                              }
                            ],
                            "start": 710,
                            "end": 713
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
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
                                    "start": 717,
                                    "end": 718
                                  },
                                  "typeArguments": null,
                                  "start": 717,
                                  "end": 718
                                },
                                "start": 715,
                                "end": 718
                              },
                              "start": 714,
                              "end": 718
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 721,
                              "end": 727
                            },
                            "start": 719,
                            "end": 727
                          },
                          "start": 710,
                          "end": 728
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 730,
                                  "end": 731
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 730,
                                "end": 731
                              }
                            ],
                            "start": 729,
                            "end": 732
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 736,
                                  "end": 742
                                },
                                "start": 734,
                                "end": 742
                              },
                              "start": 733,
                              "end": 742
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
                                "start": 745,
                                "end": 746
                              },
                              "typeArguments": null,
                              "start": 745,
                              "end": 746
                            },
                            "start": 743,
                            "end": 746
                          },
                          "start": 729,
                          "end": 747
                        }
                      ],
                      "start": 708,
                      "end": 749
                    },
                    "start": 706,
                    "end": 749
                  },
                  "start": 705,
                  "end": 749
                },
                "init": null,
                "definite": false,
                "start": 705,
                "end": 749
              }
            ],
            "declare": false,
            "start": 701,
            "end": 749
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 758,
                  "end": 760
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 763,
                    "end": 767
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 768,
                      "end": 769
                    }
                  ],
                  "optional": false,
                  "start": 763,
                  "end": 770
                },
                "definite": false,
                "start": 758,
                "end": 770
              }
            ],
            "declare": false,
            "start": 754,
            "end": 771
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 817,
              "end": 821
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
                    "start": 822,
                    "end": 823
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 822,
                  "end": 823
                }
              ],
              "start": 821,
              "end": 824
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 835,
                                  "end": 836
                                },
                                "typeArguments": null,
                                "start": 835,
                                "end": 836
                              },
                              "start": 833,
                              "end": 836
                            },
                            "start": 832,
                            "end": 836
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 839,
                            "end": 845
                          },
                          "start": 837,
                          "end": 845
                        },
                        "start": 831,
                        "end": 846
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 851,
                                  "end": 852
                                },
                                "typeArguments": null,
                                "start": 851,
                                "end": 852
                              },
                              "start": 849,
                              "end": 852
                            },
                            "start": 848,
                            "end": 852
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "start": 858,
                                  "end": 859
                                },
                                "typeArguments": null,
                                "start": 858,
                                "end": 859
                              },
                              "start": 856,
                              "end": 859
                            },
                            "start": 854,
                            "end": 859
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 862,
                            "end": 868
                          },
                          "start": 860,
                          "end": 868
                        },
                        "start": 847,
                        "end": 868
                      }
                    ],
                    "start": 829,
                    "end": 870
                  },
                  "start": 827,
                  "end": 870
                },
                "start": 825,
                "end": 870
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 889,
                    "end": 891
                  },
                  "start": 882,
                  "end": 892
                }
              ],
              "start": 872,
              "end": 898
            },
            "expression": false,
            "start": 808,
            "end": 898
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 910
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 913,
                    "end": 917
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
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
                          "start": 918,
                          "end": 919
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 923,
                        "end": 924
                      },
                      "id": null,
                      "generator": false,
                      "start": 918,
                      "end": 924
                    }
                  ],
                  "optional": false,
                  "start": 913,
                  "end": 925
                },
                "definite": false,
                "start": 908,
                "end": 925
              }
            ],
            "declare": false,
            "start": 904,
            "end": 926
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1039,
                  "end": 1041
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1048
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1050,
                              "end": 1051
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1050,
                            "end": 1051
                          }
                        ],
                        "start": 1049,
                        "end": 1052
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1056,
                                "end": 1057
                              },
                              "typeArguments": null,
                              "start": 1056,
                              "end": 1057
                            },
                            "start": 1054,
                            "end": 1057
                          },
                          "start": 1053,
                          "end": 1057
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1062,
                        "end": 1064
                      },
                      "id": null,
                      "generator": false,
                      "start": 1049,
                      "end": 1064
                    }
                  ],
                  "optional": false,
                  "start": 1044,
                  "end": 1065
                },
                "definite": false,
                "start": 1039,
                "end": 1065
              }
            ],
            "declare": false,
            "start": 1035,
            "end": 1066
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
                  "name": "r11",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1106,
                  "end": 1109
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1116
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1118,
                              "end": 1119
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1118,
                            "end": 1119
                          }
                        ],
                        "start": 1117,
                        "end": 1120
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1124,
                                "end": 1125
                              },
                              "typeArguments": null,
                              "start": 1124,
                              "end": 1125
                            },
                            "start": 1122,
                            "end": 1125
                          },
                          "start": 1121,
                          "end": 1125
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1131,
                                "end": 1132
                              },
                              "typeArguments": null,
                              "start": 1131,
                              "end": 1132
                            },
                            "start": 1129,
                            "end": 1132
                          },
                          "start": 1127,
                          "end": 1132
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1137,
                        "end": 1139
                      },
                      "id": null,
                      "generator": false,
                      "start": 1117,
                      "end": 1139
                    }
                  ],
                  "optional": false,
                  "start": 1112,
                  "end": 1140
                },
                "definite": false,
                "start": 1106,
                "end": 1140
              }
            ],
            "declare": false,
            "start": 1102,
            "end": 1141
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1187,
              "end": 1191
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
                    "start": 1192,
                    "end": 1193
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1192,
                  "end": 1193
                }
              ],
              "start": 1191,
              "end": 1194
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
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
                      "start": 1197,
                      "end": 1198
                    },
                    "typeArguments": null,
                    "start": 1197,
                    "end": 1198
                  },
                  "start": 1196,
                  "end": 1198
                },
                "start": 1195,
                "end": 1198
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1210,
                                  "end": 1211
                                },
                                "typeArguments": null,
                                "start": 1210,
                                "end": 1211
                              },
                              "start": 1208,
                              "end": 1211
                            },
                            "start": 1207,
                            "end": 1211
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1214,
                            "end": 1220
                          },
                          "start": 1212,
                          "end": 1220
                        },
                        "start": 1206,
                        "end": 1221
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1226,
                                  "end": 1227
                                },
                                "typeArguments": null,
                                "start": 1226,
                                "end": 1227
                              },
                              "start": 1224,
                              "end": 1227
                            },
                            "start": 1223,
                            "end": 1227
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "start": 1233,
                                  "end": 1234
                                },
                                "typeArguments": null,
                                "start": 1233,
                                "end": 1234
                              },
                              "start": 1231,
                              "end": 1234
                            },
                            "start": 1229,
                            "end": 1234
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1237,
                            "end": 1243
                          },
                          "start": 1235,
                          "end": 1243
                        },
                        "start": 1222,
                        "end": 1243
                      }
                    ],
                    "start": 1204,
                    "end": 1245
                  },
                  "start": 1202,
                  "end": 1245
                },
                "start": 1200,
                "end": 1245
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
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1266
                  },
                  "start": 1257,
                  "end": 1267
                }
              ],
              "start": 1247,
              "end": 1273
            },
            "expression": false,
            "start": 1178,
            "end": 1273
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
                  "name": "r12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1283,
                  "end": 1286
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1289,
                    "end": 1293
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1294,
                      "end": 1295
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1298,
                          "end": 1299
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1304,
                        "end": 1305
                      },
                      "id": null,
                      "generator": false,
                      "start": 1297,
                      "end": 1305
                    }
                  ],
                  "optional": false,
                  "start": 1289,
                  "end": 1306
                },
                "definite": false,
                "start": 1283,
                "end": 1306
              }
            ],
            "declare": false,
            "start": 1279,
            "end": 1307
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
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1413
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1420
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1421,
                      "end": 1422
                    },
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1425,
                              "end": 1426
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1425,
                            "end": 1426
                          }
                        ],
                        "start": 1424,
                        "end": 1427
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1431,
                                "end": 1432
                              },
                              "typeArguments": null,
                              "start": 1431,
                              "end": 1432
                            },
                            "start": 1429,
                            "end": 1432
                          },
                          "start": 1428,
                          "end": 1432
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1437,
                        "end": 1439
                      },
                      "id": null,
                      "generator": false,
                      "start": 1424,
                      "end": 1439
                    }
                  ],
                  "optional": false,
                  "start": 1416,
                  "end": 1440
                },
                "definite": false,
                "start": 1410,
                "end": 1440
              }
            ],
            "declare": false,
            "start": 1406,
            "end": 1441
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 1550,
                                  "end": 1551
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1550,
                                "end": 1551
                              }
                            ],
                            "start": 1549,
                            "end": 1552
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
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
                                    "start": 1556,
                                    "end": 1557
                                  },
                                  "typeArguments": null,
                                  "start": 1556,
                                  "end": 1557
                                },
                                "start": 1554,
                                "end": 1557
                              },
                              "start": 1553,
                              "end": 1557
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1560,
                              "end": 1566
                            },
                            "start": 1558,
                            "end": 1566
                          },
                          "start": 1549,
                          "end": 1567
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
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
                                  "start": 1569,
                                  "end": 1570
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1569,
                                "end": 1570
                              }
                            ],
                            "start": 1568,
                            "end": 1571
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1575,
                                  "end": 1581
                                },
                                "start": 1573,
                                "end": 1581
                              },
                              "start": 1572,
                              "end": 1581
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
                                "start": 1584,
                                "end": 1585
                              },
                              "typeArguments": null,
                              "start": 1584,
                              "end": 1585
                            },
                            "start": 1582,
                            "end": 1585
                          },
                          "start": 1568,
                          "end": 1586
                        }
                      ],
                      "start": 1547,
                      "end": 1588
                    },
                    "start": 1545,
                    "end": 1588
                  },
                  "start": 1544,
                  "end": 1588
                },
                "init": null,
                "definite": false,
                "start": 1544,
                "end": 1588
              }
            ],
            "declare": false,
            "start": 1540,
            "end": 1588
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
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1597,
                  "end": 1600
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1603,
                    "end": 1607
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1608,
                      "end": 1609
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1611,
                      "end": 1612
                    }
                  ],
                  "optional": false,
                  "start": 1603,
                  "end": 1613
                },
                "definite": false,
                "start": 1597,
                "end": 1613
              }
            ],
            "declare": false,
            "start": 1593,
            "end": 1614
          }
        ],
        "start": 475,
        "end": 1710
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 448,
      "end": 1710
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 1710
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 186,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "NonGenericParameter",
    "start": 196,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 222,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 253,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
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
    "value": "string",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 283,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 302,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 311,
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
    "value": "cb",
    "start": 316,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 320,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 340,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 347,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 362,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 407,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 422,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 427,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 434,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 448,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "GenericParameter",
    "start": 458,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 481,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 490,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 505,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 548,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 555,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 579,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 586,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 591,
    "end": 592
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 710,
    "end": 711
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
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
    "value": "string",
    "start": 721,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 743,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 748,
    "end": 749
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "r7",
    "start": 758,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 763,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 808,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 817,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 821,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 825,
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
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 833,
    "end": 834
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 847,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 852,
    "end": 853
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 854,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 855,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": ":",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 862,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 870,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 882,
    "end": 888
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 889,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 891,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 904,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "r8",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 913,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 918,
    "end": 919
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 920,
    "end": 922
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 923,
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
    "value": ";",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "r9",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1056,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1059,
    "end": 1061
  },
  {
    "type": "String",
    "value": "''",
    "start": 1062,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1102,
    "end": 1105
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 1106,
    "end": 1109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1110,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1118,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1134,
    "end": 1136
  },
  {
    "type": "String",
    "value": "''",
    "start": 1137,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1178,
    "end": 1186
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1187,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1200,
    "end": 1202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1208,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1214,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1237,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1257,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1279,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "r12",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1289,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "=>",
    "start": 1301,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ";",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "Identifier",
    "value": "r13",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1416,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1424,
    "end": 1425
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1428,
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
    "value": "T",
    "start": 1431,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1434,
    "end": 1436
  },
  {
    "type": "String",
    "value": "''",
    "start": 1437,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1540,
    "end": 1543
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1551,
    "end": 1552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1552,
    "end": 1553
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1554,
    "end": 1555
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1557,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1560,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1582,
    "end": 1583
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1593,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "r14",
    "start": 1597,
    "end": 1600
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1603,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1709,
    "end": 1710
  }
]
```
