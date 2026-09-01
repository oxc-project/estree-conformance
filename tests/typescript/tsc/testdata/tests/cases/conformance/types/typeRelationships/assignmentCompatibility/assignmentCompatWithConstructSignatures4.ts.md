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
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 84
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 101
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 107
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 104,
                  "end": 116
                }
              ],
              "start": 102,
              "end": 118
            },
            "abstract": false,
            "declare": false,
            "start": 91,
            "end": 118
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 136
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 149
            },
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 152,
                    "end": 155
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 157,
                      "end": 163
                    },
                    "start": 155,
                    "end": 163
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 152,
                  "end": 164
                }
              ],
              "start": 150,
              "end": 166
            },
            "abstract": false,
            "declare": false,
            "start": 123,
            "end": 166
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 185
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 194,
              "end": 201
            },
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 207
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 209,
                      "end": 215
                    },
                    "start": 207,
                    "end": 215
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 204,
                  "end": 216
                }
              ],
              "start": 202,
              "end": 218
            },
            "abstract": false,
            "declare": false,
            "start": 171,
            "end": 218
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "OtherDerived",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 241
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 254
            },
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
                    "name": "bing",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 261
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 263,
                      "end": 269
                    },
                    "start": 261,
                    "end": 269
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 257,
                  "end": 270
                }
              ],
              "start": 255,
              "end": 272
            },
            "abstract": false,
            "declare": false,
            "start": 223,
            "end": 272
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithNonGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 322
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 413,
                                    "end": 419
                                  },
                                  "start": 411,
                                  "end": 419
                                },
                                "start": 410,
                                "end": 419
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 424,
                                  "end": 430
                                },
                                "start": 424,
                                "end": 432
                              },
                              "start": 421,
                              "end": 432
                            },
                            "start": 405,
                            "end": 432
                          },
                          "start": 403,
                          "end": 432
                        },
                        "start": 401,
                        "end": 432
                      },
                      "init": null,
                      "definite": false,
                      "start": 401,
                      "end": 432
                    }
                  ],
                  "declare": true,
                  "start": 389,
                  "end": 433
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
                        "name": "a7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 472,
                                              "end": 476
                                            },
                                            "typeArguments": null,
                                            "start": 472,
                                            "end": 476
                                          },
                                          "start": 470,
                                          "end": 476
                                        },
                                        "start": 467,
                                        "end": 476
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 481,
                                          "end": 488
                                        },
                                        "typeArguments": null,
                                        "start": 481,
                                        "end": 488
                                      },
                                      "start": 478,
                                      "end": 488
                                    },
                                    "start": 466,
                                    "end": 488
                                  },
                                  "start": 464,
                                  "end": 488
                                },
                                "start": 463,
                                "end": 488
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 497,
                                          "end": 501
                                        },
                                        "typeArguments": null,
                                        "start": 497,
                                        "end": 501
                                      },
                                      "start": 495,
                                      "end": 501
                                    },
                                    "start": 494,
                                    "end": 501
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 506,
                                      "end": 514
                                    },
                                    "typeArguments": null,
                                    "start": 506,
                                    "end": 514
                                  },
                                  "start": 503,
                                  "end": 514
                                },
                                "start": 493,
                                "end": 514
                              },
                              "start": 490,
                              "end": 514
                            },
                            "start": 458,
                            "end": 514
                          },
                          "start": 456,
                          "end": 514
                        },
                        "start": 454,
                        "end": 514
                      },
                      "init": null,
                      "definite": false,
                      "start": 454,
                      "end": 514
                    }
                  ],
                  "declare": true,
                  "start": 442,
                  "end": 515
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
                        "name": "a8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 554,
                                              "end": 558
                                            },
                                            "typeArguments": null,
                                            "start": 554,
                                            "end": 558
                                          },
                                          "start": 552,
                                          "end": 558
                                        },
                                        "start": 549,
                                        "end": 558
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 563,
                                          "end": 570
                                        },
                                        "typeArguments": null,
                                        "start": 563,
                                        "end": 570
                                      },
                                      "start": 560,
                                      "end": 570
                                    },
                                    "start": 548,
                                    "end": 570
                                  },
                                  "start": 546,
                                  "end": 570
                                },
                                "start": 545,
                                "end": 570
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Base",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 582,
                                              "end": 586
                                            },
                                            "typeArguments": null,
                                            "start": 582,
                                            "end": 586
                                          },
                                          "start": 580,
                                          "end": 586
                                        },
                                        "start": 576,
                                        "end": 586
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Derived",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 591,
                                          "end": 598
                                        },
                                        "typeArguments": null,
                                        "start": 591,
                                        "end": 598
                                      },
                                      "start": 588,
                                      "end": 598
                                    },
                                    "start": 575,
                                    "end": 598
                                  },
                                  "start": 573,
                                  "end": 598
                                },
                                "start": 572,
                                "end": 598
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Base",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 607,
                                          "end": 611
                                        },
                                        "typeArguments": null,
                                        "start": 607,
                                        "end": 611
                                      },
                                      "start": 605,
                                      "end": 611
                                    },
                                    "start": 604,
                                    "end": 611
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 616,
                                      "end": 623
                                    },
                                    "typeArguments": null,
                                    "start": 616,
                                    "end": 623
                                  },
                                  "start": 613,
                                  "end": 623
                                },
                                "start": 603,
                                "end": 623
                              },
                              "start": 600,
                              "end": 623
                            },
                            "start": 540,
                            "end": 623
                          },
                          "start": 538,
                          "end": 623
                        },
                        "start": 536,
                        "end": 623
                      },
                      "init": null,
                      "definite": false,
                      "start": 536,
                      "end": 623
                    }
                  ],
                  "declare": true,
                  "start": 524,
                  "end": 624
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
                        "name": "a10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 658,
                                  "end": 659
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 661,
                                        "end": 665
                                      },
                                      "typeArguments": null,
                                      "start": 661,
                                      "end": 665
                                    },
                                    "start": 661,
                                    "end": 667
                                  },
                                  "start": 659,
                                  "end": 667
                                },
                                "value": null,
                                "start": 655,
                                "end": 667
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 672,
                                  "end": 676
                                },
                                "typeArguments": null,
                                "start": 672,
                                "end": 676
                              },
                              "start": 669,
                              "end": 676
                            },
                            "start": 650,
                            "end": 676
                          },
                          "start": 648,
                          "end": 676
                        },
                        "start": 645,
                        "end": 676
                      },
                      "init": null,
                      "definite": false,
                      "start": 645,
                      "end": 676
                    }
                  ],
                  "declare": true,
                  "start": 633,
                  "end": 677
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
                        "name": "a11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 713,
                                          "end": 716
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 718,
                                            "end": 724
                                          },
                                          "start": 716,
                                          "end": 724
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 713,
                                        "end": 724
                                      }
                                    ],
                                    "start": 711,
                                    "end": 726
                                  },
                                  "start": 709,
                                  "end": 726
                                },
                                "start": 708,
                                "end": 726
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
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
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 733,
                                          "end": 736
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 738,
                                            "end": 744
                                          },
                                          "start": 736,
                                          "end": 744
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 733,
                                        "end": 745
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 746,
                                          "end": 749
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 751,
                                            "end": 757
                                          },
                                          "start": 749,
                                          "end": 757
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 746,
                                        "end": 757
                                      }
                                    ],
                                    "start": 731,
                                    "end": 759
                                  },
                                  "start": 729,
                                  "end": 759
                                },
                                "start": 728,
                                "end": 759
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Base",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 764,
                                  "end": 768
                                },
                                "typeArguments": null,
                                "start": 764,
                                "end": 768
                              },
                              "start": 761,
                              "end": 768
                            },
                            "start": 703,
                            "end": 768
                          },
                          "start": 701,
                          "end": 768
                        },
                        "start": 698,
                        "end": 768
                      },
                      "init": null,
                      "definite": false,
                      "start": 698,
                      "end": 768
                    }
                  ],
                  "declare": true,
                  "start": 686,
                  "end": 769
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
                        "name": "a12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 803,
                                      "end": 808
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 809,
                                            "end": 813
                                          },
                                          "typeArguments": null,
                                          "start": 809,
                                          "end": 813
                                        }
                                      ],
                                      "start": 808,
                                      "end": 814
                                    },
                                    "start": 803,
                                    "end": 814
                                  },
                                  "start": 801,
                                  "end": 814
                                },
                                "start": 800,
                                "end": 814
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 819,
                                      "end": 824
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 825,
                                            "end": 833
                                          },
                                          "typeArguments": null,
                                          "start": 825,
                                          "end": 833
                                        }
                                      ],
                                      "start": 824,
                                      "end": 834
                                    },
                                    "start": 819,
                                    "end": 834
                                  },
                                  "start": 817,
                                  "end": 834
                                },
                                "start": 816,
                                "end": 834
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Array",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 839,
                                  "end": 844
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 845,
                                        "end": 852
                                      },
                                      "typeArguments": null,
                                      "start": 845,
                                      "end": 852
                                    }
                                  ],
                                  "start": 844,
                                  "end": 853
                                },
                                "start": 839,
                                "end": 853
                              },
                              "start": 836,
                              "end": 853
                            },
                            "start": 795,
                            "end": 853
                          },
                          "start": 793,
                          "end": 853
                        },
                        "start": 790,
                        "end": 853
                      },
                      "init": null,
                      "definite": false,
                      "start": 790,
                      "end": 853
                    }
                  ],
                  "declare": true,
                  "start": 778,
                  "end": 854
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
                        "name": "a14",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 906,
                                        "end": 912
                                      },
                                      "start": 904,
                                      "end": 912
                                    },
                                    "start": 903,
                                    "end": 912
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 915,
                                      "end": 921
                                    },
                                    "start": 915,
                                    "end": 923
                                  },
                                  "start": 913,
                                  "end": 923
                                },
                                "start": 898,
                                "end": 924
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "start": 949,
                                        "end": 955
                                      },
                                      "start": 947,
                                      "end": 955
                                    },
                                    "start": 946,
                                    "end": 955
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSStringKeyword",
                                      "start": 958,
                                      "end": 964
                                    },
                                    "start": 958,
                                    "end": 966
                                  },
                                  "start": 956,
                                  "end": 966
                                },
                                "start": 941,
                                "end": 967
                              }
                            ],
                            "start": 880,
                            "end": 981
                          },
                          "start": 878,
                          "end": 981
                        },
                        "start": 875,
                        "end": 981
                      },
                      "init": null,
                      "definite": false,
                      "start": 875,
                      "end": 981
                    }
                  ],
                  "declare": true,
                  "start": 863,
                  "end": 982
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
                        "name": "a15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1018,
                                          "end": 1019
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 1021,
                                            "end": 1027
                                          },
                                          "start": 1019,
                                          "end": 1027
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1018,
                                        "end": 1028
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1029,
                                          "end": 1030
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSNumberKeyword",
                                            "start": 1032,
                                            "end": 1038
                                          },
                                          "start": 1030,
                                          "end": 1038
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 1029,
                                        "end": 1038
                                      }
                                    ],
                                    "start": 1016,
                                    "end": 1040
                                  },
                                  "start": 1014,
                                  "end": 1040
                                },
                                "start": 1013,
                                "end": 1040
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1045,
                                "end": 1051
                              },
                              "start": 1042,
                              "end": 1051
                            },
                            "start": 1008,
                            "end": 1051
                          },
                          "start": 1006,
                          "end": 1051
                        },
                        "start": 1003,
                        "end": 1051
                      },
                      "init": null,
                      "definite": false,
                      "start": 1003,
                      "end": 1051
                    }
                  ],
                  "declare": true,
                  "start": 991,
                  "end": 1052
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
                        "name": "a16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1134,
                                                    "end": 1140
                                                  },
                                                  "start": 1132,
                                                  "end": 1140
                                                },
                                                "start": 1131,
                                                "end": 1140
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1143,
                                                "end": 1149
                                              },
                                              "start": 1141,
                                              "end": 1149
                                            },
                                            "start": 1126,
                                            "end": 1150
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 1180,
                                                    "end": 1186
                                                  },
                                                  "start": 1178,
                                                  "end": 1186
                                                },
                                                "start": 1176,
                                                "end": 1186
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSNumberKeyword",
                                                "start": 1189,
                                                "end": 1195
                                              },
                                              "start": 1187,
                                              "end": 1195
                                            },
                                            "start": 1171,
                                            "end": 1196
                                          }
                                        ],
                                        "start": 1104,
                                        "end": 1214
                                      },
                                      "start": 1102,
                                      "end": 1214
                                    },
                                    "start": 1101,
                                    "end": 1214
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSNumberKeyword",
                                      "start": 1217,
                                      "end": 1223
                                    },
                                    "start": 1217,
                                    "end": 1225
                                  },
                                  "start": 1215,
                                  "end": 1225
                                },
                                "start": 1096,
                                "end": 1226
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1281,
                                                    "end": 1288
                                                  },
                                                  "start": 1279,
                                                  "end": 1288
                                                },
                                                "start": 1278,
                                                "end": 1288
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1291,
                                                "end": 1298
                                              },
                                              "start": 1289,
                                              "end": 1298
                                            },
                                            "start": 1273,
                                            "end": 1299
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
                                            "typeParameters": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
                                                "optional": true,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSBooleanKeyword",
                                                    "start": 1329,
                                                    "end": 1336
                                                  },
                                                  "start": 1327,
                                                  "end": 1336
                                                },
                                                "start": 1325,
                                                "end": 1336
                                              }
                                            ],
                                            "returnType": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSBooleanKeyword",
                                                "start": 1339,
                                                "end": 1346
                                              },
                                              "start": 1337,
                                              "end": 1346
                                            },
                                            "start": 1320,
                                            "end": 1347
                                          }
                                        ],
                                        "start": 1251,
                                        "end": 1365
                                      },
                                      "start": 1249,
                                      "end": 1365
                                    },
                                    "start": 1248,
                                    "end": 1365
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSBooleanKeyword",
                                      "start": 1368,
                                      "end": 1375
                                    },
                                    "start": 1368,
                                    "end": 1377
                                  },
                                  "start": 1366,
                                  "end": 1377
                                },
                                "start": 1243,
                                "end": 1378
                              }
                            ],
                            "start": 1078,
                            "end": 1392
                          },
                          "start": 1076,
                          "end": 1392
                        },
                        "start": 1073,
                        "end": 1392
                      },
                      "init": null,
                      "definite": false,
                      "start": 1073,
                      "end": 1392
                    }
                  ],
                  "declare": true,
                  "start": 1061,
                  "end": 1393
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
                        "name": "a17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1472,
                                                    "end": 1473
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1482,
                                                      "end": 1489
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1482,
                                                    "end": 1489
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1472,
                                                  "end": 1489
                                                }
                                              ],
                                              "start": 1471,
                                              "end": 1490
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1494,
                                                      "end": 1495
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1494,
                                                    "end": 1495
                                                  },
                                                  "start": 1492,
                                                  "end": 1495
                                                },
                                                "start": 1491,
                                                "end": 1495
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
                                                  "start": 1498,
                                                  "end": 1499
                                                },
                                                "typeArguments": null,
                                                "start": 1498,
                                                "end": 1499
                                              },
                                              "start": 1496,
                                              "end": 1499
                                            },
                                            "start": 1467,
                                            "end": 1500
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1526,
                                                    "end": 1527
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1536,
                                                      "end": 1540
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1536,
                                                    "end": 1540
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1526,
                                                  "end": 1540
                                                }
                                              ],
                                              "start": 1525,
                                              "end": 1541
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1545,
                                                      "end": 1546
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1545,
                                                    "end": 1546
                                                  },
                                                  "start": 1543,
                                                  "end": 1546
                                                },
                                                "start": 1542,
                                                "end": 1546
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
                                                  "start": 1549,
                                                  "end": 1550
                                                },
                                                "typeArguments": null,
                                                "start": 1549,
                                                "end": 1550
                                              },
                                              "start": 1547,
                                              "end": 1550
                                            },
                                            "start": 1521,
                                            "end": 1551
                                          }
                                        ],
                                        "start": 1445,
                                        "end": 1569
                                      },
                                      "start": 1443,
                                      "end": 1569
                                    },
                                    "start": 1442,
                                    "end": 1569
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1572,
                                      "end": 1575
                                    },
                                    "start": 1572,
                                    "end": 1577
                                  },
                                  "start": 1570,
                                  "end": 1577
                                },
                                "start": 1437,
                                "end": 1578
                              },
                              {
                                "type": "TSConstructSignatureDeclaration",
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
                                        "type": "TSTypeLiteral",
                                        "members": [
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1630,
                                                    "end": 1631
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Derived2",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1640,
                                                      "end": 1648
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1640,
                                                    "end": 1648
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1630,
                                                  "end": 1648
                                                }
                                              ],
                                              "start": 1629,
                                              "end": 1649
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1653,
                                                      "end": 1654
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1653,
                                                    "end": 1654
                                                  },
                                                  "start": 1651,
                                                  "end": 1654
                                                },
                                                "start": 1650,
                                                "end": 1654
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
                                                  "start": 1657,
                                                  "end": 1658
                                                },
                                                "typeArguments": null,
                                                "start": 1657,
                                                "end": 1658
                                              },
                                              "start": 1655,
                                              "end": 1658
                                            },
                                            "start": 1625,
                                            "end": 1659
                                          },
                                          {
                                            "type": "TSConstructSignatureDeclaration",
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
                                                    "start": 1685,
                                                    "end": 1686
                                                  },
                                                  "constraint": {
                                                    "type": "TSTypeReference",
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Base",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 1695,
                                                      "end": 1699
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1695,
                                                    "end": 1699
                                                  },
                                                  "default": null,
                                                  "in": false,
                                                  "out": false,
                                                  "const": false,
                                                  "start": 1685,
                                                  "end": 1699
                                                }
                                              ],
                                              "start": 1684,
                                              "end": 1700
                                            },
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "a",
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
                                                      "start": 1704,
                                                      "end": 1705
                                                    },
                                                    "typeArguments": null,
                                                    "start": 1704,
                                                    "end": 1705
                                                  },
                                                  "start": 1702,
                                                  "end": 1705
                                                },
                                                "start": 1701,
                                                "end": 1705
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
                                                  "start": 1708,
                                                  "end": 1709
                                                },
                                                "typeArguments": null,
                                                "start": 1708,
                                                "end": 1709
                                              },
                                              "start": 1706,
                                              "end": 1709
                                            },
                                            "start": 1680,
                                            "end": 1710
                                          }
                                        ],
                                        "start": 1603,
                                        "end": 1728
                                      },
                                      "start": 1601,
                                      "end": 1728
                                    },
                                    "start": 1600,
                                    "end": 1728
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 1731,
                                      "end": 1734
                                    },
                                    "start": 1731,
                                    "end": 1736
                                  },
                                  "start": 1729,
                                  "end": 1736
                                },
                                "start": 1595,
                                "end": 1737
                              }
                            ],
                            "start": 1419,
                            "end": 1751
                          },
                          "start": 1417,
                          "end": 1751
                        },
                        "start": 1414,
                        "end": 1751
                      },
                      "init": null,
                      "definite": false,
                      "start": 1414,
                      "end": 1751
                    }
                  ],
                  "declare": true,
                  "start": 1402,
                  "end": 1752
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1783,
                                    "end": 1784
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1783,
                                  "end": 1784
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1786,
                                    "end": 1787
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1786,
                                  "end": 1787
                                }
                              ],
                              "start": 1782,
                              "end": 1788
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
                                      "start": 1792,
                                      "end": 1793
                                    },
                                    "typeArguments": null,
                                    "start": 1792,
                                    "end": 1793
                                  },
                                  "start": 1790,
                                  "end": 1793
                                },
                                "start": 1789,
                                "end": 1793
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1798,
                                    "end": 1799
                                  },
                                  "typeArguments": null,
                                  "start": 1798,
                                  "end": 1799
                                },
                                "start": 1798,
                                "end": 1801
                              },
                              "start": 1795,
                              "end": 1801
                            },
                            "start": 1778,
                            "end": 1801
                          },
                          "start": 1776,
                          "end": 1801
                        },
                        "start": 1774,
                        "end": 1801
                      },
                      "init": null,
                      "definite": false,
                      "start": 1774,
                      "end": 1801
                    }
                  ],
                  "declare": true,
                  "start": 1762,
                  "end": 1802
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1812,
                      "end": 1814
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1817,
                      "end": 1819
                    },
                    "start": 1812,
                    "end": 1819
                  },
                  "directive": null,
                  "start": 1812,
                  "end": 1820
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1835,
                      "end": 1837
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1840,
                      "end": 1842
                    },
                    "start": 1835,
                    "end": 1842
                  },
                  "directive": null,
                  "start": 1835,
                  "end": 1843
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
                        "name": "b7",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1880,
                                    "end": 1881
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1890,
                                      "end": 1894
                                    },
                                    "typeArguments": null,
                                    "start": 1890,
                                    "end": 1894
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1880,
                                  "end": 1894
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1896,
                                    "end": 1897
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1906,
                                      "end": 1913
                                    },
                                    "typeArguments": null,
                                    "start": 1906,
                                    "end": 1913
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1896,
                                  "end": 1913
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1915,
                                    "end": 1916
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1925,
                                      "end": 1933
                                    },
                                    "typeArguments": null,
                                    "start": 1925,
                                    "end": 1933
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 1915,
                                  "end": 1933
                                }
                              ],
                              "start": 1879,
                              "end": 1934
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1944,
                                              "end": 1945
                                            },
                                            "typeArguments": null,
                                            "start": 1944,
                                            "end": 1945
                                          },
                                          "start": 1942,
                                          "end": 1945
                                        },
                                        "start": 1939,
                                        "end": 1945
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
                                          "start": 1950,
                                          "end": 1951
                                        },
                                        "typeArguments": null,
                                        "start": 1950,
                                        "end": 1951
                                      },
                                      "start": 1947,
                                      "end": 1951
                                    },
                                    "start": 1938,
                                    "end": 1951
                                  },
                                  "start": 1936,
                                  "end": 1951
                                },
                                "start": 1935,
                                "end": 1951
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 1960,
                                          "end": 1961
                                        },
                                        "typeArguments": null,
                                        "start": 1960,
                                        "end": 1961
                                      },
                                      "start": 1958,
                                      "end": 1961
                                    },
                                    "start": 1957,
                                    "end": 1961
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "V",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1966,
                                      "end": 1967
                                    },
                                    "typeArguments": null,
                                    "start": 1966,
                                    "end": 1967
                                  },
                                  "start": 1963,
                                  "end": 1967
                                },
                                "start": 1956,
                                "end": 1967
                              },
                              "start": 1953,
                              "end": 1967
                            },
                            "start": 1875,
                            "end": 1967
                          },
                          "start": 1873,
                          "end": 1967
                        },
                        "start": 1871,
                        "end": 1967
                      },
                      "init": null,
                      "definite": false,
                      "start": 1871,
                      "end": 1967
                    }
                  ],
                  "declare": true,
                  "start": 1859,
                  "end": 1968
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1977,
                      "end": 1979
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1982,
                      "end": 1984
                    },
                    "start": 1977,
                    "end": 1984
                  },
                  "directive": null,
                  "start": 1977,
                  "end": 1985
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2000,
                      "end": 2002
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a7",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2005,
                      "end": 2007
                    },
                    "start": 2000,
                    "end": 2007
                  },
                  "directive": null,
                  "start": 2000,
                  "end": 2008
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
                        "name": "b8",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2045,
                                    "end": 2046
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2055,
                                      "end": 2059
                                    },
                                    "typeArguments": null,
                                    "start": 2055,
                                    "end": 2059
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2045,
                                  "end": 2059
                                },
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2061,
                                    "end": 2062
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2071,
                                      "end": 2078
                                    },
                                    "typeArguments": null,
                                    "start": 2071,
                                    "end": 2078
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2061,
                                  "end": 2078
                                }
                              ],
                              "start": 2044,
                              "end": 2079
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
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 2089,
                                              "end": 2090
                                            },
                                            "typeArguments": null,
                                            "start": 2089,
                                            "end": 2090
                                          },
                                          "start": 2087,
                                          "end": 2090
                                        },
                                        "start": 2084,
                                        "end": 2090
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
                                          "start": 2095,
                                          "end": 2096
                                        },
                                        "typeArguments": null,
                                        "start": 2095,
                                        "end": 2096
                                      },
                                      "start": 2092,
                                      "end": 2096
                                    },
                                    "start": 2083,
                                    "end": 2096
                                  },
                                  "start": 2081,
                                  "end": 2096
                                },
                                "start": 2080,
                                "end": 2096
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                        "name": "arg2",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
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
                                                  "name": "foo",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 2110,
                                                  "end": 2113
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "typeAnnotation": {
                                                    "type": "TSNumberKeyword",
                                                    "start": 2115,
                                                    "end": 2121
                                                  },
                                                  "start": 2113,
                                                  "end": 2121
                                                },
                                                "accessibility": null,
                                                "static": false,
                                                "start": 2110,
                                                "end": 2122
                                              }
                                            ],
                                            "start": 2108,
                                            "end": 2124
                                          },
                                          "start": 2106,
                                          "end": 2124
                                        },
                                        "start": 2102,
                                        "end": 2124
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
                                          "start": 2129,
                                          "end": 2130
                                        },
                                        "typeArguments": null,
                                        "start": 2129,
                                        "end": 2130
                                      },
                                      "start": 2126,
                                      "end": 2130
                                    },
                                    "start": 2101,
                                    "end": 2130
                                  },
                                  "start": 2099,
                                  "end": 2130
                                },
                                "start": 2098,
                                "end": 2130
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "r",
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
                                          "start": 2139,
                                          "end": 2140
                                        },
                                        "typeArguments": null,
                                        "start": 2139,
                                        "end": 2140
                                      },
                                      "start": 2137,
                                      "end": 2140
                                    },
                                    "start": 2136,
                                    "end": 2140
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
                                      "start": 2145,
                                      "end": 2146
                                    },
                                    "typeArguments": null,
                                    "start": 2145,
                                    "end": 2146
                                  },
                                  "start": 2142,
                                  "end": 2146
                                },
                                "start": 2135,
                                "end": 2146
                              },
                              "start": 2132,
                              "end": 2146
                            },
                            "start": 2040,
                            "end": 2146
                          },
                          "start": 2038,
                          "end": 2146
                        },
                        "start": 2036,
                        "end": 2146
                      },
                      "init": null,
                      "definite": false,
                      "start": 2036,
                      "end": 2146
                    }
                  ],
                  "declare": true,
                  "start": 2024,
                  "end": 2147
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2157,
                      "end": 2159
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2162,
                      "end": 2164
                    },
                    "start": 2157,
                    "end": 2164
                  },
                  "directive": null,
                  "start": 2157,
                  "end": 2165
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2198,
                      "end": 2200
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a8",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2203,
                      "end": 2205
                    },
                    "start": 2198,
                    "end": 2205
                  },
                  "directive": null,
                  "start": 2198,
                  "end": 2206
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
                        "name": "b10",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2256,
                                    "end": 2257
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2266,
                                      "end": 2273
                                    },
                                    "typeArguments": null,
                                    "start": 2266,
                                    "end": 2273
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2256,
                                  "end": 2273
                                }
                              ],
                              "start": 2255,
                              "end": 2274
                            },
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2278,
                                  "end": 2279
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "T",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2281,
                                        "end": 2282
                                      },
                                      "typeArguments": null,
                                      "start": 2281,
                                      "end": 2282
                                    },
                                    "start": 2281,
                                    "end": 2284
                                  },
                                  "start": 2279,
                                  "end": 2284
                                },
                                "value": null,
                                "start": 2275,
                                "end": 2284
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
                                  "start": 2289,
                                  "end": 2290
                                },
                                "typeArguments": null,
                                "start": 2289,
                                "end": 2290
                              },
                              "start": 2286,
                              "end": 2290
                            },
                            "start": 2251,
                            "end": 2290
                          },
                          "start": 2249,
                          "end": 2290
                        },
                        "start": 2246,
                        "end": 2290
                      },
                      "init": null,
                      "definite": false,
                      "start": 2246,
                      "end": 2290
                    }
                  ],
                  "declare": true,
                  "start": 2234,
                  "end": 2291
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2301,
                      "end": 2304
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2307,
                      "end": 2310
                    },
                    "start": 2301,
                    "end": 2310
                  },
                  "directive": null,
                  "start": 2301,
                  "end": 2311
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2326,
                      "end": 2329
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a10",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2332,
                      "end": 2335
                    },
                    "start": 2326,
                    "end": 2335
                  },
                  "directive": null,
                  "start": 2326,
                  "end": 2336
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
                        "name": "b11",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2374,
                                    "end": 2375
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2384,
                                      "end": 2391
                                    },
                                    "typeArguments": null,
                                    "start": 2384,
                                    "end": 2391
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2374,
                                  "end": 2391
                                }
                              ],
                              "start": 2373,
                              "end": 2392
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
                                      "start": 2396,
                                      "end": 2397
                                    },
                                    "typeArguments": null,
                                    "start": 2396,
                                    "end": 2397
                                  },
                                  "start": 2394,
                                  "end": 2397
                                },
                                "start": 2393,
                                "end": 2397
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
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
                                      "start": 2402,
                                      "end": 2403
                                    },
                                    "typeArguments": null,
                                    "start": 2402,
                                    "end": 2403
                                  },
                                  "start": 2400,
                                  "end": 2403
                                },
                                "start": 2399,
                                "end": 2403
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
                                  "start": 2408,
                                  "end": 2409
                                },
                                "typeArguments": null,
                                "start": 2408,
                                "end": 2409
                              },
                              "start": 2405,
                              "end": 2409
                            },
                            "start": 2369,
                            "end": 2409
                          },
                          "start": 2367,
                          "end": 2409
                        },
                        "start": 2364,
                        "end": 2409
                      },
                      "init": null,
                      "definite": false,
                      "start": 2364,
                      "end": 2409
                    }
                  ],
                  "declare": true,
                  "start": 2352,
                  "end": 2410
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2423
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2426,
                      "end": 2429
                    },
                    "start": 2420,
                    "end": 2429
                  },
                  "directive": null,
                  "start": 2420,
                  "end": 2430
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2445,
                      "end": 2448
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a11",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2451,
                      "end": 2454
                    },
                    "start": 2445,
                    "end": 2454
                  },
                  "directive": null,
                  "start": 2445,
                  "end": 2455
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
                        "name": "b12",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2493,
                                    "end": 2494
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2503,
                                      "end": 2508
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Derived2",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2509,
                                            "end": 2517
                                          },
                                          "typeArguments": null,
                                          "start": 2509,
                                          "end": 2517
                                        }
                                      ],
                                      "start": 2508,
                                      "end": 2518
                                    },
                                    "start": 2503,
                                    "end": 2518
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2493,
                                  "end": 2518
                                }
                              ],
                              "start": 2492,
                              "end": 2519
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
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2523,
                                      "end": 2528
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2529,
                                            "end": 2533
                                          },
                                          "typeArguments": null,
                                          "start": 2529,
                                          "end": 2533
                                        }
                                      ],
                                      "start": 2528,
                                      "end": 2534
                                    },
                                    "start": 2523,
                                    "end": 2534
                                  },
                                  "start": 2521,
                                  "end": 2534
                                },
                                "start": 2520,
                                "end": 2534
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2539,
                                      "end": 2544
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Base",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 2545,
                                            "end": 2549
                                          },
                                          "typeArguments": null,
                                          "start": 2545,
                                          "end": 2549
                                        }
                                      ],
                                      "start": 2544,
                                      "end": 2550
                                    },
                                    "start": 2539,
                                    "end": 2550
                                  },
                                  "start": 2537,
                                  "end": 2550
                                },
                                "start": 2536,
                                "end": 2550
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
                                  "start": 2555,
                                  "end": 2556
                                },
                                "typeArguments": null,
                                "start": 2555,
                                "end": 2556
                              },
                              "start": 2552,
                              "end": 2556
                            },
                            "start": 2488,
                            "end": 2556
                          },
                          "start": 2486,
                          "end": 2556
                        },
                        "start": 2483,
                        "end": 2556
                      },
                      "init": null,
                      "definite": false,
                      "start": 2483,
                      "end": 2556
                    }
                  ],
                  "declare": true,
                  "start": 2471,
                  "end": 2557
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2567,
                      "end": 2570
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2573,
                      "end": 2576
                    },
                    "start": 2567,
                    "end": 2576
                  },
                  "directive": null,
                  "start": 2567,
                  "end": 2577
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2592,
                      "end": 2595
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a12",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2598,
                      "end": 2601
                    },
                    "start": 2592,
                    "end": 2601
                  },
                  "directive": null,
                  "start": 2592,
                  "end": 2602
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
                        "name": "b15",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2640,
                                    "end": 2641
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2640,
                                  "end": 2641
                                }
                              ],
                              "start": 2639,
                              "end": 2642
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2648,
                                          "end": 2649
                                        },
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
                                              "start": 2651,
                                              "end": 2652
                                            },
                                            "typeArguments": null,
                                            "start": 2651,
                                            "end": 2652
                                          },
                                          "start": 2649,
                                          "end": 2652
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2648,
                                        "end": 2653
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2654,
                                          "end": 2655
                                        },
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
                                              "start": 2657,
                                              "end": 2658
                                            },
                                            "typeArguments": null,
                                            "start": 2657,
                                            "end": 2658
                                          },
                                          "start": 2655,
                                          "end": 2658
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2654,
                                        "end": 2658
                                      }
                                    ],
                                    "start": 2646,
                                    "end": 2660
                                  },
                                  "start": 2644,
                                  "end": 2660
                                },
                                "start": 2643,
                                "end": 2660
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
                                  "start": 2665,
                                  "end": 2666
                                },
                                "typeArguments": null,
                                "start": 2665,
                                "end": 2666
                              },
                              "start": 2662,
                              "end": 2666
                            },
                            "start": 2635,
                            "end": 2666
                          },
                          "start": 2633,
                          "end": 2666
                        },
                        "start": 2630,
                        "end": 2666
                      },
                      "init": null,
                      "definite": false,
                      "start": 2630,
                      "end": 2666
                    }
                  ],
                  "declare": true,
                  "start": 2618,
                  "end": 2667
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2677,
                      "end": 2680
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2683,
                      "end": 2686
                    },
                    "start": 2677,
                    "end": 2686
                  },
                  "directive": null,
                  "start": 2677,
                  "end": 2687
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2702,
                      "end": 2705
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2708,
                      "end": 2711
                    },
                    "start": 2702,
                    "end": 2711
                  },
                  "directive": null,
                  "start": 2702,
                  "end": 2712
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
                        "name": "b15a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2751,
                                    "end": 2752
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Base",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2761,
                                      "end": 2765
                                    },
                                    "typeArguments": null,
                                    "start": 2761,
                                    "end": 2765
                                  },
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2751,
                                  "end": 2765
                                }
                              ],
                              "start": 2750,
                              "end": 2766
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
                                          "name": "a",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2772,
                                          "end": 2773
                                        },
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
                                              "start": 2775,
                                              "end": 2776
                                            },
                                            "typeArguments": null,
                                            "start": 2775,
                                            "end": 2776
                                          },
                                          "start": 2773,
                                          "end": 2776
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2772,
                                        "end": 2777
                                      },
                                      {
                                        "type": "TSPropertySignature",
                                        "computed": false,
                                        "optional": false,
                                        "readonly": false,
                                        "key": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "b",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 2778,
                                          "end": 2779
                                        },
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
                                              "start": 2781,
                                              "end": 2782
                                            },
                                            "typeArguments": null,
                                            "start": 2781,
                                            "end": 2782
                                          },
                                          "start": 2779,
                                          "end": 2782
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2778,
                                        "end": 2782
                                      }
                                    ],
                                    "start": 2770,
                                    "end": 2784
                                  },
                                  "start": 2768,
                                  "end": 2784
                                },
                                "start": 2767,
                                "end": 2784
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2789,
                                "end": 2795
                              },
                              "start": 2786,
                              "end": 2795
                            },
                            "start": 2746,
                            "end": 2795
                          },
                          "start": 2744,
                          "end": 2795
                        },
                        "start": 2740,
                        "end": 2795
                      },
                      "init": null,
                      "definite": false,
                      "start": 2740,
                      "end": 2795
                    }
                  ],
                  "declare": true,
                  "start": 2728,
                  "end": 2796
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2806,
                      "end": 2809
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2812,
                      "end": 2816
                    },
                    "start": 2806,
                    "end": 2816
                  },
                  "directive": null,
                  "start": 2806,
                  "end": 2817
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b15a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2832,
                      "end": 2836
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a15",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2839,
                      "end": 2842
                    },
                    "start": 2832,
                    "end": 2842
                  },
                  "directive": null,
                  "start": 2832,
                  "end": 2843
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
                        "name": "b16",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2881,
                                    "end": 2882
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2881,
                                  "end": 2882
                                }
                              ],
                              "start": 2880,
                              "end": 2883
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 2891,
                                              "end": 2892
                                            },
                                            "typeArguments": null,
                                            "start": 2891,
                                            "end": 2892
                                          },
                                          "start": 2889,
                                          "end": 2892
                                        },
                                        "start": 2888,
                                        "end": 2892
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
                                          "start": 2897,
                                          "end": 2898
                                        },
                                        "typeArguments": null,
                                        "start": 2897,
                                        "end": 2898
                                      },
                                      "start": 2894,
                                      "end": 2898
                                    },
                                    "start": 2887,
                                    "end": 2898
                                  },
                                  "start": 2885,
                                  "end": 2898
                                },
                                "start": 2884,
                                "end": 2898
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2903,
                                    "end": 2904
                                  },
                                  "typeArguments": null,
                                  "start": 2903,
                                  "end": 2904
                                },
                                "start": 2903,
                                "end": 2906
                              },
                              "start": 2900,
                              "end": 2906
                            },
                            "start": 2876,
                            "end": 2906
                          },
                          "start": 2874,
                          "end": 2906
                        },
                        "start": 2871,
                        "end": 2906
                      },
                      "init": null,
                      "definite": false,
                      "start": 2871,
                      "end": 2906
                    }
                  ],
                  "declare": true,
                  "start": 2859,
                  "end": 2907
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2916,
                      "end": 2919
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2922,
                      "end": 2925
                    },
                    "start": 2916,
                    "end": 2925
                  },
                  "directive": null,
                  "start": 2916,
                  "end": 2926
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2944,
                      "end": 2947
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a16",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2950,
                      "end": 2953
                    },
                    "start": 2944,
                    "end": 2953
                  },
                  "directive": null,
                  "start": 2944,
                  "end": 2954
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
                        "name": "b17",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 2995,
                                    "end": 2996
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 2995,
                                  "end": 2996
                                }
                              ],
                              "start": 2994,
                              "end": 2997
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
                                    "type": "TSFunctionType",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "a",
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
                                              "start": 3005,
                                              "end": 3006
                                            },
                                            "typeArguments": null,
                                            "start": 3005,
                                            "end": 3006
                                          },
                                          "start": 3003,
                                          "end": 3006
                                        },
                                        "start": 3002,
                                        "end": 3006
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
                                          "start": 3011,
                                          "end": 3012
                                        },
                                        "typeArguments": null,
                                        "start": 3011,
                                        "end": 3012
                                      },
                                      "start": 3008,
                                      "end": 3012
                                    },
                                    "start": 3001,
                                    "end": 3012
                                  },
                                  "start": 2999,
                                  "end": 3012
                                },
                                "start": 2998,
                                "end": 3012
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSAnyKeyword",
                                  "start": 3017,
                                  "end": 3020
                                },
                                "start": 3017,
                                "end": 3022
                              },
                              "start": 3014,
                              "end": 3022
                            },
                            "start": 2990,
                            "end": 3022
                          },
                          "start": 2988,
                          "end": 3022
                        },
                        "start": 2985,
                        "end": 3022
                      },
                      "init": null,
                      "definite": false,
                      "start": 2985,
                      "end": 3022
                    }
                  ],
                  "declare": true,
                  "start": 2973,
                  "end": 3023
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3032,
                      "end": 3035
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3038,
                      "end": 3041
                    },
                    "start": 3032,
                    "end": 3041
                  },
                  "directive": null,
                  "start": 3032,
                  "end": 3042
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3060,
                      "end": 3063
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3066,
                      "end": 3069
                    },
                    "start": 3060,
                    "end": 3069
                  },
                  "directive": null,
                  "start": 3060,
                  "end": 3070
                }
              ],
              "start": 323,
              "end": 3085
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 278,
            "end": 3085
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "WithGenericSignaturesInBaseType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3101,
              "end": 3132
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
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3214,
                                    "end": 3215
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3214,
                                  "end": 3215
                                }
                              ],
                              "start": 3213,
                              "end": 3216
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
                                      "start": 3220,
                                      "end": 3221
                                    },
                                    "typeArguments": null,
                                    "start": 3220,
                                    "end": 3221
                                  },
                                  "start": 3218,
                                  "end": 3221
                                },
                                "start": 3217,
                                "end": 3221
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3226,
                                    "end": 3227
                                  },
                                  "typeArguments": null,
                                  "start": 3226,
                                  "end": 3227
                                },
                                "start": 3226,
                                "end": 3229
                              },
                              "start": 3223,
                              "end": 3229
                            },
                            "start": 3209,
                            "end": 3229
                          },
                          "start": 3207,
                          "end": 3229
                        },
                        "start": 3205,
                        "end": 3229
                      },
                      "init": null,
                      "definite": false,
                      "start": 3205,
                      "end": 3229
                    }
                  ],
                  "declare": true,
                  "start": 3193,
                  "end": 3230
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
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3260,
                                    "end": 3261
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3260,
                                  "end": 3261
                                }
                              ],
                              "start": 3259,
                              "end": 3262
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
                                      "start": 3266,
                                      "end": 3267
                                    },
                                    "typeArguments": null,
                                    "start": 3266,
                                    "end": 3267
                                  },
                                  "start": 3264,
                                  "end": 3267
                                },
                                "start": 3263,
                                "end": 3267
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3272,
                                  "end": 3278
                                },
                                "start": 3272,
                                "end": 3280
                              },
                              "start": 3269,
                              "end": 3280
                            },
                            "start": 3255,
                            "end": 3280
                          },
                          "start": 3253,
                          "end": 3280
                        },
                        "start": 3251,
                        "end": 3280
                      },
                      "init": null,
                      "definite": false,
                      "start": 3251,
                      "end": 3280
                    }
                  ],
                  "declare": true,
                  "start": 3239,
                  "end": 3281
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3290,
                      "end": 3292
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3295,
                      "end": 3297
                    },
                    "start": 3290,
                    "end": 3297
                  },
                  "directive": null,
                  "start": 3290,
                  "end": 3298
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3313,
                      "end": 3315
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3318,
                      "end": 3320
                    },
                    "start": 3313,
                    "end": 3320
                  },
                  "directive": null,
                  "start": 3313,
                  "end": 3321
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
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3408,
                                    "end": 3409
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3408,
                                  "end": 3409
                                }
                              ],
                              "start": 3407,
                              "end": 3410
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
                                      "start": 3414,
                                      "end": 3415
                                    },
                                    "typeArguments": null,
                                    "start": 3414,
                                    "end": 3415
                                  },
                                  "start": 3412,
                                  "end": 3415
                                },
                                "start": 3411,
                                "end": 3415
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSStringKeyword",
                                  "start": 3420,
                                  "end": 3426
                                },
                                "start": 3420,
                                "end": 3428
                              },
                              "start": 3417,
                              "end": 3428
                            },
                            "start": 3403,
                            "end": 3428
                          },
                          "start": 3401,
                          "end": 3428
                        },
                        "start": 3399,
                        "end": 3428
                      },
                      "init": null,
                      "definite": false,
                      "start": 3399,
                      "end": 3428
                    }
                  ],
                  "declare": true,
                  "start": 3387,
                  "end": 3429
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
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 3459,
                                    "end": 3460
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 3459,
                                  "end": 3460
                                }
                              ],
                              "start": 3458,
                              "end": 3461
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
                                      "start": 3465,
                                      "end": 3466
                                    },
                                    "typeArguments": null,
                                    "start": 3465,
                                    "end": 3466
                                  },
                                  "start": 3463,
                                  "end": 3466
                                },
                                "start": 3462,
                                "end": 3466
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3471,
                                    "end": 3472
                                  },
                                  "typeArguments": null,
                                  "start": 3471,
                                  "end": 3472
                                },
                                "start": 3471,
                                "end": 3474
                              },
                              "start": 3468,
                              "end": 3474
                            },
                            "start": 3454,
                            "end": 3474
                          },
                          "start": 3452,
                          "end": 3474
                        },
                        "start": 3450,
                        "end": 3474
                      },
                      "init": null,
                      "definite": false,
                      "start": 3450,
                      "end": 3474
                    }
                  ],
                  "declare": true,
                  "start": 3438,
                  "end": 3475
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3485,
                      "end": 3487
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3490,
                      "end": 3492
                    },
                    "start": 3485,
                    "end": 3492
                  },
                  "directive": null,
                  "start": 3485,
                  "end": 3493
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3508,
                      "end": 3510
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3513,
                      "end": 3515
                    },
                    "start": 3508,
                    "end": 3515
                  },
                  "directive": null,
                  "start": 3508,
                  "end": 3516
                }
              ],
              "start": 3133,
              "end": 3528
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 3091,
            "end": 3528
          }
        ],
        "start": 85,
        "end": 3530
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 68,
      "end": 3530
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 3530
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 68,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Errors",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 91,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 104,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 123,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 129,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 152,
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
    "value": "string",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 177,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 186,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 194,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 209,
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
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 223,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 229,
    "end": 241
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 242,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 257,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 278,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "WithNonGenericSignaturesInBaseType",
    "start": 288,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 389,
    "end": 396
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 397,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 401,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 413,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 421,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 442,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 458,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 467,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 472,
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
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 481,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 490,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 497,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 503,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 506,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 524,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 536,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 540,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 554,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 560,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 563,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 576,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 588,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 591,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 600,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 604,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 607,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 613,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 616,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 633,
    "end": 640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 641,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 645,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 648,
    "end": 649
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 650,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 655,
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
    "value": "Base",
    "start": 661,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 669,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 672,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 686,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 694,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 698,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 703,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 709,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 713,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 718,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 725,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 728,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 738,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 746,
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
    "value": "string",
    "start": 751,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 761,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 764,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 778,
    "end": 785
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 786,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 795,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 803,
    "end": 808
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 808,
    "end": 809
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 809,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 819,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 825,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 836,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 839,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 845,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "declare",
    "start": 863,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 871,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 875,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 906,
    "end": 912
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "number",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 922,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 941,
    "end": 944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 945,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 947,
    "end": 948
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 949,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 958,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 991,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1003,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1008,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1021,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 1042,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1045,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1061,
    "end": 1068
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1069,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1073,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1076,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1096,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "type": "Punctuator",
    "value": "{",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1126,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1134,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1140,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1143,
    "end": 1149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1171,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1180,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1189,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1217,
    "end": 1223
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1243,
    "end": 1246
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1273,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1281,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1291,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1320,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1329,
    "end": 1336
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1339,
    "end": 1346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1364,
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
    "value": ":",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1368,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1402,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1410,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1437,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1467,
    "end": 1470
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1474,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1491,
    "end": 1492
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1521,
    "end": 1524
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1528,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1536,
    "end": 1540
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1540,
    "end": 1541
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1572,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1576,
    "end": 1577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1577,
    "end": 1578
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1595,
    "end": 1598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1599,
    "end": 1600
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1603,
    "end": 1604
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1625,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1640,
    "end": 1648
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1649,
    "end": 1650
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1651,
    "end": 1652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1655,
    "end": 1656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1680,
    "end": 1683
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1684,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1687,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1695,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1708,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1727,
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
    "value": ":",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1731,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1751,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1762,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1770,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1774,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1778,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1784,
    "end": 1785
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1795,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1812,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1817,
    "end": 1819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1819,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1840,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1842,
    "end": 1843
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1859,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1871,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1875,
    "end": 1878
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1880,
    "end": 1881
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1882,
    "end": 1889
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1890,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1898,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1906,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1915,
    "end": 1916
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1917,
    "end": 1924
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1925,
    "end": 1933
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1933,
    "end": 1934
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1934,
    "end": 1935
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1936,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1939,
    "end": 1942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1947,
    "end": 1949
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1953,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 1957,
    "end": 1958
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1958,
    "end": 1959
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1963,
    "end": 1965
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 1966,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 1977,
    "end": 1979
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 1982,
    "end": 1984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2000,
    "end": 2002
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2003,
    "end": 2004
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2005,
    "end": 2007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2007,
    "end": 2008
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2024,
    "end": 2031
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2032,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2036,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2040,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2045,
    "end": 2046
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2047,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2055,
    "end": 2059
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2059,
    "end": 2060
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2061,
    "end": 2062
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2063,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2071,
    "end": 2078
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2078,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2080,
    "end": 2081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2084,
    "end": 2087
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2087,
    "end": 2088
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2089,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2092,
    "end": 2094
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2102,
    "end": 2106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2106,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2110,
    "end": 2113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2115,
    "end": 2121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2121,
    "end": 2122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2126,
    "end": 2128
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 2132,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2136,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2137,
    "end": 2138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2142,
    "end": 2144
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2160,
    "end": 2161
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2162,
    "end": 2164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2164,
    "end": 2165
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2198,
    "end": 2200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2203,
    "end": 2205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2205,
    "end": 2206
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2234,
    "end": 2241
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2242,
    "end": 2245
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2246,
    "end": 2249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2251,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2258,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2266,
    "end": 2273
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2273,
    "end": 2274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2275,
    "end": 2278
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2282,
    "end": 2283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2283,
    "end": 2284
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2284,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2286,
    "end": 2288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2289,
    "end": 2290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2301,
    "end": 2304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2307,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2310,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2326,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2335,
    "end": 2336
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2360,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2364,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2369,
    "end": 2372
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2376,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2384,
    "end": 2391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2391,
    "end": 2392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2399,
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
    "value": "T",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2405,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2408,
    "end": 2409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2420,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2426,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2445,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2451,
    "end": 2454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2471,
    "end": 2478
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2479,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2483,
    "end": 2486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2486,
    "end": 2487
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2488,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2493,
    "end": 2494
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2495,
    "end": 2502
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2503,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 2509,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2520,
    "end": 2521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2523,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2529,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2539,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2545,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2552,
    "end": 2554
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2567,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2573,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2592,
    "end": 2595
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2596,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2598,
    "end": 2601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2618,
    "end": 2625
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2626,
    "end": 2629
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2630,
    "end": 2633
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2633,
    "end": 2634
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2635,
    "end": 2638
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2639,
    "end": 2640
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2640,
    "end": 2641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2641,
    "end": 2642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2642,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2643,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2651,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2662,
    "end": 2664
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "a15",
    "start": 2677,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2683,
    "end": 2686
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2686,
    "end": 2687
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2702,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2708,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2728,
    "end": 2735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2736,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2740,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2746,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2753,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2761,
    "end": 2765
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2765,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2767,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2768,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2776,
    "end": 2777
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2778,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2781,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2786,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2789,
    "end": 2795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2795,
    "end": 2796
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2806,
    "end": 2809
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2812,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Identifier",
    "value": "b15a",
    "start": 2832,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2839,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2859,
    "end": 2866
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2867,
    "end": 2870
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2871,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2876,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2880,
    "end": 2881
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2882,
    "end": 2883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2884,
    "end": 2885
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2888,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2889,
    "end": 2890
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2891,
    "end": 2892
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2892,
    "end": 2893
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2894,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2897,
    "end": 2898
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2900,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2906,
    "end": 2907
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2916,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2920,
    "end": 2921
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2922,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 2944,
    "end": 2947
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 2950,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2973,
    "end": 2980
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2981,
    "end": 2984
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 2985,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2990,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2997,
    "end": 2998
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3008,
    "end": 3010
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3011,
    "end": 3012
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3012,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3014,
    "end": 3016
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3017,
    "end": 3020
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3020,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3022,
    "end": 3023
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3032,
    "end": 3035
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3036,
    "end": 3037
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3038,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3041,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3060,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3066,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3091,
    "end": 3100
  },
  {
    "type": "Identifier",
    "value": "WithGenericSignaturesInBaseType",
    "start": 3101,
    "end": 3132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3193,
    "end": 3200
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3201,
    "end": 3204
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3205,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3209,
    "end": 3212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3213,
    "end": 3214
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3218,
    "end": 3219
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3220,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3223,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3239,
    "end": 3246
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3247,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 3251,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3253,
    "end": 3254
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3255,
    "end": 3258
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3261,
    "end": 3262
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3262,
    "end": 3263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3263,
    "end": 3264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3264,
    "end": 3265
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3267,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3269,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3272,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3278,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Identifier",
    "value": "a2",
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
    "value": "b2",
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
    "type": "Identifier",
    "value": "b2",
    "start": 3313,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 3318,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3387,
    "end": 3394
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3395,
    "end": 3398
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3399,
    "end": 3401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3403,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3409,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3412,
    "end": 3413
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3414,
    "end": 3415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3415,
    "end": 3416
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3417,
    "end": 3419
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3420,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3427,
    "end": 3428
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3428,
    "end": 3429
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3438,
    "end": 3445
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3446,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3450,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3454,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3459,
    "end": 3460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3460,
    "end": 3461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3461,
    "end": 3462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3462,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3465,
    "end": 3466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3466,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3468,
    "end": 3470
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3471,
    "end": 3472
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3472,
    "end": 3473
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3473,
    "end": 3474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3474,
    "end": 3475
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3485,
    "end": 3487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3490,
    "end": 3492
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3492,
    "end": 3493
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 3508,
    "end": 3510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3511,
    "end": 3512
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 3513,
    "end": 3515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3515,
    "end": 3516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3527,
    "end": 3528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3529,
    "end": 3530
  }
]
```
