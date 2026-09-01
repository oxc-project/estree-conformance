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
        "start": 108,
        "end": 112
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
              "start": 115,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              },
              "start": 118,
              "end": 126
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
            "start": 115,
            "end": 127
          }
        ],
        "start": 113,
        "end": 129
      },
      "abstract": false,
      "declare": false,
      "start": 102,
      "end": 129
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
        "start": 136,
        "end": 143
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 156
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
              "start": 159,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              },
              "start": 162,
              "end": 170
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
            "start": 159,
            "end": 171
          }
        ],
        "start": 157,
        "end": 173
      },
      "abstract": false,
      "declare": false,
      "start": 130,
      "end": 173
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
        "start": 180,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 204
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
              "start": 207,
              "end": 210
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              },
              "start": 210,
              "end": 218
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
            "start": 207,
            "end": 219
          }
        ],
        "start": 205,
        "end": 221
      },
      "abstract": false,
      "declare": false,
      "start": 174,
      "end": 221
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
        "start": 228,
        "end": 240
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 253
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
              "start": 256,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              },
              "start": 260,
              "end": 268
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
            "start": 256,
            "end": 269
          }
        ],
        "start": 254,
        "end": 271
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 271
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 294
      },
      "generator": false,
      "async": false,
      "declare": true,
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
                      "start": 303,
                      "end": 304
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 303,
                    "end": 304
                  }
                ],
                "start": 302,
                "end": 305
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
                        "start": 309,
                        "end": 310
                      },
                      "typeArguments": null,
                      "start": 309,
                      "end": 310
                    },
                    "start": 307,
                    "end": 310
                  },
                  "start": 306,
                  "end": 310
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
                      "start": 315,
                      "end": 316
                    },
                    "typeArguments": null,
                    "start": 315,
                    "end": 316
                  },
                  "start": 315,
                  "end": 318
                },
                "start": 312,
                "end": 318
              },
              "start": 298,
              "end": 318
            },
            "start": 296,
            "end": 318
          },
          "start": 295,
          "end": 318
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 273,
      "end": 320
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 342
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 346,
              "end": 349
            },
            "start": 344,
            "end": 349
          },
          "start": 343,
          "end": 349
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 352,
          "end": 355
        },
        "start": 350,
        "end": 355
      },
      "body": null,
      "expression": false,
      "start": 321,
      "end": 356
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 379
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                      "start": 389,
                      "end": 390
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 389,
                    "end": 390
                  }
                ],
                "start": 388,
                "end": 391
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
                        "start": 395,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 395,
                      "end": 396
                    },
                    "start": 393,
                    "end": 396
                  },
                  "start": 392,
                  "end": 396
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 401,
                    "end": 407
                  },
                  "start": 401,
                  "end": 409
                },
                "start": 398,
                "end": 409
              },
              "start": 384,
              "end": 409
            },
            "start": 382,
            "end": 409
          },
          "start": 380,
          "end": 409
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 358,
      "end": 411
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 429,
        "end": 433
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 437,
              "end": 440
            },
            "start": 435,
            "end": 440
          },
          "start": 434,
          "end": 440
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 443,
          "end": 446
        },
        "start": 441,
        "end": 446
      },
      "body": null,
      "expression": false,
      "start": 412,
      "end": 447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 470
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                      "start": 480,
                      "end": 481
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 480,
                    "end": 481
                  }
                ],
                "start": 479,
                "end": 482
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
                        "start": 486,
                        "end": 487
                      },
                      "typeArguments": null,
                      "start": 486,
                      "end": 487
                    },
                    "start": 484,
                    "end": 487
                  },
                  "start": 483,
                  "end": 487
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 492,
                  "end": 496
                },
                "start": 489,
                "end": 496
              },
              "start": 475,
              "end": 496
            },
            "start": 473,
            "end": 496
          },
          "start": 471,
          "end": 496
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 449,
      "end": 498
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 524,
              "end": 527
            },
            "start": 522,
            "end": 527
          },
          "start": 521,
          "end": 527
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 530,
          "end": 533
        },
        "start": 528,
        "end": 533
      },
      "body": null,
      "expression": false,
      "start": 499,
      "end": 534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 557
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a4",
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
                      "start": 567,
                      "end": 568
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 567,
                    "end": 568
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 571
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 570,
                    "end": 571
                  }
                ],
                "start": 566,
                "end": 572
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
                        "start": 576,
                        "end": 577
                      },
                      "typeArguments": null,
                      "start": 576,
                      "end": 577
                    },
                    "start": 574,
                    "end": 577
                  },
                  "start": 573,
                  "end": 577
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
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 583
                    },
                    "start": 580,
                    "end": 583
                  },
                  "start": 579,
                  "end": 583
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                },
                "start": 585,
                "end": 594
              },
              "start": 562,
              "end": 594
            },
            "start": 560,
            "end": 594
          },
          "start": 558,
          "end": 594
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 536,
      "end": 596
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 618
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 622,
              "end": 625
            },
            "start": 620,
            "end": 625
          },
          "start": 619,
          "end": 625
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 628,
          "end": 631
        },
        "start": 626,
        "end": 631
      },
      "body": null,
      "expression": false,
      "start": 597,
      "end": 632
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 651,
        "end": 655
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a5",
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
                      "start": 665,
                      "end": 666
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 665,
                    "end": 666
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 669
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 668,
                    "end": 669
                  }
                ],
                "start": 664,
                "end": 670
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
                                "start": 684,
                                "end": 685
                              },
                              "typeArguments": null,
                              "start": 684,
                              "end": 685
                            },
                            "start": 682,
                            "end": 685
                          },
                          "start": 679,
                          "end": 685
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
                            "start": 690,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 690,
                          "end": 691
                        },
                        "start": 687,
                        "end": 691
                      },
                      "start": 674,
                      "end": 691
                    },
                    "start": 672,
                    "end": 691
                  },
                  "start": 671,
                  "end": 691
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
                    "start": 696,
                    "end": 697
                  },
                  "typeArguments": null,
                  "start": 696,
                  "end": 697
                },
                "start": 693,
                "end": 697
              },
              "start": 660,
              "end": 697
            },
            "start": 658,
            "end": 697
          },
          "start": 656,
          "end": 697
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 634,
      "end": 699
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 717,
        "end": 721
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            },
            "start": 723,
            "end": 728
          },
          "start": 722,
          "end": 728
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 731,
          "end": 734
        },
        "start": 729,
        "end": 734
      },
      "body": null,
      "expression": false,
      "start": 700,
      "end": 735
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 758
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a6",
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
                      "start": 768,
                      "end": 769
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 778,
                        "end": 782
                      },
                      "typeArguments": null,
                      "start": 778,
                      "end": 782
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 768,
                    "end": 782
                  }
                ],
                "start": 767,
                "end": 783
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
                                "start": 797,
                                "end": 798
                              },
                              "typeArguments": null,
                              "start": 797,
                              "end": 798
                            },
                            "start": 795,
                            "end": 798
                          },
                          "start": 792,
                          "end": 798
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
                            "start": 803,
                            "end": 810
                          },
                          "typeArguments": null,
                          "start": 803,
                          "end": 810
                        },
                        "start": 800,
                        "end": 810
                      },
                      "start": 787,
                      "end": 810
                    },
                    "start": 785,
                    "end": 810
                  },
                  "start": 784,
                  "end": 810
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
                    "start": 815,
                    "end": 816
                  },
                  "typeArguments": null,
                  "start": 815,
                  "end": 816
                },
                "start": 812,
                "end": 816
              },
              "start": 763,
              "end": 816
            },
            "start": 761,
            "end": 816
          },
          "start": 759,
          "end": 816
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 737,
      "end": 818
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 836,
        "end": 840
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 844,
              "end": 847
            },
            "start": 842,
            "end": 847
          },
          "start": 841,
          "end": 847
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 850,
          "end": 853
        },
        "start": 848,
        "end": 853
      },
      "body": null,
      "expression": false,
      "start": 819,
      "end": 854
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 873,
        "end": 878
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a11",
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
                      "start": 889,
                      "end": 890
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 889,
                    "end": 890
                  }
                ],
                "start": 888,
                "end": 891
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
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 897,
                            "end": 900
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
                                "start": 902,
                                "end": 903
                              },
                              "typeArguments": null,
                              "start": 902,
                              "end": 903
                            },
                            "start": 900,
                            "end": 903
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 897,
                          "end": 903
                        }
                      ],
                      "start": 895,
                      "end": 905
                    },
                    "start": 893,
                    "end": 905
                  },
                  "start": 892,
                  "end": 905
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
                            "start": 912,
                            "end": 915
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
                                "start": 917,
                                "end": 918
                              },
                              "typeArguments": null,
                              "start": 917,
                              "end": 918
                            },
                            "start": 915,
                            "end": 918
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 912,
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 925,
                                "end": 926
                              },
                              "typeArguments": null,
                              "start": 925,
                              "end": 926
                            },
                            "start": 923,
                            "end": 926
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 920,
                          "end": 926
                        }
                      ],
                      "start": 910,
                      "end": 928
                    },
                    "start": 908,
                    "end": 928
                  },
                  "start": 907,
                  "end": 928
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
                    "start": 933,
                    "end": 937
                  },
                  "typeArguments": null,
                  "start": 933,
                  "end": 937
                },
                "start": 930,
                "end": 937
              },
              "start": 884,
              "end": 937
            },
            "start": 882,
            "end": 937
          },
          "start": 879,
          "end": 937
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 856,
      "end": 939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 957,
        "end": 962
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 966,
              "end": 969
            },
            "start": 964,
            "end": 969
          },
          "start": 963,
          "end": 969
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 972,
          "end": 975
        },
        "start": 970,
        "end": 975
      },
      "body": null,
      "expression": false,
      "start": 940,
      "end": 976
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 995,
        "end": 1000
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a15",
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
                      "start": 1011,
                      "end": 1012
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1011,
                    "end": 1012
                  }
                ],
                "start": 1010,
                "end": 1013
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
                            "start": 1019,
                            "end": 1020
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
                                "start": 1022,
                                "end": 1023
                              },
                              "typeArguments": null,
                              "start": 1022,
                              "end": 1023
                            },
                            "start": 1020,
                            "end": 1023
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1019,
                          "end": 1024
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
                            "start": 1025,
                            "end": 1026
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
                                "start": 1028,
                                "end": 1029
                              },
                              "typeArguments": null,
                              "start": 1028,
                              "end": 1029
                            },
                            "start": 1026,
                            "end": 1029
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1025,
                          "end": 1029
                        }
                      ],
                      "start": 1017,
                      "end": 1031
                    },
                    "start": 1015,
                    "end": 1031
                  },
                  "start": 1014,
                  "end": 1031
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
                      "start": 1036,
                      "end": 1037
                    },
                    "typeArguments": null,
                    "start": 1036,
                    "end": 1037
                  },
                  "start": 1036,
                  "end": 1039
                },
                "start": 1033,
                "end": 1039
              },
              "start": 1006,
              "end": 1039
            },
            "start": 1004,
            "end": 1039
          },
          "start": 1001,
          "end": 1039
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 978,
      "end": 1041
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1064
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1068,
              "end": 1071
            },
            "start": 1066,
            "end": 1071
          },
          "start": 1065,
          "end": 1071
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1074,
          "end": 1077
        },
        "start": 1072,
        "end": 1077
      },
      "body": null,
      "expression": false,
      "start": 1042,
      "end": 1078
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1102
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a16",
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
                      "start": 1113,
                      "end": 1114
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1123,
                        "end": 1127
                      },
                      "typeArguments": null,
                      "start": 1123,
                      "end": 1127
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1113,
                    "end": 1127
                  }
                ],
                "start": 1112,
                "end": 1128
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
                            "start": 1134,
                            "end": 1135
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
                                "start": 1137,
                                "end": 1138
                              },
                              "typeArguments": null,
                              "start": 1137,
                              "end": 1138
                            },
                            "start": 1135,
                            "end": 1138
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1134,
                          "end": 1139
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
                            "start": 1140,
                            "end": 1141
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
                                "start": 1143,
                                "end": 1144
                              },
                              "typeArguments": null,
                              "start": 1143,
                              "end": 1144
                            },
                            "start": 1141,
                            "end": 1144
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1140,
                          "end": 1144
                        }
                      ],
                      "start": 1132,
                      "end": 1146
                    },
                    "start": 1130,
                    "end": 1146
                  },
                  "start": 1129,
                  "end": 1146
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
                      "start": 1151,
                      "end": 1152
                    },
                    "typeArguments": null,
                    "start": 1151,
                    "end": 1152
                  },
                  "start": 1151,
                  "end": 1154
                },
                "start": 1148,
                "end": 1154
              },
              "start": 1108,
              "end": 1154
            },
            "start": 1106,
            "end": 1154
          },
          "start": 1103,
          "end": 1154
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1080,
      "end": 1156
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1174,
        "end": 1179
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1183,
              "end": 1186
            },
            "start": 1181,
            "end": 1186
          },
          "start": 1180,
          "end": 1186
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1189,
          "end": 1192
        },
        "start": 1187,
        "end": 1192
      },
      "body": null,
      "expression": false,
      "start": 1157,
      "end": 1193
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
        "end": 1217
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                          "start": 1234,
                          "end": 1235
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1244,
                            "end": 1251
                          },
                          "typeArguments": null,
                          "start": 1244,
                          "end": 1251
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1234,
                        "end": 1251
                      }
                    ],
                    "start": 1233,
                    "end": 1252
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
                                    "start": 1264,
                                    "end": 1265
                                  },
                                  "typeArguments": null,
                                  "start": 1264,
                                  "end": 1265
                                },
                                "start": 1262,
                                "end": 1265
                              },
                              "start": 1261,
                              "end": 1265
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
                                "start": 1270,
                                "end": 1271
                              },
                              "typeArguments": null,
                              "start": 1270,
                              "end": 1271
                            },
                            "start": 1267,
                            "end": 1271
                          },
                          "start": 1256,
                          "end": 1271
                        },
                        "start": 1254,
                        "end": 1271
                      },
                      "start": 1253,
                      "end": 1271
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
                          "start": 1274,
                          "end": 1275
                        },
                        "typeArguments": null,
                        "start": 1274,
                        "end": 1275
                      },
                      "start": 1274,
                      "end": 1277
                    },
                    "start": 1272,
                    "end": 1277
                  },
                  "start": 1229,
                  "end": 1278
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
                          "start": 1288,
                          "end": 1289
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Base",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1298,
                            "end": 1302
                          },
                          "typeArguments": null,
                          "start": 1298,
                          "end": 1302
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 1288,
                        "end": 1302
                      }
                    ],
                    "start": 1287,
                    "end": 1303
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
                                    "start": 1315,
                                    "end": 1316
                                  },
                                  "typeArguments": null,
                                  "start": 1315,
                                  "end": 1316
                                },
                                "start": 1313,
                                "end": 1316
                              },
                              "start": 1312,
                              "end": 1316
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
                                "start": 1321,
                                "end": 1322
                              },
                              "typeArguments": null,
                              "start": 1321,
                              "end": 1322
                            },
                            "start": 1318,
                            "end": 1322
                          },
                          "start": 1307,
                          "end": 1322
                        },
                        "start": 1305,
                        "end": 1322
                      },
                      "start": 1304,
                      "end": 1322
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
                          "start": 1325,
                          "end": 1326
                        },
                        "typeArguments": null,
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1325,
                      "end": 1328
                    },
                    "start": 1323,
                    "end": 1328
                  },
                  "start": 1283,
                  "end": 1329
                }
              ],
              "start": 1223,
              "end": 1339
            },
            "start": 1221,
            "end": 1339
          },
          "start": 1218,
          "end": 1339
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1195,
      "end": 1341
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1359,
        "end": 1364
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1368,
              "end": 1371
            },
            "start": 1366,
            "end": 1371
          },
          "start": 1365,
          "end": 1371
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1374,
          "end": 1377
        },
        "start": 1372,
        "end": 1377
      },
      "body": null,
      "expression": false,
      "start": 1342,
      "end": 1378
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1402
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
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
                                      "start": 1437,
                                      "end": 1438
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1447,
                                        "end": 1454
                                      },
                                      "typeArguments": null,
                                      "start": 1447,
                                      "end": 1454
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1437,
                                    "end": 1454
                                  }
                                ],
                                "start": 1436,
                                "end": 1455
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
                                        "start": 1459,
                                        "end": 1460
                                      },
                                      "typeArguments": null,
                                      "start": 1459,
                                      "end": 1460
                                    },
                                    "start": 1457,
                                    "end": 1460
                                  },
                                  "start": 1456,
                                  "end": 1460
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
                                    "start": 1463,
                                    "end": 1464
                                  },
                                  "typeArguments": null,
                                  "start": 1463,
                                  "end": 1464
                                },
                                "start": 1461,
                                "end": 1464
                              },
                              "start": 1432,
                              "end": 1465
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
                                      "start": 1479,
                                      "end": 1480
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1489,
                                        "end": 1493
                                      },
                                      "typeArguments": null,
                                      "start": 1489,
                                      "end": 1493
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1479,
                                    "end": 1493
                                  }
                                ],
                                "start": 1478,
                                "end": 1494
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
                                  "start": 1495,
                                  "end": 1499
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
                                    "start": 1502,
                                    "end": 1503
                                  },
                                  "typeArguments": null,
                                  "start": 1502,
                                  "end": 1503
                                },
                                "start": 1500,
                                "end": 1503
                              },
                              "start": 1474,
                              "end": 1504
                            }
                          ],
                          "start": 1422,
                          "end": 1510
                        },
                        "start": 1420,
                        "end": 1510
                      },
                      "start": 1419,
                      "end": 1510
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1513,
                        "end": 1516
                      },
                      "start": 1513,
                      "end": 1518
                    },
                    "start": 1511,
                    "end": 1518
                  },
                  "start": 1414,
                  "end": 1519
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
                                      "start": 1547,
                                      "end": 1548
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Derived2",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1557,
                                        "end": 1565
                                      },
                                      "typeArguments": null,
                                      "start": 1557,
                                      "end": 1565
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1547,
                                    "end": 1565
                                  }
                                ],
                                "start": 1546,
                                "end": 1566
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
                                        "start": 1570,
                                        "end": 1571
                                      },
                                      "typeArguments": null,
                                      "start": 1570,
                                      "end": 1571
                                    },
                                    "start": 1568,
                                    "end": 1571
                                  },
                                  "start": 1567,
                                  "end": 1571
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
                                    "start": 1574,
                                    "end": 1575
                                  },
                                  "typeArguments": null,
                                  "start": 1574,
                                  "end": 1575
                                },
                                "start": 1572,
                                "end": 1575
                              },
                              "start": 1542,
                              "end": 1576
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
                                      "start": 1590,
                                      "end": 1591
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Base",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1600,
                                        "end": 1604
                                      },
                                      "typeArguments": null,
                                      "start": 1600,
                                      "end": 1604
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 1590,
                                    "end": 1604
                                  }
                                ],
                                "start": 1589,
                                "end": 1605
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
                                        "start": 1609,
                                        "end": 1610
                                      },
                                      "typeArguments": null,
                                      "start": 1609,
                                      "end": 1610
                                    },
                                    "start": 1607,
                                    "end": 1610
                                  },
                                  "start": 1606,
                                  "end": 1610
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
                                    "start": 1613,
                                    "end": 1614
                                  },
                                  "typeArguments": null,
                                  "start": 1613,
                                  "end": 1614
                                },
                                "start": 1611,
                                "end": 1614
                              },
                              "start": 1585,
                              "end": 1615
                            }
                          ],
                          "start": 1532,
                          "end": 1621
                        },
                        "start": 1530,
                        "end": 1621
                      },
                      "start": 1529,
                      "end": 1621
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1624,
                        "end": 1627
                      },
                      "start": 1624,
                      "end": 1629
                    },
                    "start": 1622,
                    "end": 1629
                  },
                  "start": 1524,
                  "end": 1630
                }
              ],
              "start": 1408,
              "end": 1632
            },
            "start": 1406,
            "end": 1632
          },
          "start": 1403,
          "end": 1632
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1380,
      "end": 1634
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1652,
        "end": 1657
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 1661,
              "end": 1664
            },
            "start": 1659,
            "end": 1664
          },
          "start": 1658,
          "end": 1664
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1667,
          "end": 1670
        },
        "start": 1665,
        "end": 1670
      },
      "body": null,
      "expression": false,
      "start": 1635,
      "end": 1671
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
            "name": "r1arg",
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
                        "start": 1689,
                        "end": 1690
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1689,
                      "end": 1690
                    }
                  ],
                  "start": 1688,
                  "end": 1691
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
                          "start": 1695,
                          "end": 1696
                        },
                        "typeArguments": null,
                        "start": 1695,
                        "end": 1696
                      },
                      "start": 1693,
                      "end": 1696
                    },
                    "start": 1692,
                    "end": 1696
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
                        "start": 1701,
                        "end": 1702
                      },
                      "typeArguments": null,
                      "start": 1701,
                      "end": 1702
                    },
                    "start": 1701,
                    "end": 1704
                  },
                  "start": 1698,
                  "end": 1704
                },
                "start": 1684,
                "end": 1704
              },
              "start": 1682,
              "end": 1704
            },
            "start": 1677,
            "end": 1704
          },
          "init": null,
          "definite": false,
          "start": 1677,
          "end": 1704
        }
      ],
      "declare": false,
      "start": 1673,
      "end": 1705
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
            "name": "r1arg2",
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
                        "start": 1723,
                        "end": 1724
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1723,
                      "end": 1724
                    }
                  ],
                  "start": 1722,
                  "end": 1725
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
                          "start": 1729,
                          "end": 1730
                        },
                        "typeArguments": null,
                        "start": 1729,
                        "end": 1730
                      },
                      "start": 1727,
                      "end": 1730
                    },
                    "start": 1726,
                    "end": 1730
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
                        "start": 1735,
                        "end": 1736
                      },
                      "typeArguments": null,
                      "start": 1735,
                      "end": 1736
                    },
                    "start": 1735,
                    "end": 1738
                  },
                  "start": 1732,
                  "end": 1738
                },
                "start": 1718,
                "end": 1738
              },
              "start": 1716,
              "end": 1738
            },
            "start": 1710,
            "end": 1738
          },
          "init": null,
          "definite": false,
          "start": 1710,
          "end": 1738
        }
      ],
      "declare": false,
      "start": 1706,
      "end": 1739
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
            "name": "r1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1744,
            "end": 1746
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1749,
              "end": 1753
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1754,
                "end": 1759
              }
            ],
            "optional": false,
            "start": 1749,
            "end": 1760
          },
          "definite": false,
          "start": 1744,
          "end": 1760
        }
      ],
      "declare": false,
      "start": 1740,
      "end": 1761
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
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1766,
            "end": 1769
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1773,
                "end": 1778
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1780,
                "end": 1786
              }
            ],
            "start": 1772,
            "end": 1787
          },
          "definite": false,
          "start": 1766,
          "end": 1787
        }
      ],
      "declare": false,
      "start": 1762,
      "end": 1788
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1793,
            "end": 1796
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1800,
                "end": 1806
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1813
              }
            ],
            "start": 1799,
            "end": 1814
          },
          "definite": false,
          "start": 1793,
          "end": 1814
        }
      ],
      "declare": false,
      "start": 1789,
      "end": 1815
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
            "name": "r2arg",
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
                        "start": 1833,
                        "end": 1834
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1833,
                      "end": 1834
                    }
                  ],
                  "start": 1832,
                  "end": 1835
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
                          "start": 1839,
                          "end": 1840
                        },
                        "typeArguments": null,
                        "start": 1839,
                        "end": 1840
                      },
                      "start": 1837,
                      "end": 1840
                    },
                    "start": 1836,
                    "end": 1840
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1845,
                      "end": 1851
                    },
                    "start": 1845,
                    "end": 1853
                  },
                  "start": 1842,
                  "end": 1853
                },
                "start": 1828,
                "end": 1853
              },
              "start": 1826,
              "end": 1853
            },
            "start": 1821,
            "end": 1853
          },
          "init": null,
          "definite": false,
          "start": 1821,
          "end": 1853
        }
      ],
      "declare": false,
      "start": 1817,
      "end": 1854
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
            "name": "r2arg2",
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
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1884,
                      "end": 1890
                    },
                    "start": 1884,
                    "end": 1892
                  },
                  "start": 1881,
                  "end": 1892
                },
                "start": 1867,
                "end": 1892
              },
              "start": 1865,
              "end": 1892
            },
            "start": 1859,
            "end": 1892
          },
          "init": null,
          "definite": false,
          "start": 1859,
          "end": 1892
        }
      ],
      "declare": false,
      "start": 1855,
      "end": 1893
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
            "start": 1898,
            "end": 1900
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1903,
              "end": 1907
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1908,
                "end": 1913
              }
            ],
            "optional": false,
            "start": 1903,
            "end": 1914
          },
          "definite": false,
          "start": 1898,
          "end": 1914
        }
      ],
      "declare": false,
      "start": 1894,
      "end": 1915
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
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1920,
            "end": 1923
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1932
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1934,
                "end": 1940
              }
            ],
            "start": 1926,
            "end": 1941
          },
          "definite": false,
          "start": 1920,
          "end": 1941
        }
      ],
      "declare": false,
      "start": 1916,
      "end": 1942
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1947,
            "end": 1950
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1954,
                "end": 1960
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 1962,
                "end": 1967
              }
            ],
            "start": 1953,
            "end": 1968
          },
          "definite": false,
          "start": 1947,
          "end": 1968
        }
      ],
      "declare": false,
      "start": 1943,
      "end": 1969
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
            "name": "r3arg",
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
                        "start": 1987,
                        "end": 1988
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1987,
                      "end": 1988
                    }
                  ],
                  "start": 1986,
                  "end": 1989
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
                          "start": 1993,
                          "end": 1994
                        },
                        "typeArguments": null,
                        "start": 1993,
                        "end": 1994
                      },
                      "start": 1991,
                      "end": 1994
                    },
                    "start": 1990,
                    "end": 1994
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
                      "start": 1999,
                      "end": 2000
                    },
                    "typeArguments": null,
                    "start": 1999,
                    "end": 2000
                  },
                  "start": 1996,
                  "end": 2000
                },
                "start": 1982,
                "end": 2000
              },
              "start": 1980,
              "end": 2000
            },
            "start": 1975,
            "end": 2000
          },
          "init": null,
          "definite": false,
          "start": 1975,
          "end": 2000
        }
      ],
      "declare": false,
      "start": 1971,
      "end": 2001
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
            "name": "r3arg2",
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
                        "start": 2019,
                        "end": 2020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2019,
                      "end": 2020
                    }
                  ],
                  "start": 2018,
                  "end": 2021
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
                          "start": 2025,
                          "end": 2026
                        },
                        "typeArguments": null,
                        "start": 2025,
                        "end": 2026
                      },
                      "start": 2023,
                      "end": 2026
                    },
                    "start": 2022,
                    "end": 2026
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2031,
                    "end": 2035
                  },
                  "start": 2028,
                  "end": 2035
                },
                "start": 2014,
                "end": 2035
              },
              "start": 2012,
              "end": 2035
            },
            "start": 2006,
            "end": 2035
          },
          "init": null,
          "definite": false,
          "start": 2006,
          "end": 2035
        }
      ],
      "declare": false,
      "start": 2002,
      "end": 2036
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 2041,
            "end": 2043
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2046,
              "end": 2050
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2051,
                "end": 2056
              }
            ],
            "optional": false,
            "start": 2046,
            "end": 2057
          },
          "definite": false,
          "start": 2041,
          "end": 2057
        }
      ],
      "declare": false,
      "start": 2037,
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
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2063,
            "end": 2066
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2070,
                "end": 2075
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2077,
                "end": 2083
              }
            ],
            "start": 2069,
            "end": 2084
          },
          "definite": false,
          "start": 2063,
          "end": 2084
        }
      ],
      "declare": false,
      "start": 2059,
      "end": 2085
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2090,
            "end": 2093
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2097,
                "end": 2103
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2105,
                "end": 2110
              }
            ],
            "start": 2096,
            "end": 2111
          },
          "definite": false,
          "start": 2090,
          "end": 2111
        }
      ],
      "declare": false,
      "start": 2086,
      "end": 2112
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
            "name": "r4arg",
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
                        "start": 2130,
                        "end": 2131
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2130,
                      "end": 2131
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2133,
                        "end": 2134
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2133,
                      "end": 2134
                    }
                  ],
                  "start": 2129,
                  "end": 2135
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
                          "start": 2145,
                          "end": 2146
                        },
                        "typeArguments": null,
                        "start": 2145,
                        "end": 2146
                      },
                      "start": 2143,
                      "end": 2146
                    },
                    "start": 2142,
                    "end": 2146
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2151,
                    "end": 2157
                  },
                  "start": 2148,
                  "end": 2157
                },
                "start": 2125,
                "end": 2157
              },
              "start": 2123,
              "end": 2157
            },
            "start": 2118,
            "end": 2157
          },
          "init": null,
          "definite": false,
          "start": 2118,
          "end": 2157
        }
      ],
      "declare": false,
      "start": 2114,
      "end": 2158
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
            "name": "r4arg2",
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
                        "start": 2176,
                        "end": 2177
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2176,
                      "end": 2177
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2179,
                        "end": 2180
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2179,
                      "end": 2180
                    }
                  ],
                  "start": 2175,
                  "end": 2181
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
                          "start": 2185,
                          "end": 2186
                        },
                        "typeArguments": null,
                        "start": 2185,
                        "end": 2186
                      },
                      "start": 2183,
                      "end": 2186
                    },
                    "start": 2182,
                    "end": 2186
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
                          "start": 2191,
                          "end": 2192
                        },
                        "typeArguments": null,
                        "start": 2191,
                        "end": 2192
                      },
                      "start": 2189,
                      "end": 2192
                    },
                    "start": 2188,
                    "end": 2192
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2197,
                    "end": 2203
                  },
                  "start": 2194,
                  "end": 2203
                },
                "start": 2171,
                "end": 2203
              },
              "start": 2169,
              "end": 2203
            },
            "start": 2163,
            "end": 2203
          },
          "init": null,
          "definite": false,
          "start": 2163,
          "end": 2203
        }
      ],
      "declare": false,
      "start": 2159,
      "end": 2204
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
            "start": 2209,
            "end": 2211
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2214,
              "end": 2218
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2219,
                "end": 2224
              }
            ],
            "optional": false,
            "start": 2214,
            "end": 2225
          },
          "definite": false,
          "start": 2209,
          "end": 2225
        }
      ],
      "declare": false,
      "start": 2205,
      "end": 2226
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
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2231,
            "end": 2234
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2238,
                "end": 2243
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2245,
                "end": 2251
              }
            ],
            "start": 2237,
            "end": 2252
          },
          "definite": false,
          "start": 2231,
          "end": 2252
        }
      ],
      "declare": false,
      "start": 2227,
      "end": 2253
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
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2258,
            "end": 2261
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2265,
                "end": 2271
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2273,
                "end": 2278
              }
            ],
            "start": 2264,
            "end": 2279
          },
          "definite": false,
          "start": 2258,
          "end": 2279
        }
      ],
      "declare": false,
      "start": 2254,
      "end": 2280
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
            "name": "r5arg",
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
                        "start": 2298,
                        "end": 2299
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2298,
                      "end": 2299
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2301,
                        "end": 2302
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2301,
                      "end": 2302
                    }
                  ],
                  "start": 2297,
                  "end": 2303
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
                                  "start": 2317,
                                  "end": 2318
                                },
                                "typeArguments": null,
                                "start": 2317,
                                "end": 2318
                              },
                              "start": 2315,
                              "end": 2318
                            },
                            "start": 2312,
                            "end": 2318
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
                              "start": 2323,
                              "end": 2324
                            },
                            "typeArguments": null,
                            "start": 2323,
                            "end": 2324
                          },
                          "start": 2320,
                          "end": 2324
                        },
                        "start": 2307,
                        "end": 2324
                      },
                      "start": 2305,
                      "end": 2324
                    },
                    "start": 2304,
                    "end": 2324
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
                      "start": 2329,
                      "end": 2330
                    },
                    "typeArguments": null,
                    "start": 2329,
                    "end": 2330
                  },
                  "start": 2326,
                  "end": 2330
                },
                "start": 2293,
                "end": 2330
              },
              "start": 2291,
              "end": 2330
            },
            "start": 2286,
            "end": 2330
          },
          "init": null,
          "definite": false,
          "start": 2286,
          "end": 2330
        }
      ],
      "declare": false,
      "start": 2282,
      "end": 2331
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
            "name": "r5arg2",
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
                        "start": 2349,
                        "end": 2350
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2349,
                      "end": 2350
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2352,
                        "end": 2353
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2352,
                      "end": 2353
                    }
                  ],
                  "start": 2348,
                  "end": 2354
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
                                  "start": 2368,
                                  "end": 2369
                                },
                                "typeArguments": null,
                                "start": 2368,
                                "end": 2369
                              },
                              "start": 2366,
                              "end": 2369
                            },
                            "start": 2363,
                            "end": 2369
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
                              "start": 2374,
                              "end": 2375
                            },
                            "typeArguments": null,
                            "start": 2374,
                            "end": 2375
                          },
                          "start": 2371,
                          "end": 2375
                        },
                        "start": 2358,
                        "end": 2375
                      },
                      "start": 2356,
                      "end": 2375
                    },
                    "start": 2355,
                    "end": 2375
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
                      "start": 2380,
                      "end": 2381
                    },
                    "typeArguments": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "start": 2377,
                  "end": 2381
                },
                "start": 2344,
                "end": 2381
              },
              "start": 2342,
              "end": 2381
            },
            "start": 2336,
            "end": 2381
          },
          "init": null,
          "definite": false,
          "start": 2336,
          "end": 2381
        }
      ],
      "declare": false,
      "start": 2332,
      "end": 2382
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
            "start": 2387,
            "end": 2389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2392,
              "end": 2396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2397,
                "end": 2402
              }
            ],
            "optional": false,
            "start": 2392,
            "end": 2403
          },
          "definite": false,
          "start": 2387,
          "end": 2403
        }
      ],
      "declare": false,
      "start": 2383,
      "end": 2404
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
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2409,
            "end": 2412
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2416,
                "end": 2421
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2423,
                "end": 2429
              }
            ],
            "start": 2415,
            "end": 2430
          },
          "definite": false,
          "start": 2409,
          "end": 2430
        }
      ],
      "declare": false,
      "start": 2405,
      "end": 2431
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
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2436,
            "end": 2439
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2443,
                "end": 2449
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2451,
                "end": 2456
              }
            ],
            "start": 2442,
            "end": 2457
          },
          "definite": false,
          "start": 2436,
          "end": 2457
        }
      ],
      "declare": false,
      "start": 2432,
      "end": 2458
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
            "name": "r6arg",
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
                        "start": 2476,
                        "end": 2477
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2486,
                          "end": 2490
                        },
                        "typeArguments": null,
                        "start": 2486,
                        "end": 2490
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2476,
                      "end": 2490
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2492,
                        "end": 2493
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2502,
                          "end": 2509
                        },
                        "typeArguments": null,
                        "start": 2502,
                        "end": 2509
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2492,
                      "end": 2509
                    }
                  ],
                  "start": 2475,
                  "end": 2510
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
                                  "start": 2524,
                                  "end": 2525
                                },
                                "typeArguments": null,
                                "start": 2524,
                                "end": 2525
                              },
                              "start": 2522,
                              "end": 2525
                            },
                            "start": 2519,
                            "end": 2525
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
                              "start": 2530,
                              "end": 2531
                            },
                            "typeArguments": null,
                            "start": 2530,
                            "end": 2531
                          },
                          "start": 2527,
                          "end": 2531
                        },
                        "start": 2514,
                        "end": 2531
                      },
                      "start": 2512,
                      "end": 2531
                    },
                    "start": 2511,
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2536,
                      "end": 2537
                    },
                    "typeArguments": null,
                    "start": 2536,
                    "end": 2537
                  },
                  "start": 2533,
                  "end": 2537
                },
                "start": 2471,
                "end": 2537
              },
              "start": 2469,
              "end": 2537
            },
            "start": 2464,
            "end": 2537
          },
          "init": null,
          "definite": false,
          "start": 2464,
          "end": 2537
        }
      ],
      "declare": false,
      "start": 2460,
      "end": 2538
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
            "name": "r6arg2",
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
                        "start": 2556,
                        "end": 2557
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2566,
                          "end": 2570
                        },
                        "typeArguments": null,
                        "start": 2566,
                        "end": 2570
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2556,
                      "end": 2570
                    }
                  ],
                  "start": 2555,
                  "end": 2571
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
                                  "start": 2585,
                                  "end": 2586
                                },
                                "typeArguments": null,
                                "start": 2585,
                                "end": 2586
                              },
                              "start": 2583,
                              "end": 2586
                            },
                            "start": 2580,
                            "end": 2586
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
                              "start": 2591,
                              "end": 2598
                            },
                            "typeArguments": null,
                            "start": 2591,
                            "end": 2598
                          },
                          "start": 2588,
                          "end": 2598
                        },
                        "start": 2575,
                        "end": 2598
                      },
                      "start": 2573,
                      "end": 2598
                    },
                    "start": 2572,
                    "end": 2598
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
                      "start": 2603,
                      "end": 2604
                    },
                    "typeArguments": null,
                    "start": 2603,
                    "end": 2604
                  },
                  "start": 2600,
                  "end": 2604
                },
                "start": 2551,
                "end": 2604
              },
              "start": 2549,
              "end": 2604
            },
            "start": 2543,
            "end": 2604
          },
          "init": null,
          "definite": false,
          "start": 2543,
          "end": 2604
        }
      ],
      "declare": false,
      "start": 2539,
      "end": 2605
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
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 2610,
            "end": 2612
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2615,
              "end": 2619
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2620,
                "end": 2625
              }
            ],
            "optional": false,
            "start": 2615,
            "end": 2626
          },
          "definite": false,
          "start": 2610,
          "end": 2626
        }
      ],
      "declare": false,
      "start": 2606,
      "end": 2627
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
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2632,
            "end": 2635
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2639,
                "end": 2644
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2646,
                "end": 2652
              }
            ],
            "start": 2638,
            "end": 2653
          },
          "definite": false,
          "start": 2632,
          "end": 2653
        }
      ],
      "declare": false,
      "start": 2628,
      "end": 2654
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
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2659,
            "end": 2662
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2666,
                "end": 2672
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2674,
                "end": 2679
              }
            ],
            "start": 2665,
            "end": 2680
          },
          "definite": false,
          "start": 2659,
          "end": 2680
        }
      ],
      "declare": false,
      "start": 2655,
      "end": 2681
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
            "name": "r11arg",
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
                        "start": 2700,
                        "end": 2701
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2700,
                      "end": 2701
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2703,
                        "end": 2704
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2703,
                      "end": 2704
                    }
                  ],
                  "start": 2699,
                  "end": 2705
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2711,
                              "end": 2714
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
                                  "start": 2716,
                                  "end": 2717
                                },
                                "typeArguments": null,
                                "start": 2716,
                                "end": 2717
                              },
                              "start": 2714,
                              "end": 2717
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2711,
                            "end": 2717
                          }
                        ],
                        "start": 2709,
                        "end": 2719
                      },
                      "start": 2707,
                      "end": 2719
                    },
                    "start": 2706,
                    "end": 2719
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
                              "start": 2726,
                              "end": 2729
                            },
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
                                  "start": 2731,
                                  "end": 2732
                                },
                                "typeArguments": null,
                                "start": 2731,
                                "end": 2732
                              },
                              "start": 2729,
                              "end": 2732
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2726,
                            "end": 2733
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
                              "start": 2734,
                              "end": 2737
                            },
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
                                  "start": 2739,
                                  "end": 2740
                                },
                                "typeArguments": null,
                                "start": 2739,
                                "end": 2740
                              },
                              "start": 2737,
                              "end": 2740
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2734,
                            "end": 2740
                          }
                        ],
                        "start": 2724,
                        "end": 2742
                      },
                      "start": 2722,
                      "end": 2742
                    },
                    "start": 2721,
                    "end": 2742
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
                      "start": 2747,
                      "end": 2751
                    },
                    "typeArguments": null,
                    "start": 2747,
                    "end": 2751
                  },
                  "start": 2744,
                  "end": 2751
                },
                "start": 2695,
                "end": 2751
              },
              "start": 2693,
              "end": 2751
            },
            "start": 2687,
            "end": 2751
          },
          "init": null,
          "definite": false,
          "start": 2687,
          "end": 2751
        }
      ],
      "declare": false,
      "start": 2683,
      "end": 2752
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
            "name": "r11arg2",
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
                        "start": 2771,
                        "end": 2772
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2771,
                      "end": 2772
                    }
                  ],
                  "start": 2770,
                  "end": 2773
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
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2779,
                              "end": 2782
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
                                  "start": 2784,
                                  "end": 2785
                                },
                                "typeArguments": null,
                                "start": 2784,
                                "end": 2785
                              },
                              "start": 2782,
                              "end": 2785
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2779,
                            "end": 2785
                          }
                        ],
                        "start": 2777,
                        "end": 2787
                      },
                      "start": 2775,
                      "end": 2787
                    },
                    "start": 2774,
                    "end": 2787
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
                              "start": 2794,
                              "end": 2797
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
                                  "start": 2799,
                                  "end": 2800
                                },
                                "typeArguments": null,
                                "start": 2799,
                                "end": 2800
                              },
                              "start": 2797,
                              "end": 2800
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2794,
                            "end": 2801
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
                              "start": 2802,
                              "end": 2805
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
                                  "start": 2807,
                                  "end": 2808
                                },
                                "typeArguments": null,
                                "start": 2807,
                                "end": 2808
                              },
                              "start": 2805,
                              "end": 2808
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2802,
                            "end": 2808
                          }
                        ],
                        "start": 2792,
                        "end": 2810
                      },
                      "start": 2790,
                      "end": 2810
                    },
                    "start": 2789,
                    "end": 2810
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
                      "start": 2815,
                      "end": 2819
                    },
                    "typeArguments": null,
                    "start": 2815,
                    "end": 2819
                  },
                  "start": 2812,
                  "end": 2819
                },
                "start": 2766,
                "end": 2819
              },
              "start": 2764,
              "end": 2819
            },
            "start": 2757,
            "end": 2819
          },
          "init": null,
          "definite": false,
          "start": 2757,
          "end": 2819
        }
      ],
      "declare": false,
      "start": 2753,
      "end": 2820
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
            "start": 2825,
            "end": 2828
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null,
              "start": 2831,
              "end": 2836
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2837,
                "end": 2843
              }
            ],
            "optional": false,
            "start": 2831,
            "end": 2844
          },
          "definite": false,
          "start": 2825,
          "end": 2844
        }
      ],
      "declare": false,
      "start": 2821,
      "end": 2845
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
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null,
            "start": 2850,
            "end": 2854
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2858,
                "end": 2864
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2866,
                "end": 2873
              }
            ],
            "start": 2857,
            "end": 2874
          },
          "definite": false,
          "start": 2850,
          "end": 2874
        }
      ],
      "declare": false,
      "start": 2846,
      "end": 2875
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
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null,
            "start": 2880,
            "end": 2884
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2895
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 2897,
                "end": 2903
              }
            ],
            "start": 2887,
            "end": 2904
          },
          "definite": false,
          "start": 2880,
          "end": 2904
        }
      ],
      "declare": false,
      "start": 2876,
      "end": 2905
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
            "name": "r15arg",
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2924,
                        "end": 2925
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2924,
                      "end": 2925
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2927,
                        "end": 2928
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2927,
                      "end": 2928
                    }
                  ],
                  "start": 2923,
                  "end": 2929
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
                              "start": 2935,
                              "end": 2936
                            },
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
                                  "start": 2938,
                                  "end": 2939
                                },
                                "typeArguments": null,
                                "start": 2938,
                                "end": 2939
                              },
                              "start": 2936,
                              "end": 2939
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2935,
                            "end": 2940
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
                              "start": 2941,
                              "end": 2942
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2944,
                                  "end": 2945
                                },
                                "typeArguments": null,
                                "start": 2944,
                                "end": 2945
                              },
                              "start": 2942,
                              "end": 2945
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2941,
                            "end": 2946
                          }
                        ],
                        "start": 2933,
                        "end": 2948
                      },
                      "start": 2931,
                      "end": 2948
                    },
                    "start": 2930,
                    "end": 2948
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
                        "start": 2953,
                        "end": 2954
                      },
                      "typeArguments": null,
                      "start": 2953,
                      "end": 2954
                    },
                    "start": 2953,
                    "end": 2956
                  },
                  "start": 2950,
                  "end": 2956
                },
                "start": 2919,
                "end": 2956
              },
              "start": 2917,
              "end": 2956
            },
            "start": 2911,
            "end": 2956
          },
          "init": null,
          "definite": false,
          "start": 2911,
          "end": 2956
        }
      ],
      "declare": false,
      "start": 2907,
      "end": 2957
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
            "name": "r15arg2",
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
                        "start": 2976,
                        "end": 2977
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2976,
                      "end": 2977
                    }
                  ],
                  "start": 2975,
                  "end": 2978
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
                              "start": 2984,
                              "end": 2985
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
                            "accessibility": null,
                            "static": false,
                            "start": 2984,
                            "end": 2989
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
                              "start": 2990,
                              "end": 2991
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
                                  "start": 2993,
                                  "end": 2994
                                },
                                "typeArguments": null,
                                "start": 2993,
                                "end": 2994
                              },
                              "start": 2991,
                              "end": 2994
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2990,
                            "end": 2994
                          }
                        ],
                        "start": 2982,
                        "end": 2996
                      },
                      "start": 2980,
                      "end": 2996
                    },
                    "start": 2979,
                    "end": 2996
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
                        "start": 3001,
                        "end": 3002
                      },
                      "typeArguments": null,
                      "start": 3001,
                      "end": 3002
                    },
                    "start": 3001,
                    "end": 3004
                  },
                  "start": 2998,
                  "end": 3004
                },
                "start": 2971,
                "end": 3004
              },
              "start": 2969,
              "end": 3004
            },
            "start": 2962,
            "end": 3004
          },
          "init": null,
          "definite": false,
          "start": 2962,
          "end": 3004
        }
      ],
      "declare": false,
      "start": 2958,
      "end": 3005
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
            "name": "r15",
            "optional": false,
            "typeAnnotation": null,
            "start": 3010,
            "end": 3013
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3016,
              "end": 3021
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3022,
                "end": 3028
              }
            ],
            "optional": false,
            "start": 3016,
            "end": 3029
          },
          "definite": false,
          "start": 3010,
          "end": 3029
        }
      ],
      "declare": false,
      "start": 3006,
      "end": 3030
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
            "name": "r15a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3035,
            "end": 3039
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3043,
                "end": 3049
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3051,
                "end": 3058
              }
            ],
            "start": 3042,
            "end": 3059
          },
          "definite": false,
          "start": 3035,
          "end": 3059
        }
      ],
      "declare": false,
      "start": 3031,
      "end": 3060
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
            "name": "r15b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3065,
            "end": 3069
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3073,
                "end": 3080
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3082,
                "end": 3088
              }
            ],
            "start": 3072,
            "end": 3089
          },
          "definite": false,
          "start": 3065,
          "end": 3089
        }
      ],
      "declare": false,
      "start": 3061,
      "end": 3090
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
            "name": "r16arg",
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
                        "start": 3109,
                        "end": 3110
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3119,
                          "end": 3123
                        },
                        "typeArguments": null,
                        "start": 3119,
                        "end": 3123
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3109,
                      "end": 3123
                    }
                  ],
                  "start": 3108,
                  "end": 3124
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
                              "start": 3130,
                              "end": 3131
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
                                  "start": 3133,
                                  "end": 3134
                                },
                                "typeArguments": null,
                                "start": 3133,
                                "end": 3134
                              },
                              "start": 3131,
                              "end": 3134
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3130,
                            "end": 3135
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
                              "start": 3136,
                              "end": 3137
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
                                  "start": 3139,
                                  "end": 3140
                                },
                                "typeArguments": null,
                                "start": 3139,
                                "end": 3140
                              },
                              "start": 3137,
                              "end": 3140
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3136,
                            "end": 3140
                          }
                        ],
                        "start": 3128,
                        "end": 3142
                      },
                      "start": 3126,
                      "end": 3142
                    },
                    "start": 3125,
                    "end": 3142
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
                        "start": 3147,
                        "end": 3148
                      },
                      "typeArguments": null,
                      "start": 3147,
                      "end": 3148
                    },
                    "start": 3147,
                    "end": 3150
                  },
                  "start": 3144,
                  "end": 3150
                },
                "start": 3104,
                "end": 3150
              },
              "start": 3102,
              "end": 3150
            },
            "start": 3096,
            "end": 3150
          },
          "init": null,
          "definite": false,
          "start": 3096,
          "end": 3150
        }
      ],
      "declare": false,
      "start": 3092,
      "end": 3151
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
            "name": "r16arg2",
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
                        "start": 3170,
                        "end": 3171
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3180,
                          "end": 3184
                        },
                        "typeArguments": null,
                        "start": 3180,
                        "end": 3184
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3170,
                      "end": 3184
                    }
                  ],
                  "start": 3169,
                  "end": 3185
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
                              "start": 3191,
                              "end": 3192
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
                                  "start": 3194,
                                  "end": 3195
                                },
                                "typeArguments": null,
                                "start": 3194,
                                "end": 3195
                              },
                              "start": 3192,
                              "end": 3195
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3191,
                            "end": 3196
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
                              "start": 3197,
                              "end": 3198
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
                                  "start": 3200,
                                  "end": 3201
                                },
                                "typeArguments": null,
                                "start": 3200,
                                "end": 3201
                              },
                              "start": 3198,
                              "end": 3201
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3197,
                            "end": 3201
                          }
                        ],
                        "start": 3189,
                        "end": 3203
                      },
                      "start": 3187,
                      "end": 3203
                    },
                    "start": 3186,
                    "end": 3203
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
                        "start": 3208,
                        "end": 3209
                      },
                      "typeArguments": null,
                      "start": 3208,
                      "end": 3209
                    },
                    "start": 3208,
                    "end": 3211
                  },
                  "start": 3205,
                  "end": 3211
                },
                "start": 3165,
                "end": 3211
              },
              "start": 3163,
              "end": 3211
            },
            "start": 3156,
            "end": 3211
          },
          "init": null,
          "definite": false,
          "start": 3156,
          "end": 3211
        }
      ],
      "declare": false,
      "start": 3152,
      "end": 3212
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
            "name": "r16",
            "optional": false,
            "typeAnnotation": null,
            "start": 3217,
            "end": 3220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3223,
              "end": 3228
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3229,
                "end": 3235
              }
            ],
            "optional": false,
            "start": 3223,
            "end": 3236
          },
          "definite": false,
          "start": 3217,
          "end": 3236
        }
      ],
      "declare": false,
      "start": 3213,
      "end": 3237
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
            "name": "r16a",
            "optional": false,
            "typeAnnotation": null,
            "start": 3242,
            "end": 3246
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3250,
                "end": 3256
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3258,
                "end": 3265
              }
            ],
            "start": 3249,
            "end": 3266
          },
          "definite": false,
          "start": 3242,
          "end": 3266
        }
      ],
      "declare": false,
      "start": 3238,
      "end": 3267
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
            "name": "r16b",
            "optional": false,
            "typeAnnotation": null,
            "start": 3272,
            "end": 3276
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3287
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3289,
                "end": 3295
              }
            ],
            "start": 3279,
            "end": 3296
          },
          "definite": false,
          "start": 3272,
          "end": 3296
        }
      ],
      "declare": false,
      "start": 3268,
      "end": 3297
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
            "name": "r17arg",
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
                        "start": 3316,
                        "end": 3317
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3316,
                      "end": 3317
                    }
                  ],
                  "start": 3315,
                  "end": 3318
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
                                  "start": 3330,
                                  "end": 3331
                                },
                                "typeArguments": null,
                                "start": 3330,
                                "end": 3331
                              },
                              "start": 3328,
                              "end": 3331
                            },
                            "start": 3327,
                            "end": 3331
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
                              "start": 3336,
                              "end": 3337
                            },
                            "typeArguments": null,
                            "start": 3336,
                            "end": 3337
                          },
                          "start": 3333,
                          "end": 3337
                        },
                        "start": 3322,
                        "end": 3337
                      },
                      "start": 3320,
                      "end": 3337
                    },
                    "start": 3319,
                    "end": 3337
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
                        "start": 3342,
                        "end": 3343
                      },
                      "typeArguments": null,
                      "start": 3342,
                      "end": 3343
                    },
                    "start": 3342,
                    "end": 3345
                  },
                  "start": 3339,
                  "end": 3345
                },
                "start": 3311,
                "end": 3345
              },
              "start": 3309,
              "end": 3345
            },
            "start": 3303,
            "end": 3345
          },
          "init": null,
          "definite": false,
          "start": 3303,
          "end": 3345
        }
      ],
      "declare": false,
      "start": 3299,
      "end": 3346
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
            "name": "r17",
            "optional": false,
            "typeAnnotation": null,
            "start": 3351,
            "end": 3354
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3357,
              "end": 3362
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r17arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3363,
                "end": 3369
              }
            ],
            "optional": false,
            "start": 3357,
            "end": 3370
          },
          "definite": false,
          "start": 3351,
          "end": 3370
        }
      ],
      "declare": false,
      "start": 3347,
      "end": 3371
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
            "name": "r18arg",
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
                                "start": 3398,
                                "end": 3399
                              },
                              "constraint": null,
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 3398,
                              "end": 3399
                            }
                          ],
                          "start": 3397,
                          "end": 3400
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
                                  "start": 3404,
                                  "end": 3405
                                },
                                "typeArguments": null,
                                "start": 3404,
                                "end": 3405
                              },
                              "start": 3402,
                              "end": 3405
                            },
                            "start": 3401,
                            "end": 3405
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
                              "start": 3410,
                              "end": 3411
                            },
                            "typeArguments": null,
                            "start": 3410,
                            "end": 3411
                          },
                          "start": 3407,
                          "end": 3411
                        },
                        "start": 3393,
                        "end": 3411
                      },
                      "start": 3391,
                      "end": 3411
                    },
                    "start": 3390,
                    "end": 3411
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3416,
                      "end": 3419
                    },
                    "start": 3416,
                    "end": 3421
                  },
                  "start": 3413,
                  "end": 3421
                },
                "start": 3385,
                "end": 3421
              },
              "start": 3383,
              "end": 3421
            },
            "start": 3377,
            "end": 3421
          },
          "init": null,
          "definite": false,
          "start": 3377,
          "end": 3421
        }
      ],
      "declare": false,
      "start": 3373,
      "end": 3422
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
            "name": "r18",
            "optional": false,
            "typeAnnotation": null,
            "start": 3427,
            "end": 3430
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3433,
              "end": 3438
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r18arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 3439,
                "end": 3445
              }
            ],
            "optional": false,
            "start": 3433,
            "end": 3446
          },
          "definite": false,
          "start": 3427,
          "end": 3446
        }
      ],
      "declare": false,
      "start": 3423,
      "end": 3447
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 3447
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 102,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 130,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 136,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 144,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 159,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 164,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 174,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 180,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 207,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 212,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "OtherDerived",
    "start": 228,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 241,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 249,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "bing",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 273,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 290,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 312,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 321,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 338,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 346,
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
    "value": ":",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 352,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 358,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 366,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 375,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 380,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 398,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 412,
    "end": 419
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 420,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 429,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 449,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 457,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 489,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 499,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 516,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 530,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 536,
    "end": 543
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 544,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 553,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 558,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 579,
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
    "value": "U",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 585,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 588,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 597,
    "end": 604
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 605,
    "end": 613
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 614,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 622,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 625,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 626,
    "end": 627
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 628,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 634,
    "end": 641
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 642,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 651,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "a5",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 660,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 664,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 669,
    "end": 670
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 671,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 672,
    "end": 673
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 674,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 678,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 679,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 685,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 687,
    "end": 689
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "type": "Identifier",
    "value": "T",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 700,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 708,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 717,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 725,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "any",
    "start": 731,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 737,
    "end": 744
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 745,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 754,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a6",
    "start": 759,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 763,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 767,
    "end": 768
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 768,
    "end": 769
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 770,
    "end": 777
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 778,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 782,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 783,
    "end": 784
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 784,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 787,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 791,
    "end": 792
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 792,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 795,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 800,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 803,
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
    "value": "=>",
    "start": 812,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 815,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 819,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 827,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 836,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 842,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 844,
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
    "value": ":",
    "start": 848,
    "end": 849
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 850,
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
    "start": 856,
    "end": 863
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 864,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 873,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 878,
    "end": 879
  },
  {
    "type": "Identifier",
    "value": "a11",
    "start": 879,
    "end": 882
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 884,
    "end": 887
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 889,
    "end": 890
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 890,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 897,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 902,
    "end": 903
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 905,
    "end": 906
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 907,
    "end": 908
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Identifier",
    "value": "foo",
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
    "type": "Identifier",
    "value": "T",
    "start": 917,
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
    "value": "T",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 927,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 928,
    "end": 929
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 930,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 933,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 937,
    "end": 938
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 938,
    "end": 939
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 940,
    "end": 947
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 948,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 957,
    "end": 962
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 962,
    "end": 963
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 963,
    "end": 964
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 964,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 966,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 969,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 970,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 972,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 975,
    "end": 976
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 978,
    "end": 985
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 986,
    "end": 994
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 995,
    "end": 1000
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1000,
    "end": 1001
  },
  {
    "type": "Identifier",
    "value": "a15",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1004,
    "end": 1005
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1006,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1010,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1020,
    "end": 1021
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1022,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1033,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1042,
    "end": 1049
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1050,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1059,
    "end": 1064
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1064,
    "end": 1065
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1065,
    "end": 1066
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1066,
    "end": 1067
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1071,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1074,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1080,
    "end": 1087
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1088,
    "end": 1096
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1097,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1102,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "a16",
    "start": 1103,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1115,
    "end": 1122
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1123,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1127,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1137,
    "end": 1138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1138,
    "end": 1139
  },
  {
    "type": "Identifier",
    "value": "b",
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
    "value": "T",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1146,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1148,
    "end": 1150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": ";",
    "start": 1155,
    "end": 1156
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1157,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1165,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 1174,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 1183,
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
    "value": "any",
    "start": 1189,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1195,
    "end": 1202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1203,
    "end": 1211
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1212,
    "end": 1217
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "a17",
    "start": 1218,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1221,
    "end": 1222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1229,
    "end": 1232
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1233,
    "end": 1234
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1236,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1244,
    "end": 1251
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1254,
    "end": 1255
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1256,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1265,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1267,
    "end": 1269
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1283,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1290,
    "end": 1297
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1298,
    "end": 1302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1307,
    "end": 1310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1311,
    "end": 1312
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1318,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1328,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1342,
    "end": 1349
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1350,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 1359,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "any",
    "start": 1368,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1374,
    "end": 1377
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1377,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1380,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1388,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 1397,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "a18",
    "start": 1403,
    "end": 1406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1406,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1408,
    "end": 1409
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1414,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1432,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1439,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1447,
    "end": 1454
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1454,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1463,
    "end": 1464
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1464,
    "end": 1465
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1474,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1479,
    "end": 1480
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1481,
    "end": 1488
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1489,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1493,
    "end": 1494
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
    "value": "T",
    "start": 1498,
    "end": 1499
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1500,
    "end": 1501
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1502,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1511,
    "end": 1512
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1513,
    "end": 1516
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1516,
    "end": 1517
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1517,
    "end": 1518
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1518,
    "end": 1519
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1524,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1528,
    "end": 1529
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1529,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1532,
    "end": 1533
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1542,
    "end": 1545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1546,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1549,
    "end": 1556
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1557,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1565,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1567,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1570,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1574,
    "end": 1575
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1575,
    "end": 1576
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1585,
    "end": 1588
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1589,
    "end": 1590
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1592,
    "end": 1599
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1600,
    "end": 1604
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "T",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Punctuator",
    "value": "}",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1622,
    "end": 1623
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1624,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1631,
    "end": 1632
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1635,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1643,
    "end": 1651
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 1652,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1657,
    "end": 1658
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1661,
    "end": 1664
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1664,
    "end": 1665
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1665,
    "end": 1666
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1667,
    "end": 1670
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1670,
    "end": 1671
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1673,
    "end": 1676
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1677,
    "end": 1682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1684,
    "end": 1687
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1688,
    "end": 1689
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1689,
    "end": 1690
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1690,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1695,
    "end": 1696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1696,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1698,
    "end": 1700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1701,
    "end": 1702
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1702,
    "end": 1703
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1703,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1706,
    "end": 1709
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1710,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1718,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1722,
    "end": 1723
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1723,
    "end": 1724
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1724,
    "end": 1725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1725,
    "end": 1726
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1726,
    "end": 1727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1727,
    "end": 1728
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1732,
    "end": 1734
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1738,
    "end": 1739
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1740,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "r1",
    "start": 1744,
    "end": 1746
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1747,
    "end": 1748
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1749,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1754,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1760,
    "end": 1761
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1762,
    "end": 1765
  },
  {
    "type": "Identifier",
    "value": "r1a",
    "start": 1766,
    "end": 1769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1770,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1773,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1780,
    "end": 1786
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1789,
    "end": 1792
  },
  {
    "type": "Identifier",
    "value": "r1b",
    "start": 1793,
    "end": 1796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1797,
    "end": 1798
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1799,
    "end": 1800
  },
  {
    "type": "Identifier",
    "value": "r1arg2",
    "start": 1800,
    "end": 1806
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1806,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "r1arg",
    "start": 1808,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1814,
    "end": 1815
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1817,
    "end": 1820
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1821,
    "end": 1826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1826,
    "end": 1827
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1828,
    "end": 1831
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1833,
    "end": 1834
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1836,
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
    "value": "T",
    "start": 1839,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1842,
    "end": 1844
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1845,
    "end": 1851
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1851,
    "end": 1852
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1852,
    "end": 1853
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1853,
    "end": 1854
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1855,
    "end": 1858
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1859,
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
    "value": "string",
    "start": 1884,
    "end": 1890
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1890,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1894,
    "end": 1897
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 1898,
    "end": 1900
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1903,
    "end": 1907
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1907,
    "end": 1908
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1908,
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
    "value": ";",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1916,
    "end": 1919
  },
  {
    "type": "Identifier",
    "value": "r2a",
    "start": 1920,
    "end": 1923
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1924,
    "end": 1925
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1926,
    "end": 1927
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1927,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1934,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1941,
    "end": 1942
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1943,
    "end": 1946
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 1947,
    "end": 1950
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1951,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "r2arg2",
    "start": 1954,
    "end": 1960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1960,
    "end": 1961
  },
  {
    "type": "Identifier",
    "value": "r2arg",
    "start": 1962,
    "end": 1967
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1968,
    "end": 1969
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1971,
    "end": 1974
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 1975,
    "end": 1980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1980,
    "end": 1981
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1982,
    "end": 1985
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1986,
    "end": 1987
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1987,
    "end": 1988
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1988,
    "end": 1989
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1990,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1993,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1996,
    "end": 1998
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1999,
    "end": 2000
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2000,
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
    "value": "r3arg2",
    "start": 2006,
    "end": 2012
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2012,
    "end": 2013
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2014,
    "end": 2017
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2019,
    "end": 2020
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2020,
    "end": 2021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "void",
    "start": 2031,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2037,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 2041,
    "end": 2043
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2044,
    "end": 2045
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 2046,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2051,
    "end": 2056
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2056,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2059,
    "end": 2062
  },
  {
    "type": "Identifier",
    "value": "r3a",
    "start": 2063,
    "end": 2066
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2069,
    "end": 2070
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2070,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2077,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2086,
    "end": 2089
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 2090,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2094,
    "end": 2095
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2096,
    "end": 2097
  },
  {
    "type": "Identifier",
    "value": "r3arg2",
    "start": 2097,
    "end": 2103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2103,
    "end": 2104
  },
  {
    "type": "Identifier",
    "value": "r3arg",
    "start": 2105,
    "end": 2110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2110,
    "end": 2111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2111,
    "end": 2112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2114,
    "end": 2117
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2118,
    "end": 2123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2123,
    "end": 2124
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2125,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2133,
    "end": 2134
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2134,
    "end": 2135
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2135,
    "end": 2136
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": ",",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2142,
    "end": 2143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2143,
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
    "value": ")",
    "start": 2146,
    "end": 2147
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2148,
    "end": 2150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2151,
    "end": 2157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2157,
    "end": 2158
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2159,
    "end": 2162
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2163,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2171,
    "end": 2174
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2175,
    "end": 2176
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2179,
    "end": 2180
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2180,
    "end": 2181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2181,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2182,
    "end": 2183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2183,
    "end": 2184
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2186,
    "end": 2187
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2191,
    "end": 2192
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2192,
    "end": 2193
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2194,
    "end": 2196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2197,
    "end": 2203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2203,
    "end": 2204
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2205,
    "end": 2208
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 2209,
    "end": 2211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2212,
    "end": 2213
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 2214,
    "end": 2218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2218,
    "end": 2219
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2219,
    "end": 2224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2224,
    "end": 2225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2225,
    "end": 2226
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2227,
    "end": 2230
  },
  {
    "type": "Identifier",
    "value": "r4a",
    "start": 2231,
    "end": 2234
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2235,
    "end": 2236
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2237,
    "end": 2238
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2238,
    "end": 2243
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2243,
    "end": 2244
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2245,
    "end": 2251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2251,
    "end": 2252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2252,
    "end": 2253
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2254,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "r4b",
    "start": 2258,
    "end": 2261
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2262,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Identifier",
    "value": "r4arg2",
    "start": 2265,
    "end": 2271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2271,
    "end": 2272
  },
  {
    "type": "Identifier",
    "value": "r4arg",
    "start": 2273,
    "end": 2278
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2278,
    "end": 2279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2279,
    "end": 2280
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2282,
    "end": 2285
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2286,
    "end": 2291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2293,
    "end": 2296
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2297,
    "end": 2298
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2298,
    "end": 2299
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2299,
    "end": 2300
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2301,
    "end": 2302
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2302,
    "end": 2303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2303,
    "end": 2304
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2304,
    "end": 2305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2305,
    "end": 2306
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2307,
    "end": 2310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2311,
    "end": 2312
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2312,
    "end": 2315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2317,
    "end": 2318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2318,
    "end": 2319
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2320,
    "end": 2322
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2323,
    "end": 2324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2324,
    "end": 2325
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2330,
    "end": 2331
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2332,
    "end": 2335
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2336,
    "end": 2342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2342,
    "end": 2343
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2344,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2352,
    "end": 2353
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2353,
    "end": 2354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2354,
    "end": 2355
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2355,
    "end": 2356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2356,
    "end": 2357
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2358,
    "end": 2361
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2362,
    "end": 2363
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2363,
    "end": 2366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2366,
    "end": 2367
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2368,
    "end": 2369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2371,
    "end": 2373
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2374,
    "end": 2375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2375,
    "end": 2376
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2377,
    "end": 2379
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2380,
    "end": 2381
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2381,
    "end": 2382
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2383,
    "end": 2386
  },
  {
    "type": "Identifier",
    "value": "r5",
    "start": 2387,
    "end": 2389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2390,
    "end": 2391
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 2392,
    "end": 2396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2396,
    "end": 2397
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2397,
    "end": 2402
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2402,
    "end": 2403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2403,
    "end": 2404
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2405,
    "end": 2408
  },
  {
    "type": "Identifier",
    "value": "r5a",
    "start": 2409,
    "end": 2412
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2413,
    "end": 2414
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2415,
    "end": 2416
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2416,
    "end": 2421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2421,
    "end": 2422
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2423,
    "end": 2429
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2429,
    "end": 2430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2432,
    "end": 2435
  },
  {
    "type": "Identifier",
    "value": "r5b",
    "start": 2436,
    "end": 2439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2440,
    "end": 2441
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2442,
    "end": 2443
  },
  {
    "type": "Identifier",
    "value": "r5arg2",
    "start": 2443,
    "end": 2449
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2449,
    "end": 2450
  },
  {
    "type": "Identifier",
    "value": "r5arg",
    "start": 2451,
    "end": 2456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2456,
    "end": 2457
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2457,
    "end": 2458
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2460,
    "end": 2463
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2464,
    "end": 2469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2469,
    "end": 2470
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2471,
    "end": 2474
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2475,
    "end": 2476
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2476,
    "end": 2477
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2478,
    "end": 2485
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2486,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2490,
    "end": 2491
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2494,
    "end": 2501
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2502,
    "end": 2509
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2509,
    "end": 2510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2510,
    "end": 2511
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2511,
    "end": 2512
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2512,
    "end": 2513
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2514,
    "end": 2517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2518,
    "end": 2519
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2519,
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
    "value": ")",
    "start": 2525,
    "end": 2526
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2527,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "U",
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
    "value": "=>",
    "start": 2533,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2537,
    "end": 2538
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2539,
    "end": 2542
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2543,
    "end": 2549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2549,
    "end": 2550
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2551,
    "end": 2554
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2555,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2556,
    "end": 2557
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2558,
    "end": 2565
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2566,
    "end": 2570
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2570,
    "end": 2571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2571,
    "end": 2572
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Keyword",
    "value": "new",
    "start": 2575,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2579,
    "end": 2580
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 2580,
    "end": 2583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2583,
    "end": 2584
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2585,
    "end": 2586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2586,
    "end": 2587
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2588,
    "end": 2590
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 2591,
    "end": 2598
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2600,
    "end": 2602
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2603,
    "end": 2604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2604,
    "end": 2605
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2606,
    "end": 2609
  },
  {
    "type": "Identifier",
    "value": "r6",
    "start": 2610,
    "end": 2612
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2613,
    "end": 2614
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 2615,
    "end": 2619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2619,
    "end": 2620
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2620,
    "end": 2625
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2625,
    "end": 2626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2626,
    "end": 2627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2628,
    "end": 2631
  },
  {
    "type": "Identifier",
    "value": "r6a",
    "start": 2632,
    "end": 2635
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2638,
    "end": 2639
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2639,
    "end": 2644
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2644,
    "end": 2645
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2646,
    "end": 2652
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2652,
    "end": 2653
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2655,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "r6b",
    "start": 2659,
    "end": 2662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2663,
    "end": 2664
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Identifier",
    "value": "r6arg2",
    "start": 2666,
    "end": 2672
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2672,
    "end": 2673
  },
  {
    "type": "Identifier",
    "value": "r6arg",
    "start": 2674,
    "end": 2679
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2679,
    "end": 2680
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2680,
    "end": 2681
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2683,
    "end": 2686
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2687,
    "end": 2693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2693,
    "end": 2694
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2695,
    "end": 2698
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2699,
    "end": 2700
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2701,
    "end": 2702
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2703,
    "end": 2704
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2704,
    "end": 2705
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2705,
    "end": 2706
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2706,
    "end": 2707
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2709,
    "end": 2710
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2711,
    "end": 2714
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2714,
    "end": 2715
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2718,
    "end": 2719
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2719,
    "end": 2720
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2721,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2726,
    "end": 2729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2729,
    "end": 2730
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2731,
    "end": 2732
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2732,
    "end": 2733
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2734,
    "end": 2737
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2737,
    "end": 2738
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2739,
    "end": 2740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2741,
    "end": 2742
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2742,
    "end": 2743
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2744,
    "end": 2746
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2747,
    "end": 2751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2753,
    "end": 2756
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 2757,
    "end": 2764
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2766,
    "end": 2769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2770,
    "end": 2771
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2771,
    "end": 2772
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2772,
    "end": 2773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2773,
    "end": 2774
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2774,
    "end": 2775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2775,
    "end": 2776
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2777,
    "end": 2778
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2779,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2784,
    "end": 2785
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2787,
    "end": 2788
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2789,
    "end": 2790
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2790,
    "end": 2791
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2792,
    "end": 2793
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 2794,
    "end": 2797
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2797,
    "end": 2798
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2799,
    "end": 2800
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2800,
    "end": 2801
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 2802,
    "end": 2805
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2805,
    "end": 2806
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2807,
    "end": 2808
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2809,
    "end": 2810
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2812,
    "end": 2814
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 2815,
    "end": 2819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2819,
    "end": 2820
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2821,
    "end": 2824
  },
  {
    "type": "Identifier",
    "value": "r11",
    "start": 2825,
    "end": 2828
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2829,
    "end": 2830
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 2831,
    "end": 2836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2837,
    "end": 2843
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "var",
    "start": 2846,
    "end": 2849
  },
  {
    "type": "Identifier",
    "value": "r11a",
    "start": 2850,
    "end": 2854
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2855,
    "end": 2856
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "r11arg",
    "start": 2858,
    "end": 2864
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2864,
    "end": 2865
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
    "start": 2866,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2874,
    "end": 2875
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2876,
    "end": 2879
  },
  {
    "type": "Identifier",
    "value": "r11b",
    "start": 2880,
    "end": 2884
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2885,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Identifier",
    "value": "r11arg2",
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
    "value": "r11arg",
    "start": 2897,
    "end": 2903
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2903,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2907,
    "end": 2910
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 2911,
    "end": 2917
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2917,
    "end": 2918
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2919,
    "end": 2922
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2923,
    "end": 2924
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2924,
    "end": 2925
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2925,
    "end": 2926
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2927,
    "end": 2928
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2928,
    "end": 2929
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2929,
    "end": 2930
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2930,
    "end": 2931
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2931,
    "end": 2932
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2933,
    "end": 2934
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2935,
    "end": 2936
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2936,
    "end": 2937
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2938,
    "end": 2939
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2939,
    "end": 2940
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 2944,
    "end": 2945
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2945,
    "end": 2946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2947,
    "end": 2948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2948,
    "end": 2949
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2950,
    "end": 2952
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2954,
    "end": 2955
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2958,
    "end": 2961
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 2962,
    "end": 2969
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2969,
    "end": 2970
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2971,
    "end": 2974
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2975,
    "end": 2976
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2976,
    "end": 2977
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2977,
    "end": 2978
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2978,
    "end": 2979
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2979,
    "end": 2980
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2980,
    "end": 2981
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2982,
    "end": 2983
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": ";",
    "start": 2988,
    "end": 2989
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2990,
    "end": 2991
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2991,
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
    "value": "}",
    "start": 2995,
    "end": 2996
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2996,
    "end": 2997
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2998,
    "end": 3000
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3001,
    "end": 3002
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3002,
    "end": 3003
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3003,
    "end": 3004
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3006,
    "end": 3009
  },
  {
    "type": "Identifier",
    "value": "r15",
    "start": 3010,
    "end": 3013
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3014,
    "end": 3015
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 3016,
    "end": 3021
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3021,
    "end": 3022
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 3022,
    "end": 3028
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3028,
    "end": 3029
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3029,
    "end": 3030
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3031,
    "end": 3034
  },
  {
    "type": "Identifier",
    "value": "r15a",
    "start": 3035,
    "end": 3039
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3040,
    "end": 3041
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3042,
    "end": 3043
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 3043,
    "end": 3049
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3049,
    "end": 3050
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 3051,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3059,
    "end": 3060
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3061,
    "end": 3064
  },
  {
    "type": "Identifier",
    "value": "r15b",
    "start": 3065,
    "end": 3069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3070,
    "end": 3071
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "r15arg2",
    "start": 3073,
    "end": 3080
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3080,
    "end": 3081
  },
  {
    "type": "Identifier",
    "value": "r15arg",
    "start": 3082,
    "end": 3088
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3088,
    "end": 3089
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3089,
    "end": 3090
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3092,
    "end": 3095
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3096,
    "end": 3102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3102,
    "end": 3103
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3104,
    "end": 3107
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3108,
    "end": 3109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3109,
    "end": 3110
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3111,
    "end": 3118
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3119,
    "end": 3123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3123,
    "end": 3124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3124,
    "end": 3125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3125,
    "end": 3126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3126,
    "end": 3127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3128,
    "end": 3129
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3130,
    "end": 3131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3131,
    "end": 3132
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3133,
    "end": 3134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3134,
    "end": 3135
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3136,
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
    "value": "T",
    "start": 3139,
    "end": 3140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3141,
    "end": 3142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3142,
    "end": 3143
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3144,
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
    "value": "[",
    "start": 3148,
    "end": 3149
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3149,
    "end": 3150
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3150,
    "end": 3151
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3152,
    "end": 3155
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3156,
    "end": 3163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3163,
    "end": 3164
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3165,
    "end": 3168
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3169,
    "end": 3170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3170,
    "end": 3171
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3172,
    "end": 3179
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 3180,
    "end": 3184
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3184,
    "end": 3185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3186,
    "end": 3187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3187,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3191,
    "end": 3192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3192,
    "end": 3193
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Identifier",
    "value": "b",
    "start": 3197,
    "end": 3198
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3198,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3200,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3203,
    "end": 3204
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3205,
    "end": 3207
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3208,
    "end": 3209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3209,
    "end": 3210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3210,
    "end": 3211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3213,
    "end": 3216
  },
  {
    "type": "Identifier",
    "value": "r16",
    "start": 3217,
    "end": 3220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3221,
    "end": 3222
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 3223,
    "end": 3228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3228,
    "end": 3229
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3229,
    "end": 3235
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3235,
    "end": 3236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3236,
    "end": 3237
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3238,
    "end": 3241
  },
  {
    "type": "Identifier",
    "value": "r16a",
    "start": 3242,
    "end": 3246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3247,
    "end": 3248
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3249,
    "end": 3250
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3250,
    "end": 3256
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3256,
    "end": 3257
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3258,
    "end": 3265
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3265,
    "end": 3266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3266,
    "end": 3267
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3268,
    "end": 3271
  },
  {
    "type": "Identifier",
    "value": "r16b",
    "start": 3272,
    "end": 3276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3277,
    "end": 3278
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3279,
    "end": 3280
  },
  {
    "type": "Identifier",
    "value": "r16arg2",
    "start": 3280,
    "end": 3287
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3287,
    "end": 3288
  },
  {
    "type": "Identifier",
    "value": "r16arg",
    "start": 3289,
    "end": 3295
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3295,
    "end": 3296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3296,
    "end": 3297
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3299,
    "end": 3302
  },
  {
    "type": "Identifier",
    "value": "r17arg",
    "start": 3303,
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
    "value": "new",
    "start": 3311,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3315,
    "end": 3316
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3316,
    "end": 3317
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3317,
    "end": 3318
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3318,
    "end": 3319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3319,
    "end": 3320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3320,
    "end": 3321
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3322,
    "end": 3325
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3326,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3327,
    "end": 3328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3328,
    "end": 3329
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3331,
    "end": 3332
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3333,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3336,
    "end": 3337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3337,
    "end": 3338
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3339,
    "end": 3341
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3342,
    "end": 3343
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3343,
    "end": 3344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3344,
    "end": 3345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3345,
    "end": 3346
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3347,
    "end": 3350
  },
  {
    "type": "Identifier",
    "value": "r17",
    "start": 3351,
    "end": 3354
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3355,
    "end": 3356
  },
  {
    "type": "Identifier",
    "value": "foo17",
    "start": 3357,
    "end": 3362
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3362,
    "end": 3363
  },
  {
    "type": "Identifier",
    "value": "r17arg",
    "start": 3363,
    "end": 3369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3369,
    "end": 3370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3370,
    "end": 3371
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3373,
    "end": 3376
  },
  {
    "type": "Identifier",
    "value": "r18arg",
    "start": 3377,
    "end": 3383
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3383,
    "end": 3384
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3385,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3389,
    "end": 3390
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3390,
    "end": 3391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3391,
    "end": 3392
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3393,
    "end": 3396
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3397,
    "end": 3398
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3398,
    "end": 3399
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3399,
    "end": 3400
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3400,
    "end": 3401
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3401,
    "end": 3402
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3402,
    "end": 3403
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3404,
    "end": 3405
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3405,
    "end": 3406
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3407,
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
    "value": "any",
    "start": 3416,
    "end": 3419
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3419,
    "end": 3420
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3420,
    "end": 3421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3421,
    "end": 3422
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3423,
    "end": 3426
  },
  {
    "type": "Identifier",
    "value": "r18",
    "start": 3427,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "foo18",
    "start": 3433,
    "end": 3438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3438,
    "end": 3439
  },
  {
    "type": "Identifier",
    "value": "r18arg",
    "start": 3439,
    "end": 3445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3445,
    "end": 3446
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3446,
    "end": 3447
  }
]
```
