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
        "start": 112,
        "end": 116
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
              "start": 119,
              "end": 122
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 124,
                "end": 130
              },
              "start": 122,
              "end": 130
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
            "start": 119,
            "end": 131
          }
        ],
        "start": 117,
        "end": 133
      },
      "abstract": false,
      "declare": false,
      "start": 106,
      "end": 133
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
        "start": 140,
        "end": 147
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
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
              "start": 163,
              "end": 166
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 168,
                "end": 174
              },
              "start": 166,
              "end": 174
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
            "start": 163,
            "end": 175
          }
        ],
        "start": 161,
        "end": 177
      },
      "abstract": false,
      "declare": false,
      "start": 134,
      "end": 177
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
        "start": 184,
        "end": 192
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 208
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
              "start": 211,
              "end": 214
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 216,
                "end": 222
              },
              "start": 214,
              "end": 222
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
            "start": 211,
            "end": 223
          }
        ],
        "start": 209,
        "end": 225
      },
      "abstract": false,
      "declare": false,
      "start": 178,
      "end": 225
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
        "start": 232,
        "end": 244
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 253,
        "end": 257
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
              "start": 260,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
              },
              "start": 264,
              "end": 272
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
            "start": 260,
            "end": 273
          }
        ],
        "start": 258,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 226,
      "end": 275
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
                        "type": "TSNumberKeyword",
                        "start": 296,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "start": 293,
                    "end": 302
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 307,
                      "end": 313
                    },
                    "start": 307,
                    "end": 315
                  },
                  "start": 304,
                  "end": 315
                },
                "start": 292,
                "end": 315
              },
              "start": 290,
              "end": 315
            },
            "start": 289,
            "end": 315
          },
          "init": null,
          "definite": false,
          "start": 289,
          "end": 315
        }
      ],
      "declare": true,
      "start": 277,
      "end": 316
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
                        "type": "TSNumberKeyword",
                        "start": 337,
                        "end": 343
                      },
                      "start": 335,
                      "end": 343
                    },
                    "start": 334,
                    "end": 343
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 348,
                      "end": 354
                    },
                    "start": 348,
                    "end": 356
                  },
                  "start": 345,
                  "end": 356
                },
                "start": 333,
                "end": 356
              },
              "start": 331,
              "end": 356
            },
            "start": 329,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 329,
          "end": 356
        }
      ],
      "declare": true,
      "start": 317,
      "end": 357
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
                        "type": "TSNumberKeyword",
                        "start": 378,
                        "end": 384
                      },
                      "start": 376,
                      "end": 384
                    },
                    "start": 375,
                    "end": 384
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 389,
                    "end": 393
                  },
                  "start": 386,
                  "end": 393
                },
                "start": 374,
                "end": 393
              },
              "start": 372,
              "end": 393
            },
            "start": 370,
            "end": 393
          },
          "init": null,
          "definite": false,
          "start": 370,
          "end": 393
        }
      ],
      "declare": true,
      "start": 358,
      "end": 394
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
                        "start": 415,
                        "end": 421
                      },
                      "start": 413,
                      "end": 421
                    },
                    "start": 412,
                    "end": 421
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
                        "start": 426,
                        "end": 432
                      },
                      "start": 424,
                      "end": 432
                    },
                    "start": 423,
                    "end": 432
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 437,
                    "end": 443
                  },
                  "start": 434,
                  "end": 443
                },
                "start": 411,
                "end": 443
              },
              "start": 409,
              "end": 443
            },
            "start": 407,
            "end": 443
          },
          "init": null,
          "definite": false,
          "start": 407,
          "end": 443
        }
      ],
      "declare": true,
      "start": 395,
      "end": 444
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
                                "start": 471,
                                "end": 477
                              },
                              "start": 469,
                              "end": 477
                            },
                            "start": 466,
                            "end": 477
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 482,
                            "end": 488
                          },
                          "start": 479,
                          "end": 488
                        },
                        "start": 465,
                        "end": 488
                      },
                      "start": 463,
                      "end": 488
                    },
                    "start": 462,
                    "end": 488
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 493,
                    "end": 499
                  },
                  "start": 490,
                  "end": 499
                },
                "start": 461,
                "end": 499
              },
              "start": 459,
              "end": 499
            },
            "start": 457,
            "end": 499
          },
          "init": null,
          "definite": false,
          "start": 457,
          "end": 499
        }
      ],
      "declare": true,
      "start": 445,
      "end": 500
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
                                  "start": 527,
                                  "end": 531
                                },
                                "typeArguments": null,
                                "start": 527,
                                "end": 531
                              },
                              "start": 525,
                              "end": 531
                            },
                            "start": 522,
                            "end": 531
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
                              "start": 536,
                              "end": 543
                            },
                            "typeArguments": null,
                            "start": 536,
                            "end": 543
                          },
                          "start": 533,
                          "end": 543
                        },
                        "start": 521,
                        "end": 543
                      },
                      "start": 519,
                      "end": 543
                    },
                    "start": 518,
                    "end": 543
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
                      "start": 548,
                      "end": 552
                    },
                    "typeArguments": null,
                    "start": 548,
                    "end": 552
                  },
                  "start": 545,
                  "end": 552
                },
                "start": 517,
                "end": 552
              },
              "start": 515,
              "end": 552
            },
            "start": 513,
            "end": 552
          },
          "init": null,
          "definite": false,
          "start": 513,
          "end": 552
        }
      ],
      "declare": true,
      "start": 501,
      "end": 553
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
                                  "start": 580,
                                  "end": 584
                                },
                                "typeArguments": null,
                                "start": 580,
                                "end": 584
                              },
                              "start": 578,
                              "end": 584
                            },
                            "start": 575,
                            "end": 584
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
                              "start": 589,
                              "end": 596
                            },
                            "typeArguments": null,
                            "start": 589,
                            "end": 596
                          },
                          "start": 586,
                          "end": 596
                        },
                        "start": 574,
                        "end": 596
                      },
                      "start": 572,
                      "end": 596
                    },
                    "start": 571,
                    "end": 596
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
                              "start": 605,
                              "end": 609
                            },
                            "typeArguments": null,
                            "start": 605,
                            "end": 609
                          },
                          "start": 603,
                          "end": 609
                        },
                        "start": 602,
                        "end": 609
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
                          "start": 614,
                          "end": 621
                        },
                        "typeArguments": null,
                        "start": 614,
                        "end": 621
                      },
                      "start": 611,
                      "end": 621
                    },
                    "start": 601,
                    "end": 621
                  },
                  "start": 598,
                  "end": 621
                },
                "start": 570,
                "end": 621
              },
              "start": 568,
              "end": 621
            },
            "start": 566,
            "end": 621
          },
          "init": null,
          "definite": false,
          "start": 566,
          "end": 621
        }
      ],
      "declare": true,
      "start": 554,
      "end": 622
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
                                  "start": 649,
                                  "end": 653
                                },
                                "typeArguments": null,
                                "start": 649,
                                "end": 653
                              },
                              "start": 647,
                              "end": 653
                            },
                            "start": 644,
                            "end": 653
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
                              "start": 658,
                              "end": 665
                            },
                            "typeArguments": null,
                            "start": 658,
                            "end": 665
                          },
                          "start": 655,
                          "end": 665
                        },
                        "start": 643,
                        "end": 665
                      },
                      "start": 641,
                      "end": 665
                    },
                    "start": 640,
                    "end": 665
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
                                  "start": 677,
                                  "end": 681
                                },
                                "typeArguments": null,
                                "start": 677,
                                "end": 681
                              },
                              "start": 675,
                              "end": 681
                            },
                            "start": 671,
                            "end": 681
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
                              "start": 686,
                              "end": 693
                            },
                            "typeArguments": null,
                            "start": 686,
                            "end": 693
                          },
                          "start": 683,
                          "end": 693
                        },
                        "start": 670,
                        "end": 693
                      },
                      "start": 668,
                      "end": 693
                    },
                    "start": 667,
                    "end": 693
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
                              "start": 702,
                              "end": 706
                            },
                            "typeArguments": null,
                            "start": 702,
                            "end": 706
                          },
                          "start": 700,
                          "end": 706
                        },
                        "start": 699,
                        "end": 706
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
                          "start": 711,
                          "end": 718
                        },
                        "typeArguments": null,
                        "start": 711,
                        "end": 718
                      },
                      "start": 708,
                      "end": 718
                    },
                    "start": 698,
                    "end": 718
                  },
                  "start": 695,
                  "end": 718
                },
                "start": 639,
                "end": 718
              },
              "start": 637,
              "end": 718
            },
            "start": 635,
            "end": 718
          },
          "init": null,
          "definite": false,
          "start": 635,
          "end": 718
        }
      ],
      "declare": true,
      "start": 623,
      "end": 719
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
                                  "start": 746,
                                  "end": 750
                                },
                                "typeArguments": null,
                                "start": 746,
                                "end": 750
                              },
                              "start": 744,
                              "end": 750
                            },
                            "start": 741,
                            "end": 750
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
                              "start": 755,
                              "end": 762
                            },
                            "typeArguments": null,
                            "start": 755,
                            "end": 762
                          },
                          "start": 752,
                          "end": 762
                        },
                        "start": 740,
                        "end": 762
                      },
                      "start": 738,
                      "end": 762
                    },
                    "start": 737,
                    "end": 762
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
                                  "start": 774,
                                  "end": 778
                                },
                                "typeArguments": null,
                                "start": 774,
                                "end": 778
                              },
                              "start": 772,
                              "end": 778
                            },
                            "start": 768,
                            "end": 778
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
                              "start": 783,
                              "end": 790
                            },
                            "typeArguments": null,
                            "start": 783,
                            "end": 790
                          },
                          "start": 780,
                          "end": 790
                        },
                        "start": 767,
                        "end": 790
                      },
                      "start": 765,
                      "end": 790
                    },
                    "start": 764,
                    "end": 790
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
                              "start": 799,
                              "end": 803
                            },
                            "typeArguments": null,
                            "start": 799,
                            "end": 803
                          },
                          "start": 797,
                          "end": 803
                        },
                        "start": 796,
                        "end": 803
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
                          "start": 808,
                          "end": 815
                        },
                        "typeArguments": null,
                        "start": 808,
                        "end": 815
                      },
                      "start": 805,
                      "end": 815
                    },
                    "start": 795,
                    "end": 815
                  },
                  "start": 792,
                  "end": 815
                },
                "start": 736,
                "end": 815
              },
              "start": 734,
              "end": 815
            },
            "start": 732,
            "end": 815
          },
          "init": null,
          "definite": false,
          "start": 732,
          "end": 815
        }
      ],
      "declare": true,
      "start": 720,
      "end": 816
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
                "type": "TSFunctionType",
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
                      "start": 838,
                      "end": 839
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
                            "start": 841,
                            "end": 848
                          },
                          "typeArguments": null,
                          "start": 841,
                          "end": 848
                        },
                        "start": 841,
                        "end": 850
                      },
                      "start": 839,
                      "end": 850
                    },
                    "value": null,
                    "start": 835,
                    "end": 850
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
                      "start": 855,
                      "end": 862
                    },
                    "typeArguments": null,
                    "start": 855,
                    "end": 862
                  },
                  "start": 852,
                  "end": 862
                },
                "start": 834,
                "end": 862
              },
              "start": 832,
              "end": 862
            },
            "start": 829,
            "end": 862
          },
          "init": null,
          "definite": false,
          "start": 829,
          "end": 862
        }
      ],
      "declare": true,
      "start": 817,
      "end": 863
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
                              "start": 887,
                              "end": 890
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 892,
                                "end": 898
                              },
                              "start": 890,
                              "end": 898
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 887,
                            "end": 898
                          }
                        ],
                        "start": 885,
                        "end": 900
                      },
                      "start": 883,
                      "end": 900
                    },
                    "start": 882,
                    "end": 900
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
                              "start": 907,
                              "end": 910
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 912,
                                "end": 918
                              },
                              "start": 910,
                              "end": 918
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 907,
                            "end": 919
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
                              "start": 920,
                              "end": 923
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 925,
                                "end": 931
                              },
                              "start": 923,
                              "end": 931
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 920,
                            "end": 931
                          }
                        ],
                        "start": 905,
                        "end": 933
                      },
                      "start": 903,
                      "end": 933
                    },
                    "start": 902,
                    "end": 933
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
                      "start": 938,
                      "end": 942
                    },
                    "typeArguments": null,
                    "start": 938,
                    "end": 942
                  },
                  "start": 935,
                  "end": 942
                },
                "start": 881,
                "end": 942
              },
              "start": 879,
              "end": 942
            },
            "start": 876,
            "end": 942
          },
          "init": null,
          "definite": false,
          "start": 876,
          "end": 942
        }
      ],
      "declare": true,
      "start": 864,
      "end": 943
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 965,
                          "end": 970
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
                                "start": 971,
                                "end": 975
                              },
                              "typeArguments": null,
                              "start": 971,
                              "end": 975
                            }
                          ],
                          "start": 970,
                          "end": 976
                        },
                        "start": 965,
                        "end": 976
                      },
                      "start": 963,
                      "end": 976
                    },
                    "start": 962,
                    "end": 976
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
                          "start": 981,
                          "end": 986
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
                                "start": 987,
                                "end": 995
                              },
                              "typeArguments": null,
                              "start": 987,
                              "end": 995
                            }
                          ],
                          "start": 986,
                          "end": 996
                        },
                        "start": 981,
                        "end": 996
                      },
                      "start": 979,
                      "end": 996
                    },
                    "start": 978,
                    "end": 996
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
                      "start": 1001,
                      "end": 1006
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
                            "start": 1007,
                            "end": 1014
                          },
                          "typeArguments": null,
                          "start": 1007,
                          "end": 1014
                        }
                      ],
                      "start": 1006,
                      "end": 1015
                    },
                    "start": 1001,
                    "end": 1015
                  },
                  "start": 998,
                  "end": 1015
                },
                "start": 961,
                "end": 1015
              },
              "start": 959,
              "end": 1015
            },
            "start": 956,
            "end": 1015
          },
          "init": null,
          "definite": false,
          "start": 956,
          "end": 1015
        }
      ],
      "declare": true,
      "start": 944,
      "end": 1016
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1038,
                          "end": 1043
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
                                "start": 1044,
                                "end": 1048
                              },
                              "typeArguments": null,
                              "start": 1044,
                              "end": 1048
                            }
                          ],
                          "start": 1043,
                          "end": 1049
                        },
                        "start": 1038,
                        "end": 1049
                      },
                      "start": 1036,
                      "end": 1049
                    },
                    "start": 1035,
                    "end": 1049
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
                          "start": 1054,
                          "end": 1059
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
                                "start": 1060,
                                "end": 1067
                              },
                              "typeArguments": null,
                              "start": 1060,
                              "end": 1067
                            }
                          ],
                          "start": 1059,
                          "end": 1068
                        },
                        "start": 1054,
                        "end": 1068
                      },
                      "start": 1052,
                      "end": 1068
                    },
                    "start": 1051,
                    "end": 1068
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
                      "start": 1073,
                      "end": 1078
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
                            "start": 1079,
                            "end": 1086
                          },
                          "typeArguments": null,
                          "start": 1079,
                          "end": 1086
                        }
                      ],
                      "start": 1078,
                      "end": 1087
                    },
                    "start": 1073,
                    "end": 1087
                  },
                  "start": 1070,
                  "end": 1087
                },
                "start": 1034,
                "end": 1087
              },
              "start": 1032,
              "end": 1087
            },
            "start": 1029,
            "end": 1087
          },
          "init": null,
          "definite": false,
          "start": 1029,
          "end": 1087
        }
      ],
      "declare": true,
      "start": 1017,
      "end": 1088
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
                              "start": 1112,
                              "end": 1113
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1115,
                                "end": 1121
                              },
                              "start": 1113,
                              "end": 1121
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1112,
                            "end": 1122
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
                              "start": 1123,
                              "end": 1124
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1126,
                                "end": 1132
                              },
                              "start": 1124,
                              "end": 1132
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1123,
                            "end": 1132
                          }
                        ],
                        "start": 1110,
                        "end": 1134
                      },
                      "start": 1108,
                      "end": 1134
                    },
                    "start": 1107,
                    "end": 1134
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
                      "start": 1139,
                      "end": 1145
                    },
                    "typeArguments": null,
                    "start": 1139,
                    "end": 1145
                  },
                  "start": 1136,
                  "end": 1145
                },
                "start": 1106,
                "end": 1145
              },
              "start": 1104,
              "end": 1145
            },
            "start": 1101,
            "end": 1145
          },
          "init": null,
          "definite": false,
          "start": 1101,
          "end": 1145
        }
      ],
      "declare": true,
      "start": 1089,
      "end": 1146
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
                            "start": 1174,
                            "end": 1180
                          },
                          "start": 1172,
                          "end": 1180
                        },
                        "start": 1171,
                        "end": 1180
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1183,
                          "end": 1189
                        },
                        "start": 1183,
                        "end": 1191
                      },
                      "start": 1181,
                      "end": 1191
                    },
                    "start": 1170,
                    "end": 1192
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
                            "start": 1201,
                            "end": 1207
                          },
                          "start": 1199,
                          "end": 1207
                        },
                        "start": 1198,
                        "end": 1207
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1210,
                          "end": 1216
                        },
                        "start": 1210,
                        "end": 1218
                      },
                      "start": 1208,
                      "end": 1218
                    },
                    "start": 1197,
                    "end": 1219
                  }
                ],
                "start": 1164,
                "end": 1221
              },
              "start": 1162,
              "end": 1221
            },
            "start": 1159,
            "end": 1221
          },
          "init": null,
          "definite": false,
          "start": 1159,
          "end": 1221
        }
      ],
      "declare": true,
      "start": 1147,
      "end": 1221
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
                            "start": 1246,
                            "end": 1247
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1256,
                              "end": 1263
                            },
                            "typeArguments": null,
                            "start": 1256,
                            "end": 1263
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1246,
                          "end": 1263
                        }
                      ],
                      "start": 1245,
                      "end": 1264
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
                              "start": 1268,
                              "end": 1269
                            },
                            "typeArguments": null,
                            "start": 1268,
                            "end": 1269
                          },
                          "start": 1266,
                          "end": 1269
                        },
                        "start": 1265,
                        "end": 1269
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1272,
                          "end": 1278
                        },
                        "start": 1272,
                        "end": 1280
                      },
                      "start": 1270,
                      "end": 1280
                    },
                    "start": 1245,
                    "end": 1281
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1287,
                            "end": 1288
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1297,
                              "end": 1301
                            },
                            "typeArguments": null,
                            "start": 1297,
                            "end": 1301
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 1287,
                          "end": 1301
                        }
                      ],
                      "start": 1286,
                      "end": 1302
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
                              "start": 1306,
                              "end": 1307
                            },
                            "typeArguments": null,
                            "start": 1306,
                            "end": 1307
                          },
                          "start": 1304,
                          "end": 1307
                        },
                        "start": 1303,
                        "end": 1307
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1310,
                          "end": 1316
                        },
                        "start": 1310,
                        "end": 1318
                      },
                      "start": 1308,
                      "end": 1318
                    },
                    "start": 1286,
                    "end": 1319
                  }
                ],
                "start": 1239,
                "end": 1321
              },
              "start": 1237,
              "end": 1321
            },
            "start": 1234,
            "end": 1321
          },
          "init": null,
          "definite": false,
          "start": 1234,
          "end": 1321
        }
      ],
      "declare": true,
      "start": 1222,
      "end": 1321
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
                                    "type": "TSNumberKeyword",
                                    "start": 1353,
                                    "end": 1359
                                  },
                                  "start": 1351,
                                  "end": 1359
                                },
                                "start": 1350,
                                "end": 1359
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1364,
                                "end": 1370
                              },
                              "start": 1361,
                              "end": 1370
                            },
                            "start": 1349,
                            "end": 1370
                          },
                          "start": 1347,
                          "end": 1370
                        },
                        "start": 1346,
                        "end": 1370
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNumberKeyword",
                          "start": 1373,
                          "end": 1379
                        },
                        "start": 1373,
                        "end": 1381
                      },
                      "start": 1371,
                      "end": 1381
                    },
                    "start": 1345,
                    "end": 1382
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
                                    "type": "TSStringKeyword",
                                    "start": 1395,
                                    "end": 1401
                                  },
                                  "start": 1393,
                                  "end": 1401
                                },
                                "start": 1392,
                                "end": 1401
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1406,
                                "end": 1412
                              },
                              "start": 1403,
                              "end": 1412
                            },
                            "start": 1391,
                            "end": 1412
                          },
                          "start": 1389,
                          "end": 1412
                        },
                        "start": 1388,
                        "end": 1412
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1415,
                          "end": 1421
                        },
                        "start": 1415,
                        "end": 1423
                      },
                      "start": 1413,
                      "end": 1423
                    },
                    "start": 1387,
                    "end": 1424
                  }
                ],
                "start": 1339,
                "end": 1426
              },
              "start": 1337,
              "end": 1426
            },
            "start": 1334,
            "end": 1426
          },
          "init": null,
          "definite": false,
          "start": 1334,
          "end": 1426
        }
      ],
      "declare": true,
      "start": 1322,
      "end": 1427
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                    "type": "TSNumberKeyword",
                                    "start": 1478,
                                    "end": 1484
                                  },
                                  "start": 1476,
                                  "end": 1484
                                },
                                "start": 1465,
                                "end": 1485
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 1498,
                                        "end": 1504
                                      },
                                      "start": 1496,
                                      "end": 1504
                                    },
                                    "start": 1495,
                                    "end": 1504
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1507,
                                    "end": 1513
                                  },
                                  "start": 1505,
                                  "end": 1513
                                },
                                "start": 1494,
                                "end": 1514
                              }
                            ],
                            "start": 1455,
                            "end": 1520
                          },
                          "start": 1453,
                          "end": 1520
                        },
                        "start": 1452,
                        "end": 1520
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1523,
                          "end": 1526
                        },
                        "start": 1523,
                        "end": 1528
                      },
                      "start": 1521,
                      "end": 1528
                    },
                    "start": 1451,
                    "end": 1529
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
                            "type": "TSTypeLiteral",
                            "members": [
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                        "start": 1552,
                                        "end": 1559
                                      },
                                      "start": 1550,
                                      "end": 1559
                                    },
                                    "start": 1549,
                                    "end": 1559
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSBooleanKeyword",
                                    "start": 1562,
                                    "end": 1569
                                  },
                                  "start": 1560,
                                  "end": 1569
                                },
                                "start": 1548,
                                "end": 1570
                              },
                              {
                                "type": "TSCallSignatureDeclaration",
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
                                          "start": 1583,
                                          "end": 1587
                                        },
                                        "typeArguments": null,
                                        "start": 1583,
                                        "end": 1587
                                      },
                                      "start": 1581,
                                      "end": 1587
                                    },
                                    "start": 1580,
                                    "end": 1587
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
                                      "start": 1590,
                                      "end": 1594
                                    },
                                    "typeArguments": null,
                                    "start": 1590,
                                    "end": 1594
                                  },
                                  "start": 1588,
                                  "end": 1594
                                },
                                "start": 1579,
                                "end": 1595
                              }
                            ],
                            "start": 1538,
                            "end": 1601
                          },
                          "start": 1536,
                          "end": 1601
                        },
                        "start": 1535,
                        "end": 1601
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 1604,
                          "end": 1607
                        },
                        "start": 1604,
                        "end": 1609
                      },
                      "start": 1602,
                      "end": 1609
                    },
                    "start": 1534,
                    "end": 1610
                  }
                ],
                "start": 1445,
                "end": 1612
              },
              "start": 1443,
              "end": 1612
            },
            "start": 1440,
            "end": 1612
          },
          "init": null,
          "definite": false,
          "start": 1440,
          "end": 1612
        }
      ],
      "declare": true,
      "start": 1428,
      "end": 1612
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
                "type": "TSFunctionType",
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
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1630,
                      "end": 1631
                    }
                  ],
                  "start": 1629,
                  "end": 1632
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
                          "start": 1636,
                          "end": 1637
                        },
                        "typeArguments": null,
                        "start": 1636,
                        "end": 1637
                      },
                      "start": 1634,
                      "end": 1637
                    },
                    "start": 1633,
                    "end": 1637
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
                        "start": 1642,
                        "end": 1643
                      },
                      "typeArguments": null,
                      "start": 1642,
                      "end": 1643
                    },
                    "start": 1642,
                    "end": 1645
                  },
                  "start": 1639,
                  "end": 1645
                },
                "start": 1629,
                "end": 1645
              },
              "start": 1627,
              "end": 1645
            },
            "start": 1626,
            "end": 1645
          },
          "init": null,
          "definite": false,
          "start": 1626,
          "end": 1645
        }
      ],
      "declare": true,
      "start": 1614,
      "end": 1646
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
          "start": 1648,
          "end": 1649
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 1652,
          "end": 1653
        },
        "start": 1648,
        "end": 1653
      },
      "directive": null,
      "start": 1648,
      "end": 1654
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
          "start": 1661,
          "end": 1662
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 1665,
          "end": 1666
        },
        "start": 1661,
        "end": 1666
      },
      "directive": null,
      "start": 1661,
      "end": 1667
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
                "type": "TSFunctionType",
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
                        "start": 1691,
                        "end": 1692
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1691,
                      "end": 1692
                    }
                  ],
                  "start": 1690,
                  "end": 1693
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
                          "start": 1697,
                          "end": 1698
                        },
                        "typeArguments": null,
                        "start": 1697,
                        "end": 1698
                      },
                      "start": 1695,
                      "end": 1698
                    },
                    "start": 1694,
                    "end": 1698
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1703,
                      "end": 1709
                    },
                    "start": 1703,
                    "end": 1711
                  },
                  "start": 1700,
                  "end": 1711
                },
                "start": 1690,
                "end": 1711
              },
              "start": 1688,
              "end": 1711
            },
            "start": 1686,
            "end": 1711
          },
          "init": null,
          "definite": false,
          "start": 1686,
          "end": 1711
        }
      ],
      "declare": true,
      "start": 1674,
      "end": 1712
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
          "start": 1714,
          "end": 1716
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1719,
          "end": 1721
        },
        "start": 1714,
        "end": 1721
      },
      "directive": null,
      "start": 1714,
      "end": 1722
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
          "start": 1730,
          "end": 1732
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1735,
          "end": 1737
        },
        "start": 1730,
        "end": 1737
      },
      "directive": null,
      "start": 1730,
      "end": 1738
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
                "type": "TSFunctionType",
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
                        "start": 1762,
                        "end": 1763
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1762,
                      "end": 1763
                    }
                  ],
                  "start": 1761,
                  "end": 1764
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
                          "start": 1768,
                          "end": 1769
                        },
                        "typeArguments": null,
                        "start": 1768,
                        "end": 1769
                      },
                      "start": 1766,
                      "end": 1769
                    },
                    "start": 1765,
                    "end": 1769
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
                      "start": 1774,
                      "end": 1775
                    },
                    "typeArguments": null,
                    "start": 1774,
                    "end": 1775
                  },
                  "start": 1771,
                  "end": 1775
                },
                "start": 1761,
                "end": 1775
              },
              "start": 1759,
              "end": 1775
            },
            "start": 1757,
            "end": 1775
          },
          "init": null,
          "definite": false,
          "start": 1757,
          "end": 1775
        }
      ],
      "declare": true,
      "start": 1745,
      "end": 1776
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
          "start": 1778,
          "end": 1780
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1783,
          "end": 1785
        },
        "start": 1778,
        "end": 1785
      },
      "directive": null,
      "start": 1778,
      "end": 1786
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
          "start": 1793,
          "end": 1795
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1798,
          "end": 1800
        },
        "start": 1793,
        "end": 1800
      },
      "directive": null,
      "start": 1793,
      "end": 1801
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
                "type": "TSFunctionType",
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
                        "start": 1825,
                        "end": 1826
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1825,
                      "end": 1826
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1828,
                        "end": 1829
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1828,
                      "end": 1829
                    }
                  ],
                  "start": 1824,
                  "end": 1830
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
                          "start": 1834,
                          "end": 1835
                        },
                        "typeArguments": null,
                        "start": 1834,
                        "end": 1835
                      },
                      "start": 1832,
                      "end": 1835
                    },
                    "start": 1831,
                    "end": 1835
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
                          "start": 1840,
                          "end": 1841
                        },
                        "typeArguments": null,
                        "start": 1840,
                        "end": 1841
                      },
                      "start": 1838,
                      "end": 1841
                    },
                    "start": 1837,
                    "end": 1841
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
                      "start": 1846,
                      "end": 1847
                    },
                    "typeArguments": null,
                    "start": 1846,
                    "end": 1847
                  },
                  "start": 1843,
                  "end": 1847
                },
                "start": 1824,
                "end": 1847
              },
              "start": 1822,
              "end": 1847
            },
            "start": 1820,
            "end": 1847
          },
          "init": null,
          "definite": false,
          "start": 1820,
          "end": 1847
        }
      ],
      "declare": true,
      "start": 1808,
      "end": 1848
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
          "start": 1850,
          "end": 1852
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1855,
          "end": 1857
        },
        "start": 1850,
        "end": 1857
      },
      "directive": null,
      "start": 1850,
      "end": 1858
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
          "start": 1865,
          "end": 1867
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": null,
          "start": 1870,
          "end": 1872
        },
        "start": 1865,
        "end": 1872
      },
      "directive": null,
      "start": 1865,
      "end": 1873
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
                "type": "TSFunctionType",
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
                        "start": 1897,
                        "end": 1898
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1897,
                      "end": 1898
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1900,
                        "end": 1901
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1900,
                      "end": 1901
                    }
                  ],
                  "start": 1896,
                  "end": 1902
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
                                  "start": 1912,
                                  "end": 1913
                                },
                                "typeArguments": null,
                                "start": 1912,
                                "end": 1913
                              },
                              "start": 1910,
                              "end": 1913
                            },
                            "start": 1907,
                            "end": 1913
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
                              "start": 1918,
                              "end": 1919
                            },
                            "typeArguments": null,
                            "start": 1918,
                            "end": 1919
                          },
                          "start": 1915,
                          "end": 1919
                        },
                        "start": 1906,
                        "end": 1919
                      },
                      "start": 1904,
                      "end": 1919
                    },
                    "start": 1903,
                    "end": 1919
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
                      "start": 1924,
                      "end": 1925
                    },
                    "typeArguments": null,
                    "start": 1924,
                    "end": 1925
                  },
                  "start": 1921,
                  "end": 1925
                },
                "start": 1896,
                "end": 1925
              },
              "start": 1894,
              "end": 1925
            },
            "start": 1892,
            "end": 1925
          },
          "init": null,
          "definite": false,
          "start": 1892,
          "end": 1925
        }
      ],
      "declare": true,
      "start": 1880,
      "end": 1926
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
          "start": 1928,
          "end": 1930
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1933,
          "end": 1935
        },
        "start": 1928,
        "end": 1935
      },
      "directive": null,
      "start": 1928,
      "end": 1936
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
          "start": 1943,
          "end": 1945
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": null,
          "start": 1948,
          "end": 1950
        },
        "start": 1943,
        "end": 1950
      },
      "directive": null,
      "start": 1943,
      "end": 1951
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
                "type": "TSFunctionType",
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
                        "start": 1975,
                        "end": 1976
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1985,
                          "end": 1989
                        },
                        "typeArguments": null,
                        "start": 1985,
                        "end": 1989
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1975,
                      "end": 1989
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1991,
                        "end": 1992
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2001,
                          "end": 2008
                        },
                        "typeArguments": null,
                        "start": 2001,
                        "end": 2008
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1991,
                      "end": 2008
                    }
                  ],
                  "start": 1974,
                  "end": 2009
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
                                  "start": 2019,
                                  "end": 2020
                                },
                                "typeArguments": null,
                                "start": 2019,
                                "end": 2020
                              },
                              "start": 2017,
                              "end": 2020
                            },
                            "start": 2014,
                            "end": 2020
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
                              "start": 2025,
                              "end": 2026
                            },
                            "typeArguments": null,
                            "start": 2025,
                            "end": 2026
                          },
                          "start": 2022,
                          "end": 2026
                        },
                        "start": 2013,
                        "end": 2026
                      },
                      "start": 2011,
                      "end": 2026
                    },
                    "start": 2010,
                    "end": 2026
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
                      "start": 2031,
                      "end": 2032
                    },
                    "typeArguments": null,
                    "start": 2031,
                    "end": 2032
                  },
                  "start": 2028,
                  "end": 2032
                },
                "start": 1974,
                "end": 2032
              },
              "start": 1972,
              "end": 2032
            },
            "start": 1970,
            "end": 2032
          },
          "init": null,
          "definite": false,
          "start": 1970,
          "end": 2032
        }
      ],
      "declare": true,
      "start": 1958,
      "end": 2033
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
          "start": 2035,
          "end": 2037
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2040,
          "end": 2042
        },
        "start": 2035,
        "end": 2042
      },
      "directive": null,
      "start": 2035,
      "end": 2043
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
          "start": 2050,
          "end": 2052
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": null,
          "start": 2055,
          "end": 2057
        },
        "start": 2050,
        "end": 2057
      },
      "directive": null,
      "start": 2050,
      "end": 2058
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
                "type": "TSFunctionType",
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
                        "start": 2082,
                        "end": 2083
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2092,
                          "end": 2096
                        },
                        "typeArguments": null,
                        "start": 2092,
                        "end": 2096
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2082,
                      "end": 2096
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2098,
                        "end": 2099
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2108,
                          "end": 2115
                        },
                        "typeArguments": null,
                        "start": 2108,
                        "end": 2115
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2098,
                      "end": 2115
                    }
                  ],
                  "start": 2081,
                  "end": 2116
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
                                  "start": 2126,
                                  "end": 2127
                                },
                                "typeArguments": null,
                                "start": 2126,
                                "end": 2127
                              },
                              "start": 2124,
                              "end": 2127
                            },
                            "start": 2121,
                            "end": 2127
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
                              "start": 2132,
                              "end": 2133
                            },
                            "typeArguments": null,
                            "start": 2132,
                            "end": 2133
                          },
                          "start": 2129,
                          "end": 2133
                        },
                        "start": 2120,
                        "end": 2133
                      },
                      "start": 2118,
                      "end": 2133
                    },
                    "start": 2117,
                    "end": 2133
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
                              "start": 2142,
                              "end": 2143
                            },
                            "typeArguments": null,
                            "start": 2142,
                            "end": 2143
                          },
                          "start": 2140,
                          "end": 2143
                        },
                        "start": 2139,
                        "end": 2143
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
                          "start": 2148,
                          "end": 2149
                        },
                        "typeArguments": null,
                        "start": 2148,
                        "end": 2149
                      },
                      "start": 2145,
                      "end": 2149
                    },
                    "start": 2138,
                    "end": 2149
                  },
                  "start": 2135,
                  "end": 2149
                },
                "start": 2081,
                "end": 2149
              },
              "start": 2079,
              "end": 2149
            },
            "start": 2077,
            "end": 2149
          },
          "init": null,
          "definite": false,
          "start": 2077,
          "end": 2149
        }
      ],
      "declare": true,
      "start": 2065,
      "end": 2150
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
          "start": 2152,
          "end": 2154
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2157,
          "end": 2159
        },
        "start": 2152,
        "end": 2159
      },
      "directive": null,
      "start": 2152,
      "end": 2160
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
          "start": 2167,
          "end": 2169
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a7",
          "optional": false,
          "typeAnnotation": null,
          "start": 2172,
          "end": 2174
        },
        "start": 2167,
        "end": 2174
      },
      "directive": null,
      "start": 2167,
      "end": 2175
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
                "type": "TSFunctionType",
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
                        "start": 2199,
                        "end": 2200
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2209,
                          "end": 2213
                        },
                        "typeArguments": null,
                        "start": 2209,
                        "end": 2213
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2199,
                      "end": 2213
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2215,
                        "end": 2216
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2225,
                          "end": 2232
                        },
                        "typeArguments": null,
                        "start": 2225,
                        "end": 2232
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2215,
                      "end": 2232
                    }
                  ],
                  "start": 2198,
                  "end": 2233
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
                                  "start": 2243,
                                  "end": 2244
                                },
                                "typeArguments": null,
                                "start": 2243,
                                "end": 2244
                              },
                              "start": 2241,
                              "end": 2244
                            },
                            "start": 2238,
                            "end": 2244
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
                              "start": 2249,
                              "end": 2250
                            },
                            "typeArguments": null,
                            "start": 2249,
                            "end": 2250
                          },
                          "start": 2246,
                          "end": 2250
                        },
                        "start": 2237,
                        "end": 2250
                      },
                      "start": 2235,
                      "end": 2250
                    },
                    "start": 2234,
                    "end": 2250
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
                                  "start": 2262,
                                  "end": 2263
                                },
                                "typeArguments": null,
                                "start": 2262,
                                "end": 2263
                              },
                              "start": 2260,
                              "end": 2263
                            },
                            "start": 2256,
                            "end": 2263
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
                              "start": 2268,
                              "end": 2269
                            },
                            "typeArguments": null,
                            "start": 2268,
                            "end": 2269
                          },
                          "start": 2265,
                          "end": 2269
                        },
                        "start": 2255,
                        "end": 2269
                      },
                      "start": 2253,
                      "end": 2269
                    },
                    "start": 2252,
                    "end": 2269
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
                              "start": 2278,
                              "end": 2279
                            },
                            "typeArguments": null,
                            "start": 2278,
                            "end": 2279
                          },
                          "start": 2276,
                          "end": 2279
                        },
                        "start": 2275,
                        "end": 2279
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
                          "start": 2284,
                          "end": 2285
                        },
                        "typeArguments": null,
                        "start": 2284,
                        "end": 2285
                      },
                      "start": 2281,
                      "end": 2285
                    },
                    "start": 2274,
                    "end": 2285
                  },
                  "start": 2271,
                  "end": 2285
                },
                "start": 2198,
                "end": 2285
              },
              "start": 2196,
              "end": 2285
            },
            "start": 2194,
            "end": 2285
          },
          "init": null,
          "definite": false,
          "start": 2194,
          "end": 2285
        }
      ],
      "declare": true,
      "start": 2182,
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
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2287,
          "end": 2289
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2292,
          "end": 2294
        },
        "start": 2287,
        "end": 2294
      },
      "directive": null,
      "start": 2287,
      "end": 2295
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
          "start": 2302,
          "end": 2304
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a8",
          "optional": false,
          "typeAnnotation": null,
          "start": 2307,
          "end": 2309
        },
        "start": 2302,
        "end": 2309
      },
      "directive": null,
      "start": 2302,
      "end": 2310
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
                "type": "TSFunctionType",
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
                        "start": 2334,
                        "end": 2335
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2344,
                          "end": 2348
                        },
                        "typeArguments": null,
                        "start": 2344,
                        "end": 2348
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2334,
                      "end": 2348
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2350,
                        "end": 2351
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2360,
                          "end": 2367
                        },
                        "typeArguments": null,
                        "start": 2360,
                        "end": 2367
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2350,
                      "end": 2367
                    }
                  ],
                  "start": 2333,
                  "end": 2368
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
                                  "start": 2378,
                                  "end": 2379
                                },
                                "typeArguments": null,
                                "start": 2378,
                                "end": 2379
                              },
                              "start": 2376,
                              "end": 2379
                            },
                            "start": 2373,
                            "end": 2379
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
                              "start": 2384,
                              "end": 2385
                            },
                            "typeArguments": null,
                            "start": 2384,
                            "end": 2385
                          },
                          "start": 2381,
                          "end": 2385
                        },
                        "start": 2372,
                        "end": 2385
                      },
                      "start": 2370,
                      "end": 2385
                    },
                    "start": 2369,
                    "end": 2385
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
                                      "start": 2399,
                                      "end": 2402
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 2404,
                                        "end": 2410
                                      },
                                      "start": 2402,
                                      "end": 2410
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2399,
                                    "end": 2411
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
                                      "start": 2412,
                                      "end": 2416
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2418,
                                        "end": 2424
                                      },
                                      "start": 2416,
                                      "end": 2424
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2412,
                                    "end": 2424
                                  }
                                ],
                                "start": 2397,
                                "end": 2426
                              },
                              "start": 2395,
                              "end": 2426
                            },
                            "start": 2391,
                            "end": 2426
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
                              "start": 2431,
                              "end": 2432
                            },
                            "typeArguments": null,
                            "start": 2431,
                            "end": 2432
                          },
                          "start": 2428,
                          "end": 2432
                        },
                        "start": 2390,
                        "end": 2432
                      },
                      "start": 2388,
                      "end": 2432
                    },
                    "start": 2387,
                    "end": 2432
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
                              "start": 2441,
                              "end": 2442
                            },
                            "typeArguments": null,
                            "start": 2441,
                            "end": 2442
                          },
                          "start": 2439,
                          "end": 2442
                        },
                        "start": 2438,
                        "end": 2442
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
                          "start": 2447,
                          "end": 2448
                        },
                        "typeArguments": null,
                        "start": 2447,
                        "end": 2448
                      },
                      "start": 2444,
                      "end": 2448
                    },
                    "start": 2437,
                    "end": 2448
                  },
                  "start": 2434,
                  "end": 2448
                },
                "start": 2333,
                "end": 2448
              },
              "start": 2331,
              "end": 2448
            },
            "start": 2329,
            "end": 2448
          },
          "init": null,
          "definite": false,
          "start": 2329,
          "end": 2448
        }
      ],
      "declare": true,
      "start": 2317,
      "end": 2449
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
          "start": 2451,
          "end": 2453
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2456,
          "end": 2458
        },
        "start": 2451,
        "end": 2458
      },
      "directive": null,
      "start": 2451,
      "end": 2459
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
          "start": 2466,
          "end": 2468
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a9",
          "optional": false,
          "typeAnnotation": null,
          "start": 2471,
          "end": 2473
        },
        "start": 2466,
        "end": 2473
      },
      "directive": null,
      "start": 2466,
      "end": 2474
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
                "type": "TSFunctionType",
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
                        "start": 2499,
                        "end": 2500
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2509,
                          "end": 2516
                        },
                        "typeArguments": null,
                        "start": 2509,
                        "end": 2516
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2499,
                      "end": 2516
                    }
                  ],
                  "start": 2498,
                  "end": 2517
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
                      "start": 2521,
                      "end": 2522
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
                            "start": 2524,
                            "end": 2525
                          },
                          "typeArguments": null,
                          "start": 2524,
                          "end": 2525
                        },
                        "start": 2524,
                        "end": 2527
                      },
                      "start": 2522,
                      "end": 2527
                    },
                    "value": null,
                    "start": 2518,
                    "end": 2527
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
                      "start": 2532,
                      "end": 2533
                    },
                    "typeArguments": null,
                    "start": 2532,
                    "end": 2533
                  },
                  "start": 2529,
                  "end": 2533
                },
                "start": 2498,
                "end": 2533
              },
              "start": 2496,
              "end": 2533
            },
            "start": 2493,
            "end": 2533
          },
          "init": null,
          "definite": false,
          "start": 2493,
          "end": 2533
        }
      ],
      "declare": true,
      "start": 2481,
      "end": 2534
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
          "start": 2536,
          "end": 2539
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2542,
          "end": 2545
        },
        "start": 2536,
        "end": 2545
      },
      "directive": null,
      "start": 2536,
      "end": 2546
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
          "start": 2553,
          "end": 2556
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a10",
          "optional": false,
          "typeAnnotation": null,
          "start": 2559,
          "end": 2562
        },
        "start": 2553,
        "end": 2562
      },
      "directive": null,
      "start": 2553,
      "end": 2563
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
                "type": "TSFunctionType",
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
                        "start": 2588,
                        "end": 2589
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2598,
                          "end": 2602
                        },
                        "typeArguments": null,
                        "start": 2598,
                        "end": 2602
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2588,
                      "end": 2602
                    }
                  ],
                  "start": 2587,
                  "end": 2603
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
                          "start": 2607,
                          "end": 2608
                        },
                        "typeArguments": null,
                        "start": 2607,
                        "end": 2608
                      },
                      "start": 2605,
                      "end": 2608
                    },
                    "start": 2604,
                    "end": 2608
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
                          "start": 2613,
                          "end": 2614
                        },
                        "typeArguments": null,
                        "start": 2613,
                        "end": 2614
                      },
                      "start": 2611,
                      "end": 2614
                    },
                    "start": 2610,
                    "end": 2614
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
                      "start": 2619,
                      "end": 2620
                    },
                    "typeArguments": null,
                    "start": 2619,
                    "end": 2620
                  },
                  "start": 2616,
                  "end": 2620
                },
                "start": 2587,
                "end": 2620
              },
              "start": 2585,
              "end": 2620
            },
            "start": 2582,
            "end": 2620
          },
          "init": null,
          "definite": false,
          "start": 2582,
          "end": 2620
        }
      ],
      "declare": true,
      "start": 2570,
      "end": 2621
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
          "start": 2623,
          "end": 2626
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2629,
          "end": 2632
        },
        "start": 2623,
        "end": 2632
      },
      "directive": null,
      "start": 2623,
      "end": 2633
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
          "start": 2640,
          "end": 2643
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": null,
          "start": 2646,
          "end": 2649
        },
        "start": 2640,
        "end": 2649
      },
      "directive": null,
      "start": 2640,
      "end": 2650
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
                "type": "TSFunctionType",
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
                        "start": 2675,
                        "end": 2676
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2685,
                          "end": 2690
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
                                "start": 2691,
                                "end": 2695
                              },
                              "typeArguments": null,
                              "start": 2691,
                              "end": 2695
                            }
                          ],
                          "start": 2690,
                          "end": 2696
                        },
                        "start": 2685,
                        "end": 2696
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2675,
                      "end": 2696
                    }
                  ],
                  "start": 2674,
                  "end": 2697
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
                          "start": 2701,
                          "end": 2706
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
                                "start": 2707,
                                "end": 2711
                              },
                              "typeArguments": null,
                              "start": 2707,
                              "end": 2711
                            }
                          ],
                          "start": 2706,
                          "end": 2712
                        },
                        "start": 2701,
                        "end": 2712
                      },
                      "start": 2699,
                      "end": 2712
                    },
                    "start": 2698,
                    "end": 2712
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
                          "start": 2717,
                          "end": 2718
                        },
                        "typeArguments": null,
                        "start": 2717,
                        "end": 2718
                      },
                      "start": 2715,
                      "end": 2718
                    },
                    "start": 2714,
                    "end": 2718
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
                      "start": 2723,
                      "end": 2728
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
                            "start": 2729,
                            "end": 2736
                          },
                          "typeArguments": null,
                          "start": 2729,
                          "end": 2736
                        }
                      ],
                      "start": 2728,
                      "end": 2737
                    },
                    "start": 2723,
                    "end": 2737
                  },
                  "start": 2720,
                  "end": 2737
                },
                "start": 2674,
                "end": 2737
              },
              "start": 2672,
              "end": 2737
            },
            "start": 2669,
            "end": 2737
          },
          "init": null,
          "definite": false,
          "start": 2669,
          "end": 2737
        }
      ],
      "declare": true,
      "start": 2657,
      "end": 2738
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
          "start": 2740,
          "end": 2743
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2746,
          "end": 2749
        },
        "start": 2740,
        "end": 2749
      },
      "directive": null,
      "start": 2740,
      "end": 2750
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
          "start": 2757,
          "end": 2760
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a12",
          "optional": false,
          "typeAnnotation": null,
          "start": 2763,
          "end": 2766
        },
        "start": 2757,
        "end": 2766
      },
      "directive": null,
      "start": 2757,
      "end": 2767
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
                "type": "TSFunctionType",
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
                        "start": 2792,
                        "end": 2793
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Array",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2802,
                          "end": 2807
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
                                "start": 2808,
                                "end": 2815
                              },
                              "typeArguments": null,
                              "start": 2808,
                              "end": 2815
                            }
                          ],
                          "start": 2807,
                          "end": 2816
                        },
                        "start": 2802,
                        "end": 2816
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2792,
                      "end": 2816
                    }
                  ],
                  "start": 2791,
                  "end": 2817
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
                          "start": 2821,
                          "end": 2826
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
                                "start": 2827,
                                "end": 2831
                              },
                              "typeArguments": null,
                              "start": 2827,
                              "end": 2831
                            }
                          ],
                          "start": 2826,
                          "end": 2832
                        },
                        "start": 2821,
                        "end": 2832
                      },
                      "start": 2819,
                      "end": 2832
                    },
                    "start": 2818,
                    "end": 2832
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
                          "start": 2837,
                          "end": 2838
                        },
                        "typeArguments": null,
                        "start": 2837,
                        "end": 2838
                      },
                      "start": 2835,
                      "end": 2838
                    },
                    "start": 2834,
                    "end": 2838
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
                      "start": 2843,
                      "end": 2844
                    },
                    "typeArguments": null,
                    "start": 2843,
                    "end": 2844
                  },
                  "start": 2840,
                  "end": 2844
                },
                "start": 2791,
                "end": 2844
              },
              "start": 2789,
              "end": 2844
            },
            "start": 2786,
            "end": 2844
          },
          "init": null,
          "definite": false,
          "start": 2786,
          "end": 2844
        }
      ],
      "declare": true,
      "start": 2774,
      "end": 2845
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
          "start": 2847,
          "end": 2850
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2853,
          "end": 2856
        },
        "start": 2847,
        "end": 2856
      },
      "directive": null,
      "start": 2847,
      "end": 2857
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
          "start": 2864,
          "end": 2867
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a13",
          "optional": false,
          "typeAnnotation": null,
          "start": 2870,
          "end": 2873
        },
        "start": 2864,
        "end": 2873
      },
      "directive": null,
      "start": 2864,
      "end": 2874
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
                "type": "TSFunctionType",
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
                        "start": 2899,
                        "end": 2900
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2899,
                      "end": 2900
                    }
                  ],
                  "start": 2898,
                  "end": 2901
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
                              "start": 2907,
                              "end": 2908
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
                                  "start": 2910,
                                  "end": 2911
                                },
                                "typeArguments": null,
                                "start": 2910,
                                "end": 2911
                              },
                              "start": 2908,
                              "end": 2911
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2907,
                            "end": 2912
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
                              "start": 2913,
                              "end": 2914
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
                                  "start": 2916,
                                  "end": 2917
                                },
                                "typeArguments": null,
                                "start": 2916,
                                "end": 2917
                              },
                              "start": 2914,
                              "end": 2917
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2913,
                            "end": 2917
                          }
                        ],
                        "start": 2905,
                        "end": 2919
                      },
                      "start": 2903,
                      "end": 2919
                    },
                    "start": 2902,
                    "end": 2919
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
                      "start": 2924,
                      "end": 2925
                    },
                    "typeArguments": null,
                    "start": 2924,
                    "end": 2925
                  },
                  "start": 2921,
                  "end": 2925
                },
                "start": 2898,
                "end": 2925
              },
              "start": 2896,
              "end": 2925
            },
            "start": 2893,
            "end": 2925
          },
          "init": null,
          "definite": false,
          "start": 2893,
          "end": 2925
        }
      ],
      "declare": true,
      "start": 2881,
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
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2928,
          "end": 2931
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2934,
          "end": 2937
        },
        "start": 2928,
        "end": 2937
      },
      "directive": null,
      "start": 2928,
      "end": 2938
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
          "start": 2945,
          "end": 2948
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a14",
          "optional": false,
          "typeAnnotation": null,
          "start": 2951,
          "end": 2954
        },
        "start": 2945,
        "end": 2954
      },
      "directive": null,
      "start": 2945,
      "end": 2955
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
                "type": "TSFunctionType",
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
                        "start": 2980,
                        "end": 2981
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2980,
                      "end": 2981
                    }
                  ],
                  "start": 2979,
                  "end": 2982
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
                          "start": 2986,
                          "end": 2987
                        },
                        "typeArguments": null,
                        "start": 2986,
                        "end": 2987
                      },
                      "start": 2984,
                      "end": 2987
                    },
                    "start": 2983,
                    "end": 2987
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
                        "start": 2992,
                        "end": 2993
                      },
                      "typeArguments": null,
                      "start": 2992,
                      "end": 2993
                    },
                    "start": 2992,
                    "end": 2995
                  },
                  "start": 2989,
                  "end": 2995
                },
                "start": 2979,
                "end": 2995
              },
              "start": 2977,
              "end": 2995
            },
            "start": 2974,
            "end": 2995
          },
          "init": null,
          "definite": false,
          "start": 2974,
          "end": 2995
        }
      ],
      "declare": true,
      "start": 2962,
      "end": 2996
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
          "start": 2998,
          "end": 3001
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3004,
          "end": 3007
        },
        "start": 2998,
        "end": 3007
      },
      "directive": null,
      "start": 2998,
      "end": 3008
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
          "start": 3015,
          "end": 3018
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": null,
          "start": 3021,
          "end": 3024
        },
        "start": 3015,
        "end": 3024
      },
      "directive": null,
      "start": 3015,
      "end": 3025
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
                "type": "TSFunctionType",
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
                        "start": 3050,
                        "end": 3051
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3060,
                          "end": 3064
                        },
                        "typeArguments": null,
                        "start": 3060,
                        "end": 3064
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3050,
                      "end": 3064
                    }
                  ],
                  "start": 3049,
                  "end": 3065
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
                          "start": 3069,
                          "end": 3070
                        },
                        "typeArguments": null,
                        "start": 3069,
                        "end": 3070
                      },
                      "start": 3067,
                      "end": 3070
                    },
                    "start": 3066,
                    "end": 3070
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 3075,
                      "end": 3081
                    },
                    "start": 3075,
                    "end": 3083
                  },
                  "start": 3072,
                  "end": 3083
                },
                "start": 3049,
                "end": 3083
              },
              "start": 3047,
              "end": 3083
            },
            "start": 3044,
            "end": 3083
          },
          "init": null,
          "definite": false,
          "start": 3044,
          "end": 3083
        }
      ],
      "declare": true,
      "start": 3032,
      "end": 3084
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
          "start": 3085,
          "end": 3088
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3091,
          "end": 3094
        },
        "start": 3085,
        "end": 3094
      },
      "directive": null,
      "start": 3085,
      "end": 3095
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
          "start": 3102,
          "end": 3105
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": null,
          "start": 3108,
          "end": 3111
        },
        "start": 3102,
        "end": 3111
      },
      "directive": null,
      "start": 3102,
      "end": 3112
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
                "type": "TSFunctionType",
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
                        "start": 3137,
                        "end": 3138
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3137,
                      "end": 3138
                    }
                  ],
                  "start": 3136,
                  "end": 3139
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
                                  "start": 3147,
                                  "end": 3148
                                },
                                "typeArguments": null,
                                "start": 3147,
                                "end": 3148
                              },
                              "start": 3145,
                              "end": 3148
                            },
                            "start": 3144,
                            "end": 3148
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
                              "start": 3153,
                              "end": 3154
                            },
                            "typeArguments": null,
                            "start": 3153,
                            "end": 3154
                          },
                          "start": 3150,
                          "end": 3154
                        },
                        "start": 3143,
                        "end": 3154
                      },
                      "start": 3141,
                      "end": 3154
                    },
                    "start": 3140,
                    "end": 3154
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
                        "start": 3159,
                        "end": 3160
                      },
                      "typeArguments": null,
                      "start": 3159,
                      "end": 3160
                    },
                    "start": 3159,
                    "end": 3162
                  },
                  "start": 3156,
                  "end": 3162
                },
                "start": 3136,
                "end": 3162
              },
              "start": 3134,
              "end": 3162
            },
            "start": 3131,
            "end": 3162
          },
          "init": null,
          "definite": false,
          "start": 3131,
          "end": 3162
        }
      ],
      "declare": true,
      "start": 3119,
      "end": 3163
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
          "start": 3170,
          "end": 3173
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3176,
          "end": 3179
        },
        "start": 3170,
        "end": 3179
      },
      "directive": null,
      "start": 3170,
      "end": 3180
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
          "start": 3187,
          "end": 3190
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": null,
          "start": 3193,
          "end": 3196
        },
        "start": 3187,
        "end": 3196
      },
      "directive": null,
      "start": 3187,
      "end": 3197
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
                "type": "TSFunctionType",
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
                        "start": 3222,
                        "end": 3223
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3222,
                      "end": 3223
                    }
                  ],
                  "start": 3221,
                  "end": 3224
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
                                  "start": 3232,
                                  "end": 3233
                                },
                                "typeArguments": null,
                                "start": 3232,
                                "end": 3233
                              },
                              "start": 3230,
                              "end": 3233
                            },
                            "start": 3229,
                            "end": 3233
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
                              "start": 3238,
                              "end": 3239
                            },
                            "typeArguments": null,
                            "start": 3238,
                            "end": 3239
                          },
                          "start": 3235,
                          "end": 3239
                        },
                        "start": 3228,
                        "end": 3239
                      },
                      "start": 3226,
                      "end": 3239
                    },
                    "start": 3225,
                    "end": 3239
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
                        "start": 3244,
                        "end": 3245
                      },
                      "typeArguments": null,
                      "start": 3244,
                      "end": 3245
                    },
                    "start": 3244,
                    "end": 3247
                  },
                  "start": 3241,
                  "end": 3247
                },
                "start": 3221,
                "end": 3247
              },
              "start": 3219,
              "end": 3247
            },
            "start": 3216,
            "end": 3247
          },
          "init": null,
          "definite": false,
          "start": 3216,
          "end": 3247
        }
      ],
      "declare": true,
      "start": 3204,
      "end": 3248
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
          "start": 3250,
          "end": 3253
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3256,
          "end": 3259
        },
        "start": 3250,
        "end": 3259
      },
      "directive": null,
      "start": 3250,
      "end": 3260
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
          "start": 3267,
          "end": 3270
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": null,
          "start": 3273,
          "end": 3276
        },
        "start": 3267,
        "end": 3276
      },
      "directive": null,
      "start": 3267,
      "end": 3277
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 106,
  "end": 3283
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 112,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 148,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 156,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 178,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 184,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 193,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 216,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 232,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 245,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 277,
    "end": 284
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 285,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 296,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 304,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 317,
    "end": 324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 325,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 329,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 334,
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
    "value": "number",
    "start": 337,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 345,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 366,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 370,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 386,
    "end": 388
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 389,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 395,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 407,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 415,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 426,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 445,
    "end": 452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 453,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 457,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 466,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 479,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 482,
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
    "type": "Identifier",
    "value": "string",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 501,
    "end": 508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 509,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 513,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 522,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Base",
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
    "value": "=>",
    "start": 533,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 536,
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
    "value": "=>",
    "start": 545,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 548,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 554,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 562,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 566,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 575,
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
    "value": "Base",
    "start": 580,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Derived",
    "start": 589,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 598,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 605,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 611,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 614,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 623,
    "end": 630
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 631,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "a8",
    "start": 635,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 644,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 649,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 655,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 658,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 671,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 677,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 683,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 686,
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
    "value": "=>",
    "start": 695,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 708,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 711,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 720,
    "end": 727
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 728,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 732,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 741,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 746,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 752,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 755,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 762,
    "end": 763
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 768,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 774,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 780,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 783,
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
    "value": "=>",
    "start": 792,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 799,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 805,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 808,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 817,
    "end": 824
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 825,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 829,
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
    "type": "Punctuator",
    "value": "...",
    "start": 835,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 841,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 848,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 852,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 855,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 864,
    "end": 871
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 876,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 887,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 892,
    "end": 898
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 907,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 912,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 920,
    "end": 923
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 923,
    "end": 924
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 925,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 932,
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
    "type": "Identifier",
    "value": "Base",
    "start": 938,
    "end": 942
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 942,
    "end": 943
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 944,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 952,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 956,
    "end": 959
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 961,
    "end": 962
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 962,
    "end": 963
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 965,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 971,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 981,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 986,
    "end": 987
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 987,
    "end": 995
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 998,
    "end": 1000
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1001,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1007,
    "end": 1014
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1017,
    "end": 1024
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1025,
    "end": 1028
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 1029,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1035,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1038,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1044,
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
    "value": ",",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1054,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1060,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1070,
    "end": 1072
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1073,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1079,
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
    "value": ";",
    "start": 1087,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1089,
    "end": 1096
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1097,
    "end": 1100
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 1101,
    "end": 1104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1104,
    "end": 1105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "string",
    "start": 1115,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "number",
    "start": 1126,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1136,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1147,
    "end": 1154
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1155,
    "end": 1158
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1159,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1171,
    "end": 1172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1174,
    "end": 1180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1183,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1197,
    "end": 1198
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1199,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1201,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 1210,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1222,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1230,
    "end": 1233
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1234,
    "end": 1237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1239,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1248,
    "end": 1255
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1256,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1268,
    "end": 1269
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1272,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1289,
    "end": 1296
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1297,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1301,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1306,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1310,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1322,
    "end": 1329
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1330,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1334,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1349,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1350,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1361,
    "end": 1363
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1364,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1373,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1393,
    "end": 1394
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1395,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1403,
    "end": 1405
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1406,
    "end": 1412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1412,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1413,
    "end": 1414
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1415,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1425,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1428,
    "end": 1435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1436,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1440,
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
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1452,
    "end": 1453
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1453,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1455,
    "end": 1456
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
    "value": "number",
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
    "value": ":",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1478,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "string",
    "start": 1498,
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
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1507,
    "end": 1513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1519,
    "end": 1520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1520,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1523,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1536,
    "end": 1537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1549,
    "end": 1550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1552,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1560,
    "end": 1561
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1562,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1579,
    "end": 1580
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1580,
    "end": 1581
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1581,
    "end": 1582
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1583,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589
  },
  {
    "type": "Identifier",
    "value": "Date",
    "start": 1590,
    "end": 1594
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1600,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1604,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1608,
    "end": 1609
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1614,
    "end": 1621
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1627,
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
    "type": "Punctuator",
    "value": ">",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1636,
    "end": 1637
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1639,
    "end": 1641
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1648,
    "end": 1649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1652,
    "end": 1653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1661,
    "end": 1662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1663,
    "end": 1664
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1674,
    "end": 1681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1682,
    "end": 1685
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1686,
    "end": 1688
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1700,
    "end": 1702
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1703,
    "end": 1709
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1710,
    "end": 1711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1714,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1719,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1730,
    "end": 1732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1733,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1735,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1745,
    "end": 1752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1753,
    "end": 1756
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1757,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1761,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1762,
    "end": 1763
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1771,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1778,
    "end": 1780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1783,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1785,
    "end": 1786
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 1793,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1796,
    "end": 1797
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 1798,
    "end": 1800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1800,
    "end": 1801
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1808,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1816,
    "end": 1819
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1820,
    "end": 1822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1822,
    "end": 1823
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1824,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1828,
    "end": 1829
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1829,
    "end": 1830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1830,
    "end": 1831
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1831,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1838,
    "end": 1839
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1841,
    "end": 1842
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1843,
    "end": 1845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1850,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1855,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "b4",
    "start": 1865,
    "end": 1867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1868,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 1870,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1880,
    "end": 1887
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1892,
    "end": 1894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1894,
    "end": 1895
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1896,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1900,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1902,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1903,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 1907,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1910,
    "end": 1911
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1913,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1915,
    "end": 1917
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1919,
    "end": 1920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1921,
    "end": 1923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1925,
    "end": 1926
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1928,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1933,
    "end": 1935
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "b5",
    "start": 1943,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1946,
    "end": 1947
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 1948,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1950,
    "end": 1951
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1958,
    "end": 1965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1966,
    "end": 1969
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 1970,
    "end": 1972
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1974,
    "end": 1975
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1977,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1985,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1993,
    "end": 2000
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2001,
    "end": 2008
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2008,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2010,
    "end": 2011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2011,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2022,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2025,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2028,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2031,
    "end": 2032
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2035,
    "end": 2037
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2040,
    "end": 2042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2042,
    "end": 2043
  },
  {
    "type": "Identifier",
    "value": "b6",
    "start": 2050,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 2055,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2065,
    "end": 2072
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2073,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2077,
    "end": 2079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2079,
    "end": 2080
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2081,
    "end": 2082
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2082,
    "end": 2083
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2084,
    "end": 2091
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2092,
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
    "value": "U",
    "start": 2098,
    "end": 2099
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2100,
    "end": 2107
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2108,
    "end": 2115
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2115,
    "end": 2116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2116,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2117,
    "end": 2118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2118,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2120,
    "end": 2121
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2121,
    "end": 2124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2124,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2126,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2129,
    "end": 2131
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2135,
    "end": 2137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2139,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2143,
    "end": 2144
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2145,
    "end": 2147
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2152,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2155,
    "end": 2156
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2157,
    "end": 2159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "b7",
    "start": 2167,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2170,
    "end": 2171
  },
  {
    "type": "Identifier",
    "value": "a7",
    "start": 2172,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2174,
    "end": 2175
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2182,
    "end": 2189
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2190,
    "end": 2193
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2198,
    "end": 2199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2199,
    "end": 2200
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2201,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2209,
    "end": 2213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2213,
    "end": 2214
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2215,
    "end": 2216
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2217,
    "end": 2224
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2225,
    "end": 2232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2232,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2233,
    "end": 2234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2238,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2244,
    "end": 2245
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2246,
    "end": 2248
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2249,
    "end": 2250
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2250,
    "end": 2251
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2253,
    "end": 2254
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2255,
    "end": 2256
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2256,
    "end": 2260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2260,
    "end": 2261
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2265,
    "end": 2267
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Punctuator",
    "value": "(",
    "start": 2274,
    "end": 2275
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2275,
    "end": 2276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2276,
    "end": 2277
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2281,
    "end": 2283
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2284,
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
    "value": "a8",
    "start": 2287,
    "end": 2289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2290,
    "end": 2291
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2292,
    "end": 2294
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2294,
    "end": 2295
  },
  {
    "type": "Identifier",
    "value": "b8",
    "start": 2302,
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
    "value": "a8",
    "start": 2307,
    "end": 2309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2309,
    "end": 2310
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2317,
    "end": 2324
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2325,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2329,
    "end": 2331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2331,
    "end": 2332
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2333,
    "end": 2334
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2334,
    "end": 2335
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2336,
    "end": 2343
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2344,
    "end": 2348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2352,
    "end": 2359
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2360,
    "end": 2367
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2367,
    "end": 2368
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2372,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2373,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2378,
    "end": 2379
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2379,
    "end": 2380
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2381,
    "end": 2383
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2384,
    "end": 2385
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2385,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2387,
    "end": 2388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2388,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "arg2",
    "start": 2391,
    "end": 2395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2397,
    "end": 2398
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2399,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2404,
    "end": 2410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2410,
    "end": 2411
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 2412,
    "end": 2416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2416,
    "end": 2417
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2418,
    "end": 2424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2426,
    "end": 2427
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2428,
    "end": 2430
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2432,
    "end": 2433
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2434,
    "end": 2436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 2438,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2439,
    "end": 2440
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2444,
    "end": 2446
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2448,
    "end": 2449
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2451,
    "end": 2453
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2454,
    "end": 2455
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2456,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Identifier",
    "value": "b9",
    "start": 2466,
    "end": 2468
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Identifier",
    "value": "a9",
    "start": 2471,
    "end": 2473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2473,
    "end": 2474
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2481,
    "end": 2488
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2489,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2493,
    "end": 2496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2496,
    "end": 2497
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2498,
    "end": 2499
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2499,
    "end": 2500
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2501,
    "end": 2508
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2509,
    "end": 2516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2516,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2518,
    "end": 2521
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "T",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2529,
    "end": 2531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2533,
    "end": 2534
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2536,
    "end": 2539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2540,
    "end": 2541
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2542,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Identifier",
    "value": "b10",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2557,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "a10",
    "start": 2559,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2570,
    "end": 2577
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2578,
    "end": 2581
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2582,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2587,
    "end": 2588
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2588,
    "end": 2589
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2590,
    "end": 2597
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2598,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2605,
    "end": 2606
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2607,
    "end": 2608
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2608,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2610,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2616,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2620,
    "end": 2621
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2623,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2629,
    "end": 2632
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2632,
    "end": 2633
  },
  {
    "type": "Identifier",
    "value": "b11",
    "start": 2640,
    "end": 2643
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 2646,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2657,
    "end": 2664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2665,
    "end": 2668
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2669,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2674,
    "end": 2675
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2675,
    "end": 2676
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2677,
    "end": 2684
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2685,
    "end": 2690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2690,
    "end": 2691
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2691,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2701,
    "end": 2706
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2707,
    "end": 2711
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2711,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2714,
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
    "value": "T",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2720,
    "end": 2722
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2723,
    "end": 2728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2728,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2729,
    "end": 2736
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2736,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2740,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2744,
    "end": 2745
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2746,
    "end": 2749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2749,
    "end": 2750
  },
  {
    "type": "Identifier",
    "value": "b12",
    "start": 2757,
    "end": 2760
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Identifier",
    "value": "a12",
    "start": 2763,
    "end": 2766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2766,
    "end": 2767
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2774,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2782,
    "end": 2785
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2786,
    "end": 2789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2791,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2794,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2802,
    "end": 2807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2808,
    "end": 2815
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2815,
    "end": 2816
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2816,
    "end": 2817
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2817,
    "end": 2818
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2821,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2827,
    "end": 2831
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2831,
    "end": 2832
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2832,
    "end": 2833
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2834,
    "end": 2835
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2837,
    "end": 2838
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2838,
    "end": 2839
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2840,
    "end": 2842
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2843,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2847,
    "end": 2850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2853,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2856,
    "end": 2857
  },
  {
    "type": "Identifier",
    "value": "b13",
    "start": 2864,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Identifier",
    "value": "a13",
    "start": 2870,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2881,
    "end": 2888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2889,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2893,
    "end": 2896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2896,
    "end": 2897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2898,
    "end": 2899
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2899,
    "end": 2900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2900,
    "end": 2901
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2901,
    "end": 2902
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2902,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2905,
    "end": 2906
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2907,
    "end": 2908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2908,
    "end": 2909
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2910,
    "end": 2911
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2913,
    "end": 2914
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2914,
    "end": 2915
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2916,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2918,
    "end": 2919
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2921,
    "end": 2923
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2924,
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
    "value": "a14",
    "start": 2928,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2932,
    "end": 2933
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2934,
    "end": 2937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2937,
    "end": 2938
  },
  {
    "type": "Identifier",
    "value": "b14",
    "start": 2945,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2949,
    "end": 2950
  },
  {
    "type": "Identifier",
    "value": "a14",
    "start": 2951,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2962,
    "end": 2969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2970,
    "end": 2973
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 2974,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2980,
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
    "value": "(",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2983,
    "end": 2984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2984,
    "end": 2985
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "value": "=>",
    "start": 2989,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2992,
    "end": 2993
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2993,
    "end": 2994
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2994,
    "end": 2995
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 2998,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 3004,
    "end": 3007
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3007,
    "end": 3008
  },
  {
    "type": "Identifier",
    "value": "b15",
    "start": 3015,
    "end": 3018
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3019,
    "end": 3020
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 3021,
    "end": 3024
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3024,
    "end": 3025
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3032,
    "end": 3039
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3040,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3044,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3052,
    "end": 3059
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3060,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3065,
    "end": 3066
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3066,
    "end": 3067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3067,
    "end": 3068
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3069,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3072,
    "end": 3074
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3075,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "a16",
    "start": 3085,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3091,
    "end": 3094
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3094,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "b16",
    "start": 3102,
    "end": 3105
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 3108,
    "end": 3111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3111,
    "end": 3112
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3119,
    "end": 3126
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3127,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3131,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3138,
    "end": 3139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3140,
    "end": 3141
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3143,
    "end": 3144
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3145,
    "end": 3146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3147,
    "end": 3148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3150,
    "end": 3152
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3153,
    "end": 3154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3154,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3156,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3162,
    "end": 3163
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3170,
    "end": 3173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3174,
    "end": 3175
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3176,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3179,
    "end": 3180
  },
  {
    "type": "Identifier",
    "value": "b17",
    "start": 3187,
    "end": 3190
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 3193,
    "end": 3196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3196,
    "end": 3197
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3204,
    "end": 3211
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3212,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3216,
    "end": 3219
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3219,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3222,
    "end": 3223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3223,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3225,
    "end": 3226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3226,
    "end": 3227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3232,
    "end": 3233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3233,
    "end": 3234
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3235,
    "end": 3237
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3239,
    "end": 3240
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3241,
    "end": 3243
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3244,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3246,
    "end": 3247
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3250,
    "end": 3253
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3254,
    "end": 3255
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3256,
    "end": 3259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3259,
    "end": 3260
  },
  {
    "type": "Identifier",
    "value": "b18",
    "start": 3267,
    "end": 3270
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3271,
    "end": 3272
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 3273,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3276,
    "end": 3277
  }
]
```
