__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
        "start": 98,
        "end": 102
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
              "start": 105,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 110,
                "end": 116
              },
              "start": 108,
              "end": 116
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
            "start": 105,
            "end": 117
          }
        ],
        "start": 103,
        "end": 119
      },
      "abstract": false,
      "declare": false,
      "start": 92,
      "end": 119
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
        "start": 126,
        "end": 133
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 146
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
              "start": 149,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
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
            "start": 149,
            "end": 161
          }
        ],
        "start": 147,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 163
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
        "start": 170,
        "end": 178
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 194
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
              "start": 197,
              "end": 200
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 202,
                "end": 208
              },
              "start": 200,
              "end": 208
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
            "start": 197,
            "end": 209
          }
        ],
        "start": 195,
        "end": 211
      },
      "abstract": false,
      "declare": false,
      "start": 164,
      "end": 211
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
        "start": 218,
        "end": 230
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 243
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
              "start": 246,
              "end": 250
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 252,
                "end": 258
              },
              "start": 250,
              "end": 258
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
            "start": 246,
            "end": 259
          }
        ],
        "start": 244,
        "end": 261
      },
      "abstract": false,
      "declare": false,
      "start": 212,
      "end": 261
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
                        "start": 286,
                        "end": 292
                      },
                      "start": 284,
                      "end": 292
                    },
                    "start": 283,
                    "end": 292
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 297,
                      "end": 303
                    },
                    "start": 297,
                    "end": 305
                  },
                  "start": 294,
                  "end": 305
                },
                "start": 278,
                "end": 305
              },
              "start": 276,
              "end": 305
            },
            "start": 275,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 275,
          "end": 305
        }
      ],
      "declare": true,
      "start": 263,
      "end": 306
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
                        "start": 331,
                        "end": 337
                      },
                      "start": 329,
                      "end": 337
                    },
                    "start": 328,
                    "end": 337
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 342,
                      "end": 348
                    },
                    "start": 342,
                    "end": 350
                  },
                  "start": 339,
                  "end": 350
                },
                "start": 323,
                "end": 350
              },
              "start": 321,
              "end": 350
            },
            "start": 319,
            "end": 350
          },
          "init": null,
          "definite": false,
          "start": 319,
          "end": 350
        }
      ],
      "declare": true,
      "start": 307,
      "end": 351
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
                        "start": 376,
                        "end": 382
                      },
                      "start": 374,
                      "end": 382
                    },
                    "start": 373,
                    "end": 382
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 387,
                    "end": 391
                  },
                  "start": 384,
                  "end": 391
                },
                "start": 368,
                "end": 391
              },
              "start": 366,
              "end": 391
            },
            "start": 364,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 364,
          "end": 391
        }
      ],
      "declare": true,
      "start": 352,
      "end": 392
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
            "name": "a4",
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
                        "type": "TSStringKeyword",
                        "start": 417,
                        "end": 423
                      },
                      "start": 415,
                      "end": 423
                    },
                    "start": 414,
                    "end": 423
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 428,
                        "end": 434
                      },
                      "start": 426,
                      "end": 434
                    },
                    "start": 425,
                    "end": 434
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 439,
                    "end": 445
                  },
                  "start": 436,
                  "end": 445
                },
                "start": 409,
                "end": 445
              },
              "start": 407,
              "end": 445
            },
            "start": 405,
            "end": 445
          },
          "init": null,
          "definite": false,
          "start": 405,
          "end": 445
        }
      ],
      "declare": true,
      "start": 393,
      "end": 446
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
            "name": "a5",
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
                                "type": "TSStringKeyword",
                                "start": 477,
                                "end": 483
                              },
                              "start": 475,
                              "end": 483
                            },
                            "start": 472,
                            "end": 483
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 488,
                            "end": 494
                          },
                          "start": 485,
                          "end": 494
                        },
                        "start": 471,
                        "end": 494
                      },
                      "start": 469,
                      "end": 494
                    },
                    "start": 468,
                    "end": 494
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 499,
                    "end": 505
                  },
                  "start": 496,
                  "end": 505
                },
                "start": 463,
                "end": 505
              },
              "start": 461,
              "end": 505
            },
            "start": 459,
            "end": 505
          },
          "init": null,
          "definite": false,
          "start": 459,
          "end": 505
        }
      ],
      "declare": true,
      "start": 447,
      "end": 506
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
            "name": "a6",
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
                                  "start": 537,
                                  "end": 541
                                },
                                "typeArguments": null,
                                "start": 537,
                                "end": 541
                              },
                              "start": 535,
                              "end": 541
                            },
                            "start": 532,
                            "end": 541
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
                              "start": 546,
                              "end": 553
                            },
                            "typeArguments": null,
                            "start": 546,
                            "end": 553
                          },
                          "start": 543,
                          "end": 553
                        },
                        "start": 531,
                        "end": 553
                      },
                      "start": 529,
                      "end": 553
                    },
                    "start": 528,
                    "end": 553
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
                      "start": 558,
                      "end": 562
                    },
                    "typeArguments": null,
                    "start": 558,
                    "end": 562
                  },
                  "start": 555,
                  "end": 562
                },
                "start": 523,
                "end": 562
              },
              "start": 521,
              "end": 562
            },
            "start": 519,
            "end": 562
          },
          "init": null,
          "definite": false,
          "start": 519,
          "end": 562
        }
      ],
      "declare": true,
      "start": 507,
      "end": 563
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
                                  "start": 594,
                                  "end": 598
                                },
                                "typeArguments": null,
                                "start": 594,
                                "end": 598
                              },
                              "start": 592,
                              "end": 598
                            },
                            "start": 589,
                            "end": 598
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
                              "start": 603,
                              "end": 610
                            },
                            "typeArguments": null,
                            "start": 603,
                            "end": 610
                          },
                          "start": 600,
                          "end": 610
                        },
                        "start": 588,
                        "end": 610
                      },
                      "start": 586,
                      "end": 610
                    },
                    "start": 585,
                    "end": 610
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
                              "start": 619,
                              "end": 623
                            },
                            "typeArguments": null,
                            "start": 619,
                            "end": 623
                          },
                          "start": 617,
                          "end": 623
                        },
                        "start": 616,
                        "end": 623
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
                          "start": 628,
                          "end": 635
                        },
                        "typeArguments": null,
                        "start": 628,
                        "end": 635
                      },
                      "start": 625,
                      "end": 635
                    },
                    "start": 615,
                    "end": 635
                  },
                  "start": 612,
                  "end": 635
                },
                "start": 580,
                "end": 635
              },
              "start": 578,
              "end": 635
            },
            "start": 576,
            "end": 635
          },
          "init": null,
          "definite": false,
          "start": 576,
          "end": 635
        }
      ],
      "declare": true,
      "start": 564,
      "end": 636
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
                                  "start": 667,
                                  "end": 671
                                },
                                "typeArguments": null,
                                "start": 667,
                                "end": 671
                              },
                              "start": 665,
                              "end": 671
                            },
                            "start": 662,
                            "end": 671
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
                              "start": 676,
                              "end": 683
                            },
                            "typeArguments": null,
                            "start": 676,
                            "end": 683
                          },
                          "start": 673,
                          "end": 683
                        },
                        "start": 661,
                        "end": 683
                      },
                      "start": 659,
                      "end": 683
                    },
                    "start": 658,
                    "end": 683
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
                                  "start": 695,
                                  "end": 699
                                },
                                "typeArguments": null,
                                "start": 695,
                                "end": 699
                              },
                              "start": 693,
                              "end": 699
                            },
                            "start": 689,
                            "end": 699
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
                              "start": 704,
                              "end": 711
                            },
                            "typeArguments": null,
                            "start": 704,
                            "end": 711
                          },
                          "start": 701,
                          "end": 711
                        },
                        "start": 688,
                        "end": 711
                      },
                      "start": 686,
                      "end": 711
                    },
                    "start": 685,
                    "end": 711
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
                              "start": 720,
                              "end": 724
                            },
                            "typeArguments": null,
                            "start": 720,
                            "end": 724
                          },
                          "start": 718,
                          "end": 724
                        },
                        "start": 717,
                        "end": 724
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
                          "start": 729,
                          "end": 736
                        },
                        "typeArguments": null,
                        "start": 729,
                        "end": 736
                      },
                      "start": 726,
                      "end": 736
                    },
                    "start": 716,
                    "end": 736
                  },
                  "start": 713,
                  "end": 736
                },
                "start": 653,
                "end": 736
              },
              "start": 651,
              "end": 736
            },
            "start": 649,
            "end": 736
          },
          "init": null,
          "definite": false,
          "start": 649,
          "end": 736
        }
      ],
      "declare": true,
      "start": 637,
      "end": 737
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
            "name": "a9",
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
                                  "start": 768,
                                  "end": 772
                                },
                                "typeArguments": null,
                                "start": 768,
                                "end": 772
                              },
                              "start": 766,
                              "end": 772
                            },
                            "start": 763,
                            "end": 772
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
                              "start": 777,
                              "end": 784
                            },
                            "typeArguments": null,
                            "start": 777,
                            "end": 784
                          },
                          "start": 774,
                          "end": 784
                        },
                        "start": 762,
                        "end": 784
                      },
                      "start": 760,
                      "end": 784
                    },
                    "start": 759,
                    "end": 784
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
                                  "start": 796,
                                  "end": 800
                                },
                                "typeArguments": null,
                                "start": 796,
                                "end": 800
                              },
                              "start": 794,
                              "end": 800
                            },
                            "start": 790,
                            "end": 800
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
                              "start": 805,
                              "end": 812
                            },
                            "typeArguments": null,
                            "start": 805,
                            "end": 812
                          },
                          "start": 802,
                          "end": 812
                        },
                        "start": 789,
                        "end": 812
                      },
                      "start": 787,
                      "end": 812
                    },
                    "start": 786,
                    "end": 812
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
                              "start": 821,
                              "end": 825
                            },
                            "typeArguments": null,
                            "start": 821,
                            "end": 825
                          },
                          "start": 819,
                          "end": 825
                        },
                        "start": 818,
                        "end": 825
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
                          "start": 830,
                          "end": 837
                        },
                        "typeArguments": null,
                        "start": 830,
                        "end": 837
                      },
                      "start": 827,
                      "end": 837
                    },
                    "start": 817,
                    "end": 837
                  },
                  "start": 814,
                  "end": 837
                },
                "start": 754,
                "end": 837
              },
              "start": 752,
              "end": 837
            },
            "start": 750,
            "end": 837
          },
          "init": null,
          "definite": false,
          "start": 750,
          "end": 837
        }
      ],
      "declare": true,
      "start": 738,
      "end": 838
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
                      "start": 864,
                      "end": 865
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
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 867,
                            "end": 874
                          },
                          "typeArguments": null,
                          "start": 867,
                          "end": 874
                        },
                        "start": 867,
                        "end": 876
                      },
                      "start": 865,
                      "end": 876
                    },
                    "value": null,
                    "start": 861,
                    "end": 876
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
                      "start": 881,
                      "end": 888
                    },
                    "typeArguments": null,
                    "start": 881,
                    "end": 888
                  },
                  "start": 878,
                  "end": 888
                },
                "start": 856,
                "end": 888
              },
              "start": 854,
              "end": 888
            },
            "start": 851,
            "end": 888
          },
          "init": null,
          "definite": false,
          "start": 851,
          "end": 888
        }
      ],
      "declare": true,
      "start": 839,
      "end": 889
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
                              "start": 917,
                              "end": 920
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 922,
                                "end": 928
                              },
                              "start": 920,
                              "end": 928
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 917,
                            "end": 928
                          }
                        ],
                        "start": 915,
                        "end": 930
                      },
                      "start": 913,
                      "end": 930
                    },
                    "start": 912,
                    "end": 930
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
                              "start": 937,
                              "end": 940
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 942,
                                "end": 948
                              },
                              "start": 940,
                              "end": 948
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 937,
                            "end": 949
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
                              "start": 950,
                              "end": 953
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 955,
                                "end": 961
                              },
                              "start": 953,
                              "end": 961
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 950,
                            "end": 961
                          }
                        ],
                        "start": 935,
                        "end": 963
                      },
                      "start": 933,
                      "end": 963
                    },
                    "start": 932,
                    "end": 963
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
                      "start": 968,
                      "end": 972
                    },
                    "typeArguments": null,
                    "start": 968,
                    "end": 972
                  },
                  "start": 965,
                  "end": 972
                },
                "start": 907,
                "end": 972
              },
              "start": 905,
              "end": 972
            },
            "start": 902,
            "end": 972
          },
          "init": null,
          "definite": false,
          "start": 902,
          "end": 972
        }
      ],
      "declare": true,
      "start": 890,
      "end": 973
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
                          "start": 999,
                          "end": 1004
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
                                "start": 1005,
                                "end": 1009
                              },
                              "typeArguments": null,
                              "start": 1005,
                              "end": 1009
                            }
                          ],
                          "start": 1004,
                          "end": 1010
                        },
                        "start": 999,
                        "end": 1010
                      },
                      "start": 997,
                      "end": 1010
                    },
                    "start": 996,
                    "end": 1010
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
                          "start": 1015,
                          "end": 1020
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
                                "start": 1021,
                                "end": 1029
                              },
                              "typeArguments": null,
                              "start": 1021,
                              "end": 1029
                            }
                          ],
                          "start": 1020,
                          "end": 1030
                        },
                        "start": 1015,
                        "end": 1030
                      },
                      "start": 1013,
                      "end": 1030
                    },
                    "start": 1012,
                    "end": 1030
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
                      "start": 1035,
                      "end": 1040
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
                            "start": 1041,
                            "end": 1048
                          },
                          "typeArguments": null,
                          "start": 1041,
                          "end": 1048
                        }
                      ],
                      "start": 1040,
                      "end": 1049
                    },
                    "start": 1035,
                    "end": 1049
                  },
                  "start": 1032,
                  "end": 1049
                },
                "start": 991,
                "end": 1049
              },
              "start": 989,
              "end": 1049
            },
            "start": 986,
            "end": 1049
          },
          "init": null,
          "definite": false,
          "start": 986,
          "end": 1049
        }
      ],
      "declare": true,
      "start": 974,
      "end": 1050
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
            "name": "a13",
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
                          "start": 1076,
                          "end": 1081
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
                                "start": 1082,
                                "end": 1086
                              },
                              "typeArguments": null,
                              "start": 1082,
                              "end": 1086
                            }
                          ],
                          "start": 1081,
                          "end": 1087
                        },
                        "start": 1076,
                        "end": 1087
                      },
                      "start": 1074,
                      "end": 1087
                    },
                    "start": 1073,
                    "end": 1087
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
                          "start": 1092,
                          "end": 1097
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
                                "start": 1098,
                                "end": 1105
                              },
                              "typeArguments": null,
                              "start": 1098,
                              "end": 1105
                            }
                          ],
                          "start": 1097,
                          "end": 1106
                        },
                        "start": 1092,
                        "end": 1106
                      },
                      "start": 1090,
                      "end": 1106
                    },
                    "start": 1089,
                    "end": 1106
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
                      "start": 1111,
                      "end": 1116
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
                            "start": 1117,
                            "end": 1124
                          },
                          "typeArguments": null,
                          "start": 1117,
                          "end": 1124
                        }
                      ],
                      "start": 1116,
                      "end": 1125
                    },
                    "start": 1111,
                    "end": 1125
                  },
                  "start": 1108,
                  "end": 1125
                },
                "start": 1068,
                "end": 1125
              },
              "start": 1066,
              "end": 1125
            },
            "start": 1063,
            "end": 1125
          },
          "init": null,
          "definite": false,
          "start": 1063,
          "end": 1125
        }
      ],
      "declare": true,
      "start": 1051,
      "end": 1126
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
                              "start": 1154,
                              "end": 1155
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1157,
                                "end": 1163
                              },
                              "start": 1155,
                              "end": 1163
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1154,
                            "end": 1164
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
                              "start": 1165,
                              "end": 1166
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1168,
                                "end": 1174
                              },
                              "start": 1166,
                              "end": 1174
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1165,
                            "end": 1174
                          }
                        ],
                        "start": 1152,
                        "end": 1176
                      },
                      "start": 1150,
                      "end": 1176
                    },
                    "start": 1149,
                    "end": 1176
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1187
                    },
                    "typeArguments": null,
                    "start": 1181,
                    "end": 1187
                  },
                  "start": 1178,
                  "end": 1187
                },
                "start": 1144,
                "end": 1187
              },
              "start": 1142,
              "end": 1187
            },
            "start": 1139,
            "end": 1187
          },
          "init": null,
          "definite": false,
          "start": 1139,
          "end": 1187
        }
      ],
      "declare": true,
      "start": 1127,
      "end": 1188
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
                            "start": 1220,
                            "end": 1226
                          },
                          "start": 1218,
                          "end": 1226
                        },
                        "start": 1217,
                        "end": 1226
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1229,
                          "end": 1235
                        },
                        "start": 1229,
                        "end": 1237
                      },
                      "start": 1227,
                      "end": 1237
                    },
                    "start": 1212,
                    "end": 1238
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
                            "start": 1251,
                            "end": 1257
                          },
                          "start": 1249,
                          "end": 1257
                        },
                        "start": 1248,
                        "end": 1257
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1260,
                          "end": 1266
                        },
                        "start": 1260,
                        "end": 1268
                      },
                      "start": 1258,
                      "end": 1268
                    },
                    "start": 1243,
                    "end": 1269
                  }
                ],
                "start": 1206,
                "end": 1271
              },
              "start": 1204,
              "end": 1271
            },
            "start": 1201,
            "end": 1271
          },
          "init": null,
          "definite": false,
          "start": 1201,
          "end": 1271
        }
      ],
      "declare": true,
      "start": 1189,
      "end": 1271
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
                            "start": 1300,
                            "end": 1301
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1310,
                              "end": 1317
                            },
                            "typeArguments": null,
                            "start": 1310,
                            "end": 1317
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1300,
                          "end": 1317
                        }
                      ],
                      "start": 1299,
                      "end": 1318
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
                              "start": 1322,
                              "end": 1323
                            },
                            "typeArguments": null,
                            "start": 1322,
                            "end": 1323
                          },
                          "start": 1320,
                          "end": 1323
                        },
                        "start": 1319,
                        "end": 1323
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1326,
                          "end": 1332
                        },
                        "start": 1326,
                        "end": 1334
                      },
                      "start": 1324,
                      "end": 1334
                    },
                    "start": 1295,
                    "end": 1335
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1345,
                            "end": 1346
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1355,
                              "end": 1359
                            },
                            "typeArguments": null,
                            "start": 1355,
                            "end": 1359
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1345,
                          "end": 1359
                        }
                      ],
                      "start": 1344,
                      "end": 1360
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1364,
                              "end": 1365
                            },
                            "typeArguments": null,
                            "start": 1364,
                            "end": 1365
                          },
                          "start": 1362,
                          "end": 1365
                        },
                        "start": 1361,
                        "end": 1365
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1368,
                          "end": 1374
                        },
                        "start": 1368,
                        "end": 1376
                      },
                      "start": 1366,
                      "end": 1376
                    },
                    "start": 1340,
                    "end": 1377
                  }
                ],
                "start": 1289,
                "end": 1379
              },
              "start": 1287,
              "end": 1379
            },
            "start": 1284,
            "end": 1379
          },
          "init": null,
          "definite": false,
          "start": 1284,
          "end": 1379
        }
      ],
      "declare": true,
      "start": 1272,
      "end": 1379
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "start": 1419,
                                    "end": 1425
                                  },
                                  "start": 1417,
                                  "end": 1425
                                },
                                "start": 1416,
                                "end": 1425
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1430,
                                "end": 1436
                              },
                              "start": 1427,
                              "end": 1436
                            },
                            "start": 1411,
                            "end": 1436
                          },
                          "start": 1409,
                          "end": 1436
                        },
                        "start": 1408,
                        "end": 1436
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1439,
                          "end": 1445
                        },
                        "start": 1439,
                        "end": 1447
                      },
                      "start": 1437,
                      "end": 1447
                    },
                    "start": 1403,
                    "end": 1448
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
                            "type": "TSConstructorType",
                            "abstract": false,
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
                                    "type": "TSStringKeyword",
                                    "start": 1469,
                                    "end": 1475
                                  },
                                  "start": 1467,
                                  "end": 1475
                                },
                                "start": 1466,
                                "end": 1475
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1480,
                                "end": 1486
                              },
                              "start": 1477,
                              "end": 1486
                            },
                            "start": 1461,
                            "end": 1486
                          },
                          "start": 1459,
                          "end": 1486
                        },
                        "start": 1458,
                        "end": 1486
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1489,
                          "end": 1495
                        },
                        "start": 1489,
                        "end": 1497
                      },
                      "start": 1487,
                      "end": 1497
                    },
                    "start": 1453,
                    "end": 1498
                  }
                ],
                "start": 1397,
                "end": 1500
              },
              "start": 1395,
              "end": 1500
            },
            "start": 1392,
            "end": 1500
          },
          "init": null,
          "definite": false,
          "start": 1392,
          "end": 1500
        }
      ],
      "declare": true,
      "start": 1380,
      "end": 1501
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
            "name": "a18",
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
                                        "start": 1551,
                                        "end": 1557
                                      },
                                      "start": 1549,
                                      "end": 1557
                                    },
                                    "start": 1548,
                                    "end": 1557
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 1560,
                                    "end": 1566
                                  },
                                  "start": 1558,
                                  "end": 1566
                                },
                                "start": 1543,
                                "end": 1567
                              },
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
                                        "type": "TSStringKeyword",
                                        "start": 1584,
                                        "end": 1590
                                      },
                                      "start": 1582,
                                      "end": 1590
                                    },
                                    "start": 1581,
                                    "end": 1590
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1593,
                                    "end": 1599
                                  },
                                  "start": 1591,
                                  "end": 1599
                                },
                                "start": 1576,
                                "end": 1600
                              }
                            ],
                            "start": 1533,
                            "end": 1606
                          },
                          "start": 1531,
                          "end": 1606
                        },
                        "start": 1530,
                        "end": 1606
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1609,
                          "end": 1612
                        },
                        "start": 1609,
                        "end": 1614
                      },
                      "start": 1607,
                      "end": 1614
                    },
                    "start": 1525,
                    "end": 1615
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
                                        "start": 1646,
                                        "end": 1653
                                      },
                                      "start": 1644,
                                      "end": 1653
                                    },
                                    "start": 1643,
                                    "end": 1653
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1656,
                                    "end": 1663
                                  },
                                  "start": 1654,
                                  "end": 1663
                                },
                                "start": 1638,
                                "end": 1664
                              },
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
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Date",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1681,
                                          "end": 1685
                                        },
                                        "typeArguments": null,
                                        "start": 1681,
                                        "end": 1685
                                      },
                                      "start": 1679,
                                      "end": 1685
                                    },
                                    "start": 1678,
                                    "end": 1685
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Date",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1688,
                                      "end": 1692
                                    },
                                    "typeArguments": null,
                                    "start": 1688,
                                    "end": 1692
                                  },
                                  "start": 1686,
                                  "end": 1692
                                },
                                "start": 1673,
                                "end": 1693
                              }
                            ],
                            "start": 1628,
                            "end": 1699
                          },
                          "start": 1626,
                          "end": 1699
                        },
                        "start": 1625,
                        "end": 1699
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1702,
                          "end": 1705
                        },
                        "start": 1702,
                        "end": 1707
                      },
                      "start": 1700,
                      "end": 1707
                    },
                    "start": 1620,
                    "end": 1708
                  }
                ],
                "start": 1519,
                "end": 1710
              },
              "start": 1517,
              "end": 1710
            },
            "start": 1514,
            "end": 1710
          },
          "init": null,
          "definite": false,
          "start": 1514,
          "end": 1710
        }
      ],
      "declare": true,
      "start": 1502,
      "end": 1710
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
            "name": "b",
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
                        "start": 1732,
                        "end": 1733
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1732,
                      "end": 1733
                    }
                  ],
                  "start": 1731,
                  "end": 1734
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
                          "start": 1738,
                          "end": 1739
                        },
                        "typeArguments": null,
                        "start": 1738,
                        "end": 1739
                      },
                      "start": 1736,
                      "end": 1739
                    },
                    "start": 1735,
                    "end": 1739
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
                        "start": 1744,
                        "end": 1745
                      },
                      "typeArguments": null,
                      "start": 1744,
                      "end": 1745
                    },
                    "start": 1744,
                    "end": 1747
                  },
                  "start": 1741,
                  "end": 1747
                },
                "start": 1727,
                "end": 1747
              },
              "start": 1725,
              "end": 1747
            },
            "start": 1724,
            "end": 1747
          },
          "init": null,
          "definite": false,
          "start": 1724,
          "end": 1747
        }
      ],
      "declare": true,
      "start": 1712,
      "end": 1748
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1750,
          "end": 1751
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1754,
          "end": 1755
        },
        "start": 1750,
        "end": 1755
      },
      "directive": null,
      "start": 1750,
      "end": 1756
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1763,
          "end": 1764
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1767,
          "end": 1768
        },
        "start": 1763,
        "end": 1768
      },
      "directive": null,
      "start": 1763,
      "end": 1769
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
                        "start": 1797,
                        "end": 1798
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1797,
                      "end": 1798
                    }
                  ],
                  "start": 1796,
                  "end": 1799
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
                          "start": 1803,
                          "end": 1804
                        },
                        "typeArguments": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "start": 1801,
                      "end": 1804
                    },
                    "start": 1800,
                    "end": 1804
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1809,
                      "end": 1815
                    },
                    "start": 1809,
                    "end": 1817
                  },
                  "start": 1806,
                  "end": 1817
                },
                "start": 1792,
                "end": 1817
              },
              "start": 1790,
              "end": 1817
            },
            "start": 1788,
            "end": 1817
          },
          "init": null,
          "definite": false,
          "start": 1788,
          "end": 1817
        }
      ],
      "declare": true,
      "start": 1776,
      "end": 1818
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
          "start": 1820,
          "end": 1822
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1825,
          "end": 1827
        },
        "start": 1820,
        "end": 1827
      },
      "directive": null,
      "start": 1820,
      "end": 1828
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
          "start": 1836,
          "end": 1838
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1841,
          "end": 1843
        },
        "start": 1836,
        "end": 1843
      },
      "directive": null,
      "start": 1836,
      "end": 1844
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
                        "start": 1872,
                        "end": 1873
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1872,
                      "end": 1873
                    }
                  ],
                  "start": 1871,
                  "end": 1874
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
                          "start": 1878,
                          "end": 1879
                        },
                        "typeArguments": null,
                        "start": 1878,
                        "end": 1879
                      },
                      "start": 1876,
                      "end": 1879
                    },
                    "start": 1875,
                    "end": 1879
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
                      "start": 1884,
                      "end": 1885
                    },
                    "typeArguments": null,
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1881,
                  "end": 1885
                },
                "start": 1867,
                "end": 1885
              },
              "start": 1865,
              "end": 1885
            },
            "start": 1863,
            "end": 1885
          },
          "init": null,
          "definite": false,
          "start": 1863,
          "end": 1885
        }
      ],
      "declare": true,
      "start": 1851,
      "end": 1886
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
          "start": 1888,
          "end": 1890
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1893,
          "end": 1895
        },
        "start": 1888,
        "end": 1895
      },
      "directive": null,
      "start": 1888,
      "end": 1896
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
          "start": 1903,
          "end": 1905
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1908,
          "end": 1910
        },
        "start": 1903,
        "end": 1910
      },
      "directive": null,
      "start": 1903,
      "end": 1911
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
            "name": "b4",
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
                        "start": 1939,
                        "end": 1940
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1939,
                      "end": 1940
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1942,
                        "end": 1943
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1942,
                      "end": 1943
                    }
                  ],
                  "start": 1938,
                  "end": 1944
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
                          "start": 1948,
                          "end": 1949
                        },
                        "typeArguments": null,
                        "start": 1948,
                        "end": 1949
                      },
                      "start": 1946,
                      "end": 1949
                    },
                    "start": 1945,
                    "end": 1949
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1954,
                          "end": 1955
                        },
                        "typeArguments": null,
                        "start": 1954,
                        "end": 1955
                      },
                      "start": 1952,
                      "end": 1955
                    },
                    "start": 1951,
                    "end": 1955
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
                      "start": 1960,
                      "end": 1961
                    },
                    "typeArguments": null,
                    "start": 1960,
                    "end": 1961
                  },
                  "start": 1957,
                  "end": 1961
                },
                "start": 1934,
                "end": 1961
              },
              "start": 1932,
              "end": 1961
            },
            "start": 1930,
            "end": 1961
          },
          "init": null,
          "definite": false,
          "start": 1930,
          "end": 1961
        }
      ],
      "declare": true,
      "start": 1918,
      "end": 1962
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1964,
          "end": 1966
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1969,
          "end": 1971
        },
        "start": 1964,
        "end": 1971
      },
      "directive": null,
      "start": 1964,
      "end": 1972
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1979,
          "end": 1981
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1984,
          "end": 1986
        },
        "start": 1979,
        "end": 1986
      },
      "directive": null,
      "start": 1979,
      "end": 1987
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
            "name": "b5",
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
                        "start": 2015,
                        "end": 2016
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2015,
                      "end": 2016
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2018,
                        "end": 2019
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2018,
                      "end": 2019
                    }
                  ],
                  "start": 2014,
                  "end": 2020
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
                                  "start": 2030,
                                  "end": 2031
                                },
                                "typeArguments": null,
                                "start": 2030,
                                "end": 2031
                              },
                              "start": 2028,
                              "end": 2031
                            },
                            "start": 2025,
                            "end": 2031
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
                              "start": 2036,
                              "end": 2037
                            },
                            "typeArguments": null,
                            "start": 2036,
                            "end": 2037
                          },
                          "start": 2033,
                          "end": 2037
                        },
                        "start": 2024,
                        "end": 2037
                      },
                      "start": 2022,
                      "end": 2037
                    },
                    "start": 2021,
                    "end": 2037
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
                      "start": 2042,
                      "end": 2043
                    },
                    "typeArguments": null,
                    "start": 2042,
                    "end": 2043
                  },
                  "start": 2039,
                  "end": 2043
                },
                "start": 2010,
                "end": 2043
              },
              "start": 2008,
              "end": 2043
            },
            "start": 2006,
            "end": 2043
          },
          "init": null,
          "definite": false,
          "start": 2006,
          "end": 2043
        }
      ],
      "declare": true,
      "start": 1994,
      "end": 2044
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2046,
          "end": 2048
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2051,
          "end": 2053
        },
        "start": 2046,
        "end": 2053
      },
      "directive": null,
      "start": 2046,
      "end": 2054
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2061,
          "end": 2063
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 2066,
          "end": 2068
        },
        "start": 2061,
        "end": 2068
      },
      "directive": null,
      "start": 2061,
      "end": 2069
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
            "name": "b6",
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
                        "start": 2097,
                        "end": 2098
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2107,
                          "end": 2111
                        },
                        "typeArguments": null,
                        "start": 2107,
                        "end": 2111
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2097,
                      "end": 2111
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2113,
                        "end": 2114
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2123,
                          "end": 2130
                        },
                        "typeArguments": null,
                        "start": 2123,
                        "end": 2130
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2113,
                      "end": 2130
                    }
                  ],
                  "start": 2096,
                  "end": 2131
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
                                  "start": 2141,
                                  "end": 2142
                                },
                                "typeArguments": null,
                                "start": 2141,
                                "end": 2142
                              },
                              "start": 2139,
                              "end": 2142
                            },
                            "start": 2136,
                            "end": 2142
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
                              "start": 2147,
                              "end": 2148
                            },
                            "typeArguments": null,
                            "start": 2147,
                            "end": 2148
                          },
                          "start": 2144,
                          "end": 2148
                        },
                        "start": 2135,
                        "end": 2148
                      },
                      "start": 2133,
                      "end": 2148
                    },
                    "start": 2132,
                    "end": 2148
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
                      "start": 2153,
                      "end": 2154
                    },
                    "typeArguments": null,
                    "start": 2153,
                    "end": 2154
                  },
                  "start": 2150,
                  "end": 2154
                },
                "start": 2092,
                "end": 2154
              },
              "start": 2090,
              "end": 2154
            },
            "start": 2088,
            "end": 2154
          },
          "init": null,
          "definite": false,
          "start": 2088,
          "end": 2154
        }
      ],
      "declare": true,
      "start": 2076,
      "end": 2155
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2157,
          "end": 2159
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
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
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2172,
          "end": 2174
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2177,
          "end": 2179
        },
        "start": 2172,
        "end": 2179
      },
      "directive": null,
      "start": 2172,
      "end": 2180
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
                        "start": 2208,
                        "end": 2209
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2218,
                          "end": 2222
                        },
                        "typeArguments": null,
                        "start": 2218,
                        "end": 2222
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2208,
                      "end": 2222
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2224,
                        "end": 2225
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2234,
                          "end": 2241
                        },
                        "typeArguments": null,
                        "start": 2234,
                        "end": 2241
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2224,
                      "end": 2241
                    }
                  ],
                  "start": 2207,
                  "end": 2242
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
                                  "start": 2252,
                                  "end": 2253
                                },
                                "typeArguments": null,
                                "start": 2252,
                                "end": 2253
                              },
                              "start": 2250,
                              "end": 2253
                            },
                            "start": 2247,
                            "end": 2253
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
                              "start": 2258,
                              "end": 2259
                            },
                            "typeArguments": null,
                            "start": 2258,
                            "end": 2259
                          },
                          "start": 2255,
                          "end": 2259
                        },
                        "start": 2246,
                        "end": 2259
                      },
                      "start": 2244,
                      "end": 2259
                    },
                    "start": 2243,
                    "end": 2259
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
                              "start": 2268,
                              "end": 2269
                            },
                            "typeArguments": null,
                            "start": 2268,
                            "end": 2269
                          },
                          "start": 2266,
                          "end": 2269
                        },
                        "start": 2265,
                        "end": 2269
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
                          "start": 2274,
                          "end": 2275
                        },
                        "typeArguments": null,
                        "start": 2274,
                        "end": 2275
                      },
                      "start": 2271,
                      "end": 2275
                    },
                    "start": 2264,
                    "end": 2275
                  },
                  "start": 2261,
                  "end": 2275
                },
                "start": 2203,
                "end": 2275
              },
              "start": 2201,
              "end": 2275
            },
            "start": 2199,
            "end": 2275
          },
          "init": null,
          "definite": false,
          "start": 2199,
          "end": 2275
        }
      ],
      "declare": true,
      "start": 2187,
      "end": 2276
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
          "start": 2278,
          "end": 2280
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2283,
          "end": 2285
        },
        "start": 2278,
        "end": 2285
      },
      "directive": null,
      "start": 2278,
      "end": 2286
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
          "start": 2293,
          "end": 2295
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2298,
          "end": 2300
        },
        "start": 2293,
        "end": 2300
      },
      "directive": null,
      "start": 2293,
      "end": 2301
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
                        "start": 2329,
                        "end": 2330
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2339,
                          "end": 2343
                        },
                        "typeArguments": null,
                        "start": 2339,
                        "end": 2343
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2329,
                      "end": 2343
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2345,
                        "end": 2346
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2355,
                          "end": 2362
                        },
                        "typeArguments": null,
                        "start": 2355,
                        "end": 2362
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2345,
                      "end": 2362
                    }
                  ],
                  "start": 2328,
                  "end": 2363
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
                                  "start": 2373,
                                  "end": 2374
                                },
                                "typeArguments": null,
                                "start": 2373,
                                "end": 2374
                              },
                              "start": 2371,
                              "end": 2374
                            },
                            "start": 2368,
                            "end": 2374
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
                              "start": 2379,
                              "end": 2380
                            },
                            "typeArguments": null,
                            "start": 2379,
                            "end": 2380
                          },
                          "start": 2376,
                          "end": 2380
                        },
                        "start": 2367,
                        "end": 2380
                      },
                      "start": 2365,
                      "end": 2380
                    },
                    "start": 2364,
                    "end": 2380
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
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2392,
                                  "end": 2393
                                },
                                "typeArguments": null,
                                "start": 2392,
                                "end": 2393
                              },
                              "start": 2390,
                              "end": 2393
                            },
                            "start": 2386,
                            "end": 2393
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
                              "start": 2398,
                              "end": 2399
                            },
                            "typeArguments": null,
                            "start": 2398,
                            "end": 2399
                          },
                          "start": 2395,
                          "end": 2399
                        },
                        "start": 2385,
                        "end": 2399
                      },
                      "start": 2383,
                      "end": 2399
                    },
                    "start": 2382,
                    "end": 2399
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
                              "start": 2408,
                              "end": 2409
                            },
                            "typeArguments": null,
                            "start": 2408,
                            "end": 2409
                          },
                          "start": 2406,
                          "end": 2409
                        },
                        "start": 2405,
                        "end": 2409
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
                          "start": 2414,
                          "end": 2415
                        },
                        "typeArguments": null,
                        "start": 2414,
                        "end": 2415
                      },
                      "start": 2411,
                      "end": 2415
                    },
                    "start": 2404,
                    "end": 2415
                  },
                  "start": 2401,
                  "end": 2415
                },
                "start": 2324,
                "end": 2415
              },
              "start": 2322,
              "end": 2415
            },
            "start": 2320,
            "end": 2415
          },
          "init": null,
          "definite": false,
          "start": 2320,
          "end": 2415
        }
      ],
      "declare": true,
      "start": 2308,
      "end": 2416
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
          "start": 2417,
          "end": 2419
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2422,
          "end": 2424
        },
        "start": 2417,
        "end": 2424
      },
      "directive": null,
      "start": 2417,
      "end": 2425
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
          "start": 2432,
          "end": 2434
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2437,
          "end": 2439
        },
        "start": 2432,
        "end": 2439
      },
      "directive": null,
      "start": 2432,
      "end": 2440
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
            "name": "b9",
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
                        "start": 2468,
                        "end": 2469
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2478,
                          "end": 2482
                        },
                        "typeArguments": null,
                        "start": 2478,
                        "end": 2482
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2468,
                      "end": 2482
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2484,
                        "end": 2485
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2494,
                          "end": 2501
                        },
                        "typeArguments": null,
                        "start": 2494,
                        "end": 2501
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2484,
                      "end": 2501
                    }
                  ],
                  "start": 2467,
                  "end": 2502
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
                                  "start": 2512,
                                  "end": 2513
                                },
                                "typeArguments": null,
                                "start": 2512,
                                "end": 2513
                              },
                              "start": 2510,
                              "end": 2513
                            },
                            "start": 2507,
                            "end": 2513
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
                              "start": 2518,
                              "end": 2519
                            },
                            "typeArguments": null,
                            "start": 2518,
                            "end": 2519
                          },
                          "start": 2515,
                          "end": 2519
                        },
                        "start": 2506,
                        "end": 2519
                      },
                      "start": 2504,
                      "end": 2519
                    },
                    "start": 2503,
                    "end": 2519
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
                                      "start": 2533,
                                      "end": 2536
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2538,
                                        "end": 2544
                                      },
                                      "start": 2536,
                                      "end": 2544
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2533,
                                    "end": 2545
                                  },
                                  {
                                    "type": "TSPropertySignature",
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2546,
                                      "end": 2550
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2552,
                                        "end": 2558
                                      },
                                      "start": 2550,
                                      "end": 2558
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2546,
                                    "end": 2558
                                  }
                                ],
                                "start": 2531,
                                "end": 2560
                              },
                              "start": 2529,
                              "end": 2560
                            },
                            "start": 2525,
                            "end": 2560
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
                              "start": 2565,
                              "end": 2566
                            },
                            "typeArguments": null,
                            "start": 2565,
                            "end": 2566
                          },
                          "start": 2562,
                          "end": 2566
                        },
                        "start": 2524,
                        "end": 2566
                      },
                      "start": 2522,
                      "end": 2566
                    },
                    "start": 2521,
                    "end": 2566
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
                              "start": 2575,
                              "end": 2576
                            },
                            "typeArguments": null,
                            "start": 2575,
                            "end": 2576
                          },
                          "start": 2573,
                          "end": 2576
                        },
                        "start": 2572,
                        "end": 2576
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
                          "start": 2581,
                          "end": 2582
                        },
                        "typeArguments": null,
                        "start": 2581,
                        "end": 2582
                      },
                      "start": 2578,
                      "end": 2582
                    },
                    "start": 2571,
                    "end": 2582
                  },
                  "start": 2568,
                  "end": 2582
                },
                "start": 2463,
                "end": 2582
              },
              "start": 2461,
              "end": 2582
            },
            "start": 2459,
            "end": 2582
          },
          "init": null,
          "definite": false,
          "start": 2459,
          "end": 2582
        }
      ],
      "declare": true,
      "start": 2447,
      "end": 2583
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2585,
          "end": 2587
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2590,
          "end": 2592
        },
        "start": 2585,
        "end": 2592
      },
      "directive": null,
      "start": 2585,
      "end": 2593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2600,
          "end": 2602
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2605,
          "end": 2607
        },
        "start": 2600,
        "end": 2607
      },
      "directive": null,
      "start": 2600,
      "end": 2608
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
                        "start": 2637,
                        "end": 2638
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2647,
                          "end": 2654
                        },
                        "typeArguments": null,
                        "start": 2647,
                        "end": 2654
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2637,
                      "end": 2654
                    }
                  ],
                  "start": 2636,
                  "end": 2655
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
                      "start": 2659,
                      "end": 2660
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
                            "start": 2662,
                            "end": 2663
                          },
                          "typeArguments": null,
                          "start": 2662,
                          "end": 2663
                        },
                        "start": 2662,
                        "end": 2665
                      },
                      "start": 2660,
                      "end": 2665
                    },
                    "value": null,
                    "start": 2656,
                    "end": 2665
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
                      "start": 2670,
                      "end": 2671
                    },
                    "typeArguments": null,
                    "start": 2670,
                    "end": 2671
                  },
                  "start": 2667,
                  "end": 2671
                },
                "start": 2632,
                "end": 2671
              },
              "start": 2630,
              "end": 2671
            },
            "start": 2627,
            "end": 2671
          },
          "init": null,
          "definite": false,
          "start": 2627,
          "end": 2671
        }
      ],
      "declare": true,
      "start": 2615,
      "end": 2672
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
          "start": 2674,
          "end": 2677
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2680,
          "end": 2683
        },
        "start": 2674,
        "end": 2683
      },
      "directive": null,
      "start": 2674,
      "end": 2684
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
          "start": 2691,
          "end": 2694
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2697,
          "end": 2700
        },
        "start": 2691,
        "end": 2700
      },
      "directive": null,
      "start": 2691,
      "end": 2701
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
                        "start": 2730,
                        "end": 2731
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2740,
                          "end": 2744
                        },
                        "typeArguments": null,
                        "start": 2740,
                        "end": 2744
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2730,
                      "end": 2744
                    }
                  ],
                  "start": 2729,
                  "end": 2745
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
                          "start": 2749,
                          "end": 2750
                        },
                        "typeArguments": null,
                        "start": 2749,
                        "end": 2750
                      },
                      "start": 2747,
                      "end": 2750
                    },
                    "start": 2746,
                    "end": 2750
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
                          "start": 2755,
                          "end": 2756
                        },
                        "typeArguments": null,
                        "start": 2755,
                        "end": 2756
                      },
                      "start": 2753,
                      "end": 2756
                    },
                    "start": 2752,
                    "end": 2756
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
                      "start": 2761,
                      "end": 2762
                    },
                    "typeArguments": null,
                    "start": 2761,
                    "end": 2762
                  },
                  "start": 2758,
                  "end": 2762
                },
                "start": 2725,
                "end": 2762
              },
              "start": 2723,
              "end": 2762
            },
            "start": 2720,
            "end": 2762
          },
          "init": null,
          "definite": false,
          "start": 2720,
          "end": 2762
        }
      ],
      "declare": true,
      "start": 2708,
      "end": 2763
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
          "start": 2765,
          "end": 2768
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2771,
          "end": 2774
        },
        "start": 2765,
        "end": 2774
      },
      "directive": null,
      "start": 2765,
      "end": 2775
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
          "start": 2782,
          "end": 2785
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2788,
          "end": 2791
        },
        "start": 2782,
        "end": 2791
      },
      "directive": null,
      "start": 2782,
      "end": 2792
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
                        "start": 2821,
                        "end": 2822
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2831,
                          "end": 2836
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
                                "start": 2837,
                                "end": 2841
                              },
                              "typeArguments": null,
                              "start": 2837,
                              "end": 2841
                            }
                          ],
                          "start": 2836,
                          "end": 2842
                        },
                        "start": 2831,
                        "end": 2842
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2821,
                      "end": 2842
                    }
                  ],
                  "start": 2820,
                  "end": 2843
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
                          "start": 2847,
                          "end": 2852
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
                                "start": 2853,
                                "end": 2857
                              },
                              "typeArguments": null,
                              "start": 2853,
                              "end": 2857
                            }
                          ],
                          "start": 2852,
                          "end": 2858
                        },
                        "start": 2847,
                        "end": 2858
                      },
                      "start": 2845,
                      "end": 2858
                    },
                    "start": 2844,
                    "end": 2858
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
                          "start": 2863,
                          "end": 2864
                        },
                        "typeArguments": null,
                        "start": 2863,
                        "end": 2864
                      },
                      "start": 2861,
                      "end": 2864
                    },
                    "start": 2860,
                    "end": 2864
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
                      "start": 2869,
                      "end": 2874
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
                            "start": 2875,
                            "end": 2882
                          },
                          "typeArguments": null,
                          "start": 2875,
                          "end": 2882
                        }
                      ],
                      "start": 2874,
                      "end": 2883
                    },
                    "start": 2869,
                    "end": 2883
                  },
                  "start": 2866,
                  "end": 2883
                },
                "start": 2816,
                "end": 2883
              },
              "start": 2814,
              "end": 2883
            },
            "start": 2811,
            "end": 2883
          },
          "init": null,
          "definite": false,
          "start": 2811,
          "end": 2883
        }
      ],
      "declare": true,
      "start": 2799,
      "end": 2884
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
          "start": 2886,
          "end": 2889
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2892,
          "end": 2895
        },
        "start": 2886,
        "end": 2895
      },
      "directive": null,
      "start": 2886,
      "end": 2896
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
          "start": 2903,
          "end": 2906
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2909,
          "end": 2912
        },
        "start": 2903,
        "end": 2912
      },
      "directive": null,
      "start": 2903,
      "end": 2913
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
            "name": "b13",
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
                        "start": 2942,
                        "end": 2943
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2952,
                          "end": 2957
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
                                "start": 2958,
                                "end": 2965
                              },
                              "typeArguments": null,
                              "start": 2958,
                              "end": 2965
                            }
                          ],
                          "start": 2957,
                          "end": 2966
                        },
                        "start": 2952,
                        "end": 2966
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2942,
                      "end": 2966
                    }
                  ],
                  "start": 2941,
                  "end": 2967
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
                          "start": 2971,
                          "end": 2976
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
                                "start": 2977,
                                "end": 2981
                              },
                              "typeArguments": null,
                              "start": 2977,
                              "end": 2981
                            }
                          ],
                          "start": 2976,
                          "end": 2982
                        },
                        "start": 2971,
                        "end": 2982
                      },
                      "start": 2969,
                      "end": 2982
                    },
                    "start": 2968,
                    "end": 2982
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
                          "start": 2987,
                          "end": 2988
                        },
                        "typeArguments": null,
                        "start": 2987,
                        "end": 2988
                      },
                      "start": 2985,
                      "end": 2988
                    },
                    "start": 2984,
                    "end": 2988
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
                      "start": 2993,
                      "end": 2994
                    },
                    "typeArguments": null,
                    "start": 2993,
                    "end": 2994
                  },
                  "start": 2990,
                  "end": 2994
                },
                "start": 2937,
                "end": 2994
              },
              "start": 2935,
              "end": 2994
            },
            "start": 2932,
            "end": 2994
          },
          "init": null,
          "definite": false,
          "start": 2932,
          "end": 2994
        }
      ],
      "declare": true,
      "start": 2920,
      "end": 2995
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2997,
          "end": 3000
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3003,
          "end": 3006
        },
        "start": 2997,
        "end": 3006
      },
      "directive": null,
      "start": 2997,
      "end": 3007
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3014,
          "end": 3017
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 3020,
          "end": 3023
        },
        "start": 3014,
        "end": 3023
      },
      "directive": null,
      "start": 3014,
      "end": 3024
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
            "name": "b14",
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
                        "start": 3053,
                        "end": 3054
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3053,
                      "end": 3054
                    }
                  ],
                  "start": 3052,
                  "end": 3055
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
                              "start": 3061,
                              "end": 3062
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
                                  "start": 3064,
                                  "end": 3065
                                },
                                "typeArguments": null,
                                "start": 3064,
                                "end": 3065
                              },
                              "start": 3062,
                              "end": 3065
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3061,
                            "end": 3066
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
                              "start": 3067,
                              "end": 3068
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
                                  "start": 3070,
                                  "end": 3071
                                },
                                "typeArguments": null,
                                "start": 3070,
                                "end": 3071
                              },
                              "start": 3068,
                              "end": 3071
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3067,
                            "end": 3071
                          }
                        ],
                        "start": 3059,
                        "end": 3073
                      },
                      "start": 3057,
                      "end": 3073
                    },
                    "start": 3056,
                    "end": 3073
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
                      "start": 3078,
                      "end": 3079
                    },
                    "typeArguments": null,
                    "start": 3078,
                    "end": 3079
                  },
                  "start": 3075,
                  "end": 3079
                },
                "start": 3048,
                "end": 3079
              },
              "start": 3046,
              "end": 3079
            },
            "start": 3043,
            "end": 3079
          },
          "init": null,
          "definite": false,
          "start": 3043,
          "end": 3079
        }
      ],
      "declare": true,
      "start": 3031,
      "end": 3080
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 3082,
          "end": 3085
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 3088,
          "end": 3091
        },
        "start": 3082,
        "end": 3091
      },
      "directive": null,
      "start": 3082,
      "end": 3092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 3099,
          "end": 3102
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 3105,
          "end": 3108
        },
        "start": 3099,
        "end": 3108
      },
      "directive": null,
      "start": 3099,
      "end": 3109
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
                        "start": 3138,
                        "end": 3139
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3138,
                      "end": 3139
                    }
                  ],
                  "start": 3137,
                  "end": 3140
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
                          "start": 3144,
                          "end": 3145
                        },
                        "typeArguments": null,
                        "start": 3144,
                        "end": 3145
                      },
                      "start": 3142,
                      "end": 3145
                    },
                    "start": 3141,
                    "end": 3145
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
                        "start": 3150,
                        "end": 3151
                      },
                      "typeArguments": null,
                      "start": 3150,
                      "end": 3151
                    },
                    "start": 3150,
                    "end": 3153
                  },
                  "start": 3147,
                  "end": 3153
                },
                "start": 3133,
                "end": 3153
              },
              "start": 3131,
              "end": 3153
            },
            "start": 3128,
            "end": 3153
          },
          "init": null,
          "definite": false,
          "start": 3128,
          "end": 3153
        }
      ],
      "declare": true,
      "start": 3116,
      "end": 3154
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
          "start": 3156,
          "end": 3159
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3162,
          "end": 3165
        },
        "start": 3156,
        "end": 3165
      },
      "directive": null,
      "start": 3156,
      "end": 3166
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
          "start": 3173,
          "end": 3176
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3179,
          "end": 3182
        },
        "start": 3173,
        "end": 3182
      },
      "directive": null,
      "start": 3173,
      "end": 3183
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
                        "start": 3212,
                        "end": 3213
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3222,
                          "end": 3226
                        },
                        "typeArguments": null,
                        "start": 3222,
                        "end": 3226
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3212,
                      "end": 3226
                    }
                  ],
                  "start": 3211,
                  "end": 3227
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
                          "start": 3231,
                          "end": 3232
                        },
                        "typeArguments": null,
                        "start": 3231,
                        "end": 3232
                      },
                      "start": 3229,
                      "end": 3232
                    },
                    "start": 3228,
                    "end": 3232
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 3237,
                      "end": 3243
                    },
                    "start": 3237,
                    "end": 3245
                  },
                  "start": 3234,
                  "end": 3245
                },
                "start": 3207,
                "end": 3245
              },
              "start": 3205,
              "end": 3245
            },
            "start": 3202,
            "end": 3245
          },
          "init": null,
          "definite": false,
          "start": 3202,
          "end": 3245
        }
      ],
      "declare": true,
      "start": 3190,
      "end": 3246
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
          "start": 3247,
          "end": 3250
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3253,
          "end": 3256
        },
        "start": 3247,
        "end": 3256
      },
      "directive": null,
      "start": 3247,
      "end": 3257
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
          "start": 3264,
          "end": 3267
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3270,
          "end": 3273
        },
        "start": 3264,
        "end": 3273
      },
      "directive": null,
      "start": 3264,
      "end": 3274
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
                        "start": 3303,
                        "end": 3304
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3303,
                      "end": 3304
                    }
                  ],
                  "start": 3302,
                  "end": 3305
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
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 3317,
                                  "end": 3318
                                },
                                "typeArguments": null,
                                "start": 3317,
                                "end": 3318
                              },
                              "start": 3315,
                              "end": 3318
                            },
                            "start": 3314,
                            "end": 3318
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
                              "start": 3323,
                              "end": 3324
                            },
                            "typeArguments": null,
                            "start": 3323,
                            "end": 3324
                          },
                          "start": 3320,
                          "end": 3324
                        },
                        "start": 3309,
                        "end": 3324
                      },
                      "start": 3307,
                      "end": 3324
                    },
                    "start": 3306,
                    "end": 3324
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
                        "start": 3329,
                        "end": 3330
                      },
                      "typeArguments": null,
                      "start": 3329,
                      "end": 3330
                    },
                    "start": 3329,
                    "end": 3332
                  },
                  "start": 3326,
                  "end": 3332
                },
                "start": 3298,
                "end": 3332
              },
              "start": 3296,
              "end": 3332
            },
            "start": 3293,
            "end": 3332
          },
          "init": null,
          "definite": false,
          "start": 3293,
          "end": 3332
        }
      ],
      "declare": true,
      "start": 3281,
      "end": 3333
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
          "start": 3340,
          "end": 3343
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3346,
          "end": 3349
        },
        "start": 3340,
        "end": 3349
      },
      "directive": null,
      "start": 3340,
      "end": 3350
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
          "start": 3357,
          "end": 3360
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3363,
          "end": 3366
        },
        "start": 3357,
        "end": 3366
      },
      "directive": null,
      "start": 3357,
      "end": 3367
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
            "name": "b18",
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
                        "start": 3396,
                        "end": 3397
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3396,
                      "end": 3397
                    }
                  ],
                  "start": 3395,
                  "end": 3398
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
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                  "start": 3410,
                                  "end": 3411
                                },
                                "typeArguments": null,
                                "start": 3410,
                                "end": 3411
                              },
                              "start": 3408,
                              "end": 3411
                            },
                            "start": 3407,
                            "end": 3411
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
                              "start": 3416,
                              "end": 3417
                            },
                            "typeArguments": null,
                            "start": 3416,
                            "end": 3417
                          },
                          "start": 3413,
                          "end": 3417
                        },
                        "start": 3402,
                        "end": 3417
                      },
                      "start": 3400,
                      "end": 3417
                    },
                    "start": 3399,
                    "end": 3417
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
                        "start": 3422,
                        "end": 3423
                      },
                      "typeArguments": null,
                      "start": 3422,
                      "end": 3423
                    },
                    "start": 3422,
                    "end": 3425
                  },
                  "start": 3419,
                  "end": 3425
                },
                "start": 3391,
                "end": 3425
              },
              "start": 3389,
              "end": 3425
            },
            "start": 3386,
            "end": 3425
          },
          "init": null,
          "definite": false,
          "start": 3386,
          "end": 3425
        }
      ],
      "declare": true,
      "start": 3374,
      "end": 3426
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3428,
          "end": 3431
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3434,
          "end": 3437
        },
        "start": 3428,
        "end": 3437
      },
      "directive": null,
      "start": 3428,
      "end": 3438
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3445,
          "end": 3448
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3451,
          "end": 3454
        },
        "start": 3445,
        "end": 3454
      },
      "directive": null,
      "start": 3445,
      "end": 3455
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 92,
  "end": 3461
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 92,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 98,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 105,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 126,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 134,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 142,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 149,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 170,
    "end": 178
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 179,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 212,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 218,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 239,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 252,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 263,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 271,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 286,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 294,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 297,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 307,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 315,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 319,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 331,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 339,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 352,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 360,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 364,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 368,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 376,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 384,
    "end": 386
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 387,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 393,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 401,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 417,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 425,
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
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 439,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 447,
    "end": 454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 455,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 459,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 463,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 472,
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
    "value": "string",
    "start": 477,
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
    "value": "=>",
    "start": 485,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 496,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 499,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 507,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 519,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 527,
    "end": 528
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 532,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 537,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 543,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 546,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 555,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 558,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 564,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 576,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 580,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 594,
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
    "type": "Identifier",
    "value": "Derived",
    "start": 603,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 619,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 625,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 637,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 645,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 653,
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
    "type": "Punctuator",
    "value": "(",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 662,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 667,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 673,
    "end": 675
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 676,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 689,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 695,
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
    "value": "Derived",
    "start": 704,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 717,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 720,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 726,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 729,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 738,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 746,
    "end": 749
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 750,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 754,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 774,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 777,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 787,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 790,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 796,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 802,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 805,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 821,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 827,
    "end": 829
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 830,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 839,
    "end": 846
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 847,
    "end": 850
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 851,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 854,
    "end": 855
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 856,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 860,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 861,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 867,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 878,
    "end": 880
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 881,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 890,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 898,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 902,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 917,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 920,
    "end": 921
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 922,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 929,
    "end": 930
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 930,
    "end": 931
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 932,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 937,
    "end": 940
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 940,
    "end": 941
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 942,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 950,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 953,
    "end": 954
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 955,
    "end": 961
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 965,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 968,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 972,
    "end": 973
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 974,
    "end": 981
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 982,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 989,
    "end": 990
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 991,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 995,
    "end": 996
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 996,
    "end": 997
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 997,
    "end": 998
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 999,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1005,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1015,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1021,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1032,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1035,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1041,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1051,
    "end": 1058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1059,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1063,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1082,
    "end": 1086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1089,
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
    "value": "Array",
    "start": 1092,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1098,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1105,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1108,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1111,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1117,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1127,
    "end": 1134
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1157,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1168,
    "end": 1174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1178,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1181,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1189,
    "end": 1196
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1201,
    "end": 1204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1212,
    "end": 1215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1220,
    "end": 1226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1226,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1229,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1237,
    "end": 1238
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
    "type": "Identifier",
    "value": "string",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
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
    "value": "string",
    "start": 1260,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1267,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1272,
    "end": 1279
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1280,
    "end": 1283
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1284,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1289,
    "end": 1290
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1302,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1310,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1326,
    "end": 1332
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1334,
    "end": 1335
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1340,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1355,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1362,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "number",
    "start": 1368,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1380,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1388,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1392,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1409,
    "end": 1410
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1411,
    "end": 1414
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1419,
    "end": 1425
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1427,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1430,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1439,
    "end": 1445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1445,
    "end": 1446
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1447,
    "end": 1448
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1469,
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
    "value": "=>",
    "start": 1477,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1480,
    "end": 1486
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1486,
    "end": 1487
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1489,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1496,
    "end": 1497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1502,
    "end": 1509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1510,
    "end": 1513
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1514,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1525,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Keyword",
    "value": "new",
    "start": 1543,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1551,
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
    "value": "number",
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
    "type": "Keyword",
    "value": "new",
    "start": 1576,
    "end": 1579
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1584,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1593,
    "end": 1599
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "type": "Punctuator",
    "value": ")",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1613,
    "end": 1614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1614,
    "end": 1615
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1620,
    "end": 1623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1638,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1646,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1656,
    "end": 1663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1673,
    "end": 1676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1681,
    "end": 1685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1685,
    "end": 1686
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1686,
    "end": 1687
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1688,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1699,
    "end": 1700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1700,
    "end": 1701
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1702,
    "end": 1705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1705,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1712,
    "end": 1719
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1720,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1727,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1732,
    "end": 1733
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1734,
    "end": 1735
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1738,
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
    "value": "=>",
    "start": 1741,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1745,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1746,
    "end": 1747
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1755,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1776,
    "end": 1783
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1784,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1788,
    "end": 1790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1792,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1798,
    "end": 1799
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1803,
    "end": 1804
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1809,
    "end": 1815
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1816,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1823,
    "end": 1824
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1825,
    "end": 1827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1827,
    "end": 1828
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1836,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1841,
    "end": 1843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1843,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1851,
    "end": 1858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1859,
    "end": 1862
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1863,
    "end": 1865
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1865,
    "end": 1866
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1867,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1871,
    "end": 1872
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1875,
    "end": 1876
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1878,
    "end": 1879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1879,
    "end": 1880
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1881,
    "end": 1883
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1888,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1893,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1895,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1903,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1908,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1918,
    "end": 1925
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1926,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1930,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1934,
    "end": 1937
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1942,
    "end": 1943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1943,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1952,
    "end": 1953
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1954,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1957,
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
    "value": ";",
    "start": 1961,
    "end": 1962
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1964,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1969,
    "end": 1971
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1979,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1984,
    "end": 1986
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1994,
    "end": 2001
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2002,
    "end": 2005
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2006,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2010,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2014,
    "end": 2015
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2016,
    "end": 2017
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2024,
    "end": 2025
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2025,
    "end": 2028
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2030,
    "end": 2031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2033,
    "end": 2035
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2036,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2039,
    "end": 2041
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2046,
    "end": 2048
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2051,
    "end": 2053
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 2061,
    "end": 2063
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2064,
    "end": 2065
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 2066,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2076,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2084,
    "end": 2087
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2088,
    "end": 2090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2090,
    "end": 2091
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2092,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2097,
    "end": 2098
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2099,
    "end": 2106
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2107,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2113,
    "end": 2114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2115,
    "end": 2122
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2123,
    "end": 2130
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
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
    "value": "arg",
    "start": 2136,
    "end": 2139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2141,
    "end": 2142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2144,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2150,
    "end": 2152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2153,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "a6",
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
    "value": "b6",
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
    "value": "b6",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2177,
    "end": 2179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2187,
    "end": 2194
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2195,
    "end": 2198
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2199,
    "end": 2201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2203,
    "end": 2206
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2207,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2208,
    "end": 2209
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2210,
    "end": 2217
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2218,
    "end": 2222
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2222,
    "end": 2223
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2226,
    "end": 2233
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2234,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2242,
    "end": 2243
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2246,
    "end": 2247
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2247,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2255,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2258,
    "end": 2259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2259,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2261,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2266,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2269,
    "end": 2270
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2271,
    "end": 2273
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2278,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2281,
    "end": 2282
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2283,
    "end": 2285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2285,
    "end": 2286
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2293,
    "end": 2295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2296,
    "end": 2297
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2298,
    "end": 2300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2308,
    "end": 2315
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2316,
    "end": 2319
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2320,
    "end": 2322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2322,
    "end": 2323
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2324,
    "end": 2327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2331,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2339,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2343,
    "end": 2344
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2347,
    "end": 2354
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2355,
    "end": 2362
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2363,
    "end": 2364
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2364,
    "end": 2365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2368,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2371,
    "end": 2372
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2373,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2376,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2382,
    "end": 2383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2383,
    "end": 2384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2386,
    "end": 2390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2392,
    "end": 2393
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2393,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2395,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2398,
    "end": 2399
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2399,
    "end": 2400
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2401,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2404,
    "end": 2405
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2406,
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
    "value": ")",
    "start": 2409,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2411,
    "end": 2413
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2417,
    "end": 2419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2420,
    "end": 2421
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2422,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2432,
    "end": 2434
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2435,
    "end": 2436
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 2437,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2447,
    "end": 2454
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2455,
    "end": 2458
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2459,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2463,
    "end": 2466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2467,
    "end": 2468
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2468,
    "end": 2469
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2470,
    "end": 2477
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2478,
    "end": 2482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2486,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2494,
    "end": 2501
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2501,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2503,
    "end": 2504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2507,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2513,
    "end": 2514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2515,
    "end": 2517
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2519,
    "end": 2520
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2521,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2522,
    "end": 2523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2525,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2533,
    "end": 2536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2538,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2546,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2552,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2559,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2562,
    "end": 2564
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2566,
    "end": 2567
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2568,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2572,
    "end": 2573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2573,
    "end": 2574
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2575,
    "end": 2576
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2578,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2581,
    "end": 2582
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2582,
    "end": 2583
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2585,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2590,
    "end": 2592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2600,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2605,
    "end": 2607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2615,
    "end": 2622
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2623,
    "end": 2626
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2627,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2637,
    "end": 2638
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2639,
    "end": 2646
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2647,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2655,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2656,
    "end": 2659
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2659,
    "end": 2660
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2660,
    "end": 2661
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2662,
    "end": 2663
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2664,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2667,
    "end": 2669
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2671,
    "end": 2672
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2674,
    "end": 2677
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2680,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2691,
    "end": 2694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2697,
    "end": 2700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2708,
    "end": 2715
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2716,
    "end": 2719
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2720,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2725,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2730,
    "end": 2731
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2732,
    "end": 2739
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2740,
    "end": 2744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2746,
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
    "value": "T",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2750,
    "end": 2751
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2752,
    "end": 2753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2755,
    "end": 2756
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2756,
    "end": 2757
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2758,
    "end": 2760
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2765,
    "end": 2768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2769,
    "end": 2770
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2771,
    "end": 2774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2782,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2788,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2799,
    "end": 2806
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2807,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2811,
    "end": 2814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2814,
    "end": 2815
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2816,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2820,
    "end": 2821
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2821,
    "end": 2822
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2823,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2831,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2837,
    "end": 2841
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2841,
    "end": 2842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2842,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2845,
    "end": 2846
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2847,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2853,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2858,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2860,
    "end": 2861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2866,
    "end": 2868
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2869,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2875,
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
    "value": ";",
    "start": 2883,
    "end": 2884
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2886,
    "end": 2889
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2890,
    "end": 2891
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2892,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2903,
    "end": 2906
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2909,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2920,
    "end": 2927
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2928,
    "end": 2931
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2932,
    "end": 2935
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2937,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2944,
    "end": 2951
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2952,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2957,
    "end": 2958
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2958,
    "end": 2965
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2965,
    "end": 2966
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2966,
    "end": 2967
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2967,
    "end": 2968
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2968,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2971,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2977,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2981,
    "end": 2982
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2985,
    "end": 2986
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2987,
    "end": 2988
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2990,
    "end": 2992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2997,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 3003,
    "end": 3006
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 3014,
    "end": 3017
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3018,
    "end": 3019
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 3020,
    "end": 3023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3023,
    "end": 3024
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3031,
    "end": 3038
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3039,
    "end": 3042
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 3043,
    "end": 3046
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3046,
    "end": 3047
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3048,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3056,
    "end": 3057
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3057,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3061,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3068,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3073,
    "end": 3074
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3075,
    "end": 3077
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3078,
    "end": 3079
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3079,
    "end": 3080
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 3082,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 3088,
    "end": 3091
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3091,
    "end": 3092
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 3099,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3103,
    "end": 3104
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 3105,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3116,
    "end": 3123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3124,
    "end": 3127
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 3128,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3133,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3147,
    "end": 3149
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3151,
    "end": 3152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3156,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 3162,
    "end": 3165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3165,
    "end": 3166
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 3173,
    "end": 3176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3177,
    "end": 3178
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3179,
    "end": 3182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3182,
    "end": 3183
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3190,
    "end": 3197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3198,
    "end": 3201
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3202,
    "end": 3205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3205,
    "end": 3206
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3207,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3212,
    "end": 3213
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3214,
    "end": 3221
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3222,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3227,
    "end": 3228
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3231,
    "end": 3232
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3234,
    "end": 3236
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3237,
    "end": 3243
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3243,
    "end": 3244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3247,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3253,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3264,
    "end": 3267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3270,
    "end": 3273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3273,
    "end": 3274
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3281,
    "end": 3288
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3289,
    "end": 3292
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3293,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3298,
    "end": 3301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3303,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3304,
    "end": 3305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3306,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3309,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3320,
    "end": 3322
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3323,
    "end": 3324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3324,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3326,
    "end": 3328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3332,
    "end": 3333
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3340,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3346,
    "end": 3349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3349,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3357,
    "end": 3360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3361,
    "end": 3362
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3363,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3366,
    "end": 3367
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3374,
    "end": 3381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3382,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3386,
    "end": 3389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3391,
    "end": 3394
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3395,
    "end": 3396
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3396,
    "end": 3397
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3402,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3407,
    "end": 3408
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3408,
    "end": 3409
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3411,
    "end": 3412
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3413,
    "end": 3415
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3416,
    "end": 3417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3417,
    "end": 3418
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3419,
    "end": 3421
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3422,
    "end": 3423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3423,
    "end": 3424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3424,
    "end": 3425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3425,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3428,
    "end": 3431
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3432,
    "end": 3433
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3434,
    "end": 3437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3437,
    "end": 3438
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3445,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3449,
    "end": 3450
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3451,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3454,
    "end": 3455
  }
]
```
