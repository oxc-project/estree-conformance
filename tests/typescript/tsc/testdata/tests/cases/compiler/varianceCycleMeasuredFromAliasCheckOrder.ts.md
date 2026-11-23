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
        "name": "Attrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 278,
        "end": 283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
                },
                "start": 289,
                "end": 301
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 304,
                "end": 307
              },
              "start": 302,
              "end": 307
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 288,
            "end": 307
          }
        ],
        "start": 286,
        "end": 309
      },
      "declare": false,
      "start": 273,
      "end": 310
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Settings",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 330
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 332
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 346
              },
              "typeArguments": null,
              "start": 341,
              "end": 346
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 349,
                "end": 354
              },
              "typeArguments": null,
              "start": 349,
              "end": 354
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 331,
            "end": 354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 371
              },
              "typeArguments": null,
              "start": 366,
              "end": 371
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 379
              },
              "typeArguments": null,
              "start": 374,
              "end": 379
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 356,
            "end": 379
          }
        ],
        "start": 330,
        "end": 380
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hover",
              "optional": false,
              "typeAnnotation": null,
              "start": 387,
              "end": 392
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Hover",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 399
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 401
                      },
                      "typeArguments": null,
                      "start": 400,
                      "end": 401
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 403,
                        "end": 404
                      },
                      "typeArguments": null,
                      "start": 403,
                      "end": 404
                    }
                  ],
                  "start": 399,
                  "end": 405
                },
                "start": 394,
                "end": 405
              },
              "start": 392,
              "end": 405
            },
            "accessibility": null,
            "static": false,
            "start": 387,
            "end": 406
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reducer",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 418
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "N",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 428
                        },
                        "typeArguments": null,
                        "start": 427,
                        "end": 428
                      },
                      "start": 425,
                      "end": 428
                    },
                    "start": 421,
                    "end": 428
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 433,
                    "end": 437
                  },
                  "start": 430,
                  "end": 437
                },
                "start": 420,
                "end": 437
              },
              "start": 418,
              "end": 437
            },
            "accessibility": null,
            "static": false,
            "start": 411,
            "end": 438
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "program",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 450
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "renderer",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Renderer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 463,
                          "end": 471
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "N",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 472,
                                "end": 473
                              },
                              "typeArguments": null,
                              "start": 472,
                              "end": 473
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "E",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 475,
                                "end": 476
                              },
                              "typeArguments": null,
                              "start": 475,
                              "end": 476
                            }
                          ],
                          "start": 471,
                          "end": 477
                        },
                        "start": 463,
                        "end": 477
                      },
                      "start": 461,
                      "end": 477
                    },
                    "start": 453,
                    "end": 477
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 482,
                    "end": 486
                  },
                  "start": 479,
                  "end": 486
                },
                "start": 452,
                "end": 486
              },
              "start": 450,
              "end": 486
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 487
          }
        ],
        "start": 381,
        "end": 489
      },
      "declare": false,
      "start": 312,
      "end": 489
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Renderer",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 508
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 510
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 524
              },
              "typeArguments": null,
              "start": 519,
              "end": 524
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 527,
                "end": 532
              },
              "typeArguments": null,
              "start": 527,
              "end": 532
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 509,
            "end": 532
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              },
              "typeArguments": null,
              "start": 544,
              "end": 549
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 557
              },
              "typeArguments": null,
              "start": 552,
              "end": 557
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 534,
            "end": 557
          }
        ],
        "start": 508,
        "end": 558
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getSettings",
              "optional": false,
              "typeAnnotation": null,
              "start": 565,
              "end": 576
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Settings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 580,
                  "end": 588
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 593
                      },
                      "typeArguments": null,
                      "start": 592,
                      "end": 593
                    }
                  ],
                  "start": 588,
                  "end": 594
                },
                "start": 580,
                "end": 594
              },
              "start": 578,
              "end": 594
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 565,
            "end": 595
          }
        ],
        "start": 559,
        "end": 597
      },
      "declare": false,
      "start": 490,
      "end": 597
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hover",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 608
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 610
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 619,
                "end": 624
              },
              "typeArguments": null,
              "start": 619,
              "end": 624
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 627,
                "end": 632
              },
              "typeArguments": null,
              "start": 627,
              "end": 632
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 609,
            "end": 632
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 635
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 649
              },
              "typeArguments": null,
              "start": 644,
              "end": 649
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Attrs",
                "optional": false,
                "typeAnnotation": null,
                "start": 652,
                "end": 657
              },
              "typeArguments": null,
              "start": 652,
              "end": 657
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 634,
            "end": 657
          }
        ],
        "start": 608,
        "end": 658
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "settings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Settings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 680
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 681,
                        "end": 682
                      },
                      "typeArguments": null,
                      "start": 681,
                      "end": 682
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 684,
                        "end": 685
                      },
                      "typeArguments": null,
                      "start": 684,
                      "end": 685
                    }
                  ],
                  "start": 680,
                  "end": 686
                },
                "start": 672,
                "end": 686
              },
              "start": 670,
              "end": 686
            },
            "start": 662,
            "end": 686
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 691,
            "end": 695
          },
          "start": 688,
          "end": 695
        },
        "start": 661,
        "end": 695
      },
      "declare": false,
      "start": 598,
      "end": 696
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NodeAttrs",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 712
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 720,
                "end": 726
              },
              "start": 718,
              "end": 726
            },
            "accessibility": null,
            "static": false,
            "start": 717,
            "end": 726
          }
        ],
        "start": 715,
        "end": 728
      },
      "declare": false,
      "start": 698,
      "end": 729
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
            "name": "hover",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Hover",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 757
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NodeAttrs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 758,
                        "end": 767
                      },
                      "typeArguments": null,
                      "start": 758,
                      "end": 767
                    }
                  ],
                  "start": 757,
                  "end": 768
                },
                "start": 752,
                "end": 768
              },
              "start": 750,
              "end": 768
            },
            "start": 745,
            "end": 768
          },
          "init": null,
          "definite": false,
          "start": 745,
          "end": 768
        }
      ],
      "declare": true,
      "start": 731,
      "end": 769
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
            "name": "h",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Hover",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 779,
                  "end": 784
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NodeAttrs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 785,
                        "end": 794
                      },
                      "typeArguments": null,
                      "start": 785,
                      "end": 794
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 796,
                      "end": 798
                    }
                  ],
                  "start": 784,
                  "end": 799
                },
                "start": 779,
                "end": 799
              },
              "start": 777,
              "end": 799
            },
            "start": 776,
            "end": 799
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "hover",
            "optional": false,
            "typeAnnotation": null,
            "start": 802,
            "end": 807
          },
          "definite": false,
          "start": 776,
          "end": 807
        }
      ],
      "declare": false,
      "start": 770,
      "end": 808
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fit",
        "optional": false,
        "typeAnnotation": null,
        "start": 827,
        "end": 830
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "renderer",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Renderer",
                "optional": false,
                "typeAnnotation": null,
                "start": 841,
                "end": 849
              },
              "typeArguments": null,
              "start": 841,
              "end": 849
            },
            "start": 839,
            "end": 849
          },
          "start": 831,
          "end": 849
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 852,
          "end": 856
        },
        "start": 850,
        "end": 856
      },
      "body": null,
      "expression": false,
      "start": 810,
      "end": 857
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
            "name": "renderer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Renderer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 882,
                  "end": 890
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NodeAttrs",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 900
                      },
                      "typeArguments": null,
                      "start": 891,
                      "end": 900
                    }
                  ],
                  "start": 890,
                  "end": 901
                },
                "start": 882,
                "end": 901
              },
              "start": 880,
              "end": 901
            },
            "start": 872,
            "end": 901
          },
          "init": null,
          "definite": false,
          "start": 872,
          "end": 901
        }
      ],
      "declare": true,
      "start": 858,
      "end": 902
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fit",
          "optional": false,
          "typeAnnotation": null,
          "start": 903,
          "end": 906
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "renderer",
            "optional": false,
            "typeAnnotation": null,
            "start": 907,
            "end": 915
          }
        ],
        "optional": false,
        "start": 903,
        "end": 916
      },
      "directive": null,
      "start": 903,
      "end": 917
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 917
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 273,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 278,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 289,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
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
    "value": "any",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 309,
    "end": 310
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 312,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 322,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 333,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 341,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 349,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 358,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 366,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 374,
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
    "value": "{",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "hover",
    "start": 387,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Hover",
    "start": 394,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 411,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 421,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "N",
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
    "value": "=>",
    "start": 430,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "program",
    "start": 443,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "renderer",
    "start": 453,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "Renderer",
    "start": 463,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
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
    "type": "Keyword",
    "value": "void",
    "start": 482,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 490,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "Renderer",
    "start": 500,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 511,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 519,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 527,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 534,
    "end": 535
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 536,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 544,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 552,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "getSettings",
    "start": 565,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
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
    "value": "Settings",
    "start": 580,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": ";",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 598,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "Hover",
    "start": 603,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 609,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 611,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 619,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 625,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 627,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 634,
    "end": 635
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 636,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 644,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "Attrs",
    "start": 652,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "settings",
    "start": 662,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "Settings",
    "start": 672,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 688,
    "end": 690
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 691,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 698,
    "end": 702
  },
  {
    "type": "Identifier",
    "value": "NodeAttrs",
    "start": 703,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "number",
    "start": 720,
    "end": 726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 727,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 731,
    "end": 738
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 739,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "hover",
    "start": 745,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "Hover",
    "start": 752,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "NodeAttrs",
    "start": 758,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 770,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "h",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778
  },
  {
    "type": "Identifier",
    "value": "Hover",
    "start": 779,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 784,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "NodeAttrs",
    "start": 785,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 800,
    "end": 801
  },
  {
    "type": "Identifier",
    "value": "hover",
    "start": 802,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 810,
    "end": 817
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 818,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "fit",
    "start": 827,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Identifier",
    "value": "renderer",
    "start": 831,
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
    "value": "Renderer",
    "start": 841,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 850,
    "end": 851
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 852,
    "end": 856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 858,
    "end": 865
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 866,
    "end": 871
  },
  {
    "type": "Identifier",
    "value": "renderer",
    "start": 872,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "Renderer",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "NodeAttrs",
    "start": 891,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 900,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "fit",
    "start": 903,
    "end": 906
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "renderer",
    "start": 907,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  }
]
```
