__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 259
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 260,
              "end": 261
            }
          ],
          "start": 259,
          "end": 262
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thenable",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 274,
              "end": 290
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "typeArguments": null,
                  "start": 291,
                  "end": 292
                }
              ],
              "start": 290,
              "end": 293
            },
            "start": 274,
            "end": 293
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 308
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
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
                            "name": "resolve",
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
                                    "name": "thenableOrResult",
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
                                              "name": "R",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 348,
                                              "end": 349
                                            },
                                            "typeArguments": null,
                                            "start": 348,
                                            "end": 349
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Promise",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 352,
                                                "end": 359
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Thenable",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 360,
                                                "end": 368
                                              },
                                              "start": 352,
                                              "end": 368
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "R",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 369,
                                                    "end": 370
                                                  },
                                                  "typeArguments": null,
                                                  "start": 369,
                                                  "end": 370
                                                }
                                              ],
                                              "start": 368,
                                              "end": 371
                                            },
                                            "start": 352,
                                            "end": 371
                                          }
                                        ],
                                        "start": 348,
                                        "end": 371
                                      },
                                      "start": 346,
                                      "end": 371
                                    },
                                    "start": 330,
                                    "end": 371
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 376,
                                    "end": 380
                                  },
                                  "start": 373,
                                  "end": 380
                                },
                                "start": 329,
                                "end": 380
                              },
                              "start": 327,
                              "end": 380
                            },
                            "start": 320,
                            "end": 380
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reject",
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
                                        "type": "TSAnyKeyword",
                                        "start": 398,
                                        "end": 401
                                      },
                                      "start": 396,
                                      "end": 401
                                    },
                                    "start": 391,
                                    "end": 401
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 406,
                                    "end": 410
                                  },
                                  "start": 403,
                                  "end": 410
                                },
                                "start": 390,
                                "end": 410
                              },
                              "start": 388,
                              "end": 410
                            },
                            "start": 382,
                            "end": 410
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 415,
                            "end": 419
                          },
                          "start": 412,
                          "end": 419
                        },
                        "start": 319,
                        "end": 419
                      },
                      "start": 317,
                      "end": 419
                    },
                    "start": 309,
                    "end": 419
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 308,
                "end": 421
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 297,
              "end": 421
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 436
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 437,
                      "end": 438
                    }
                  ],
                  "start": 436,
                  "end": 439
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 459
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 459
                      },
                      "start": 443,
                      "end": 459
                    },
                    "start": 440,
                    "end": 459
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 478
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 479,
                                "end": 487
                              },
                              "start": 471,
                              "end": 487
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 488,
                                    "end": 489
                                  },
                                  "typeArguments": null,
                                  "start": 488,
                                  "end": 489
                                }
                              ],
                              "start": 487,
                              "end": 490
                            },
                            "start": 471,
                            "end": 490
                          },
                          "start": 468,
                          "end": 490
                        },
                        "start": 465,
                        "end": 490
                      },
                      "start": 463,
                      "end": 490
                    },
                    "start": 461,
                    "end": 490
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 499,
                          "end": 502
                        },
                        "start": 499,
                        "end": 504
                      },
                      "start": 497,
                      "end": 504
                    },
                    "start": 492,
                    "end": 504
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 512,
                        "end": 515
                      },
                      "start": 510,
                      "end": 515
                    },
                    "start": 506,
                    "end": 515
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
                      "start": 518,
                      "end": 525
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 526,
                            "end": 527
                          },
                          "typeArguments": null,
                          "start": 526,
                          "end": 527
                        }
                      ],
                      "start": 525,
                      "end": 528
                    },
                    "start": 518,
                    "end": 528
                  },
                  "start": 516,
                  "end": 528
                },
                "body": null,
                "expression": false,
                "start": 436,
                "end": 529
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 426,
              "end": 529
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 544
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 546
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 545,
                      "end": 546
                    }
                  ],
                  "start": 544,
                  "end": 547
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 553,
                        "end": 567
                      },
                      "start": 551,
                      "end": 567
                    },
                    "start": 548,
                    "end": 567
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 579,
                              "end": 580
                            },
                            "typeArguments": null,
                            "start": 579,
                            "end": 580
                          },
                          "start": 576,
                          "end": 580
                        },
                        "start": 573,
                        "end": 580
                      },
                      "start": 571,
                      "end": 580
                    },
                    "start": 569,
                    "end": 580
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 589,
                          "end": 592
                        },
                        "start": 589,
                        "end": 594
                      },
                      "start": 587,
                      "end": 594
                    },
                    "start": 582,
                    "end": 594
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 602,
                        "end": 605
                      },
                      "start": 600,
                      "end": 605
                    },
                    "start": 596,
                    "end": 605
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
                      "start": 608,
                      "end": 615
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 617
                          },
                          "typeArguments": null,
                          "start": 616,
                          "end": 617
                        }
                      ],
                      "start": 615,
                      "end": 618
                    },
                    "start": 608,
                    "end": 618
                  },
                  "start": 606,
                  "end": 618
                },
                "body": null,
                "expression": false,
                "start": 544,
                "end": 619
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 534,
              "end": 619
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 639
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 640,
                        "end": 641
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 640,
                      "end": 641
                    }
                  ],
                  "start": 639,
                  "end": 642
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 662
                        },
                        "typeArguments": null,
                        "start": 648,
                        "end": 662
                      },
                      "start": 646,
                      "end": 662
                    },
                    "start": 643,
                    "end": 662
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 674,
                                "end": 681
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 682,
                                "end": 690
                              },
                              "start": 674,
                              "end": 690
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 691,
                                    "end": 692
                                  },
                                  "typeArguments": null,
                                  "start": 691,
                                  "end": 692
                                }
                              ],
                              "start": 690,
                              "end": 693
                            },
                            "start": 674,
                            "end": 693
                          },
                          "start": 671,
                          "end": 693
                        },
                        "start": 668,
                        "end": 693
                      },
                      "start": 666,
                      "end": 693
                    },
                    "start": 664,
                    "end": 693
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 702,
                          "end": 705
                        },
                        "start": 702,
                        "end": 707
                      },
                      "start": 700,
                      "end": 707
                    },
                    "start": 695,
                    "end": 707
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 715,
                        "end": 718
                      },
                      "start": 713,
                      "end": 718
                    },
                    "start": 709,
                    "end": 718
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
                      "start": 721,
                      "end": 728
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 729,
                            "end": 730
                          },
                          "typeArguments": null,
                          "start": 729,
                          "end": 730
                        }
                      ],
                      "start": 728,
                      "end": 731
                    },
                    "start": 721,
                    "end": 731
                  },
                  "start": 719,
                  "end": 731
                },
                "body": null,
                "expression": false,
                "start": 639,
                "end": 732
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 625,
              "end": 732
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 751
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 753
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 752,
                      "end": 753
                    }
                  ],
                  "start": 751,
                  "end": 754
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 760,
                        "end": 774
                      },
                      "start": 758,
                      "end": 774
                    },
                    "start": 755,
                    "end": 774
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 786,
                              "end": 787
                            },
                            "typeArguments": null,
                            "start": 786,
                            "end": 787
                          },
                          "start": 783,
                          "end": 787
                        },
                        "start": 780,
                        "end": 787
                      },
                      "start": 778,
                      "end": 787
                    },
                    "start": 776,
                    "end": 787
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 796,
                          "end": 799
                        },
                        "start": 796,
                        "end": 801
                      },
                      "start": 794,
                      "end": 801
                    },
                    "start": 789,
                    "end": 801
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      },
                      "start": 807,
                      "end": 812
                    },
                    "start": 803,
                    "end": 812
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
                      "start": 815,
                      "end": 822
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "typeArguments": null,
                          "start": 823,
                          "end": 824
                        }
                      ],
                      "start": 822,
                      "end": 825
                    },
                    "start": 815,
                    "end": 825
                  },
                  "start": 813,
                  "end": 825
                },
                "body": null,
                "expression": false,
                "start": 751,
                "end": 826
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 737,
              "end": 826
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 845
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 865
                        },
                        "typeArguments": null,
                        "start": 851,
                        "end": 865
                      },
                      "start": 849,
                      "end": 865
                    },
                    "start": 846,
                    "end": 865
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 879
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 879
                      },
                      "start": 869,
                      "end": 879
                    },
                    "start": 867,
                    "end": 879
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 890
                    },
                    "typeArguments": null,
                    "start": 882,
                    "end": 890
                  },
                  "start": 880,
                  "end": 890
                },
                "body": null,
                "expression": false,
                "start": 845,
                "end": 891
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 832,
              "end": 891
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 904,
                "end": 911
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 924,
                          "end": 931
                        },
                        "typeArguments": null,
                        "start": 917,
                        "end": 931
                      },
                      "start": 915,
                      "end": 931
                    },
                    "start": 912,
                    "end": 931
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
                      "start": 934,
                      "end": 941
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 942,
                          "end": 946
                        }
                      ],
                      "start": 941,
                      "end": 947
                    },
                    "start": 934,
                    "end": 947
                  },
                  "start": 932,
                  "end": 947
                },
                "body": null,
                "expression": false,
                "start": 911,
                "end": 948
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 897,
              "end": 948
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 967
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 969
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 968,
                      "end": 969
                    }
                  ],
                  "start": 967,
                  "end": 970
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 983,
                          "end": 990
                        },
                        "typeArguments": null,
                        "start": 976,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    "start": 971,
                    "end": 990
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 999,
                            "end": 1006
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1007,
                            "end": 1015
                          },
                          "start": 999,
                          "end": 1015
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1017
                              },
                              "typeArguments": null,
                              "start": 1016,
                              "end": 1017
                            }
                          ],
                          "start": 1015,
                          "end": 1018
                        },
                        "start": 999,
                        "end": 1018
                      },
                      "start": 997,
                      "end": 1018
                    },
                    "start": 992,
                    "end": 1018
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
                      "start": 1021,
                      "end": 1028
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1029,
                            "end": 1030
                          },
                          "typeArguments": null,
                          "start": 1029,
                          "end": 1030
                        }
                      ],
                      "start": 1028,
                      "end": 1031
                    },
                    "start": 1021,
                    "end": 1031
                  },
                  "start": 1019,
                  "end": 1031
                },
                "body": null,
                "expression": false,
                "start": 967,
                "end": 1032
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 953,
              "end": 1032
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1051
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1053
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1052,
                      "end": 1053
                    }
                  ],
                  "start": 1051,
                  "end": 1054
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1067,
                          "end": 1074
                        },
                        "typeArguments": null,
                        "start": 1060,
                        "end": 1074
                      },
                      "start": 1058,
                      "end": 1074
                    },
                    "start": 1055,
                    "end": 1074
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1083,
                          "end": 1084
                        },
                        "typeArguments": null,
                        "start": 1083,
                        "end": 1084
                      },
                      "start": 1081,
                      "end": 1084
                    },
                    "start": 1076,
                    "end": 1084
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
                      "start": 1087,
                      "end": 1094
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1096
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1096
                        }
                      ],
                      "start": 1094,
                      "end": 1097
                    },
                    "start": 1087,
                    "end": 1097
                  },
                  "start": 1085,
                  "end": 1097
                },
                "body": null,
                "expression": false,
                "start": 1051,
                "end": 1098
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1037,
              "end": 1098
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1117
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1130,
                          "end": 1137
                        },
                        "typeArguments": null,
                        "start": 1123,
                        "end": 1137
                      },
                      "start": 1121,
                      "end": 1137
                    },
                    "start": 1118,
                    "end": 1137
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1147,
                        "end": 1150
                      },
                      "start": 1145,
                      "end": 1150
                    },
                    "start": 1139,
                    "end": 1150
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
                      "start": 1153,
                      "end": 1160
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1161,
                          "end": 1164
                        }
                      ],
                      "start": 1160,
                      "end": 1165
                    },
                    "start": 1153,
                    "end": 1165
                  },
                  "start": 1151,
                  "end": 1165
                },
                "body": null,
                "expression": false,
                "start": 1117,
                "end": 1166
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1104,
              "end": 1166
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1178,
                "end": 1184
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1185,
                        "end": 1186
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1185,
                      "end": 1186
                    }
                  ],
                  "start": 1184,
                  "end": 1187
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1200,
                          "end": 1207
                        },
                        "typeArguments": null,
                        "start": 1193,
                        "end": 1207
                      },
                      "start": 1191,
                      "end": 1207
                    },
                    "start": 1188,
                    "end": 1207
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1217,
                        "end": 1220
                      },
                      "start": 1215,
                      "end": 1220
                    },
                    "start": 1209,
                    "end": 1220
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
                      "start": 1223,
                      "end": 1230
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1231,
                            "end": 1232
                          },
                          "typeArguments": null,
                          "start": 1231,
                          "end": 1232
                        }
                      ],
                      "start": 1230,
                      "end": 1233
                    },
                    "start": 1223,
                    "end": 1233
                  },
                  "start": 1221,
                  "end": 1233
                },
                "body": null,
                "expression": false,
                "start": 1184,
                "end": 1234
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1171,
              "end": 1234
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1247,
                "end": 1252
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1253,
                        "end": 1254
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1253,
                      "end": 1254
                    }
                  ],
                  "start": 1252,
                  "end": 1255
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1268,
                          "end": 1275
                        },
                        "typeArguments": null,
                        "start": 1261,
                        "end": 1275
                      },
                      "start": 1259,
                      "end": 1275
                    },
                    "start": 1256,
                    "end": 1275
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1278,
                        "end": 1285
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Resolver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1286,
                        "end": 1294
                      },
                      "start": 1278,
                      "end": 1294
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1295,
                            "end": 1296
                          },
                          "typeArguments": null,
                          "start": 1295,
                          "end": 1296
                        }
                      ],
                      "start": 1294,
                      "end": 1297
                    },
                    "start": 1278,
                    "end": 1297
                  },
                  "start": 1276,
                  "end": 1297
                },
                "body": null,
                "expression": false,
                "start": 1252,
                "end": 1298
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1240,
              "end": 1298
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1317
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1316,
                      "end": 1317
                    }
                  ],
                  "start": 1315,
                  "end": 1318
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1331,
                          "end": 1338
                        },
                        "typeArguments": null,
                        "start": 1324,
                        "end": 1338
                      },
                      "start": 1322,
                      "end": 1338
                    },
                    "start": 1319,
                    "end": 1338
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1347,
                            "end": 1354
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1363
                          },
                          "start": 1347,
                          "end": 1363
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1364,
                                "end": 1365
                              },
                              "typeArguments": null,
                              "start": 1364,
                              "end": 1365
                            }
                          ],
                          "start": 1363,
                          "end": 1366
                        },
                        "start": 1347,
                        "end": 1366
                      },
                      "start": 1345,
                      "end": 1366
                    },
                    "start": 1340,
                    "end": 1366
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
                      "start": 1369,
                      "end": 1376
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1377,
                            "end": 1378
                          },
                          "typeArguments": null,
                          "start": 1377,
                          "end": 1378
                        }
                      ],
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1369,
                    "end": 1379
                  },
                  "start": 1367,
                  "end": 1379
                },
                "body": null,
                "expression": false,
                "start": 1315,
                "end": 1380
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1304,
              "end": 1380
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1392,
                "end": 1396
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1397,
                        "end": 1398
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1397,
                      "end": 1398
                    }
                  ],
                  "start": 1396,
                  "end": 1399
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1419
                        },
                        "typeArguments": null,
                        "start": 1405,
                        "end": 1419
                      },
                      "start": 1403,
                      "end": 1419
                    },
                    "start": 1400,
                    "end": 1419
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1428,
                          "end": 1429
                        },
                        "typeArguments": null,
                        "start": 1428,
                        "end": 1429
                      },
                      "start": 1426,
                      "end": 1429
                    },
                    "start": 1421,
                    "end": 1429
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
                      "start": 1432,
                      "end": 1439
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1440,
                            "end": 1441
                          },
                          "typeArguments": null,
                          "start": 1440,
                          "end": 1441
                        }
                      ],
                      "start": 1439,
                      "end": 1442
                    },
                    "start": 1432,
                    "end": 1442
                  },
                  "start": 1430,
                  "end": 1442
                },
                "body": null,
                "expression": false,
                "start": 1396,
                "end": 1443
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1385,
              "end": 1443
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1460
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1466,
                        "end": 1480
                      },
                      "start": 1464,
                      "end": 1480
                    },
                    "start": 1461,
                    "end": 1480
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1491,
                        "end": 1494
                      },
                      "start": 1489,
                      "end": 1494
                    },
                    "start": 1482,
                    "end": 1494
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
                      "start": 1497,
                      "end": 1504
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1505,
                          "end": 1509
                        }
                      ],
                      "start": 1504,
                      "end": 1510
                    },
                    "start": 1497,
                    "end": 1510
                  },
                  "start": 1495,
                  "end": 1510
                },
                "body": null,
                "expression": false,
                "start": 1460,
                "end": 1511
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1449,
              "end": 1511
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1526
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1539,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1532,
                        "end": 1546
                      },
                      "start": 1530,
                      "end": 1546
                    },
                    "start": 1527,
                    "end": 1546
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1555,
                        "end": 1558
                      },
                      "start": 1553,
                      "end": 1558
                    },
                    "start": 1548,
                    "end": 1558
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1561,
                    "end": 1568
                  },
                  "start": 1559,
                  "end": 1568
                },
                "body": null,
                "expression": false,
                "start": 1526,
                "end": 1569
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1517,
              "end": 1569
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "longStackTraces",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1597
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1610,
                          "end": 1617
                        },
                        "typeArguments": null,
                        "start": 1603,
                        "end": 1617
                      },
                      "start": 1601,
                      "end": 1617
                    },
                    "start": 1598,
                    "end": 1617
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1620,
                    "end": 1624
                  },
                  "start": 1618,
                  "end": 1624
                },
                "body": null,
                "expression": false,
                "start": 1597,
                "end": 1625
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1575,
              "end": 1625
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1643
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1644,
                        "end": 1645
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1644,
                      "end": 1645
                    }
                  ],
                  "start": 1643,
                  "end": 1646
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1659,
                          "end": 1666
                        },
                        "typeArguments": null,
                        "start": 1652,
                        "end": 1666
                      },
                      "start": 1650,
                      "end": 1666
                    },
                    "start": 1647,
                    "end": 1666
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1675,
                            "end": 1682
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1683,
                            "end": 1691
                          },
                          "start": 1675,
                          "end": 1691
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1692,
                                "end": 1693
                              },
                              "typeArguments": null,
                              "start": 1692,
                              "end": 1693
                            }
                          ],
                          "start": 1691,
                          "end": 1694
                        },
                        "start": 1675,
                        "end": 1694
                      },
                      "start": 1673,
                      "end": 1694
                    },
                    "start": 1668,
                    "end": 1694
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1700,
                        "end": 1706
                      },
                      "start": 1698,
                      "end": 1706
                    },
                    "start": 1696,
                    "end": 1706
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
                      "start": 1709,
                      "end": 1716
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1717,
                            "end": 1718
                          },
                          "typeArguments": null,
                          "start": 1717,
                          "end": 1718
                        }
                      ],
                      "start": 1716,
                      "end": 1719
                    },
                    "start": 1709,
                    "end": 1719
                  },
                  "start": 1707,
                  "end": 1719
                },
                "body": null,
                "expression": false,
                "start": 1643,
                "end": 1720
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1631,
              "end": 1720
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1732,
                "end": 1737
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1738,
                        "end": 1739
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1738,
                      "end": 1739
                    }
                  ],
                  "start": 1737,
                  "end": 1740
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1753,
                          "end": 1760
                        },
                        "typeArguments": null,
                        "start": 1746,
                        "end": 1760
                      },
                      "start": 1744,
                      "end": 1760
                    },
                    "start": 1741,
                    "end": 1760
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1769,
                          "end": 1770
                        },
                        "typeArguments": null,
                        "start": 1769,
                        "end": 1770
                      },
                      "start": 1767,
                      "end": 1770
                    },
                    "start": 1762,
                    "end": 1770
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1776,
                        "end": 1782
                      },
                      "start": 1774,
                      "end": 1782
                    },
                    "start": 1772,
                    "end": 1782
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
                      "start": 1785,
                      "end": 1792
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1793,
                            "end": 1794
                          },
                          "typeArguments": null,
                          "start": 1793,
                          "end": 1794
                        }
                      ],
                      "start": 1792,
                      "end": 1795
                    },
                    "start": 1785,
                    "end": 1795
                  },
                  "start": 1783,
                  "end": 1795
                },
                "body": null,
                "expression": false,
                "start": 1737,
                "end": 1796
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1725,
              "end": 1796
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1813
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1826,
                          "end": 1833
                        },
                        "typeArguments": null,
                        "start": 1819,
                        "end": 1833
                      },
                      "start": 1817,
                      "end": 1833
                    },
                    "start": 1814,
                    "end": 1833
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      },
                      "start": 1837,
                      "end": 1845
                    },
                    "start": 1835,
                    "end": 1845
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
                      "start": 1848,
                      "end": 1855
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1856,
                          "end": 1860
                        }
                      ],
                      "start": 1855,
                      "end": 1861
                    },
                    "start": 1848,
                    "end": 1861
                  },
                  "start": 1846,
                  "end": 1861
                },
                "body": null,
                "expression": false,
                "start": 1813,
                "end": 1862
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1801,
              "end": 1862
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "promisify",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1884
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1897,
                          "end": 1904
                        },
                        "typeArguments": null,
                        "start": 1890,
                        "end": 1904
                      },
                      "start": 1888,
                      "end": 1904
                    },
                    "start": 1885,
                    "end": 1904
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nodeFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1920,
                          "end": 1928
                        },
                        "typeArguments": null,
                        "start": 1920,
                        "end": 1928
                      },
                      "start": 1918,
                      "end": 1928
                    },
                    "start": 1906,
                    "end": 1928
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1941,
                        "end": 1944
                      },
                      "start": 1939,
                      "end": 1944
                    },
                    "start": 1930,
                    "end": 1944
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1955
                    },
                    "typeArguments": null,
                    "start": 1947,
                    "end": 1955
                  },
                  "start": 1945,
                  "end": 1955
                },
                "body": null,
                "expression": false,
                "start": 1884,
                "end": 1956
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1868,
              "end": 1956
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "promisifyAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1969,
                "end": 1981
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 2001
                        },
                        "typeArguments": null,
                        "start": 1987,
                        "end": 2001
                      },
                      "start": 1985,
                      "end": 2001
                    },
                    "start": 1982,
                    "end": 2001
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2017
                        },
                        "typeArguments": null,
                        "start": 2011,
                        "end": 2017
                      },
                      "start": 2009,
                      "end": 2017
                    },
                    "start": 2003,
                    "end": 2017
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
                      "start": 2020,
                      "end": 2026
                    },
                    "typeArguments": null,
                    "start": 2020,
                    "end": 2026
                  },
                  "start": 2018,
                  "end": 2026
                },
                "body": null,
                "expression": false,
                "start": 1981,
                "end": 2027
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1962,
              "end": 2027
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "coroutine",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2049
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2051
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2050,
                      "end": 2051
                    }
                  ],
                  "start": 2049,
                  "end": 2052
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2065,
                          "end": 2072
                        },
                        "typeArguments": null,
                        "start": 2058,
                        "end": 2072
                      },
                      "start": 2056,
                      "end": 2072
                    },
                    "start": 2053,
                    "end": 2072
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2093,
                          "end": 2101
                        },
                        "typeArguments": null,
                        "start": 2093,
                        "end": 2101
                      },
                      "start": 2091,
                      "end": 2101
                    },
                    "start": 2074,
                    "end": 2101
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2104,
                      "end": 2112
                    },
                    "typeArguments": null,
                    "start": 2104,
                    "end": 2112
                  },
                  "start": 2102,
                  "end": 2112
                },
                "body": null,
                "expression": false,
                "start": 2049,
                "end": 2113
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2033,
              "end": 2113
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "spawn",
                "optional": false,
                "typeAnnotation": null,
                "start": 2126,
                "end": 2131
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2132,
                        "end": 2133
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2132,
                      "end": 2133
                    }
                  ],
                  "start": 2131,
                  "end": 2134
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2147,
                          "end": 2154
                        },
                        "typeArguments": null,
                        "start": 2140,
                        "end": 2154
                      },
                      "start": 2138,
                      "end": 2154
                    },
                    "start": 2135,
                    "end": 2154
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2175,
                          "end": 2183
                        },
                        "typeArguments": null,
                        "start": 2175,
                        "end": 2183
                      },
                      "start": 2173,
                      "end": 2183
                    },
                    "start": 2156,
                    "end": 2183
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
                      "start": 2186,
                      "end": 2193
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2194,
                            "end": 2195
                          },
                          "typeArguments": null,
                          "start": 2194,
                          "end": 2195
                        }
                      ],
                      "start": 2193,
                      "end": 2196
                    },
                    "start": 2186,
                    "end": 2196
                  },
                  "start": 2184,
                  "end": 2196
                },
                "body": null,
                "expression": false,
                "start": 2131,
                "end": 2197
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2119,
              "end": 2197
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noConflict",
                "optional": false,
                "typeAnnotation": null,
                "start": 2210,
                "end": 2220
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2233,
                          "end": 2240
                        },
                        "typeArguments": null,
                        "start": 2226,
                        "end": 2240
                      },
                      "start": 2224,
                      "end": 2240
                    },
                    "start": 2221,
                    "end": 2240
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2257
                    },
                    "typeArguments": null,
                    "start": 2243,
                    "end": 2257
                  },
                  "start": 2241,
                  "end": 2257
                },
                "body": null,
                "expression": false,
                "start": 2220,
                "end": 2258
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2203,
              "end": 2258
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onPossiblyUnhandledRejection",
                "optional": false,
                "typeAnnotation": null,
                "start": 2271,
                "end": 2299
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2312,
                          "end": 2319
                        },
                        "typeArguments": null,
                        "start": 2305,
                        "end": 2319
                      },
                      "start": 2303,
                      "end": 2319
                    },
                    "start": 2300,
                    "end": 2319
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handler",
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
                            "name": "reason",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 2339,
                                "end": 2342
                              },
                              "start": 2337,
                              "end": 2342
                            },
                            "start": 2331,
                            "end": 2342
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2347,
                            "end": 2350
                          },
                          "start": 2344,
                          "end": 2350
                        },
                        "start": 2330,
                        "end": 2350
                      },
                      "start": 2328,
                      "end": 2350
                    },
                    "start": 2321,
                    "end": 2350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2353,
                    "end": 2357
                  },
                  "start": 2351,
                  "end": 2357
                },
                "body": null,
                "expression": false,
                "start": 2299,
                "end": 2358
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2264,
              "end": 2358
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2374
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2375,
                        "end": 2376
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2375,
                      "end": 2376
                    }
                  ],
                  "start": 2374,
                  "end": 2377
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2390,
                          "end": 2397
                        },
                        "typeArguments": null,
                        "start": 2383,
                        "end": 2397
                      },
                      "start": 2381,
                      "end": 2397
                    },
                    "start": 2378,
                    "end": 2397
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2407,
                            "end": 2414
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2415,
                            "end": 2423
                          },
                          "start": 2407,
                          "end": 2423
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2424,
                                    "end": 2431
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2432,
                                    "end": 2440
                                  },
                                  "start": 2424,
                                  "end": 2440
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2441,
                                        "end": 2442
                                      },
                                      "typeArguments": null,
                                      "start": 2441,
                                      "end": 2442
                                    }
                                  ],
                                  "start": 2440,
                                  "end": 2443
                                },
                                "start": 2424,
                                "end": 2443
                              },
                              "start": 2424,
                              "end": 2445
                            }
                          ],
                          "start": 2423,
                          "end": 2446
                        },
                        "start": 2407,
                        "end": 2446
                      },
                      "start": 2405,
                      "end": 2446
                    },
                    "start": 2399,
                    "end": 2446
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
                      "start": 2449,
                      "end": 2456
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2457,
                              "end": 2458
                            },
                            "typeArguments": null,
                            "start": 2457,
                            "end": 2458
                          },
                          "start": 2457,
                          "end": 2460
                        }
                      ],
                      "start": 2456,
                      "end": 2461
                    },
                    "start": 2449,
                    "end": 2461
                  },
                  "start": 2447,
                  "end": 2461
                },
                "body": null,
                "expression": false,
                "start": 2374,
                "end": 2462
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2364,
              "end": 2462
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2474,
                "end": 2477
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2478,
                        "end": 2479
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2478,
                      "end": 2479
                    }
                  ],
                  "start": 2477,
                  "end": 2480
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2493,
                          "end": 2500
                        },
                        "typeArguments": null,
                        "start": 2486,
                        "end": 2500
                      },
                      "start": 2484,
                      "end": 2500
                    },
                    "start": 2481,
                    "end": 2500
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2510,
                            "end": 2517
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2518,
                            "end": 2526
                          },
                          "start": 2510,
                          "end": 2526
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2527,
                                  "end": 2528
                                },
                                "typeArguments": null,
                                "start": 2527,
                                "end": 2528
                              },
                              "start": 2527,
                              "end": 2530
                            }
                          ],
                          "start": 2526,
                          "end": 2531
                        },
                        "start": 2510,
                        "end": 2531
                      },
                      "start": 2508,
                      "end": 2531
                    },
                    "start": 2502,
                    "end": 2531
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
                      "start": 2534,
                      "end": 2541
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2542,
                              "end": 2543
                            },
                            "typeArguments": null,
                            "start": 2542,
                            "end": 2543
                          },
                          "start": 2542,
                          "end": 2545
                        }
                      ],
                      "start": 2541,
                      "end": 2546
                    },
                    "start": 2534,
                    "end": 2546
                  },
                  "start": 2532,
                  "end": 2546
                },
                "body": null,
                "expression": false,
                "start": 2477,
                "end": 2547
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2467,
              "end": 2547
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2559,
                "end": 2562
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2563,
                        "end": 2564
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2563,
                      "end": 2564
                    }
                  ],
                  "start": 2562,
                  "end": 2565
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2578,
                          "end": 2585
                        },
                        "typeArguments": null,
                        "start": 2571,
                        "end": 2585
                      },
                      "start": 2569,
                      "end": 2585
                    },
                    "start": 2566,
                    "end": 2585
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2595,
                              "end": 2602
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2603,
                              "end": 2611
                            },
                            "start": 2595,
                            "end": 2611
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2612,
                                  "end": 2613
                                },
                                "typeArguments": null,
                                "start": 2612,
                                "end": 2613
                              }
                            ],
                            "start": 2611,
                            "end": 2614
                          },
                          "start": 2595,
                          "end": 2614
                        },
                        "start": 2595,
                        "end": 2616
                      },
                      "start": 2593,
                      "end": 2616
                    },
                    "start": 2587,
                    "end": 2616
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
                      "start": 2619,
                      "end": 2626
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2627,
                              "end": 2628
                            },
                            "typeArguments": null,
                            "start": 2627,
                            "end": 2628
                          },
                          "start": 2627,
                          "end": 2630
                        }
                      ],
                      "start": 2626,
                      "end": 2631
                    },
                    "start": 2619,
                    "end": 2631
                  },
                  "start": 2617,
                  "end": 2631
                },
                "body": null,
                "expression": false,
                "start": 2562,
                "end": 2632
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2552,
              "end": 2632
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2644,
                "end": 2647
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2648,
                        "end": 2649
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2648,
                      "end": 2649
                    }
                  ],
                  "start": 2647,
                  "end": 2650
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2663,
                          "end": 2670
                        },
                        "typeArguments": null,
                        "start": 2656,
                        "end": 2670
                      },
                      "start": 2654,
                      "end": 2670
                    },
                    "start": 2651,
                    "end": 2670
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2680,
                            "end": 2681
                          },
                          "typeArguments": null,
                          "start": 2680,
                          "end": 2681
                        },
                        "start": 2680,
                        "end": 2683
                      },
                      "start": 2678,
                      "end": 2683
                    },
                    "start": 2672,
                    "end": 2683
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
                      "start": 2686,
                      "end": 2693
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2694,
                              "end": 2695
                            },
                            "typeArguments": null,
                            "start": 2694,
                            "end": 2695
                          },
                          "start": 2694,
                          "end": 2697
                        }
                      ],
                      "start": 2693,
                      "end": 2698
                    },
                    "start": 2686,
                    "end": 2698
                  },
                  "start": 2684,
                  "end": 2698
                },
                "body": null,
                "expression": false,
                "start": 2647,
                "end": 2699
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2637,
              "end": 2699
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 2712,
                "end": 2717
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2730,
                          "end": 2737
                        },
                        "typeArguments": null,
                        "start": 2723,
                        "end": 2737
                      },
                      "start": 2721,
                      "end": 2737
                    },
                    "start": 2718,
                    "end": 2737
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2747,
                          "end": 2754
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2755,
                                "end": 2761
                              },
                              "typeArguments": null,
                              "start": 2755,
                              "end": 2761
                            }
                          ],
                          "start": 2754,
                          "end": 2762
                        },
                        "start": 2747,
                        "end": 2762
                      },
                      "start": 2745,
                      "end": 2762
                    },
                    "start": 2739,
                    "end": 2762
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
                      "start": 2765,
                      "end": 2772
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2773,
                            "end": 2779
                          },
                          "typeArguments": null,
                          "start": 2773,
                          "end": 2779
                        }
                      ],
                      "start": 2772,
                      "end": 2780
                    },
                    "start": 2765,
                    "end": 2780
                  },
                  "start": 2763,
                  "end": 2780
                },
                "body": null,
                "expression": false,
                "start": 2717,
                "end": 2781
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2705,
              "end": 2781
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 2793,
                "end": 2798
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2811,
                          "end": 2818
                        },
                        "typeArguments": null,
                        "start": 2804,
                        "end": 2818
                      },
                      "start": 2802,
                      "end": 2818
                    },
                    "start": 2799,
                    "end": 2818
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2828,
                          "end": 2834
                        },
                        "typeArguments": null,
                        "start": 2828,
                        "end": 2834
                      },
                      "start": 2826,
                      "end": 2834
                    },
                    "start": 2820,
                    "end": 2834
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
                      "start": 2837,
                      "end": 2844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2845,
                            "end": 2851
                          },
                          "typeArguments": null,
                          "start": 2845,
                          "end": 2851
                        }
                      ],
                      "start": 2844,
                      "end": 2852
                    },
                    "start": 2837,
                    "end": 2852
                  },
                  "start": 2835,
                  "end": 2852
                },
                "body": null,
                "expression": false,
                "start": 2798,
                "end": 2853
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2786,
              "end": 2853
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 2866,
                "end": 2872
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2873,
                        "end": 2874
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2873,
                      "end": 2874
                    }
                  ],
                  "start": 2872,
                  "end": 2875
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2888,
                          "end": 2895
                        },
                        "typeArguments": null,
                        "start": 2881,
                        "end": 2895
                      },
                      "start": 2879,
                      "end": 2895
                    },
                    "start": 2876,
                    "end": 2895
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2905,
                            "end": 2912
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2913,
                            "end": 2921
                          },
                          "start": 2905,
                          "end": 2921
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2922,
                                    "end": 2929
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2930,
                                    "end": 2938
                                  },
                                  "start": 2922,
                                  "end": 2938
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2939,
                                        "end": 2940
                                      },
                                      "typeArguments": null,
                                      "start": 2939,
                                      "end": 2940
                                    }
                                  ],
                                  "start": 2938,
                                  "end": 2941
                                },
                                "start": 2922,
                                "end": 2941
                              },
                              "start": 2922,
                              "end": 2943
                            }
                          ],
                          "start": 2921,
                          "end": 2944
                        },
                        "start": 2905,
                        "end": 2944
                      },
                      "start": 2903,
                      "end": 2944
                    },
                    "start": 2897,
                    "end": 2944
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
                      "start": 2947,
                      "end": 2954
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2955,
                                "end": 2962
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2963,
                                "end": 2973
                              },
                              "start": 2955,
                              "end": 2973
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2974,
                                    "end": 2975
                                  },
                                  "typeArguments": null,
                                  "start": 2974,
                                  "end": 2975
                                }
                              ],
                              "start": 2973,
                              "end": 2976
                            },
                            "start": 2955,
                            "end": 2976
                          },
                          "start": 2955,
                          "end": 2978
                        }
                      ],
                      "start": 2954,
                      "end": 2979
                    },
                    "start": 2947,
                    "end": 2979
                  },
                  "start": 2945,
                  "end": 2979
                },
                "body": null,
                "expression": false,
                "start": 2872,
                "end": 2980
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2859,
              "end": 2980
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 2992,
                "end": 2998
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2999,
                        "end": 3000
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2999,
                      "end": 3000
                    }
                  ],
                  "start": 2998,
                  "end": 3001
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3014,
                          "end": 3021
                        },
                        "typeArguments": null,
                        "start": 3007,
                        "end": 3021
                      },
                      "start": 3005,
                      "end": 3021
                    },
                    "start": 3002,
                    "end": 3021
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3031,
                            "end": 3038
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3039,
                            "end": 3047
                          },
                          "start": 3031,
                          "end": 3047
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3048,
                                  "end": 3049
                                },
                                "typeArguments": null,
                                "start": 3048,
                                "end": 3049
                              },
                              "start": 3048,
                              "end": 3051
                            }
                          ],
                          "start": 3047,
                          "end": 3052
                        },
                        "start": 3031,
                        "end": 3052
                      },
                      "start": 3029,
                      "end": 3052
                    },
                    "start": 3023,
                    "end": 3052
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
                      "start": 3055,
                      "end": 3062
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3063,
                                "end": 3070
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3071,
                                "end": 3081
                              },
                              "start": 3063,
                              "end": 3081
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3082,
                                    "end": 3083
                                  },
                                  "typeArguments": null,
                                  "start": 3082,
                                  "end": 3083
                                }
                              ],
                              "start": 3081,
                              "end": 3084
                            },
                            "start": 3063,
                            "end": 3084
                          },
                          "start": 3063,
                          "end": 3086
                        }
                      ],
                      "start": 3062,
                      "end": 3087
                    },
                    "start": 3055,
                    "end": 3087
                  },
                  "start": 3053,
                  "end": 3087
                },
                "body": null,
                "expression": false,
                "start": 2998,
                "end": 3088
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2985,
              "end": 3088
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 3100,
                "end": 3106
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3107,
                        "end": 3108
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3107,
                      "end": 3108
                    }
                  ],
                  "start": 3106,
                  "end": 3109
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3122,
                          "end": 3129
                        },
                        "typeArguments": null,
                        "start": 3115,
                        "end": 3129
                      },
                      "start": 3113,
                      "end": 3129
                    },
                    "start": 3110,
                    "end": 3129
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3139,
                              "end": 3146
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3147,
                              "end": 3155
                            },
                            "start": 3139,
                            "end": 3155
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3156,
                                  "end": 3157
                                },
                                "typeArguments": null,
                                "start": 3156,
                                "end": 3157
                              }
                            ],
                            "start": 3155,
                            "end": 3158
                          },
                          "start": 3139,
                          "end": 3158
                        },
                        "start": 3139,
                        "end": 3160
                      },
                      "start": 3137,
                      "end": 3160
                    },
                    "start": 3131,
                    "end": 3160
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
                      "start": 3163,
                      "end": 3170
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3171,
                                "end": 3178
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3179,
                                "end": 3189
                              },
                              "start": 3171,
                              "end": 3189
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3190,
                                    "end": 3191
                                  },
                                  "typeArguments": null,
                                  "start": 3190,
                                  "end": 3191
                                }
                              ],
                              "start": 3189,
                              "end": 3192
                            },
                            "start": 3171,
                            "end": 3192
                          },
                          "start": 3171,
                          "end": 3194
                        }
                      ],
                      "start": 3170,
                      "end": 3195
                    },
                    "start": 3163,
                    "end": 3195
                  },
                  "start": 3161,
                  "end": 3195
                },
                "body": null,
                "expression": false,
                "start": 3106,
                "end": 3196
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3093,
              "end": 3196
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 3208,
                "end": 3214
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3215,
                        "end": 3216
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3215,
                      "end": 3216
                    }
                  ],
                  "start": 3214,
                  "end": 3217
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3230,
                          "end": 3237
                        },
                        "typeArguments": null,
                        "start": 3223,
                        "end": 3237
                      },
                      "start": 3221,
                      "end": 3237
                    },
                    "start": 3218,
                    "end": 3237
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3247,
                            "end": 3248
                          },
                          "typeArguments": null,
                          "start": 3247,
                          "end": 3248
                        },
                        "start": 3247,
                        "end": 3250
                      },
                      "start": 3245,
                      "end": 3250
                    },
                    "start": 3239,
                    "end": 3250
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
                      "start": 3253,
                      "end": 3260
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3261,
                                "end": 3268
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3269,
                                "end": 3279
                              },
                              "start": 3261,
                              "end": 3279
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3280,
                                    "end": 3281
                                  },
                                  "typeArguments": null,
                                  "start": 3280,
                                  "end": 3281
                                }
                              ],
                              "start": 3279,
                              "end": 3282
                            },
                            "start": 3261,
                            "end": 3282
                          },
                          "start": 3261,
                          "end": 3284
                        }
                      ],
                      "start": 3260,
                      "end": 3285
                    },
                    "start": 3253,
                    "end": 3285
                  },
                  "start": 3251,
                  "end": 3285
                },
                "body": null,
                "expression": false,
                "start": 3214,
                "end": 3286
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3201,
              "end": 3286
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3299,
                "end": 3302
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
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
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3318,
                          "end": 3325
                        },
                        "typeArguments": null,
                        "start": 3311,
                        "end": 3325
                      },
                      "start": 3309,
                      "end": 3325
                    },
                    "start": 3306,
                    "end": 3325
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3335,
                            "end": 3342
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3343,
                            "end": 3351
                          },
                          "start": 3335,
                          "end": 3351
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3352,
                                    "end": 3359
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3360,
                                    "end": 3368
                                  },
                                  "start": 3352,
                                  "end": 3368
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3369,
                                        "end": 3370
                                      },
                                      "typeArguments": null,
                                      "start": 3369,
                                      "end": 3370
                                    }
                                  ],
                                  "start": 3368,
                                  "end": 3371
                                },
                                "start": 3352,
                                "end": 3371
                              },
                              "start": 3352,
                              "end": 3373
                            }
                          ],
                          "start": 3351,
                          "end": 3374
                        },
                        "start": 3335,
                        "end": 3374
                      },
                      "start": 3333,
                      "end": 3374
                    },
                    "start": 3327,
                    "end": 3374
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
                      "start": 3377,
                      "end": 3384
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3385,
                            "end": 3386
                          },
                          "typeArguments": null,
                          "start": 3385,
                          "end": 3386
                        }
                      ],
                      "start": 3384,
                      "end": 3387
                    },
                    "start": 3377,
                    "end": 3387
                  },
                  "start": 3375,
                  "end": 3387
                },
                "body": null,
                "expression": false,
                "start": 3302,
                "end": 3388
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3292,
              "end": 3388
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3400,
                "end": 3403
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3404,
                        "end": 3405
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3404,
                      "end": 3405
                    }
                  ],
                  "start": 3403,
                  "end": 3406
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3419,
                          "end": 3426
                        },
                        "typeArguments": null,
                        "start": 3412,
                        "end": 3426
                      },
                      "start": 3410,
                      "end": 3426
                    },
                    "start": 3407,
                    "end": 3426
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3436,
                            "end": 3443
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3444,
                            "end": 3452
                          },
                          "start": 3436,
                          "end": 3452
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3453,
                                  "end": 3454
                                },
                                "typeArguments": null,
                                "start": 3453,
                                "end": 3454
                              },
                              "start": 3453,
                              "end": 3456
                            }
                          ],
                          "start": 3452,
                          "end": 3457
                        },
                        "start": 3436,
                        "end": 3457
                      },
                      "start": 3434,
                      "end": 3457
                    },
                    "start": 3428,
                    "end": 3457
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
                      "start": 3460,
                      "end": 3467
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3468,
                            "end": 3469
                          },
                          "typeArguments": null,
                          "start": 3468,
                          "end": 3469
                        }
                      ],
                      "start": 3467,
                      "end": 3470
                    },
                    "start": 3460,
                    "end": 3470
                  },
                  "start": 3458,
                  "end": 3470
                },
                "body": null,
                "expression": false,
                "start": 3403,
                "end": 3471
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3393,
              "end": 3471
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3483,
                "end": 3486
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3487,
                        "end": 3488
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3487,
                      "end": 3488
                    }
                  ],
                  "start": 3486,
                  "end": 3489
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3502,
                          "end": 3509
                        },
                        "typeArguments": null,
                        "start": 3495,
                        "end": 3509
                      },
                      "start": 3493,
                      "end": 3509
                    },
                    "start": 3490,
                    "end": 3509
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3519,
                              "end": 3526
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3527,
                              "end": 3535
                            },
                            "start": 3519,
                            "end": 3535
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3536,
                                  "end": 3537
                                },
                                "typeArguments": null,
                                "start": 3536,
                                "end": 3537
                              }
                            ],
                            "start": 3535,
                            "end": 3538
                          },
                          "start": 3519,
                          "end": 3538
                        },
                        "start": 3519,
                        "end": 3540
                      },
                      "start": 3517,
                      "end": 3540
                    },
                    "start": 3511,
                    "end": 3540
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
                      "start": 3543,
                      "end": 3550
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3551,
                            "end": 3552
                          },
                          "typeArguments": null,
                          "start": 3551,
                          "end": 3552
                        }
                      ],
                      "start": 3550,
                      "end": 3553
                    },
                    "start": 3543,
                    "end": 3553
                  },
                  "start": 3541,
                  "end": 3553
                },
                "body": null,
                "expression": false,
                "start": 3486,
                "end": 3554
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3476,
              "end": 3554
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3566,
                "end": 3569
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3570,
                        "end": 3571
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3570,
                      "end": 3571
                    }
                  ],
                  "start": 3569,
                  "end": 3572
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3585,
                          "end": 3592
                        },
                        "typeArguments": null,
                        "start": 3578,
                        "end": 3592
                      },
                      "start": 3576,
                      "end": 3592
                    },
                    "start": 3573,
                    "end": 3592
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3602,
                            "end": 3603
                          },
                          "typeArguments": null,
                          "start": 3602,
                          "end": 3603
                        },
                        "start": 3602,
                        "end": 3605
                      },
                      "start": 3600,
                      "end": 3605
                    },
                    "start": 3594,
                    "end": 3605
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
                      "start": 3608,
                      "end": 3615
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3616,
                            "end": 3617
                          },
                          "typeArguments": null,
                          "start": 3616,
                          "end": 3617
                        }
                      ],
                      "start": 3615,
                      "end": 3618
                    },
                    "start": 3608,
                    "end": 3618
                  },
                  "start": 3606,
                  "end": 3618
                },
                "body": null,
                "expression": false,
                "start": 3569,
                "end": 3619
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3559,
              "end": 3619
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3632,
                "end": 3636
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3637,
                        "end": 3638
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3637,
                      "end": 3638
                    }
                  ],
                  "start": 3636,
                  "end": 3639
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3652,
                          "end": 3659
                        },
                        "typeArguments": null,
                        "start": 3645,
                        "end": 3659
                      },
                      "start": 3643,
                      "end": 3659
                    },
                    "start": 3640,
                    "end": 3659
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3669,
                            "end": 3676
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3677,
                            "end": 3685
                          },
                          "start": 3669,
                          "end": 3685
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3686,
                                    "end": 3693
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3694,
                                    "end": 3702
                                  },
                                  "start": 3686,
                                  "end": 3702
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3703,
                                        "end": 3704
                                      },
                                      "typeArguments": null,
                                      "start": 3703,
                                      "end": 3704
                                    }
                                  ],
                                  "start": 3702,
                                  "end": 3705
                                },
                                "start": 3686,
                                "end": 3705
                              },
                              "start": 3686,
                              "end": 3707
                            }
                          ],
                          "start": 3685,
                          "end": 3708
                        },
                        "start": 3669,
                        "end": 3708
                      },
                      "start": 3667,
                      "end": 3708
                    },
                    "start": 3661,
                    "end": 3708
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
                      "start": 3711,
                      "end": 3718
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3719,
                            "end": 3720
                          },
                          "typeArguments": null,
                          "start": 3719,
                          "end": 3720
                        }
                      ],
                      "start": 3718,
                      "end": 3721
                    },
                    "start": 3711,
                    "end": 3721
                  },
                  "start": 3709,
                  "end": 3721
                },
                "body": null,
                "expression": false,
                "start": 3636,
                "end": 3722
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3625,
              "end": 3722
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3734,
                "end": 3738
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3739,
                        "end": 3740
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3739,
                      "end": 3740
                    }
                  ],
                  "start": 3738,
                  "end": 3741
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3754,
                          "end": 3761
                        },
                        "typeArguments": null,
                        "start": 3747,
                        "end": 3761
                      },
                      "start": 3745,
                      "end": 3761
                    },
                    "start": 3742,
                    "end": 3761
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3771,
                            "end": 3778
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3779,
                            "end": 3787
                          },
                          "start": 3771,
                          "end": 3787
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3788,
                                  "end": 3789
                                },
                                "typeArguments": null,
                                "start": 3788,
                                "end": 3789
                              },
                              "start": 3788,
                              "end": 3791
                            }
                          ],
                          "start": 3787,
                          "end": 3792
                        },
                        "start": 3771,
                        "end": 3792
                      },
                      "start": 3769,
                      "end": 3792
                    },
                    "start": 3763,
                    "end": 3792
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
                      "start": 3795,
                      "end": 3802
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3803,
                            "end": 3804
                          },
                          "typeArguments": null,
                          "start": 3803,
                          "end": 3804
                        }
                      ],
                      "start": 3802,
                      "end": 3805
                    },
                    "start": 3795,
                    "end": 3805
                  },
                  "start": 3793,
                  "end": 3805
                },
                "body": null,
                "expression": false,
                "start": 3738,
                "end": 3806
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3727,
              "end": 3806
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3818,
                "end": 3822
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3823,
                        "end": 3824
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3823,
                      "end": 3824
                    }
                  ],
                  "start": 3822,
                  "end": 3825
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3838,
                          "end": 3845
                        },
                        "typeArguments": null,
                        "start": 3831,
                        "end": 3845
                      },
                      "start": 3829,
                      "end": 3845
                    },
                    "start": 3826,
                    "end": 3845
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3855,
                              "end": 3862
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3863,
                              "end": 3871
                            },
                            "start": 3855,
                            "end": 3871
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3872,
                                  "end": 3873
                                },
                                "typeArguments": null,
                                "start": 3872,
                                "end": 3873
                              }
                            ],
                            "start": 3871,
                            "end": 3874
                          },
                          "start": 3855,
                          "end": 3874
                        },
                        "start": 3855,
                        "end": 3876
                      },
                      "start": 3853,
                      "end": 3876
                    },
                    "start": 3847,
                    "end": 3876
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
                      "start": 3879,
                      "end": 3886
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3887,
                            "end": 3888
                          },
                          "typeArguments": null,
                          "start": 3887,
                          "end": 3888
                        }
                      ],
                      "start": 3886,
                      "end": 3889
                    },
                    "start": 3879,
                    "end": 3889
                  },
                  "start": 3877,
                  "end": 3889
                },
                "body": null,
                "expression": false,
                "start": 3822,
                "end": 3890
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3811,
              "end": 3890
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3902,
                "end": 3906
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3907,
                        "end": 3908
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3907,
                      "end": 3908
                    }
                  ],
                  "start": 3906,
                  "end": 3909
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3922,
                          "end": 3929
                        },
                        "typeArguments": null,
                        "start": 3915,
                        "end": 3929
                      },
                      "start": 3913,
                      "end": 3929
                    },
                    "start": 3910,
                    "end": 3929
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3939,
                            "end": 3940
                          },
                          "typeArguments": null,
                          "start": 3939,
                          "end": 3940
                        },
                        "start": 3939,
                        "end": 3942
                      },
                      "start": 3937,
                      "end": 3942
                    },
                    "start": 3931,
                    "end": 3942
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
                      "start": 3945,
                      "end": 3952
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3953,
                            "end": 3954
                          },
                          "typeArguments": null,
                          "start": 3953,
                          "end": 3954
                        }
                      ],
                      "start": 3952,
                      "end": 3955
                    },
                    "start": 3945,
                    "end": 3955
                  },
                  "start": 3943,
                  "end": 3955
                },
                "body": null,
                "expression": false,
                "start": 3906,
                "end": 3956
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3895,
              "end": 3956
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 3969,
                "end": 3973
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3974,
                        "end": 3975
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3974,
                      "end": 3975
                    }
                  ],
                  "start": 3973,
                  "end": 3976
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3989,
                          "end": 3996
                        },
                        "typeArguments": null,
                        "start": 3982,
                        "end": 3996
                      },
                      "start": 3980,
                      "end": 3996
                    },
                    "start": 3977,
                    "end": 3996
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4006,
                            "end": 4013
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4014,
                            "end": 4022
                          },
                          "start": 4006,
                          "end": 4022
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4023,
                                    "end": 4030
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4031,
                                    "end": 4039
                                  },
                                  "start": 4023,
                                  "end": 4039
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4040,
                                        "end": 4041
                                      },
                                      "typeArguments": null,
                                      "start": 4040,
                                      "end": 4041
                                    }
                                  ],
                                  "start": 4039,
                                  "end": 4042
                                },
                                "start": 4023,
                                "end": 4042
                              },
                              "start": 4023,
                              "end": 4044
                            }
                          ],
                          "start": 4022,
                          "end": 4045
                        },
                        "start": 4006,
                        "end": 4045
                      },
                      "start": 4004,
                      "end": 4045
                    },
                    "start": 3998,
                    "end": 4045
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4054,
                        "end": 4060
                      },
                      "start": 4052,
                      "end": 4060
                    },
                    "start": 4047,
                    "end": 4060
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
                      "start": 4063,
                      "end": 4070
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4071,
                              "end": 4072
                            },
                            "typeArguments": null,
                            "start": 4071,
                            "end": 4072
                          },
                          "start": 4071,
                          "end": 4074
                        }
                      ],
                      "start": 4070,
                      "end": 4075
                    },
                    "start": 4063,
                    "end": 4075
                  },
                  "start": 4061,
                  "end": 4075
                },
                "body": null,
                "expression": false,
                "start": 3973,
                "end": 4076
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3962,
              "end": 4076
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4088,
                "end": 4092
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4093,
                        "end": 4094
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4093,
                      "end": 4094
                    }
                  ],
                  "start": 4092,
                  "end": 4095
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4108,
                          "end": 4115
                        },
                        "typeArguments": null,
                        "start": 4101,
                        "end": 4115
                      },
                      "start": 4099,
                      "end": 4115
                    },
                    "start": 4096,
                    "end": 4115
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4125,
                            "end": 4132
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4133,
                            "end": 4141
                          },
                          "start": 4125,
                          "end": 4141
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4142,
                                  "end": 4143
                                },
                                "typeArguments": null,
                                "start": 4142,
                                "end": 4143
                              },
                              "start": 4142,
                              "end": 4145
                            }
                          ],
                          "start": 4141,
                          "end": 4146
                        },
                        "start": 4125,
                        "end": 4146
                      },
                      "start": 4123,
                      "end": 4146
                    },
                    "start": 4117,
                    "end": 4146
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4155,
                        "end": 4161
                      },
                      "start": 4153,
                      "end": 4161
                    },
                    "start": 4148,
                    "end": 4161
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
                      "start": 4164,
                      "end": 4171
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4172,
                              "end": 4173
                            },
                            "typeArguments": null,
                            "start": 4172,
                            "end": 4173
                          },
                          "start": 4172,
                          "end": 4175
                        }
                      ],
                      "start": 4171,
                      "end": 4176
                    },
                    "start": 4164,
                    "end": 4176
                  },
                  "start": 4162,
                  "end": 4176
                },
                "body": null,
                "expression": false,
                "start": 4092,
                "end": 4177
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4081,
              "end": 4177
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4189,
                "end": 4193
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4194,
                        "end": 4195
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4194,
                      "end": 4195
                    }
                  ],
                  "start": 4193,
                  "end": 4196
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4209,
                          "end": 4216
                        },
                        "typeArguments": null,
                        "start": 4202,
                        "end": 4216
                      },
                      "start": 4200,
                      "end": 4216
                    },
                    "start": 4197,
                    "end": 4216
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4226,
                              "end": 4233
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4234,
                              "end": 4242
                            },
                            "start": 4226,
                            "end": 4242
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4243,
                                  "end": 4244
                                },
                                "typeArguments": null,
                                "start": 4243,
                                "end": 4244
                              }
                            ],
                            "start": 4242,
                            "end": 4245
                          },
                          "start": 4226,
                          "end": 4245
                        },
                        "start": 4226,
                        "end": 4247
                      },
                      "start": 4224,
                      "end": 4247
                    },
                    "start": 4218,
                    "end": 4247
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4256,
                        "end": 4262
                      },
                      "start": 4254,
                      "end": 4262
                    },
                    "start": 4249,
                    "end": 4262
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
                      "start": 4265,
                      "end": 4272
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4273,
                              "end": 4274
                            },
                            "typeArguments": null,
                            "start": 4273,
                            "end": 4274
                          },
                          "start": 4273,
                          "end": 4276
                        }
                      ],
                      "start": 4272,
                      "end": 4277
                    },
                    "start": 4265,
                    "end": 4277
                  },
                  "start": 4263,
                  "end": 4277
                },
                "body": null,
                "expression": false,
                "start": 4193,
                "end": 4278
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4182,
              "end": 4278
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4290,
                "end": 4294
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4295,
                        "end": 4296
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4295,
                      "end": 4296
                    }
                  ],
                  "start": 4294,
                  "end": 4297
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4310,
                          "end": 4317
                        },
                        "typeArguments": null,
                        "start": 4303,
                        "end": 4317
                      },
                      "start": 4301,
                      "end": 4317
                    },
                    "start": 4298,
                    "end": 4317
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4327,
                            "end": 4328
                          },
                          "typeArguments": null,
                          "start": 4327,
                          "end": 4328
                        },
                        "start": 4327,
                        "end": 4330
                      },
                      "start": 4325,
                      "end": 4330
                    },
                    "start": 4319,
                    "end": 4330
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4339,
                        "end": 4345
                      },
                      "start": 4337,
                      "end": 4345
                    },
                    "start": 4332,
                    "end": 4345
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
                      "start": 4348,
                      "end": 4355
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4356,
                              "end": 4357
                            },
                            "typeArguments": null,
                            "start": 4356,
                            "end": 4357
                          },
                          "start": 4356,
                          "end": 4359
                        }
                      ],
                      "start": 4355,
                      "end": 4360
                    },
                    "start": 4348,
                    "end": 4360
                  },
                  "start": 4346,
                  "end": 4360
                },
                "body": null,
                "expression": false,
                "start": 4294,
                "end": 4361
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4283,
              "end": 4361
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 4374,
                "end": 4378
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4379,
                        "end": 4380
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4379,
                      "end": 4380
                    }
                  ],
                  "start": 4378,
                  "end": 4381
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4394,
                          "end": 4401
                        },
                        "typeArguments": null,
                        "start": 4387,
                        "end": 4401
                      },
                      "start": 4385,
                      "end": 4401
                    },
                    "start": 4382,
                    "end": 4401
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4406,
                      "end": 4412
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4414,
                              "end": 4421
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4422,
                              "end": 4430
                            },
                            "start": 4414,
                            "end": 4430
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4431,
                                  "end": 4432
                                },
                                "typeArguments": null,
                                "start": 4431,
                                "end": 4432
                              }
                            ],
                            "start": 4430,
                            "end": 4433
                          },
                          "start": 4414,
                          "end": 4433
                        },
                        "start": 4414,
                        "end": 4435
                      },
                      "start": 4412,
                      "end": 4435
                    },
                    "value": null,
                    "start": 4403,
                    "end": 4435
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
                      "start": 4438,
                      "end": 4445
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4446,
                              "end": 4447
                            },
                            "typeArguments": null,
                            "start": 4446,
                            "end": 4447
                          },
                          "start": 4446,
                          "end": 4449
                        }
                      ],
                      "start": 4445,
                      "end": 4450
                    },
                    "start": 4438,
                    "end": 4450
                  },
                  "start": 4436,
                  "end": 4450
                },
                "body": null,
                "expression": false,
                "start": 4378,
                "end": 4451
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4367,
              "end": 4451
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 4463,
                "end": 4467
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4468,
                        "end": 4469
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4468,
                      "end": 4469
                    }
                  ],
                  "start": 4467,
                  "end": 4470
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4483,
                          "end": 4490
                        },
                        "typeArguments": null,
                        "start": 4476,
                        "end": 4490
                      },
                      "start": 4474,
                      "end": 4490
                    },
                    "start": 4471,
                    "end": 4490
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4495,
                      "end": 4501
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4503,
                            "end": 4504
                          },
                          "typeArguments": null,
                          "start": 4503,
                          "end": 4504
                        },
                        "start": 4503,
                        "end": 4506
                      },
                      "start": 4501,
                      "end": 4506
                    },
                    "value": null,
                    "start": 4492,
                    "end": 4506
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
                      "start": 4509,
                      "end": 4516
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4517,
                              "end": 4518
                            },
                            "typeArguments": null,
                            "start": 4517,
                            "end": 4518
                          },
                          "start": 4517,
                          "end": 4520
                        }
                      ],
                      "start": 4516,
                      "end": 4521
                    },
                    "start": 4509,
                    "end": 4521
                  },
                  "start": 4507,
                  "end": 4521
                },
                "body": null,
                "expression": false,
                "start": 4467,
                "end": 4522
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4456,
              "end": 4522
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4535,
                "end": 4538
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4539,
                        "end": 4540
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4539,
                      "end": 4540
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4542,
                        "end": 4543
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4542,
                      "end": 4543
                    }
                  ],
                  "start": 4538,
                  "end": 4544
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4557,
                          "end": 4564
                        },
                        "typeArguments": null,
                        "start": 4550,
                        "end": 4564
                      },
                      "start": 4548,
                      "end": 4564
                    },
                    "start": 4545,
                    "end": 4564
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4574,
                            "end": 4581
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4582,
                            "end": 4590
                          },
                          "start": 4574,
                          "end": 4590
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4591,
                                    "end": 4598
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4599,
                                    "end": 4607
                                  },
                                  "start": 4591,
                                  "end": 4607
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4608,
                                        "end": 4609
                                      },
                                      "typeArguments": null,
                                      "start": 4608,
                                      "end": 4609
                                    }
                                  ],
                                  "start": 4607,
                                  "end": 4610
                                },
                                "start": 4591,
                                "end": 4610
                              },
                              "start": 4591,
                              "end": 4612
                            }
                          ],
                          "start": 4590,
                          "end": 4613
                        },
                        "start": 4574,
                        "end": 4613
                      },
                      "start": 4572,
                      "end": 4613
                    },
                    "start": 4566,
                    "end": 4613
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4630,
                                  "end": 4631
                                },
                                "typeArguments": null,
                                "start": 4630,
                                "end": 4631
                              },
                              "start": 4628,
                              "end": 4631
                            },
                            "start": 4624,
                            "end": 4631
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4640,
                                "end": 4646
                              },
                              "start": 4638,
                              "end": 4646
                            },
                            "start": 4633,
                            "end": 4646
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4661,
                                "end": 4667
                              },
                              "start": 4659,
                              "end": 4667
                            },
                            "start": 4648,
                            "end": 4667
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4672,
                                "end": 4679
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4680,
                                "end": 4688
                              },
                              "start": 4672,
                              "end": 4688
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
                                    "start": 4689,
                                    "end": 4690
                                  },
                                  "typeArguments": null,
                                  "start": 4689,
                                  "end": 4690
                                }
                              ],
                              "start": 4688,
                              "end": 4691
                            },
                            "start": 4672,
                            "end": 4691
                          },
                          "start": 4669,
                          "end": 4691
                        },
                        "start": 4623,
                        "end": 4691
                      },
                      "start": 4621,
                      "end": 4691
                    },
                    "start": 4615,
                    "end": 4691
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
                      "start": 4694,
                      "end": 4701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4702,
                              "end": 4703
                            },
                            "typeArguments": null,
                            "start": 4702,
                            "end": 4703
                          },
                          "start": 4702,
                          "end": 4705
                        }
                      ],
                      "start": 4701,
                      "end": 4706
                    },
                    "start": 4694,
                    "end": 4706
                  },
                  "start": 4692,
                  "end": 4706
                },
                "body": null,
                "expression": false,
                "start": 4538,
                "end": 4707
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4528,
              "end": 4707
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4719,
                "end": 4722
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4723,
                        "end": 4724
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4723,
                      "end": 4724
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4726,
                        "end": 4727
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4726,
                      "end": 4727
                    }
                  ],
                  "start": 4722,
                  "end": 4728
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4741,
                          "end": 4748
                        },
                        "typeArguments": null,
                        "start": 4734,
                        "end": 4748
                      },
                      "start": 4732,
                      "end": 4748
                    },
                    "start": 4729,
                    "end": 4748
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4758,
                            "end": 4765
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4766,
                            "end": 4774
                          },
                          "start": 4758,
                          "end": 4774
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4775,
                                    "end": 4782
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4783,
                                    "end": 4791
                                  },
                                  "start": 4775,
                                  "end": 4791
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4792,
                                        "end": 4793
                                      },
                                      "typeArguments": null,
                                      "start": 4792,
                                      "end": 4793
                                    }
                                  ],
                                  "start": 4791,
                                  "end": 4794
                                },
                                "start": 4775,
                                "end": 4794
                              },
                              "start": 4775,
                              "end": 4796
                            }
                          ],
                          "start": 4774,
                          "end": 4797
                        },
                        "start": 4758,
                        "end": 4797
                      },
                      "start": 4756,
                      "end": 4797
                    },
                    "start": 4750,
                    "end": 4797
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4814,
                                  "end": 4815
                                },
                                "typeArguments": null,
                                "start": 4814,
                                "end": 4815
                              },
                              "start": 4812,
                              "end": 4815
                            },
                            "start": 4808,
                            "end": 4815
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4824,
                                "end": 4830
                              },
                              "start": 4822,
                              "end": 4830
                            },
                            "start": 4817,
                            "end": 4830
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4845,
                                "end": 4851
                              },
                              "start": 4843,
                              "end": 4851
                            },
                            "start": 4832,
                            "end": 4851
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
                              "start": 4856,
                              "end": 4857
                            },
                            "typeArguments": null,
                            "start": 4856,
                            "end": 4857
                          },
                          "start": 4853,
                          "end": 4857
                        },
                        "start": 4807,
                        "end": 4857
                      },
                      "start": 4805,
                      "end": 4857
                    },
                    "start": 4799,
                    "end": 4857
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
                      "start": 4860,
                      "end": 4867
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4868,
                              "end": 4869
                            },
                            "typeArguments": null,
                            "start": 4868,
                            "end": 4869
                          },
                          "start": 4868,
                          "end": 4871
                        }
                      ],
                      "start": 4867,
                      "end": 4872
                    },
                    "start": 4860,
                    "end": 4872
                  },
                  "start": 4858,
                  "end": 4872
                },
                "body": null,
                "expression": false,
                "start": 4722,
                "end": 4873
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4712,
              "end": 4873
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4885,
                "end": 4888
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4889,
                        "end": 4890
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4889,
                      "end": 4890
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4892,
                        "end": 4893
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4892,
                      "end": 4893
                    }
                  ],
                  "start": 4888,
                  "end": 4894
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4907,
                          "end": 4914
                        },
                        "typeArguments": null,
                        "start": 4900,
                        "end": 4914
                      },
                      "start": 4898,
                      "end": 4914
                    },
                    "start": 4895,
                    "end": 4914
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4924,
                            "end": 4931
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4932,
                            "end": 4940
                          },
                          "start": 4924,
                          "end": 4940
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4941,
                                  "end": 4942
                                },
                                "typeArguments": null,
                                "start": 4941,
                                "end": 4942
                              },
                              "start": 4941,
                              "end": 4944
                            }
                          ],
                          "start": 4940,
                          "end": 4945
                        },
                        "start": 4924,
                        "end": 4945
                      },
                      "start": 4922,
                      "end": 4945
                    },
                    "start": 4916,
                    "end": 4945
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4962,
                                  "end": 4963
                                },
                                "typeArguments": null,
                                "start": 4962,
                                "end": 4963
                              },
                              "start": 4960,
                              "end": 4963
                            },
                            "start": 4956,
                            "end": 4963
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4972,
                                "end": 4978
                              },
                              "start": 4970,
                              "end": 4978
                            },
                            "start": 4965,
                            "end": 4978
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4993,
                                "end": 4999
                              },
                              "start": 4991,
                              "end": 4999
                            },
                            "start": 4980,
                            "end": 4999
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5004,
                                "end": 5011
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5012,
                                "end": 5020
                              },
                              "start": 5004,
                              "end": 5020
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
                                    "start": 5021,
                                    "end": 5022
                                  },
                                  "typeArguments": null,
                                  "start": 5021,
                                  "end": 5022
                                }
                              ],
                              "start": 5020,
                              "end": 5023
                            },
                            "start": 5004,
                            "end": 5023
                          },
                          "start": 5001,
                          "end": 5023
                        },
                        "start": 4955,
                        "end": 5023
                      },
                      "start": 4953,
                      "end": 5023
                    },
                    "start": 4947,
                    "end": 5023
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
                      "start": 5026,
                      "end": 5033
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5034,
                              "end": 5035
                            },
                            "typeArguments": null,
                            "start": 5034,
                            "end": 5035
                          },
                          "start": 5034,
                          "end": 5037
                        }
                      ],
                      "start": 5033,
                      "end": 5038
                    },
                    "start": 5026,
                    "end": 5038
                  },
                  "start": 5024,
                  "end": 5038
                },
                "body": null,
                "expression": false,
                "start": 4888,
                "end": 5039
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4878,
              "end": 5039
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5054
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5055,
                        "end": 5056
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5055,
                      "end": 5056
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5058,
                        "end": 5059
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5058,
                      "end": 5059
                    }
                  ],
                  "start": 5054,
                  "end": 5060
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5073,
                          "end": 5080
                        },
                        "typeArguments": null,
                        "start": 5066,
                        "end": 5080
                      },
                      "start": 5064,
                      "end": 5080
                    },
                    "start": 5061,
                    "end": 5080
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5090,
                            "end": 5097
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5098,
                            "end": 5106
                          },
                          "start": 5090,
                          "end": 5106
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5107,
                                  "end": 5108
                                },
                                "typeArguments": null,
                                "start": 5107,
                                "end": 5108
                              },
                              "start": 5107,
                              "end": 5110
                            }
                          ],
                          "start": 5106,
                          "end": 5111
                        },
                        "start": 5090,
                        "end": 5111
                      },
                      "start": 5088,
                      "end": 5111
                    },
                    "start": 5082,
                    "end": 5111
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5128,
                                  "end": 5129
                                },
                                "typeArguments": null,
                                "start": 5128,
                                "end": 5129
                              },
                              "start": 5126,
                              "end": 5129
                            },
                            "start": 5122,
                            "end": 5129
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5138,
                                "end": 5144
                              },
                              "start": 5136,
                              "end": 5144
                            },
                            "start": 5131,
                            "end": 5144
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5159,
                                "end": 5165
                              },
                              "start": 5157,
                              "end": 5165
                            },
                            "start": 5146,
                            "end": 5165
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
                              "start": 5170,
                              "end": 5171
                            },
                            "typeArguments": null,
                            "start": 5170,
                            "end": 5171
                          },
                          "start": 5167,
                          "end": 5171
                        },
                        "start": 5121,
                        "end": 5171
                      },
                      "start": 5119,
                      "end": 5171
                    },
                    "start": 5113,
                    "end": 5171
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
                      "start": 5174,
                      "end": 5181
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5182,
                              "end": 5183
                            },
                            "typeArguments": null,
                            "start": 5182,
                            "end": 5183
                          },
                          "start": 5182,
                          "end": 5185
                        }
                      ],
                      "start": 5181,
                      "end": 5186
                    },
                    "start": 5174,
                    "end": 5186
                  },
                  "start": 5172,
                  "end": 5186
                },
                "body": null,
                "expression": false,
                "start": 5054,
                "end": 5187
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5044,
              "end": 5187
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5199,
                "end": 5202
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5203,
                        "end": 5204
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5203,
                      "end": 5204
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5206,
                        "end": 5207
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5206,
                      "end": 5207
                    }
                  ],
                  "start": 5202,
                  "end": 5208
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5221,
                          "end": 5228
                        },
                        "typeArguments": null,
                        "start": 5214,
                        "end": 5228
                      },
                      "start": 5212,
                      "end": 5228
                    },
                    "start": 5209,
                    "end": 5228
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5238,
                              "end": 5245
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5246,
                              "end": 5254
                            },
                            "start": 5238,
                            "end": 5254
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5255,
                                  "end": 5256
                                },
                                "typeArguments": null,
                                "start": 5255,
                                "end": 5256
                              }
                            ],
                            "start": 5254,
                            "end": 5257
                          },
                          "start": 5238,
                          "end": 5257
                        },
                        "start": 5238,
                        "end": 5259
                      },
                      "start": 5236,
                      "end": 5259
                    },
                    "start": 5230,
                    "end": 5259
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5276,
                                  "end": 5277
                                },
                                "typeArguments": null,
                                "start": 5276,
                                "end": 5277
                              },
                              "start": 5274,
                              "end": 5277
                            },
                            "start": 5270,
                            "end": 5277
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5286,
                                "end": 5292
                              },
                              "start": 5284,
                              "end": 5292
                            },
                            "start": 5279,
                            "end": 5292
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5307,
                                "end": 5313
                              },
                              "start": 5305,
                              "end": 5313
                            },
                            "start": 5294,
                            "end": 5313
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5318,
                                "end": 5325
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5326,
                                "end": 5334
                              },
                              "start": 5318,
                              "end": 5334
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
                                    "start": 5335,
                                    "end": 5336
                                  },
                                  "typeArguments": null,
                                  "start": 5335,
                                  "end": 5336
                                }
                              ],
                              "start": 5334,
                              "end": 5337
                            },
                            "start": 5318,
                            "end": 5337
                          },
                          "start": 5315,
                          "end": 5337
                        },
                        "start": 5269,
                        "end": 5337
                      },
                      "start": 5267,
                      "end": 5337
                    },
                    "start": 5261,
                    "end": 5337
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
                      "start": 5340,
                      "end": 5347
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5348,
                              "end": 5349
                            },
                            "typeArguments": null,
                            "start": 5348,
                            "end": 5349
                          },
                          "start": 5348,
                          "end": 5351
                        }
                      ],
                      "start": 5347,
                      "end": 5352
                    },
                    "start": 5340,
                    "end": 5352
                  },
                  "start": 5338,
                  "end": 5352
                },
                "body": null,
                "expression": false,
                "start": 5202,
                "end": 5353
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5192,
              "end": 5353
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5365,
                "end": 5368
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5369,
                        "end": 5370
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5369,
                      "end": 5370
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5372,
                        "end": 5373
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5372,
                      "end": 5373
                    }
                  ],
                  "start": 5368,
                  "end": 5374
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5387,
                          "end": 5394
                        },
                        "typeArguments": null,
                        "start": 5380,
                        "end": 5394
                      },
                      "start": 5378,
                      "end": 5394
                    },
                    "start": 5375,
                    "end": 5394
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5404,
                              "end": 5411
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5412,
                              "end": 5420
                            },
                            "start": 5404,
                            "end": 5420
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5421,
                                  "end": 5422
                                },
                                "typeArguments": null,
                                "start": 5421,
                                "end": 5422
                              }
                            ],
                            "start": 5420,
                            "end": 5423
                          },
                          "start": 5404,
                          "end": 5423
                        },
                        "start": 5404,
                        "end": 5425
                      },
                      "start": 5402,
                      "end": 5425
                    },
                    "start": 5396,
                    "end": 5425
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5442,
                                  "end": 5443
                                },
                                "typeArguments": null,
                                "start": 5442,
                                "end": 5443
                              },
                              "start": 5440,
                              "end": 5443
                            },
                            "start": 5436,
                            "end": 5443
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5452,
                                "end": 5458
                              },
                              "start": 5450,
                              "end": 5458
                            },
                            "start": 5445,
                            "end": 5458
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5473,
                                "end": 5479
                              },
                              "start": 5471,
                              "end": 5479
                            },
                            "start": 5460,
                            "end": 5479
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
                              "start": 5484,
                              "end": 5485
                            },
                            "typeArguments": null,
                            "start": 5484,
                            "end": 5485
                          },
                          "start": 5481,
                          "end": 5485
                        },
                        "start": 5435,
                        "end": 5485
                      },
                      "start": 5433,
                      "end": 5485
                    },
                    "start": 5427,
                    "end": 5485
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
                      "start": 5488,
                      "end": 5495
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5496,
                              "end": 5497
                            },
                            "typeArguments": null,
                            "start": 5496,
                            "end": 5497
                          },
                          "start": 5496,
                          "end": 5499
                        }
                      ],
                      "start": 5495,
                      "end": 5500
                    },
                    "start": 5488,
                    "end": 5500
                  },
                  "start": 5486,
                  "end": 5500
                },
                "body": null,
                "expression": false,
                "start": 5368,
                "end": 5501
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5358,
              "end": 5501
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5513,
                "end": 5516
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5517,
                        "end": 5518
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5517,
                      "end": 5518
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5520,
                        "end": 5521
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5520,
                      "end": 5521
                    }
                  ],
                  "start": 5516,
                  "end": 5522
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5535,
                          "end": 5542
                        },
                        "typeArguments": null,
                        "start": 5528,
                        "end": 5542
                      },
                      "start": 5526,
                      "end": 5542
                    },
                    "start": 5523,
                    "end": 5542
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5552,
                            "end": 5553
                          },
                          "typeArguments": null,
                          "start": 5552,
                          "end": 5553
                        },
                        "start": 5552,
                        "end": 5555
                      },
                      "start": 5550,
                      "end": 5555
                    },
                    "start": 5544,
                    "end": 5555
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5572,
                                  "end": 5573
                                },
                                "typeArguments": null,
                                "start": 5572,
                                "end": 5573
                              },
                              "start": 5570,
                              "end": 5573
                            },
                            "start": 5566,
                            "end": 5573
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5582,
                                "end": 5588
                              },
                              "start": 5580,
                              "end": 5588
                            },
                            "start": 5575,
                            "end": 5588
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5603,
                                "end": 5609
                              },
                              "start": 5601,
                              "end": 5609
                            },
                            "start": 5590,
                            "end": 5609
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5614,
                                "end": 5621
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5622,
                                "end": 5630
                              },
                              "start": 5614,
                              "end": 5630
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
                                    "start": 5631,
                                    "end": 5632
                                  },
                                  "typeArguments": null,
                                  "start": 5631,
                                  "end": 5632
                                }
                              ],
                              "start": 5630,
                              "end": 5633
                            },
                            "start": 5614,
                            "end": 5633
                          },
                          "start": 5611,
                          "end": 5633
                        },
                        "start": 5565,
                        "end": 5633
                      },
                      "start": 5563,
                      "end": 5633
                    },
                    "start": 5557,
                    "end": 5633
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
                      "start": 5636,
                      "end": 5643
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5644,
                              "end": 5645
                            },
                            "typeArguments": null,
                            "start": 5644,
                            "end": 5645
                          },
                          "start": 5644,
                          "end": 5647
                        }
                      ],
                      "start": 5643,
                      "end": 5648
                    },
                    "start": 5636,
                    "end": 5648
                  },
                  "start": 5634,
                  "end": 5648
                },
                "body": null,
                "expression": false,
                "start": 5516,
                "end": 5649
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5506,
              "end": 5649
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5661,
                "end": 5664
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5665,
                        "end": 5666
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5665,
                      "end": 5666
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5668,
                        "end": 5669
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5668,
                      "end": 5669
                    }
                  ],
                  "start": 5664,
                  "end": 5670
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5683,
                          "end": 5690
                        },
                        "typeArguments": null,
                        "start": 5676,
                        "end": 5690
                      },
                      "start": 5674,
                      "end": 5690
                    },
                    "start": 5671,
                    "end": 5690
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5700,
                            "end": 5701
                          },
                          "typeArguments": null,
                          "start": 5700,
                          "end": 5701
                        },
                        "start": 5700,
                        "end": 5703
                      },
                      "start": 5698,
                      "end": 5703
                    },
                    "start": 5692,
                    "end": 5703
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5720,
                                  "end": 5721
                                },
                                "typeArguments": null,
                                "start": 5720,
                                "end": 5721
                              },
                              "start": 5718,
                              "end": 5721
                            },
                            "start": 5714,
                            "end": 5721
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5730,
                                "end": 5736
                              },
                              "start": 5728,
                              "end": 5736
                            },
                            "start": 5723,
                            "end": 5736
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5751,
                                "end": 5757
                              },
                              "start": 5749,
                              "end": 5757
                            },
                            "start": 5738,
                            "end": 5757
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
                              "start": 5762,
                              "end": 5763
                            },
                            "typeArguments": null,
                            "start": 5762,
                            "end": 5763
                          },
                          "start": 5759,
                          "end": 5763
                        },
                        "start": 5713,
                        "end": 5763
                      },
                      "start": 5711,
                      "end": 5763
                    },
                    "start": 5705,
                    "end": 5763
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
                      "start": 5766,
                      "end": 5773
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5774,
                              "end": 5775
                            },
                            "typeArguments": null,
                            "start": 5774,
                            "end": 5775
                          },
                          "start": 5774,
                          "end": 5777
                        }
                      ],
                      "start": 5773,
                      "end": 5778
                    },
                    "start": 5766,
                    "end": 5778
                  },
                  "start": 5764,
                  "end": 5778
                },
                "body": null,
                "expression": false,
                "start": 5664,
                "end": 5779
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5654,
              "end": 5779
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 5792,
                "end": 5798
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5799,
                        "end": 5800
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5799,
                      "end": 5800
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5802,
                        "end": 5803
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5802,
                      "end": 5803
                    }
                  ],
                  "start": 5798,
                  "end": 5804
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5817,
                          "end": 5824
                        },
                        "typeArguments": null,
                        "start": 5810,
                        "end": 5824
                      },
                      "start": 5808,
                      "end": 5824
                    },
                    "start": 5805,
                    "end": 5824
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5834,
                            "end": 5841
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5842,
                            "end": 5850
                          },
                          "start": 5834,
                          "end": 5850
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5851,
                                    "end": 5858
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5859,
                                    "end": 5867
                                  },
                                  "start": 5851,
                                  "end": 5867
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5868,
                                        "end": 5869
                                      },
                                      "typeArguments": null,
                                      "start": 5868,
                                      "end": 5869
                                    }
                                  ],
                                  "start": 5867,
                                  "end": 5870
                                },
                                "start": 5851,
                                "end": 5870
                              },
                              "start": 5851,
                              "end": 5872
                            }
                          ],
                          "start": 5850,
                          "end": 5873
                        },
                        "start": 5834,
                        "end": 5873
                      },
                      "start": 5832,
                      "end": 5873
                    },
                    "start": 5826,
                    "end": 5873
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 5892,
                                  "end": 5893
                                },
                                "typeArguments": null,
                                "start": 5892,
                                "end": 5893
                              },
                              "start": 5890,
                              "end": 5893
                            },
                            "start": 5885,
                            "end": 5893
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5904,
                                  "end": 5905
                                },
                                "typeArguments": null,
                                "start": 5904,
                                "end": 5905
                              },
                              "start": 5902,
                              "end": 5905
                            },
                            "start": 5895,
                            "end": 5905
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5914,
                                "end": 5920
                              },
                              "start": 5912,
                              "end": 5920
                            },
                            "start": 5907,
                            "end": 5920
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5935,
                                "end": 5941
                              },
                              "start": 5933,
                              "end": 5941
                            },
                            "start": 5922,
                            "end": 5941
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5946,
                                "end": 5953
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5954,
                                "end": 5962
                              },
                              "start": 5946,
                              "end": 5962
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
                                    "start": 5963,
                                    "end": 5964
                                  },
                                  "typeArguments": null,
                                  "start": 5963,
                                  "end": 5964
                                }
                              ],
                              "start": 5962,
                              "end": 5965
                            },
                            "start": 5946,
                            "end": 5965
                          },
                          "start": 5943,
                          "end": 5965
                        },
                        "start": 5884,
                        "end": 5965
                      },
                      "start": 5882,
                      "end": 5965
                    },
                    "start": 5875,
                    "end": 5965
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 5982,
                          "end": 5983
                        },
                        "typeArguments": null,
                        "start": 5982,
                        "end": 5983
                      },
                      "start": 5980,
                      "end": 5983
                    },
                    "start": 5967,
                    "end": 5983
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
                      "start": 5986,
                      "end": 5993
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
                            "start": 5994,
                            "end": 5995
                          },
                          "typeArguments": null,
                          "start": 5994,
                          "end": 5995
                        }
                      ],
                      "start": 5993,
                      "end": 5996
                    },
                    "start": 5986,
                    "end": 5996
                  },
                  "start": 5984,
                  "end": 5996
                },
                "body": null,
                "expression": false,
                "start": 5798,
                "end": 5997
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5785,
              "end": 5997
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6009,
                "end": 6015
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6016,
                        "end": 6017
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6016,
                      "end": 6017
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6019,
                        "end": 6020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6019,
                      "end": 6020
                    }
                  ],
                  "start": 6015,
                  "end": 6021
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6034,
                          "end": 6041
                        },
                        "typeArguments": null,
                        "start": 6027,
                        "end": 6041
                      },
                      "start": 6025,
                      "end": 6041
                    },
                    "start": 6022,
                    "end": 6041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6051,
                            "end": 6058
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6059,
                            "end": 6067
                          },
                          "start": 6051,
                          "end": 6067
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6068,
                                    "end": 6075
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6076,
                                    "end": 6084
                                  },
                                  "start": 6068,
                                  "end": 6084
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6085,
                                        "end": 6086
                                      },
                                      "typeArguments": null,
                                      "start": 6085,
                                      "end": 6086
                                    }
                                  ],
                                  "start": 6084,
                                  "end": 6087
                                },
                                "start": 6068,
                                "end": 6087
                              },
                              "start": 6068,
                              "end": 6089
                            }
                          ],
                          "start": 6067,
                          "end": 6090
                        },
                        "start": 6051,
                        "end": 6090
                      },
                      "start": 6049,
                      "end": 6090
                    },
                    "start": 6043,
                    "end": 6090
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 6109,
                                  "end": 6110
                                },
                                "typeArguments": null,
                                "start": 6109,
                                "end": 6110
                              },
                              "start": 6107,
                              "end": 6110
                            },
                            "start": 6102,
                            "end": 6110
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6121,
                                  "end": 6122
                                },
                                "typeArguments": null,
                                "start": 6121,
                                "end": 6122
                              },
                              "start": 6119,
                              "end": 6122
                            },
                            "start": 6112,
                            "end": 6122
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6131,
                                "end": 6137
                              },
                              "start": 6129,
                              "end": 6137
                            },
                            "start": 6124,
                            "end": 6137
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6152,
                                "end": 6158
                              },
                              "start": 6150,
                              "end": 6158
                            },
                            "start": 6139,
                            "end": 6158
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
                              "start": 6163,
                              "end": 6164
                            },
                            "typeArguments": null,
                            "start": 6163,
                            "end": 6164
                          },
                          "start": 6160,
                          "end": 6164
                        },
                        "start": 6101,
                        "end": 6164
                      },
                      "start": 6099,
                      "end": 6164
                    },
                    "start": 6092,
                    "end": 6164
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 6181,
                          "end": 6182
                        },
                        "typeArguments": null,
                        "start": 6181,
                        "end": 6182
                      },
                      "start": 6179,
                      "end": 6182
                    },
                    "start": 6166,
                    "end": 6182
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
                      "start": 6185,
                      "end": 6192
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
                            "start": 6193,
                            "end": 6194
                          },
                          "typeArguments": null,
                          "start": 6193,
                          "end": 6194
                        }
                      ],
                      "start": 6192,
                      "end": 6195
                    },
                    "start": 6185,
                    "end": 6195
                  },
                  "start": 6183,
                  "end": 6195
                },
                "body": null,
                "expression": false,
                "start": 6015,
                "end": 6196
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6002,
              "end": 6196
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6209,
                "end": 6215
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6216,
                        "end": 6217
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6216,
                      "end": 6217
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6219,
                        "end": 6220
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6219,
                      "end": 6220
                    }
                  ],
                  "start": 6215,
                  "end": 6221
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6234,
                          "end": 6241
                        },
                        "typeArguments": null,
                        "start": 6227,
                        "end": 6241
                      },
                      "start": 6225,
                      "end": 6241
                    },
                    "start": 6222,
                    "end": 6241
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6251,
                            "end": 6258
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6259,
                            "end": 6267
                          },
                          "start": 6251,
                          "end": 6267
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6268,
                                  "end": 6269
                                },
                                "typeArguments": null,
                                "start": 6268,
                                "end": 6269
                              },
                              "start": 6268,
                              "end": 6271
                            }
                          ],
                          "start": 6267,
                          "end": 6272
                        },
                        "start": 6251,
                        "end": 6272
                      },
                      "start": 6249,
                      "end": 6272
                    },
                    "start": 6243,
                    "end": 6272
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 6291,
                                  "end": 6292
                                },
                                "typeArguments": null,
                                "start": 6291,
                                "end": 6292
                              },
                              "start": 6289,
                              "end": 6292
                            },
                            "start": 6284,
                            "end": 6292
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6303,
                                  "end": 6304
                                },
                                "typeArguments": null,
                                "start": 6303,
                                "end": 6304
                              },
                              "start": 6301,
                              "end": 6304
                            },
                            "start": 6294,
                            "end": 6304
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6313,
                                "end": 6319
                              },
                              "start": 6311,
                              "end": 6319
                            },
                            "start": 6306,
                            "end": 6319
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6334,
                                "end": 6340
                              },
                              "start": 6332,
                              "end": 6340
                            },
                            "start": 6321,
                            "end": 6340
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6345,
                                "end": 6352
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6353,
                                "end": 6361
                              },
                              "start": 6345,
                              "end": 6361
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
                                    "start": 6362,
                                    "end": 6363
                                  },
                                  "typeArguments": null,
                                  "start": 6362,
                                  "end": 6363
                                }
                              ],
                              "start": 6361,
                              "end": 6364
                            },
                            "start": 6345,
                            "end": 6364
                          },
                          "start": 6342,
                          "end": 6364
                        },
                        "start": 6283,
                        "end": 6364
                      },
                      "start": 6281,
                      "end": 6364
                    },
                    "start": 6274,
                    "end": 6364
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 6381,
                          "end": 6382
                        },
                        "typeArguments": null,
                        "start": 6381,
                        "end": 6382
                      },
                      "start": 6379,
                      "end": 6382
                    },
                    "start": 6366,
                    "end": 6382
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
                      "start": 6385,
                      "end": 6392
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
                            "start": 6393,
                            "end": 6394
                          },
                          "typeArguments": null,
                          "start": 6393,
                          "end": 6394
                        }
                      ],
                      "start": 6392,
                      "end": 6395
                    },
                    "start": 6385,
                    "end": 6395
                  },
                  "start": 6383,
                  "end": 6395
                },
                "body": null,
                "expression": false,
                "start": 6215,
                "end": 6396
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6202,
              "end": 6396
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6408,
                "end": 6414
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6415,
                        "end": 6416
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6415,
                      "end": 6416
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6418,
                        "end": 6419
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6418,
                      "end": 6419
                    }
                  ],
                  "start": 6414,
                  "end": 6420
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6433,
                          "end": 6440
                        },
                        "typeArguments": null,
                        "start": 6426,
                        "end": 6440
                      },
                      "start": 6424,
                      "end": 6440
                    },
                    "start": 6421,
                    "end": 6440
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6450,
                            "end": 6457
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6458,
                            "end": 6466
                          },
                          "start": 6450,
                          "end": 6466
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6467,
                                  "end": 6468
                                },
                                "typeArguments": null,
                                "start": 6467,
                                "end": 6468
                              },
                              "start": 6467,
                              "end": 6470
                            }
                          ],
                          "start": 6466,
                          "end": 6471
                        },
                        "start": 6450,
                        "end": 6471
                      },
                      "start": 6448,
                      "end": 6471
                    },
                    "start": 6442,
                    "end": 6471
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 6490,
                                  "end": 6491
                                },
                                "typeArguments": null,
                                "start": 6490,
                                "end": 6491
                              },
                              "start": 6488,
                              "end": 6491
                            },
                            "start": 6483,
                            "end": 6491
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6502,
                                  "end": 6503
                                },
                                "typeArguments": null,
                                "start": 6502,
                                "end": 6503
                              },
                              "start": 6500,
                              "end": 6503
                            },
                            "start": 6493,
                            "end": 6503
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6512,
                                "end": 6518
                              },
                              "start": 6510,
                              "end": 6518
                            },
                            "start": 6505,
                            "end": 6518
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6533,
                                "end": 6539
                              },
                              "start": 6531,
                              "end": 6539
                            },
                            "start": 6520,
                            "end": 6539
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
                              "start": 6544,
                              "end": 6545
                            },
                            "typeArguments": null,
                            "start": 6544,
                            "end": 6545
                          },
                          "start": 6541,
                          "end": 6545
                        },
                        "start": 6482,
                        "end": 6545
                      },
                      "start": 6480,
                      "end": 6545
                    },
                    "start": 6473,
                    "end": 6545
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 6562,
                          "end": 6563
                        },
                        "typeArguments": null,
                        "start": 6562,
                        "end": 6563
                      },
                      "start": 6560,
                      "end": 6563
                    },
                    "start": 6547,
                    "end": 6563
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
                      "start": 6566,
                      "end": 6573
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
                            "start": 6574,
                            "end": 6575
                          },
                          "typeArguments": null,
                          "start": 6574,
                          "end": 6575
                        }
                      ],
                      "start": 6573,
                      "end": 6576
                    },
                    "start": 6566,
                    "end": 6576
                  },
                  "start": 6564,
                  "end": 6576
                },
                "body": null,
                "expression": false,
                "start": 6414,
                "end": 6577
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6401,
              "end": 6577
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6590,
                "end": 6596
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6597,
                        "end": 6598
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6597,
                      "end": 6598
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6600,
                        "end": 6601
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6600,
                      "end": 6601
                    }
                  ],
                  "start": 6596,
                  "end": 6602
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6615,
                          "end": 6622
                        },
                        "typeArguments": null,
                        "start": 6608,
                        "end": 6622
                      },
                      "start": 6606,
                      "end": 6622
                    },
                    "start": 6603,
                    "end": 6622
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6632,
                              "end": 6639
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6640,
                              "end": 6648
                            },
                            "start": 6632,
                            "end": 6648
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6649,
                                  "end": 6650
                                },
                                "typeArguments": null,
                                "start": 6649,
                                "end": 6650
                              }
                            ],
                            "start": 6648,
                            "end": 6651
                          },
                          "start": 6632,
                          "end": 6651
                        },
                        "start": 6632,
                        "end": 6653
                      },
                      "start": 6630,
                      "end": 6653
                    },
                    "start": 6624,
                    "end": 6653
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 6672,
                                  "end": 6673
                                },
                                "typeArguments": null,
                                "start": 6672,
                                "end": 6673
                              },
                              "start": 6670,
                              "end": 6673
                            },
                            "start": 6665,
                            "end": 6673
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6684,
                                  "end": 6685
                                },
                                "typeArguments": null,
                                "start": 6684,
                                "end": 6685
                              },
                              "start": 6682,
                              "end": 6685
                            },
                            "start": 6675,
                            "end": 6685
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6694,
                                "end": 6700
                              },
                              "start": 6692,
                              "end": 6700
                            },
                            "start": 6687,
                            "end": 6700
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6715,
                                "end": 6721
                              },
                              "start": 6713,
                              "end": 6721
                            },
                            "start": 6702,
                            "end": 6721
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6726,
                                "end": 6733
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6734,
                                "end": 6742
                              },
                              "start": 6726,
                              "end": 6742
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
                                    "start": 6743,
                                    "end": 6744
                                  },
                                  "typeArguments": null,
                                  "start": 6743,
                                  "end": 6744
                                }
                              ],
                              "start": 6742,
                              "end": 6745
                            },
                            "start": 6726,
                            "end": 6745
                          },
                          "start": 6723,
                          "end": 6745
                        },
                        "start": 6664,
                        "end": 6745
                      },
                      "start": 6662,
                      "end": 6745
                    },
                    "start": 6655,
                    "end": 6745
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 6762,
                          "end": 6763
                        },
                        "typeArguments": null,
                        "start": 6762,
                        "end": 6763
                      },
                      "start": 6760,
                      "end": 6763
                    },
                    "start": 6747,
                    "end": 6763
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
                      "start": 6766,
                      "end": 6773
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
                            "start": 6774,
                            "end": 6775
                          },
                          "typeArguments": null,
                          "start": 6774,
                          "end": 6775
                        }
                      ],
                      "start": 6773,
                      "end": 6776
                    },
                    "start": 6766,
                    "end": 6776
                  },
                  "start": 6764,
                  "end": 6776
                },
                "body": null,
                "expression": false,
                "start": 6596,
                "end": 6777
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6583,
              "end": 6777
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6789,
                "end": 6795
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6796,
                        "end": 6797
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6796,
                      "end": 6797
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6799,
                        "end": 6800
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6799,
                      "end": 6800
                    }
                  ],
                  "start": 6795,
                  "end": 6801
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6814,
                          "end": 6821
                        },
                        "typeArguments": null,
                        "start": 6807,
                        "end": 6821
                      },
                      "start": 6805,
                      "end": 6821
                    },
                    "start": 6802,
                    "end": 6821
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6831,
                              "end": 6838
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6839,
                              "end": 6847
                            },
                            "start": 6831,
                            "end": 6847
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6848,
                                  "end": 6849
                                },
                                "typeArguments": null,
                                "start": 6848,
                                "end": 6849
                              }
                            ],
                            "start": 6847,
                            "end": 6850
                          },
                          "start": 6831,
                          "end": 6850
                        },
                        "start": 6831,
                        "end": 6852
                      },
                      "start": 6829,
                      "end": 6852
                    },
                    "start": 6823,
                    "end": 6852
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 6871,
                                  "end": 6872
                                },
                                "typeArguments": null,
                                "start": 6871,
                                "end": 6872
                              },
                              "start": 6869,
                              "end": 6872
                            },
                            "start": 6864,
                            "end": 6872
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6883,
                                  "end": 6884
                                },
                                "typeArguments": null,
                                "start": 6883,
                                "end": 6884
                              },
                              "start": 6881,
                              "end": 6884
                            },
                            "start": 6874,
                            "end": 6884
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6893,
                                "end": 6899
                              },
                              "start": 6891,
                              "end": 6899
                            },
                            "start": 6886,
                            "end": 6899
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6914,
                                "end": 6920
                              },
                              "start": 6912,
                              "end": 6920
                            },
                            "start": 6901,
                            "end": 6920
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
                              "start": 6925,
                              "end": 6926
                            },
                            "typeArguments": null,
                            "start": 6925,
                            "end": 6926
                          },
                          "start": 6922,
                          "end": 6926
                        },
                        "start": 6863,
                        "end": 6926
                      },
                      "start": 6861,
                      "end": 6926
                    },
                    "start": 6854,
                    "end": 6926
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 6943,
                          "end": 6944
                        },
                        "typeArguments": null,
                        "start": 6943,
                        "end": 6944
                      },
                      "start": 6941,
                      "end": 6944
                    },
                    "start": 6928,
                    "end": 6944
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
                      "start": 6947,
                      "end": 6954
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
                            "start": 6955,
                            "end": 6956
                          },
                          "typeArguments": null,
                          "start": 6955,
                          "end": 6956
                        }
                      ],
                      "start": 6954,
                      "end": 6957
                    },
                    "start": 6947,
                    "end": 6957
                  },
                  "start": 6945,
                  "end": 6957
                },
                "body": null,
                "expression": false,
                "start": 6795,
                "end": 6958
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6782,
              "end": 6958
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6971,
                "end": 6977
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6978,
                        "end": 6979
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6978,
                      "end": 6979
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6981,
                        "end": 6982
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6981,
                      "end": 6982
                    }
                  ],
                  "start": 6977,
                  "end": 6983
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6996,
                          "end": 7003
                        },
                        "typeArguments": null,
                        "start": 6989,
                        "end": 7003
                      },
                      "start": 6987,
                      "end": 7003
                    },
                    "start": 6984,
                    "end": 7003
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7013,
                            "end": 7014
                          },
                          "typeArguments": null,
                          "start": 7013,
                          "end": 7014
                        },
                        "start": 7013,
                        "end": 7016
                      },
                      "start": 7011,
                      "end": 7016
                    },
                    "start": 7005,
                    "end": 7016
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 7035,
                                  "end": 7036
                                },
                                "typeArguments": null,
                                "start": 7035,
                                "end": 7036
                              },
                              "start": 7033,
                              "end": 7036
                            },
                            "start": 7028,
                            "end": 7036
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7047,
                                  "end": 7048
                                },
                                "typeArguments": null,
                                "start": 7047,
                                "end": 7048
                              },
                              "start": 7045,
                              "end": 7048
                            },
                            "start": 7038,
                            "end": 7048
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7057,
                                "end": 7063
                              },
                              "start": 7055,
                              "end": 7063
                            },
                            "start": 7050,
                            "end": 7063
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7078,
                                "end": 7084
                              },
                              "start": 7076,
                              "end": 7084
                            },
                            "start": 7065,
                            "end": 7084
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7089,
                                "end": 7096
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7097,
                                "end": 7105
                              },
                              "start": 7089,
                              "end": 7105
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
                                    "start": 7106,
                                    "end": 7107
                                  },
                                  "typeArguments": null,
                                  "start": 7106,
                                  "end": 7107
                                }
                              ],
                              "start": 7105,
                              "end": 7108
                            },
                            "start": 7089,
                            "end": 7108
                          },
                          "start": 7086,
                          "end": 7108
                        },
                        "start": 7027,
                        "end": 7108
                      },
                      "start": 7025,
                      "end": 7108
                    },
                    "start": 7018,
                    "end": 7108
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 7125,
                          "end": 7126
                        },
                        "typeArguments": null,
                        "start": 7125,
                        "end": 7126
                      },
                      "start": 7123,
                      "end": 7126
                    },
                    "start": 7110,
                    "end": 7126
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
                      "start": 7129,
                      "end": 7136
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
                            "start": 7137,
                            "end": 7138
                          },
                          "typeArguments": null,
                          "start": 7137,
                          "end": 7138
                        }
                      ],
                      "start": 7136,
                      "end": 7139
                    },
                    "start": 7129,
                    "end": 7139
                  },
                  "start": 7127,
                  "end": 7139
                },
                "body": null,
                "expression": false,
                "start": 6977,
                "end": 7140
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6964,
              "end": 7140
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 7152,
                "end": 7158
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7159,
                        "end": 7160
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7159,
                      "end": 7160
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7162,
                        "end": 7163
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7162,
                      "end": 7163
                    }
                  ],
                  "start": 7158,
                  "end": 7164
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7177,
                          "end": 7184
                        },
                        "typeArguments": null,
                        "start": 7170,
                        "end": 7184
                      },
                      "start": 7168,
                      "end": 7184
                    },
                    "start": 7165,
                    "end": 7184
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7194,
                            "end": 7195
                          },
                          "typeArguments": null,
                          "start": 7194,
                          "end": 7195
                        },
                        "start": 7194,
                        "end": 7197
                      },
                      "start": 7192,
                      "end": 7197
                    },
                    "start": 7186,
                    "end": 7197
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
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
                                  "start": 7216,
                                  "end": 7217
                                },
                                "typeArguments": null,
                                "start": 7216,
                                "end": 7217
                              },
                              "start": 7214,
                              "end": 7217
                            },
                            "start": 7209,
                            "end": 7217
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7228,
                                  "end": 7229
                                },
                                "typeArguments": null,
                                "start": 7228,
                                "end": 7229
                              },
                              "start": 7226,
                              "end": 7229
                            },
                            "start": 7219,
                            "end": 7229
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7238,
                                "end": 7244
                              },
                              "start": 7236,
                              "end": 7244
                            },
                            "start": 7231,
                            "end": 7244
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7259,
                                "end": 7265
                              },
                              "start": 7257,
                              "end": 7265
                            },
                            "start": 7246,
                            "end": 7265
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
                              "start": 7270,
                              "end": 7271
                            },
                            "typeArguments": null,
                            "start": 7270,
                            "end": 7271
                          },
                          "start": 7267,
                          "end": 7271
                        },
                        "start": 7208,
                        "end": 7271
                      },
                      "start": 7206,
                      "end": 7271
                    },
                    "start": 7199,
                    "end": 7271
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
                    "optional": true,
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
                          "start": 7288,
                          "end": 7289
                        },
                        "typeArguments": null,
                        "start": 7288,
                        "end": 7289
                      },
                      "start": 7286,
                      "end": 7289
                    },
                    "start": 7273,
                    "end": 7289
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
                      "start": 7292,
                      "end": 7299
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
                            "start": 7300,
                            "end": 7301
                          },
                          "typeArguments": null,
                          "start": 7300,
                          "end": 7301
                        }
                      ],
                      "start": 7299,
                      "end": 7302
                    },
                    "start": 7292,
                    "end": 7302
                  },
                  "start": 7290,
                  "end": 7302
                },
                "body": null,
                "expression": false,
                "start": 7158,
                "end": 7303
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7145,
              "end": 7303
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7316,
                "end": 7322
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7323,
                        "end": 7324
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7323,
                      "end": 7324
                    }
                  ],
                  "start": 7322,
                  "end": 7325
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7338,
                          "end": 7345
                        },
                        "typeArguments": null,
                        "start": 7331,
                        "end": 7345
                      },
                      "start": 7329,
                      "end": 7345
                    },
                    "start": 7326,
                    "end": 7345
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7355,
                            "end": 7362
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7363,
                            "end": 7371
                          },
                          "start": 7355,
                          "end": 7371
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7372,
                                    "end": 7379
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7380,
                                    "end": 7388
                                  },
                                  "start": 7372,
                                  "end": 7388
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7389,
                                        "end": 7390
                                      },
                                      "typeArguments": null,
                                      "start": 7389,
                                      "end": 7390
                                    }
                                  ],
                                  "start": 7388,
                                  "end": 7391
                                },
                                "start": 7372,
                                "end": 7391
                              },
                              "start": 7372,
                              "end": 7393
                            }
                          ],
                          "start": 7371,
                          "end": 7394
                        },
                        "start": 7355,
                        "end": 7394
                      },
                      "start": 7353,
                      "end": 7394
                    },
                    "start": 7347,
                    "end": 7394
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7413,
                                  "end": 7414
                                },
                                "typeArguments": null,
                                "start": 7413,
                                "end": 7414
                              },
                              "start": 7411,
                              "end": 7414
                            },
                            "start": 7407,
                            "end": 7414
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7423,
                                "end": 7429
                              },
                              "start": 7421,
                              "end": 7429
                            },
                            "start": 7416,
                            "end": 7429
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7444,
                                "end": 7450
                              },
                              "start": 7442,
                              "end": 7450
                            },
                            "start": 7431,
                            "end": 7450
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7455,
                                "end": 7462
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7463,
                                "end": 7471
                              },
                              "start": 7455,
                              "end": 7471
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7472,
                                  "end": 7479
                                }
                              ],
                              "start": 7471,
                              "end": 7480
                            },
                            "start": 7455,
                            "end": 7480
                          },
                          "start": 7452,
                          "end": 7480
                        },
                        "start": 7406,
                        "end": 7480
                      },
                      "start": 7404,
                      "end": 7480
                    },
                    "start": 7396,
                    "end": 7480
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
                      "start": 7483,
                      "end": 7490
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7491,
                              "end": 7492
                            },
                            "typeArguments": null,
                            "start": 7491,
                            "end": 7492
                          },
                          "start": 7491,
                          "end": 7494
                        }
                      ],
                      "start": 7490,
                      "end": 7495
                    },
                    "start": 7483,
                    "end": 7495
                  },
                  "start": 7481,
                  "end": 7495
                },
                "body": null,
                "expression": false,
                "start": 7322,
                "end": 7496
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7309,
              "end": 7496
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7508,
                "end": 7514
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7515,
                        "end": 7516
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7515,
                      "end": 7516
                    }
                  ],
                  "start": 7514,
                  "end": 7517
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7530,
                          "end": 7537
                        },
                        "typeArguments": null,
                        "start": 7523,
                        "end": 7537
                      },
                      "start": 7521,
                      "end": 7537
                    },
                    "start": 7518,
                    "end": 7537
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7547,
                            "end": 7554
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7555,
                            "end": 7563
                          },
                          "start": 7547,
                          "end": 7563
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7564,
                                    "end": 7571
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7572,
                                    "end": 7580
                                  },
                                  "start": 7564,
                                  "end": 7580
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7581,
                                        "end": 7582
                                      },
                                      "typeArguments": null,
                                      "start": 7581,
                                      "end": 7582
                                    }
                                  ],
                                  "start": 7580,
                                  "end": 7583
                                },
                                "start": 7564,
                                "end": 7583
                              },
                              "start": 7564,
                              "end": 7585
                            }
                          ],
                          "start": 7563,
                          "end": 7586
                        },
                        "start": 7547,
                        "end": 7586
                      },
                      "start": 7545,
                      "end": 7586
                    },
                    "start": 7539,
                    "end": 7586
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7605,
                                  "end": 7606
                                },
                                "typeArguments": null,
                                "start": 7605,
                                "end": 7606
                              },
                              "start": 7603,
                              "end": 7606
                            },
                            "start": 7599,
                            "end": 7606
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7615,
                                "end": 7621
                              },
                              "start": 7613,
                              "end": 7621
                            },
                            "start": 7608,
                            "end": 7621
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7636,
                                "end": 7642
                              },
                              "start": 7634,
                              "end": 7642
                            },
                            "start": 7623,
                            "end": 7642
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7647,
                            "end": 7654
                          },
                          "start": 7644,
                          "end": 7654
                        },
                        "start": 7598,
                        "end": 7654
                      },
                      "start": 7596,
                      "end": 7654
                    },
                    "start": 7588,
                    "end": 7654
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
                      "start": 7657,
                      "end": 7664
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7665,
                              "end": 7666
                            },
                            "typeArguments": null,
                            "start": 7665,
                            "end": 7666
                          },
                          "start": 7665,
                          "end": 7668
                        }
                      ],
                      "start": 7664,
                      "end": 7669
                    },
                    "start": 7657,
                    "end": 7669
                  },
                  "start": 7655,
                  "end": 7669
                },
                "body": null,
                "expression": false,
                "start": 7514,
                "end": 7670
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7501,
              "end": 7670
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7682,
                "end": 7688
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7689,
                        "end": 7690
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7689,
                      "end": 7690
                    }
                  ],
                  "start": 7688,
                  "end": 7691
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7704,
                          "end": 7711
                        },
                        "typeArguments": null,
                        "start": 7697,
                        "end": 7711
                      },
                      "start": 7695,
                      "end": 7711
                    },
                    "start": 7692,
                    "end": 7711
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7721,
                            "end": 7728
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7729,
                            "end": 7737
                          },
                          "start": 7721,
                          "end": 7737
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7738,
                                  "end": 7739
                                },
                                "typeArguments": null,
                                "start": 7738,
                                "end": 7739
                              },
                              "start": 7738,
                              "end": 7741
                            }
                          ],
                          "start": 7737,
                          "end": 7742
                        },
                        "start": 7721,
                        "end": 7742
                      },
                      "start": 7719,
                      "end": 7742
                    },
                    "start": 7713,
                    "end": 7742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7761,
                                  "end": 7762
                                },
                                "typeArguments": null,
                                "start": 7761,
                                "end": 7762
                              },
                              "start": 7759,
                              "end": 7762
                            },
                            "start": 7755,
                            "end": 7762
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7771,
                                "end": 7777
                              },
                              "start": 7769,
                              "end": 7777
                            },
                            "start": 7764,
                            "end": 7777
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7792,
                                "end": 7798
                              },
                              "start": 7790,
                              "end": 7798
                            },
                            "start": 7779,
                            "end": 7798
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7803,
                                "end": 7810
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7811,
                                "end": 7819
                              },
                              "start": 7803,
                              "end": 7819
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7820,
                                  "end": 7827
                                }
                              ],
                              "start": 7819,
                              "end": 7828
                            },
                            "start": 7803,
                            "end": 7828
                          },
                          "start": 7800,
                          "end": 7828
                        },
                        "start": 7754,
                        "end": 7828
                      },
                      "start": 7752,
                      "end": 7828
                    },
                    "start": 7744,
                    "end": 7828
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
                      "start": 7831,
                      "end": 7838
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7839,
                              "end": 7840
                            },
                            "typeArguments": null,
                            "start": 7839,
                            "end": 7840
                          },
                          "start": 7839,
                          "end": 7842
                        }
                      ],
                      "start": 7838,
                      "end": 7843
                    },
                    "start": 7831,
                    "end": 7843
                  },
                  "start": 7829,
                  "end": 7843
                },
                "body": null,
                "expression": false,
                "start": 7688,
                "end": 7844
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7675,
              "end": 7844
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7856,
                "end": 7862
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7863,
                        "end": 7864
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7863,
                      "end": 7864
                    }
                  ],
                  "start": 7862,
                  "end": 7865
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7878,
                          "end": 7885
                        },
                        "typeArguments": null,
                        "start": 7871,
                        "end": 7885
                      },
                      "start": 7869,
                      "end": 7885
                    },
                    "start": 7866,
                    "end": 7885
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7895,
                            "end": 7902
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7903,
                            "end": 7911
                          },
                          "start": 7895,
                          "end": 7911
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7912,
                                  "end": 7913
                                },
                                "typeArguments": null,
                                "start": 7912,
                                "end": 7913
                              },
                              "start": 7912,
                              "end": 7915
                            }
                          ],
                          "start": 7911,
                          "end": 7916
                        },
                        "start": 7895,
                        "end": 7916
                      },
                      "start": 7893,
                      "end": 7916
                    },
                    "start": 7887,
                    "end": 7916
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7935,
                                  "end": 7936
                                },
                                "typeArguments": null,
                                "start": 7935,
                                "end": 7936
                              },
                              "start": 7933,
                              "end": 7936
                            },
                            "start": 7929,
                            "end": 7936
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7945,
                                "end": 7951
                              },
                              "start": 7943,
                              "end": 7951
                            },
                            "start": 7938,
                            "end": 7951
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7966,
                                "end": 7972
                              },
                              "start": 7964,
                              "end": 7972
                            },
                            "start": 7953,
                            "end": 7972
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7977,
                            "end": 7984
                          },
                          "start": 7974,
                          "end": 7984
                        },
                        "start": 7928,
                        "end": 7984
                      },
                      "start": 7926,
                      "end": 7984
                    },
                    "start": 7918,
                    "end": 7984
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
                      "start": 7987,
                      "end": 7994
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7995,
                              "end": 7996
                            },
                            "typeArguments": null,
                            "start": 7995,
                            "end": 7996
                          },
                          "start": 7995,
                          "end": 7998
                        }
                      ],
                      "start": 7994,
                      "end": 7999
                    },
                    "start": 7987,
                    "end": 7999
                  },
                  "start": 7985,
                  "end": 7999
                },
                "body": null,
                "expression": false,
                "start": 7862,
                "end": 8000
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7849,
              "end": 8000
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8012,
                "end": 8018
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8019,
                        "end": 8020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8019,
                      "end": 8020
                    }
                  ],
                  "start": 8018,
                  "end": 8021
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8034,
                          "end": 8041
                        },
                        "typeArguments": null,
                        "start": 8027,
                        "end": 8041
                      },
                      "start": 8025,
                      "end": 8041
                    },
                    "start": 8022,
                    "end": 8041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8051,
                              "end": 8058
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8059,
                              "end": 8067
                            },
                            "start": 8051,
                            "end": 8067
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8068,
                                  "end": 8069
                                },
                                "typeArguments": null,
                                "start": 8068,
                                "end": 8069
                              }
                            ],
                            "start": 8067,
                            "end": 8070
                          },
                          "start": 8051,
                          "end": 8070
                        },
                        "start": 8051,
                        "end": 8072
                      },
                      "start": 8049,
                      "end": 8072
                    },
                    "start": 8043,
                    "end": 8072
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8091,
                                  "end": 8092
                                },
                                "typeArguments": null,
                                "start": 8091,
                                "end": 8092
                              },
                              "start": 8089,
                              "end": 8092
                            },
                            "start": 8085,
                            "end": 8092
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8101,
                                "end": 8107
                              },
                              "start": 8099,
                              "end": 8107
                            },
                            "start": 8094,
                            "end": 8107
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8122,
                                "end": 8128
                              },
                              "start": 8120,
                              "end": 8128
                            },
                            "start": 8109,
                            "end": 8128
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8133,
                                "end": 8140
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8141,
                                "end": 8149
                              },
                              "start": 8133,
                              "end": 8149
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8150,
                                  "end": 8157
                                }
                              ],
                              "start": 8149,
                              "end": 8158
                            },
                            "start": 8133,
                            "end": 8158
                          },
                          "start": 8130,
                          "end": 8158
                        },
                        "start": 8084,
                        "end": 8158
                      },
                      "start": 8082,
                      "end": 8158
                    },
                    "start": 8074,
                    "end": 8158
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
                      "start": 8161,
                      "end": 8168
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8169,
                              "end": 8170
                            },
                            "typeArguments": null,
                            "start": 8169,
                            "end": 8170
                          },
                          "start": 8169,
                          "end": 8172
                        }
                      ],
                      "start": 8168,
                      "end": 8173
                    },
                    "start": 8161,
                    "end": 8173
                  },
                  "start": 8159,
                  "end": 8173
                },
                "body": null,
                "expression": false,
                "start": 8018,
                "end": 8174
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8005,
              "end": 8174
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8186,
                "end": 8192
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8193,
                        "end": 8194
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8193,
                      "end": 8194
                    }
                  ],
                  "start": 8192,
                  "end": 8195
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8208,
                          "end": 8215
                        },
                        "typeArguments": null,
                        "start": 8201,
                        "end": 8215
                      },
                      "start": 8199,
                      "end": 8215
                    },
                    "start": 8196,
                    "end": 8215
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8225,
                              "end": 8232
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8233,
                              "end": 8241
                            },
                            "start": 8225,
                            "end": 8241
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8242,
                                  "end": 8243
                                },
                                "typeArguments": null,
                                "start": 8242,
                                "end": 8243
                              }
                            ],
                            "start": 8241,
                            "end": 8244
                          },
                          "start": 8225,
                          "end": 8244
                        },
                        "start": 8225,
                        "end": 8246
                      },
                      "start": 8223,
                      "end": 8246
                    },
                    "start": 8217,
                    "end": 8246
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8265,
                                  "end": 8266
                                },
                                "typeArguments": null,
                                "start": 8265,
                                "end": 8266
                              },
                              "start": 8263,
                              "end": 8266
                            },
                            "start": 8259,
                            "end": 8266
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8275,
                                "end": 8281
                              },
                              "start": 8273,
                              "end": 8281
                            },
                            "start": 8268,
                            "end": 8281
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8296,
                                "end": 8302
                              },
                              "start": 8294,
                              "end": 8302
                            },
                            "start": 8283,
                            "end": 8302
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8307,
                            "end": 8314
                          },
                          "start": 8304,
                          "end": 8314
                        },
                        "start": 8258,
                        "end": 8314
                      },
                      "start": 8256,
                      "end": 8314
                    },
                    "start": 8248,
                    "end": 8314
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
                      "start": 8317,
                      "end": 8324
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8325,
                              "end": 8326
                            },
                            "typeArguments": null,
                            "start": 8325,
                            "end": 8326
                          },
                          "start": 8325,
                          "end": 8328
                        }
                      ],
                      "start": 8324,
                      "end": 8329
                    },
                    "start": 8317,
                    "end": 8329
                  },
                  "start": 8315,
                  "end": 8329
                },
                "body": null,
                "expression": false,
                "start": 8192,
                "end": 8330
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8179,
              "end": 8330
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8342,
                "end": 8348
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8349,
                        "end": 8350
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8349,
                      "end": 8350
                    }
                  ],
                  "start": 8348,
                  "end": 8351
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8364,
                          "end": 8371
                        },
                        "typeArguments": null,
                        "start": 8357,
                        "end": 8371
                      },
                      "start": 8355,
                      "end": 8371
                    },
                    "start": 8352,
                    "end": 8371
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8381,
                            "end": 8382
                          },
                          "typeArguments": null,
                          "start": 8381,
                          "end": 8382
                        },
                        "start": 8381,
                        "end": 8384
                      },
                      "start": 8379,
                      "end": 8384
                    },
                    "start": 8373,
                    "end": 8384
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8403,
                                  "end": 8404
                                },
                                "typeArguments": null,
                                "start": 8403,
                                "end": 8404
                              },
                              "start": 8401,
                              "end": 8404
                            },
                            "start": 8397,
                            "end": 8404
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8413,
                                "end": 8419
                              },
                              "start": 8411,
                              "end": 8419
                            },
                            "start": 8406,
                            "end": 8419
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8434,
                                "end": 8440
                              },
                              "start": 8432,
                              "end": 8440
                            },
                            "start": 8421,
                            "end": 8440
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8445,
                                "end": 8452
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8453,
                                "end": 8461
                              },
                              "start": 8445,
                              "end": 8461
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8462,
                                  "end": 8469
                                }
                              ],
                              "start": 8461,
                              "end": 8470
                            },
                            "start": 8445,
                            "end": 8470
                          },
                          "start": 8442,
                          "end": 8470
                        },
                        "start": 8396,
                        "end": 8470
                      },
                      "start": 8394,
                      "end": 8470
                    },
                    "start": 8386,
                    "end": 8470
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
                      "start": 8473,
                      "end": 8480
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8481,
                              "end": 8482
                            },
                            "typeArguments": null,
                            "start": 8481,
                            "end": 8482
                          },
                          "start": 8481,
                          "end": 8484
                        }
                      ],
                      "start": 8480,
                      "end": 8485
                    },
                    "start": 8473,
                    "end": 8485
                  },
                  "start": 8471,
                  "end": 8485
                },
                "body": null,
                "expression": false,
                "start": 8348,
                "end": 8486
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8335,
              "end": 8486
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8498,
                "end": 8504
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8505,
                        "end": 8506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8505,
                      "end": 8506
                    }
                  ],
                  "start": 8504,
                  "end": 8507
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8520,
                          "end": 8527
                        },
                        "typeArguments": null,
                        "start": 8513,
                        "end": 8527
                      },
                      "start": 8511,
                      "end": 8527
                    },
                    "start": 8508,
                    "end": 8527
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8537,
                            "end": 8538
                          },
                          "typeArguments": null,
                          "start": 8537,
                          "end": 8538
                        },
                        "start": 8537,
                        "end": 8540
                      },
                      "start": 8535,
                      "end": 8540
                    },
                    "start": 8529,
                    "end": 8540
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8559,
                                  "end": 8560
                                },
                                "typeArguments": null,
                                "start": 8559,
                                "end": 8560
                              },
                              "start": 8557,
                              "end": 8560
                            },
                            "start": 8553,
                            "end": 8560
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8569,
                                "end": 8575
                              },
                              "start": 8567,
                              "end": 8575
                            },
                            "start": 8562,
                            "end": 8575
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8590,
                                "end": 8596
                              },
                              "start": 8588,
                              "end": 8596
                            },
                            "start": 8577,
                            "end": 8596
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8601,
                            "end": 8608
                          },
                          "start": 8598,
                          "end": 8608
                        },
                        "start": 8552,
                        "end": 8608
                      },
                      "start": 8550,
                      "end": 8608
                    },
                    "start": 8542,
                    "end": 8608
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
                      "start": 8611,
                      "end": 8618
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8619,
                              "end": 8620
                            },
                            "typeArguments": null,
                            "start": 8619,
                            "end": 8620
                          },
                          "start": 8619,
                          "end": 8622
                        }
                      ],
                      "start": 8618,
                      "end": 8623
                    },
                    "start": 8611,
                    "end": 8623
                  },
                  "start": 8609,
                  "end": 8623
                },
                "body": null,
                "expression": false,
                "start": 8504,
                "end": 8624
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8491,
              "end": 8624
            }
          ],
          "start": 294,
          "end": 8626
        },
        "abstract": false,
        "declare": true,
        "start": 238,
        "end": 8626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 231,
      "end": 8626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 8653,
          "end": 8660
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8681,
                  "end": 8689
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8690,
                        "end": 8691
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8690,
                      "end": 8691
                    }
                  ],
                  "start": 8689,
                  "end": 8692
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
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8697,
                        "end": 8701
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 8702,
                              "end": 8703
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8702,
                            "end": 8703
                          }
                        ],
                        "start": 8701,
                        "end": 8704
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8726,
                                        "end": 8727
                                      },
                                      "typeArguments": null,
                                      "start": 8726,
                                      "end": 8727
                                    },
                                    "start": 8724,
                                    "end": 8727
                                  },
                                  "start": 8719,
                                  "end": 8727
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8732,
                                    "end": 8740
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
                                          "start": 8741,
                                          "end": 8742
                                        },
                                        "typeArguments": null,
                                        "start": 8741,
                                        "end": 8742
                                      }
                                    ],
                                    "start": 8740,
                                    "end": 8743
                                  },
                                  "start": 8732,
                                  "end": 8743
                                },
                                "start": 8729,
                                "end": 8743
                              },
                              "start": 8718,
                              "end": 8743
                            },
                            "start": 8716,
                            "end": 8743
                          },
                          "start": 8705,
                          "end": 8743
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
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
                                      "type": "TSAnyKeyword",
                                      "start": 8765,
                                      "end": 8768
                                    },
                                    "start": 8763,
                                    "end": 8768
                                  },
                                  "start": 8758,
                                  "end": 8768
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8773,
                                    "end": 8781
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
                                          "start": 8782,
                                          "end": 8783
                                        },
                                        "typeArguments": null,
                                        "start": 8782,
                                        "end": 8783
                                      }
                                    ],
                                    "start": 8781,
                                    "end": 8784
                                  },
                                  "start": 8773,
                                  "end": 8784
                                },
                                "start": 8770,
                                "end": 8784
                              },
                              "start": 8757,
                              "end": 8784
                            },
                            "start": 8755,
                            "end": 8784
                          },
                          "start": 8745,
                          "end": 8784
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8787,
                            "end": 8795
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
                                  "start": 8796,
                                  "end": 8797
                                },
                                "typeArguments": null,
                                "start": 8796,
                                "end": 8797
                              }
                            ],
                            "start": 8795,
                            "end": 8798
                          },
                          "start": 8787,
                          "end": 8798
                        },
                        "start": 8785,
                        "end": 8798
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8697,
                      "end": 8799
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8802,
                        "end": 8806
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 8807,
                              "end": 8808
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8807,
                            "end": 8808
                          }
                        ],
                        "start": 8806,
                        "end": 8809
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8831,
                                        "end": 8832
                                      },
                                      "typeArguments": null,
                                      "start": 8831,
                                      "end": 8832
                                    },
                                    "start": 8829,
                                    "end": 8832
                                  },
                                  "start": 8824,
                                  "end": 8832
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8837,
                                    "end": 8845
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
                                          "start": 8846,
                                          "end": 8847
                                        },
                                        "typeArguments": null,
                                        "start": 8846,
                                        "end": 8847
                                      }
                                    ],
                                    "start": 8845,
                                    "end": 8848
                                  },
                                  "start": 8837,
                                  "end": 8848
                                },
                                "start": 8834,
                                "end": 8848
                              },
                              "start": 8823,
                              "end": 8848
                            },
                            "start": 8821,
                            "end": 8848
                          },
                          "start": 8810,
                          "end": 8848
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
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
                                      "type": "TSAnyKeyword",
                                      "start": 8871,
                                      "end": 8874
                                    },
                                    "start": 8869,
                                    "end": 8874
                                  },
                                  "start": 8864,
                                  "end": 8874
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
                                    "start": 8879,
                                    "end": 8880
                                  },
                                  "typeArguments": null,
                                  "start": 8879,
                                  "end": 8880
                                },
                                "start": 8876,
                                "end": 8880
                              },
                              "start": 8863,
                              "end": 8880
                            },
                            "start": 8861,
                            "end": 8880
                          },
                          "start": 8850,
                          "end": 8880
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8883,
                            "end": 8891
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
                                  "start": 8892,
                                  "end": 8893
                                },
                                "typeArguments": null,
                                "start": 8892,
                                "end": 8893
                              }
                            ],
                            "start": 8891,
                            "end": 8894
                          },
                          "start": 8883,
                          "end": 8894
                        },
                        "start": 8881,
                        "end": 8894
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8802,
                      "end": 8895
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8898,
                        "end": 8902
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 8903,
                              "end": 8904
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8903,
                            "end": 8904
                          }
                        ],
                        "start": 8902,
                        "end": 8905
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8927,
                                        "end": 8928
                                      },
                                      "typeArguments": null,
                                      "start": 8927,
                                      "end": 8928
                                    },
                                    "start": 8925,
                                    "end": 8928
                                  },
                                  "start": 8920,
                                  "end": 8928
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
                                    "start": 8933,
                                    "end": 8934
                                  },
                                  "typeArguments": null,
                                  "start": 8933,
                                  "end": 8934
                                },
                                "start": 8930,
                                "end": 8934
                              },
                              "start": 8919,
                              "end": 8934
                            },
                            "start": 8917,
                            "end": 8934
                          },
                          "start": 8906,
                          "end": 8934
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
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
                                      "type": "TSAnyKeyword",
                                      "start": 8956,
                                      "end": 8959
                                    },
                                    "start": 8954,
                                    "end": 8959
                                  },
                                  "start": 8949,
                                  "end": 8959
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8964,
                                    "end": 8972
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
                                          "start": 8973,
                                          "end": 8974
                                        },
                                        "typeArguments": null,
                                        "start": 8973,
                                        "end": 8974
                                      }
                                    ],
                                    "start": 8972,
                                    "end": 8975
                                  },
                                  "start": 8964,
                                  "end": 8975
                                },
                                "start": 8961,
                                "end": 8975
                              },
                              "start": 8948,
                              "end": 8975
                            },
                            "start": 8946,
                            "end": 8975
                          },
                          "start": 8936,
                          "end": 8975
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8978,
                            "end": 8986
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
                                  "start": 8987,
                                  "end": 8988
                                },
                                "typeArguments": null,
                                "start": 8987,
                                "end": 8988
                              }
                            ],
                            "start": 8986,
                            "end": 8989
                          },
                          "start": 8978,
                          "end": 8989
                        },
                        "start": 8976,
                        "end": 8989
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8898,
                      "end": 8990
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8993,
                        "end": 8997
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
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
                              "start": 8998,
                              "end": 8999
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8998,
                            "end": 8999
                          }
                        ],
                        "start": 8997,
                        "end": 9000
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9023,
                                        "end": 9024
                                      },
                                      "typeArguments": null,
                                      "start": 9023,
                                      "end": 9024
                                    },
                                    "start": 9021,
                                    "end": 9024
                                  },
                                  "start": 9016,
                                  "end": 9024
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
                                    "start": 9029,
                                    "end": 9030
                                  },
                                  "typeArguments": null,
                                  "start": 9029,
                                  "end": 9030
                                },
                                "start": 9026,
                                "end": 9030
                              },
                              "start": 9015,
                              "end": 9030
                            },
                            "start": 9013,
                            "end": 9030
                          },
                          "start": 9001,
                          "end": 9030
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
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
                                      "type": "TSAnyKeyword",
                                      "start": 9053,
                                      "end": 9056
                                    },
                                    "start": 9051,
                                    "end": 9056
                                  },
                                  "start": 9046,
                                  "end": 9056
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
                                    "start": 9061,
                                    "end": 9062
                                  },
                                  "typeArguments": null,
                                  "start": 9061,
                                  "end": 9062
                                },
                                "start": 9058,
                                "end": 9062
                              },
                              "start": 9045,
                              "end": 9062
                            },
                            "start": 9043,
                            "end": 9062
                          },
                          "start": 9032,
                          "end": 9062
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9065,
                            "end": 9073
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
                                  "start": 9074,
                                  "end": 9075
                                },
                                "typeArguments": null,
                                "start": 9074,
                                "end": 9075
                              }
                            ],
                            "start": 9073,
                            "end": 9076
                          },
                          "start": 9065,
                          "end": 9076
                        },
                        "start": 9063,
                        "end": 9076
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8993,
                      "end": 9077
                    }
                  ],
                  "start": 8693,
                  "end": 9080
                },
                "declare": false,
                "start": 8671,
                "end": 9080
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8664,
              "end": 9080
            }
          ],
          "start": 8661,
          "end": 9083
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 8635,
        "end": 9083
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8628,
      "end": 9083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9095,
        "end": 9098
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
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 9105,
              "end": 9106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9108,
                "end": 9114
              },
              "start": 9106,
              "end": 9114
            },
            "accessibility": null,
            "static": false,
            "start": 9105,
            "end": 9115
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
              "start": 9120,
              "end": 9121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9123,
                "end": 9129
              },
              "start": 9121,
              "end": 9129
            },
            "accessibility": null,
            "static": false,
            "start": 9120,
            "end": 9130
          }
        ],
        "start": 9099,
        "end": 9132
      },
      "declare": false,
      "start": 9085,
      "end": 9132
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 9148,
                "end": 9151
              },
              "start": 9146,
              "end": 9151
            },
            "start": 9145,
            "end": 9151
          },
          "init": null,
          "definite": false,
          "start": 9145,
          "end": 9151
        }
      ],
      "declare": true,
      "start": 9133,
      "end": 9152
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 9170,
                  "end": 9173
                },
                "start": 9170,
                "end": 9175
              },
              "start": 9168,
              "end": 9175
            },
            "start": 9165,
            "end": 9175
          },
          "init": null,
          "definite": false,
          "start": 9165,
          "end": 9175
        }
      ],
      "declare": true,
      "start": 9153,
      "end": 9176
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9194,
                  "end": 9197
                },
                "typeArguments": null,
                "start": 9194,
                "end": 9197
              },
              "start": 9192,
              "end": 9197
            },
            "start": 9189,
            "end": 9197
          },
          "init": null,
          "definite": false,
          "start": 9189,
          "end": 9197
        }
      ],
      "declare": true,
      "start": 9177,
      "end": 9198
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
            "name": "fooProm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9220,
                  "end": 9227
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9228,
                        "end": 9231
                      },
                      "typeArguments": null,
                      "start": 9228,
                      "end": 9231
                    }
                  ],
                  "start": 9227,
                  "end": 9232
                },
                "start": 9220,
                "end": 9232
              },
              "start": 9218,
              "end": 9232
            },
            "start": 9211,
            "end": 9232
          },
          "init": null,
          "definite": false,
          "start": 9211,
          "end": 9232
        }
      ],
      "declare": true,
      "start": 9199,
      "end": 9233
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9235,
          "end": 9242
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9245,
              "end": 9252
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9253,
              "end": 9256
            },
            "optional": false,
            "computed": false,
            "start": 9245,
            "end": 9256
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9257,
              "end": 9264
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9282,
                      "end": 9285
                    },
                    "start": 9275,
                    "end": 9286
                  }
                ],
                "start": 9272,
                "end": 9288
              },
              "id": null,
              "generator": false,
              "start": 9266,
              "end": 9288
            }
          ],
          "optional": false,
          "start": 9245,
          "end": 9289
        },
        "start": 9235,
        "end": 9289
      },
      "directive": null,
      "start": 9235,
      "end": 9290
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9291,
          "end": 9298
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9301,
              "end": 9308
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9309,
              "end": 9312
            },
            "optional": false,
            "computed": false,
            "start": 9301,
            "end": 9312
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9313,
              "end": 9320
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9338,
                      "end": 9341
                    },
                    "start": 9331,
                    "end": 9342
                  }
                ],
                "start": 9328,
                "end": 9344
              },
              "id": null,
              "generator": false,
              "start": 9322,
              "end": 9344
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 9346,
              "end": 9349
            }
          ],
          "optional": false,
          "start": 9301,
          "end": 9350
        },
        "start": 9291,
        "end": 9350
      },
      "directive": null,
      "start": 9291,
      "end": 9351
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9352,
          "end": 9359
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9362,
              "end": 9369
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9370,
              "end": 9373
            },
            "optional": false,
            "computed": false,
            "start": 9362,
            "end": 9373
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9374,
              "end": 9381
            },
            {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9399,
                      "end": 9402
                    },
                    "start": 9392,
                    "end": 9403
                  }
                ],
                "start": 9389,
                "end": 9405
              },
              "id": null,
              "generator": false,
              "start": 9383,
              "end": 9405
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 9407,
              "end": 9410
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 9412,
              "end": 9413
            }
          ],
          "optional": false,
          "start": 9362,
          "end": 9414
        },
        "start": 9352,
        "end": 9414
      },
      "directive": null,
      "start": 9352,
      "end": 9415
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 231,
  "end": 9415
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 231,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 238,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 246,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 252,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 263,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 282,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 297,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 309,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 320,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "thenableOrResult",
    "start": 330,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 352,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 360,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 373,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 376,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 382,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 391,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 398,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 403,
    "end": 405
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 406,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 412,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 415,
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
    "value": ";",
    "start": 420,
    "end": 421
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 426,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 433,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 440,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 445,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 452,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 461,
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
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 471,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 479,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 499,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 504,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 518,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 534,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 553,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 560,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 567,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 569,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 576,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 594,
    "end": 595
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 596,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 602,
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
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 625,
    "end": 631
  },
  {
    "type": "Identifier",
    "value": "attempt",
    "start": 632,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 642,
    "end": 643
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 643,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 646,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 648,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 655,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 664,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 671,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 674,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 682,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 691,
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
    "value": ",",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 695,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "any",
    "start": 702,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 709,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 715,
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
    "value": "Promise",
    "start": 721,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 737,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "attempt",
    "start": 744,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 753,
    "end": 754
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 755,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 760,
    "end": 766
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 767,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 776,
    "end": 778
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 778,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 783,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 786,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 789,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 793,
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
    "value": "any",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "ctx",
    "start": 803,
    "end": 806
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 806,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 809,
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
    "value": ":",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 815,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 822,
    "end": 823
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 832,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 839,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 846,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 849,
    "end": 850
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 851,
    "end": 857
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 858,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 867,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 871,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 879,
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
    "value": "Function",
    "start": 882,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 890,
    "end": 891
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 897,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 904,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 915,
    "end": 916
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 917,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 924,
    "end": 931
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 934,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 941,
    "end": 942
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 942,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 946,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 953,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 960,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 967,
    "end": 968
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 968,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 971,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 976,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 983,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 992,
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
    "value": "Promise",
    "start": 999,
    "end": 1006
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 1007,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1016,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Promise",
    "start": 1021,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1037,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 1044,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1053,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1054,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1055,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1060,
    "end": 1066
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1067,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1076,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1087,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1094,
    "end": 1095
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1104,
    "end": 1110
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1111,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1118,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1123,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1130,
    "end": 1137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 1139,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1147,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1153,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1161,
    "end": 1164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1164,
    "end": 1165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1165,
    "end": 1166
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1171,
    "end": 1177
  },
  {
    "type": "Identifier",
    "value": "reject",
    "start": 1178,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1184,
    "end": 1185
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1188,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1193,
    "end": 1199
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1200,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 1209,
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
    "value": "any",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1223,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1232,
    "end": 1233
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1240,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "defer",
    "start": 1247,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1261,
    "end": 1267
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1278,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "Resolver",
    "start": 1286,
    "end": 1294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1304,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1316,
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
    "value": "dit",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1324,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1331,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1340,
    "end": 1345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1347,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 1355,
    "end": 1363
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1363,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1369,
    "end": 1376
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1378,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1385,
    "end": 1391
  },
  {
    "type": "Identifier",
    "value": "cast",
    "start": 1392,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1400,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1405,
    "end": 1411
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1412,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1421,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1429,
    "end": 1430
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1432,
    "end": 1439
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1442,
    "end": 1443
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1449,
    "end": 1455
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 1456,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1461,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1466,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1473,
    "end": 1480
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1480,
    "end": 1481
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 1482,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1491,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1495,
    "end": 1496
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1497,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1504,
    "end": 1505
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1505,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1517,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1524,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1527,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1532,
    "end": 1538
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1539,
    "end": 1546
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1548,
    "end": 1553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1553,
    "end": 1554
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1555,
    "end": 1558
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1561,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "longStackTraces",
    "start": 1582,
    "end": 1597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1597,
    "end": 1598
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1598,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1601,
    "end": 1602
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1603,
    "end": 1609
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1610,
    "end": 1617
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1620,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1631,
    "end": 1637
  },
  {
    "type": "Identifier",
    "value": "delay",
    "start": 1638,
    "end": 1643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1643,
    "end": 1644
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1644,
    "end": 1645
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1645,
    "end": 1646
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1646,
    "end": 1647
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1647,
    "end": 1650
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1652,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1659,
    "end": 1666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1666,
    "end": 1667
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1668,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1675,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 1683,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Identifier",
    "value": "ms",
    "start": 1696,
    "end": 1698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1698,
    "end": 1699
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1700,
    "end": 1706
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1709,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1717,
    "end": 1718
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1725,
    "end": 1731
  },
  {
    "type": "Identifier",
    "value": "delay",
    "start": 1732,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1739,
    "end": 1740
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1740,
    "end": 1741
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1741,
    "end": 1744
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1746,
    "end": 1752
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1753,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1762,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1769,
    "end": 1770
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Identifier",
    "value": "ms",
    "start": 1772,
    "end": 1774
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1776,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1782,
    "end": 1783
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1785,
    "end": 1792
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1792,
    "end": 1793
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1793,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1795,
    "end": 1796
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1801,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "delay",
    "start": 1808,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1814,
    "end": 1817
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1819,
    "end": 1825
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1826,
    "end": 1833
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Identifier",
    "value": "ms",
    "start": 1835,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1839,
    "end": 1845
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1845,
    "end": 1846
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1846,
    "end": 1847
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1848,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1855,
    "end": 1856
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1856,
    "end": 1860
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1860,
    "end": 1861
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1868,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "promisify",
    "start": 1875,
    "end": 1884
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1884,
    "end": 1885
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1885,
    "end": 1888
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1888,
    "end": 1889
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1890,
    "end": 1896
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1897,
    "end": 1904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1904,
    "end": 1905
  },
  {
    "type": "Identifier",
    "value": "nodeFunction",
    "start": 1906,
    "end": 1918
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1920,
    "end": 1928
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1928,
    "end": 1929
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 1930,
    "end": 1938
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1938,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1939,
    "end": 1940
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1941,
    "end": 1944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 1947,
    "end": 1955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1955,
    "end": 1956
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1962,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "promisifyAll",
    "start": 1969,
    "end": 1981
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1981,
    "end": 1982
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1985,
    "end": 1986
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1987,
    "end": 1993
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 1994,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 2003,
    "end": 2009
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2011,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2020,
    "end": 2026
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2026,
    "end": 2027
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2033,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "coroutine",
    "start": 2040,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2052,
    "end": 2053
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2053,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2058,
    "end": 2064
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2065,
    "end": 2072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2072,
    "end": 2073
  },
  {
    "type": "Identifier",
    "value": "generatorFunction",
    "start": 2074,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2091,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2093,
    "end": 2101
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2101,
    "end": 2102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2102,
    "end": 2103
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2104,
    "end": 2112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2112,
    "end": 2113
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2119,
    "end": 2125
  },
  {
    "type": "Identifier",
    "value": "spawn",
    "start": 2126,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2132,
    "end": 2133
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2135,
    "end": 2138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2138,
    "end": 2139
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2140,
    "end": 2146
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2147,
    "end": 2154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2154,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "generatorFunction",
    "start": 2156,
    "end": 2173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 2175,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2186,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2193,
    "end": 2194
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2194,
    "end": 2195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2195,
    "end": 2196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2203,
    "end": 2209
  },
  {
    "type": "Identifier",
    "value": "noConflict",
    "start": 2210,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2220,
    "end": 2221
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2221,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2226,
    "end": 2232
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2233,
    "end": 2240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2240,
    "end": 2241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2243,
    "end": 2249
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2250,
    "end": 2257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2257,
    "end": 2258
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2264,
    "end": 2270
  },
  {
    "type": "Identifier",
    "value": "onPossiblyUnhandledRejection",
    "start": 2271,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2300,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2305,
    "end": 2311
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2312,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2319,
    "end": 2320
  },
  {
    "type": "Identifier",
    "value": "handler",
    "start": 2321,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2328,
    "end": 2329
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 2331,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2339,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2344,
    "end": 2346
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2347,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2353,
    "end": 2357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2364,
    "end": 2370
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2371,
    "end": 2374
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2376,
    "end": 2377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2377,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2378,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2383,
    "end": 2389
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2390,
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
    "value": "values",
    "start": 2399,
    "end": 2405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2407,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2414,
    "end": 2415
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2415,
    "end": 2423
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2423,
    "end": 2424
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2424,
    "end": 2431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2431,
    "end": 2432
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2432,
    "end": 2440
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2441,
    "end": 2442
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2443,
    "end": 2444
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2444,
    "end": 2445
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2445,
    "end": 2446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2446,
    "end": 2447
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2447,
    "end": 2448
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2449,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2458,
    "end": 2459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2459,
    "end": 2460
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2460,
    "end": 2461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2461,
    "end": 2462
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2467,
    "end": 2473
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2474,
    "end": 2477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2477,
    "end": 2478
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2478,
    "end": 2479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2479,
    "end": 2480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2480,
    "end": 2481
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2481,
    "end": 2484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2484,
    "end": 2485
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2486,
    "end": 2492
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2493,
    "end": 2500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2500,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2502,
    "end": 2508
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2508,
    "end": 2509
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2510,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2517,
    "end": 2518
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2518,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2526,
    "end": 2527
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2527,
    "end": 2528
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2528,
    "end": 2529
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2529,
    "end": 2530
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2530,
    "end": 2531
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2531,
    "end": 2532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2532,
    "end": 2533
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2534,
    "end": 2541
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2541,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2542,
    "end": 2543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2543,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2545,
    "end": 2546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2546,
    "end": 2547
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2552,
    "end": 2558
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2559,
    "end": 2562
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2562,
    "end": 2563
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2563,
    "end": 2564
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2564,
    "end": 2565
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2566,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2571,
    "end": 2577
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2578,
    "end": 2585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2587,
    "end": 2593
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2593,
    "end": 2594
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2595,
    "end": 2602
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2602,
    "end": 2603
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2603,
    "end": 2611
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2611,
    "end": 2612
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2612,
    "end": 2613
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2614,
    "end": 2615
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2615,
    "end": 2616
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2616,
    "end": 2617
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2617,
    "end": 2618
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2619,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2627,
    "end": 2628
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2628,
    "end": 2629
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2629,
    "end": 2630
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2630,
    "end": 2631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2631,
    "end": 2632
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2637,
    "end": 2643
  },
  {
    "type": "Identifier",
    "value": "all",
    "start": 2644,
    "end": 2647
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2647,
    "end": 2648
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2648,
    "end": 2649
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2649,
    "end": 2650
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2651,
    "end": 2654
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2654,
    "end": 2655
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2656,
    "end": 2662
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2663,
    "end": 2670
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2670,
    "end": 2671
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2672,
    "end": 2678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2678,
    "end": 2679
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2681,
    "end": 2682
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2682,
    "end": 2683
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2683,
    "end": 2684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2686,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2694,
    "end": 2695
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2695,
    "end": 2696
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2696,
    "end": 2697
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2697,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2705,
    "end": 2711
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2712,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2717,
    "end": 2718
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2718,
    "end": 2721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2723,
    "end": 2729
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2730,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2739,
    "end": 2745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2745,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2747,
    "end": 2754
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2754,
    "end": 2755
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2755,
    "end": 2761
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2761,
    "end": 2762
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2762,
    "end": 2763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2763,
    "end": 2764
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2765,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2773,
    "end": 2779
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2779,
    "end": 2780
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2780,
    "end": 2781
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2786,
    "end": 2792
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 2793,
    "end": 2798
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2798,
    "end": 2799
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2799,
    "end": 2802
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2802,
    "end": 2803
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2804,
    "end": 2810
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2811,
    "end": 2818
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2818,
    "end": 2819
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2820,
    "end": 2826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2826,
    "end": 2827
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2828,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "Promise",
    "start": 2837,
    "end": 2844
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2844,
    "end": 2845
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 2845,
    "end": 2851
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2851,
    "end": 2852
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2852,
    "end": 2853
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2859,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "settle",
    "start": 2866,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2875,
    "end": 2876
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 2876,
    "end": 2879
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2879,
    "end": 2880
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2881,
    "end": 2887
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2888,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 2897,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2905,
    "end": 2912
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2912,
    "end": 2913
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2913,
    "end": 2921
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2921,
    "end": 2922
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2922,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 2930,
    "end": 2938
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2940,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2943,
    "end": 2944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2947,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 2955,
    "end": 2962
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2962,
    "end": 2963
  },
  {
    "type": "Identifier",
    "value": "Inspection",
    "start": 2963,
    "end": 2973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2973,
    "end": 2974
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2974,
    "end": 2975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2985,
    "end": 2991
  },
  {
    "type": "Identifier",
    "value": "settle",
    "start": 2992,
    "end": 2998
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2998,
    "end": 2999
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2999,
    "end": 3000
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3000,
    "end": 3001
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3002,
    "end": 3005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3005,
    "end": 3006
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3007,
    "end": 3013
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3014,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3023,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3031,
    "end": 3038
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3038,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3039,
    "end": 3047
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3047,
    "end": 3048
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3048,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3050,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3051,
    "end": 3052
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3055,
    "end": 3062
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3062,
    "end": 3063
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3063,
    "end": 3070
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Identifier",
    "value": "Inspection",
    "start": 3071,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3082,
    "end": 3083
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3083,
    "end": 3084
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3084,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3087,
    "end": 3088
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3093,
    "end": 3099
  },
  {
    "type": "Identifier",
    "value": "settle",
    "start": 3100,
    "end": 3106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3106,
    "end": 3107
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3107,
    "end": 3108
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3110,
    "end": 3113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3113,
    "end": 3114
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3115,
    "end": 3121
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3122,
    "end": 3129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3129,
    "end": 3130
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3131,
    "end": 3137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3137,
    "end": 3138
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3139,
    "end": 3146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3146,
    "end": 3147
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3147,
    "end": 3155
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3155,
    "end": 3156
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3156,
    "end": 3157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3157,
    "end": 3158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3158,
    "end": 3159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3159,
    "end": 3160
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3160,
    "end": 3161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3161,
    "end": 3162
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3163,
    "end": 3170
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3171,
    "end": 3178
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3178,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "Inspection",
    "start": 3179,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3190,
    "end": 3191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3195,
    "end": 3196
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3201,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "settle",
    "start": 3208,
    "end": 3214
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3214,
    "end": 3215
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3215,
    "end": 3216
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3216,
    "end": 3217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3217,
    "end": 3218
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3218,
    "end": 3221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3223,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3230,
    "end": 3237
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3237,
    "end": 3238
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3239,
    "end": 3245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3245,
    "end": 3246
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3248,
    "end": 3249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3250,
    "end": 3251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3251,
    "end": 3252
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3253,
    "end": 3260
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3260,
    "end": 3261
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3261,
    "end": 3268
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3268,
    "end": 3269
  },
  {
    "type": "Identifier",
    "value": "Inspection",
    "start": 3269,
    "end": 3279
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3280,
    "end": 3281
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3281,
    "end": 3282
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3282,
    "end": 3283
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3283,
    "end": 3284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3284,
    "end": 3285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3292,
    "end": 3298
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3299,
    "end": 3302
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3302,
    "end": 3303
  },
  {
    "type": "Identifier",
    "value": "R",
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
    "value": "dit",
    "start": 3306,
    "end": 3309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3309,
    "end": 3310
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3311,
    "end": 3317
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3318,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3325,
    "end": 3326
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3327,
    "end": 3333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3333,
    "end": 3334
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3335,
    "end": 3342
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3343,
    "end": 3351
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3351,
    "end": 3352
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3352,
    "end": 3359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3360,
    "end": 3368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3368,
    "end": 3369
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3371,
    "end": 3372
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3372,
    "end": 3373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3373,
    "end": 3374
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3374,
    "end": 3375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3375,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3377,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3386,
    "end": 3387
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3393,
    "end": 3399
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3400,
    "end": 3403
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3403,
    "end": 3404
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3406,
    "end": 3407
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3407,
    "end": 3410
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3410,
    "end": 3411
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3412,
    "end": 3418
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3419,
    "end": 3426
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3426,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3428,
    "end": 3434
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3434,
    "end": 3435
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3436,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3444,
    "end": 3452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3452,
    "end": 3453
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3453,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3456,
    "end": 3457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3457,
    "end": 3458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3458,
    "end": 3459
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3460,
    "end": 3467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3467,
    "end": 3468
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3469,
    "end": 3470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3470,
    "end": 3471
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3476,
    "end": 3482
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3483,
    "end": 3486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3486,
    "end": 3487
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3487,
    "end": 3488
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3488,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3489,
    "end": 3490
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3490,
    "end": 3493
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3493,
    "end": 3494
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3495,
    "end": 3501
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3502,
    "end": 3509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3509,
    "end": 3510
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3511,
    "end": 3517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3517,
    "end": 3518
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3519,
    "end": 3526
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3526,
    "end": 3527
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3527,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3536,
    "end": 3537
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3537,
    "end": 3538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3538,
    "end": 3539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3539,
    "end": 3540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3540,
    "end": 3541
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3541,
    "end": 3542
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3543,
    "end": 3550
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3550,
    "end": 3551
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3551,
    "end": 3552
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3552,
    "end": 3553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3559,
    "end": 3565
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3566,
    "end": 3569
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3569,
    "end": 3570
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3570,
    "end": 3571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3571,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3573,
    "end": 3576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3578,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3585,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3594,
    "end": 3600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3600,
    "end": 3601
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3602,
    "end": 3603
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3603,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3605,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3608,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3615,
    "end": 3616
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3616,
    "end": 3617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3617,
    "end": 3618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3618,
    "end": 3619
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3625,
    "end": 3631
  },
  {
    "type": "Identifier",
    "value": "race",
    "start": 3632,
    "end": 3636
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3636,
    "end": 3637
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3637,
    "end": 3638
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3638,
    "end": 3639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3639,
    "end": 3640
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3640,
    "end": 3643
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3643,
    "end": 3644
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3645,
    "end": 3651
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3652,
    "end": 3659
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3659,
    "end": 3660
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3661,
    "end": 3667
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3667,
    "end": 3668
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3669,
    "end": 3676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3676,
    "end": 3677
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3677,
    "end": 3685
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3685,
    "end": 3686
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3686,
    "end": 3693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3693,
    "end": 3694
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3694,
    "end": 3702
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3702,
    "end": 3703
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3703,
    "end": 3704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3704,
    "end": 3705
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3705,
    "end": 3706
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3706,
    "end": 3707
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3707,
    "end": 3708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3708,
    "end": 3709
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3709,
    "end": 3710
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3711,
    "end": 3718
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3718,
    "end": 3719
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3719,
    "end": 3720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3720,
    "end": 3721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3727,
    "end": 3733
  },
  {
    "type": "Identifier",
    "value": "race",
    "start": 3734,
    "end": 3738
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3738,
    "end": 3739
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3739,
    "end": 3740
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3740,
    "end": 3741
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3741,
    "end": 3742
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3742,
    "end": 3745
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3745,
    "end": 3746
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3747,
    "end": 3753
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3754,
    "end": 3761
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3761,
    "end": 3762
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3763,
    "end": 3769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3769,
    "end": 3770
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3771,
    "end": 3778
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3778,
    "end": 3779
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3779,
    "end": 3787
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3787,
    "end": 3788
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3788,
    "end": 3789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3789,
    "end": 3790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3790,
    "end": 3791
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3791,
    "end": 3792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3792,
    "end": 3793
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3793,
    "end": 3794
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3795,
    "end": 3802
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3802,
    "end": 3803
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3803,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3804,
    "end": 3805
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Identifier",
    "value": "race",
    "start": 3818,
    "end": 3822
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3822,
    "end": 3823
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3823,
    "end": 3824
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3824,
    "end": 3825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3825,
    "end": 3826
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3826,
    "end": 3829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3829,
    "end": 3830
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3831,
    "end": 3837
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3838,
    "end": 3845
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3845,
    "end": 3846
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3847,
    "end": 3853
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3853,
    "end": 3854
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3855,
    "end": 3862
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3862,
    "end": 3863
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 3863,
    "end": 3871
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3871,
    "end": 3872
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3872,
    "end": 3873
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3874,
    "end": 3875
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3875,
    "end": 3876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3876,
    "end": 3877
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3877,
    "end": 3878
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3879,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3887,
    "end": 3888
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3888,
    "end": 3889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3889,
    "end": 3890
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3895,
    "end": 3901
  },
  {
    "type": "Identifier",
    "value": "race",
    "start": 3902,
    "end": 3906
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3906,
    "end": 3907
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3907,
    "end": 3908
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3908,
    "end": 3909
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3909,
    "end": 3910
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3910,
    "end": 3913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3913,
    "end": 3914
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3915,
    "end": 3921
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3922,
    "end": 3929
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3929,
    "end": 3930
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3931,
    "end": 3937
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3937,
    "end": 3938
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3939,
    "end": 3940
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3940,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3942,
    "end": 3943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3943,
    "end": 3944
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3945,
    "end": 3952
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3952,
    "end": 3953
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3953,
    "end": 3954
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3954,
    "end": 3955
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3955,
    "end": 3956
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3962,
    "end": 3968
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 3969,
    "end": 3973
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3973,
    "end": 3974
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3974,
    "end": 3975
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3975,
    "end": 3976
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3976,
    "end": 3977
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 3977,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3980,
    "end": 3981
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3982,
    "end": 3988
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 3989,
    "end": 3996
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3996,
    "end": 3997
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 3998,
    "end": 4004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4004,
    "end": 4005
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4006,
    "end": 4013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4013,
    "end": 4014
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4014,
    "end": 4022
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4022,
    "end": 4023
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4023,
    "end": 4030
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4030,
    "end": 4031
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4031,
    "end": 4039
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4039,
    "end": 4040
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4040,
    "end": 4041
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4041,
    "end": 4042
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4042,
    "end": 4043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4043,
    "end": 4044
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4044,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 4047,
    "end": 4052
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4052,
    "end": 4053
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4054,
    "end": 4060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4060,
    "end": 4061
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4063,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4070,
    "end": 4071
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4071,
    "end": 4072
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4072,
    "end": 4073
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4073,
    "end": 4074
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4074,
    "end": 4075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4075,
    "end": 4076
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4081,
    "end": 4087
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 4088,
    "end": 4092
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4092,
    "end": 4093
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4093,
    "end": 4094
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4094,
    "end": 4095
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4095,
    "end": 4096
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4096,
    "end": 4099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4099,
    "end": 4100
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4101,
    "end": 4107
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4108,
    "end": 4115
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4115,
    "end": 4116
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4117,
    "end": 4123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4123,
    "end": 4124
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4125,
    "end": 4132
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4132,
    "end": 4133
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4133,
    "end": 4141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4141,
    "end": 4142
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4142,
    "end": 4143
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4143,
    "end": 4144
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4144,
    "end": 4145
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4145,
    "end": 4146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4146,
    "end": 4147
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 4148,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4155,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4164,
    "end": 4171
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4171,
    "end": 4172
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4172,
    "end": 4173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4173,
    "end": 4174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4174,
    "end": 4175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4175,
    "end": 4176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4176,
    "end": 4177
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4182,
    "end": 4188
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 4189,
    "end": 4193
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4193,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4194,
    "end": 4195
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4195,
    "end": 4196
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4196,
    "end": 4197
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4197,
    "end": 4200
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4200,
    "end": 4201
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4202,
    "end": 4208
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4209,
    "end": 4216
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4216,
    "end": 4217
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4218,
    "end": 4224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4224,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4226,
    "end": 4233
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4233,
    "end": 4234
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4234,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4244,
    "end": 4245
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4247,
    "end": 4248
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 4249,
    "end": 4254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4256,
    "end": 4262
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4262,
    "end": 4263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4263,
    "end": 4264
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4265,
    "end": 4272
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4272,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4273,
    "end": 4274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4274,
    "end": 4275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4275,
    "end": 4276
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4276,
    "end": 4277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4277,
    "end": 4278
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4283,
    "end": 4289
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 4290,
    "end": 4294
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4294,
    "end": 4295
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4295,
    "end": 4296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4296,
    "end": 4297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4297,
    "end": 4298
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4298,
    "end": 4301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4301,
    "end": 4302
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4303,
    "end": 4309
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4310,
    "end": 4317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4317,
    "end": 4318
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4319,
    "end": 4325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4325,
    "end": 4326
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4327,
    "end": 4328
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4328,
    "end": 4329
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4329,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "count",
    "start": 4332,
    "end": 4337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4337,
    "end": 4338
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4339,
    "end": 4345
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4345,
    "end": 4346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4346,
    "end": 4347
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4348,
    "end": 4355
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4355,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4356,
    "end": 4357
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4357,
    "end": 4358
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4358,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4359,
    "end": 4360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4367,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 4374,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4379,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4381,
    "end": 4382
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4382,
    "end": 4385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4385,
    "end": 4386
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4387,
    "end": 4393
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4394,
    "end": 4401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4401,
    "end": 4402
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4403,
    "end": 4406
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4406,
    "end": 4412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4412,
    "end": 4413
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4414,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4421,
    "end": 4422
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4422,
    "end": 4430
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4431,
    "end": 4432
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4432,
    "end": 4433
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4433,
    "end": 4434
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4434,
    "end": 4435
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4435,
    "end": 4436
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4436,
    "end": 4437
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4438,
    "end": 4445
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4445,
    "end": 4446
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4446,
    "end": 4447
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4447,
    "end": 4448
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4448,
    "end": 4449
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4449,
    "end": 4450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4450,
    "end": 4451
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4456,
    "end": 4462
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 4463,
    "end": 4467
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4467,
    "end": 4468
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4468,
    "end": 4469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4469,
    "end": 4470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4470,
    "end": 4471
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4471,
    "end": 4474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4474,
    "end": 4475
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4476,
    "end": 4482
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4483,
    "end": 4490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4490,
    "end": 4491
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4492,
    "end": 4495
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4495,
    "end": 4501
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4501,
    "end": 4502
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4503,
    "end": 4504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4504,
    "end": 4505
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4505,
    "end": 4506
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4506,
    "end": 4507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4507,
    "end": 4508
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4509,
    "end": 4516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4516,
    "end": 4517
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4517,
    "end": 4518
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4518,
    "end": 4519
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4519,
    "end": 4520
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4520,
    "end": 4521
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4521,
    "end": 4522
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4528,
    "end": 4534
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4535,
    "end": 4538
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4538,
    "end": 4539
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4539,
    "end": 4540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4540,
    "end": 4541
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4545,
    "end": 4548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4548,
    "end": 4549
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4550,
    "end": 4556
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4557,
    "end": 4564
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4564,
    "end": 4565
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4566,
    "end": 4572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4572,
    "end": 4573
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4574,
    "end": 4581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4581,
    "end": 4582
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4582,
    "end": 4590
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4590,
    "end": 4591
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4591,
    "end": 4598
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4598,
    "end": 4599
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4599,
    "end": 4607
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4607,
    "end": 4608
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4608,
    "end": 4609
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4609,
    "end": 4610
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4610,
    "end": 4611
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4611,
    "end": 4612
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4612,
    "end": 4613
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4613,
    "end": 4614
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 4615,
    "end": 4621
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4621,
    "end": 4622
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4624,
    "end": 4628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4628,
    "end": 4629
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4630,
    "end": 4631
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4631,
    "end": 4632
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4633,
    "end": 4638
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4638,
    "end": 4639
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4640,
    "end": 4646
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4646,
    "end": 4647
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 4648,
    "end": 4659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4659,
    "end": 4660
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4661,
    "end": 4667
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4667,
    "end": 4668
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4669,
    "end": 4671
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4672,
    "end": 4679
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4679,
    "end": 4680
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4680,
    "end": 4688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4688,
    "end": 4689
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4689,
    "end": 4690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4690,
    "end": 4691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4691,
    "end": 4692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4692,
    "end": 4693
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4694,
    "end": 4701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4701,
    "end": 4702
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4702,
    "end": 4703
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4703,
    "end": 4704
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4704,
    "end": 4705
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4705,
    "end": 4706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4706,
    "end": 4707
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4712,
    "end": 4718
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4719,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4722,
    "end": 4723
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4724,
    "end": 4725
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4726,
    "end": 4727
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4727,
    "end": 4728
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4728,
    "end": 4729
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4729,
    "end": 4732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4732,
    "end": 4733
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4734,
    "end": 4740
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4741,
    "end": 4748
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4748,
    "end": 4749
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4750,
    "end": 4756
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4756,
    "end": 4757
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4758,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4766,
    "end": 4774
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4774,
    "end": 4775
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4775,
    "end": 4782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4782,
    "end": 4783
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4783,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4793,
    "end": 4794
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4794,
    "end": 4795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4795,
    "end": 4796
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4796,
    "end": 4797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4797,
    "end": 4798
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 4799,
    "end": 4805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4805,
    "end": 4806
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4807,
    "end": 4808
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4808,
    "end": 4812
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4812,
    "end": 4813
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4815,
    "end": 4816
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4817,
    "end": 4822
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4822,
    "end": 4823
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4824,
    "end": 4830
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4830,
    "end": 4831
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 4832,
    "end": 4843
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4843,
    "end": 4844
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4845,
    "end": 4851
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4851,
    "end": 4852
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4853,
    "end": 4855
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4856,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4858,
    "end": 4859
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4860,
    "end": 4867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4868,
    "end": 4869
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4869,
    "end": 4870
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4870,
    "end": 4871
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4871,
    "end": 4872
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4872,
    "end": 4873
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4878,
    "end": 4884
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 4885,
    "end": 4888
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4888,
    "end": 4889
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4889,
    "end": 4890
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4890,
    "end": 4891
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 4892,
    "end": 4893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 4895,
    "end": 4898
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4898,
    "end": 4899
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4900,
    "end": 4906
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4907,
    "end": 4914
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4914,
    "end": 4915
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 4916,
    "end": 4922
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4922,
    "end": 4923
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 4924,
    "end": 4931
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4931,
    "end": 4932
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 4932,
    "end": 4940
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4940,
    "end": 4941
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4941,
    "end": 4942
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4942,
    "end": 4943
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4943,
    "end": 4944
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4944,
    "end": 4945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4945,
    "end": 4946
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 4947,
    "end": 4953
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4953,
    "end": 4954
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4955,
    "end": 4956
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4956,
    "end": 4960
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4960,
    "end": 4961
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4962,
    "end": 4963
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4963,
    "end": 4964
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 4965,
    "end": 4970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4970,
    "end": 4971
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4972,
    "end": 4978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4978,
    "end": 4979
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 4980,
    "end": 4991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4991,
    "end": 4992
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4993,
    "end": 4999
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4999,
    "end": 5000
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5001,
    "end": 5003
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5004,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5011,
    "end": 5012
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5012,
    "end": 5020
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5021,
    "end": 5022
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5022,
    "end": 5023
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5023,
    "end": 5024
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5024,
    "end": 5025
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5026,
    "end": 5033
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5033,
    "end": 5034
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5034,
    "end": 5035
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5035,
    "end": 5036
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5036,
    "end": 5037
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5037,
    "end": 5038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5038,
    "end": 5039
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5044,
    "end": 5050
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 5051,
    "end": 5054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5054,
    "end": 5055
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5056,
    "end": 5057
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5058,
    "end": 5059
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5059,
    "end": 5060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5060,
    "end": 5061
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5061,
    "end": 5064
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5064,
    "end": 5065
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5066,
    "end": 5072
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5073,
    "end": 5080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5080,
    "end": 5081
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5082,
    "end": 5088
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5088,
    "end": 5089
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5090,
    "end": 5097
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5097,
    "end": 5098
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5098,
    "end": 5106
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5106,
    "end": 5107
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5107,
    "end": 5108
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5108,
    "end": 5109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5109,
    "end": 5110
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5110,
    "end": 5111
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5111,
    "end": 5112
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 5113,
    "end": 5119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5119,
    "end": 5120
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5121,
    "end": 5122
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 5122,
    "end": 5126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5126,
    "end": 5127
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5128,
    "end": 5129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5129,
    "end": 5130
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5131,
    "end": 5136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5136,
    "end": 5137
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5138,
    "end": 5144
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5144,
    "end": 5145
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5146,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5157,
    "end": 5158
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5159,
    "end": 5165
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5165,
    "end": 5166
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5167,
    "end": 5169
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5170,
    "end": 5171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5171,
    "end": 5172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5172,
    "end": 5173
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5174,
    "end": 5181
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5181,
    "end": 5182
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5182,
    "end": 5183
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5183,
    "end": 5184
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5184,
    "end": 5185
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5185,
    "end": 5186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5186,
    "end": 5187
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5192,
    "end": 5198
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 5199,
    "end": 5202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5202,
    "end": 5203
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5203,
    "end": 5204
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5206,
    "end": 5207
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5207,
    "end": 5208
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5208,
    "end": 5209
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5209,
    "end": 5212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5212,
    "end": 5213
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5214,
    "end": 5220
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5221,
    "end": 5228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5228,
    "end": 5229
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5230,
    "end": 5236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5236,
    "end": 5237
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5238,
    "end": 5245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5245,
    "end": 5246
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5246,
    "end": 5254
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5254,
    "end": 5255
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5255,
    "end": 5256
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5256,
    "end": 5257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5257,
    "end": 5258
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5258,
    "end": 5259
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5259,
    "end": 5260
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 5261,
    "end": 5267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5267,
    "end": 5268
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5269,
    "end": 5270
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 5270,
    "end": 5274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5274,
    "end": 5275
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5276,
    "end": 5277
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5277,
    "end": 5278
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5279,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5286,
    "end": 5292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5294,
    "end": 5305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5305,
    "end": 5306
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5307,
    "end": 5313
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5313,
    "end": 5314
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5315,
    "end": 5317
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5318,
    "end": 5325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5326,
    "end": 5334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5334,
    "end": 5335
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5335,
    "end": 5336
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5336,
    "end": 5337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5337,
    "end": 5338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5338,
    "end": 5339
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5340,
    "end": 5347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5347,
    "end": 5348
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5348,
    "end": 5349
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5349,
    "end": 5350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5350,
    "end": 5351
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5351,
    "end": 5352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5352,
    "end": 5353
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5358,
    "end": 5364
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 5365,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5369,
    "end": 5370
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5370,
    "end": 5371
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5372,
    "end": 5373
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5373,
    "end": 5374
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5374,
    "end": 5375
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5375,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5378,
    "end": 5379
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5380,
    "end": 5386
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5387,
    "end": 5394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5394,
    "end": 5395
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5396,
    "end": 5402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5402,
    "end": 5403
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5404,
    "end": 5411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5411,
    "end": 5412
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5412,
    "end": 5420
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5420,
    "end": 5421
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5421,
    "end": 5422
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5422,
    "end": 5423
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5423,
    "end": 5424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5424,
    "end": 5425
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5425,
    "end": 5426
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 5427,
    "end": 5433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5433,
    "end": 5434
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5435,
    "end": 5436
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 5436,
    "end": 5440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5440,
    "end": 5441
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5442,
    "end": 5443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5443,
    "end": 5444
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5445,
    "end": 5450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5450,
    "end": 5451
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5452,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5460,
    "end": 5471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5471,
    "end": 5472
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5473,
    "end": 5479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5479,
    "end": 5480
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5481,
    "end": 5483
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5484,
    "end": 5485
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5485,
    "end": 5486
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5486,
    "end": 5487
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5488,
    "end": 5495
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5495,
    "end": 5496
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5496,
    "end": 5497
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5497,
    "end": 5498
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5498,
    "end": 5499
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5499,
    "end": 5500
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5500,
    "end": 5501
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5506,
    "end": 5512
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 5513,
    "end": 5516
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5516,
    "end": 5517
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5517,
    "end": 5518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5518,
    "end": 5519
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5520,
    "end": 5521
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5521,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5522,
    "end": 5523
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5523,
    "end": 5526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5526,
    "end": 5527
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5528,
    "end": 5534
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5535,
    "end": 5542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5542,
    "end": 5543
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5544,
    "end": 5550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5550,
    "end": 5551
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5552,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5554,
    "end": 5555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5555,
    "end": 5556
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 5557,
    "end": 5563
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5563,
    "end": 5564
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5565,
    "end": 5566
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 5566,
    "end": 5570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5570,
    "end": 5571
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5572,
    "end": 5573
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5573,
    "end": 5574
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5575,
    "end": 5580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5580,
    "end": 5581
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5582,
    "end": 5588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5588,
    "end": 5589
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5590,
    "end": 5601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5601,
    "end": 5602
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5603,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5611,
    "end": 5613
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5614,
    "end": 5621
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5621,
    "end": 5622
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5622,
    "end": 5630
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5630,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5631,
    "end": 5632
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5632,
    "end": 5633
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5633,
    "end": 5634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5634,
    "end": 5635
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5636,
    "end": 5643
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5643,
    "end": 5644
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5644,
    "end": 5645
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5645,
    "end": 5646
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5646,
    "end": 5647
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5647,
    "end": 5648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5648,
    "end": 5649
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5654,
    "end": 5660
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 5661,
    "end": 5664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5664,
    "end": 5665
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5665,
    "end": 5666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5666,
    "end": 5667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5668,
    "end": 5669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5669,
    "end": 5670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5670,
    "end": 5671
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5671,
    "end": 5674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5674,
    "end": 5675
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5676,
    "end": 5682
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5683,
    "end": 5690
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5690,
    "end": 5691
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5692,
    "end": 5698
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5698,
    "end": 5699
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5700,
    "end": 5701
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5701,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5703,
    "end": 5704
  },
  {
    "type": "Identifier",
    "value": "mapper",
    "start": 5705,
    "end": 5711
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5711,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 5714,
    "end": 5718
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5718,
    "end": 5719
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5720,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5723,
    "end": 5728
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5728,
    "end": 5729
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5730,
    "end": 5736
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5736,
    "end": 5737
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5738,
    "end": 5749
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5749,
    "end": 5750
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5751,
    "end": 5757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5757,
    "end": 5758
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5759,
    "end": 5761
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5762,
    "end": 5763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5763,
    "end": 5764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5764,
    "end": 5765
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5766,
    "end": 5773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5773,
    "end": 5774
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5774,
    "end": 5775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5775,
    "end": 5776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5776,
    "end": 5777
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5777,
    "end": 5778
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5778,
    "end": 5779
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5785,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 5792,
    "end": 5798
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5798,
    "end": 5799
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5799,
    "end": 5800
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5800,
    "end": 5801
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5802,
    "end": 5803
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5803,
    "end": 5804
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5804,
    "end": 5805
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 5805,
    "end": 5808
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5808,
    "end": 5809
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5810,
    "end": 5816
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5817,
    "end": 5824
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5824,
    "end": 5825
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 5826,
    "end": 5832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5832,
    "end": 5833
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5834,
    "end": 5841
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5841,
    "end": 5842
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5842,
    "end": 5850
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5850,
    "end": 5851
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5851,
    "end": 5858
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5858,
    "end": 5859
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5859,
    "end": 5867
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5867,
    "end": 5868
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5868,
    "end": 5869
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5869,
    "end": 5870
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5870,
    "end": 5871
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5871,
    "end": 5872
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5872,
    "end": 5873
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5873,
    "end": 5874
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 5875,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5884,
    "end": 5885
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 5885,
    "end": 5890
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5890,
    "end": 5891
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5892,
    "end": 5893
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5893,
    "end": 5894
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 5895,
    "end": 5902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5902,
    "end": 5903
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 5904,
    "end": 5905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5905,
    "end": 5906
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 5907,
    "end": 5912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5912,
    "end": 5913
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5914,
    "end": 5920
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5920,
    "end": 5921
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 5922,
    "end": 5933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5933,
    "end": 5934
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5935,
    "end": 5941
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5941,
    "end": 5942
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5943,
    "end": 5945
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5946,
    "end": 5953
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5953,
    "end": 5954
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 5954,
    "end": 5962
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5962,
    "end": 5963
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5963,
    "end": 5964
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5964,
    "end": 5965
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5965,
    "end": 5966
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 5967,
    "end": 5979
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5979,
    "end": 5980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5980,
    "end": 5981
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5982,
    "end": 5983
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5983,
    "end": 5984
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5984,
    "end": 5985
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5986,
    "end": 5993
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5993,
    "end": 5994
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5994,
    "end": 5995
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5995,
    "end": 5996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5996,
    "end": 5997
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6002,
    "end": 6008
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6009,
    "end": 6015
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6015,
    "end": 6016
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6016,
    "end": 6017
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6017,
    "end": 6018
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6019,
    "end": 6020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6020,
    "end": 6021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6021,
    "end": 6022
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6022,
    "end": 6025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6025,
    "end": 6026
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6027,
    "end": 6033
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6034,
    "end": 6041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6041,
    "end": 6042
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 6043,
    "end": 6049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6049,
    "end": 6050
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6051,
    "end": 6058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6058,
    "end": 6059
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6059,
    "end": 6067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6067,
    "end": 6068
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6068,
    "end": 6075
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6075,
    "end": 6076
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6076,
    "end": 6084
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6084,
    "end": 6085
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6085,
    "end": 6086
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6086,
    "end": 6087
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6087,
    "end": 6088
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6088,
    "end": 6089
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6089,
    "end": 6090
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6090,
    "end": 6091
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 6092,
    "end": 6099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6099,
    "end": 6100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6101,
    "end": 6102
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 6102,
    "end": 6107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6107,
    "end": 6108
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6109,
    "end": 6110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6110,
    "end": 6111
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 6112,
    "end": 6119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6119,
    "end": 6120
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6121,
    "end": 6122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6122,
    "end": 6123
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 6124,
    "end": 6129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6129,
    "end": 6130
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6131,
    "end": 6137
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6137,
    "end": 6138
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 6139,
    "end": 6150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6150,
    "end": 6151
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6152,
    "end": 6158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6158,
    "end": 6159
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6160,
    "end": 6162
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6163,
    "end": 6164
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6164,
    "end": 6165
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 6166,
    "end": 6178
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6178,
    "end": 6179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6179,
    "end": 6180
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6181,
    "end": 6182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6182,
    "end": 6183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6183,
    "end": 6184
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6185,
    "end": 6192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6192,
    "end": 6193
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6193,
    "end": 6194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6194,
    "end": 6195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6195,
    "end": 6196
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6202,
    "end": 6208
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6209,
    "end": 6215
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6215,
    "end": 6216
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6216,
    "end": 6217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6217,
    "end": 6218
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6219,
    "end": 6220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6220,
    "end": 6221
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6221,
    "end": 6222
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6222,
    "end": 6225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6225,
    "end": 6226
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6227,
    "end": 6233
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6234,
    "end": 6241
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6241,
    "end": 6242
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 6243,
    "end": 6249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6251,
    "end": 6258
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6258,
    "end": 6259
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6259,
    "end": 6267
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6267,
    "end": 6268
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6268,
    "end": 6269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6269,
    "end": 6270
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6270,
    "end": 6271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6271,
    "end": 6272
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 6274,
    "end": 6281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6281,
    "end": 6282
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6283,
    "end": 6284
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 6284,
    "end": 6289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6289,
    "end": 6290
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6291,
    "end": 6292
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6292,
    "end": 6293
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 6294,
    "end": 6301
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6301,
    "end": 6302
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6303,
    "end": 6304
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6304,
    "end": 6305
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 6306,
    "end": 6311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6311,
    "end": 6312
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6313,
    "end": 6319
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6319,
    "end": 6320
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 6321,
    "end": 6332
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6332,
    "end": 6333
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6334,
    "end": 6340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6340,
    "end": 6341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6342,
    "end": 6344
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6345,
    "end": 6352
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6352,
    "end": 6353
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6353,
    "end": 6361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6361,
    "end": 6362
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6362,
    "end": 6363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6363,
    "end": 6364
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6364,
    "end": 6365
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 6366,
    "end": 6378
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6378,
    "end": 6379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6379,
    "end": 6380
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6381,
    "end": 6382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6382,
    "end": 6383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6383,
    "end": 6384
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6385,
    "end": 6392
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6392,
    "end": 6393
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6393,
    "end": 6394
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6394,
    "end": 6395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6395,
    "end": 6396
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6401,
    "end": 6407
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6408,
    "end": 6414
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6414,
    "end": 6415
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6415,
    "end": 6416
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6416,
    "end": 6417
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6418,
    "end": 6419
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6419,
    "end": 6420
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6420,
    "end": 6421
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6421,
    "end": 6424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6424,
    "end": 6425
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6426,
    "end": 6432
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6433,
    "end": 6440
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6440,
    "end": 6441
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 6442,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6448,
    "end": 6449
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6450,
    "end": 6457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6457,
    "end": 6458
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6458,
    "end": 6466
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6466,
    "end": 6467
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6467,
    "end": 6468
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6468,
    "end": 6469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6469,
    "end": 6470
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6470,
    "end": 6471
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6471,
    "end": 6472
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 6473,
    "end": 6480
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6480,
    "end": 6481
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6482,
    "end": 6483
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 6483,
    "end": 6488
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6488,
    "end": 6489
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6490,
    "end": 6491
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6491,
    "end": 6492
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 6493,
    "end": 6500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6500,
    "end": 6501
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6502,
    "end": 6503
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6503,
    "end": 6504
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 6505,
    "end": 6510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6510,
    "end": 6511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6512,
    "end": 6518
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6518,
    "end": 6519
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 6520,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6533,
    "end": 6539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6539,
    "end": 6540
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6541,
    "end": 6543
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6544,
    "end": 6545
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6545,
    "end": 6546
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 6547,
    "end": 6559
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6559,
    "end": 6560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6560,
    "end": 6561
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6562,
    "end": 6563
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6563,
    "end": 6564
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6564,
    "end": 6565
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6566,
    "end": 6573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6573,
    "end": 6574
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6574,
    "end": 6575
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6575,
    "end": 6576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6576,
    "end": 6577
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6583,
    "end": 6589
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6590,
    "end": 6596
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6596,
    "end": 6597
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6597,
    "end": 6598
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6598,
    "end": 6599
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6600,
    "end": 6601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6601,
    "end": 6602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6602,
    "end": 6603
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6603,
    "end": 6606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6606,
    "end": 6607
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6608,
    "end": 6614
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6615,
    "end": 6622
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6622,
    "end": 6623
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 6624,
    "end": 6630
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6630,
    "end": 6631
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6632,
    "end": 6639
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6639,
    "end": 6640
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6640,
    "end": 6648
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6648,
    "end": 6649
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6649,
    "end": 6650
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6650,
    "end": 6651
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6651,
    "end": 6652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6652,
    "end": 6653
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6653,
    "end": 6654
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 6655,
    "end": 6662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6662,
    "end": 6663
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6664,
    "end": 6665
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 6665,
    "end": 6670
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6670,
    "end": 6671
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6672,
    "end": 6673
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6673,
    "end": 6674
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 6675,
    "end": 6682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6682,
    "end": 6683
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6684,
    "end": 6685
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6685,
    "end": 6686
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 6687,
    "end": 6692
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6692,
    "end": 6693
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6694,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 6702,
    "end": 6713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6713,
    "end": 6714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6715,
    "end": 6721
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6721,
    "end": 6722
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6723,
    "end": 6725
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6726,
    "end": 6733
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6733,
    "end": 6734
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6734,
    "end": 6742
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6742,
    "end": 6743
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6743,
    "end": 6744
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6744,
    "end": 6745
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6745,
    "end": 6746
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 6747,
    "end": 6759
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6759,
    "end": 6760
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6760,
    "end": 6761
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6762,
    "end": 6763
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6763,
    "end": 6764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6764,
    "end": 6765
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6766,
    "end": 6773
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6773,
    "end": 6774
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6774,
    "end": 6775
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6775,
    "end": 6776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6776,
    "end": 6777
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6782,
    "end": 6788
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6789,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6796,
    "end": 6797
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6797,
    "end": 6798
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6800,
    "end": 6801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6801,
    "end": 6802
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6802,
    "end": 6805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6805,
    "end": 6806
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6807,
    "end": 6813
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6814,
    "end": 6821
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6821,
    "end": 6822
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 6823,
    "end": 6829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6829,
    "end": 6830
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6831,
    "end": 6838
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6838,
    "end": 6839
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 6839,
    "end": 6847
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6847,
    "end": 6848
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6848,
    "end": 6849
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6849,
    "end": 6850
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6850,
    "end": 6851
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6851,
    "end": 6852
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6852,
    "end": 6853
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 6854,
    "end": 6861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6861,
    "end": 6862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6863,
    "end": 6864
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 6864,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6871,
    "end": 6872
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6872,
    "end": 6873
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 6874,
    "end": 6881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6881,
    "end": 6882
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6883,
    "end": 6884
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6884,
    "end": 6885
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 6886,
    "end": 6891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6891,
    "end": 6892
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6893,
    "end": 6899
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6899,
    "end": 6900
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 6901,
    "end": 6912
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6912,
    "end": 6913
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6914,
    "end": 6920
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6920,
    "end": 6921
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6922,
    "end": 6924
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6925,
    "end": 6926
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6926,
    "end": 6927
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 6928,
    "end": 6940
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 6940,
    "end": 6941
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6941,
    "end": 6942
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6943,
    "end": 6944
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6944,
    "end": 6945
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6945,
    "end": 6946
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6947,
    "end": 6954
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6954,
    "end": 6955
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6955,
    "end": 6956
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6956,
    "end": 6957
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6957,
    "end": 6958
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6964,
    "end": 6970
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 6971,
    "end": 6977
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6977,
    "end": 6978
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 6978,
    "end": 6979
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6979,
    "end": 6980
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6981,
    "end": 6982
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6982,
    "end": 6983
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6983,
    "end": 6984
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 6984,
    "end": 6987
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6987,
    "end": 6988
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6989,
    "end": 6995
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 6996,
    "end": 7003
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7003,
    "end": 7004
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7005,
    "end": 7011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7011,
    "end": 7012
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7013,
    "end": 7014
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7014,
    "end": 7015
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7015,
    "end": 7016
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7016,
    "end": 7017
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 7018,
    "end": 7025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7025,
    "end": 7026
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7027,
    "end": 7028
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 7028,
    "end": 7033
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7033,
    "end": 7034
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7035,
    "end": 7036
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7036,
    "end": 7037
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 7038,
    "end": 7045
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7045,
    "end": 7046
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7047,
    "end": 7048
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7048,
    "end": 7049
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7050,
    "end": 7055
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7055,
    "end": 7056
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7057,
    "end": 7063
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7063,
    "end": 7064
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7065,
    "end": 7076
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7076,
    "end": 7077
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7078,
    "end": 7084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7084,
    "end": 7085
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7086,
    "end": 7088
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7089,
    "end": 7096
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7096,
    "end": 7097
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7097,
    "end": 7105
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7105,
    "end": 7106
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7106,
    "end": 7107
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7107,
    "end": 7108
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7108,
    "end": 7109
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 7110,
    "end": 7122
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7122,
    "end": 7123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7123,
    "end": 7124
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7125,
    "end": 7126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7126,
    "end": 7127
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7127,
    "end": 7128
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7129,
    "end": 7136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7136,
    "end": 7137
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7137,
    "end": 7138
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7138,
    "end": 7139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7145,
    "end": 7151
  },
  {
    "type": "Identifier",
    "value": "reduce",
    "start": 7152,
    "end": 7158
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7158,
    "end": 7159
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7159,
    "end": 7160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7160,
    "end": 7161
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7162,
    "end": 7163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7163,
    "end": 7164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7164,
    "end": 7165
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 7165,
    "end": 7168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7168,
    "end": 7169
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7170,
    "end": 7176
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7177,
    "end": 7184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7184,
    "end": 7185
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7186,
    "end": 7192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7192,
    "end": 7193
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7194,
    "end": 7195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7195,
    "end": 7196
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7196,
    "end": 7197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7197,
    "end": 7198
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 7199,
    "end": 7206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7206,
    "end": 7207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7208,
    "end": 7209
  },
  {
    "type": "Identifier",
    "value": "total",
    "start": 7209,
    "end": 7214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7214,
    "end": 7215
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7216,
    "end": 7217
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7217,
    "end": 7218
  },
  {
    "type": "Identifier",
    "value": "current",
    "start": 7219,
    "end": 7226
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7226,
    "end": 7227
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7228,
    "end": 7229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7229,
    "end": 7230
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7231,
    "end": 7236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7236,
    "end": 7237
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7238,
    "end": 7244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7244,
    "end": 7245
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7246,
    "end": 7257
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7257,
    "end": 7258
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7259,
    "end": 7265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7265,
    "end": 7266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7267,
    "end": 7269
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7270,
    "end": 7271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7271,
    "end": 7272
  },
  {
    "type": "Identifier",
    "value": "initialValue",
    "start": 7273,
    "end": 7285
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 7285,
    "end": 7286
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7286,
    "end": 7287
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7288,
    "end": 7289
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7289,
    "end": 7290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7290,
    "end": 7291
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7292,
    "end": 7299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7299,
    "end": 7300
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 7300,
    "end": 7301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7301,
    "end": 7302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7302,
    "end": 7303
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7309,
    "end": 7315
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 7316,
    "end": 7322
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7322,
    "end": 7323
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7323,
    "end": 7324
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7324,
    "end": 7325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7325,
    "end": 7326
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 7326,
    "end": 7329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7329,
    "end": 7330
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7331,
    "end": 7337
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7338,
    "end": 7345
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7345,
    "end": 7346
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7347,
    "end": 7353
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7353,
    "end": 7354
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7355,
    "end": 7362
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7362,
    "end": 7363
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7363,
    "end": 7371
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7371,
    "end": 7372
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7372,
    "end": 7379
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7379,
    "end": 7380
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7380,
    "end": 7388
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7388,
    "end": 7389
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7389,
    "end": 7390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7390,
    "end": 7391
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7391,
    "end": 7392
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7392,
    "end": 7393
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7393,
    "end": 7394
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7394,
    "end": 7395
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 7396,
    "end": 7404
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7404,
    "end": 7405
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7406,
    "end": 7407
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 7407,
    "end": 7411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7411,
    "end": 7412
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7413,
    "end": 7414
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7414,
    "end": 7415
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7416,
    "end": 7421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7421,
    "end": 7422
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7423,
    "end": 7429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7429,
    "end": 7430
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7431,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7444,
    "end": 7450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7450,
    "end": 7451
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7452,
    "end": 7454
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7455,
    "end": 7462
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7462,
    "end": 7463
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7463,
    "end": 7471
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7471,
    "end": 7472
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7472,
    "end": 7479
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7479,
    "end": 7480
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7480,
    "end": 7481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7481,
    "end": 7482
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7483,
    "end": 7490
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7490,
    "end": 7491
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7491,
    "end": 7492
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7492,
    "end": 7493
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7493,
    "end": 7494
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7494,
    "end": 7495
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7495,
    "end": 7496
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7501,
    "end": 7507
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 7508,
    "end": 7514
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7514,
    "end": 7515
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7515,
    "end": 7516
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7516,
    "end": 7517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7517,
    "end": 7518
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 7518,
    "end": 7521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7521,
    "end": 7522
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7523,
    "end": 7529
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7530,
    "end": 7537
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7537,
    "end": 7538
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7539,
    "end": 7545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7545,
    "end": 7546
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7547,
    "end": 7554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7554,
    "end": 7555
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7555,
    "end": 7563
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7563,
    "end": 7564
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7564,
    "end": 7571
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7571,
    "end": 7572
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7572,
    "end": 7580
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7580,
    "end": 7581
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7581,
    "end": 7582
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7582,
    "end": 7583
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7583,
    "end": 7584
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7584,
    "end": 7585
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7585,
    "end": 7586
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7586,
    "end": 7587
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 7588,
    "end": 7596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7596,
    "end": 7597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7598,
    "end": 7599
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 7599,
    "end": 7603
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7603,
    "end": 7604
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7605,
    "end": 7606
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7606,
    "end": 7607
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7608,
    "end": 7613
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7613,
    "end": 7614
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7615,
    "end": 7621
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7621,
    "end": 7622
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7623,
    "end": 7634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7634,
    "end": 7635
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7636,
    "end": 7642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7642,
    "end": 7643
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7644,
    "end": 7646
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7647,
    "end": 7654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7654,
    "end": 7655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7655,
    "end": 7656
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7657,
    "end": 7664
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7664,
    "end": 7665
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7665,
    "end": 7666
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7666,
    "end": 7667
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7667,
    "end": 7668
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7668,
    "end": 7669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7669,
    "end": 7670
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7675,
    "end": 7681
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 7682,
    "end": 7688
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7688,
    "end": 7689
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7689,
    "end": 7690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7690,
    "end": 7691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7691,
    "end": 7692
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 7692,
    "end": 7695
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7695,
    "end": 7696
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7697,
    "end": 7703
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7704,
    "end": 7711
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7711,
    "end": 7712
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7713,
    "end": 7719
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7719,
    "end": 7720
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7721,
    "end": 7728
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7728,
    "end": 7729
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7729,
    "end": 7737
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7737,
    "end": 7738
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7738,
    "end": 7739
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7739,
    "end": 7740
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7740,
    "end": 7741
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7741,
    "end": 7742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7742,
    "end": 7743
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 7744,
    "end": 7752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7752,
    "end": 7753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7754,
    "end": 7755
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 7755,
    "end": 7759
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7759,
    "end": 7760
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7761,
    "end": 7762
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7762,
    "end": 7763
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7764,
    "end": 7769
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7769,
    "end": 7770
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7771,
    "end": 7777
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7777,
    "end": 7778
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7779,
    "end": 7790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7790,
    "end": 7791
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7792,
    "end": 7798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7798,
    "end": 7799
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7800,
    "end": 7802
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7803,
    "end": 7810
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7810,
    "end": 7811
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7811,
    "end": 7819
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7819,
    "end": 7820
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7820,
    "end": 7827
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7827,
    "end": 7828
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7828,
    "end": 7829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7829,
    "end": 7830
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7831,
    "end": 7838
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7838,
    "end": 7839
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7839,
    "end": 7840
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7840,
    "end": 7841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7841,
    "end": 7842
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7842,
    "end": 7843
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7843,
    "end": 7844
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7849,
    "end": 7855
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 7856,
    "end": 7862
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7862,
    "end": 7863
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7863,
    "end": 7864
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7864,
    "end": 7865
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7865,
    "end": 7866
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 7866,
    "end": 7869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7869,
    "end": 7870
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7871,
    "end": 7877
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7878,
    "end": 7885
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7885,
    "end": 7886
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 7887,
    "end": 7893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7893,
    "end": 7894
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7895,
    "end": 7902
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7902,
    "end": 7903
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 7903,
    "end": 7911
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7911,
    "end": 7912
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7912,
    "end": 7913
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7913,
    "end": 7914
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7914,
    "end": 7915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7915,
    "end": 7916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7916,
    "end": 7917
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 7918,
    "end": 7926
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7926,
    "end": 7927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7928,
    "end": 7929
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 7929,
    "end": 7933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7933,
    "end": 7934
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7935,
    "end": 7936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7936,
    "end": 7937
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 7938,
    "end": 7943
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7943,
    "end": 7944
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7945,
    "end": 7951
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7951,
    "end": 7952
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 7953,
    "end": 7964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7964,
    "end": 7965
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7966,
    "end": 7972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7972,
    "end": 7973
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7974,
    "end": 7976
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 7977,
    "end": 7984
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7984,
    "end": 7985
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7985,
    "end": 7986
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 7987,
    "end": 7994
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7994,
    "end": 7995
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 7995,
    "end": 7996
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7996,
    "end": 7997
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7997,
    "end": 7998
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7998,
    "end": 7999
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7999,
    "end": 8000
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8005,
    "end": 8011
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 8012,
    "end": 8018
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8018,
    "end": 8019
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8019,
    "end": 8020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8020,
    "end": 8021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8021,
    "end": 8022
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 8022,
    "end": 8025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8025,
    "end": 8026
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8027,
    "end": 8033
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8034,
    "end": 8041
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8041,
    "end": 8042
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 8043,
    "end": 8049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8049,
    "end": 8050
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8051,
    "end": 8058
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8058,
    "end": 8059
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8059,
    "end": 8067
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8067,
    "end": 8068
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8068,
    "end": 8069
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8069,
    "end": 8070
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8070,
    "end": 8071
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8071,
    "end": 8072
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8072,
    "end": 8073
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 8074,
    "end": 8082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8082,
    "end": 8083
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8084,
    "end": 8085
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 8085,
    "end": 8089
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8089,
    "end": 8090
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8091,
    "end": 8092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8092,
    "end": 8093
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8094,
    "end": 8099
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8099,
    "end": 8100
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8101,
    "end": 8107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8107,
    "end": 8108
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 8109,
    "end": 8120
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8120,
    "end": 8121
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8122,
    "end": 8128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8128,
    "end": 8129
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8130,
    "end": 8132
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8133,
    "end": 8140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8140,
    "end": 8141
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8141,
    "end": 8149
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8149,
    "end": 8150
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8150,
    "end": 8157
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8157,
    "end": 8158
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8158,
    "end": 8159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8159,
    "end": 8160
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8161,
    "end": 8168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8168,
    "end": 8169
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8169,
    "end": 8170
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8170,
    "end": 8171
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8171,
    "end": 8172
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8172,
    "end": 8173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8173,
    "end": 8174
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8179,
    "end": 8185
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 8186,
    "end": 8192
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8192,
    "end": 8193
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8193,
    "end": 8194
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8194,
    "end": 8195
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8195,
    "end": 8196
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 8196,
    "end": 8199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8199,
    "end": 8200
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8201,
    "end": 8207
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8208,
    "end": 8215
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8215,
    "end": 8216
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 8217,
    "end": 8223
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8223,
    "end": 8224
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8225,
    "end": 8232
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8232,
    "end": 8233
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8233,
    "end": 8241
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8241,
    "end": 8242
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8242,
    "end": 8243
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8243,
    "end": 8244
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8244,
    "end": 8245
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8245,
    "end": 8246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8246,
    "end": 8247
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 8248,
    "end": 8256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8258,
    "end": 8259
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 8259,
    "end": 8263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8263,
    "end": 8264
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8265,
    "end": 8266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8266,
    "end": 8267
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8268,
    "end": 8273
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8273,
    "end": 8274
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8275,
    "end": 8281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8281,
    "end": 8282
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 8283,
    "end": 8294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8294,
    "end": 8295
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8296,
    "end": 8302
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8302,
    "end": 8303
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8304,
    "end": 8306
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8307,
    "end": 8314
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8314,
    "end": 8315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8315,
    "end": 8316
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8317,
    "end": 8324
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8324,
    "end": 8325
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8325,
    "end": 8326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8326,
    "end": 8327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8327,
    "end": 8328
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8328,
    "end": 8329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8329,
    "end": 8330
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8335,
    "end": 8341
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 8342,
    "end": 8348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8348,
    "end": 8349
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8349,
    "end": 8350
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8350,
    "end": 8351
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8351,
    "end": 8352
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 8352,
    "end": 8355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8355,
    "end": 8356
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8357,
    "end": 8363
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8364,
    "end": 8371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8371,
    "end": 8372
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 8373,
    "end": 8379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8379,
    "end": 8380
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8381,
    "end": 8382
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8382,
    "end": 8383
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8383,
    "end": 8384
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8384,
    "end": 8385
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 8386,
    "end": 8394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8394,
    "end": 8395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8396,
    "end": 8397
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 8397,
    "end": 8401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8401,
    "end": 8402
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8403,
    "end": 8404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8404,
    "end": 8405
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8406,
    "end": 8411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8411,
    "end": 8412
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8413,
    "end": 8419
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8419,
    "end": 8420
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 8421,
    "end": 8432
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8432,
    "end": 8433
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8434,
    "end": 8440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8440,
    "end": 8441
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8442,
    "end": 8444
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8445,
    "end": 8452
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8452,
    "end": 8453
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8453,
    "end": 8461
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8461,
    "end": 8462
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8462,
    "end": 8469
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8469,
    "end": 8470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8470,
    "end": 8471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8471,
    "end": 8472
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8473,
    "end": 8480
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8480,
    "end": 8481
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8481,
    "end": 8482
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8482,
    "end": 8483
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8483,
    "end": 8484
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8484,
    "end": 8485
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8485,
    "end": 8486
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8491,
    "end": 8497
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 8498,
    "end": 8504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8504,
    "end": 8505
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8505,
    "end": 8506
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8506,
    "end": 8507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8507,
    "end": 8508
  },
  {
    "type": "Identifier",
    "value": "dit",
    "start": 8508,
    "end": 8511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8511,
    "end": 8512
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8513,
    "end": 8519
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8520,
    "end": 8527
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8527,
    "end": 8528
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 8529,
    "end": 8535
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8535,
    "end": 8536
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8537,
    "end": 8538
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8538,
    "end": 8539
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8539,
    "end": 8540
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8540,
    "end": 8541
  },
  {
    "type": "Identifier",
    "value": "filterer",
    "start": 8542,
    "end": 8550
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8550,
    "end": 8551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8552,
    "end": 8553
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 8553,
    "end": 8557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8557,
    "end": 8558
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8559,
    "end": 8560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8560,
    "end": 8561
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 8562,
    "end": 8567
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8567,
    "end": 8568
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8569,
    "end": 8575
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8575,
    "end": 8576
  },
  {
    "type": "Identifier",
    "value": "arrayLength",
    "start": 8577,
    "end": 8588
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8588,
    "end": 8589
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8590,
    "end": 8596
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8596,
    "end": 8597
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8598,
    "end": 8600
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8601,
    "end": 8608
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8608,
    "end": 8609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8609,
    "end": 8610
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8611,
    "end": 8618
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8618,
    "end": 8619
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8619,
    "end": 8620
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8620,
    "end": 8621
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8621,
    "end": 8622
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8622,
    "end": 8623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8623,
    "end": 8624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8625,
    "end": 8626
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8628,
    "end": 8634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 8635,
    "end": 8642
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8643,
    "end": 8652
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 8653,
    "end": 8660
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8661,
    "end": 8662
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8664,
    "end": 8670
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 8671,
    "end": 8680
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8681,
    "end": 8689
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8689,
    "end": 8690
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8690,
    "end": 8691
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8691,
    "end": 8692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8693,
    "end": 8694
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8697,
    "end": 8701
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8701,
    "end": 8702
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8702,
    "end": 8703
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8703,
    "end": 8704
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8704,
    "end": 8705
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 8705,
    "end": 8716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8716,
    "end": 8717
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8718,
    "end": 8719
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8719,
    "end": 8724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8724,
    "end": 8725
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8726,
    "end": 8727
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8727,
    "end": 8728
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8729,
    "end": 8731
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8732,
    "end": 8740
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8740,
    "end": 8741
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8741,
    "end": 8742
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8742,
    "end": 8743
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8743,
    "end": 8744
  },
  {
    "type": "Identifier",
    "value": "onRejected",
    "start": 8745,
    "end": 8755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8755,
    "end": 8756
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8757,
    "end": 8758
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 8758,
    "end": 8763
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8763,
    "end": 8764
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8765,
    "end": 8768
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8768,
    "end": 8769
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8770,
    "end": 8772
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8773,
    "end": 8781
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8781,
    "end": 8782
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8782,
    "end": 8783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8783,
    "end": 8784
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8784,
    "end": 8785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8785,
    "end": 8786
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8787,
    "end": 8795
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8795,
    "end": 8796
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8796,
    "end": 8797
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8797,
    "end": 8798
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8798,
    "end": 8799
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8802,
    "end": 8806
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8806,
    "end": 8807
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8807,
    "end": 8808
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8808,
    "end": 8809
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8809,
    "end": 8810
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 8810,
    "end": 8821
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8821,
    "end": 8822
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8823,
    "end": 8824
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8824,
    "end": 8829
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8829,
    "end": 8830
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8831,
    "end": 8832
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8832,
    "end": 8833
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8834,
    "end": 8836
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8837,
    "end": 8845
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8845,
    "end": 8846
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8846,
    "end": 8847
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8847,
    "end": 8848
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8848,
    "end": 8849
  },
  {
    "type": "Identifier",
    "value": "onRejected",
    "start": 8850,
    "end": 8860
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 8860,
    "end": 8861
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8861,
    "end": 8862
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8863,
    "end": 8864
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 8864,
    "end": 8869
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8869,
    "end": 8870
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8871,
    "end": 8874
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8874,
    "end": 8875
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8876,
    "end": 8878
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8879,
    "end": 8880
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8880,
    "end": 8881
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8881,
    "end": 8882
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8883,
    "end": 8891
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8891,
    "end": 8892
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8892,
    "end": 8893
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8893,
    "end": 8894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8894,
    "end": 8895
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8898,
    "end": 8902
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8902,
    "end": 8903
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8903,
    "end": 8904
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8904,
    "end": 8905
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8905,
    "end": 8906
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 8906,
    "end": 8917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8917,
    "end": 8918
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8919,
    "end": 8920
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 8920,
    "end": 8925
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8925,
    "end": 8926
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8927,
    "end": 8928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8928,
    "end": 8929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8930,
    "end": 8932
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8933,
    "end": 8934
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8934,
    "end": 8935
  },
  {
    "type": "Identifier",
    "value": "onRejected",
    "start": 8936,
    "end": 8946
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8946,
    "end": 8947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8948,
    "end": 8949
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 8949,
    "end": 8954
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8954,
    "end": 8955
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 8956,
    "end": 8959
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8959,
    "end": 8960
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8961,
    "end": 8963
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8964,
    "end": 8972
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8972,
    "end": 8973
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8973,
    "end": 8974
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8974,
    "end": 8975
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8975,
    "end": 8976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8976,
    "end": 8977
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 8978,
    "end": 8986
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8986,
    "end": 8987
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8987,
    "end": 8988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8988,
    "end": 8989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8989,
    "end": 8990
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 8993,
    "end": 8997
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8997,
    "end": 8998
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 8998,
    "end": 8999
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8999,
    "end": 9000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9000,
    "end": 9001
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 9001,
    "end": 9012
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9012,
    "end": 9013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9013,
    "end": 9014
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9015,
    "end": 9016
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 9016,
    "end": 9021
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9021,
    "end": 9022
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 9023,
    "end": 9024
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9024,
    "end": 9025
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9026,
    "end": 9028
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 9029,
    "end": 9030
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9030,
    "end": 9031
  },
  {
    "type": "Identifier",
    "value": "onRejected",
    "start": 9032,
    "end": 9042
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 9042,
    "end": 9043
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9043,
    "end": 9044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9045,
    "end": 9046
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 9046,
    "end": 9051
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9051,
    "end": 9052
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9053,
    "end": 9056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9056,
    "end": 9057
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9058,
    "end": 9060
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 9061,
    "end": 9062
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9062,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9063,
    "end": 9064
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 9065,
    "end": 9073
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9073,
    "end": 9074
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 9074,
    "end": 9075
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9075,
    "end": 9076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9076,
    "end": 9077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9079,
    "end": 9080
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9082,
    "end": 9083
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 9085,
    "end": 9094
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9095,
    "end": 9098
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9099,
    "end": 9100
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 9105,
    "end": 9106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9106,
    "end": 9107
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9108,
    "end": 9114
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9114,
    "end": 9115
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 9120,
    "end": 9121
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9121,
    "end": 9122
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9123,
    "end": 9129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9129,
    "end": 9130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9131,
    "end": 9132
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9133,
    "end": 9140
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9141,
    "end": 9144
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9145,
    "end": 9146
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9146,
    "end": 9147
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9148,
    "end": 9151
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9151,
    "end": 9152
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9153,
    "end": 9160
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9161,
    "end": 9164
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 9165,
    "end": 9168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9168,
    "end": 9169
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 9170,
    "end": 9173
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9173,
    "end": 9174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9174,
    "end": 9175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9175,
    "end": 9176
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9177,
    "end": 9184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9185,
    "end": 9188
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9189,
    "end": 9192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9192,
    "end": 9193
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9194,
    "end": 9197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9197,
    "end": 9198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 9199,
    "end": 9206
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 9207,
    "end": 9210
  },
  {
    "type": "Identifier",
    "value": "fooProm",
    "start": 9211,
    "end": 9218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9218,
    "end": 9219
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9220,
    "end": 9227
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 9227,
    "end": 9228
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 9228,
    "end": 9231
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 9231,
    "end": 9232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9232,
    "end": 9233
  },
  {
    "type": "Identifier",
    "value": "fooProm",
    "start": 9235,
    "end": 9242
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9243,
    "end": 9244
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9245,
    "end": 9252
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9252,
    "end": 9253
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 9253,
    "end": 9256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9256,
    "end": 9257
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9257,
    "end": 9264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9264,
    "end": 9265
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9266,
    "end": 9267
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9267,
    "end": 9268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9269,
    "end": 9271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9272,
    "end": 9273
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9275,
    "end": 9281
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9282,
    "end": 9285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9285,
    "end": 9286
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9287,
    "end": 9288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9288,
    "end": 9289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9289,
    "end": 9290
  },
  {
    "type": "Identifier",
    "value": "fooProm",
    "start": 9291,
    "end": 9298
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9299,
    "end": 9300
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9301,
    "end": 9308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9308,
    "end": 9309
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 9309,
    "end": 9312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9312,
    "end": 9313
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9313,
    "end": 9320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9320,
    "end": 9321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9322,
    "end": 9323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9323,
    "end": 9324
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9325,
    "end": 9327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9328,
    "end": 9329
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9331,
    "end": 9337
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9338,
    "end": 9341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9341,
    "end": 9342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9343,
    "end": 9344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9344,
    "end": 9345
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 9346,
    "end": 9349
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9349,
    "end": 9350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9350,
    "end": 9351
  },
  {
    "type": "Identifier",
    "value": "fooProm",
    "start": 9352,
    "end": 9359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9360,
    "end": 9361
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9362,
    "end": 9369
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9369,
    "end": 9370
  },
  {
    "type": "Identifier",
    "value": "try",
    "start": 9370,
    "end": 9373
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9373,
    "end": 9374
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 9374,
    "end": 9381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9381,
    "end": 9382
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9383,
    "end": 9384
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9384,
    "end": 9385
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9386,
    "end": 9388
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9389,
    "end": 9390
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9392,
    "end": 9398
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9399,
    "end": 9402
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9402,
    "end": 9403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9404,
    "end": 9405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9405,
    "end": 9406
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 9407,
    "end": 9410
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9410,
    "end": 9411
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9412,
    "end": 9413
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9413,
    "end": 9414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9414,
    "end": 9415
  }
]
```
